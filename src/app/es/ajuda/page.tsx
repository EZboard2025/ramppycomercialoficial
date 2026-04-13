import PageShell from "@/components/PageShell";
import AjudaContent from "@/components/pages/AjudaContent";
import { ajudaStrings } from "@/data/ajuda";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "es",
  path: "/ajuda",
  title: "Centro de Ayuda | Ramppy",
  description:
    "Respuestas a las preguntas más frecuentes sobre Ramppy — simulaciones de ventas con IA, análisis de reuniones, planes, créditos y onboarding.",
});

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ajudaStrings.es.sections.flatMap((s) =>
    s.items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: { "@type": "Answer", text: it.answer },
    }))
  ),
};

export default function Page() {
  return (
    <PageShell>
      <JsonLd data={faqLd} />
      <AjudaContent />
    </PageShell>
  );
}
