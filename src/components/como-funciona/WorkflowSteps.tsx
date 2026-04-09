"use client";

import SectionWrapper from "../SectionWrapper";

const steps = [
  {
    number: 1,
    title: "Configure seus cenários",
    description:
      "O gestor define personas de clientes, objeções, temperamento e contexto da venda. Tudo personalizado para a realidade do seu time.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "Simulação por voz com IA",
    description:
      "O vendedor entra em uma videochamada com um cliente virtual gerado por IA. A conversa acontece por voz, em tempo real, com transcrição automática.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Análise automática de reuniões",
    description:
      "Conecte o Google Agenda e um bot entra automaticamente nas reuniões do Google Meet, transcreve e analisa cada call.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M8 14h.01" />
        <path d="M12 14h.01" />
        <path d="M16 14h.01" />
        <path d="M8 18h.01" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    number: 4,
    title: "Avaliação SPIN Selling",
    description:
      "Cada simulação e reunião real recebe uma avaliação detalhada nos 4 pilares: Situação, Problema, Implicação e Necessidade de Solução.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    number: 5,
    title: "Nicole IA — sua copiloto",
    description:
      "A assistente de IA acompanha a performance, sugere próximos passos, compara vendedores e responde qualquer pergunta sobre o time.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h.01" />
        <path d="M12 10h.01" />
        <path d="M16 10h.01" />
      </svg>
    ),
  },
  {
    number: 6,
    title: "Dashboard completo",
    description:
      "Visão geral da evolução de cada vendedor, métricas do time, histórico de simulações e reuniões analisadas.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
];

export default function WorkflowSteps() {
  return (
    <SectionWrapper>
      <div className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-16">
            <h2 className="font-[var(--font-fustat)] text-[32px] md:text-[48px] font-semibold leading-[110%] tracking-[-0.04em] text-teal-dark">
              Passo a passo
            </h2>
            <p className="mt-4 text-base md:text-lg text-text-secondary leading-relaxed max-w-xl mx-auto">
              Veja como cada etapa da plataforma trabalha para acelerar seu time de vendas.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex gap-6 md:gap-8 pb-12 last:pb-0 group">
                {/* Vertical line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[27px] md:left-[31px] top-[60px] w-[2px] h-[calc(100%-60px)] bg-gradient-to-b from-primary-green/30 to-border-light" />
                )}

                {/* Number circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-[56px] h-[56px] md:w-[64px] md:h-[64px] rounded-full bg-gradient-to-br from-primary-green to-[#1e6b2e] flex items-center justify-center text-white font-[var(--font-fustat)] text-xl md:text-2xl font-bold shadow-lg shadow-primary-green/20">
                    {step.number}
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 bg-white border border-border-light rounded-2xl p-7 hover:border-primary-green/30 hover:shadow-lg transition-all duration-300 mt-0.5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-surface flex items-center justify-center text-primary-green">
                      {step.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-[var(--font-fustat)] text-lg md:text-xl font-semibold text-teal-dark mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
