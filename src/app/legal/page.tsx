import PageShell from "@/components/PageShell";
import LegalContent from "@/components/pages/LegalContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "pt",
  path: "/legal",
  title: "Termos, Privacidade e Segurança | Ramppy",
  description:
    "Termos de uso, política de privacidade e práticas de segurança da plataforma Ramppy — LGPD, proteção de dados e tratamento de informações.",
});

export default function LegalPage() {
  return (
    <PageShell>
      <LegalContent />
    </PageShell>
  );
}
