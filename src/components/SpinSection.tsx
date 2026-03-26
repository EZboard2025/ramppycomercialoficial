import SectionWrapper from "./SectionWrapper";

const spinItems = [
  {
    letter: "S",
    label: "Situacao",
    color: "bg-primary-green",
    description:
      "Perguntas abertas, adaptabilidade e mapeamento completo do cenario do cliente.",
  },
  {
    letter: "P",
    label: "Problema",
    color: "bg-primary-green",
    description:
      "Profundidade na identificacao de dores, empatia e compreensao do impacto.",
  },
  {
    letter: "I",
    label: "Implicacao",
    color: "bg-accent-orange",
    description:
      "Exploracao das consequencias dos problemas: financeiras, operacionais e de clima.",
  },
  {
    letter: "N",
    label: "Necessidade",
    color: "bg-primary-green",
    description:
      "Conduzir o cliente a verbalizar o valor da solucao e criar senso de urgencia.",
  },
];

export default function SpinSection() {
  return (
    <SectionWrapper>
      <div className="py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Content */}
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 bg-green-surface text-primary-green text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Metodologia SPIN
            </span>
            <h2 className="font-[var(--font-fustat)] text-[32px] md:text-[48px] font-semibold leading-[120%] tracking-[-0.04em] text-teal-dark">
              Avaliacao baseada em{" "}
              <span className="text-primary-green">SPIN Selling</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-text-secondary leading-relaxed max-w-xl">
              Cada simulacao e call real e avaliada nos 4 pilares do SPIN
              Selling, com notas de 0 a 10, feedback detalhado e oportunidades
              perdidas identificadas pela IA.
            </p>
          </div>

          {/* Right: SPIN Cards */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 gap-4">
              {spinItems.map((item) => (
                <div
                  key={item.letter}
                  className="bg-white border border-border-light rounded-2xl p-5 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center text-white font-[var(--font-fustat)] font-bold text-lg`}
                    >
                      {item.letter}
                    </div>
                    <span className="font-[var(--font-fustat)] font-semibold text-teal-dark">
                      {item.label}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
