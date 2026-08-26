import type { Locale } from "@/i18n/LocaleContext";

/** Notas por categoria de uma simulação (fiel ao reel). */
export const CATEGORY_SCORES = [6.8, 7.2, 7.1, 6.4, 8.1] as const;

/** Candidatos do ranking, já ordenados por nota. */
export const CANDIDATES = [
  { name: "Júlia Andrade", score: 8.4, day: 25, month: 8, time: "14:32" },
  { name: "Marina Costa", score: 7.6, day: 25, month: 8, time: "11:07" },
  { name: "Rafael Lima", score: 6.5, day: 24, month: 8, time: "17:45" },
  { name: "Bruno Teixeira", score: 6.1, day: 24, month: 8, time: "09:20" },
] as const;

export const OVERALL_SCORE = 7.1;
export const SIMULATION_COUNT = 12;
export const PUBLIC_LINK = "ramppy.site/s/vaga-sdr";

export function formatCandidateDate(
  locale: Locale,
  c: { day: number; month: number; time: string },
): string {
  const d = String(c.day).padStart(2, "0");
  const m = String(c.month).padStart(2, "0");
  const date = locale === "en" ? `${m}/${d}/2026` : `${d}/${m}/2026`;
  return `${date} ${c.time}`;
}

type Copy = {
  /** Rótulos que aparecem dentro dos mockups de produto. */
  ui: {
    eyebrow: string;
    role: string;
    roleSub: string;
    link: string;
    copyHint: string;
    simulations: string;
    simulationsHint: string;
    status: string;
    active: string;
    statusHint: string;
    publicTitle: string;
    publicSub: string;
    formTitle: string;
    formSub: string;
    nameLabel: string;
    namePlaceholder: string;
    startButton: string;
    micNote: string;
    speaking: string;
    scoreTitle: string;
    scoreSub: string;
    categories: readonly [string, string, string, string, string];
    radarLabels: readonly [string, string, string, string, string];
    radarCaption: string;
    rankTitle: string;
    rankSub: string;
    dialogue: readonly { who: string; text: string }[];
  };
  /** Copy da seção em si. */
  badge: string;
  titleA: string;
  titleHighlight: string;
  titleB: string;
  subtitle: string;
  steps: readonly { title: string; body: string }[];
  statementA: string;
  statementB: string;
  statementBody: string;
  cta: string;
  whatsapp: string;
};

