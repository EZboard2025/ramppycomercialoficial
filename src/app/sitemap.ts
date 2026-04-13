import type { MetadataRoute } from "next";
import posts from "@/data/blog-posts.json";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

const staticPaths = [
  "/",
  "/como-funciona",
  "/sobre",
  "/ajuda",
  "/metodologia-spin",
  "/contato",
  "/parceiros",
  "/legal",
  "/blog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const p of staticPaths) {
    const ptUrl = `${SITE_URL}${p === "/" ? "" : p}` || SITE_URL;
    const enUrl = `${SITE_URL}/en${p === "/" ? "" : p}`;
    const esUrl = `${SITE_URL}/es${p === "/" ? "" : p}`;
    const languages = { "pt-BR": ptUrl, en: enUrl, es: esUrl };
    entries.push({
      url: ptUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: p === "/" ? 1 : 0.8,
      alternates: { languages },
    });
    entries.push({
      url: enUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: p === "/" ? 0.9 : 0.7,
      alternates: { languages },
    });
    entries.push({
      url: esUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: p === "/" ? 0.9 : 0.7,
      alternates: { languages },
    });
  }

  for (const post of posts) {
    const ptUrl = `${SITE_URL}/blog/${post.slug}`;
    const enUrl = `${SITE_URL}/en/blog/${post.slug}`;
    const esUrl = `${SITE_URL}/es/blog/${post.slug}`;
    const languages = { "pt-BR": ptUrl, en: enUrl, es: esUrl };
    const lastMod = post.date ? new Date(post.date) : now;
    entries.push({ url: ptUrl, lastModified: lastMod, changeFrequency: "monthly", priority: 0.6, alternates: { languages } });
    entries.push({ url: enUrl, lastModified: lastMod, changeFrequency: "monthly", priority: 0.5, alternates: { languages } });
    entries.push({ url: esUrl, lastModified: lastMod, changeFrequency: "monthly", priority: 0.5, alternates: { languages } });
  }

  return entries;
}
