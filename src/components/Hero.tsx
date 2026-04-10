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
      <div className="py-16 md:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-[5%]">
          {/* Left: Text Content */}
          <div className="lg:w-[33%] xl:w-[33%] shrink-0">
            {/* H1 */}
            <h1 className="font-[var(--font-fustat)] text-[42px] md:text-[3.5vw] lg:text-[3.5vw] xl:text-[3.75vw] font-semibold leading-[105%] tracking-[-0.05em] text-teal-dark">
              <span className="whitespace-nowrap">Acabe com a <span className="clip-text">ineficiência</span></span>
              <br />
              do seu time de{" "}
              <span className="clip-text">vendas.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg font-medium leading-7 text-text-secondary max-w-xl">
              O ecossistema completo de vendas com IA: treinamento, simulações, avaliação e gestão do seu time otimizados com inteligência artificial.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mt-10">
              <a
                href="#planos"
                className="font-[var(--font-fustat)] inline-flex items-center gap-2 text-base font-semibold px-6 py-3.5 rounded-full bg-primary-green text-white hover:bg-green-dark transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Comece grátis
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16l4-4-4-4" />
                  <path d="M8 12h8" />
                </svg>
              </a>
              <a
                href="/como-funciona"
                className="font-[var(--font-fustat)] inline-flex items-center gap-2 text-base font-semibold px-6 py-3.5 rounded-full bg-white text-teal-medium border border-border-light hover:bg-surface-hover transition-all duration-300"
              >
                Ver como funciona
              </a>
            </div>

          </div>

          {/* Right: Video */}
          <div className="flex-1 w-full lg:translate-x-[9.4vw] xl:translate-x-[14vw]">
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
