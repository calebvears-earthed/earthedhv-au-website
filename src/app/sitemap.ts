import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date("2026-11-10"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/the100`,
      lastModified: new Date("2026-11-16"),
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];
}
