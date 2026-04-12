import PageShell from "@/components/PageShell";
import SobreContent from "@/components/pages/SobreContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  path: "/sobre",
  title: "About | Ramppy",
  description:
    "The story of Ramppy — from a 52-hour hackathon to the AI sales platform helping Brazilian teams ramp up faster and sell more.",
});

export default function Page() {
  return (
    <PageShell>
      <SobreContent />
    </PageShell>
  );
}
