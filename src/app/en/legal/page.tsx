import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import LegalContent from "@/components/pages/LegalContent";

export const metadata: Metadata = {
  title: "Terms and Privacy | Ramppy",
  description:
    "Terms of use, privacy policy, and security of the Ramppy platform.",
};

export default function LegalPage() {
  return (
    <PageShell>
      <LegalContent />
    </PageShell>
  );
}
