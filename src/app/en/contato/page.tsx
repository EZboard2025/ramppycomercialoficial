import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import ContatoContent from "@/components/pages/ContatoContent";

export const metadata: Metadata = {
  title: "Contact | Ramppy",
  description:
    "Get in touch with the Ramppy team. We're ready to help.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <ContatoContent />
    </PageShell>
  );
}
