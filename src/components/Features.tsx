"use client";

import SectionWrapper from "./SectionWrapper";
import { useLocale } from "@/i18n/LocaleContext";

const strings = {
  pt: {
    contratacaoBadge: "Contratação",
    contratacaoTitleA: "Veja",
    contratacaoTitleB: " quem vende antes de contratar",
    contratacaoBodyMobile: "Mande um link e o candidato faz uma reunião de vendas inteira, por voz, com um cliente sintético. A nota chega antes da entrevista.",
    contratacaoBodyDesktop:
      "Crie um grupo para a vaga, escolha o cliente sintético e o objetivo da conversa, e mande o link. O candidato faz uma reunião inteira por voz, sem cadastro, e enfrenta as objeções da sua operação.",
    contratacaoBody2:
      "Cada candidato chega com a nota em 5 categorias, o porquê de cada uma e o que fazer diferente. Todos na mesma régua, antes de você marcar a entrevista.",
    treinamentoBadge: "Treinamento",
    treinamentoTitleA: "Treine até bater a ",
    treinamentoTitleB: "nota",
    treinamentoTitleC: "",
    treinamentoBodyMobile: "Trilhas em fases, e cada fase é uma reunião completa com um cliente sintético. O vendedor só avança quando bate a nota mínima.",
    treinamentoBodyDesktop:
      "Monte a trilha do time: cada fase é uma reunião completa com um cliente sintético, e você define a nota mínima em cada categoria para avançar. O vendedor recebe o convite por e-mail e treina pelo link.",
    treinamentoBody2:
      "Depois de cada simulação ele vê por que tirou aquela nota e o que fazer diferente na próxima. A fase seguinte só abre quando a nota mínima é atingida.",
    acompanhamentoBadge: "Acompanhamento",
    acompanhamentoTitleA: "Saiba quem ",
    acompanhamentoTitleB: "travou",
    acompanhamentoTitleC: " sem entrar em nenhuma call",
    acompanhamentoBodyMobile: "O mapa da turma mostra quem avançou e quem parou. E a Nicolly responde o que você perguntar.",
    acompanhamentoBodyDesktop:
      "A tela Início mostra o que mudou na semana, e o mapa da turma mostra a nota de cada pessoa em cada fase: quem concluiu, quem está tentando e quem travou.",
    acompanhamentoBody2:
      "Pergunte o que quiser para a Nicolly, a assistente da Ramppy. Ela responde com os dados do seu time e, com a sua confirmação, cria jornadas e grupos por você.",
  },
  es: {
    contratacaoBadge: "Contratación",
    contratacaoTitleA: "Mira",
    contratacaoTitleB: " quién vende antes de contratar",
    contratacaoBodyMobile: "Envía un enlace y el candidato hace una reunión de ventas completa, por voz, con un cliente sintético. La nota llega antes de la entrevista.",
    contratacaoBodyDesktop:
      "Crea un grupo para la vacante, elige el cliente sintético y el objetivo de la conversación, y envía el enlace. El candidato hace una reunión completa por voz, sin registrarse, y enfrenta las objeciones de tu operación.",
    contratacaoBody2:
      "Cada candidato llega con la nota en 5 categorías, el porqué de cada una y qué hacer distinto. Todos con la misma vara, antes de que agendes la entrevista.",
    treinamentoBadge: "Entrenamiento",
    treinamentoTitleA: "Entrena hasta alcanzar la ",
    treinamentoTitleB: "nota",
    treinamentoTitleC: "",
    treinamentoBodyMobile: "Rutas en fases, y cada fase es una reunión completa con un cliente sintético. El vendedor solo avanza cuando alcanza la nota mínima.",
    treinamentoBodyDesktop:
      "Arma la ruta del equipo: cada fase es una reunión completa con un cliente sintético, y tú defines la nota mínima en cada categoría para avanzar. El vendedor recibe la invitación por correo y entrena desde el enlace.",
    treinamentoBody2:
      "Después de cada simulación ve por qué sacó esa nota y qué hacer distinto en la próxima. La fase siguiente solo se abre cuando alcanza la nota mínima.",
    acompanhamentoBadge: "Seguimiento",
    acompanhamentoTitleA: "Sabe quién se ",
    acompanhamentoTitleB: "trabó",
    acompanhamentoTitleC: " sin entrar en ninguna llamada",
    acompanhamentoBodyMobile: "El mapa del equipo muestra quién avanzó y quién se detuvo. Y Nicolly responde lo que le preguntes.",
    acompanhamentoBodyDesktop:
      "El Inicio muestra lo que cambió en la semana, y el mapa del equipo muestra la nota de cada persona en cada fase: quién terminó, quién está intentando y quién se trabó.",
    acompanhamentoBody2:
      "Pregúntale lo que quieras a Nicolly, la asistente de Ramppy. Responde con los datos de tu equipo y, con tu confirmación, crea jornadas y grupos por ti.",
  },
  en: {
    contratacaoBadge: "Hiring",
    contratacaoTitleA: "See",
    contratacaoTitleB: " who can sell before you hire",
    contratacaoBodyMobile: "Send a link and the candidate runs a full sales meeting, by voice, with a synthetic customer. The score arrives before the interview.",
    contratacaoBodyDesktop:
      "Create a group for the role, pick the synthetic customer and the goal of the conversation, and send the link. The candidate runs a full meeting by voice, with no sign-up, and faces the objections your team really hears.",
    contratacaoBody2:
      "Every candidate arrives with a score in 5 categories, the why behind each one and what to do differently. Everyone on the same scale, before you book the interview.",
    treinamentoBadge: "Training",
    treinamentoTitleA: "Train until you hit the ",
    treinamentoTitleB: "score",
    treinamentoTitleC: "",
    treinamentoBodyMobile: "Tracks in phases, and each phase is a full meeting with a synthetic customer. Reps only move on when they hit the minimum score.",
    treinamentoBodyDesktop:
      "Build your team's track: each phase is a full meeting with a synthetic customer, and you set the minimum score in each category to move on. Reps get the invite by email and train from the link.",
    treinamentoBody2:
      "After every simulation they see why they got that score and what to do differently next time. The next phase only opens once the minimum score is reached.",
    acompanhamentoBadge: "Tracking",
    acompanhamentoTitleA: "Know who's ",
    acompanhamentoTitleB: "stuck",
    acompanhamentoTitleC: " without joining a single call",
    acompanhamentoBodyMobile: "The team map shows who moved ahead and who stopped. And Nicolly answers whatever you ask.",
    acompanhamentoBodyDesktop:
      "Home shows what changed this week, and the team map shows each person's score in each phase: who finished, who's trying and who's stuck.",
    acompanhamentoBody2:
      "Ask Nicolly, the Ramppy assistant, anything. She answers with your team's data and, once you confirm, creates journeys and groups for you.",
  },
};

