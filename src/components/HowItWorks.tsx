import SectionWrapper from "./SectionWrapper";

const steps = [
  {
    number: "01",
    title: "Configure seu cenario",
    description:
      "Escolha a persona do cliente, idade, temperamento e objecoes. Defina o objetivo da simulacao e o contexto da venda.",
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
    description:
      "Converse com a IA em uma videochamada realista. A IA assume o papel do cliente e reage as suas perguntas em tempo real.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Receba feedback detalhado",
    description:
      "Avaliacao completa com SPIN Selling: Situacao, Problema, Implicacao e Necessidade. Veja oportunidades perdidas e pontos fortes.",
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
    description:
      "Receba um PDI personalizado, desafios diarios e acompanhe metricas em tempo real. O copiloto te ajuda em calls reais.",
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
      <div className="py-16 md:py-24">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 bg-green-surface text-primary-green text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Como funciona
          </span>
          <h2 className="font-[var(--font-fustat)] text-[32px] md:text-[48px] font-semibold leading-[120%] tracking-[-0.04em] text-teal-dark">
            Do zero ao resultado em{" "}
            <span className="text-primary-green">4 passos</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Connector line (desktop) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(100%+4px)] w-[calc(100%-48px)] h-[2px] bg-gradient-to-r from-primary-green/40 to-primary-green/10 -translate-x-4" />
              )}

              <div className="bg-white border border-border-light rounded-2xl p-6 hover:border-primary-green/30 hover:shadow-md transition-all duration-300 h-full">
                {/* Step number + icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-[var(--font-fustat)] text-3xl font-bold text-primary-green/20">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-green-surface text-primary-green flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <h3 className="font-[var(--font-fustat)] text-lg font-semibold text-teal-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Demo CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 bg-gray-50 rounded-2xl p-8 md:p-12 border border-border-light">
            <div className="w-16 h-16 rounded-2xl bg-primary-green flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
            <h3 className="font-[var(--font-fustat)] text-2xl font-semibold text-teal-dark">
              Veja na pratica
            </h3>
            <p className="text-text-secondary max-w-md">
              Assista uma simulacao completa de roleplay com IA e entenda como a
              avaliacao SPIN funciona.
            </p>
            <a
              href="#planos"
              className="font-[var(--font-fustat)] inline-flex items-center gap-2 text-base font-semibold px-6 py-3.5 rounded-full bg-primary-green text-white hover:bg-green-dark transition-all duration-300"
            >
              Testar gratis agora
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
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
