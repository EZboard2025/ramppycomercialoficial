"use client";

import SectionWrapper from "@/components/SectionWrapper";
import CTA from "@/components/CTA";
import { useLocale } from "@/i18n/LocaleContext";

const strings = {
  pt: {
    badge: "Como funciona",
    heroTitle: "Do setup ao resultado em minutos",
    heroSubtitle:
      "A Ramppy funciona em etapas simples. Cada uma foi pensada para que seu time evolua sem complicação, com resultados visíveis desde o primeiro dia.",
    steps: [
      {
        badge: "Passo 01",
        title: "Configure a sua operação",
        text: "Nas Configurações você conta como é o seu negócio: dados da empresa, objetivos, objeções e personas. Uma pergunta por vez, e se você não souber a resposta, a IA escreve para você revisar. Pronto: o cliente sintético tem a cara do seu cliente.",
      },
      {
        badge: "Passo 02",
        title: "Crie o grupo da vaga",
        text: "Crie um grupo para a vaga, escolha com qual cliente sintético o candidato vai conversar e qual é o objetivo da conversa. Depois é só mandar o link: o candidato faz a simulação sem cadastro.",
      },
      {
        badge: "Passo 03",
        title: "O candidato faz a simulação",
        text: "O candidato abre o link e liga. É uma reunião de vendas inteira, por voz, com o cliente sintético, que levanta as objeções que o seu time ouve de verdade.",
      },
      {
        badge: "Passo 04",
        title: "A nota, com o porquê",
        text: "A nota sai do que foi dito na conversa, em 5 categorias: abertura, qualificação, solução, objeções e encerramento. Cada uma vem com o porquê e com o que fazer diferente. Todo candidato na mesma régua.",
      },
      {
        badge: "Passo 05",
        title: "Treine o time em trilhas",
        text: "Monte a trilha do time: cada fase é uma reunião completa, com a nota mínima para avançar. Convide o time por e-mail. Cada pessoa treina pelo link e só passa para a próxima fase quando bate a nota.",
      },
      {
        badge: "Passo 06",
        title: "Acompanhe sem entrar em call",
        text: "A tela Início mostra o que mudou na semana. No mapa da turma você vê quem avançou e quem travou. E pode perguntar o que quiser para a Nicolly.",
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
        title: "Set up your operation",
        text: "In Settings you describe your business: company data, goals, objections and personas. One question at a time, and if you're not sure of an answer, the AI writes it for you to review. That's it: the synthetic customer looks like your customer.",
      },
      {
        badge: "Step 02",
        title: "Create a group for the role",
        text: "Create a group for the role, choose which synthetic customer the candidate will talk to and the goal of the conversation. Then just send the link: candidates run the simulation with no sign-up.",
      },
      {
        badge: "Step 03",
        title: "The candidate runs the simulation",
        text: "The candidate opens the link and calls. It's a full sales meeting, by voice, with the synthetic customer, who raises the objections your team really hears.",
      },
      {
        badge: "Step 04",
        title: "The score, with the why",
        text: "The score comes from what was said in the conversation, in 5 categories: opening, qualification, solution, objections and closing. Each one comes with the why and what to do differently. Every candidate on the same scale.",
      },
      {
        badge: "Step 05",
        title: "Train the team on tracks",
        text: "Build your team's track: each phase is a full meeting, with a minimum score to move on. Invite the team by email. Each rep trains from the link and only moves to the next phase by hitting the score.",
      },
      {
        badge: "Step 06",
        title: "Track without joining a call",
        text: "Home shows what changed this week. On the team map you see who moved ahead and who's stuck. And you can ask Nicolly anything.",
      },
    ],
  },
  es: {
    badge: "Cómo funciona",
    heroTitle: "Del setup al resultado en minutos",
    heroSubtitle:
      "Ramppy funciona en etapas simples. Cada una está pensada para que tu equipo evolucione sin complicaciones, con resultados visibles desde el primer día.",
    steps: [
      {
        badge: "Paso 01",
        title: "Configura tu operación",
        text: "En la Configuración cuentas cómo es tu negocio: datos de la empresa, objetivos, objeciones y personas. Una pregunta a la vez, y si no sabes la respuesta, la IA la escribe para que la revises. Listo: el cliente sintético se parece a tu cliente.",
      },
      {
        badge: "Paso 02",
        title: "Crea el grupo de la vacante",
        text: "Crea un grupo para la vacante, elige con qué cliente sintético va a conversar el candidato y cuál es el objetivo de la conversación. Después solo envía el enlace: el candidato hace la simulación sin registrarse.",
      },
      {
        badge: "Paso 03",
        title: "El candidato hace la simulación",
        text: "El candidato abre el enlace y llama. Es una reunión de ventas completa, por voz, con el cliente sintético, que plantea las objeciones que tu equipo escucha de verdad.",
      },
      {
        badge: "Paso 04",
        title: "La nota, con el porqué",
        text: "La nota sale de lo que se dijo en la conversación, en 5 categorías: apertura, calificación, solución, objeciones y cierre. Cada una viene con el porqué y con qué hacer distinto. Todos los candidatos con la misma vara.",
      },
      {
        badge: "Paso 05",
        title: "Entrena al equipo en rutas",
        text: "Arma la ruta del equipo: cada fase es una reunión completa, con la nota mínima para avanzar. Invita al equipo por correo. Cada persona entrena desde el enlace y solo pasa a la siguiente fase al alcanzar la nota.",
      },
      {
        badge: "Paso 06",
        title: "Da seguimiento sin entrar en llamadas",
        text: "El Inicio muestra lo que cambió en la semana. En el mapa del equipo ves quién avanzó y quién se trabó. Y puedes preguntarle lo que quieras a Nicolly.",
      },
    ],
  },
};

/** Um clipe didático por passo (mudo, em loop sem emenda), no idioma da página. */
const PASSOS_VIDEO = ["configurar", "contratar", "simulacao", "nota", "treinar", "acompanhar"] as const;
const stepMedia = PASSOS_VIDEO.map((slug, i) => ({ slug, reverse: i % 2 === 1 }));

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
              <div className="flex-1 w-full">
                <div className="rounded-2xl overflow-hidden border border-gray-200/50" style={{ boxShadow: "0 25px 80px -12px rgba(0, 0, 0, 0.25), 0 12px 35px -8px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)" }}>
                  <video key={locale} autoPlay loop muted playsInline className="w-full h-auto block" preload="auto">
                    <source src={`/videos/passo-${idx + 1}-${step.slug}-${locale}.mp4`} type="video/mp4" />
                  </video>
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
