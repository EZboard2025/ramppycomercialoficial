import SectionWrapper from "./SectionWrapper";

export default function CTA() {
  return (
    <SectionWrapper>
      <div className="py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[var(--font-fustat)] text-[36px] md:text-[52px] lg:text-[64px] font-semibold leading-[105%] tracking-[-0.05em] text-teal-dark mb-6">
            Pronto para transformar suas{" "}
            <span className="clip-text">vendas?</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-10 max-w-lg mx-auto">
            Comece grátis hoje e veja resultados na primeira semana. Sem configuração complexa, sem cartão de crédito.
          </p>

          <div className="text-center">
            <a
              href="https://wa.me/5531995525157?text=Ol%C3%A1%2C%20quero%20come%C3%A7ar%20a%20usar%20a%20Ramppy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[var(--font-fustat)] inline-flex items-center gap-2 text-base font-semibold px-8 py-4 rounded-full bg-primary-green text-white hover:bg-green-dark transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary-green/20"
            >
              Começar grátis agora
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
