import PageShell from "@/components/PageShell";
import ParceirosContent from "@/components/pages/ParceirosContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "es",
  path: "/parceiros",
  title: "Programa de Partners | Ramppy",
  description:
    "Descubre el programa de partners de Ramppy para consultores, agencias y expertos en ventas que quieran revender la plataforma de IA.",
});

export default function Page() {
  return (
    <PageShell>
      <ParceirosContent />
    </PageShell>
  );
}
