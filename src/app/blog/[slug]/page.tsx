import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import SectionWrapper from "@/components/SectionWrapper";
import CTA from "@/components/CTA";
import posts from "@/data/blog-posts.json";
import { formatDate } from "@/lib/format-date";
import ImageGallery from "@/components/blog/ImageGallery";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Post não encontrado | Ramppy" };
  return {
    title: `${post.title} | Blog Ramppy`,
    description: post.excerpt,
  };
}

const categoryColors: Record<string, string> = {
  "Atualização": "bg-green-100 text-green-700",
  "Parceria": "bg-blue-100 text-blue-700",
  "Evento": "bg-purple-100 text-purple-700",
  "Conteúdo": "bg-orange-100 text-orange-700",
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const formattedDate = formatDate(post.date);

  return (
    <PageShell>
      <SectionWrapper>
        <div className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <a href="/blog" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary-green transition-colors mb-8">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
              </svg>
              Voltar ao blog
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
              <span>{post.readTime} de leitura</span>
              {post.linkedinUrl && (
                <>
                  <span className="w-1 h-1 bg-text-secondary/30 rounded-full" />
                  <a href={post.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-primary-green font-medium hover:underline">
                    Ver no LinkedIn ↗
                  </a>
                </>
              )}
            </div>

            {/* Images */}
            {"images" in post && Array.isArray((post as Record<string, unknown>).images) ? (
              <ImageGallery images={(post as Record<string, unknown>).images as string[]} alt={post.title} />
            ) : post.image ? (
              <div className="rounded-2xl overflow-hidden mb-10 border border-border-light">
                <img src={post.image} alt={post.title} className="w-full h-auto" />
              </div>
            ) : null}

            {/* Content */}
            <div className="prose-custom">
              {post.content.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="text-lg text-text-secondary leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Share / back */}
            <div className="mt-12 pt-8 border-t border-border-light flex items-center justify-between">
              <a href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-green hover:text-green-dark transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5" />
                  <path d="M12 19l-7-7 7-7" />
                </svg>
                Voltar ao blog
              </a>
              {post.linkedinUrl && (
                <a href={post.linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full bg-[#0077B5] text-white hover:bg-[#006297] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                  Ver no LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <CTA />
    </PageShell>
  );
}
