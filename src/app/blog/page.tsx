import PageShell from "@/components/PageShell";
import BlogListContent from "@/components/pages/BlogListContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "pt",
  path: "/blog",
  title: "Blog da Ramppy — Vendas com IA, SPIN Selling e Gestão Comercial",
  description:
    "Artigos, novidades do produto, estudos e reflexões sobre vendas consultivas, IA aplicada e gestão de times comerciais.",
});

export default function BlogPage() {
  return (
    <PageShell>
      <BlogListContent />
    </PageShell>
  );
}
