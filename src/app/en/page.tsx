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
  locale: "en",
  path: "/",
  title: "Ramppy — Sales simulation for hiring sales reps",
  description:
    "Watch candidates sell before you hire them: they run a real sale with a synthetic customer and you get a score per stage and a ranking. Then the same AI trains and scores the team you already have.",
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
    "AI sales platform: hiring simulation to evaluate sales candidates, training, meeting analysis and sales team management.",
  offers: { "@type": "Offer", priceCurrency: "BRL", price: "960" },
};

export default function HomeEn() {
  return (
    <LocaleProvider locale="en">
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
