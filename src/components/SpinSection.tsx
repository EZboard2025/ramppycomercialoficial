import SectionWrapper from "./SectionWrapper";

const spinItems = [
  {
    letter: "S",
    label: "Situacao",
    score: "7.5",
    color: "from-green-500 to-emerald-600",
    barWidth: "w-[75%]",
    barColor: "bg-green-500",
    description: "Perguntas abertas, adaptabilidade e mapeamento completo do cenario do cliente.",
  },
  {
    letter: "P",
    label: "Problema",
    score: "7.5",
    color: "from-green-500 to-emerald-600",
    barWidth: "w-[75%]",
    barColor: "bg-green-500",
    description: "Profundidade na identificacao de dores, empatia e compreensao do impacto.",
  },
  {
    letter: "I",
    label: "Implicacao",
    score: "6.7",
    color: "from-amber-500 to-orange-500",
    barWidth: "w-[67%]",
    barColor: "bg-amber-500",
    description: "Exploracao das consequencias dos problemas: financeiras, operacionais e de clima.",
  },
  {
    letter: "N",
    label: "Necessidade",
    score: "7.0",
    color: "from-green-500 to-emerald-600",
    barWidth: "w-[70%]",
    barColor: "bg-green-500",
    description: "Conduzir o cliente a verbalizar o valor da solucao e criar senso de urgencia.",
  },
];

export default function SpinSection() {
  return (
    <SectionWrapper>
      <div className="py-20 md:py-32">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-20">
          {/* Left: Content */}
          <div className="flex-1 lg:sticky lg:top-32">
            <span className="inline-flex items-center gap-2 bg-green-surface text-primary-green text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Metodologia SPIN
            </span>
            <h2 className="font-[var(--font-fustat)] text-[32px] md:text-[48px] font-semibold leading-[110%] tracking-[-0.04em] text-teal-dark mb-5">
              Avaliacao baseada em{" "}
              <span className="text-primary-green">SPIN Selling</span>
            </h2>
            <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-lg mb-8">
              Cada simulacao e call real e avaliada nos 4 pilares do SPIN Selling, com notas de 0 a 10, feedback detalhado e oportunidades perdidas identificadas pela IA.
            </p>
            <div className="flex items-center gap-6 p-5 bg-gray-50 rounded-2xl border border-border-light">
              <div className="text-center">
                <p className="font-[var(--font-fustat)] text-3xl font-bold text-teal-dark">7.2</p>
                <p className="text-[11px] text-text-secondary mt-0.5">Nota media</p>
              </div>
              <div className="w-px h-10 bg-border-light" />
              <div className="text-center">
                <p className="font-[var(--font-fustat)] text-3xl font-bold text-primary-green">+5.4</p>
                <p className="text-[11px] text-text-secondary mt-0.5">Tendencia</p>
              </div>
              <div className="w-px h-10 bg-border-light" />
              <div className="text-center">
                <p className="font-[var(--font-fustat)] text-3xl font-bold text-teal-dark">20</p>
                <p className="text-[11px] text-text-secondary mt-0.5">Sessoes</p>
              </div>
            </div>
          </div>

          {/* Right: SPIN Cards */}
          <div className="flex-1 w-full">
            <div className="space-y-4">
              {spinItems.map((item) => (
                <div
                  key={item.letter}
                  className="bg-white border border-border-light rounded-2xl p-6 hover:shadow-lg hover:border-gray-200 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-[var(--font-fustat)] font-bold text-xl shrink-0`}>
                      {item.letter}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-[var(--font-fustat)] font-semibold text-lg text-teal-dark">
                          {item.label}
                        </span>
                        <span className="font-[var(--font-fustat)] text-lg font-bold text-teal-dark">
                          {item.score}<span className="text-sm text-text-secondary font-normal">/10</span>
                        </span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-3">
                        <div className={`h-full ${item.barColor} rounded-full ${item.barWidth} transition-all duration-500`} />
                      </div>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
