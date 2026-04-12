import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemStats from "@/components/ProblemStats";
import LogoBar from "@/components/LogoBar";
import Features from "@/components/Features";
import Results from "@/components/Results";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import GridBeam from "@/components/GridBeam";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, SITE_URL } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "pt",
  path: "/",
  title: "Ramppy — Ecossistema de vendas com IA",
  description:
    "Treine vendas com IA, analise reuniões automaticamente e receba coaching em tempo real. A plataforma completa para times de vendas — simulações, avaliação SPIN e gestão.",
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
  inLanguage: ["pt-BR", "en"],
};

const softwareLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Ramppy",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Plataforma de vendas com IA para treinamento, análise de reuniões e gestão de times comerciais.",
  offers: { "@type": "Offer", priceCurrency: "BRL", price: "960" },
};

export default function Home() {
  return (
    <GridBeam className="min-h-screen">
      <JsonLd data={organizationLd} />
      <JsonLd data={websiteLd} />
      <JsonLd data={softwareLd} />
      <main className="bg-bg-main/80 min-h-screen space-y-[1px] relative z-10 max-w-[1920px] mx-auto">
        <Navbar />
        <Hero />
        {/* <ProblemStats /> */}
        <Features />
        <LogoBar />
        {/* <Results /> */}
        <HowItWorks />
        {/* <Testimonials /> */}
        <Pricing />
        <Footer />
      </main>
    </GridBeam>
  );
}
