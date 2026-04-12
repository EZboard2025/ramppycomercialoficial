import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import AjudaContent from "@/components/pages/AjudaContent";

export const metadata: Metadata = {
  title: "Help Center | Ramppy",
  description:
    "Get answers about Ramppy: simulations, meeting analysis, plans, and more.",
};

export default function AjudaPage() {
  return (
    <PageShell>
      <AjudaContent />
    </PageShell>
  );
}
