import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/platforma`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/pos-leitourgei`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/gia-poion`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/times`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/epikoinonia`, changeFrequency: "monthly", priority: 0.8 },
  ];

  const articleEntries: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${baseUrl}/blog/${a.slug}`,
    lastModified: a.publishedAt,
    changeFrequency: "monthly",
    priority: a.type === "pillar" ? 0.9 : 0.7,
  }));

  return [...staticEntries, ...articleEntries];
}
