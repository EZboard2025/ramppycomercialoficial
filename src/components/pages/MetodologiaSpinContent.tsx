"use client";

import SectionWrapper from "@/components/SectionWrapper";
import CTA from "@/components/CTA";
import { useLocale } from "@/i18n/LocaleContext";

const strings = {
  pt: {
    heroBadge: "Metodologia",
    heroTitle: "SPIN Selling: a ciência por trás de cada avaliação da Ramppy",
    heroSubtitle:
      "Criada por Neil Rackham após analisar mais de 35.000 ligações de vendas em 23 países, a metodologia SPIN é o framework que a Ramppy usa para avaliar cada interação do seu time.",
    researchTitle: "A maior pesquisa sobre vendas já realizada",
    researchSubtitle:
      "Neil Rackham e o Huthwaite Research Group conduziram um estudo de 12 anos que mudou para sempre a forma como entendemos vendas complexas.",
    researchStats: [
      { number: "35.000+", label: "ligações de vendas analisadas" },
      { number: "10.000", label: "vendedores estudados" },
      { number: "23", label: "países pesquisados" },
      { number: "12", label: "anos de pesquisa" },
    ],
    findingsTitle: "O que a pesquisa descobriu",
    findings: [
      "Técnicas de fechamento agressivo são contraproducentes em vendas complexas,reduziram o sucesso em 23%.",
      "Vendedores que não usavam técnicas tradicionais de fechamento tinham taxas de satisfação mais altas e clientes mais fiéis.",
      "O sucesso em vendas complexas depende, mais do que qualquer outra coisa, de como a fase de investigação é conduzida.",
      "Vendedores de alto desempenho fazem 4x mais perguntas de implicação que vendedores medianos.",
    ],
    pillarsBadge: "Os 4 pilares",
    pillarsTitleS: "Situação",
    pillarsTitleP: "Problema",
    pillarsTitleI: "Implicação",
    pillarsTitleN: "Necessidade",
    pillarExamples: "Exemplos de perguntas:",
    // S
    sName: "Situação",
    sDesc:
      "Perguntas para entender o contexto atual do cliente. São o ponto de partida da conversa,você está mapeando o cenário antes de aprofundar.",
    sExamples: [
      '"Quantos vendedores tem no time?"',
      '"Qual CRM vocês usam hoje?"',
      '"Como é o processo de onboarding atual?"',
    ],
    sWarning:
      "Cuidado: a taxa de sucesso cai 11% para cada pergunta de situação além de 4. Pesquise antes da reunião.",
    // P
    pName: "Problema",
    pDesc:
      "Perguntas para descobrir dores, dificuldades e insatisfações. O objetivo é identificar necessidades implícitas,problemas que o cliente reconhece mas ainda não considera urgentes.",
    pExamples: [
      '"Qual o maior desafio do time hoje?"',
      '"Onde vocês perdem mais negócios?"',
      '"Está satisfeito com a taxa de conversão atual?"',
    ],
    pQuote:
      '"Se você não consegue resolver um problema para o seu cliente, então não há base para uma venda.",Neil Rackham',
    // I
    iName: "Implicação",
    iDesc:
      "As perguntas mais poderosas do framework. Fazem o cliente calcular o custo real de não agir. Transformam problemas pequenos em questões urgentes.",
    iResearchLabel: "Dado da pesquisa:",
    iResearchText: (
      <>
        Negócios com 4+ perguntas de implicação fecham{" "}
        <strong>34% mais rápido</strong>. Vendedores top fazem{" "}
        <strong>4x mais</strong> perguntas de implicação.
      </>
    ),
    iExamples: [
      '"Quanto custa cada vendedor que não bate meta?"',
      '"Como isso afeta a moral do time?"',
      '"Qual o impacto no faturamento?"',
    ],
    iCaption:
      "São as mais difíceis porque exigem conhecimento profundo do negócio do cliente e não podem ser improvisadas.",
    // N
    nName: "Necessidade de Solução",
    nDesc:
      "Perguntas que fazem o cliente articular o valor da solução com as próprias palavras. Em vez de você convencer, o cliente convence a si mesmo. Objeções caem 55% quando necessidades explícitas são desenvolvidas antes da oferta.",
    nExamples: [
      '"Se o ramp-up fosse 50% mais rápido, qual o impacto?"',
      '"Como seria ter visibilidade total das calls?"',
      '"O que mudaria se cada vendedor recebesse coaching diário?"',
    ],
    nQuote:
      '"Perguntas de Need-payoff focam a atenção em soluções, não em problemas. E fazem os clientes contarem a você os benefícios.",Neil Rackham',
    // Ramppy + SPIN
    ramppyBadge: "Ramppy + SPIN",
    ramppyTitle: "Como a Ramppy avalia com SPIN",
    ramppyP1:
      "Cada simulação e reunião real é transcrita e analisada pela IA da Ramppy. A IA identifica cada pergunta feita pelo vendedor, classifica no pilar SPIN correto e avalia qualidade, profundidade e timing.",
    ramppyP2:
      "O resultado é uma nota de 0 a 10 em cada pilar, com feedback específico sobre o que foi bem e o que pode melhorar. Tudo automático, sem viés humano, após cada interação.",
    ramppyBullets: [
      {
        label: "Avaliação objetiva",
        desc: "IA analisa sem viés humano, com critérios consistentes",
      },
      {
        label: "Feedback instantâneo",
        desc: "Resultado disponível segundos após cada call",
      },
      {
        label: "Evolução mensurável",
        desc: "Acompanhe a nota SPIN ao longo do tempo",
      },
    ],
    scoreHeaderTitle: "Análise SPIN",
    scoreHeaderSummary: "S: 8.0   P: 8.0   I: 7.0   N: 8.0",
    scoreLabelSituacao: "SITUAÇÃO",
    scoreLabelProblema: "PROBLEMA",
    scoreLabelImplicacao: "IMPLICAÇÃO",
    scoreLabelNecessidade: "NECESSIDADE",
    scoreAverageLabel: "MÉDIA GERAL SPIN",
    scorePillarSituacao: "Situação",
    scorePillarProblema: "Problema",
    scorePillarImplicacao: "Implicação",
    scorePillarNecessidade: "Necessidade",
    subScoresSituacao: [
      { label: "Adaptabilidade", score: 8 },
      { label: "Perguntas Abertas", score: 8 },
      { label: "Mapeamento de Cenário", score: 8 },
    ],
    subScoresProblema: [
      { label: "Profundidade", score: 7 },
      { label: "Empatia", score: 9 },
      { label: "Compreensão de Impacto", score: 8 },
      { label: "Identificação de Problemas", score: 8 },
      { label: "Exploração de Consequências", score: 8 },
    ],
    subScoresImplicacao: [
      { label: "Riscos Concretos", score: 6 },
      { label: "Consequências da Inação", score: 7 },
      { label: "Amplificação de Urgência", score: 7 },
      { label: "Urgência Não Agressiva", score: 8 },
    ],
    subScoresNecessidade: [
      { label: "Credibilidade", score: 8 },
      { label: "Personalização", score: 8 },
      { label: "Clareza de Benefícios", score: 8 },
      { label: "Clareza da Solução", score: 8 },
      { label: "Eficácia do CTA", score: 7 },
    ],
    // Impact numbers
    impactTitle: "Os números não mentem",
    impactStats: [
      {
        stat: "+34%",
        desc: "mais rápido para fechar negócios com 4+ perguntas de implicação",
      },
      {
        stat: "-55%",
        desc: "de objeções quando necessidades explícitas são desenvolvidas via SPIN",
      },
      {
        stat: "87%",
        desc: "dos negócios acima de US$100k usaram a sequência SPIN",
      },
      {
        stat: "4x",
        desc: "mais perguntas de implicação feitas por vendedores de alto desempenho",
      },
      {
        stat: "-23%",
        desc: "na taxa de sucesso ao usar fechamento agressivo em vendas complexas",
      },
      {
        stat: "50%",
        desc: "das Fortune 100 usam SPIN para treinar seus times de vendas",
      },
    ],
    sourcesLabel: "Fontes:",
  },
  en: {
    heroBadge: "Methodology",
    heroTitle: "SPIN Selling: the science behind every Ramppy evaluation",
    heroSubtitle:
      "Created by Neil Rackham after analyzing over 35,000 sales calls in 23 countries, SPIN is the framework Ramppy uses to evaluate every interaction your team has.",
    researchTitle: "The largest sales study ever conducted",
    researchSubtitle:
      "Neil Rackham and the Huthwaite Research Group led a 12-year study that forever changed the way we understand complex sales.",
    researchStats: [
      { number: "35,000+", label: "sales calls analyzed" },
      { number: "10,000", label: "salespeople studied" },
      { number: "23", label: "countries researched" },
      { number: "12", label: "years of research" },
    ],
    findingsTitle: "What the research uncovered",
    findings: [
      "Aggressive closing techniques are counterproductive in complex sales — they reduced success rates by 23%.",
      "Salespeople who avoided traditional closing techniques had higher customer satisfaction rates and more loyal customers.",
      "Success in complex sales depends, more than anything else, on how the investigation phase is conducted.",
      "Top performers ask 4x more implication questions than average salespeople.",
    ],
    pillarsBadge: "The 4 pillars",
    pillarsTitleS: "Situation",
    pillarsTitleP: "Problem",
    pillarsTitleI: "Implication",
    pillarsTitleN: "Need-Payoff",
    pillarExamples: "Example questions:",
    // S
    sName: "Situation",
    sDesc:
      "Questions to understand the customer's current context. They're the starting point of the conversation — you're mapping the landscape before going deeper.",
    sExamples: [
      '"How many salespeople are on your team?"',
      '"What CRM are you using today?"',
      '"What does your onboarding process look like?"',
    ],
    sWarning:
      "Watch out: success rates drop 11% for every situation question beyond 4. Do your homework before the meeting.",
    // P
    pName: "Problem",
    pDesc:
      "Questions to uncover pains, difficulties, and dissatisfactions. The goal is to surface implicit needs — problems the customer recognizes but doesn't yet see as urgent.",
    pExamples: [
      '"What\'s the biggest challenge your team faces today?"',
      '"Where do you lose the most deals?"',
      '"Are you satisfied with your current conversion rate?"',
    ],
    pQuote:
      '"If you can\'t solve a problem for your customer, then there\'s no basis for a sale." — Neil Rackham',
    // I
    iName: "Implication",
    iDesc:
      "The most powerful questions in the framework. They make the customer calculate the real cost of not taking action. They turn small problems into urgent priorities.",
    iResearchLabel: "Research insight:",
    iResearchText: (
      <>
        Deals with 4+ implication questions close{" "}
        <strong>34% faster</strong>. Top performers ask{" "}
        <strong>4x more</strong> implication questions.
      </>
    ),
    iExamples: [
      '"How much does every rep who misses quota cost you?"',
      '"How does that affect team morale?"',
      '"What\'s the impact on revenue?"',
    ],
    iCaption:
      "These are the hardest questions because they require deep knowledge of the customer's business and can't be improvised.",
    // N
    nName: "Need-Payoff",
    nDesc:
      "Questions that lead the customer to articulate the value of the solution in their own words. Instead of you convincing them, the customer convinces themselves. Objections drop 55% when explicit needs are developed before the offer.",
    nExamples: [
      '"If ramp-up were 50% faster, what would the impact be?"',
      '"What would it look like to have full visibility into every call?"',
      '"What would change if every rep received daily coaching?"',
    ],
    nQuote:
      '"Need-payoff questions focus attention on solutions rather than problems. And they get customers to tell you the benefits." — Neil Rackham',
    // Ramppy + SPIN
    ramppyBadge: "Ramppy + SPIN",
    ramppyTitle: "How Ramppy evaluates with SPIN",
    ramppyP1:
      "Every simulation and real meeting is transcribed and analyzed by Ramppy's AI. The AI identifies every question the rep asks, classifies it into the correct SPIN pillar, and evaluates quality, depth, and timing.",
    ramppyP2:
      "The output is a 0 to 10 score for each pillar, with specific feedback on what went well and what can improve. Fully automated, bias-free, after every interaction.",
    ramppyBullets: [
      {
        label: "Objective evaluation",
        desc: "AI analyzes without human bias, using consistent criteria",
      },
      {
        label: "Instant feedback",
        desc: "Results available seconds after every call",
      },
      {
        label: "Measurable progress",
        desc: "Track your SPIN score over time",
      },
    ],
    scoreHeaderTitle: "SPIN Analysis",
    scoreHeaderSummary: "S: 8.0   P: 8.0   I: 7.0   N: 8.0",
    scoreLabelSituacao: "SITUATION",
    scoreLabelProblema: "PROBLEM",
    scoreLabelImplicacao: "IMPLICATION",
    scoreLabelNecessidade: "NEED-PAYOFF",
    scoreAverageLabel: "OVERALL SPIN SCORE",
    scorePillarSituacao: "Situation",
    scorePillarProblema: "Problem",
    scorePillarImplicacao: "Implication",
    scorePillarNecessidade: "Need-Payoff",
    subScoresSituacao: [
      { label: "Adaptability", score: 8 },
      { label: "Open Questions", score: 8 },
      { label: "Context Mapping", score: 8 },
    ],
    subScoresProblema: [
      { label: "Depth", score: 7 },
      { label: "Empathy", score: 9 },
      { label: "Impact Understanding", score: 8 },
      { label: "Problem Identification", score: 8 },
      { label: "Consequence Exploration", score: 8 },
    ],
    subScoresImplicacao: [
      { label: "Concrete Risks", score: 6 },
      { label: "Cost of Inaction", score: 7 },
      { label: "Urgency Amplification", score: 7 },
      { label: "Non-Aggressive Urgency", score: 8 },
    ],
    subScoresNecessidade: [
      { label: "Credibility", score: 8 },
      { label: "Personalization", score: 8 },
      { label: "Benefit Clarity", score: 8 },
      { label: "Solution Clarity", score: 8 },
      { label: "CTA Effectiveness", score: 7 },
    ],
    // Impact numbers
    impactTitle: "The numbers don't lie",
    impactStats: [
      {
        stat: "+34%",
        desc: "faster deal closing with 4+ implication questions",
      },
      {
        stat: "-55%",
        desc: "fewer objections when explicit needs are developed via SPIN",
      },
      {
        stat: "87%",
        desc: "of deals above US$100k used the SPIN sequence",
      },
      {
        stat: "4x",
        desc: "more implication questions asked by top performers",
      },
      {
        stat: "-23%",
        desc: "drop in success rate when using aggressive closing in complex sales",
      },
      {
        stat: "50%",
        desc: "of Fortune 100 companies use SPIN to train their sales teams",
      },
    ],
    sourcesLabel: "Sources:",
  },
  es: {
    heroBadge: "Metodología",
    heroTitle: "SPIN Selling: la ciencia detrás de cada evaluación de Ramppy",
    heroSubtitle:
      "Creada por Neil Rackham tras analizar más de 35.000 llamadas de ventas en 23 países, la metodología SPIN es el marco que Ramppy utiliza para evaluar cada interacción de tu equipo.",
    researchTitle: "La mayor investigación sobre ventas jamás realizada",
    researchSubtitle:
      "Neil Rackham y el Huthwaite Research Group dirigieron un estudio de 12 años que cambió para siempre la forma en que entendemos las ventas complejas.",
    researchStats: [
      { number: "35.000+", label: "llamadas de ventas analizadas" },
      { number: "10.000", label: "vendedores estudiados" },
      { number: "23", label: "países investigados" },
      { number: "12", label: "años de investigación" },
    ],
    findingsTitle: "Lo que reveló la investigación",
    findings: [
      "Las técnicas de cierre agresivo son contraproducentes en ventas complejas: redujeron el éxito en un 23%.",
      "Los vendedores que no usaban técnicas tradicionales de cierre obtenían tasas de satisfacción más altas y clientes más fieles.",
      "El éxito en ventas complejas depende, más que de cualquier otra cosa, de cómo se conduce la fase de investigación.",
      "Los vendedores de alto desempeño hacen 4x más preguntas de implicación que los vendedores promedio.",
    ],
    pillarsBadge: "Los 4 pilares",
    pillarsTitleS: "Situación",
    pillarsTitleP: "Problema",
    pillarsTitleI: "Implicación",
    pillarsTitleN: "Necesidad de Solución",
    pillarExamples: "Ejemplos de preguntas:",
    // S
    sName: "Situación",
    sDesc:
      "Preguntas para entender el contexto actual del cliente. Son el punto de partida de la conversación: estás mapeando el escenario antes de profundizar.",
    sExamples: [
      '"¿Cuántos vendedores tienes en el equipo?"',
      '"¿Qué CRM usan hoy?"',
      '"¿Cómo es el proceso de onboarding actual?"',
    ],
    sWarning:
      "Cuidado: la tasa de éxito cae 11% por cada pregunta de situación más allá de 4. Investiga antes de la reunión.",
    // P
    pName: "Problema",
    pDesc:
      "Preguntas para descubrir dolores, dificultades e insatisfacciones. El objetivo es identificar necesidades implícitas: problemas que el cliente reconoce pero aún no considera urgentes.",
    pExamples: [
      '"¿Cuál es el mayor desafío del equipo hoy?"',
      '"¿Dónde pierden más negocios?"',
      '"¿Están satisfechos con la tasa de conversión actual?"',
    ],
    pQuote:
      '"Si no puedes resolver un problema para tu cliente, entonces no hay base para una venta." — Neil Rackham',
    // I
    iName: "Implicación",
    iDesc:
      "Las preguntas más poderosas del marco. Hacen que el cliente calcule el costo real de no actuar. Transforman problemas pequeños en cuestiones urgentes.",
    iResearchLabel: "Dato de la investigación:",
    iResearchText: (
      <>
        Los negocios con 4+ preguntas de implicación cierran{" "}
        <strong>34% más rápido</strong>. Los mejores vendedores hacen{" "}
        <strong>4x más</strong> preguntas de implicación.
      </>
    ),
    iExamples: [
      '"¿Cuánto cuesta cada vendedor que no alcanza la meta?"',
      '"¿Cómo afecta esto a la moral del equipo?"',
      '"¿Cuál es el impacto en la facturación?"',
    ],
    iCaption:
      "Son las más difíciles porque exigen un conocimiento profundo del negocio del cliente y no pueden improvisarse.",
    // N
    nName: "Necesidad de Solución",
    nDesc:
      "Preguntas que hacen que el cliente articule el valor de la solución con sus propias palabras. En lugar de convencerlo tú, el cliente se convence a sí mismo. Las objeciones caen un 55% cuando las necesidades explícitas se desarrollan antes de la oferta.",
    nExamples: [
      '"Si el ramp-up fuera 50% más rápido, ¿cuál sería el impacto?"',
      '"¿Cómo sería tener visibilidad total de las llamadas?"',
      '"¿Qué cambiaría si cada vendedor recibiera coaching diario?"',
    ],
    nQuote:
      '"Las preguntas de Need-payoff enfocan la atención en soluciones, no en problemas. Y hacen que los clientes te cuenten los beneficios." — Neil Rackham',
    // Ramppy + SPIN
    ramppyBadge: "Ramppy + SPIN",
    ramppyTitle: "Cómo Ramppy evalúa con SPIN",
    ramppyP1:
      "Cada simulación y reunión real es transcrita y analizada por la IA de Ramppy. La IA identifica cada pregunta hecha por el vendedor, la clasifica en el pilar SPIN correcto y evalúa calidad, profundidad y timing.",
    ramppyP2:
      "El resultado es una nota de 0 a 10 en cada pilar, con feedback específico sobre lo que salió bien y lo que se puede mejorar. Todo automático, sin sesgo humano, después de cada interacción.",
    ramppyBullets: [
      {
        label: "Evaluación objetiva",
        desc: "La IA analiza sin sesgo humano, con criterios consistentes",
      },
      {
        label: "Feedback instantáneo",
        desc: "Resultado disponible segundos después de cada llamada",
      },
      {
        label: "Evolución medible",
        desc: "Sigue tu nota SPIN a lo largo del tiempo",
      },
    ],
    scoreHeaderTitle: "Análisis SPIN",
    scoreHeaderSummary: "S: 8.0   P: 8.0   I: 7.0   N: 8.0",
    scoreLabelSituacao: "SITUACIÓN",
    scoreLabelProblema: "PROBLEMA",
    scoreLabelImplicacao: "IMPLICACIÓN",
    scoreLabelNecessidade: "NECESIDAD",
    scoreAverageLabel: "PROMEDIO GENERAL SPIN",
    scorePillarSituacao: "Situación",
    scorePillarProblema: "Problema",
    scorePillarImplicacao: "Implicación",
    scorePillarNecessidade: "Necesidad de Solución",
    subScoresSituacao: [
      { label: "Adaptabilidad", score: 8 },
      { label: "Preguntas abiertas", score: 8 },
      { label: "Mapeo de escenario", score: 8 },
    ],
    subScoresProblema: [
      { label: "Profundidad", score: 7 },
      { label: "Empatía", score: 9 },
      { label: "Comprensión de impacto", score: 8 },
      { label: "Identificación de problemas", score: 8 },
      { label: "Exploración de consecuencias", score: 8 },
    ],
    subScoresImplicacao: [
      { label: "Riesgos concretos", score: 6 },
      { label: "Consecuencias de la inacción", score: 7 },
      { label: "Amplificación de urgencia", score: 7 },
      { label: "Urgencia no agresiva", score: 8 },
    ],
    subScoresNecessidade: [
      { label: "Credibilidad", score: 8 },
      { label: "Personalización", score: 8 },
      { label: "Claridad de beneficios", score: 8 },
      { label: "Claridad de la solución", score: 8 },
      { label: "Eficacia del CTA", score: 7 },
    ],
    // Impact numbers
    impactTitle: "Los números no mienten",
    impactStats: [
      {
        stat: "+34%",
        desc: "más rápido para cerrar negocios con 4+ preguntas de implicación",
      },
      {
        stat: "-55%",
        desc: "de objeciones cuando se desarrollan necesidades explícitas vía SPIN",
      },
      {
        stat: "87%",
        desc: "de los negocios por encima de US$100k usaron la secuencia SPIN",
      },
      {
        stat: "4x",
        desc: "más preguntas de implicación hechas por vendedores de alto desempeño",
      },
      {
        stat: "-23%",
        desc: "en la tasa de éxito al usar cierre agresivo en ventas complejas",
      },
      {
        stat: "50%",
        desc: "de las Fortune 100 usan SPIN para entrenar a sus equipos de ventas",
      },
    ],
    sourcesLabel: "Fuentes:",
  },
};

