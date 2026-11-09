import PageShell from "@/components/PageShell";
import DiagnosticoContent from "@/components/pages/DiagnosticoContent";
import { buildMetadata, SITE_URL } from "@/lib/seo";

// Só em português: o Diagnóstico de vendas é para vendedores no Brasil (sem /en/diagnostico nem /es/diagnostico),
// então a página não anuncia versões em outros idiomas.
const base = buildMetadata({
  locale: "pt",
  path: "/diagnostico",
  title: "Diagnóstico de vendas | Ramppy",
  description:
    "Em 10 minutos, uma ligação por voz com um cliente sintético mostra onde você perde venda: sua nota em cada etapa, os erros que mais te custam vendas e o que fazer para chegar no 10.",
});
export const metadata = { ...base, alternates: { canonical: `${SITE_URL}/diagnostico` } };

export default function DiagnosticoPage() {
  return (
    <PageShell>
      <DiagnosticoContent />
    </PageShell>
  );
}
