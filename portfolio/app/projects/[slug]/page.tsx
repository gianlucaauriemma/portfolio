import fs from "node:fs";
import path from "node:path";
import { projects } from "../../data/content";
import { ProjectClient } from "./ProjectClient";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

function readScreenshots(slug: string): string[] {
  const dir = path.join(process.cwd(), "public", "projects", slug);
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => /\.(png|jpe?g|webp|avif)$/i.test(f))
      .filter((f) => !/^cover\./i.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((f) => `/projects/${slug}/${f}`);
  } catch {
    return [];
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const screenshots = readScreenshots(slug);
  return <ProjectClient slug={slug} screenshots={screenshots} />;
}
