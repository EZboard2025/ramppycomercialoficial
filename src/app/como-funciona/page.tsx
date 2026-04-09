import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import SectionWrapper from "@/components/SectionWrapper";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Como Funciona | Ramppy",
  description:
    "Conheça o passo a passo completo do Ramppy: simulação de vendas com IA, análise de reuniões e coaching inteligente para seu time.",
};

const steps = [
  {
    badge: "Passo 01",
    title: "Configure os cenários de venda",
    text: "O gestor define a persona do cliente, objeções, temperamento e o contexto da negociação. Cada simulação é única e personalizada para a realidade do seu time.",
    video: "/videos/IMG_2973.MOV",
    reverse: false,
  },
  {
    badge: "Passo 02",
    title: "Simulação por voz com IA",
    text: "O vendedor entra em uma videochamada com um cliente virtual. A conversa acontece por voz, em tempo real, com transcrição automática. É como treinar com um cliente real, sem o risco.",
    image: "/images/roleplay.png.png",
    reverse: true,
  },
  {
    badge: "Passo 03",
    title: "Análise automática de reuniões reais",
    text: "Conecte seu Google Agenda e pronto. Um bot entra automaticamente em cada reunião do Google Meet, transcreve tudo e aplica a mesma avaliação das simulações.",
    video: "/videos/Analise meet.MOV",
    reverse: false,
  },
  {
    badge: "Passo 04",
    title: "Avaliação SPIN em cada interação",
    text: "Cada simulação e reunião real recebe uma nota detalhada nos 4 pilares SPIN: Situação, Problema, Implicação e Necessidade de Solução. O vendedor sabe exatamente onde melhorar.",
    reverse: true,
  },
  {
    badge: "Passo 05",
    title: "Nicole IA acompanha tudo",
    text: "A assistente de IA do Ramppy analisa a performance de cada vendedor, compara resultados, sugere próximos passos e responde qualquer pergunta sobre o time. Tudo na hora.",
    video: "/videos/Nicole clip feature.MOV",
    reverse: false,
  },
];

export default function ComoFuncionaPage() {
  return (
    <PageShell>
      {/* Hero */}
      <SectionWrapper>
        <div className="py-20 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-green-surface text-primary-green text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Como funciona
            </span>
            <h1 className="font-[var(--font-fustat)] text-[36px] md:text-[52px] font-semibold leading-[110%] tracking-[-0.04em] text-teal-dark">
              Do setup ao resultado em minutos
            </h1>
            <p className="mt-5 text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
              O Ramppy funciona em etapas simples. Cada uma foi pensada para que seu time evolua sem complicação, com resultados visíveis desde o primeiro dia.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Steps — same layout style as homepage Features */}
      {steps.map((step, idx) => (
        <SectionWrapper key={idx} className={idx === 0 ? "overflow-visible" : ""}>
          <div className={`py-12 md:py-20 ${idx === 0 ? "" : ""}`}>
            <div className={`flex flex-col ${step.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-16`}>
              {/* Media */}
              <div className="flex-1 w-full">
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
    </PageShell>
  );
}
