import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
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
  title: "Ramppy — AI Sales Training Platform",
  description:
    "Train sales with AI, analyze meetings automatically, and get real-time coaching. The complete platform for sales teams — roleplay, SPIN Selling evaluation and management.",
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
    "AI sales platform for training, meeting analysis and commercial team management.",
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
