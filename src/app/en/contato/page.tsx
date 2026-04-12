import PageShell from "@/components/PageShell";
import ContatoContent from "@/components/pages/ContatoContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  path: "/contato",
  title: "Contact | Ramppy",
  description:
    "Talk to the Ramppy team — free diagnostic of your sales process, plan questions or platform support.",
});

export default function ContactPage() {
  return (
    <PageShell>
      <ContatoContent />
    </PageShell>
  );
}
