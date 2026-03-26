import SectionWrapper from "./SectionWrapper";

export default function CTA() {
  return (
    <SectionWrapper>
      <div className="py-16 md:py-24">
        <div className="relative bg-primary-green rounded-3xl p-8 md:p-16 text-center overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, white 0px, white 1px, transparent 1px, transparent 20px)",
              }}
            />
          </div>

          <div className="relative z-10">
            <h2 className="font-[var(--font-fustat)] text-[32px] md:text-[48px] font-semibold leading-[120%] tracking-[-0.04em] text-white">
              Pronto para transformar
              <br />
              suas vendas?
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
              Junte-se a mais de 500 vendedores que ja estao usando IA para
              vender mais e melhor. Comece gratis hoje.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="#planos"
                className="font-[var(--font-fustat)] inline-flex items-center gap-2 text-base font-semibold px-8 py-4 rounded-full bg-white text-primary-green hover:bg-gray-100 transition-all duration-300 hover:scale-[1.02]"
              >
                Comecar gratis agora
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#"
                className="font-[var(--font-fustat)] inline-flex items-center gap-2 text-base font-semibold px-8 py-4 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                Agendar demo
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-white/70">
              <span className="flex items-center gap-1.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Sem cartao de credito
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Setup em 5 minutos
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Cancele quando quiser
              </span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
