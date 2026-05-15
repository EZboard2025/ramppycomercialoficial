"use client";

import SectionWrapper from "./SectionWrapper";
import { useLocale } from "@/i18n/LocaleContext";

type Locale = "pt" | "es" | "en";

type Plan = {
  key: "standard" | "pro";
  name: string;
  subtitle: string;
  features: string[];
  popular?: boolean;
};

type Copy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  popular: string;
  includes: string;
  includesScope: string;
  ctaPlan: string;
  ctaCredits: string;
  whatsappPlan: (plan: string) => string;
  whatsappCredits: string;
  plans: Plan[];
  credits: {
    eyebrow: string;
    title: string;
    description: string;
    bullets: string[];
  };
  trust: string[];
};

const COPY: Record<Locale, Copy> = {
  pt: {
    eyebrow: "Planos",
    title: "Planos",
    subtitle: "Escolha o plano que combina com o seu time.",
    popular: "Mais popular",
    includes: "Inclui",
    includesScope: "Para análise de reuniões",
    ctaPlan: "Falar com consultor",
    ctaCredits: "Quero comprar créditos",
    whatsappPlan: (plan) => `Olá, tenho interesse no plano ${plan} da Ramppy.`,
    whatsappCredits:
      "Olá, quero comprar créditos para simulações com cliente sintético na Ramppy.",
    plans: [
      {
        key: "standard",
        name: "Standard",
        subtitle: "Pro começo da operação",
        features: [
          "Transcrição da call sem bot",
          "Resumo personalizado da call",
          "Dashboard para o gestor",
          "Nota geral da transcrição",
        ],
      },
      {
        key: "pro",
        name: "Pro",
        subtitle: "Evolução do Standard",
        popular: true,
        features: [
          "Nota com explicação detalhada",
          "Avaliação completa de cada call",
          "Insights sobre objeções e padrões",
          "Relatórios comparativos entre vendedores",
        ],
      },
    ],
    credits: {
      eyebrow: "Comprados à parte",
      title: "Créditos para simulações com cliente sintético",
      description:
        "Para rodar simulações com cliente sintético você precisa de créditos, comprados à parte do plano. Cada simulação consome créditos do seu saldo. Sem mensalidade extra, sem fidelidade.",
      bullets: [
        "Disponível em qualquer plano",
        "Pacotes flexíveis e sob demanda",
        "Créditos não expiram",
      ],
    },
    trust: ["Cancele quando quiser", "Suporte em português", "Sem fidelidade"],
  },
  es: {
    eyebrow: "Planes",
    title: "Planes",
    subtitle: "Elige el plan que va con tu equipo.",
    popular: "Más popular",
    includes: "Incluye",
    includesScope: "Para análisis de reuniones",
    ctaPlan: "Hablar con un consultor",
    ctaCredits: "Quiero comprar créditos",
    whatsappPlan: (plan) => `Hola, me interesa el plan ${plan} de Ramppy.`,
    whatsappCredits:
      "Hola, quiero comprar créditos para simulaciones con cliente sintético en Ramppy.",
    plans: [
      {
        key: "standard",
        name: "Standard",
        subtitle: "Para empezar la operación",
        features: [
          "Transcripción de la llamada sin bot",
          "Resumen personalizado de la llamada",
          "Dashboard para el gestor",
          "Nota general de la transcripción",
        ],
      },
      {
        key: "pro",
        name: "Pro",
        subtitle: "Evolución del Standard",
        popular: true,
        features: [
          "Nota con explicación detallada",
          "Evaluación completa de cada llamada",
          "Insights sobre objeciones y patrones",
          "Reportes comparativos entre vendedores",
        ],
      },
    ],
    credits: {
      eyebrow: "Comprados aparte",
      title: "Créditos para simulaciones con cliente sintético",
      description:
        "Para correr simulaciones con cliente sintético necesitas créditos, comprados aparte del plan. Cada simulación consume créditos de tu saldo. Sin mensualidad extra, sin permanencia.",
      bullets: [
        "Disponible en cualquier plan",
        "Paquetes flexibles y bajo demanda",
        "Los créditos no expiran",
      ],
    },
    trust: ["Cancela cuando quieras", "Soporte en español", "Sin permanencia"],
  },
  en: {
    eyebrow: "Plans",
    title: "Plans",
    subtitle: "Pick the plan that fits your team.",
    popular: "Most popular",
    includes: "Includes",
    includesScope: "For meeting analysis",
    ctaPlan: "Talk to a consultant",
    ctaCredits: "I want to buy credits",
    whatsappPlan: (plan) => `Hi, I'm interested in the ${plan} plan at Ramppy.`,
    whatsappCredits:
      "Hi, I'd like to buy credits for roleplay simulations at Ramppy.",
    plans: [
      {
        key: "standard",
        name: "Standard",
        subtitle: "To get the operation started",
        features: [
          "Call transcription without bot",
          "Custom call summary",
          "Manager dashboard",
          "General transcription score",
        ],
      },
      {
        key: "pro",
        name: "Pro",
        subtitle: "Evolution of Standard",
        popular: true,
        features: [
          "Score with detailed explanation",
          "Full call evaluation",
          "Objection and pattern insights",
          "Cross-rep comparison reports",
        ],
      },
    ],
    credits: {
      eyebrow: "Bought separately",
      title: "Credits for roleplay simulations",
      description:
        "To run AI roleplay simulations you need credits, bought separately from your plan. Each simulation consumes credits from your balance. No extra monthly fee, no lock-in.",
      bullets: [
        "Available on any plan",
        "Flexible, on-demand packs",
        "Credits never expire",
      ],
    },
    trust: ["Cancel anytime", "Dedicated support", "No lock-in"],
  },
};

