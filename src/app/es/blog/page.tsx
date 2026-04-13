import PageShell from "@/components/PageShell";
import BlogListContent from "@/components/pages/BlogListContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "es",
  path: "/blog",
  title: "Blog de Ramppy — Ventas con IA, SPIN Selling y Gestión Comercial",
  description:
    "Artículos, actualizaciones del producto y reflexiones sobre ventas consultivas, IA aplicada y gestión de equipos comerciales de alto rendimiento.",
});

export default function Page() {
  return (
    <PageShell>
      <BlogListContent />
    </PageShell>
  );
}
