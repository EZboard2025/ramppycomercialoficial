import PageShell from "@/components/PageShell";
import ComoFuncionaContent from "@/components/pages/ComoFuncionaContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  path: "/como-funciona",
  title: "How It Works | Ramppy",
  description:
    "The full Ramppy walkthrough: AI sales simulations, automatic meeting analysis and smart coaching built for B2B sales teams.",
});

export default function HowItWorksPage() {
  return (
    <PageShell>
      <ComoFuncionaContent />
    </PageShell>
  );
}
