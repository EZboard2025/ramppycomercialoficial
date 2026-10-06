import PageShell from "@/components/PageShell";
import RoiCalculator from "@/components/RoiCalculator";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "es",
  path: "/calculadora",
  title: "Calculadora de ROI | Ramppy",
  description:
    "Pon las reuniones por día, la conversión y el ticket promedio de tu equipo y mira cuánto vale la mejora de un caso real: un equipo que nunca había vendido en su vida, entrenado en Ramppy, pasó de 18% a 30% de conversión.",
});

export default function CalculadoraPage() {
  return (
    <PageShell>
      <RoiCalculator comoPagina />
    </PageShell>
  );
}
