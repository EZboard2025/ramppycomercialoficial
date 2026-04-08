"use client";

import SectionWrapper from "./SectionWrapper";

export default function Features() {
  return (
    <SectionWrapper id="funcionalidades" className="overflow-visible">
      <div className="py-20 md:py-32">
        {/* Simulacao de vendas */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative">
          {/* Image - Left */}
          <div className="flex-1 w-full lg:translate-x-[-9.4vw] xl:translate-x-[-14vw]">
            <div className="rounded-2xl overflow-hidden border border-gray-200/50" style={{ boxShadow: "0 25px 80px -12px rgba(0, 0, 0, 0.25), 0 12px 35px -8px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)" }}>
              <img
                src="/images/roleplay.png.png"
                alt="Simulacao de vendas com IA"
                className="w-full h-auto block"
              />
            </div>
          </div>

          {/* Arrow 1 */}
          <img
            src="/images/{7576D9E3-BC36-4F1D-8536-694620DD219A}.png"
            alt=""
            className="hidden lg:block absolute left-[calc(42%-6px)] top-[calc(18%+15px)] w-[15vw] h-auto pointer-events-none z-20"
          />

          {/* Arrow 2 - from green button pointing down */}
          <img
            src="/images/{1607FAA3-204B-4499-86A4-AE87E40C2CBC}.png"
            alt=""
            className="hidden lg:block absolute left-[calc(42%-4px)] top-[calc(62%+45px)] w-[15vw] h-auto pointer-events-none z-20"
          />

          {/* Text - Right */}
          <div className="flex-1 max-w-lg">
            <span className="text-xs font-bold text-primary-green bg-green-surface px-3 py-1.5 rounded-full uppercase tracking-wider">
              Simulacao de vendas
            </span>
            <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[36px] font-semibold text-teal-dark leading-[115%] tracking-tight mt-5 mb-5">
              Pratique antes de vender de verdade
            </h2>
            <p className="text-base text-text-secondary leading-relaxed mb-6">
              O vendedor pratica conversas de vendas com um cliente virtual gerado por inteligencia artificial. O cenario e configuravel — idade, temperamento, persona do comprador, objecoes especificas — e a conversa acontece por voz, com transcricao automatica.
            </p>
            <p className="text-base text-text-secondary leading-relaxed">
              Ao final, uma avaliacao detalhada baseada na metodologia SPIN Selling classifica o desempenho em multiplos indicadores: Situacao, Problema, Implicacao e Necessidade de Solucao.
            </p>
          </div>
        </div>

        {/* Nicole IA */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 relative mt-6 md:mt-8 lg:ml-[3vw] xl:ml-[4vw]">
          {/* Text - Left */}
          <div className="flex-1 max-w-lg lg:pt-8">
            <span className="text-xs font-bold text-primary-green bg-green-surface px-3 py-1.5 rounded-full uppercase tracking-wider">
              Nicole IA
            </span>
            <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[36px] font-semibold text-teal-dark leading-[115%] tracking-tight mt-5 mb-5">
              Sua assistente de vendas pessoal
            </h2>
            <p className="text-base text-text-secondary leading-relaxed mb-6">
              A Nicole e a assistente de IA do Ramppy. Ela acompanha a performance de cada vendedor, organiza a agenda, analisa reunioes e sugere os proximos passos — tudo em tempo real, direto na plataforma.
            </p>
            <p className="text-base text-text-secondary leading-relaxed">
              Precisa saber como foi a ultima call? Quer comparar vendedores? Precisa de um resumo do dia? E so perguntar. A Nicole tem contexto completo do seu time e responde na hora.
            </p>
          </div>

          {/* Video - Right */}
          <div className="flex-1 w-full max-w-[500px] lg:translate-x-[9.4vw] xl:translate-x-[14vw] lg:mt-16">
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
                <source src="/videos/Nicole clip feature.MOV" type="video/quicktime" />
                <source src="/videos/Nicole clip feature.MOV" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
