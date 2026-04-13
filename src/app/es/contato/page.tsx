import PageShell from "@/components/PageShell";
import ContatoContent from "@/components/pages/ContatoContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "es",
  path: "/contato",
  title: "Contacto | Ramppy",
  description:
    "Habla con el equipo de Ramppy — diagnóstico gratuito de tu proceso comercial, consultas sobre planes o soporte de la plataforma.",
});

export default function Page() {
  return (
    <PageShell>
      <ContatoContent />
    </PageShell>
  );
}
