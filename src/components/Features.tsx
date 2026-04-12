"use client";

import SectionWrapper from "./SectionWrapper";
import { useLocale } from "@/i18n/LocaleContext";

const strings = {
  pt: {
    simBadge: "Simulação de vendas",
    simTitleA: "Pratique",
    simTitleB: " antes de vender de verdade",
    simBodyMobile: "Seu vendedor treina com um cliente virtual por voz. Cenários configuráveis, avaliação SPIN automática.",
    simBodyDesktop:
      "O vendedor pratica conversas de vendas com um cliente virtual gerado por inteligência artificial. O cenário é configurável,idade, temperamento, persona do comprador, objeções específicas,e a conversa acontece por voz, com transcrição automática.",
    simBody2:
      "Ao final, uma avaliação detalhada baseada na metodologia SPIN Selling classifica o desempenho em múltiplos indicadores: Situação, Problema, Implicação e Necessidade de Solução.",
    nicoleBadge: "Nicole IA",
    nicoleTitleA: "Sua assistente de ",
    nicoleTitleB: "vendas",
    nicoleTitleC: " pessoal",
    nicoleBodyMobile: "IA que acompanha performance, organiza agenda e analisa reuniões do seu time em tempo real.",
    nicoleBodyDesktop:
      "A Nicole é a assistente de IA da Ramppy. Ela acompanha a performance de cada vendedor, organiza a agenda, analisa reuniões e sugere os próximos passos, tudo em tempo real, direto na plataforma.",
    nicoleBody2:
      "Precisa saber como foi a última call? Quer comparar vendedores? Precisa de um resumo do dia? É só perguntar. A Nicole tem contexto completo do seu time e responde na hora.",
    meetBadge: "Análise de reuniões",
    meetTitleA: "Análise de cada ",
    meetTitleB: "reunião",
    meetTitleC: " real",
    meetBodyMobile: "Bot entra nas reuniões do Meet, transcreve e avalia com SPIN Selling. Sem instalar nada.",
    meetBodyDesktop:
      "Conecte seu Google Agenda e pronto. Um bot entra automáticamente em cada reunião do Google Meet, transcreve tudo e aplica a mesma avaliação SPIN Selling usada nas simulações. Sem instalar nada, sem configurar nada.",
    meetBody2:
      "O gestor acompanha o desempenho real de cada vendedor em negociações de verdade. Identifique padrões, compare evolução e saiba exatamente onde cada um precisa melhorar.",
  },
  en: {
    simBadge: "Sales simulation",
    simTitleA: "Practice",
    simTitleB: " before selling for real",
    simBodyMobile: "Your rep trains with a virtual customer by voice. Configurable scenarios, automatic SPIN evaluation.",
    simBodyDesktop:
      "Reps practice sales conversations with a virtual customer powered by artificial intelligence. The scenario is fully configurable — age, temperament, buyer persona, specific objections — and the conversation happens by voice with automatic transcription.",
    simBody2:
      "At the end, a detailed evaluation based on SPIN Selling ranks performance across multiple indicators: Situation, Problem, Implication and Need-Payoff.",
    nicoleBadge: "Nicole AI",
    nicoleTitleA: "Your personal ",
    nicoleTitleB: "sales",
    nicoleTitleC: " assistant",
    nicoleBodyMobile: "An AI that tracks performance, organizes your schedule and analyzes your team's meetings in real time.",
    nicoleBodyDesktop:
      "Nicole is Ramppy's AI assistant. She tracks every rep's performance, manages the calendar, analyzes meetings and suggests next steps — all in real time, right inside the platform.",
    nicoleBody2:
      "Need to know how the last call went? Want to compare reps? Need a daily summary? Just ask. Nicole has full context of your team and answers instantly.",
    meetBadge: "Meeting analysis",
    meetTitleA: "Analysis of every ",
    meetTitleB: "real",
    meetTitleC: " meeting",
    meetBodyMobile: "A bot joins your Meet calls, transcribes and evaluates them with SPIN Selling. Zero setup.",
    meetBodyDesktop:
      "Connect your Google Calendar and you're done. A bot automatically joins every Google Meet call, transcribes everything and applies the same SPIN Selling evaluation used in simulations. Nothing to install, nothing to configure.",
    meetBody2:
      "Managers see real performance from real negotiations. Spot patterns, compare progress and know exactly where each rep needs to improve.",
  },
};

