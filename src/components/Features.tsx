"use client";

import SectionWrapper from "./SectionWrapper";

export default function Features() {
  return (
    <SectionWrapper id="funcionalidades" className="overflow-visible">
      <div className="py-20 md:py-32">
        {/* Simulação de vendas */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative">
          {/* Image - Left */}
          <div className="flex-1 w-full lg:translate-x-[-1vw] xl:translate-x-[-3vw]">
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
              Simulação de vendas
            </span>
            <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[36px] font-semibold text-teal-dark leading-[115%] tracking-tight mt-5 mb-5">
              <span className="relative inline-block isolate">
                <span className="relative z-10">Pratique</span>
                <svg className="absolute -left-3 -top-2 w-[calc(100%+24px)] h-[calc(100%+16px)] pointer-events-none z-0" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M 30 38 C 25 18, 65 6, 110 8 C 155 10, 190 18, 188 38 C 186 58, 150 72, 100 74 C 50 76, 12 62, 14 42 C 16 28, 45 16, 90 14" stroke="#4CAF50" strokeWidth="2.5" strokeLinecap="round" fill="none" style={{ strokeDasharray: 800, strokeDashoffset: 800, animation: "draw-circle 1.4s ease-out 0.5s forwards" }} />
                </svg>
              </span>{" "}
              antes de vender de verdade
            </h2>
            <p className="text-base text-text-secondary leading-relaxed mb-6">
              O vendedor pratica conversas de vendas com um cliente virtual gerado por inteligência artificial. O cenário e configurável,idade, temperamento, persona do comprador, objeções específicas,e a conversa acontece por voz, com transcrição automática.
            </p>
            <p className="text-base text-text-secondary leading-relaxed">
              Ao final, uma avaliação detalhada baseada na metodologia SPIN Selling classifica o desempenho em múltiplos indicadores: Situação, Problema, Implicação e Necessidade de Solução.
            </p>
          </div>
        </div>

        {/* Nicole IA */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 relative mt-6 md:mt-8 lg:ml-[3vw] xl:ml-[4vw]">
          {/* Text - Left */}
          <div className="flex-1 max-w-lg lg:pt-32">
            <span className="text-xs font-bold text-primary-green bg-green-surface px-3 py-1.5 rounded-full uppercase tracking-wider">
              Nicole IA
            </span>
            <h2 className="font-[var(--font-fustat)] text-[32px] md:text-[42px] font-semibold text-teal-dark leading-[115%] tracking-tight mt-5 mb-5">
              Sua assistente de{" "}
              <span className="relative inline-block isolate">
                <span className="relative z-10">vendas</span>
                <svg className="absolute -left-3 -top-2 w-[calc(100%+24px)] h-[calc(100%+16px)] pointer-events-none z-0" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M 30 38 C 25 18, 65 6, 110 8 C 155 10, 190 18, 188 38 C 186 58, 150 72, 100 74 C 50 76, 12 62, 14 42 C 16 28, 45 16, 90 14" stroke="#4CAF50" strokeWidth="2.5" strokeLinecap="round" fill="none" style={{ strokeDasharray: 800, strokeDashoffset: 800, animation: "draw-circle 1.4s ease-out 0.5s forwards" }} />
                </svg>
              </span>{" "}
              pessoal
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              A Nicole é a assistente de IA do Ramppy. Ela acompanha a performance de cada vendedor, organiza a agenda, analisa reuniões e sugere os próximos passos, tudo em tempo real, direto na plataforma.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Precisa saber como foi a última call? Quer comparar vendedores? Precisa de um resumo do dia? É só perguntar. A Nicole tem contexto completo do seu time e responde na hora.
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
                <source src="/videos/Nicole clip feature.MOV" type="video/quicktime" />
                <source src="/videos/Nicole clip feature.MOV" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* Analise de Reuniao */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative mt-6 md:mt-8">
          {/* Video - Left */}
          <div className="flex-1 w-full lg:translate-x-[calc(-5vw+80px)] xl:translate-x-[calc(-7vw+80px)] lg:-translate-y-[30px]">
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
                <source src="/videos/Analise meet.MOV" type="video/quicktime" />
                <source src="/videos/Analise meet.MOV" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Text - Right */}
          <div className="flex-1 max-w-lg">
            <span className="text-xs font-bold text-primary-green bg-green-surface px-3 py-1.5 rounded-full uppercase tracking-wider">
              Análise de reuniões
            </span>
            <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[36px] font-semibold text-teal-dark leading-[115%] tracking-tight mt-5 mb-5">
              Análise de cada{" "}
              <span className="relative inline-block isolate">
                <span className="relative z-10">reunião</span>
                <svg className="absolute -left-3 -top-2 w-[calc(100%+24px)] h-[calc(100%+16px)] pointer-events-none z-0" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M 30 38 C 25 18, 65 6, 110 8 C 155 10, 190 18, 188 38 C 186 58, 150 72, 100 74 C 50 76, 12 62, 14 42 C 16 28, 45 16, 90 14" stroke="#4CAF50" strokeWidth="2.5" strokeLinecap="round" fill="none" style={{ strokeDasharray: 800, strokeDashoffset: 800, animation: "draw-circle 1.4s ease-out 0.5s forwards" }} />
                </svg>
              </span>{" "}
              real
            </h2>
            <p className="text-base text-text-secondary leading-relaxed mb-6">
              Conecte seu Google Agenda e pronto. Um bot entra automáticamente em cada reunião do Google Meet, transcreve tudo e aplica a mesma avaliação SPIN Selling usada nas simulações. Sem instalar nada, sem configurar nada.
            </p>
            <p className="text-base text-text-secondary leading-relaxed">
              O gestor acompanha o desempenho real de cada vendedor em negociações de verdade. Identifique padrões, compare evolução e saiba exatamente onde cada um precisa melhorar.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
