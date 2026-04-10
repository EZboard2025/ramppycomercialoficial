import SectionWrapper from "./SectionWrapper";

const steps = [
  {
    number: "01",
    title: "Reunião de diagnóstico",
    description: "Entendemos o cenário atual do seu time: processos, desafios e objetivos. Tudo para personalizar a plataforma à sua realidade.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Configuração assistida",
    description: "Nossa equipe configura personas, cenários e objeções junto com você. Seu time já começa treinando no contexto certo.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.32 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Onboarding do time",
    description: "Treinamos seus vendedores e gestores na plataforma. Todos saem usando desde o primeiro dia.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Acompanhamento contínuo",
    description: "Nosso time acompanha os resultados com você, ajusta cenários e garante que a plataforma evolua junto com seu time.",
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
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-20">
          <span className="inline-flex items-center gap-2 bg-green-surface text-primary-green text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 00-3-3.87" />
              <path d="M16 3.13a4 4 0 010 7.75" />
            </svg>
            Implementação
          </span>
          <h2 className="font-[var(--font-fustat)] text-2xl md:text-[32px] lg:text-[48px] font-semibold leading-[110%] tracking-[-0.04em] text-teal-dark">
            A gente implementa{" "}
            <span className="text-primary-green">com você</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-text-secondary leading-relaxed max-w-lg mx-auto">
            Você não fica sozinho. Nosso time te acompanha do primeiro acesso até os primeiros resultados.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[60px] right-[60px] h-[2px] bg-gradient-to-r from-primary-green/30 via-primary-green/20 to-primary-green/30" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white border border-border-light rounded-2xl p-5 md:p-7 hover:border-primary-green/30 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  {/* Step icon */}
                  <div className="flex items-center mb-6">
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

      </div>
    </SectionWrapper>
  );
}
