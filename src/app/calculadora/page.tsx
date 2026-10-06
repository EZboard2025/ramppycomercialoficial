import PageShell from "@/components/PageShell";
import RoiCalculator from "@/components/RoiCalculator";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "pt",
  path: "/calculadora",
  title: "Calculadora de ROI | Ramppy",
  description:
    "Coloque as reuniões por dia, a conversão e o ticket médio do seu time e veja quanto vale o ganho de um caso real: um time de vendedores novos treinado na Ramppy foi de 18% para 30% de conversão.",
});

export default function CalculadoraPage() {
  return (
    <PageShell>
      <RoiCalculator comoPagina />
    </PageShell>
  );
}
