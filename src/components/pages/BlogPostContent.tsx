"use client";

import SectionWrapper from "@/components/SectionWrapper";
import CTA from "@/components/CTA";
import ImageGallery from "@/components/blog/ImageGallery";
import { formatDate } from "@/lib/format-date";
import { useLocale, localizeHref } from "@/i18n/LocaleContext";

const categoryColors: Record<string, string> = {
  "Atualização": "bg-green-100 text-green-700",
  "Parceria": "bg-blue-100 text-blue-700",
  "Evento": "bg-purple-100 text-purple-700",
  "Conteúdo": "bg-orange-100 text-orange-700",
};

const strings = {
  pt: {
    backToBlog: "Voltar ao blog",
    readTimeSuffix: "de leitura",
    viewOnLinkedin: "Ver no LinkedIn",
    viewOnLinkedinInline: "Ver no LinkedIn ↗",
    viewProfile: "Ver perfil no LinkedIn ↗",
  },
  en: {
    backToBlog: "Back to blog",
    readTimeSuffix: "read",
    viewOnLinkedin: "View on LinkedIn",
    viewOnLinkedinInline: "View on LinkedIn ↗",
    viewProfile: "View LinkedIn profile ↗",
  },
  es: {
    backToBlog: "Volver al blog",
    readTimeSuffix: "de lectura",
    viewOnLinkedin: "Ver en LinkedIn",
    viewOnLinkedinInline: "Ver en LinkedIn ↗",
    viewProfile: "Ver perfil en LinkedIn ↗",
  },
};

type Post = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image?: string;
  linkedinUrl?: string;
  content: string;
  featured?: boolean;
  images?: string[];
  /** Pessoa de quem o post fala: vira um cartão no fim do texto. */
  about?: { name: string; role: string; image?: string; url?: string };
  videos?: { src: string; poster?: string; title: string }[];
};

/** Um parágrafo "[video:N]" no conteúdo põe ali o vídeo N de `post.videos`. */
const VIDEO_MARKER = /^\[video:(\d+)\]$/;

export default function BlogPostContent({ post }: { post: Post }) {
  const locale = useLocale();
  const t = strings[locale];
  const formattedDate = formatDate(post.date, locale);
  const blogHref = localizeHref(locale, "/blog");

  return (
    <>
      <SectionWrapper>
        <div className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <a href={blogHref} className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary-green transition-colors mb-8">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
              </svg>
              {t.backToBlog}
            </a>

            <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5 ${categoryColors[post.category] || "bg-gray-100 text-gray-700"}`}>
              {post.category}
            </span>

            <h1 className="font-[var(--font-fustat)] text-[32px] md:text-[44px] font-semibold leading-[115%] tracking-tight text-teal-dark mb-4">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-text-secondary mb-10">
              <span>{formattedDate}</span>
              <span className="w-1 h-1 bg-text-secondary/30 rounded-full" />
              <span>{post.readTime} {t.readTimeSuffix}</span>
              {post.linkedinUrl && (
                <>
                  <span className="w-1 h-1 bg-text-secondary/30 rounded-full" />
                  <a href={post.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-primary-green font-medium hover:underline">
                    {t.viewOnLinkedinInline}
                  </a>
                </>
              )}
            </div>

            {/* Images */}
            {"images" in post && Array.isArray((post as Record<string, unknown>).images) ? (
              <ImageGallery images={(post as Record<string, unknown>).images as string[]} alt={post.title} />
            ) : post.image && !post.videos ? (
              <div className="rounded-2xl overflow-hidden mb-10 border border-border-light">
                <img src={post.image} alt={post.title} className="w-full h-auto" />
              </div>
            ) : null}

            {/* Content */}
            <div className="prose-custom">
              {post.content.split("\n\n").map((paragraph, idx) => {
                const marker = paragraph.match(VIDEO_MARKER);
                if (marker) {
                  const video = post.videos?.[Number(marker[1])];
                  return video ? (
                    <div key={idx} className="rounded-2xl overflow-hidden mb-8 border border-border-light bg-black">
                      <video src={video.src} poster={video.poster} title={video.title} controls playsInline preload="metadata" className="w-full h-auto block" />
                    </div>
                  ) : null;
                }
                return (
                  <p key={idx} className="text-lg text-text-secondary leading-relaxed mb-6">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Person card */}
            {post.about && (
              <a
                href={post.about.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-5 md:gap-6 p-4 md:p-5 rounded-2xl border border-border-light hover:border-primary-green/30 transition-colors group"
              >
                {post.about.image && (
                  <img src={post.about.image} alt={`${post.about.name}, ${post.about.role}`} className="w-24 md:w-32 aspect-[4/5] rounded-xl object-cover shrink-0" />
                )}
                <span className="flex flex-col">
                  <span className="font-[var(--font-fustat)] text-xl md:text-2xl font-semibold text-teal-dark">{post.about.name}</span>
                  <span className="text-base text-text-secondary">{post.about.role}</span>
                  {post.about.url && (
                    <span className="mt-3 text-sm font-medium text-primary-green group-hover:underline">{t.viewProfile}</span>
                  )}
                </span>
              </a>
            )}

            {/* Share / back */}
            <div className="mt-12 pt-8 border-t border-border-light flex items-center justify-between">
              <a href={blogHref} className="inline-flex items-center gap-2 text-sm font-semibold text-primary-green hover:text-green-dark transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5" />
                  <path d="M12 19l-7-7 7-7" />
                </svg>
                {t.backToBlog}
              </a>
              {post.linkedinUrl && (
                <a href={post.linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full bg-[#0077B5] text-white hover:bg-[#006297] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                  {t.viewOnLinkedin}
                </a>
              )}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <CTA />
    </>
  );
}
