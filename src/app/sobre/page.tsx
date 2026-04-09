import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import SectionWrapper from "@/components/SectionWrapper";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Sobre nós | Ramppy",
  description:
    "Conheça a história da Ramppy: de um hackathon de 52 horas à maior aceleração de startups de Minas Gerais.",
};

export default function SobrePage() {
  return (
    <PageShell>
      {/* Hero */}
      <SectionWrapper>
        <div className="py-20 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-green-surface text-primary-green text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Sobre nós
            </span>
            <h1 className="font-[var(--font-fustat)] text-[36px] md:text-[52px] font-semibold leading-[110%] tracking-[-0.04em] text-teal-dark">
              Uma ideia de 52 horas que virou realidade
            </h1>
            <p className="mt-5 text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
              A Ramppy nasceu em um hackathon, sobreviveu a estágios gratuitos, foi aceita na maior aceleração de Minas Gerais e hoje transforma a forma como empresas treinam vendedores.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Nossa história,blocos alternados como a home */}
      <SectionWrapper>
        <div className="py-12 md:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 w-full">
              <div className="rounded-2xl overflow-hidden border border-gray-200/50" style={{ boxShadow: "0 25px 80px -12px rgba(0, 0, 0, 0.25), 0 12px 35px -8px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)" }}>
                <img src="/images/1769798859036 (2).jpg" alt="Equipe GrowthWay primeiro batch 2025" className="w-full h-auto block" />
              </div>
            </div>
            <div className="flex-1 max-w-lg">
              <span className="text-xs font-bold text-primary-green bg-green-surface px-3 py-1.5 rounded-full uppercase tracking-wider">
                Como começou
              </span>
              <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[36px] font-semibold text-teal-dark leading-[115%] tracking-tight mt-5 mb-5">
                52 horas para provar que a ideia funcionava
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Tudo começou em um hackathon em 2025. Tínhamos 52 horas para criar uma startup do zero e apresentar para uma banca. Ficamos em 2º lugar, e ali decidimos que a ideia era boa demais pra morrer.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                Para tirar do papel, fizemos estágios gratuitos só para aprender a programar. Quando surgiu a inscrição para a Growthway, a maior aceleração de startups de Minas Gerais, a gente nem sabia se estava pronto. Aplicamos mesmo assim.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="py-12 md:py-20">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
            <div className="flex-1 w-full">
              <div className="rounded-2xl overflow-hidden border border-gray-200/50" style={{ boxShadow: "0 25px 80px -12px rgba(0, 0, 0, 0.25), 0 12px 35px -8px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)" }}>
                <img src="/images/1769798858570.jpg" alt="Pitch no Google Brasil" className="w-full h-auto block" />
              </div>
            </div>
            <div className="flex-1 max-w-lg">
              <span className="text-xs font-bold text-primary-green bg-green-surface px-3 py-1.5 rounded-full uppercase tracking-wider">
                A virada
              </span>
              <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[36px] font-semibold text-teal-dark leading-[115%] tracking-tight mt-5 mb-5">
                Fomos aceitos. E tudo mudou.
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Com a mentoria da Growthway e o suporte da Newhack, conseguimos transformar aquela ideia de hackathon em uma plataforma real que resolve de verdade a ineficiência no treinamento de vendedores.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                Do hackathon ao pitch no Google Brasil. De estágios gratuitos à aceleração. Cada passo foi construído na base da persistência.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Founders */}
      <SectionWrapper>
        <div className="py-12 md:py-20">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-primary-green bg-green-surface px-3 py-1.5 rounded-full uppercase tracking-wider">
              Founders
            </span>
            <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[36px] font-semibold text-teal-dark leading-[115%] tracking-tight mt-5">
              Quem está construindo a Ramppy
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            {[
              { name: "Gabriel Gomide", image: "/images/Gabriel Gomide.png", linkedin: "https://www.linkedin.com/in/gabriel-gomide-922694365/" },
              { name: "Arthur Xavier", image: "/images/1769295670916.jpg", linkedin: "https://www.linkedin.com/in/arthur-xavier-98b495336/" },
              { name: "Matheus Muniz", image: "/images/Matheus Muniz.png", linkedin: "https://www.linkedin.com/in/matheus-moreira-84b413374/" },
            ].map((founder) => (
              <a key={founder.name} href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="text-center group">
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-green-surface group-hover:border-primary-green/30 transition-all duration-300 mx-auto mb-4" style={{ boxShadow: "0 12px 35px -8px rgba(0, 0, 0, 0.15)" }}>
                  <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
                </div>
                <p className="font-[var(--font-fustat)] text-lg font-semibold text-teal-dark group-hover:text-primary-green transition-colors">{founder.name}</p>
                <p className="text-sm text-text-secondary">Co-founder</p>
              </a>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Parceiros */}
      <SectionWrapper>
        <div className="py-12 md:py-20">
          <div className="bg-green-surface/50 border border-primary-green/10 rounded-2xl p-10 md:p-16 text-center">
            <span className="inline-flex items-center gap-2 bg-primary-green/10 text-primary-green text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Primeiro Batch 2025
            </span>
            <div className="flex items-center justify-center gap-12 md:gap-20 mb-8">
              <a href="https://growthway.vc/" target="_blank" rel="noopener noreferrer" className="font-[var(--font-fustat)] text-3xl md:text-5xl font-bold text-teal-dark tracking-tight hover:text-primary-green transition-colors">Growthway<span className="text-amber-500">_</span></a>
              <a href="https://newhack.vc/" target="_blank" rel="noopener noreferrer" className="font-[var(--font-fustat)] text-3xl md:text-5xl font-bold text-teal-dark tracking-tight hover:text-primary-green transition-colors">newhack</a>
            </div>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
              Fomos selecionados para a Growthway, a maior aceleração de startups de Minas Gerais, em parceria com a Newhack. Com mentoria de ponta e suporte estratégico, estamos transformando a forma como empresas treinam seus vendedores.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* O problema */}
      <SectionWrapper dark>
        <div className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[40px] font-semibold leading-[115%] tracking-tight text-white mb-8">
              O problema que resolvemos
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              O mercado de vendas no Brasil ainda depende de treinamentos pontuais, palestras motivacionais e acompanhamento manual por gestores. Esse modelo tem baixa escalabilidade, zero personalização e desconexão total entre teoria e prática.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              A Ramppy é a plataforma que conecta simulação com IA, análise de reuniões reais, coaching automático e gestão de performance em um único lugar. Cada interação gera dados. Cada dado gera evolução.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Missão, Visão, Valores */}
      <SectionWrapper>
        <div className="py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-border-light rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-green-surface flex items-center justify-center text-primary-green mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16l4-4-4-4" />
                  <path d="M8 12h8" />
                </svg>
              </div>
              <h3 className="font-[var(--font-fustat)] text-xl font-semibold text-teal-dark mb-3">Missão</h3>
              <p className="text-text-secondary leading-relaxed">
                Democratizar o acesso a treinamento comercial de alta qualidade por meio da inteligência artificial, capacitando vendedores de forma contínua, personalizada e mensurável.
              </p>
            </div>

            <div className="bg-white border border-border-light rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-green-surface flex items-center justify-center text-primary-green mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="font-[var(--font-fustat)] text-xl font-semibold text-teal-dark mb-3">Visão</h3>
              <p className="text-text-secondary leading-relaxed">
                Ser a plataforma de referência em desenvolvimento comercial inteligente na América Latina, onde cada vendedor tem um assistente de IA que aprende com sua realidade e evolui com sua prática.
              </p>
            </div>

            <div className="bg-white border border-border-light rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-green-surface flex items-center justify-center text-primary-green mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="font-[var(--font-fustat)] text-xl font-semibold text-teal-dark mb-3">Valores</h3>
              <p className="text-text-secondary leading-relaxed">
                Aprendizado contínuo. Personalização radical. Decisão baseada em dados. Simplicidade na experiência. Ética e transparência. A IA assiste o vendedor, nunca o substitui.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Princípios */}
      <SectionWrapper>
        <div className="py-12 md:py-20">
          <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[36px] font-semibold text-teal-dark leading-[115%] tracking-tight mb-10">
            No que acreditamos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {[
              { title: "Prática vence teoria", desc: "O desenvolvimento acontece na prática diária, não em eventos isolados. Cada simulação, cada call, cada conversa gera aprendizado real." },
              { title: "Cada vendedor é único", desc: "Rejeitamos o treinamento genérico. A IA adapta conteúdo, desafios e assistência ao contexto de cada pessoa e empresa." },
              { title: "Dados, não achismo", desc: "Cada competência é avaliada numericamente, cada evolução é rastreada e cada recomendação é fundamentada em dados concretos." },
              { title: "Inteligência compartilhada", desc: "O que um vendedor aprende beneficia todo o time. O sistema transforma mensagens bem-sucedidas em exemplos que melhoram as sugestões para todos." },
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

      <CTA />
    </PageShell>
  );
}