const WHATSAPP = "https://wa.me/5531995525157";
const buildWa = (msg: string) => `${WHATSAPP}?text=${encodeURIComponent(msg)}`;

function Check({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path
        d="M3.5 8.5l3 3 6-6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path
        d="M3.5 8h9M9 4.5L12.5 8 9 11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Pricing() {
  const locale = useLocale() as Locale;
  const t = COPY[locale];

  return (
    <SectionWrapper id="planos">
      <div className="py-20 md:py-28 lg:py-32 text-[#0A0A0A]">
        {/* Header */}
        <header className="max-w-3xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
            {t.eyebrow}
          </p>
          <h2 className="mt-4 font-[var(--font-fustat)] text-[40px] md:text-[56px] lg:text-[64px] font-medium leading-[1.02] tracking-[-0.035em] text-[#0A0A0A]">
            {t.subtitle}
          </h2>
        </header>

        {/* Hairline */}
        <div className="mt-16 md:mt-20 h-px w-full bg-[#E5E7EB]" />

        {/* Plans — two columns separated by a single hairline */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-[#E5E7EB]">
          {t.plans.map((plan) => {
            const popular = !!plan.popular;
            return (
              <article
                key={plan.key}
                className={[
                  "relative flex flex-col",
                  "px-6 md:px-10 lg:px-14",
                  "pt-12 md:pt-16 pb-12 md:pb-16",
                  popular
                    ? "bg-primary-green/[0.025] md:-mx-px"
                    : "",
                ].join(" ")}
              >
                {popular && (
                  <span
                    className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-primary-green"
                    aria-hidden="true"
                  />
                )}

                {/* Plan label row */}
                <div className="flex items-baseline justify-between">
                  <h3 className="font-[var(--font-fustat)] text-[28px] md:text-[32px] font-medium tracking-[-0.02em] text-[#0A0A0A]">
                    {plan.name}
                  </h3>
                  {popular && (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-green">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-green" aria-hidden />
                      {t.popular}
                    </span>
                  )}
                </div>

                <p className="mt-2 text-[15px] leading-relaxed text-[#6B7280]">
                  {plan.subtitle}
                </p>

                {/* CTA */}
                <a
                  href={buildWa(t.whatsappPlan(plan.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={[
                    "group mt-10 inline-flex w-full items-center justify-center gap-2",
                    "h-11 rounded-full px-5 text-[14px] font-medium",
                    "transition-all duration-200",
                    popular
                      ? "bg-primary-green text-white hover:bg-primary-light shadow-[0_8px_24px_-12px_rgba(45,140,60,0.65)]"
                      : "bg-white text-[#0A0A0A] border border-[#E5E7EB] hover:border-[#0A0A0A]",
                  ].join(" ")}
                >
                  <span>{t.ctaPlan}</span>
                  <Arrow className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>

                {/* Includes label + scope */}
                <p className="mt-12 flex flex-wrap items-baseline gap-x-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
                  <span>{t.includes}</span>
                  <span className="text-[#9CA3AF]">·</span>
                  <span className="text-primary-green/85">{t.includesScope}</span>
                </p>

                {/* Feature list */}
                <ul className="mt-4 divide-y divide-[#EEF0F2]">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 py-3.5"
                    >
                      <Check
                        className={[
                          "mt-[3px] h-4 w-4 flex-shrink-0",
                          popular ? "text-primary-green" : "text-[#0A0A0A]",
                        ].join(" ")}
                      />
                      <span className="text-[15px] leading-relaxed text-[#1F2937]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        {/* Hairline */}
        <div className="h-px w-full bg-[#E5E7EB]" />

        {/* Credits add-on */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 py-12 md:py-16">
          <div className="md:col-span-4">
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-green">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-green" aria-hidden />
              {t.credits.eyebrow}
            </p>
            <h3 className="mt-4 font-[var(--font-fustat)] text-[26px] md:text-[32px] font-semibold leading-[1.1] tracking-[-0.025em] text-[#0A0A0A]">
              {t.credits.title}
            </h3>
          </div>

          <div className="md:col-span-5">
            <p className="text-[15px] leading-[1.65] text-[#4B5563]">
              {t.credits.description}
            </p>
            <ul className="mt-6 space-y-2.5">
              {t.credits.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-[14px] text-[#1F2937]"
                >
                  <Check className="mt-[3px] h-4 w-4 flex-shrink-0 text-primary-green" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 md:flex md:items-end md:justify-end">
            <a
              href={buildWa(t.whatsappCredits)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[14px] font-medium text-primary-green border-b border-primary-green pb-1 hover:gap-3 hover:text-primary-light hover:border-primary-light transition-all duration-200"
            >
              <span>{t.ctaCredits}</span>
              <Arrow className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        </section>

        {/* Hairline */}
        <div className="h-px w-full bg-[#E5E7EB]" />

        {/* Trust strip */}
        <div className="flex flex-wrap items-center gap-x-10 gap-y-3 pt-8 text-[12px] text-[#6B7280]">
          {t.trust.map((item, i) => (
            <span key={item} className="flex items-center gap-2">
              {i > 0 && (
                <span
                  className="hidden md:inline-block h-1 w-1 rounded-full bg-[#D1D5DB] -ml-5 mr-3"
                  aria-hidden
                />
              )}
              <Check className="h-3.5 w-3.5 text-primary-green" />
              <span>{item}</span>
            </span>
          ))}
          <span
            className="flex items-center gap-2 text-[12px] text-[#6B7280] md:before:inline-block md:before:h-1 md:before:w-1 md:before:rounded-full md:before:bg-[#D1D5DB] md:before:mr-3"
          >
          </span>
        </div>
      </div>
    </SectionWrapper>
  );
}
