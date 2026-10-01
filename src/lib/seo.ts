import type { Metadata } from "next";

export const SITE_URL = "https://ramppy.com";
export const DEFAULT_OG_IMAGE = "/images/Ramppy logo branca site.png";

export type Locale = "pt" | "en" | "es";

const localePrefix: Record<Locale, string> = { pt: "", en: "/en", es: "/es" };
const ogLocale: Record<Locale, string> = { pt: "pt_BR", en: "en_US", es: "es_ES" };

function buildUrl(locale: Locale, path: string): string {
  const prefix = localePrefix[locale];
  if (path === "/") return `${SITE_URL}${prefix || "/"}`;
  return `${SITE_URL}${prefix}${path}`;
}

/**
 * Build complete metadata with canonical + hreflang alternates for all supported locales.
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
  const ptUrl = buildUrl("pt", path);
  const enUrl = buildUrl("en", path);
  const esUrl = buildUrl("es", path);
  const canonical = buildUrl(locale, path);
  const image = ogImage ?? DEFAULT_OG_IMAGE;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages: {
        "pt-BR": ptUrl,
        en: enUrl,
        es: esUrl,
        "x-default": ptUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Ramppy",
      locale: ogLocale[locale],
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

type PostPerson = { name: string; role: string; image?: string; url?: string };
type PostVideo = { src: string; poster?: string; title: string; description?: string; duration?: string };

/** Pessoa de quem o post fala, como `about` do Article no schema.org. */
export function articlePersonLd(person?: PostPerson) {
  if (!person) return undefined;
  return {
    "@type": "Person",
    name: person.name,
    jobTitle: person.role,
    image: person.image ? `${SITE_URL}${encodeURI(person.image)}` : undefined,
    url: person.url,
    sameAs: person.url ? [person.url] : undefined,
    worksFor: { "@type": "Organization", name: "Ramppy", url: SITE_URL },
  };
}

/** Vídeos do post como VideoObject, para aparecerem na busca de vídeos. */
export function articleVideosLd(videos: PostVideo[] | undefined, uploadDate: string) {
  return videos?.map((v) => ({
    "@type": "VideoObject",
    name: v.title,
    description: v.description ?? v.title,
    thumbnailUrl: v.poster ? `${SITE_URL}${v.poster}` : undefined,
    contentUrl: `${SITE_URL}${v.src}`,
    uploadDate,
    duration: v.duration,
  }));
}
