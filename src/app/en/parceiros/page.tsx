import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import ParceirosContent from "@/components/pages/ParceirosContent";

export const metadata: Metadata = {
  title: "Partners | Ramppy",
  description:
    "Meet our partners and discover Ramppy's partner program for sales consultants.",
};

export default function ParceirosPageEn() {
  return (
    <PageShell>
      <ParceirosContent />
    </PageShell>
  );
}
