import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import CTA from "@/components/CTA";
import CategoryCard from "@/components/ajuda/CategoryCard";
import FaqAccordion from "@/components/ajuda/FaqAccordion";

export const metadata: Metadata = {
  title: "Central de Ajuda | Ramppy",
  description:
    "Tire suas dúvidas sobre a Ramppy: simulações, análise de reuniões, planos e muito mais.",
};

const helpCategories = [
  {
    icon: "rocket" as const,
    title: "Primeiros passos",
    description: "Configure sua conta e comece a usar",
  },
  {
    icon: "video" as const,
    title: "Simulações",
    description: "Tudo sobre simulação de vendas com IA",
  },
  {
    icon: "calendar" as const,
    title: "Análise de reuniões",
    description: "Google Meet, transcrição e avaliação",
  },
  {
    icon: "credit-card" as const,
    title: "Planos e cobrança",
    description: "Preços, créditos e cancelamento",
  },
];

const faqCategories = [
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
];

export default function AjudaPage() {
  return (
    <PageShell>
      <PageHero
        badge="Ajuda"
        title="Central de Ajuda"
        subtitle="Encontre respostas para as dúvidas mais comuns sobre a Ramppy."
      />

      {/* FAQ Accordion */}
      <SectionWrapper>
        <div className="py-10 md:py-16">
          <h2 className="font-[var(--font-fustat)] text-[32px] md:text-[48px] font-semibold leading-[110%] tracking-[-0.04em] text-teal-dark mb-10">
            Perguntas frequentes
          </h2>
          <div className="max-w-3xl">
            <FaqAccordion categories={faqCategories} />
          </div>
        </div>
      </SectionWrapper>

      {/* Contact support section */}
      <SectionWrapper>
        <div className="py-10 md:py-16">
          <div className="bg-green-surface/50 border border-primary-green/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-[var(--font-fustat)] text-2xl md:text-3xl font-semibold text-teal-dark mb-3">
              Não encontrou o que procura?
            </h2>
            <p className="text-text-secondary mb-6 max-w-md mx-auto">
              Nossa equipe de suporte está pronta para ajudar você.
            </p>
            <a
              href="https://wa.me/5531995525157?text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20com%20a%20Ramppy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[var(--font-fustat)] inline-flex items-center gap-2 text-base font-semibold px-8 py-4 rounded-full bg-primary-green text-white hover:bg-green-dark transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary-green/30"
            >
              Falar com suporte
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </SectionWrapper>

      <CTA />
    </PageShell>
  );
}
