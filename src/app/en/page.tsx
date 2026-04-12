import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import GridBeam from "@/components/GridBeam";
import { LocaleProvider } from "@/i18n/LocaleContext";

export const metadata = {
  title: "Ramppy",
  description:
    "Train sales with AI, analyze meetings automatically, manage WhatsApp and get real-time coaching. The complete platform for sales teams.",
};

export default function HomeEn() {
  return (
    <LocaleProvider locale="en">
      <GridBeam className="min-h-screen">
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
