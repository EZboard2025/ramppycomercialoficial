import PageShell from "@/components/PageShell";
import SobreContent from "@/components/pages/SobreContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "pt",
  path: "/sobre",
  title: "Sobre | Ramppy",
  description:
    "Conheça a história da Ramppy: de um hackathon de 52 horas à plataforma de vendas com IA que cresce junto dos maiores times comerciais do Brasil.",
});

export default function Page() {
  return (
    <PageShell>
      <SobreContent />
    </PageShell>
  );
}
