import PageShell from "@/components/PageShell";
import BlogListContent from "@/components/pages/BlogListContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  path: "/blog",
  title: "Ramppy Blog — AI Sales, SPIN Selling and Commercial Management",
  description:
    "Articles, product updates and field notes on consultative selling, applied AI and managing high-performing sales teams.",
});

export default function Page() {
  return (
    <PageShell>
      <BlogListContent />
    </PageShell>
  );
}
