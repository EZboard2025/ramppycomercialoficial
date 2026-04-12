import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import MetodologiaSpinContent from "@/components/pages/MetodologiaSpinContent";

export const metadata: Metadata = {
  title: "SPIN Methodology | Ramppy",
  description:
    "Learn how Ramppy applies SPIN Selling with AI to automatically evaluate and develop salespeople.",
};

export default function MetodologiaSpinEnPage() {
  return (
    <PageShell>
      <MetodologiaSpinContent />
    </PageShell>
  );
}
