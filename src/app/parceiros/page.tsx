import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Parceiros | Ramppy",
  description:
    "Conheça nossos parceiros e o programa de parceria da Ramppy para consultores de vendas.",
};

export default function ParceirosPage() {
  return (
    <PageShell>
      {/* Hero */}
      <SectionWrapper>
        <div className="py-20 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-green-surface text-primary-green text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Parceiros
            </span>
            <h1 className="font-[var(--font-fustat)] text-[36px] md:text-[52px] font-semibold leading-[110%] tracking-[-0.04em] text-teal-dark">
              Quem caminha com a Ramppy
            </h1>
            <p className="mt-5 text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
              Conheça as empresas que fazem parte da nossa jornada e o programa de parceria para consultores de vendas.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* ===================== EMPRESAS PARCEIRAS ===================== */}
      <SectionWrapper>
        <div className="py-12 md:py-20">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-primary-green bg-green-surface px-3 py-1.5 rounded-full uppercase tracking-wider">
              Ecossistema
            </span>
            <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[40px] font-semibold text-teal-dark leading-[115%] tracking-tight mt-5">
              Empresas parceiras
            </h2>
            <p className="mt-4 text-base text-text-secondary max-w-xl mx-auto">
              Da aceleração ao mercado, essas são as empresas que fazem parte da nossa história.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Growthway", logo: "/images/gpEEaKIzXt5vOrnP2EA3vRSbUUU.svg", url: "https://growthway.vc/", desc: "Aceleradora" },
              { name: "Newhack", logo: "/images/Newhack logo.png", url: "https://newhack.vc/", desc: "Venture Builder" },
              { name: "Sebrae", logo: "/images/Sebrae logo.png", url: null, desc: "Apoio institucional" },
              { name: "Google", logo: "/images/google.png", url: null, desc: "Demoday & Pitch" },
              { name: "Be Honest", logo: "/images/be honest logo.png", url: null, desc: "Parceiro comercial" },
              { name: "Be Growth", logo: "/images/be growth.png", url: null, desc: "Parceiro comercial" },
              { name: "Grupo Escalar", logo: "/images/grupo escalar.png", url: null, desc: "Parceiro comercial" },
            ].map((partner) => {
              const card = (
                <div className="bg-white border border-border-light rounded-2xl p-6 flex items-center justify-center hover:border-primary-green/30 hover:shadow-lg transition-all duration-300 h-full min-h-[120px]">
                  <img src={partner.logo} alt={partner.name} className="max-h-12 max-w-[140px] object-contain" />
                </div>
              );
              return partner.url ? (
                <a key={partner.name} href={partner.url} target="_blank" rel="noopener noreferrer">
                  {card}
                </a>
              ) : (
                <div key={partner.name}>{card}</div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* ===================== PROGRAMA DE PARCERIA ===================== */}
      <SectionWrapper dark>
        <div className="py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Programa de parceria para consultores
            </span>
            <h2 className="font-[var(--font-fustat)] text-[32px] md:text-[48px] font-semibold leading-[110%] tracking-[-0.04em] text-white mb-6">
              Nós te pagamos <span className="text-primary-green">30%</span> do valor da mensalidade. Todos os meses.
            </h2>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
              Para consultores de vendas que querem criar uma receita recorrente sem aumentar sua carga de trabalho.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* O problema + solução */}
      <SectionWrapper>
        <div className="py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Problema */}
            <div className="flex-1">
              <span className="text-xs font-bold text-red-500 bg-red-50 px-3 py-1.5 rounded-full uppercase tracking-wider">
                O problema
              </span>
              <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[36px] font-semibold text-teal-dark leading-[115%] tracking-tight mt-5 mb-5">
                Terminou o projeto, terminou a receita
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                A maioria dos consultores já entrega treinamentos para seus clientes. O problema é que quando o projeto acaba, a receita acaba junto.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                E o pior: sem acompanhamento contínuo, tudo o que foi ensinado se perde em semanas. Seus clientes já gastam milhares em treinamento. O gap não é falta de investimento, é falta de acompanhamento sistemático.
              </p>
            </div>

            {/* Solução */}
            <div className="flex-1">
              <span className="text-xs font-bold text-primary-green bg-green-surface px-3 py-1.5 rounded-full uppercase tracking-wider">
                A solução
              </span>
              <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[36px] font-semibold text-teal-dark leading-[115%] tracking-tight mt-5 mb-5">
                A extensão digital do seu trabalho
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Você apresenta a Ramppy para seus clientes e nós te pagamos 30% do valor da mensalidade, todos os meses, enquanto o cliente usar a plataforma.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                Você continua fazendo o que já faz bem: desenvolver metodologias, estruturar processos, treinar times. A diferença é que agora tem uma ferramenta para garantir que tudo isso seja praticado depois que você sair da empresa.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Como funciona */}
      <SectionWrapper>
        <div className="py-12 md:py-20">
          <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[36px] font-semibold text-teal-dark leading-[115%] tracking-tight mb-10">
            Como funciona
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Você indica", desc: "Apresente a Ramppy para seus clientes como extensão do seu trabalho de consultoria." },
              { step: "02", title: "O cliente assina", desc: "A Ramppy cuida da implementação, suporte e evolução da plataforma com o cliente." },
              { step: "03", title: "Você recebe", desc: "30% do valor da mensalidade cai na sua conta todo mês, enquanto o cliente estiver ativo." },
            ].map((item) => (
              <div key={item.step} className="bg-white border border-border-light rounded-2xl p-8 hover:border-primary-green/30 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-green to-[#1e6b2e] flex items-center justify-center text-white font-[var(--font-fustat)] text-lg font-bold mb-5">
                  {item.step}
                </div>
                <h3 className="font-[var(--font-fustat)] text-xl font-semibold text-teal-dark mb-3">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Por que faz sentido */}
      <SectionWrapper>
        <div className="py-12 md:py-20">
          <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[36px] font-semibold text-teal-dark leading-[115%] tracking-tight mb-10">
            Por que faz sentido
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {[
              { title: "Receita recorrente", desc: "Você para de depender apenas de projetos pontuais. Cada cliente indicado vira uma receita mensal." },
              { title: "Sem trabalho extra", desc: "Você não precisa dar suporte, implementar ou gerenciar a plataforma. A Ramppy faz tudo." },
              { title: "Seu trabalho perdura", desc: "A IA garante que as metodologias e processos que você ensinou continuem sendo praticados diariamente." },
              { title: "Resolve o gap real", desc: "Com a IA treinando e avaliando vendedores continuamente, você resolve o gap entre 'aprender' e 'aplicar'." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-primary-green flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <p className="font-[var(--font-fustat)] text-lg font-semibold text-teal-dark mb-1">{item.title}</p>
                  <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="py-12 md:py-20">
          <div className="bg-gradient-to-br from-teal-dark via-[#1e4d38] to-[#245a3a] rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary-green/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
            <div className="relative z-10">
              <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[40px] font-semibold text-white leading-[115%] tracking-tight mb-4">
                Quer ser parceiro?
              </h2>
              <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-lg mx-auto">
                Fale com a gente e entenda como a parceria pode funcionar para o seu negócio.
              </p>
              <a
                href="https://wa.me/5531995525157?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20programa%20de%20parceria%20da%20Ramppy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[var(--font-fustat)] inline-flex items-center gap-2 text-base font-semibold px-8 py-4 rounded-full bg-primary-green text-white hover:bg-green-dark transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary-green/30"
              >
                Quero ser parceiro
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </PageShell>
  );
}
