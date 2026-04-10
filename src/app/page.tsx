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
export default function Home() {
  return (
    <GridBeam className="min-h-screen">
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
