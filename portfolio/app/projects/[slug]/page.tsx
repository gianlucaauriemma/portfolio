import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { projects } from "../../data/content";
import { ProjectClient } from "./ProjectClient";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const description = `${project.tagline.en} — by Gianluca Auriemma. Built with ${project.stack.slice(0, 4).join(", ")}.`;
  const ogImage = `/projects/${slug}/01.png`;

  return {
    title: project.name,
    description,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      type: "article",
      title: `${project.name} — Gianluca Auriemma`,
      description,
      url: `/projects/${slug}`,
      images: [{ url: ogImage, alt: project.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — Gianluca Auriemma`,
      description,
      images: [ogImage],
    },
  };
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
