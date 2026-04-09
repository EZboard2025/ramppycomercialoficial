"use client";

import SectionWrapper from "./SectionWrapper";

export default function NicoleFeature() {
  return (
    <SectionWrapper className="!-mt-[1px]">
      <div className="py-0 md:py-0">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 relative">
          {/* Text - Left */}
          <div className="flex-1 max-w-lg">
            <span className="text-xs font-bold text-primary-green bg-green-surface px-3 py-1.5 rounded-full uppercase tracking-wider">
              Nicole IA
            </span>
            <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[36px] font-semibold text-teal-dark leading-[115%] tracking-tight mt-5 mb-5">
              Sua assistente de vendas pessoal
            </h2>
            <p className="text-base text-text-secondary leading-relaxed mb-6">
              A Nicole é a assistente de IA da Ramppy. Ela acompanha a performance de cada vendedor, organiza a agenda, analisa reuniões e sugere os próximos passos, tudo em tempo real, direto na plataforma.
            </p>
            <p className="text-base text-text-secondary leading-relaxed">
              Precisa saber como foi a última call? Quer comparar vendedores? Precisa de um resumo do dia? É só perguntar. A Nicole tem contexto completo do seu time e responde na hora.
            </p>
          </div>

          {/* Video - Right */}
          <div className="flex-1 w-full max-w-[500px] lg:translate-x-[6vw] xl:translate-x-[10vw]">
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