export default function Features() {
  const locale = useLocale();
  const t = strings[locale];
  return (
    <SectionWrapper id="funcionalidades" className="overflow-visible">
      <div className="py-12 md:py-32">
        {/* Simulação de vendas */}
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 relative">
          {/* Image - Left (after text on mobile) */}
          <div className="flex-1 w-full lg:translate-x-[-1vw] xl:translate-x-[-3vw] order-last lg:order-first">
            <div className="rounded-2xl overflow-hidden border border-gray-200/50" style={{ boxShadow: "0 25px 80px -12px rgba(0, 0, 0, 0.25), 0 12px 35px -8px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)" }}>
              <img
                src="/images/roleplay.png.png"
                alt="Simulação de vendas com IA"
                className="w-full h-auto block"
              />
            </div>
          </div>


          {/* Text - Right */}
          <div className="flex-1 max-w-lg -translate-y-[15px]">
            <span className="text-xs font-bold text-primary-green bg-green-surface px-3 py-1.5 rounded-full uppercase tracking-wider">
              {t.simBadge}
            </span>
            <h2 className="font-[var(--font-fustat)] text-xl md:text-[28px] lg:text-[36px] font-semibold text-teal-dark leading-[115%] tracking-tight mt-4 md:mt-5 mb-4 md:mb-5">
              <span className="relative inline-block isolate">
                <span className="relative z-10">{t.simTitleA}</span>
                <svg className="absolute -left-3 -top-2 w-[calc(100%+24px)] h-[calc(100%+16px)] pointer-events-none z-0" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M 30 38 C 25 18, 65 6, 110 8 C 155 10, 190 18, 188 38 C 186 58, 150 72, 100 74 C 50 76, 12 62, 14 42 C 16 28, 45 16, 90 14" stroke="#4CAF50" strokeWidth="2.5" strokeLinecap="round" fill="none" className="draw-circle-path" />
                </svg>
              </span>
              {t.simTitleB}
            </h2>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed">
              <span className="md:hidden">{t.simBodyMobile}</span>
              <span className="hidden md:inline">{t.simBodyDesktop}</span>
            </p>
            <p className="hidden md:block text-base text-text-secondary leading-relaxed mt-6">
              {t.simBody2}
            </p>
          </div>
        </div>

        {/* Nicole IA */}
        <div id="nicole" className="flex flex-col lg:flex-row items-start gap-8 md:gap-12 lg:gap-16 relative mt-6 md:mt-8 lg:ml-[3vw] xl:ml-[4vw]">
          {/* Text - Left */}
          <div className="flex-1 max-w-lg lg:pt-32">
            <span className="text-xs font-bold text-primary-green bg-green-surface px-3 py-1.5 rounded-full uppercase tracking-wider">
              {t.nicoleBadge}
            </span>
            <h2 className="font-[var(--font-fustat)] text-xl md:text-[32px] lg:text-[42px] font-semibold text-teal-dark leading-[115%] tracking-tight mt-4 md:mt-5 mb-4 md:mb-5">
              {t.nicoleTitleA}
              <span className="relative inline-block isolate">
                <span className="relative z-10">{t.nicoleTitleB}</span>
                <svg className="absolute -left-3 -top-2 w-[calc(100%+24px)] h-[calc(100%+16px)] pointer-events-none z-0" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M 30 38 C 25 18, 65 6, 110 8 C 155 10, 190 18, 188 38 C 186 58, 150 72, 100 74 C 50 76, 12 62, 14 42 C 16 28, 45 16, 90 14" stroke="#4CAF50" strokeWidth="2.5" strokeLinecap="round" fill="none" className="draw-circle-path" />
                </svg>
              </span>
              {t.nicoleTitleC}
            </h2>
            <p className="text-sm md:text-lg text-text-secondary leading-relaxed">
              <span className="md:hidden">{t.nicoleBodyMobile}</span>
              <span className="hidden md:inline">{t.nicoleBodyDesktop}</span>
            </p>
            <p className="hidden md:block text-lg text-text-secondary leading-relaxed mt-6">
              {t.nicoleBody2}
            </p>
          </div>

          {/* Video - Right */}
          <div className="flex-1 w-full max-w-[500px] lg:ml-auto lg:mt-16">
            <div className="rounded-2xl overflow-hidden border border-gray-200/50" style={{ boxShadow: "0 25px 80px -12px rgba(0, 0, 0, 0.25), 0 12px 35px -8px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)" }}>
              <video
                ref={(el) => { if (el) el.playbackRate = 1; }}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto block rounded-2xl"
                preload="auto"
              >
                <source src="/videos/nicole.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* Analise de Reuniao */}
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 relative mt-6 md:mt-8">
          {/* Video - Left (after text on mobile) */}
          <div className="flex-1 w-full lg:translate-x-[calc(-5vw+80px)] xl:translate-x-[calc(-7vw+80px)] lg:-translate-y-[30px] order-last lg:order-first">
            <div className="rounded-2xl overflow-hidden border border-gray-200/50" style={{ boxShadow: "0 25px 80px -12px rgba(0, 0, 0, 0.25), 0 12px 35px -8px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)" }}>
              <video
                ref={(el) => { if (el) el.playbackRate = 1; }}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto block rounded-2xl"
                preload="auto"
              >
                <source src="/videos/analise-meet.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Text - Right */}
          <div className="flex-1 max-w-lg">
            <span className="text-xs font-bold text-primary-green bg-green-surface px-3 py-1.5 rounded-full uppercase tracking-wider">
              {t.meetBadge}
            </span>
            <h2 className="font-[var(--font-fustat)] text-xl md:text-[28px] lg:text-[36px] font-semibold text-teal-dark leading-[115%] tracking-tight mt-4 md:mt-5 mb-4 md:mb-5">
              {t.meetTitleA}
              <span className="relative inline-block isolate">
                <span className="relative z-10">{t.meetTitleB}</span>
                <svg className="absolute -left-3 -top-2 w-[calc(100%+24px)] h-[calc(100%+16px)] pointer-events-none z-0" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M 30 38 C 25 18, 65 6, 110 8 C 155 10, 190 18, 188 38 C 186 58, 150 72, 100 74 C 50 76, 12 62, 14 42 C 16 28, 45 16, 90 14" stroke="#4CAF50" strokeWidth="2.5" strokeLinecap="round" fill="none" className="draw-circle-path" />
                </svg>
              </span>
              {t.meetTitleC}
            </h2>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed">
              <span className="md:hidden">{t.meetBodyMobile}</span>
              <span className="hidden md:inline">{t.meetBodyDesktop}</span>
            </p>
            <p className="hidden md:block text-base text-text-secondary leading-relaxed mt-6">
              {t.meetBody2}
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
