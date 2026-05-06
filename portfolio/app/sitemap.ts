import type { MetadataRoute } from "next";
import { projects } from "./data/content";

export const dynamic = "force-static";

const SITE_URL = "https://gianlucaauriemma.altervista.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${SITE_URL}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectRoutes,
  ];
}
