"use client";

import SectionWrapper from "./SectionWrapper";

const plans = [
  {
    name: "Starter",
    price: "Gratis",
    priceDetail: "para sempre",
    description: "Para quem quer comecar a treinar vendas com IA.",
    features: [
      "3 simulacoes de roleplay/mes",
      "Avaliacao SPIN basica",
      "Perfil de performance",
      "1 persona padrao",
    ],
    cta: "Comecar gratis",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "R$ 97",
    priceDetail: "/mes por vendedor",
    description: "Para vendedores que querem evoluir rapido.",
    features: [
      "Simulacoes ilimitadas",
      "Analise SPIN completa + feedback",
      "Analise de Meet automatica",
      "WhatsApp integrado",
      "Copiloto Nicole IA",
      "PDI personalizado + desafios",
      "Historico completo",
      "App Desktop",
    ],
    cta: "Comecar teste gratis",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    priceDetail: "para times grandes",
    description: "Para empresas com equipes de vendas completas.",
    features: [
      "Tudo do Pro",
      "Dashboard de gestao",
      "Personas e objecoes customizadas",
      "Onboarding dedicado",
      "API de integracao",
      "Suporte prioritario",
      "SLA garantido",
    ],
    cta: "Falar com vendas",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <SectionWrapper id="planos" dark>
      <div className="py-16 md:py-24">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
            </svg>
            Planos
          </span>
          <h2 className="font-[var(--font-fustat)] text-[32px] md:text-[48px] font-semibold leading-[120%] tracking-[-0.04em] text-white">
            Escolha o plano ideal
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/60 leading-relaxed">
            Comece gratis e escale conforme seu time cresce.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-6 md:p-8 flex flex-col ${
                plan.highlighted
                  ? "bg-white text-teal-dark border-2 border-primary-green shadow-xl shadow-primary-green/10 scale-[1.02] md:scale-105"
                  : "bg-white/5 text-white border border-white/10"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-green text-white text-xs font-bold px-4 py-1 rounded-full">
                  Mais popular
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`font-[var(--font-fustat)] text-lg font-semibold ${
                    plan.highlighted ? "text-teal-dark" : "text-white"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span
                    className={`font-[var(--font-fustat)] text-4xl font-bold ${
                      plan.highlighted ? "text-teal-dark" : "text-white"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.highlighted ? "text-text-secondary" : "text-white/50"
                    }`}
                  >
                    {plan.priceDetail}
                  </span>
                </div>
                <p
                  className={`mt-2 text-sm ${
                    plan.highlighted ? "text-text-secondary" : "text-white/60"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-3">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      className={`mt-0.5 flex-shrink-0 ${
                        plan.highlighted
                          ? "stroke-primary-green"
                          : "stroke-white/60"
                      }`}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span
                      className={`text-sm ${
                        plan.highlighted ? "text-text-secondary" : "text-white/70"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`font-[var(--font-fustat)] w-full text-center text-base font-semibold px-6 py-3.5 rounded-full transition-all duration-300 block ${
                  plan.highlighted
                    ? "bg-primary-green text-white hover:bg-green-dark"
                    : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
