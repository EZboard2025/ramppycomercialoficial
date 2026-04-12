import PageShell from "@/components/PageShell";
import MetodologiaSpinContent from "@/components/pages/MetodologiaSpinContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  path: "/metodologia-spin",
  title: "SPIN Selling Methodology | Ramppy",
  description:
    "Situation, Problem, Implication and Need-Payoff. See how Ramppy uses AI to apply SPIN Selling and evaluate reps in real conversations.",
});

export default function MetodologiaSpinEnPage() {
  return (
    <PageShell>
      <MetodologiaSpinContent />
    </PageShell>
  );
}
