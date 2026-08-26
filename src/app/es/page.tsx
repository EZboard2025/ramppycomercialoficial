import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PartnersMarquee from "@/components/PartnersMarquee";
import ContratacaoSteps from "@/components/contratacao/ContratacaoSteps";
import LogoBar from "@/components/LogoBar";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import GridBeam from "@/components/GridBeam";
import { LocaleProvider } from "@/i18n/LocaleContext";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, SITE_URL } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "es",
  path: "/",
  title: "Ramppy — Simulación de ventas para contratar vendedores",
  description:
    "Mira al candidato vender antes de contratarlo: le vende de verdad a un cliente sintético y recibes nota por etapa y ranking. Después, la misma IA entrena y evalúa al equipo que ya tienes.",
});

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ramppy",
  url: SITE_URL,
  logo: `${SITE_URL}/images/Ramppy logo branca site.png`,
  sameAs: [
    "https://www.instagram.com/ramppy.ai",
    "https://www.linkedin.com/company/108633945/",
  ],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Ramppy",
  url: SITE_URL,
  inLanguage: ["pt-BR", "en", "es"],
};

const softwareLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Ramppy",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Plataforma de ventas con IA: simulación de contratación para evaluar candidatos a vendedor, entrenamiento, análisis de reuniones y gestión de equipos comerciales.",
  offers: { "@type": "Offer", priceCurrency: "BRL", price: "960" },
};

export default function HomeEs() {
  return (
    <LocaleProvider locale="es">
      <GridBeam className="min-h-screen">
        <JsonLd data={organizationLd} />
        <JsonLd data={websiteLd} />
        <JsonLd data={softwareLd} />
        <main className="bg-bg-main/80 min-h-screen space-y-[1px] relative z-10 max-w-[1920px] mx-auto">
          <Navbar />
          <Hero />
          <PartnersMarquee />
          <ContratacaoSteps />
          <Features />
          <LogoBar />
          <HowItWorks />
          <Pricing />
          <Footer />
        </main>
      </GridBeam>
    </LocaleProvider>
  );
}
