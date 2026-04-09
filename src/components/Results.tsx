import SectionWrapper from "./SectionWrapper";

const results = [
  {
    metric: "67%",
    description: "Redução no tempo de ramp-up de novos vendedores",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    metric: "3h",
    description: "Economizadas por semana em análise manual de calls",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    metric: "40%",
    description: "Aumento médio na taxa de conversão das equipes",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    metric: "2x",
    description: "Mais rápido para atingir quota no primeiro trimestre",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

export default function Results() {
  return (
    <SectionWrapper dark>
      <div className="py-20 md:py-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              <polyline points="17 6 23 6 23 12" />
            </svg>
            Resultados reais
          </span>
          <h2 className="font-[var(--font-fustat)] text-[32px] md:text-[48px] font-semibold leading-[120%] tracking-[-0.04em] text-white">
            Números que falam por si
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/60 leading-relaxed">
            Resultados médios dos times que usam a Ramppy há mais de 3 meses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((item) => (
            <div
              key={item.metric}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/[0.08] transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-green/20 text-primary-green flex items-center justify-center mx-auto mb-5">
                {item.icon}
              </div>
              <p className="font-[var(--font-fustat)] text-5xl md:text-6xl font-bold text-white tracking-tight mb-3">
                {item.metric}
              </p>
              <p className="text-sm text-white/60 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
