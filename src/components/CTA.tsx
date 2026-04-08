import SectionWrapper from "./SectionWrapper";

export default function CTA() {
  return (
    <SectionWrapper>
      <div className="py-20 md:py-32">
        <div className="relative bg-gradient-to-br from-teal-dark via-[#1e4d38] to-[#1a3a2a] rounded-3xl p-10 md:p-20 overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-green/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-green/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm font-semibold px-4 py-1.5 rounded-full mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              500+ vendedores ja estao usando
            </div>

            <h2 className="font-[var(--font-fustat)] text-[32px] md:text-[48px] lg:text-[56px] font-semibold leading-[110%] tracking-[-0.04em] text-white mb-6">
              Pronto para transformar suas vendas?
            </h2>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-lg mx-auto">
              Comece gratis hoje e veja resultados na primeira semana. Sem configuracao complexa, sem cartao de credito.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <a
                href="#planos"
                className="font-[var(--font-fustat)] inline-flex items-center gap-2 text-base font-semibold px-8 py-4 rounded-full bg-primary-green text-white hover:bg-green-dark transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary-green/30"
              >
                Comecar gratis agora
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#"
                className="font-[var(--font-fustat)] inline-flex items-center gap-2 text-base font-semibold px-8 py-4 rounded-full bg-white/10 text-white hover:bg-white/15 transition-all duration-300 border border-white/20"
              >
                Agendar demo
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/40">
              <span className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                Setup em 5 minutos
              </span>
              <span className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                Sem cartao de credito
              </span>
              <span className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                Cancele quando quiser
              </span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
