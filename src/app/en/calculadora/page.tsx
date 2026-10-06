import PageShell from "@/components/PageShell";
import RoiCalculator from "@/components/RoiCalculator";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  path: "/calculadora",
  title: "ROI Calculator | Ramppy",
  description:
    "Enter your team's meetings per day, conversion and average deal size and see what a real case's gain is worth: a team that had never sold anything before, trained on Ramppy, went from 18% to 30% conversion.",
});

export default function CalculatorPage() {
  return (
    <PageShell>
      <RoiCalculator comoPagina />
    </PageShell>
  );
}
