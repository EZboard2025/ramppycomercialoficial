"use client";

import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { useLocale } from "@/i18n/LocaleContext";

const planIcons = [
  (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="14" stroke="#22c55e" strokeWidth="1.5" />
      <circle cx="16" cy="12" r="4" stroke="#22c55e" strokeWidth="1.5" />
      <path d="M8 26c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="12" cy="12" r="4" stroke="#22c55e" strokeWidth="1.5" />
      <circle cx="22" cy="12" r="4" stroke="#22c55e" strokeWidth="1.5" />
      <path d="M4 26c0-4.4 3.6-8 8-8" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 26c0-4.4 3.6-8 8-8" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="4" y="8" width="24" height="18" rx="3" stroke="#22c55e" strokeWidth="1.5" />
      <path d="M4 14h24" stroke="#22c55e" strokeWidth="1.5" />
      <circle cx="16" cy="12" r="2" fill="#22c55e" />
      <path d="M10 20h4M10 23h8" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="6" y="4" width="20" height="24" rx="3" stroke="#22c55e" strokeWidth="1.5" />
      <path d="M11 10h10M11 14h10M11 18h6" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="22" cy="22" r="6" fill="#0f1c14" stroke="#22c55e" strokeWidth="1.5" />
      <path d="M20 22h4M22 20v4" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
];

const plansByLocale = {
  pt: {
    title: "Pricing",
    monthly: "Mensal",
    yearly: "Anual",
    billedYearly: "Cobrado anualmente",
    custom: "Personalizado",
    popular: "Popular",
    perMonth: "/mes",
    currency: "R$",
    includes: "Inclui:",
    everythingFrom: (p: string) => `Tudo do ${p}, mais:`,
    everythingTeamPlus: "Tudo do Team, mais:",
    trust: ["Cancele quando quiser", "Suporte em português"],
    whatsappMessage: (plan: string) => `Olá, tenho interesse no plano ${plan} da Ramppy`,
    plans: [
      {
        name: "Pro",
        subtitle: "Até 10 vendedores",
        monthlyPrice: "2.400",
        yearlyPrice: "1.920",
        features: ["Até 10 vendedores", "Simulações de roleplay", "Avaliação SPIN completa", "Análise de Meet automática", "Copiloto Nicole IA", "App Desktop"],
        cta: "Começar agora",
        highlighted: false,
      },
      {
        name: "Team",
        subtitle: "Até 20 vendedores",
        monthlyPrice: "3.499",
        yearlyPrice: "2.799",
        features: ["Até 20 vendedores", "Tudo do Pro", "Dashboard de gestao", "Histórico completo", "PDI personalizado + desafios", "Personas customizadas"],
        cta: "Começar agora",
        highlighted: false,
      },
      {
        name: "Business",
        subtitle: "De 20 a 50 vendedores",
        monthlyPrice: "7.499",
        yearlyPrice: "5.999",
        features: ["20 a 50 vendedores", "Tudo do Team", "Creditos extras sob demanda", "Objeções customizadas", "Onboarding dedicado", "Suporte prioritário"],
        cta: "Começar agora",
        highlighted: true,
      },
      {
        name: "Enterprise",
        subtitle: "+50 vendedores",
        monthlyPrice: null,
        yearlyPrice: null,
        features: ["Creditos sob demanda", "+50 vendedores", "Tudo do Business", "API de integração", "SLA garantido", "Gestor de conta dedicado", "Treinamento personalizado"],
        cta: "Falar com vendas",
        highlighted: false,
      },
    ],
  },
  es: {
    title: "Precios",
    monthly: "Mensual",
    yearly: "Anual",
    billedYearly: "Facturado anualmente",
    custom: "Personalizado",
    popular: "Popular",
    perMonth: "/mes",
    currency: "$",
    includes: "Incluye:",
    everythingFrom: (p: string) => `Todo lo de ${p}, y además:`,
    everythingTeamPlus: "Todo lo de Team, y además:",
    trust: ["Cancela cuando quieras", "Soporte en español"],
    whatsappMessage: (plan: string) => `Hola, me interesa el plan ${plan} de Ramppy`,
    plans: [
      {
        name: "Pro",
        subtitle: "Hasta 10 vendedores",
        monthlyPrice: "249",
        yearlyPrice: "199",
        features: ["Hasta 10 vendedores", "Simulaciones de roleplay", "Evaluación SPIN completa", "Análisis de Meet automático", "Copiloto Nicole IA", "App Desktop"],
        cta: "Empezar ahora",
        highlighted: false,
      },
      {
        name: "Team",
        subtitle: "Hasta 20 vendedores",
        monthlyPrice: "399",
        yearlyPrice: "329",
        features: ["Hasta 20 vendedores", "Todo lo de Pro", "Panel de gestión", "Historial completo", "PDI personalizado + desafíos", "Personas customizadas"],
        cta: "Empezar ahora",
        highlighted: false,
      },
      {
        name: "Business",
        subtitle: "De 20 a 50 vendedores",
        monthlyPrice: "999",
        yearlyPrice: "799",
        features: ["20 a 50 vendedores", "Todo lo de Team", "Créditos extra bajo demanda", "Objeciones customizadas", "Onboarding dedicado", "Soporte prioritario"],
        cta: "Empezar ahora",
        highlighted: true,
      },
      {
        name: "Enterprise",
        subtitle: "+50 vendedores",
        monthlyPrice: null,
        yearlyPrice: null,
        features: ["Créditos bajo demanda", "+50 vendedores", "Todo lo de Business", "API de integración", "SLA garantizado", "Gestor de cuenta dedicado", "Capacitación personalizada"],
        cta: "Hablar con ventas",
        highlighted: false,
      },
    ],
  },
  en: {
    title: "Pricing",
    monthly: "Monthly",
    yearly: "Yearly",
    billedYearly: "Billed annually",
    custom: "Custom",
    popular: "Popular",
    perMonth: "/mo",
    currency: "$",
    includes: "Includes:",
    everythingFrom: (p: string) => `Everything in ${p}, plus:`,
    everythingTeamPlus: "Everything in Team, plus:",
    trust: ["Cancel anytime", "Dedicated support"],
    whatsappMessage: (plan: string) => `Hi, I'm interested in the ${plan} plan at Ramppy`,
    plans: [
      {
        name: "Pro",
        subtitle: "Up to 10 reps",
        monthlyPrice: "249",
        yearlyPrice: "199",
        features: ["Up to 10 reps", "Roleplay simulations", "Full SPIN evaluation", "Automatic Meet analysis", "Nicole AI Copilot", "Desktop App"],
        cta: "Get started",
        highlighted: false,
      },
      {
        name: "Team",
        subtitle: "Up to 20 reps",
        monthlyPrice: "399",
        yearlyPrice: "329",
        features: ["Up to 20 reps", "Everything in Pro", "Management dashboard", "Full history", "Custom PDI + challenges", "Custom personas"],
        cta: "Get started",
        highlighted: false,
      },
      {
        name: "Business",
        subtitle: "From 20 to 50 reps",
        monthlyPrice: "999",
        yearlyPrice: "799",
        features: ["20 to 50 reps", "Everything in Team", "Extra credits on demand", "Custom objections", "Dedicated onboarding", "Priority support"],
        cta: "Get started",
        highlighted: true,
      },
      {
        name: "Enterprise",
        subtitle: "50+ reps",
        monthlyPrice: null,
        yearlyPrice: null,
        features: ["Credits on demand", "50+ reps", "Everything in Business", "Integration API", "Guaranteed SLA", "Dedicated account manager", "Custom training"],
        cta: "Talk to sales",
        highlighted: false,
      },
    ],
  },
};

export default function Pricing() {
  const locale = useLocale();
  const t = plansByLocale[locale];
  const plans = t.plans;
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");

  return (
    <SectionWrapper id="planos" dark>
      <div className="py-12 md:py-14">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-5">
          <h2 className="font-[var(--font-fustat)] text-2xl md:text-[36px] lg:text-[56px] font-semibold leading-[110%] tracking-[-0.04em] text-white">
            {t.title}
          </h2>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center bg-white/[0.06] rounded-full p-1 border border-white/10">
            <button
              onClick={() => setBilling("monthly")}
              className={`relative px-4 md:px-6 py-2 md:py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                billing === "monthly"
                  ? "bg-white/[0.12] text-white shadow-sm border border-white/15"
                  : "text-white/50 hover:text-white/70"
              }`}
            >
              {t.monthly}
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`relative px-4 md:px-6 py-2 md:py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                billing === "yearly"
                  ? "bg-white/[0.12] text-white shadow-sm border border-white/15"
                  : "text-white/50 hover:text-white/70"
              }`}
            >
              {t.yearly}
              <span className="ml-2 text-[11px] text-emerald-400 font-semibold">-20%</span>
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1200px] mx-auto items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl flex flex-col transition-all duration-300 ${
                plan.highlighted
                  ? "bg-white/[0.06] border-2 border-primary-green/60 shadow-[0_0_40px_-10px_rgba(34,197,94,0.15)]"
                  : "bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05]"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary-green text-white text-xs font-bold px-5 py-1.5 rounded-full tracking-wide uppercase">
                  {t.popular}
                </div>
              )}

              <div className={`p-5 md:p-7 flex flex-col ${plan.highlighted ? "pt-8 md:pt-10" : ""}`}>
                {/* Icon */}
                <div className="mb-5 opacity-80">
                  {planIcons[idx]}
                </div>

                {/* Plan Name */}
                <h3 className="font-[var(--font-fustat)] text-xl font-bold text-white">
                  {plan.name}
                </h3>
                <p className="text-sm text-white/40 mt-1">
                  {plan.subtitle}
                </p>

                {/* Price */}
                <div className="mt-5 mb-2">
                  {plan.monthlyPrice ? (
                    <>
                      <span className="font-[var(--font-fustat)] text-2xl md:text-[32px] lg:text-[36px] font-bold text-white leading-none">
                        {t.currency}{billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="text-sm text-white/40 ml-1">{t.perMonth}</span>
                    </>
                  ) : (
                    <span className="font-[var(--font-fustat)] text-xl md:text-[28px] lg:text-[32px] font-bold text-white leading-none">
                      {t.custom}
                    </span>
                  )}
                </div>
                <div className="h-5">
                  {plan.monthlyPrice && billing === "yearly" && (
                    <p className="text-xs text-emerald-400/70">
                      {t.billedYearly}
                    </p>
                  )}
                </div>

                {/* CTA */}
                <a
                  href={`https://wa.me/5531995525157?text=${encodeURIComponent(t.whatsappMessage(plan.name))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto font-[var(--font-fustat)] w-full text-center text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-300 block ${
                    plan.highlighted
                      ? "bg-white text-teal-dark hover:bg-white/90 shadow-lg"
                      : "bg-white/[0.08] text-white hover:bg-white/[0.12] border border-white/[0.1]"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>

              {/* Divider */}
              <div className={`mx-7 border-t ${plan.highlighted ? "border-white/10" : "border-white/[0.06]"}`} />

              {/* Features */}
              <div className="p-5 md:p-7 pt-4 md:pt-6 flex-1">
                <p className="text-xs font-medium text-white/30 uppercase tracking-wider mb-4">
                  {plan.highlighted ? t.everythingTeamPlus : idx === 0 ? t.includes : t.everythingFrom(plans[idx - 1]?.name ?? "")}
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3">
                      <svg
                        className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-400/80"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-[13px] text-white/55 leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8 md:mt-14 text-xs md:text-sm text-white/35">
          {t.trust.map((item) => (
            <span key={item} className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
              {item}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
