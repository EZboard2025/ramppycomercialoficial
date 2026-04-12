import PageShell from "@/components/PageShell";
import AjudaContent from "@/components/pages/AjudaContent";
import { ajudaStrings } from "@/data/ajuda";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "pt",
  path: "/ajuda",
  title: "Central de Ajuda | Ramppy",
  description:
    "Respostas para as principais dúvidas sobre a Ramppy: simulações de vendas com IA, análise de reuniões, planos, créditos e onboarding.",
});

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ajudaStrings.pt.sections.flatMap((s) =>
    s.items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: { "@type": "Answer", text: it.answer },
    }))
  ),
};

export default function AjudaPage() {
  return (
    <PageShell>
      <JsonLd data={faqLd} />
      <AjudaContent />
    </PageShell>
  );
}
