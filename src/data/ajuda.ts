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
              "O Ramppy funciona 100% no navegador. Para análise de reuniões, basta conectar seu Google Agenda. Você também pode baixar a versão beta do app desktop para funcionalidades adicionais.",
          },
          {
            question: "Quanto tempo leva para configurar?",
            answer:
              "Em uma única reunião de implementação podemos configurar a Ramppy na sua empresa. Nossa equipe cuida de tudo com você e fornece suporte contínuo após a implementação.",
          },
        ],
      },
      {
        title: "Simulações",
        items: [
          {
            question: "Como funciona a simulação com IA?",
            answer:
              "Você configura o cenário (persona, objeções, contexto) e inicia uma videochamada com um cliente virtual. A IA responde em tempo real por voz.",
          },
          {
            question: "Posso personalizar os cenários?",
            answer:
              "Sim. Você define idade, temperamento, objeções específicas e contexto da venda. Cada simulação pode ser diferente.",
          },
          {
            question: "Como é calculada a nota da call?",
            answer:
              "A IA analisa a transcrição e avalia a qualidade da conversa em vários indicadores de qualidade da venda. Cada indicador recebe uma nota de 0 a 10.",
          },
        ],
      },
      {
        title: "Análise de reuniões",
        items: [
          {
            question: "Como funciona a análise de reuniões?",
            answer:
              "O vendedor instala o app desktop da Ramppy uma única vez. A partir daí, cada reunião é capturada silenciosamente direto do dispositivo, sem nenhum bot entrar na chamada e sem aviso para o prospect. Funciona em Google Meet, Zoom e Teams. Opcionalmente, conecte sua conta Google em 'Meu Perfil' para que o app detecte reuniões da sua agenda automaticamente.",
          },
          {
            question: "Como funciona a gravação?",
            answer:
              "O app desktop captura o áudio localmente do dispositivo do vendedor e transcreve a reunião em tempo real. A transcrição é usada para gerar a avaliação automática.",
          },
          {
            question: "Quem tem acesso à análise?",
            answer:
              "O vendedor e o gestor do time têm acesso. As permissões podem ser configuradas por perfil.",
          },
        ],
      },
      {
        title: "Planos e cobrança",
        items: [
          {
            question: "Posso cancelar a qualquer momento?",
            answer:
              "Sim. Não há fidelidade. Você pode cancelar diretamente na plataforma a qualquer momento.",
          },
          {
            question: "Existe período de teste?",
            answer:
              "Sim. Todos os planos incluem um período de teste grátis para você experimentar a plataforma.",
          },
          {
            question: "Como funciona o sistema de créditos?",
            answer:
              "Cada simulação ou análise de reunião consome créditos. A quantidade disponível depende do seu plano. Créditos extras podem ser adquiridos sob demanda.",
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
              "Ramppy runs 100% in the browser. For meeting analysis, just connect your Google Calendar. You can also download the beta desktop app for additional features.",
          },
          {
            question: "How long does setup take?",
            answer:
              "We can set up Ramppy for your company in a single onboarding meeting. Our team takes care of everything with you and provides ongoing support after implementation.",
          },
        ],
      },
      {
        title: "Simulations",
        items: [
          {
            question: "How does the AI simulation work?",
            answer:
              "You configure the scenario (persona, objections, context) and start a video call with a virtual customer. The AI responds in real time by voice.",
          },
          {
            question: "Can I customize the scenarios?",
            answer:
              "Yes. You set the age, temperament, specific objections, and sales context. Every simulation can be different.",
          },
          {
            question: "How is the call score calculated?",
            answer:
              "The AI analyzes the transcript and evaluates the conversation across multiple sales quality indicators. Each indicator gets a score from 0 to 10.",
          },
        ],
      },
      {
        title: "Meeting analysis",
        items: [
          {
            question: "How does meeting analysis work?",
            answer:
              "The rep installs the Ramppy desktop app once. From there, every meeting is captured silently from the device, with no bot ever joining the call and no notice for the prospect. It works on Google Meet, Zoom and Teams. Optionally, connect your Google account under 'My Profile' so the app can auto-detect meetings from your calendar.",
          },
          {
            question: "How does the recording work?",
            answer:
              "The desktop app captures audio locally from the rep's device and transcribes the meeting in real time. The transcript is used to generate the automatic evaluation.",
          },
          {
            question: "Who has access to the analysis?",
            answer:
              "The salesperson and the team manager have access. Permissions can be configured per role.",
          },
        ],
      },
      {
        title: "Plans and billing",
        items: [
          {
            question: "Can I cancel at any time?",
            answer:
              "Yes. There are no long-term commitments. You can cancel directly in the platform at any time.",
          },
          {
            question: "Is there a trial period?",
            answer:
              "Yes. All plans include a free trial period so you can try the platform.",
          },
          {
            question: "How does the credit system work?",
            answer:
              "Each simulation or meeting analysis consumes credits. The amount available depends on your plan. Extra credits can be purchased on demand.",
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
              "Ramppy funciona 100% en el navegador. Para el análisis de reuniones, solo conecta tu Google Calendar. También puedes descargar la versión beta de la app de escritorio para funcionalidades adicionales.",
          },
          {
            question: "¿Cuánto tarda la configuración?",
            answer:
              "Podemos configurar Ramppy para tu empresa en una sola reunión de implementación. Nuestro equipo se encarga de todo contigo y ofrece soporte continuo después de la implementación.",
          },
        ],
      },
      {
        title: "Simulaciones",
        items: [
          {
            question: "¿Cómo funciona la simulación con IA?",
            answer:
              "Configuras el escenario (persona, objeciones, contexto) e inicias una videollamada con un cliente virtual. La IA responde en tiempo real por voz.",
          },
          {
            question: "¿Puedo personalizar los escenarios?",
            answer:
              "Sí. Defines edad, temperamento, objeciones específicas y contexto de venta. Cada simulación puede ser diferente.",
          },
          {
            question: "¿Cómo se calcula la nota de la llamada?",
            answer:
              "La IA analiza la transcripción y evalúa la conversación en varios indicadores de calidad de la venta. Cada indicador recibe una nota de 0 a 10.",
          },
        ],
      },
      {
        title: "Análisis de reuniones",
        items: [
          {
            question: "¿Cómo funciona el análisis de reuniones?",
            answer:
              "El vendedor instala la app de escritorio de Ramppy una sola vez. A partir de ahí, cada reunión se captura silenciosamente desde el dispositivo, sin que ningún bot entre en la llamada y sin aviso para el prospect. Funciona en Google Meet, Zoom y Teams. Opcionalmente, conecta tu cuenta de Google en 'Mi Perfil' para que la app detecte reuniones de tu calendario automáticamente.",
          },
          {
            question: "¿Cómo funciona la grabación?",
            answer:
              "La app de escritorio captura el audio localmente desde el dispositivo del vendedor y transcribe la reunión en tiempo real. La transcripción se usa para generar la evaluación automática.",
          },
          {
            question: "¿Quién tiene acceso al análisis?",
            answer:
              "El vendedor y el manager del equipo tienen acceso. Los permisos pueden configurarse por perfil.",
          },
        ],
      },
      {
        title: "Planes y facturación",
        items: [
          {
            question: "¿Puedo cancelar en cualquier momento?",
            answer:
              "Sí. No hay compromisos a largo plazo. Puedes cancelar directamente en la plataforma en cualquier momento.",
          },
          {
            question: "¿Hay período de prueba?",
            answer:
              "Sí. Todos los planes incluyen un período de prueba gratuito para que experimentes la plataforma.",
          },
          {
            question: "¿Cómo funciona el sistema de créditos?",
            answer:
              "Cada simulación o análisis de reunión consume créditos. La cantidad disponible depende de tu plan. Los créditos extra pueden adquirirse bajo demanda.",
          },
        ],
      },
    ],
  },
};
