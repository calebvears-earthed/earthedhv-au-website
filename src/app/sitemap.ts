import type { MetadataRoute } from "next";
import { allPaths, site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-11-02");
  return allPaths().map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified: updated,
    changeFrequency: path === "/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : path.split("/").length > 2 ? 0.6 : 0.8,
  }));
}
