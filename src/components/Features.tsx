"use client";

import SectionWrapper from "./SectionWrapper";
import { useLocale } from "@/i18n/LocaleContext";

const strings = {
  pt: {
    simBadge: "Simulação de vendas",
    simTitleA: "Pratique",
    simTitleB: " antes de vender de verdade",
    simBodyMobile: "Seu vendedor treina com um cliente virtual por voz. Cenários configuráveis, avaliação automática ao final.",
    simBodyDesktop:
      "O vendedor pratica conversas de vendas com um cliente virtual gerado por inteligência artificial. O cenário é configurável, idade, temperamento, persona do comprador, objeções específicas, e a conversa acontece por voz, com transcrição automática.",
    simBody2:
      "Ao final, uma avaliação detalhada classifica o desempenho do vendedor em múltiplos indicadores e aponta exatamente o que precisa evoluir na próxima conversa.",
    dashboardBadge: "Dashboard do gestor",
    dashboardTitleA: "Dashboard completo para o ",
    dashboardTitleB: "gestor",
    dashboardTitleC: "",
    dashboardBodyMobile: "Performance de cada vendedor, comparativos do time, follow-ups no WhatsApp e transcrição de cada venda. Tudo em um painel só.",
    dashboardBodyDesktop:
      "Visão detalhada de cada vendedor: performance, comparativos do time, próximas reuniões, follow-ups no WhatsApp e transcrição de cada venda. Tudo em um lugar só, direto no painel do gestor.",
    dashboardBody2:
      "Identifique padrões, compare a evolução do time e saiba exatamente onde cada vendedor precisa melhorar. Sem caçar dados em planilhas, sem montar relatório à mão.",
    meetBadge: "Análise de reuniões — sem bot na call",
    meetTitleA: "Análise de cada ",
    meetTitleB: "reunião",
    meetTitleC: " real",
    meetBodyMobile: "App desktop grava e avalia cada reunião direto da máquina do vendedor. Sem bot entrando na call, em qualquer plataforma.",
    meetBodyDesktop:
      "O vendedor instala o app desktop uma única vez e pronto. Cada reunião é capturada de forma silenciosa direto do dispositivo, transcrita em tempo real e recebe a mesma avaliação usada nas simulações. Funciona em Google Meet, Zoom e Teams — sem nenhum bot entrar na chamada e sem aviso constrangedor para o prospect.",
    meetBody2:
      "O gestor acompanha o desempenho real de cada vendedor em negociações de verdade, com a discrição que o cliente espera. Identifique padrões, compare evolução e saiba exatamente onde cada um precisa melhorar.",
  },
  es: {
    simBadge: "Simulación de ventas",
    simTitleA: "Practica",
    simTitleB: " antes de vender de verdad",
    simBodyMobile: "Tu vendedor entrena con un cliente virtual por voz. Escenarios configurables, evaluación automática al final.",
    simBodyDesktop:
      "El vendedor practica conversaciones de ventas con un cliente virtual generado por inteligencia artificial. El escenario es configurable: edad, temperamento, perfil del comprador, objeciones específicas, y la conversación ocurre por voz, con transcripción automática.",
    simBody2:
      "Al final, una evaluación detallada clasifica el desempeño del vendedor en múltiples indicadores y muestra exactamente qué necesita mejorar en la próxima conversación.",
    dashboardBadge: "Dashboard del manager",
    dashboardTitleA: "Dashboard completo para el ",
    dashboardTitleB: "manager",
    dashboardTitleC: "",
    dashboardBodyMobile: "Desempeño de cada vendedor, comparativos del equipo, follow-ups por WhatsApp y transcripción de cada venta. Todo en un panel.",
    dashboardBodyDesktop:
      "Visión detallada de cada vendedor: desempeño, comparativos del equipo, próximas reuniones, follow-ups por WhatsApp y transcripción de cada venta. Todo en un solo lugar, dentro del panel del manager.",
    dashboardBody2:
      "Identifica patrones, compara la evolución del equipo y descubre exactamente en qué necesita mejorar cada vendedor. Sin perseguir datos en planillas, sin armar reportes a mano.",
    meetBadge: "Análisis de reuniones — sin bot en la llamada",
    meetTitleA: "Análisis de cada ",
    meetTitleB: "reunión",
    meetTitleC: " real",
    meetBodyMobile: "La app de escritorio graba y evalúa cada reunión directamente desde la máquina del vendedor. Sin un bot entrando en la llamada, en cualquier plataforma.",
    meetBodyDesktop:
      "El vendedor instala la app de escritorio una sola vez y listo. Cada reunión se captura de forma silenciosa desde el dispositivo, se transcribe en tiempo real y recibe la misma evaluación usada en las simulaciones. Funciona en Google Meet, Zoom y Teams — sin que ningún bot entre en la llamada y sin avisos incómodos para el prospect.",
    meetBody2:
      "El manager monitorea el desempeño real de cada vendedor en negociaciones reales, con la discreción que el cliente espera. Identifica patrones, compara la evolución y sabe exactamente en qué necesita mejorar cada uno.",
  },
  en: {
    simBadge: "Sales simulation",
    simTitleA: "Practice",
    simTitleB: " before selling for real",
    simBodyMobile: "Your rep trains with a virtual customer by voice. Configurable scenarios, automatic evaluation at the end.",
    simBodyDesktop:
      "Reps practice sales conversations with a virtual customer powered by artificial intelligence. The scenario is fully configurable: age, temperament, buyer persona, specific objections, and the conversation happens by voice with automatic transcription.",
    simBody2:
      "At the end, a detailed evaluation ranks the rep's performance across multiple indicators and shows exactly what to improve in the next conversation.",
    dashboardBadge: "Manager dashboard",
    dashboardTitleA: "A complete dashboard for ",
    dashboardTitleB: "managers",
    dashboardTitleC: "",
    dashboardBodyMobile: "Performance of every rep, team comparisons, WhatsApp follow-ups and transcripts of every sale. All in one panel.",
    dashboardBodyDesktop:
      "A detailed view of every rep: performance, team comparisons, upcoming meetings, WhatsApp follow-ups and transcripts of every sale. All in one place, right inside the manager dashboard.",
    dashboardBody2:
      "Spot patterns, compare team progress and know exactly where each rep needs to improve. No chasing data through spreadsheets, no putting reports together by hand.",
    meetBadge: "Meeting analysis — without a bot in the call",
    meetTitleA: "Analysis of every ",
    meetTitleB: "real",
    meetTitleC: " meeting",
    meetBodyMobile: "A desktop app records and evaluates every meeting straight from the rep's machine. No bot joining the call, on any platform.",
    meetBodyDesktop:
      "The rep installs the desktop app once and that's it. Every meeting is captured silently from the device, transcribed in real time and runs through the same evaluation used in simulations. Works on Google Meet, Zoom and Teams — with no bot ever joining the call and no awkward notice for the prospect.",
    meetBody2:
      "Managers see real performance from real negotiations, with the discretion clients expect. Spot patterns, compare progress and know exactly where each rep needs to improve.",
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

        {/* Analise de Reuniao */}
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 relative mt-16 md:mt-32">
          {/* Text - Left */}
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

          {/* Video - Right */}
          <div className="flex-1 w-full lg:translate-x-[calc(5vw-80px)] xl:translate-x-[calc(7vw-80px)] lg:-translate-y-[30px]">
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
        </div>

        {/* Dashboard do gestor */}
        <div id="dashboard" className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 relative mt-16 md:mt-32">
          {/* Video - Left (after text on mobile) */}
          <div className="flex-1 w-full lg:translate-x-[calc(-5vw+80px)] xl:translate-x-[calc(-7vw+80px)] order-last lg:order-first">
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
                <source src="/videos/historico.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Text - Right */}
          <div className="flex-1 max-w-lg">
            <span className="text-xs font-bold text-primary-green bg-green-surface px-3 py-1.5 rounded-full uppercase tracking-wider">
              {t.dashboardBadge}
            </span>
            <h2 className="font-[var(--font-fustat)] text-xl md:text-[28px] lg:text-[36px] font-semibold text-teal-dark leading-[115%] tracking-tight mt-4 md:mt-5 mb-4 md:mb-5">
              {t.dashboardTitleA}
              <span className="relative inline-block isolate">
                <span className="relative z-10">{t.dashboardTitleB}</span>
                <svg className="absolute -left-3 -top-2 w-[calc(100%+24px)] h-[calc(100%+16px)] pointer-events-none z-0" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M 30 38 C 25 18, 65 6, 110 8 C 155 10, 190 18, 188 38 C 186 58, 150 72, 100 74 C 50 76, 12 62, 14 42 C 16 28, 45 16, 90 14" stroke="#4CAF50" strokeWidth="2.5" strokeLinecap="round" fill="none" className="draw-circle-path" />
                </svg>
              </span>
              {t.dashboardTitleC}
            </h2>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed">
              <span className="md:hidden">{t.dashboardBodyMobile}</span>
              <span className="hidden md:inline">{t.dashboardBodyDesktop}</span>
            </p>
            <p className="hidden md:block text-base text-text-secondary leading-relaxed mt-6">
              {t.dashboardBody2}
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
