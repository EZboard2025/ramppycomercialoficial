import PageShell from "@/components/PageShell";
import ParceirosContent from "@/components/pages/ParceirosContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "pt",
  path: "/parceiros",
  title: "Programa de Parceiros | Ramppy",
  description:
    "Conheça o programa de parceria da Ramppy para consultores, agências e especialistas em vendas que querem revender a plataforma de IA.",
});

export default function ParceirosPage() {
  return (
    <PageShell>
      <ParceirosContent />
    </PageShell>
  );
}
