import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://elcheikh.me/",
      lastModified: new Date("2026-08-10"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
