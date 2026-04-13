import PageShell from "@/components/PageShell";
import ComoFuncionaContent from "@/components/pages/ComoFuncionaContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "es",
  path: "/como-funciona",
  title: "Cómo Funciona | Ramppy",
  description:
    "El recorrido completo de Ramppy: simulaciones de ventas con IA, análisis automático de reuniones y coaching inteligente para equipos B2B.",
});

export default function Page() {
  return (
    <PageShell>
      <ComoFuncionaContent />
    </PageShell>
  );
}
