import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import Features from "@/components/Features";
import Results from "@/components/Results";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import GridBeam from "@/components/GridBeam";
import StarField from "@/components/StarField";

export default function Home() {
  return (
    <GridBeam className="min-h-screen">
      <StarField />
      <main className="bg-bg-main/80 min-h-screen space-y-[1px] relative z-10">
        <Navbar />
        <Hero />
        <LogoBar />
        <Results />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <CTA />
        <Features />
        <Footer />
      </main>
    </GridBeam>
  );
}
