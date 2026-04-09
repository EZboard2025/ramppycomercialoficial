import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import SectionWrapper from "@/components/SectionWrapper";
import CTA from "@/components/CTA";
import FeaturedArticle from "@/components/blog/FeaturedArticle";
import BlogCard from "@/components/blog/BlogCard";
import posts from "@/data/blog-posts.json";

export const metadata: Metadata = {
  title: "Blog | Ramppy",
  description:
    "Acompanhe as novidades da Ramppy: atualizações do produto, parcerias e conteúdo sobre vendas com IA.",
};

export default function BlogPage() {
  const featuredArticle = posts.find((a) => a.featured);
  const otherArticles = posts.filter((a) => !a.featured);

  return (
    <PageShell>
      {/* Hero */}
      <SectionWrapper>
        <div className="py-20 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-green-surface text-primary-green text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Blog
            </span>
            <h1 className="font-[var(--font-fustat)] text-[36px] md:text-[52px] font-semibold leading-[110%] tracking-[-0.04em] text-teal-dark">
              Novidades da Ramppy
            </h1>
            <p className="mt-5 text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
              Atualizações do produto, parcerias, eventos e conteúdo sobre vendas e IA.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Featured article */}
      {featuredArticle && (
        <SectionWrapper>
          <div className="pb-10 md:pb-16">
            <FeaturedArticle article={featuredArticle} />
          </div>
        </SectionWrapper>
      )}

      {/* Article grid */}
      {otherArticles.length > 0 && (
        <SectionWrapper>
          <div className="py-10 md:py-16">
            <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[36px] font-semibold leading-[115%] tracking-tight text-teal-dark mb-10">
              Últimas publicações
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherArticles.map((article, idx) => (
                <BlogCard key={idx} article={article} />
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}

      <CTA />
    </PageShell>
  );
}
