"use client";
import SectionWrapper from "./SectionWrapper";

export default function Hero() {
  return (
    <SectionWrapper className="overflow-visible">
      <div className="py-16 md:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-[5%]">
          {/* Left: Text Content */}
          <div className="lg:w-[33%] xl:w-[33%] shrink-0">
            {/* H1 */}
            <h1 className="font-[var(--font-fustat)] text-[42px] md:text-[3.5vw] lg:text-[3.5vw] xl:text-[3.75vw] font-semibold leading-[105%] tracking-[-0.05em] text-teal-dark">
              <span className="whitespace-nowrap">Acabe com a <span className="clip-text">ineficiencia</span></span>
              <br />
              do seu time de{" "}
              <span className="clip-text">vendas.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg font-medium leading-7 text-text-secondary max-w-xl">
              O ecossistema completo de vendas com IA: simule reunioes, analise calls reais,
              receba coaching em tempo real no WhatsApp e acompanhe a evolucao do seu time.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mt-10">
              <a
                href="#planos"
                className="font-[var(--font-fustat)] inline-flex items-center gap-2 text-base font-semibold px-6 py-3.5 rounded-full bg-primary-green text-white hover:bg-green-dark transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Comece gratis
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16l4-4-4-4" />
                  <path d="M8 12h8" />
                </svg>
              </a>
              <a
                href="#como-funciona"
                className="font-[var(--font-fustat)] inline-flex items-center gap-2 text-base font-semibold px-6 py-3.5 rounded-full bg-white text-teal-medium border border-border-light hover:bg-surface-hover transition-all duration-300"
              >
                Ver como funciona
              </a>
            </div>

            {/* Quick Features */}
            <div className="flex flex-wrap gap-6 mt-10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-surface flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2D8C3C" strokeWidth="2.5">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm font-semibold text-teal-medium">Resultados rapidos</span>
                  <p className="text-xs text-text-secondary">Setup em 5 min</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-surface flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2D8C3C" strokeWidth="2.5">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm font-semibold text-teal-medium">Dados seguros</span>
                  <p className="text-xs text-text-secondary">Criptografia E2E</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Video */}
          <div className="flex-1 w-full lg:translate-x-[9.4vw] xl:translate-x-[14vw]">
            <div className="rounded-2xl overflow-hidden border border-gray-200/50" style={{ boxShadow: "0 25px 80px -12px rgba(0, 0, 0, 0.25), 0 12px 35px -8px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)" }}>
              <video
                ref={(el) => { if (el) el.playbackRate = 1.25; }}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto block object-cover scale-[1.02]"
                style={{ marginLeft: "-1%" }}
                preload="auto"
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