export default function MetodologiaSpinContent() {
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

      {/* A pesquisa */}
      <SectionWrapper dark>
        <div className="py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[40px] font-semibold leading-[115%] tracking-tight text-white">
              {t.researchTitle}
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/60 leading-relaxed">
              {t.researchSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.researchStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-[var(--font-fustat)] text-4xl md:text-5xl font-bold text-white tracking-tight">
                  {stat.number}
                </p>
                <p className="text-sm text-white/50 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* O que descobriram */}
      <SectionWrapper>
        <div className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[40px] font-semibold leading-[115%] tracking-tight text-teal-dark mb-8">
              {t.findingsTitle}
            </h2>
            <div className="space-y-6">
              {t.findings.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-green-surface flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2D8C3C" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-lg text-text-secondary leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Os 4 Pilares */}
      <SectionWrapper>
        <div className="py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 bg-green-surface text-primary-green text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              {t.pillarsBadge}
            </span>
            <h2 className="font-[var(--font-fustat)] text-[32px] md:text-[48px] font-semibold leading-[110%] tracking-[-0.04em] text-teal-dark">
              <span className="text-blue-500">{t.pillarsTitleS}</span>,{" "}
              <span className="text-amber-500">{t.pillarsTitleP}</span>,{" "}
              <span className="text-red-500">{t.pillarsTitleI}</span>
              {" "}
              {locale === "pt" ? "e" : locale === "es" ? "y" : "&"}{" "}
              <span className="text-emerald-500">{t.pillarsTitleN}</span>
            </h2>
          </div>

          <div className="space-y-8">
            {/* S */}
            <div className="bg-white border border-border-light rounded-2xl p-8 md:p-10">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <div className="lg:w-20 flex-shrink-0">
                  <span className="font-[var(--font-fustat)] text-[64px] md:text-[80px] font-bold leading-none text-blue-500/20">S</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-[var(--font-fustat)] text-2xl md:text-3xl font-semibold text-teal-dark mb-3">
                    {t.sName}
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed mb-6">
                    {t.sDesc}
                  </p>
                  <div className="bg-blue-50 rounded-xl p-5 mb-5">
                    <p className="text-sm font-semibold text-blue-800 mb-3">{t.pillarExamples}</p>
                    <ul className="space-y-2 text-sm text-blue-700">
                      {t.sExamples.map((ex, i) => (
                        <li key={i}>• {ex}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-amber-700 bg-amber-50 rounded-xl p-4">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-shrink-0">
                      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                      <line x1="12" y1="9" x2="12" y2="13" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                    <span>{t.sWarning}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* P */}
            <div className="bg-white border border-border-light rounded-2xl p-8 md:p-10">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <div className="lg:w-20 flex-shrink-0">
                  <span className="font-[var(--font-fustat)] text-[64px] md:text-[80px] font-bold leading-none text-amber-500/20">P</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-[var(--font-fustat)] text-2xl md:text-3xl font-semibold text-teal-dark mb-3">
                    {t.pName}
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed mb-6">
                    {t.pDesc}
                  </p>
                  <div className="bg-amber-50 rounded-xl p-5 mb-5">
                    <p className="text-sm font-semibold text-amber-800 mb-3">{t.pillarExamples}</p>
                    <ul className="space-y-2 text-sm text-amber-700">
                      {t.pExamples.map((ex, i) => (
                        <li key={i}>• {ex}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-sm text-text-secondary italic">
                    {t.pQuote}
                  </p>
                </div>
              </div>
            </div>

            {/* I */}
            <div className="bg-white border border-border-light rounded-2xl p-8 md:p-10">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <div className="lg:w-20 flex-shrink-0">
                  <span className="font-[var(--font-fustat)] text-[64px] md:text-[80px] font-bold leading-none text-red-500/20">I</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-[var(--font-fustat)] text-2xl md:text-3xl font-semibold text-teal-dark mb-3">
                    {t.iName}
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed mb-4">
                    {t.iDesc}
                  </p>
                  <div className="bg-primary-green/5 border border-primary-green/10 rounded-xl p-4 mb-6">
                    <p className="text-sm font-semibold text-primary-green mb-1">{t.iResearchLabel}</p>
                    <p className="text-sm text-teal-dark">{t.iResearchText}</p>
                  </div>
                  <div className="bg-red-50 rounded-xl p-5 mb-5">
                    <p className="text-sm font-semibold text-red-800 mb-3">{t.pillarExamples}</p>
                    <ul className="space-y-2 text-sm text-red-700">
                      {t.iExamples.map((ex, i) => (
                        <li key={i}>• {ex}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-sm text-text-secondary italic">
                    {t.iCaption}
                  </p>
                </div>
              </div>
            </div>

            {/* N */}
            <div className="bg-white border border-border-light rounded-2xl p-8 md:p-10">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <div className="lg:w-20 flex-shrink-0">
                  <span className="font-[var(--font-fustat)] text-[64px] md:text-[80px] font-bold leading-none text-emerald-500/20">N</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-[var(--font-fustat)] text-2xl md:text-3xl font-semibold text-teal-dark mb-3">
                    {t.nName}
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed mb-6">
                    {t.nDesc}
                  </p>
                  <div className="bg-emerald-50 rounded-xl p-5 mb-5">
                    <p className="text-sm font-semibold text-emerald-800 mb-3">{t.pillarExamples}</p>
                    <ul className="space-y-2 text-sm text-emerald-700">
                      {t.nExamples.map((ex, i) => (
                        <li key={i}>• {ex}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-sm text-text-secondary italic">
                    {t.nQuote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Como a Ramppy usa SPIN */}
      <SectionWrapper>
        <div className="py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            <div className="flex-1 max-w-xl">
              <span className="text-xs font-bold text-primary-green bg-green-surface px-3 py-1.5 rounded-full uppercase tracking-wider">
                {t.ramppyBadge}
              </span>
              <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[36px] font-semibold text-teal-dark leading-[115%] tracking-tight mt-5 mb-5">
                {t.ramppyTitle}
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                {t.ramppyP1}
              </p>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                {t.ramppyP2}
              </p>
              <div className="space-y-4">
                {t.ramppyBullets.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-green flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-teal-dark">{item.label}</p>
                      <p className="text-sm text-text-secondary">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Score visual */}
            <div className="flex-1 w-full max-w-lg">
              <div className="bg-white border border-border-light rounded-2xl overflow-hidden" style={{ boxShadow: "0 25px 80px -12px rgba(0, 0, 0, 0.15), 0 12px 35px -8px rgba(0, 0, 0, 0.1)" }}>
                {/* Header */}
                <div className="px-6 py-4 border-b border-border-light flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-surface flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2D8C3C" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <div>
                    <p className="font-[var(--font-fustat)] text-sm font-semibold text-teal-dark">{t.scoreHeaderTitle}</p>
                    <p className="text-xs text-text-secondary">{t.scoreHeaderSummary}</p>
                  </div>
                </div>

                {/* Notas principais */}
                <div className="grid grid-cols-4 gap-2 px-4 py-4">
                  {[
                    { label: t.scoreLabelSituacao, score: "8.0", color: "bg-green-100 text-green-700" },
                    { label: t.scoreLabelProblema, score: "8.0", color: "bg-green-100 text-green-700" },
                    { label: t.scoreLabelImplicacao, score: "7.0", color: "bg-amber-100 text-amber-700" },
                    { label: t.scoreLabelNecessidade, score: "8.0", color: "bg-green-100 text-green-700" },
                  ].map((item) => (
                    <div key={item.label} className={`rounded-xl p-3 text-center ${item.color}`}>
                      <p className="font-[var(--font-fustat)] text-2xl font-bold">{item.score}</p>
                      <p className="text-[9px] font-bold uppercase tracking-wider mt-1">{item.label}</p>
                    </div>
                  ))}
                </div>

                {/* Média geral */}
                <div className="mx-4 mb-4 bg-green-50 rounded-xl p-3 text-center">
                  <p className="font-[var(--font-fustat)] text-3xl font-bold text-green-700">7.8</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-green-600 mt-1">{t.scoreAverageLabel}</p>
                </div>

                {/* Detalhes dos pilares */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 pb-4">
                  {/* Situação */}
                  <div className="border border-border-light rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">S</span>
                      <div>
                        <p className="text-sm font-semibold text-teal-dark">{t.scorePillarSituacao}</p>
                        <p className="text-xs text-text-secondary">8.0/10</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {t.subScoresSituacao.map((sub) => (
                        <div key={sub.label}>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-text-secondary">{sub.label}</span>
                            <span className="font-semibold text-teal-dark">{sub.score}/10</span>
                          </div>
                          <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 rounded-full" style={{ width: `${sub.score * 10}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Problema */}
                  <div className="border border-border-light rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-7 h-7 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-bold">P</span>
                      <div>
                        <p className="text-sm font-semibold text-teal-dark">{t.scorePillarProblema}</p>
                        <p className="text-xs text-text-secondary">8.0/10</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {t.subScoresProblema.map((sub) => (
                        <div key={sub.label}>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-text-secondary">{sub.label}</span>
                            <span className="font-semibold text-teal-dark">{sub.score}/10</span>
                          </div>
                          <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className={`h-full rounded-full ${sub.score >= 8 ? "bg-green-500" : sub.score >= 6 ? "bg-amber-500" : "bg-red-500"}`} style={{ width: `${sub.score * 10}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Implicação */}
                  <div className="border border-border-light rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-7 h-7 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xs font-bold">I</span>
                      <div>
                        <p className="text-sm font-semibold text-teal-dark">{t.scorePillarImplicacao}</p>
                        <p className="text-xs text-text-secondary">7.0/10</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {t.subScoresImplicacao.map((sub) => (
                        <div key={sub.label}>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-text-secondary">{sub.label}</span>
                            <span className="font-semibold text-teal-dark">{sub.score}/10</span>
                          </div>
                          <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className={`h-full rounded-full ${sub.score >= 8 ? "bg-green-500" : sub.score >= 6 ? "bg-amber-500" : "bg-red-500"}`} style={{ width: `${sub.score * 10}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Necessidade */}
                  <div className="border border-border-light rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">N</span>
                      <div>
                        <p className="text-sm font-semibold text-teal-dark">{t.scorePillarNecessidade}</p>
                        <p className="text-xs text-text-secondary">8.0/10</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {t.subScoresNecessidade.map((sub) => (
                        <div key={sub.label}>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-text-secondary">{sub.label}</span>
                            <span className="font-semibold text-teal-dark">{sub.score}/10</span>
                          </div>
                          <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className={`h-full rounded-full ${sub.score >= 8 ? "bg-green-500" : sub.score >= 6 ? "bg-amber-500" : "bg-red-500"}`} style={{ width: `${sub.score * 10}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Dados de impacto */}
      <SectionWrapper dark>
        <div className="py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[40px] font-semibold leading-[115%] tracking-tight text-white">
              {t.impactTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.impactStats.map((item) => (
              <div key={item.stat} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 text-center">
                <p className="font-[var(--font-fustat)] text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
                  {item.stat}
                </p>
                <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center space-y-2">
            <p className="text-xs text-white/40 mb-3">{t.sourcesLabel}</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs">
              <a href="https://www.huthwaiteinternational.com/spin-methodology" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-primary-green transition-colors underline underline-offset-2">Huthwaite International,SPIN Methodology</a>
              <a href="https://www.huthwaiteinternational.com/fifty-years-of-spin" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-primary-green transition-colors underline underline-offset-2">Huthwaite,50 Years of SPIN</a>
              <a href="https://blog.hubspot.com/sales/spin-selling-the-ultimate-guide" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-primary-green transition-colors underline underline-offset-2">HubSpot,SPIN Selling Guide</a>
              <a href="https://www.highspot.com/blog/spin-selling/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-primary-green transition-colors underline underline-offset-2">Highspot,SPIN Selling Explained</a>
              <a href="https://www.zendesk.com/blog/spin-selling/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-primary-green transition-colors underline underline-offset-2">Zendesk,SPIN Selling</a>
              <a href="https://www.demandfarm.com/blog/spin-selling/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-primary-green transition-colors underline underline-offset-2">DemandFarm,SPIN Selling</a>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <CTA />
    </>
  );
}
