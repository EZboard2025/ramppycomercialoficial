import PageShell from "@/components/PageShell";
import MetodologiaSpinContent from "@/components/pages/MetodologiaSpinContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "es",
  path: "/metodologia-spin",
  title: "Metodología SPIN Selling | Ramppy",
  description:
    "Situación, Problema, Implicación y Necesidad de Solución. Descubre cómo Ramppy usa IA para aplicar SPIN Selling y evaluar a tus vendedores en conversaciones reales.",
});

export default function Page() {
  return (
    <PageShell>
      <MetodologiaSpinContent />
    </PageShell>
  );
}
