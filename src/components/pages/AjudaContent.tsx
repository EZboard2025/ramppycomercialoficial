"use client";

import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import CTA from "@/components/CTA";
import FaqAccordion from "@/components/ajuda/FaqAccordion";
import { useLocale } from "@/i18n/LocaleContext";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqCategory = {
  title: string;
  items: FaqItem[];
};

type LocaleStrings = {
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  faqHeading: string;
  supportTitle: string;
  supportSubtitle: string;
  supportCta: string;
  whatsappHref: string;
  sections: FaqCategory[];
};

const strings: { pt: LocaleStrings; en: LocaleStrings } = {
  pt: {
    heroBadge: "Ajuda",
    heroTitle: "Central de Ajuda",
    heroSubtitle: "Encontre respostas para as dúvidas mais comuns sobre a Ramppy.",
    faqHeading: "Perguntas frequentes",
    supportTitle: "Não encontrou o que procura?",
    supportSubtitle: "Nossa equipe de suporte está pronta para ajudar você.",
    supportCta: "Falar com suporte",
    whatsappHref:
      "https://wa.me/5531995525157?text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20com%20a%20Ramppy",
    sections: [
      {
        title: "Primeiros passos",
        items: [
          {
            question: "Preciso instalar algum software?",
            answer:
              "O Ramppy funciona 100% no navegador. Para análise de reuniões, basta conectar seu Google Agenda. Você também pode baixar a versão beta do app desktop para funcionalidades adicionais.",
          },
          {
            question: "Quanto tempo leva para configurar?",
            answer:
              "Em uma única reunião de implementação podemos configurar a Ramppy na sua empresa. Nossa equipe cuida de tudo com você e fornece suporte contínuo após a implementação.",
          },
        ],
      },
      {
        title: "Simulações",
        items: [
          {
            question: "Como funciona a simulação com IA?",
            answer:
              "Você configura o cenário (persona, objeções, contexto) e inicia uma videochamada com um cliente virtual. A IA responde em tempo real por voz.",
          },
          {
            question: "Posso personalizar os cenários?",
            answer:
              "Sim. Você define idade, temperamento, objeções específicas e contexto da venda. Cada simulação pode ser diferente.",
          },
          {
            question: "Como é calculada a nota SPIN?",
            answer:
              "A IA analisa a transcrição e avalia a qualidade das perguntas nos 4 pilares: Situação, Problema, Implicação e Necessidade de Solução. Cada pilar recebe uma nota de 0 a 10.",
          },
        ],
      },
      {
        title: "Análise de reuniões",
        items: [
          {
            question: "Como conectar o Google Meet?",
            answer:
              "Na plataforma, conecte sua conta Google em 'Meu Perfil' e depois acesse 'Agenda'. O bot entrará automaticamente nas reuniões agendadas.",
          },
          {
            question: "O bot grava a reunião?",
            answer:
              "O bot transcreve a reunião em tempo real. A transcrição é usada para gerar a avaliação SPIN. O áudio não é armazenado.",
          },
          {
            question: "Quem tem acesso à análise?",
            answer:
              "O vendedor e o gestor do time têm acesso. As permissões podem ser configuradas por perfil.",
          },
        ],
      },
      {
        title: "Planos e cobrança",
        items: [
          {
            question: "Posso cancelar a qualquer momento?",
            answer:
              "Sim. Não há fidelidade. Você pode cancelar diretamente na plataforma a qualquer momento.",
          },
          {
            question: "Existe período de teste?",
            answer:
              "Sim. Todos os planos incluem um período de teste grátis para você experimentar a plataforma.",
          },
          {
            question: "Como funciona o sistema de créditos?",
            answer:
              "Cada simulação ou análise de reunião consome créditos. A quantidade disponível depende do seu plano. Créditos extras podem ser adquiridos sob demanda.",
          },
        ],
      },
    ],
  },
  en: {
    heroBadge: "Help",
    heroTitle: "Help Center",
    heroSubtitle: "Find answers to the most common questions about Ramppy.",
    faqHeading: "Frequently asked questions",
    supportTitle: "Didn't find what you're looking for?",
    supportSubtitle: "Our support team is ready to help you.",
    supportCta: "Talk to support",
    whatsappHref:
      "https://wa.me/5531995525157?text=Hi%2C%20I%20need%20help%20with%20Ramppy",
    sections: [
      {
        title: "Getting started",
        items: [
          {
            question: "Do I need to install any software?",
            answer:
              "Ramppy runs 100% in the browser. For meeting analysis, just connect your Google Calendar. You can also download the beta desktop app for additional features.",
          },
          {
            question: "How long does setup take?",
            answer:
              "We can set up Ramppy for your company in a single onboarding meeting. Our team takes care of everything with you and provides ongoing support after implementation.",
          },
        ],
      },
      {
        title: "Simulations",
        items: [
          {
            question: "How does the AI simulation work?",
            answer:
              "You configure the scenario (persona, objections, context) and start a video call with a virtual customer. The AI responds in real time by voice.",
          },
          {
            question: "Can I customize the scenarios?",
            answer:
              "Yes. You set the age, temperament, specific objections, and sales context. Every simulation can be different.",
          },
          {
            question: "How is the SPIN score calculated?",
            answer:
              "The AI analyzes the transcript and evaluates the quality of the questions across the 4 pillars: Situation, Problem, Implication, and Need-payoff. Each pillar gets a score from 0 to 10.",
          },
        ],
      },
      {
        title: "Meeting analysis",
        items: [
          {
            question: "How do I connect Google Meet?",
            answer:
              "In the platform, connect your Google account under 'My Profile' and then go to 'Calendar'. The bot will automatically join scheduled meetings.",
          },
          {
            question: "Does the bot record the meeting?",
            answer:
              "The bot transcribes the meeting in real time. The transcript is used to generate the SPIN evaluation. Audio is not stored.",
          },
          {
            question: "Who has access to the analysis?",
            answer:
              "The salesperson and the team manager have access. Permissions can be configured per role.",
          },
        ],
      },
      {
        title: "Plans and billing",
        items: [
          {
            question: "Can I cancel at any time?",
            answer:
              "Yes. There are no long-term commitments. You can cancel directly in the platform at any time.",
          },
          {
            question: "Is there a trial period?",
            answer:
              "Yes. All plans include a free trial period so you can try the platform.",
          },
          {
            question: "How does the credit system work?",
            answer:
              "Each simulation or meeting analysis consumes credits. The amount available depends on your plan. Extra credits can be purchased on demand.",
          },
        ],
      },
    ],
  },
};

