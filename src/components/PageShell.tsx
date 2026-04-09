import Navbar from "./Navbar";
import Footer from "./Footer";
import GridBeam from "./GridBeam";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <GridBeam className="min-h-screen">
      <main className="bg-bg-main/80 min-h-screen space-y-[1px] relative z-10 max-w-[1920px] mx-auto">
        <Navbar />
        {children}
        <Footer />
      </main>
    </GridBeam>
  );
}
