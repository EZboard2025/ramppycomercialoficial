import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SpinSection from "@/components/SpinSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import GridBeam from "@/components/GridBeam";

export default function Home() {
  return (
    <GridBeam className="min-h-screen">
      <main className="bg-bg-main/80 min-h-screen space-y-[1px] relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <SpinSection />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <CTA />
        <Footer />
      </main>
    </GridBeam>
  );
}
