import type { Metadata } from "next";

export const SITE_URL = "https://ramppy.com";
export const DEFAULT_OG_IMAGE = "/images/Ramppy logo branca site.png";

export type Locale = "pt" | "en";

/**
 * Build complete metadata with canonical + hreflang alternates.
 * @param locale  current page locale
 * @param path    path relative to locale root, with leading slash. "/" for home, "/sobre" etc.
 * @param title   full page title (already including "| Ramppy" if desired)
 * @param description meta description
 * @param ogImage optional absolute URL or site-relative path
 */
export function buildMetadata({
  locale,
  path,
  title,
  description,
  ogImage,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  ogImage?: string;
}): Metadata {
  const normalized = path === "/" ? "" : path;
  const ptPath = `${SITE_URL}${normalized || "/"}`;
  const enPath = `${SITE_URL}/en${normalized || ""}` || `${SITE_URL}/en`;
  const canonical = locale === "en" ? enPath : ptPath;
  const image = ogImage ?? DEFAULT_OG_IMAGE;
  const ogType = locale === "en" ? "en_US" : "pt_BR";

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages: {
        "pt-BR": ptPath,
        en: enPath,
        "x-default": ptPath,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Ramppy",
      locale: ogType,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: "Ramppy" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
