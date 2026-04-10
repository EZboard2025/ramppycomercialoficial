"use client";
import { useRef, useCallback } from "react";
import SectionWrapper from "./SectionWrapper";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    // Fade out and restart 0.5s before end to avoid stutter
    if (video.duration - video.currentTime < 0.5) {
      video.style.opacity = "0";
      setTimeout(() => {
        video.currentTime = 0;
        video.play();
        video.style.opacity = "1";
      }, 400);
    }
  }, []);

  return (
    <SectionWrapper className="overflow-visible">
      <div className="py-6 md:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-start gap-10 md:gap-8 lg:gap-[5%]">
          {/* Left: Text Content */}
          <div className="lg:w-[33%] xl:w-[33%] shrink-0 mt-[10px] md:mt-0">
            {/* Social proof badge - mobile only */}
            <div className="md:hidden inline-flex items-center gap-2.5 bg-surface-hover/60 border border-border-light/60 rounded-full px-4 py-2 mb-6">
              <div className="flex -space-x-2">
                <img src="/images/Gabriel Gomide.png" alt="Gabriel" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                <img src="/images/1769295670916.jpg" alt="Arthur" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                <img src="/images/Matheus Muniz.png" alt="Matheus" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
              </div>
              <span className="text-xs text-text-secondary font-medium">Aumente em até 46% suas conversões</span>
            </div>

            {/* H1 */}
            <h1 className="font-[var(--font-fustat)] text-[52px] md:text-[42px] lg:text-[3.5vw] xl:text-[3.75vw] font-semibold leading-[105%] tracking-[-0.03em] md:tracking-[-0.05em] text-teal-dark mt-4 md:mt-0">
              <span className="md:hidden whitespace-nowrap">Treine melhor.<br /><span className="whitespace-nowrap">Venda <span className="clip-text">mais.</span></span></span>
              <span className="hidden md:inline">Acabe com a <span className="clip-text">ineficiência</span><br />do seu time de{" "}<span className="clip-text">vendas.</span></span>
            </h1>

            {/* Subtitle */}
            <p className="mt-7 md:mt-6 text-[17px] md:text-lg font-normal md:font-medium leading-relaxed md:leading-7 text-text-secondary/80 md:text-text-secondary">
              <span className="md:hidden max-w-[240px] block">Simulações, avaliação e gestão do seu time com inteligência artificial.</span>
              <span className="hidden md:inline">O ecossistema completo de vendas com IA: treinamento, simulações, avaliação e gestão do seu time otimizados com inteligência artificial.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-row items-center gap-3 md:gap-4 mt-[40px] md:mt-10">
              <a
                href="#planos"
                className="font-[var(--font-fustat)] inline-flex items-center justify-center gap-1.5 md:gap-2 text-sm md:text-base font-semibold px-5 md:px-6 py-3 md:py-3.5 rounded-full bg-primary-green text-white hover:bg-green-dark transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Comece grátis
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 md:w-5 md:h-5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16l4-4-4-4" />
                  <path d="M8 12h8" />
                </svg>
              </a>
              <a
                href="/como-funciona"
                className="font-[var(--font-fustat)] inline-flex items-center justify-center gap-2 text-sm md:text-base font-semibold px-5 md:px-6 py-3 md:py-3.5 rounded-full text-teal-medium md:bg-white md:border md:border-border-light hover:bg-surface-hover transition-all duration-300"
              >
                Ver como funciona
              </a>
            </div>

          </div>

          {/* Right: Video */}
          <div className="flex-1 w-full mt-[55px] md:mt-0 lg:translate-x-[9.4vw] xl:translate-x-[14vw] order-last lg:order-none scale-125 md:scale-100 origin-center">
            <div className="rounded-2xl overflow-hidden border border-gray-200/50" style={{ boxShadow: "0 25px 80px -12px rgba(0, 0, 0, 0.25), 0 12px 35px -8px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)" }}>
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto block object-cover scale-[1.02] transition-opacity duration-400"
                style={{ marginLeft: "-1%" }}
                preload="auto"
                onTimeUpdate={handleTimeUpdate}
              >
                <source src="/videos/IMG_2973.MOV" type="video/quicktime" />
                <source src="/videos/IMG_2973.MOV" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
