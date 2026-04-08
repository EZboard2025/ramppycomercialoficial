import SectionWrapper from "./SectionWrapper";

const steps = [
  {
    number: "01",
    title: "Configure seu cenario",
    description: "Escolha a persona do cliente, idade, temperamento e objecoes. Defina o contexto da venda.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.32 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Faca a simulacao por voz",
    description: "Converse com a IA em uma videochamada realista. A IA reage as suas perguntas em tempo real.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Receba feedback SPIN",
    description: "Avaliacao completa nos 4 pilares: Situacao, Problema, Implicacao e Necessidade.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Evolua com a IA",
    description: "PDI personalizado, desafios diarios e copiloto em calls reais. Evolucao continua.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <SectionWrapper id="como-funciona">
      <div className="py-20 md:py-32">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 bg-green-surface text-primary-green text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Como funciona
          </span>
          <h2 className="font-[var(--font-fustat)] text-[32px] md:text-[48px] font-semibold leading-[110%] tracking-[-0.04em] text-teal-dark">
            Do zero ao resultado em{" "}
            <span className="text-primary-green">4 passos</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-text-secondary leading-relaxed max-w-lg mx-auto">
            Comece a treinar em minutos. Sem configuracao complexa, sem integracao demorada.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[60px] right-[60px] h-[2px] bg-gradient-to-r from-primary-green/30 via-primary-green/20 to-primary-green/30" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white border border-border-light rounded-2xl p-7 hover:border-primary-green/30 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  {/* Step number circle */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-[52px] h-[52px] rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center relative z-10">
                      <span className="font-[var(--font-fustat)] text-lg font-bold text-white">{step.number}</span>
                    </div>
                    <div className="w-11 h-11 rounded-xl bg-green-surface text-primary-green flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="font-[var(--font-fustat)] text-lg font-semibold text-teal-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed flex-1">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Demo CTA */}
        <div className="mt-20 text-center">
          <a
            href="#planos"
            className="font-[var(--font-fustat)] inline-flex items-center gap-2 text-base font-semibold px-8 py-4 rounded-full bg-primary-green text-white hover:bg-green-dark transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary-green/20"
          >
            Testar gratis agora
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
