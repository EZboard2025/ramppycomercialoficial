"use client";

import SectionWrapper from "@/components/SectionWrapper";
import CTA from "@/components/CTA";
import { useLocale } from "@/i18n/LocaleContext";

const strings = {
  pt: {
    badge: "Como funciona",
    heroTitle: "Do setup ao resultado em minutos",
    heroSubtitle:
      "O Ramppy funciona em etapas simples. Cada uma foi pensada para que seu time evolua sem complicação, com resultados visíveis desde o primeiro dia.",
    steps: [
      {
        badge: "Passo 01",
        title: "O gestor configura os cenários",
        text: "O gestor seleciona personas, tipo de venda e objeções direto no painel. Cada simulação é montada sob medida para a realidade do time.",
      },
      {
        badge: "Passo 02",
        title: "O vendedor prepara sua sessão",
        text: "Antes de começar, o vendedor configura os detalhes da simulação: escolhe o cenário, ajusta o contexto e inicia a sessão em poucos cliques.",
      },
      {
        badge: "Passo 03",
        title: "Simulação por voz com IA",
        text: "O vendedor entra em uma videochamada com um cliente virtual. A conversa acontece por voz, em tempo real, com transcrição automática. É como treinar com um cliente real, sem o risco.",
      },
      {
        badge: "Passo 04",
        title: "Análise automática de reuniões reais",
        text: "Conecte seu Google Calendar e pronto. Um bot entra automaticamente em cada reunião do Google Meet, transcreve tudo e aplica a mesma avaliação das simulações.",
      },
      {
        badge: "Passo 05",
        title: "Histórico com avaliação detalhada",
        text: "Cada simulação e reunião real fica registrada com a avaliação SPIN completa. O vendedor acompanha sua evolução nos 4 pilares: Situação, Problema, Implicação e Necessidade de Solução.",
      },
      {
        badge: "Passo 06",
        title: "Dashboard completo para o gestor",
        text: "Visão detalhada de cada vendedor: performance, comparativos do time, próximas reuniões, follow-ups no WhatsApp e transcrição de cada venda. Tudo em um lugar só.",
      },
    ],
  },
  en: {
    badge: "How it works",
    heroTitle: "From setup to results in minutes",
    heroSubtitle:
      "Ramppy works in simple stages. Each one is designed so your team can level up without friction, with visible results from day one.",
    steps: [
      {
        badge: "Step 01",
        title: "The manager configures the scenarios",
        text: "The manager selects personas, sale type, and objections directly in the dashboard. Every simulation is built to match your team's reality.",
      },
      {
        badge: "Step 02",
        title: "The rep prepares their session",
        text: "Before starting, the rep sets the simulation details: picks the scenario, adjusts the context, and kicks off the session in just a few clicks.",
      },
      {
        badge: "Step 03",
        title: "Voice simulation with AI",
        text: "The rep joins a video call with a virtual customer. The conversation runs by voice, in real time, with automatic transcription. It's like training with a real customer, without the risk.",
      },
      {
        badge: "Step 04",
        title: "Automatic analysis of real meetings",
        text: "Connect your Google Calendar and you're set. A bot automatically joins every Google Meet call, transcribes everything, and applies the same evaluation used in the simulations.",
      },
      {
        badge: "Step 05",
        title: "Full history with detailed evaluation",
        text: "Every simulation and real meeting is logged with a complete SPIN evaluation. Reps track their progress across the 4 pillars: Situation, Problem, Implication, and Need-payoff.",
      },
      {
        badge: "Step 06",
        title: "A complete dashboard for managers",
        text: "A detailed view of every rep: performance, team comparisons, upcoming meetings, WhatsApp follow-ups, and transcripts of every sale. All in one place.",
      },
    ],
  },
};

const stepMedia = [
  { video: "/videos/config-gestor.mp4", reverse: false },
  { video: "/videos/config-sessao.mp4", reverse: true },
  { image: "/images/roleplay.png.png", reverse: false },
  { video: "/videos/analise-meet.mp4", reverse: true },
  { video: "/videos/dashboard.mp4", reverse: false },
  { video: "/videos/historico.mp4", reverse: true },
] as { video?: string; image?: string; reverse: boolean }[];

export default function ComoFuncionaContent() {
  const locale = useLocale();
  const t = strings[locale];

  const steps = t.steps.map((s, i) => ({ ...s, ...stepMedia[i] }));

  return (
    <>
      {/* Hero */}
      <SectionWrapper>
        <div className="py-20 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-green-surface text-primary-green text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              {t.badge}
            </span>
            <h1 className="font-[var(--font-fustat)] text-[36px] md:text-[52px] font-semibold leading-[110%] tracking-[-0.04em] text-teal-dark">
              {t.heroTitle}
            </h1>
            <p className="mt-5 text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
              {t.heroSubtitle}
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Steps,same layout style as homepage Features */}
      {steps.map((step, idx) => (
        <SectionWrapper key={idx} id={`passo-${String(idx + 1).padStart(2, "0")}`} className={idx === 0 ? "overflow-visible" : ""}>
          <div className={`py-12 md:py-20 ${idx === 0 ? "" : ""}`}>
            <div className={`flex flex-col ${step.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-start gap-12 lg:gap-16`}>
              {/* Media */}
              <div className={`flex-1 w-full ${step.video === "/videos/nicole.mp4" ? "max-w-[500px]" : ""}`}>
                <div className="rounded-2xl overflow-hidden border border-gray-200/50" style={{ boxShadow: "0 25px 80px -12px rgba(0, 0, 0, 0.25), 0 12px 35px -8px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)" }}>
                  {step.video ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto block"
                      preload="auto"
                    >
                      <source src={step.video} type="video/quicktime" />
                      <source src={step.video} type="video/mp4" />
                    </video>
                  ) : step.image ? (
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-auto block"
                    />
                  ) : (
                    <div className="w-full aspect-video bg-gradient-to-br from-teal-dark to-[#1e4d38] flex items-center justify-center">
                      <span className="font-[var(--font-fustat)] text-6xl md:text-8xl font-bold text-primary-green/30">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 max-w-lg">
                <span className="text-xs font-bold text-primary-green bg-green-surface px-3 py-1.5 rounded-full uppercase tracking-wider">
                  {step.badge}
                </span>
                <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[36px] font-semibold text-teal-dark leading-[115%] tracking-tight mt-5 mb-5">
                  {step.title}
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed">
                  {step.text}
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>
      ))}

      <CTA />
    </>
  );
}
