import PageShell from "@/components/PageShell";
import ContatoContent from "@/components/pages/ContatoContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "pt",
  path: "/contato",
  title: "Contato | Ramppy",
  description:
    "Fale com o time da Ramppy para um diagnóstico do seu time de vendas, dúvidas sobre planos ou suporte da plataforma.",
});

export default function ContatoPage() {
  return (
    <PageShell>
      <ContatoContent />
    </PageShell>
  );
}
