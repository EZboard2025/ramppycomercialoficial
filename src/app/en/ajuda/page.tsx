import PageShell from "@/components/PageShell";
import AjudaContent from "@/components/pages/AjudaContent";
import { ajudaStrings } from "@/data/ajuda";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  path: "/ajuda",
  title: "Help Center | Ramppy",
  description:
    "Answers to common questions about Ramppy — AI sales simulations, meeting analysis, plans, credits and onboarding.",
});

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ajudaStrings.en.sections.flatMap((s) =>
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
