import PageShell from "@/components/PageShell";
import ComoFuncionaContent from "@/components/pages/ComoFuncionaContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "pt",
  path: "/como-funciona",
  title: "Como Funciona | Ramppy",
  description:
    "Conheça o passo a passo da Ramppy: configure o cliente sintético, contrate pela simulação de vendas por voz, treine o time em trilhas e acompanhe quem travou.",
});

export default function ComoFuncionaPage() {
  return (
    <PageShell>
      <ComoFuncionaContent />
    </PageShell>
  );
}
