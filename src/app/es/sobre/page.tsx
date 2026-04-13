import PageShell from "@/components/PageShell";
import SobreContent from "@/components/pages/SobreContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "es",
  path: "/sobre",
  title: "Sobre nosotros | Ramppy",
  description:
    "La historia de Ramppy — de un hackathon de 52 horas a la plataforma de ventas con IA que ayuda a los equipos a arrancar más rápido y vender más.",
});

export default function Page() {
  return (
    <PageShell>
      <SobreContent />
    </PageShell>
  );
}
