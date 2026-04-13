import PageShell from "@/components/PageShell";
import LegalContent from "@/components/pages/LegalContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "es",
  path: "/legal",
  title: "Términos, Privacidad y Seguridad | Ramppy",
  description:
    "Términos de uso, política de privacidad y prácticas de seguridad de la plataforma Ramppy — LGPD, protección de datos y tratamiento de información.",
});

export default function Page() {
  return (
    <PageShell>
      <LegalContent />
    </PageShell>
  );
}
