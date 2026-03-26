import SectionWrapper from "./SectionWrapper";

const testimonials = [
  {
    name: "Lucas Ferreira",
    role: "Head de Vendas, TechCorp",
    avatar: "L",
    color: "bg-primary-green",
    text: "O Ramppy revolucionou nosso onboarding de vendedores. Em 2 semanas, novos reps ja estao performando como veteranos.",
    metric: "+40% em conversao",
  },
  {
    name: "Maria Santos",
    role: "Gerente Comercial, SaaS Pro",
    avatar: "M",
    color: "bg-teal-medium",
    text: "A analise automatica de Meet economiza 3 horas por semana do meu time. O feedback SPIN e extremamente preciso.",
    metric: "3h/semana economizadas",
  },
  {
    name: "Rafael Costa",
    role: "SDR Senior, Growth Labs",
    avatar: "R",
    color: "bg-green-mid",
    text: "A Nicole me ajuda em tempo real durante calls. Minha nota SPIN subiu de 5.2 para 8.4 em um mes.",
    metric: "5.2 → 8.4 SPIN score",
  },
];

export default function Testimonials() {
  return (
    <SectionWrapper>
      <div className="py-16 md:py-24">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 bg-green-surface text-primary-green text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
            Depoimentos
          </span>
          <h2 className="font-[var(--font-fustat)] text-[32px] md:text-[48px] font-semibold leading-[120%] tracking-[-0.04em] text-teal-dark">
            Quem usa, <span className="text-primary-green">recomenda</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white border border-border-light rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Metric badge */}
              <div className="bg-green-surface text-primary-green text-xs font-bold px-3 py-1.5 rounded-full inline-block mb-4">
                {t.metric}
              </div>

              {/* Quote */}
              <p className="text-text-secondary text-base leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-[var(--font-fustat)] text-sm font-semibold text-teal-dark">
                    {t.name}
                  </div>
                  <div className="text-xs text-text-secondary">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
