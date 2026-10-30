import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/services", "/about", "/projects", "/contact"];
  return paths.map((path) => ({
    url: `${site.url}${path || "/"}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
