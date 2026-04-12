import PageShell from "@/components/PageShell";
import ComoFuncionaContent from "@/components/pages/ComoFuncionaContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "pt",
  path: "/como-funciona",
  title: "Como Funciona | Ramppy",
  description:
    "Conheça o passo a passo completo da Ramppy: simulação de vendas com IA, análise de reuniões e coaching inteligente para seu time.",
});

export default function ComoFuncionaPage() {
  return (
    <PageShell>
      <ComoFuncionaContent />
    </PageShell>
  );
}
