"use client";
import { useRef, useCallback, useEffect, useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { useLocale, localizeHref } from "@/i18n/LocaleContext";

function useTypewriter(
  phrases: readonly (readonly string[])[],
  typeSpeedMs = 45,
  deleteSpeedMs = 25,
  startDelayMs = 250,
  pauseAtFullMs = 2500,
  pauseAtEmptyMs = 350,
) {
  const key = phrases.map((p) => p.join("\u0001")).join("\u0002");
  const initialLen = phrases[0].reduce((a, s) => a + s.length, 0);
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [pos, setPos] = useState(initialLen);

  useEffect(() => {
    setPhraseIdx(0);
    setPos(initialLen);
    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let currentPhrase = 0;
    const totalLenFor = (idx: number) => phrases[idx].reduce((a, s) => a + s.length, 0);

    function typeStep(next: number) {
      if (cancelled) return;
      setPos(next);
      const total = totalLenFor(currentPhrase);
      if (next < total) {
        timeoutId = setTimeout(() => typeStep(next + 1), typeSpeedMs);
      } else {
        timeoutId = setTimeout(() => deleteStep(total - 1), pauseAtFullMs);
      }
    }

    function deleteStep(next: number) {
      if (cancelled) return;
      setPos(next);
      if (next > 0) {
        timeoutId = setTimeout(() => deleteStep(next - 1), deleteSpeedMs);
      } else {
        currentPhrase = (currentPhrase + 1) % phrases.length;
        setPhraseIdx(currentPhrase);
        timeoutId = setTimeout(() => typeStep(0), pauseAtEmptyMs);
      }
    }

    // Start with phrase 0 already fully typed, then begin the delete → next cycle.
    timeoutId = setTimeout(() => deleteStep(initialLen - 1), pauseAtFullMs);

    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [key, typeSpeedMs, deleteSpeedMs, startDelayMs, pauseAtFullMs, pauseAtEmptyMs, phrases, initialLen]);

  const segments = phrases[phraseIdx] ?? phrases[0];
  const typed: string[] = [];
  let remaining = pos;
  for (const s of segments) {
    const take = Math.min(remaining, s.length);
    typed.push(s.slice(0, take));
    remaining -= take;
  }
  return { typed, segments };
}

function Cursor() {
  return (
    <span
      aria-hidden="true"
      className="inline-block w-[3px] md:w-[4px] h-[0.85em] align-middle ml-1 bg-primary-green animate-cursor-blink"
    />
  );
}

const strings = {
  pt: {
    socialProof: "Aumente em até 46% suas conversões",
    h1MobileVariants: [
      ["Treine melhor.", "Venda ", "mais."],
      ["Treine certo.", "Venda ", "melhor."],
      ["Mais reuniões.", "Mais ", "vendas."],
    ] as const,
    h1DesktopVariants: [
      ["Acabe com a ", "ineficiência", " do seu time de ", "vendas."],
      ["Transforme a ", "performance", " do seu time ", "comercial."],
      ["Multiplique as ", "conversões", " do seu time de ", "vendas."],
      ["Destrave o ", "potencial", " do seu time ", "comercial."],
    ] as const,
    subtitleMobile: "Simulações, avaliação e gestão do seu time com inteligência artificial.",
    subtitleDesktop:
      "O ecossistema completo de vendas com IA: treinamento, simulações, avaliação e gestão do seu time otimizados com inteligência artificial.",
    ctaPrimary: "Comece grátis",
    ctaSecondary: "Ver como funciona",
  },
  en: {
    socialProof: "Boost your conversions by up to 46%",
    h1MobileVariants: [
      ["Train better.", "Sell ", "more."],
      ["Train smart.", "Sell ", "better."],
      ["More meetings.", "More ", "deals."],
    ] as const,
    h1DesktopVariants: [
      ["End the ", "inefficiency", " of your ", "sales team."],
      ["Transform the ", "performance", " of your ", "sales team."],
      ["Multiply the ", "conversions", " of your ", "sales team."],
      ["Unlock the ", "potential", " of your ", "sales team."],
    ] as const,
    subtitleMobile: "Simulations, evaluation and team management with artificial intelligence.",
    subtitleDesktop:
      "The complete AI sales ecosystem: training, simulations, evaluation and team management supercharged with artificial intelligence.",
    ctaPrimary: "Start free",
    ctaSecondary: "See how it works",
  },
};

export default function Hero() {
  const locale = useLocale();
  const t = strings[locale];
  const videoRef = useRef<HTMLVideoElement>(null);

  const desktop = useTypewriter(t.h1DesktopVariants);
  const mobile = useTypewriter(t.h1MobileVariants);

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
              <span className="text-xs text-text-secondary font-medium">{t.socialProof}</span>
            </div>

            {/* H1 */}
            <h1 className="font-[var(--font-fustat)] text-[52px] md:text-[42px] lg:text-[3.5vw] xl:text-[3.75vw] font-semibold leading-[105%] tracking-[-0.03em] md:tracking-[-0.05em] text-teal-dark mt-4 md:mt-0 lg:w-[42vw] xl:w-[42vw] lg:relative lg:z-10 min-h-[2.1em] md:min-h-[2.1em]">
              <span className="md:hidden">
                {mobile.typed[0]}
                {mobile.typed[0].length === mobile.segments[0].length && <br />}
                <span className="whitespace-nowrap">
                  {mobile.typed[1]}
                  <span className="clip-text">{mobile.typed[2]}</span>
                </span>
                <Cursor />
              </span>
              <span className="hidden md:inline">
                {desktop.typed[0]}
                <span className="clip-text">{desktop.typed[1]}</span>
                {desktop.typed[2]}
                <span className="clip-text">{desktop.typed[3]}</span>
                <Cursor />
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-7 md:mt-6 text-[17px] md:text-lg font-normal md:font-medium leading-relaxed md:leading-7 text-text-secondary/80 md:text-text-secondary">
              <span className="md:hidden max-w-[240px] block">{t.subtitleMobile}</span>
              <span className="hidden md:inline">{t.subtitleDesktop}</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-row items-center gap-3 md:gap-4 mt-[40px] md:mt-10">
              <a
                href="#planos"
                className="font-[var(--font-fustat)] inline-flex items-center justify-center gap-1.5 md:gap-2 text-sm md:text-base font-semibold px-5 md:px-6 py-3 md:py-3.5 rounded-full bg-primary-green text-white hover:bg-green-dark transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                {t.ctaPrimary}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 md:w-5 md:h-5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16l4-4-4-4" />
                  <path d="M8 12h8" />
                </svg>
              </a>
              <a
                href={localizeHref(locale, "/como-funciona")}
                className="font-[var(--font-fustat)] inline-flex items-center justify-center gap-2 text-sm md:text-base font-semibold px-5 md:px-6 py-3 md:py-3.5 rounded-full text-teal-medium md:bg-white md:border md:border-border-light hover:bg-surface-hover transition-all duration-300"
              >
                {t.ctaSecondary}
              </a>
            </div>

          </div>

          {/* Right: Video */}
          <div className="flex-1 w-full mt-[55px] md:mt-0 lg:translate-x-[9.4vw] xl:translate-x-[14vw] order-last lg:order-none md:scale-100 origin-center">
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
                <source src="/videos/hero.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
