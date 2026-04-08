import SectionWrapper from "./SectionWrapper";

const testimonials = [
  {
    name: "Lucas Ferreira",
    role: "Head de Vendas",
    company: "TechCorp",
    avatar: "L",
    gradient: "from-green-500 to-emerald-600",
    text: "O Ramppy revolucionou nosso onboarding de vendedores. Em 2 semanas, novos reps ja estao performando como veteranos. A IA de roleplay e assustadoramente realista.",
    metric: "+40%",
    metricLabel: "em conversao",
    stars: 5,
  },
  {
    name: "Maria Santos",
    role: "Gerente Comercial",
    company: "SaaS Pro",
    avatar: "M",
    gradient: "from-blue-500 to-indigo-600",
    text: "A analise automatica de Meet economiza 3 horas por semana do meu time. O feedback SPIN e extremamente preciso e me ajuda a fazer coaching direcionado.",
    metric: "3h",
    metricLabel: "economizadas/semana",
    stars: 5,
  },
  {
    name: "Rafael Costa",
    role: "SDR Senior",
    company: "Growth Labs",
    avatar: "R",
    gradient: "from-purple-500 to-violet-600",
    text: "A Nicole me ajuda em tempo real durante calls. Minha nota SPIN subiu de 5.2 para 8.4 em um mes. Nunca mais perdi uma objecao importante.",
    metric: "5.2 → 8.4",
    metricLabel: "SPIN score",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <SectionWrapper>
      <div className="py-20 md:py-32">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 bg-green-surface text-primary-green text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
            Depoimentos
          </span>
          <h2 className="font-[var(--font-fustat)] text-[32px] md:text-[48px] font-semibold leading-[110%] tracking-[-0.04em] text-teal-dark">
            Quem usa, <span className="text-primary-green">recomenda</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-text-secondary leading-relaxed max-w-lg mx-auto">
            Veja o que nossos usuarios dizem sobre o impacto do Ramppy nas suas vendas.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white border border-border-light rounded-2xl p-7 hover:shadow-xl hover:border-gray-200 transition-all duration-300 flex flex-col"
            >
              {/* Metric badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="bg-green-surface rounded-xl px-4 py-2.5">
                  <p className="font-[var(--font-fustat)] text-2xl font-bold text-primary-green leading-none">{t.metric}</p>
                  <p className="text-[10px] text-primary-green/70 font-medium mt-0.5">{t.metricLabel}</p>
                </div>
                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <p className="text-base text-text-secondary leading-relaxed mb-8 flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-border-light">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-sm`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="font-[var(--font-fustat)] text-sm font-semibold text-teal-dark">
                    {t.name}
                  </div>
                  <div className="text-xs text-text-secondary">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