export const CONTRATACAO_COPY: Record<Locale, Copy> = {
  pt: {
    ui: {
      eyebrow: "Simulação de Contratação",
      role: "Vaga SDR",
      roleSub: "Configure e acompanhe as simulações deste grupo",
      link: "Link",
      copyHint: "Clique para copiar",
      simulations: "Simulações",
      simulationsHint: "simulações realizadas",
      status: "Status",
      active: "Ativo",
      statusHint: "Clique para desativar",
      publicTitle: "Simulação de Vendas",
      publicSub: "Leia o cenário, digite seu nome e inicie a conversa.",
      formTitle: "Pronto para começar?",
      formSub: "Preencha seu nome e inicie a simulação",
      nameLabel: "Nome",
      namePlaceholder: "Digite seu nome",
      startButton: "Iniciar Simulação",
      micNote: "Autorize o microfone quando o navegador pedir.",
      speaking: "Falando",
      scoreTitle: "Avaliação do candidato",
      scoreSub: "Júlia Andrade · 5 categorias · 13 critérios",
      categories: [
        "Abertura e Condução",
        "Qualificação",
        "Apresentação da Solução",
        "Objeções",
        "Encerramento",
      ],
      radarLabels: ["Abertura", "Qualificação", "Solução", "Objeções", "Encerramento"],
      radarCaption: "MÉDIA GERAL",
      rankTitle: "Candidatos",
      rankSub: "Vaga SDR · 12 simulações · ordenado por nota",
      dialogue: [
        { who: "Clarice", text: "Sinceramente? Achei o preço bem salgado." },
        { who: "Júlia", text: "Entendo. E quanto custa hoje deixar como está?" },
        { who: "Clarice", text: "Hm… nunca parei pra calcular. Me mostra isso." },
      ],
    },
    badge: "Simulação de contratação",
    titleA: "Veja o candidato ",
    titleHighlight: "vender",
    titleB: " antes de contratar.",
    subtitle:
      "O gestor manda um link, o candidato vende de verdade para um cliente sintético e a nota chega antes da primeira entrevista.",
    steps: [
      {
        title: "O link da vaga",
        body: "O gestor cria o grupo da vaga e gera um link. O candidato abre e começa, sem cadastro e sem instalar nada.",
      },
      {
        title: "A venda de verdade",
        body: "O candidato conduz uma conversa por voz com um cliente sintético, com a persona e as objeções da sua operação.",
      },
      {
        title: "A nota por etapa",
        body: "Abertura, qualificação, solução, objeções e encerramento. Cada etapa vira nota — a mesma régua para todo candidato.",
      },
      {
        title: "O ranking",
        body: "Você compara quem vende melhor antes de marcar a primeira entrevista.",
      },
    ],
    statementA: "Contrate com dados.",
    statementB: "Não com feeling.",
    statementBody:
      "Currículo e entrevista medem quem fala bonito sobre vender. A simulação mede quem vende.",
    cta: "Quero simular meus candidatos",
    whatsapp:
      "Olá, quero usar a Simulação de Contratação da Ramppy para avaliar candidatos a vendedor.",
  },
  en: {
    ui: {
      eyebrow: "Hiring Simulation",
      role: "SDR role",
      roleSub: "Set up and track the simulations for this role",
      link: "Link",
      copyHint: "Click to copy",
      simulations: "Simulations",
      simulationsHint: "simulations completed",
      status: "Status",
      active: "Active",
      statusHint: "Click to deactivate",
      publicTitle: "Sales Simulation",
      publicSub: "Read the scenario, enter your name and start the conversation.",
      formTitle: "Ready to start?",
      formSub: "Enter your name and start the simulation",
      nameLabel: "Name",
      namePlaceholder: "Enter your name",
      startButton: "Start Simulation",
      micNote: "Allow the microphone when your browser asks.",
      speaking: "Speaking",
      scoreTitle: "Candidate evaluation",
      scoreSub: "Júlia Andrade · 5 categories · 13 criteria",
      categories: [
        "Opening and Control",
        "Qualification",
        "Solution Pitch",
        "Objections",
        "Closing",
      ],
      radarLabels: ["Opening", "Qualification", "Solution", "Objections", "Closing"],
      radarCaption: "OVERALL SCORE",
      rankTitle: "Candidates",
      rankSub: "SDR role · 12 simulations · sorted by score",
      dialogue: [
        { who: "Clarice", text: "Honestly? The price feels really steep." },
        { who: "Júlia", text: "I hear you. What does leaving it as is cost you today?" },
        { who: "Clarice", text: "Hm… I never stopped to do that math. Show me." },
      ],
    },
    badge: "Hiring simulation",
    titleA: "Watch candidates ",
    titleHighlight: "sell",
    titleB: " before you hire them.",
    subtitle:
      "The manager sends a link, the candidate actually sells to a synthetic customer, and the score lands before the first interview.",
    steps: [
      {
        title: "The role link",
        body: "The manager creates the role and generates a link. Candidates open it and start — no signup, nothing to install.",
      },
      {
        title: "A real sale",
        body: "The candidate runs a voice conversation with a synthetic customer, using your persona and your objections.",
      },
      {
        title: "A score per stage",
        body: "Opening, qualification, solution, objections and closing. Every stage becomes a score — the same yardstick for everyone.",
      },
      {
        title: "The ranking",
        body: "You compare who sells best before booking a single interview.",
      },
    ],
    statementA: "Hire on data.",
    statementB: "Not on gut feel.",
    statementBody:
      "Résumés and interviews measure who talks well about selling. The simulation measures who sells.",
    cta: "Simulate my candidates",
    whatsapp:
      "Hi, I'd like to use Ramppy's Hiring Simulation to evaluate sales candidates.",
  },
  es: {
    ui: {
      eyebrow: "Simulación de Contratación",
      role: "Vacante SDR",
      roleSub: "Configura y acompaña las simulaciones de este grupo",
      link: "Enlace",
      copyHint: "Haz clic para copiar",
      simulations: "Simulaciones",
      simulationsHint: "simulaciones realizadas",
      status: "Estado",
      active: "Activo",
      statusHint: "Haz clic para desactivar",
      publicTitle: "Simulación de Ventas",
      publicSub: "Lee el escenario, escribe tu nombre e inicia la conversación.",
      formTitle: "¿Listo para empezar?",
      formSub: "Escribe tu nombre e inicia la simulación",
      nameLabel: "Nombre",
      namePlaceholder: "Escribe tu nombre",
      startButton: "Iniciar Simulación",
      micNote: "Autoriza el micrófono cuando el navegador lo pida.",
      speaking: "Hablando",
      scoreTitle: "Evaluación del candidato",
      scoreSub: "Júlia Andrade · 5 categorías · 13 criterios",
      categories: [
        "Apertura y Conducción",
        "Calificación",
        "Presentación de la Solución",
        "Objeciones",
        "Cierre",
      ],
      radarLabels: ["Apertura", "Calificación", "Solución", "Objeciones", "Cierre"],
      radarCaption: "NOTA GENERAL",
      rankTitle: "Candidatos",
      rankSub: "Vacante SDR · 12 simulaciones · ordenado por nota",
      dialogue: [
        { who: "Clarice", text: "¿Sinceramente? El precio me parece muy alto." },
        { who: "Júlia", text: "Te entiendo. ¿Y cuánto te cuesta hoy dejarlo así?" },
        { who: "Clarice", text: "Hm… nunca me puse a calcularlo. Muéstramelo." },
      ],
    },
    badge: "Simulación de contratación",
    titleA: "Mira al candidato ",
    titleHighlight: "vender",
    titleB: " antes de contratarlo.",
    subtitle:
      "El gestor manda un enlace, el candidato vende de verdad a un cliente sintético y la nota llega antes de la primera entrevista.",
    steps: [
      {
        title: "El enlace de la vacante",
        body: "El gestor crea el grupo de la vacante y genera un enlace. El candidato lo abre y empieza, sin registro y sin instalar nada.",
      },
      {
        title: "La venta de verdad",
        body: "El candidato conduce una conversación por voz con un cliente sintético, con la persona y las objeciones de tu operación.",
      },
      {
        title: "La nota por etapa",
        body: "Apertura, calificación, solución, objeciones y cierre. Cada etapa se convierte en nota — la misma vara para todos.",
      },
      {
        title: "El ranking",
        body: "Comparas quién vende mejor antes de agendar la primera entrevista.",
      },
    ],
    statementA: "Contrata con datos.",
    statementB: "No con corazonadas.",
    statementBody:
      "El currículum y la entrevista miden a quien habla bonito sobre vender. La simulación mide a quien vende.",
    cta: "Quiero simular a mis candidatos",
    whatsapp:
      "Hola, quiero usar la Simulación de Contratación de Ramppy para evaluar candidatos a vendedor.",
  },
};
