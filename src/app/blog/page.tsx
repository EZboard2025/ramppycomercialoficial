import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import CTA from "@/components/CTA";
import FeaturedArticle from "@/components/blog/FeaturedArticle";
import BlogCard from "@/components/blog/BlogCard";

export const metadata: Metadata = {
  title: "Blog | Ramppy",
  description:
    "Acompanhe as novidades do Ramppy: atualizações do produto, parcerias e conteúdo sobre vendas com IA.",
};

const articles = [
  {
    category: "Atualização",
    title: "Nicole IA: sua nova assistente de vendas",
    excerpt:
      "Lançamos a Nicole, a assistente de IA que acompanha a performance do seu time em tempo real.",
    date: "2026-03-15",
    readTime: "3 min",
    featured: true,
  },
  {
    category: "Parceria",
    title: "Ramppy fecha parceria com a Kondo",
    excerpt:
      "A integração com a Kondo traz dados exclusivos sobre performance de vendas no Brasil.",
    date: "2026-03-10",
    readTime: "2 min",
  },
  {
    category: "Evento",
    title: "Ramppy no RD Summit 2026",
    excerpt:
      "Participamos do maior evento de marketing e vendas da América Latina.",
    date: "2026-02-28",
    readTime: "4 min",
  },
  {
    category: "Atualização",
    title: "Análise automática de reuniões via Google Meet",
    excerpt:
      "Agora o Ramppy conecta no Google Agenda e analisa suas reuniões automaticamente.",
    date: "2026-02-20",
    readTime: "3 min",
  },
  {
    category: "Conteúdo",
    title: "5 erros que todo vendedor comete em calls",
    excerpt:
      "Identificamos os padrões mais comuns de erros em mais de 10.000 simulações analisadas.",
    date: "2026-02-15",
    readTime: "5 min",
  },
  {
    category: "Atualização",
    title: "Dashboard de gestão: visão completa do time",
    excerpt:
      "O novo dashboard traz métricas detalhadas de cada vendedor e comparativos do time.",
    date: "2026-02-01",
    readTime: "3 min",
  },
];

export default function BlogPage() {
  const featuredArticle = articles.find((a) => a.featured);
  const otherArticles = articles.filter((a) => !a.featured);

  return (
    <PageShell>
      <PageHero
        badge="Blog"
        title="Novidades do Ramppy"
        subtitle="Atualizações do produto, parcerias, eventos e conteúdo sobre vendas e IA."
      />

      {/* Featured article */}
      {featuredArticle && (
        <SectionWrapper>
          <div className="py-10 md:py-16">
            <FeaturedArticle article={featuredArticle} />
          </div>
        </SectionWrapper>
      )}

      {/* Article grid */}
      <SectionWrapper>
        <div className="py-10 md:py-16">
          <h2 className="font-[var(--font-fustat)] text-[32px] md:text-[48px] font-semibold leading-[110%] tracking-[-0.04em] text-teal-dark mb-10">
            Últimas publicações
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherArticles.map((article, idx) => (
              <BlogCard key={idx} article={article} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      <CTA />
    </PageShell>
  );
}
