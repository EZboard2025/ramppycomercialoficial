import PageShell from "@/components/PageShell";
import ComoFuncionaContent from "@/components/pages/ComoFuncionaContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "es",
  path: "/como-funciona",
  title: "Cómo Funciona | Ramppy",
  description:
    "El recorrido de Ramppy: configura el cliente sintético, contrata con una simulación de ventas por voz, entrena al equipo en rutas y ve quién se trabó.",
});

export default function Page() {
  return (
    <PageShell>
      <ComoFuncionaContent />
    </PageShell>
  );
}
