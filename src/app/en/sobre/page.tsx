import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import SobreContent from "@/components/pages/SobreContent";

export const metadata: Metadata = {
  title: "About | Ramppy",
  description:
    "Meet the story of Ramppy: from a 52-hour hackathon to the largest startup accelerator in Minas Gerais.",
};

export default function Page() {
  return (
    <PageShell>
      <SobreContent />
    </PageShell>
  );
}
