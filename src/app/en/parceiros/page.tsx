import PageShell from "@/components/PageShell";
import ParceirosContent from "@/components/pages/ParceirosContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  path: "/parceiros",
  title: "Partner Program | Ramppy",
  description:
    "Discover Ramppy's partner program for sales consultants, agencies and experts who want to resell the AI sales platform.",
});

export default function ParceirosPageEn() {
  return (
    <PageShell>
      <ParceirosContent />
    </PageShell>
  );
}