/** Vídeo do pilar no idioma da página (loop sem emenda, mudo). */
function PilarVideo({ pilar, locale }: { pilar: "contratacao" | "treinamento" | "acompanhamento"; locale: string }) {
  return (
    <video key={locale} autoPlay loop muted playsInline className="w-full h-auto block rounded-2xl" preload="auto">
      <source src={`/videos/home-${pilar}-${locale}.mp4`} type="video/mp4" />
    </video>
  );
}

export default function Features() {
  const locale = useLocale();
  const t = strings[locale];
  return (
    <SectionWrapper id="funcionalidades" className="overflow-visible">
      <div className="py-12 md:py-32">
        {/* Contratação (o menu e o rodapé apontam para cá) */}
        <div id="contratacao" className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 relative">
          {/* Video - Left (after text on mobile) */}
          <div className="flex-1 w-full lg:translate-x-[-1vw] xl:translate-x-[-3vw] order-last lg:order-first">
            <div className="rounded-2xl overflow-hidden border border-gray-200/50" style={{ boxShadow: "0 25px 80px -12px rgba(0, 0, 0, 0.25), 0 12px 35px -8px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)" }}>
              <PilarVideo pilar="contratacao" locale={locale} />
            </div>
          </div>


          {/* Text - Right */}
          <div className="flex-1 max-w-lg -translate-y-[15px]">
            <span className="text-xs font-bold text-primary-green bg-green-surface px-3 py-1.5 rounded-full uppercase tracking-wider">
              {t.contratacaoBadge}
            </span>
            <h2 className="font-[var(--font-fustat)] text-xl md:text-[28px] lg:text-[36px] font-semibold text-teal-dark leading-[115%] tracking-tight mt-4 md:mt-5 mb-4 md:mb-5">
              <span className="relative inline-block isolate">
                <span className="relative z-10">{t.contratacaoTitleA}</span>
                <svg className="absolute -left-3 -top-2 w-[calc(100%+24px)] h-[calc(100%+16px)] pointer-events-none z-0" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M 30 38 C 25 18, 65 6, 110 8 C 155 10, 190 18, 188 38 C 186 58, 150 72, 100 74 C 50 76, 12 62, 14 42 C 16 28, 45 16, 90 14" stroke="#4CAF50" strokeWidth="2.5" strokeLinecap="round" fill="none" className="draw-circle-path" />
                </svg>
              </span>
              {t.contratacaoTitleB}
            </h2>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed">
              <span className="md:hidden">{t.contratacaoBodyMobile}</span>
              <span className="hidden md:inline">{t.contratacaoBodyDesktop}</span>
            </p>
            <p className="hidden md:block text-base text-text-secondary leading-relaxed mt-6">
              {t.contratacaoBody2}
            </p>
          </div>
        </div>

        {/* Treinamento */}
        <div id="treinamento" className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 relative mt-16 md:mt-32">
          {/* Text - Left */}
          <div className="flex-1 max-w-lg">
            <span className="text-xs font-bold text-primary-green bg-green-surface px-3 py-1.5 rounded-full uppercase tracking-wider">
              {t.treinamentoBadge}
            </span>
            <h2 className="font-[var(--font-fustat)] text-xl md:text-[28px] lg:text-[36px] font-semibold text-teal-dark leading-[115%] tracking-tight mt-4 md:mt-5 mb-4 md:mb-5">
              {t.treinamentoTitleA}
              <span className="relative inline-block isolate">
                <span className="relative z-10">{t.treinamentoTitleB}</span>
                <svg className="absolute -left-3 -top-2 w-[calc(100%+24px)] h-[calc(100%+16px)] pointer-events-none z-0" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M 30 38 C 25 18, 65 6, 110 8 C 155 10, 190 18, 188 38 C 186 58, 150 72, 100 74 C 50 76, 12 62, 14 42 C 16 28, 45 16, 90 14" stroke="#4CAF50" strokeWidth="2.5" strokeLinecap="round" fill="none" className="draw-circle-path" />
                </svg>
              </span>
              {t.treinamentoTitleC}
            </h2>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed">
              <span className="md:hidden">{t.treinamentoBodyMobile}</span>
              <span className="hidden md:inline">{t.treinamentoBodyDesktop}</span>
            </p>
            <p className="hidden md:block text-base text-text-secondary leading-relaxed mt-6">
              {t.treinamentoBody2}
            </p>
          </div>

          {/* Video - Right */}
          <div className="flex-1 w-full lg:translate-x-[calc(5vw-80px)] xl:translate-x-[calc(7vw-80px)] lg:-translate-y-[30px]">
            <div className="rounded-2xl overflow-hidden border border-gray-200/50" style={{ boxShadow: "0 25px 80px -12px rgba(0, 0, 0, 0.25), 0 12px 35px -8px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)" }}>
              <PilarVideo pilar="treinamento" locale={locale} />
            </div>
          </div>
        </div>

        {/* Acompanhamento */}
        <div id="acompanhamento" className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 relative mt-16 md:mt-32">
          {/* Video - Left (after text on mobile) */}
          <div className="flex-1 w-full lg:translate-x-[calc(-5vw+80px)] xl:translate-x-[calc(-7vw+80px)] order-last lg:order-first">
            <div className="rounded-2xl overflow-hidden border border-gray-200/50" style={{ boxShadow: "0 25px 80px -12px rgba(0, 0, 0, 0.25), 0 12px 35px -8px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)" }}>
              <PilarVideo pilar="acompanhamento" locale={locale} />
            </div>
          </div>

          {/* Text - Right */}
          <div className="flex-1 max-w-lg">
            <span className="text-xs font-bold text-primary-green bg-green-surface px-3 py-1.5 rounded-full uppercase tracking-wider">
              {t.acompanhamentoBadge}
            </span>
            <h2 className="font-[var(--font-fustat)] text-xl md:text-[28px] lg:text-[36px] font-semibold text-teal-dark leading-[115%] tracking-tight mt-4 md:mt-5 mb-4 md:mb-5">
              {t.acompanhamentoTitleA}
              <span className="relative inline-block isolate">
                <span className="relative z-10">{t.acompanhamentoTitleB}</span>
                <svg className="absolute -left-3 -top-2 w-[calc(100%+24px)] h-[calc(100%+16px)] pointer-events-none z-0" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M 30 38 C 25 18, 65 6, 110 8 C 155 10, 190 18, 188 38 C 186 58, 150 72, 100 74 C 50 76, 12 62, 14 42 C 16 28, 45 16, 90 14" stroke="#4CAF50" strokeWidth="2.5" strokeLinecap="round" fill="none" className="draw-circle-path" />
                </svg>
              </span>
              {t.acompanhamentoTitleC}
            </h2>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed">
              <span className="md:hidden">{t.acompanhamentoBodyMobile}</span>
              <span className="hidden md:inline">{t.acompanhamentoBodyDesktop}</span>
            </p>
            <p className="hidden md:block text-base text-text-secondary leading-relaxed mt-6">
              {t.acompanhamentoBody2}
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
