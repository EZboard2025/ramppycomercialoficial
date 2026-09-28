"use client";

import SectionWrapper from "./SectionWrapper";
import { useLocale } from "@/i18n/LocaleContext";

type Locale = "pt" | "es" | "en";

type Uso = {
  title: string;
  text: string;
};

type Copy = {
  eyebrow: string;
  title: string;
  usos: Uso[];
  priceNote: string;
  cta: string;
  whatsapp: string;
  trust: string[];
};

const COPY: Record<Locale, Copy> = {
  pt: {
    eyebrow: "Créditos",
    title: "Sem mensalidade. Você compra créditos de simulação.",
    usos: [
      {
        title: "Contratação",
        text: "Cada candidato que faz a simulação pelo link usa créditos do seu saldo.",
      },
      {
        title: "Treinamento",
        text: "Cada tentativa do time numa fase da jornada usa créditos do seu saldo.",
      },
      {
        title: "Sob demanda",
        text: "Compre pacotes quando precisar. Os créditos não expiram.",
      },
    ],
    priceNote: "Fale com a gente para receber os valores dos pacotes.",
    cta: "Quero comprar créditos",
    whatsapp:
      "Olá, quero comprar créditos para simulações com cliente sintético na Ramppy.",
    trust: ["Sem fidelidade", "Suporte em português", "Teste grátis com a nossa equipe"],
  },
  es: {
    eyebrow: "Créditos",
    title: "Sin mensualidad. Compras créditos de simulación.",
    usos: [
      {
        title: "Contratación",
        text: "Cada candidato que hace la simulación por el enlace usa créditos de tu saldo.",
      },
      {
        title: "Entrenamiento",
        text: "Cada intento del equipo en una fase de la jornada usa créditos de tu saldo.",
      },
      {
        title: "A demanda",
        text: "Compra paquetes cuando los necesites. Los créditos no expiran.",
      },
    ],
    priceNote: "Habla con nosotros para conocer los valores de los paquetes.",
    cta: "Quiero comprar créditos",
    whatsapp:
      "Hola, quiero comprar créditos para simulaciones con cliente sintético en Ramppy.",
    trust: ["Sin permanencia", "Soporte en español", "Prueba gratis con nuestro equipo"],
  },
  en: {
    eyebrow: "Credits",
    title: "No monthly fee. You buy simulation credits.",
    usos: [
      {
        title: "Hiring",
        text: "Each candidate who runs the simulation through the link uses credits from your balance.",
      },
      {
        title: "Training",
        text: "Each team attempt at a journey phase uses credits from your balance.",
      },
      {
        title: "On demand",
        text: "Buy packs when you need them. Credits never expire.",
      },
    ],
    priceNote: "Talk to us to get pack pricing.",
    cta: "I want to buy credits",
    whatsapp: "Hi, I'd like to buy simulation credits for Ramppy.",
    trust: ["No lock-in", "Dedicated support", "Free trial with our team"],
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
            {t.title}
          </h2>
        </header>

        {/* Hairline */}
        <div className="mt-16 md:mt-20 h-px w-full bg-[#E5E7EB]" />

        {/* Where credits go: three columns separated by a single hairline */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-[#E5E7EB]">
          {t.usos.map((uso) => (
            <article
              key={uso.title}
              className="py-8 md:px-10 lg:px-14 md:py-16 first:md:pl-0 last:md:pr-0"
            >
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-green">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-green" aria-hidden />
                {uso.title}
              </p>
              <p className="mt-4 text-[17px] md:text-[18px] leading-[1.55] text-[#1F2937]">
                {uso.text}
              </p>
            </article>
          ))}
        </div>

        {/* Hairline */}
        <div className="h-px w-full bg-[#E5E7EB]" />

        {/* Buy */}
        <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-12 md:py-16">
          <p className="text-[15px] leading-[1.65] text-[#4B5563]">{t.priceNote}</p>
          <a
            href={buildWa(t.whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 h-11 rounded-full px-6 text-[14px] font-medium bg-primary-green text-white hover:bg-primary-light shadow-[0_8px_24px_-12px_rgba(45,140,60,0.65)] transition-all duration-200"
          >
            <span>{t.cta}</span>
            <Arrow className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
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
        </div>
      </div>
    </SectionWrapper>
  );
}
