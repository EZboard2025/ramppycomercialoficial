export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  title: string;
  items: FaqItem[];
};

export type AjudaLocaleStrings = {
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  faqHeading: string;
  supportTitle: string;
  supportSubtitle: string;
  supportCta: string;
  whatsappHref: string;
  sections: FaqCategory[];
};

export const ajudaStrings: { pt: AjudaLocaleStrings; en: AjudaLocaleStrings; es: AjudaLocaleStrings } = {
  pt: {
    heroBadge: "Ajuda",
    heroTitle: "Central de Ajuda",
    heroSubtitle: "Encontre respostas para as dúvidas mais comuns sobre a Ramppy.",
    faqHeading: "Perguntas frequentes",
    supportTitle: "Não encontrou o que procura?",
    supportSubtitle: "Nossa equipe de suporte está pronta para ajudar você.",
    supportCta: "Falar com suporte",
    whatsappHref:
      "https://wa.me/5531995525157?text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20com%20a%20Ramppy",
    sections: [
      {
        title: "Primeiros passos",
        items: [
          {
            question: "Preciso instalar algum software?",
            answer:
              "Não. A Ramppy funciona no navegador. Os candidatos e os vendedores entram por link, sem instalar nada e sem criar cadastro.",
          },
          {
            question: "Quem precisa ter conta?",
            answer:
              "Só o gestor. Os candidatos recebem o link da simulação e os vendedores recebem o convite da jornada por e-mail; todos entram pelo link.",
          },
          {
            question: "Quanto tempo leva para configurar?",
            answer:
              "Em uma única reunião de implementação a nossa equipe configura a Ramppy com você. Nas Configurações você conta como é o seu negócio (dados da empresa, objetivos, objeções e personas), uma pergunta por vez; se não souber alguma resposta, a IA escreve para você revisar.",
          },
        ],
      },
      {
        title: "Contratação",
        items: [
          {
            question: "Como funciona a simulação de contratação?",
            answer:
              "Você cria um grupo para a vaga, escolhe o cliente sintético e o objetivo da conversa, e manda o link para os candidatos. Cada candidato faz uma reunião de vendas inteira, por voz, e você recebe a nota antes da entrevista.",
          },
          {
            question: "O candidato precisa se cadastrar?",
            answer:
              "Não. Ele abre o link, informa o nome e começa a simulação no navegador. Só precisa autorizar o microfone.",
          },
          {
            question: "Como comparo os candidatos?",
            answer:
              "Todos os candidatos do grupo aparecem numa lista ordenada pela nota, na mesma régua de avaliação. Em cada um você vê a nota por categoria, o porquê e o que ele poderia fazer diferente.",
          },
        ],
      },
      {
        title: "Simulações",
        items: [
          {
            question: "Como funciona a simulação com IA?",
            answer:
              "É uma reunião de vendas inteira, por voz, com um cliente sintético criado a partir da sua operação. Ele conversa em tempo real, reage ao que é dito e levanta as objeções que o seu time ouve de verdade.",
          },
          {
            question: "Posso personalizar os cenários?",
            answer:
              "Sim. Você define as personas (cargo, empresa, temperamento, dores), as objeções da sua operação e o objetivo de cada conversa, como marcar uma demonstração ou fechar a venda.",
          },
          {
            question: "Como é calculada a nota da call?",
            answer:
              "A IA avalia a conversa inteira em 5 categorias: abertura, qualificação, solução, objeções e encerramento, com 13 critérios no total. Cada categoria recebe uma nota de 0 a 10, com o porquê e o que fazer diferente na próxima.",
          },
        ],
      },
      {
        title: "Treinamento",
        items: [
          {
            question: "O que é uma jornada?",
            answer:
              "É uma trilha de treinamento em fases. Cada fase é uma reunião completa com um cliente sintético, e você define a nota mínima em cada categoria para o vendedor avançar.",
          },
          {
            question: "Como o time entra na jornada?",
            answer:
              "Você convida o time por e-mail. Cada vendedor recebe um link, treina pelo navegador e só passa para a próxima fase quando bate a nota mínima.",
          },
        ],
      },
      {
        title: "Acompanhamento",
        items: [
          {
            question: "Como acompanho o time?",
            answer:
              "A tela Início mostra o que mudou na semana. Nas Jornadas, o mapa da turma mostra a nota de cada pessoa em cada fase: quem concluiu, quem está tentando e quem travou.",
          },
          {
            question: "O que a Nicolly faz?",
            answer:
              "A Nicolly é a assistente da Ramppy para o gestor. Ela responde perguntas sobre os candidatos e o time com os seus dados e, com a sua confirmação, cria jornadas e grupos por você.",
          },
        ],
      },
      {
        title: "Créditos e cobrança",
        items: [
          {
            question: "Como funciona a cobrança?",
            answer:
              "A Ramppy funciona com créditos. Cada simulação, de candidato ou de vendedor, consome créditos do seu saldo. Os pacotes são sob demanda e os créditos não expiram. Fale com a gente para saber os valores.",
          },
          {
            question: "Existe período de teste?",
            answer:
              "Sim. Marque um teste grátis com a nossa equipe para experimentar a Ramppy na sua operação.",
          },
        ],
      },
    ],
  },
  en: {
    heroBadge: "Help",
    heroTitle: "Help Center",
    heroSubtitle: "Find answers to the most common questions about Ramppy.",
    faqHeading: "Frequently asked questions",
    supportTitle: "Didn't find what you're looking for?",
    supportSubtitle: "Our support team is ready to help you.",
    supportCta: "Talk to support",
    whatsappHref:
      "https://wa.me/5531995525157?text=Hi%2C%20I%20need%20help%20with%20Ramppy",
    sections: [
      {
        title: "Getting started",
        items: [
          {
            question: "Do I need to install any software?",
            answer:
              "No. Ramppy runs in the browser. Candidates and reps join through a link, with nothing to install and no sign-up.",
          },
          {
            question: "Who needs an account?",
            answer:
              "Only the manager. Candidates get the simulation link and reps get the journey invite by email; everyone joins through the link.",
          },
          {
            question: "How long does setup take?",
            answer:
              "Our team sets up Ramppy with you in a single onboarding meeting. In Settings you describe your business (company data, goals, objections and personas), one question at a time; if you're not sure of an answer, the AI writes it for you to review.",
          },
        ],
      },
      {
        title: "Hiring",
        items: [
          {
            question: "How does the hiring simulation work?",
            answer:
              "You create a group for the role, pick the synthetic customer and the goal of the conversation, and send the link to candidates. Each candidate runs a full sales meeting by voice, and you get the score before the interview.",
          },
          {
            question: "Do candidates need to sign up?",
            answer:
              "No. They open the link, enter their name and start the simulation in the browser. They only need to allow the microphone.",
          },
          {
            question: "How do I compare candidates?",
            answer:
              "Every candidate in the group appears in a list ranked by score, all on the same evaluation scale. For each one you see the score by category, the why and what they could do differently.",
          },
        ],
      },
      {
        title: "Simulations",
        items: [
          {
            question: "How does the AI simulation work?",
            answer:
              "It's a full sales meeting, by voice, with a synthetic customer built from your operation. It talks in real time, reacts to what's said and raises the objections your team really hears.",
          },
          {
            question: "Can I customize the scenarios?",
            answer:
              "Yes. You define the personas (role, company, temperament, pains), your operation's objections and the goal of each conversation, such as booking a demo or closing the deal.",
          },
          {
            question: "How is the call score calculated?",
            answer:
              "The AI evaluates the whole conversation in 5 categories: opening, qualification, solution, objections and closing, with 13 criteria in total. Each category gets a score from 0 to 10, with the why and what to do differently next time.",
          },
        ],
      },
      {
        title: "Training",
        items: [
          {
            question: "What is a journey?",
            answer:
              "A training track in phases. Each phase is a full meeting with a synthetic customer, and you set the minimum score in each category for a rep to move on.",
          },
          {
            question: "How does the team join a journey?",
            answer:
              "You invite the team by email. Each rep gets a link, trains in the browser and only moves to the next phase after hitting the minimum score.",
          },
        ],
      },
      {
        title: "Tracking",
        items: [
          {
            question: "How do I track the team?",
            answer:
              "Home shows what changed this week. In Journeys, the team map shows each person's score in each phase: who finished, who's trying and who's stuck.",
          },
          {
            question: "What does Nicolly do?",
            answer:
              "Nicolly is Ramppy's assistant for managers. She answers questions about candidates and the team using your data and, once you confirm, creates journeys and groups for you.",
          },
        ],
      },
      {
        title: "Credits and billing",
        items: [
          {
            question: "How does billing work?",
            answer:
              "Ramppy works with credits. Each simulation, for a candidate or a rep, uses credits from your balance. Packs are on demand and credits never expire. Talk to us for pricing.",
          },
          {
            question: "Is there a trial period?",
            answer:
              "Yes. Book a free trial with our team to try Ramppy on your operation.",
          },
        ],
      },
    ],
  },
  es: {
    heroBadge: "Ayuda",
    heroTitle: "Centro de Ayuda",
    heroSubtitle: "Encuentra respuestas a las preguntas más frecuentes sobre Ramppy.",
    faqHeading: "Preguntas frecuentes",
    supportTitle: "¿No encontraste lo que buscabas?",
    supportSubtitle: "Nuestro equipo de soporte está listo para ayudarte.",
    supportCta: "Hablar con soporte",
    whatsappHref:
      "https://wa.me/5531995525157?text=Hola%2C%20necesito%20ayuda%20con%20Ramppy",
    sections: [
      {
        title: "Primeros pasos",
        items: [
          {
            question: "¿Necesito instalar algún software?",
            answer:
              "No. Ramppy funciona en el navegador. Los candidatos y los vendedores entran por un enlace, sin instalar nada y sin registrarse.",
          },
          {
            question: "¿Quién necesita una cuenta?",
            answer:
              "Solo el manager. Los candidatos reciben el enlace de la simulación y los vendedores reciben la invitación a la jornada por correo; todos entran por el enlace.",
          },
          {
            question: "¿Cuánto tarda la configuración?",
            answer:
              "Nuestro equipo configura Ramppy contigo en una sola reunión de implementación. En la Configuración cuentas cómo es tu negocio (datos de la empresa, objetivos, objeciones y personas), una pregunta a la vez; si no sabes alguna respuesta, la IA la escribe para que la revises.",
          },
        ],
      },
      {
        title: "Contratación",
        items: [
          {
            question: "¿Cómo funciona la simulación de contratación?",
            answer:
              "Creas un grupo para la vacante, eliges el cliente sintético y el objetivo de la conversación, y envías el enlace a los candidatos. Cada candidato hace una reunión de ventas completa, por voz, y recibes la nota antes de la entrevista.",
          },
          {
            question: "¿El candidato necesita registrarse?",
            answer:
              "No. Abre el enlace, escribe su nombre y empieza la simulación en el navegador. Solo necesita autorizar el micrófono.",
          },
          {
            question: "¿Cómo comparo a los candidatos?",
            answer:
              "Todos los candidatos del grupo aparecen en una lista ordenada por nota, con la misma vara de evaluación. En cada uno ves la nota por categoría, el porqué y qué podría hacer distinto.",
          },
        ],
      },
      {
        title: "Simulaciones",
        items: [
          {
            question: "¿Cómo funciona la simulación con IA?",
            answer:
              "Es una reunión de ventas completa, por voz, con un cliente sintético creado a partir de tu operación. Conversa en tiempo real, reacciona a lo que se dice y plantea las objeciones que tu equipo escucha de verdad.",
          },
          {
            question: "¿Puedo personalizar los escenarios?",
            answer:
              "Sí. Defines las personas (cargo, empresa, temperamento, dolores), las objeciones de tu operación y el objetivo de cada conversación, como agendar una demostración o cerrar la venta.",
          },
          {
            question: "¿Cómo se calcula la nota de la llamada?",
            answer:
              "La IA evalúa toda la conversación en 5 categorías: apertura, calificación, solución, objeciones y cierre, con 13 criterios en total. Cada categoría recibe una nota de 0 a 10, con el porqué y qué hacer distinto la próxima vez.",
          },
        ],
      },
      {
        title: "Entrenamiento",
        items: [
          {
            question: "¿Qué es una jornada?",
            answer:
              "Es una ruta de entrenamiento en fases. Cada fase es una reunión completa con un cliente sintético, y tú defines la nota mínima en cada categoría para que el vendedor avance.",
          },
          {
            question: "¿Cómo entra el equipo a la jornada?",
            answer:
              "Invitas al equipo por correo. Cada vendedor recibe un enlace, entrena en el navegador y solo pasa a la siguiente fase al alcanzar la nota mínima.",
          },
        ],
      },
      {
        title: "Seguimiento",
        items: [
          {
            question: "¿Cómo sigo al equipo?",
            answer:
              "El Inicio muestra lo que cambió en la semana. En Jornadas, el mapa del equipo muestra la nota de cada persona en cada fase: quién terminó, quién está intentando y quién se trabó.",
          },
          {
            question: "¿Qué hace Nicolly?",
            answer:
              "Nicolly es la asistente de Ramppy para el manager. Responde preguntas sobre los candidatos y el equipo con tus datos y, con tu confirmación, crea jornadas y grupos por ti.",
          },
        ],
      },
      {
        title: "Créditos y facturación",
        items: [
          {
            question: "¿Cómo funciona el cobro?",
            answer:
              "Ramppy funciona con créditos. Cada simulación, de candidato o de vendedor, consume créditos de tu saldo. Los paquetes son a demanda y los créditos no expiran. Habla con nosotros para conocer los valores.",
          },
          {
            question: "¿Hay período de prueba?",
            answer:
              "Sí. Agenda una prueba gratis con nuestro equipo para probar Ramppy en tu operación.",
          },
        ],
      },
    ],
  },
};
