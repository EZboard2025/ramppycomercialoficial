import PageShell from "@/components/PageShell";
import LegalContent from "@/components/pages/LegalContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  path: "/legal",
  title: "Terms, Privacy and Security | Ramppy",
  description:
    "Terms of use, privacy policy and security practices for the Ramppy platform — LGPD, data protection and information handling.",
});

export default function LegalPage() {
  return (
    <PageShell>
      <LegalContent />
    </PageShell>
  );
}
