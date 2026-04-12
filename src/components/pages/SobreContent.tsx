"use client";

import SectionWrapper from "@/components/SectionWrapper";
import CTA from "@/components/CTA";
import { useLocale } from "@/i18n/LocaleContext";

const strings = {
  pt: {
    heroBadge: "Sobre nós",
    heroTitle: "Uma ideia de 52 horas que virou realidade",
    heroSubtitle:
      "A Ramppy nasceu em um hackathon, sobreviveu a estágios gratuitos, foi aceita na maior aceleração de Minas Gerais e hoje transforma a forma como empresas treinam vendedores.",

    story1Badge: "Como começou",
    story1Title: "52 horas para provar que a ideia funcionava",
    story1P1:
      "Tudo começou em um hackathon em 2025. Tínhamos 52 horas para criar uma startup do zero e apresentar para uma banca. Ficamos em 2º lugar, e ali decidimos que a ideia era boa demais pra morrer.",
    story1P2:
      "Para tirar do papel, fizemos estágios gratuitos só para aprender a programar. Quando surgiu a inscrição para a Growthway, a maior aceleração de startups de Minas Gerais, a gente nem sabia se estava pronto. Aplicamos mesmo assim.",
    story1ImgAlt: "Equipe GrowthWay primeiro batch 2025",

    story2Badge: "A virada",
    story2Title: "Fomos aceitos. E tudo mudou.",
    story2P1:
      "Com a mentoria da Growthway e o suporte da Newhack, conseguimos transformar aquela ideia de hackathon em uma plataforma real que resolve de verdade a ineficiência no treinamento de vendedores.",
    story2P2:
      "Do hackathon ao pitch no Google Brasil. De estágios gratuitos à aceleração. Cada passo foi construído na base da persistência.",
    story2ImgAlt: "Pitch no Google Brasil",

    foundersBadge: "Founders",
    foundersTitle: "Quem está construindo a Ramppy",
    coFounder: "Co-founder",

    partnersBadge: "Primeiro Batch 2025",
    partnersText:
      "Fomos selecionados para a Growthway, a maior aceleração de startups de Minas Gerais, em parceria com a Newhack. Com mentoria de ponta e suporte estratégico, estamos transformando a forma como empresas treinam seus vendedores.",

    problemTitle: "O problema que resolvemos",
    problemP1:
      "O mercado de vendas no Brasil ainda depende de treinamentos pontuais, palestras motivacionais e acompanhamento manual por gestores. Esse modelo tem baixa escalabilidade, zero personalização e desconexão total entre teoria e prática.",
    problemP2:
      "A Ramppy é a plataforma que conecta simulação com IA, análise de reuniões reais, coaching automático e gestão de performance em um único lugar. Cada interação gera dados. Cada dado gera evolução.",

    missionTitle: "Missão",
    missionText:
      "Democratizar o acesso a treinamento comercial de alta qualidade por meio da inteligência artificial, capacitando vendedores de forma contínua, personalizada e mensurável.",
    visionTitle: "Visão",
    visionText:
      "Ser a plataforma de referência em desenvolvimento comercial inteligente na América Latina, onde cada vendedor tem um assistente de IA que aprende com sua realidade e evolui com sua prática.",
    valuesTitle: "Valores",
    valuesText:
      "Aprendizado contínuo. Personalização radical. Decisão baseada em dados. Simplicidade na experiência. Ética e transparência. A IA assiste o vendedor, nunca o substitui.",

    principlesTitle: "No que acreditamos",
    principles: [
      {
        title: "Prática vence teoria",
        desc: "O desenvolvimento acontece na prática diária, não em eventos isolados. Cada simulação, cada call, cada conversa gera aprendizado real.",
      },
      {
        title: "Cada vendedor é único",
        desc: "Rejeitamos o treinamento genérico. A IA adapta conteúdo, desafios e assistência ao contexto de cada pessoa e empresa.",
      },
      {
        title: "Dados, não achismo",
        desc: "Cada competência é avaliada numericamente, cada evolução é rastreada e cada recomendação é fundamentada em dados concretos.",
      },
      {
        title: "Inteligência compartilhada",
        desc: "O que um vendedor aprende beneficia todo o time. O sistema transforma mensagens bem-sucedidas em exemplos que melhoram as sugestões para todos.",
      },
    ],
  },
  en: {
    heroBadge: "About us",
    heroTitle: "A 52-hour idea that became reality",
    heroSubtitle:
      "Ramppy was born at a hackathon, survived unpaid internships, was accepted into the largest startup accelerator in Minas Gerais, and today is transforming how companies train their sales reps.",

    story1Badge: "How it started",
    story1Title: "52 hours to prove the idea worked",
    story1P1:
      "It all started at a hackathon in 2025. We had 52 hours to build a startup from scratch and pitch it to a panel. We came in 2nd place, and right there we decided the idea was too good to let die.",
    story1P2:
      "To get it off the ground, we took unpaid internships just to learn how to code. When applications opened for Growthway, the largest startup accelerator in Minas Gerais, we weren't even sure we were ready. We applied anyway.",
    story1ImgAlt: "GrowthWay team first batch 2025",

    story2Badge: "The turning point",
    story2Title: "We got in. And everything changed.",
    story2P1:
      "With mentorship from Growthway and support from Newhack, we turned that hackathon idea into a real platform that actually solves the inefficiency in sales training.",
    story2P2:
      "From a hackathon to pitching at Google Brazil. From unpaid internships to an accelerator. Every step was built on persistence.",
    story2ImgAlt: "Pitch at Google Brazil",

    foundersBadge: "Founders",
    foundersTitle: "Who is building Ramppy",
    coFounder: "Co-founder",

    partnersBadge: "First Batch 2025",
    partnersText:
      "We were selected for Growthway, the largest startup accelerator in Minas Gerais, in partnership with Newhack. With top-tier mentorship and strategic support, we're transforming how companies train their sales reps.",

    problemTitle: "The problem we solve",
    problemP1:
      "The sales market in Brazil still relies on one-off training sessions, motivational talks, and manual coaching by managers. This model has low scalability, zero personalization, and a complete disconnect between theory and practice.",
    problemP2:
      "Ramppy is the platform that connects AI simulation, real meeting analysis, automated coaching, and performance management in one place. Every interaction generates data. Every data point drives growth.",

    missionTitle: "Mission",
    missionText:
      "Democratize access to high-quality sales training through artificial intelligence, empowering sales reps in a continuous, personalized, and measurable way.",
    visionTitle: "Vision",
    visionText:
      "To be the go-to platform for intelligent sales development in Latin America, where every rep has an AI assistant that learns from their reality and evolves with their practice.",
    valuesTitle: "Values",
    valuesText:
      "Continuous learning. Radical personalization. Data-driven decisions. Simplicity in experience. Ethics and transparency. AI supports the rep, it never replaces them.",

    principlesTitle: "What we believe in",
    principles: [
      {
        title: "Practice beats theory",
        desc: "Development happens in daily practice, not in isolated events. Every simulation, every call, every conversation generates real learning.",
      },
      {
        title: "Every sales rep is unique",
        desc: "We reject generic training. AI adapts content, challenges, and assistance to the context of each person and company.",
      },
      {
        title: "Data, not guesswork",
        desc: "Every skill is scored numerically, every improvement is tracked, and every recommendation is grounded in concrete data.",
      },
      {
        title: "Shared intelligence",
        desc: "What one rep learns benefits the whole team. The system turns successful messages into examples that improve suggestions for everyone.",
      },
    ],
  },
};

