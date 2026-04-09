"use client";

import SectionWrapper from "../SectionWrapper";

const pillars = [
  {
    letter: "S",
    name: "Situação",
    color: "bg-blue-500",
    colorLight: "bg-blue-50",
    colorText: "text-blue-600",
    colorBorder: "border-blue-200",
    description:
      "Perguntas para entender o contexto do cliente. São as perguntas iniciais que mapeiam o cenário atual, ajudando o vendedor a construir uma base sólida para a conversa.",
    examples: [
      "Quantos vendedores tem no time?",
      "Qual CRM vocês usam hoje?",
      "Como é o processo de onboarding atual?",
    ],
  },
  {
    letter: "P",
    name: "Problema",
    color: "bg-amber-500",
    colorLight: "bg-amber-50",
    colorText: "text-amber-600",
    colorBorder: "border-amber-200",
    description:
      "Perguntas para identificar dores e desafios. Aqui o vendedor investiga o que não está funcionando bem, revelando as frustrações e gargalos do cliente.",
    examples: [
      "Qual o maior desafio do time hoje?",
      "Onde vocês perdem mais negócios?",
      "O que impede o time de bater meta?",
    ],
  },
  {
    letter: "I",
    name: "Implicação",
    color: "bg-red-500",
    colorLight: "bg-red-50",
    colorText: "text-red-600",
    colorBorder: "border-red-200",
    description:
      "Perguntas sobre as consequências dos problemas. Fazem o cliente perceber o real impacto das dores identificadas, gerando urgência para a mudança.",
    examples: [
      "Quanto custa cada vendedor que não bate meta?",
      "Como isso afeta a moral do time?",
      "Qual o impacto no faturamento?",
    ],
  },
  {
    letter: "N",
    name: "Necessidade de Solução",
    color: "bg-emerald-500",
    colorLight: "bg-emerald-50",
    colorText: "text-emerald-600",
    colorBorder: "border-emerald-200",
    description:
      "Perguntas que levam o cliente a verbalizar o valor da solução. Em vez de o vendedor apresentar benefícios, o próprio cliente articula como a solução resolveria seus problemas.",
    examples: [
      "Se o ramp-up fosse 50% mais rápido, qual o impacto?",
      "Como seria ter visibilidade total das calls?",
      "O que mudaria se cada vendedor recebesse coaching diário?",
    ],
  },
];

export default function SpinPillarDetail() {
  return (
    <SectionWrapper>
      <div className="py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-[var(--font-fustat)] text-[32px] md:text-[48px] font-semibold leading-[110%] tracking-[-0.04em] text-teal-dark">
            Os 4 pilares do SPIN
          </h2>
          <p className="mt-4 text-base md:text-lg text-text-secondary leading-relaxed max-w-xl mx-auto">
            Cada pilar representa um tipo de pergunta estratégica que guia a conversa de vendas do contexto até a decisão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p) => (
            <div
              key={p.letter}
              className={`bg-white border border-border-light rounded-2xl p-7 flex flex-col gap-5 hover:shadow-lg transition-shadow duration-300`}
            >
              {/* Header */}
              <div className="flex items-center gap-4">
                <div
                  className={`w-14 h-14 ${p.color} rounded-xl flex items-center justify-center text-white text-2xl font-bold shrink-0`}
                >
                  {p.letter}
                </div>
                <h3 className="font-[var(--font-fustat)] text-xl md:text-2xl font-semibold text-teal-dark">
                  {p.name}
                </h3>
              </div>

              {/* Description */}
              <p className="text-text-secondary text-base leading-relaxed">
                {p.description}
              </p>

              {/* Example questions */}
              <div className={`${p.colorLight} rounded-xl p-5 border ${p.colorBorder}`}>
                <span className={`text-sm font-semibold ${p.colorText} mb-3 block`}>
                  Exemplos de perguntas:
                </span>
                <ul className="space-y-2">
                  {p.examples.map((ex, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-teal-dark">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className={`mt-0.5 shrink-0 ${p.colorText}`}
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                      <span>&ldquo;{ex}&rdquo;</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
