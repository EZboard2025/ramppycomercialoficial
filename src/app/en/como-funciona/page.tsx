import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import ComoFuncionaContent from "@/components/pages/ComoFuncionaContent";

export const metadata: Metadata = {
  title: "How It Works | Ramppy",
  description:
    "See the full Ramppy walkthrough: AI sales simulations, meeting analysis, and smart coaching for your team.",
};

export default function HowItWorksPage() {
  return (
    <PageShell>
      <ComoFuncionaContent />
    </PageShell>
  );
}