export default function SobreContent() {
  const locale = useLocale();
  const t = strings[locale];

  return (
    <>
      {/* Hero */}
      <SectionWrapper>
        <div className="py-20 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-green-surface text-primary-green text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              {t.heroBadge}
            </span>
            <h1 className="font-[var(--font-fustat)] text-[36px] md:text-[52px] font-semibold leading-[110%] tracking-[-0.04em] text-teal-dark">
              {t.heroTitle}
            </h1>
            <p className="mt-5 text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
              {t.heroSubtitle}
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
                <img src="/images/1769798859036 (2).jpg" alt={t.story1ImgAlt} className="w-full h-auto block" />
              </div>
            </div>
            <div className="flex-1 max-w-lg">
              <span className="text-xs font-bold text-primary-green bg-green-surface px-3 py-1.5 rounded-full uppercase tracking-wider">
                {t.story1Badge}
              </span>
              <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[36px] font-semibold text-teal-dark leading-[115%] tracking-tight mt-5 mb-5">
                {t.story1Title}
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                {t.story1P1}
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                {t.story1P2}
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
                <img src="/images/1769798858570.jpg" alt={t.story2ImgAlt} className="w-full h-auto block" />
              </div>
            </div>
            <div className="flex-1 max-w-lg">
              <span className="text-xs font-bold text-primary-green bg-green-surface px-3 py-1.5 rounded-full uppercase tracking-wider">
                {t.story2Badge}
              </span>
              <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[36px] font-semibold text-teal-dark leading-[115%] tracking-tight mt-5 mb-5">
                {t.story2Title}
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                {t.story2P1}
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                {t.story2P2}
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
              {t.foundersBadge}
            </span>
            <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[36px] font-semibold text-teal-dark leading-[115%] tracking-tight mt-5">
              {t.foundersTitle}
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
                <p className="text-sm text-text-secondary">{t.coFounder}</p>
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
              {t.partnersBadge}
            </span>
            <div className="flex items-center justify-center gap-12 md:gap-20 mb-8">
              <a href="https://growthway.vc/" target="_blank" rel="noopener noreferrer" className="font-[var(--font-fustat)] text-3xl md:text-5xl font-bold text-teal-dark tracking-tight hover:text-primary-green transition-colors">Growthway<span className="text-amber-500">_</span></a>
              <a href="https://newhack.vc/" target="_blank" rel="noopener noreferrer" className="font-[var(--font-fustat)] text-3xl md:text-5xl font-bold text-teal-dark tracking-tight hover:text-primary-green transition-colors">newhack</a>
            </div>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
              {t.partnersText}
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* O problema */}
      <SectionWrapper dark>
        <div className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[40px] font-semibold leading-[115%] tracking-tight text-white mb-8">
              {t.problemTitle}
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              {t.problemP1}
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              {t.problemP2}
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
              <h3 className="font-[var(--font-fustat)] text-xl font-semibold text-teal-dark mb-3">{t.missionTitle}</h3>
              <p className="text-text-secondary leading-relaxed">
                {t.missionText}
              </p>
            </div>

            <div className="bg-white border border-border-light rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-green-surface flex items-center justify-center text-primary-green mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="font-[var(--font-fustat)] text-xl font-semibold text-teal-dark mb-3">{t.visionTitle}</h3>
              <p className="text-text-secondary leading-relaxed">
                {t.visionText}
              </p>
            </div>

            <div className="bg-white border border-border-light rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-green-surface flex items-center justify-center text-primary-green mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="font-[var(--font-fustat)] text-xl font-semibold text-teal-dark mb-3">{t.valuesTitle}</h3>
              <p className="text-text-secondary leading-relaxed">
                {t.valuesText}
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Princípios */}
      <SectionWrapper>
        <div className="py-12 md:py-20">
          <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[36px] font-semibold text-teal-dark leading-[115%] tracking-tight mb-10">
            {t.principlesTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {t.principles.map((item) => (
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
    </>
  );
}
