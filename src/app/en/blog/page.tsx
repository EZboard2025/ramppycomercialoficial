import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import BlogListContent from "@/components/pages/BlogListContent";

export const metadata: Metadata = {
  title: "Blog | Ramppy",
  description:
    "Follow news from Ramppy: product updates, partnerships, and content about AI-powered sales.",
};

export default function Page() {
  return (
    <PageShell>
      <BlogListContent />
    </PageShell>
  );
}
