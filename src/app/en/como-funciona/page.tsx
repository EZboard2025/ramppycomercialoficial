import PageShell from "@/components/PageShell";
import ComoFuncionaContent from "@/components/pages/ComoFuncionaContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  path: "/como-funciona",
  title: "How It Works | Ramppy",
  description:
    "The Ramppy walkthrough: set up the synthetic customer, hire through a voice sales simulation, train the team on tracks and see who's stuck.",
});

export default function HowItWorksPage() {
  return (
    <PageShell>
      <ComoFuncionaContent />
    </PageShell>
  );
}