export default function AjudaContent() {
  const locale = useLocale();
  const t = strings[locale];

  return (
    <>
      <PageHero badge={t.heroBadge} title={t.heroTitle} subtitle={t.heroSubtitle} />

      {/* FAQ Accordion */}
      <SectionWrapper>
        <div className="py-10 md:py-16">
          <h2 className="font-[var(--font-fustat)] text-[32px] md:text-[48px] font-semibold leading-[110%] tracking-[-0.04em] text-teal-dark mb-10">
            {t.faqHeading}
          </h2>
          <div className="max-w-3xl">
            <FaqAccordion categories={t.sections} />
          </div>
        </div>
      </SectionWrapper>

      {/* Contact support section */}
      <SectionWrapper>
        <div className="py-10 md:py-16">
          <div className="bg-green-surface/50 border border-primary-green/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-[var(--font-fustat)] text-2xl md:text-3xl font-semibold text-teal-dark mb-3">
              {t.supportTitle}
            </h2>
            <p className="text-text-secondary mb-6 max-w-md mx-auto">
              {t.supportSubtitle}
            </p>
            <a
              href={t.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-[var(--font-fustat)] inline-flex items-center gap-2 text-base font-semibold px-8 py-4 rounded-full bg-primary-green text-white hover:bg-green-dark transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary-green/30"
            >
              {t.supportCta}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </SectionWrapper>

      <CTA />
    </>
  );
}
