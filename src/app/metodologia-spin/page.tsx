import PageShell from "@/components/PageShell";
import MetodologiaSpinContent from "@/components/pages/MetodologiaSpinContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "pt",
  path: "/metodologia-spin",
  title: "Metodologia SPIN Selling | Ramppy",
  description:
    "Situação, Problema, Implicação e Necessidade de Solução. Veja como a Ramppy aplica SPIN Selling com IA para avaliar vendedores em tempo real.",
});

export default function MetodologiaSpinPage() {
  return (
    <PageShell>
      <MetodologiaSpinContent />
    </PageShell>
  );
}
