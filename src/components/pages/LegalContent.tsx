"use client";

import SectionWrapper from "@/components/SectionWrapper";
import { useLocale } from "@/i18n/LocaleContext";

const strings = {
  pt: {
    badge: "Legal",
    heroTitle: "Termos e Privacidade",
    lastUpdated: "Última atualização: Abril de 2026",

    termsTitle: "Termos de Uso",
    terms: [
      {
        title: "1. Aceitação dos termos",
        body: "Ao acessar e utilizar a plataforma Ramppy, você concorda com estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não utilize a plataforma. O uso continuado da plataforma constitui aceitação de eventuais alterações nestes termos.",
      },
      {
        title: "2. Descrição do serviço",
        body: "A Ramppy é uma plataforma SaaS de treinamento e assistência em vendas com inteligência artificial. O serviço inclui simulações de vendas com IA, análise automática de reuniões, assistente virtual (Nicole IA) e dashboard de gestão de equipes comerciais.",
      },
      {
        title: "3. Conta e acesso",
        body: "O acesso à plataforma é feito por convite do gestor da empresa contratante. Cada usuário é responsável por manter a confidencialidade de suas credenciais de acesso. Você deve notificar a Ramppy imediatamente sobre qualquer uso não autorizado da sua conta.",
      },
    ],
    ipTitle: "4. Propriedade intelectual",
    ipBody:
      "Todo o conteúdo da plataforma Ramppy:incluindo mas não se limitando a software, algoritmos, interface, design, textos, metodologias de avaliação, modelos de IA e documentação:é propriedade exclusiva da Ramppy e protegido por leis de propriedade intelectual.",
    ipProhibitionsLabel: "Proibições absolutas:",
    ipProhibitions: [
      "Copiar, reproduzir, distribuir ou criar obras derivadas de qualquer parte da plataforma",
      "Fazer engenharia reversa, descompilar ou desmontar o software",
      "Compartilhar, vazar ou tornar público qualquer conteúdo, dado, avaliação ou funcionalidade da plataforma",
      "Utilizar dados da plataforma para treinar modelos de IA externos",
      "Capturar telas, gravar ou exportar conteúdo para uso fora da plataforma sem autorização expressa",
    ],
    termsAfter: [
      {
        title: "5. Uso aceitável",
        body: "A plataforma deve ser utilizada exclusivamente para fins de treinamento e gestão de equipes de vendas. É proibido utilizar a plataforma para fins ilegais, abusivos, ou que violem direitos de terceiros. A Ramppy reserva-se o direito de suspender ou encerrar contas que violem estes termos.",
      },
      {
        title: "6. Planos e pagamento",
        body: "Os planos e preços estão disponíveis na página de planos do site. O pagamento é realizado mensalmente ou anualmente, conforme o plano escolhido. Não há fidelidade:o cancelamento pode ser feito a qualquer momento diretamente na plataforma.",
      },
      {
        title: "7. Limitação de responsabilidade",
        body: "A Ramppy fornece o serviço \u201Ccomo está\u201D. Não garantimos que a plataforma estará disponível de forma ininterrupta ou livre de erros. As avaliações geradas por IA são ferramentas de apoio e não substituem o julgamento profissional humano. A Ramppy não se responsabiliza por decisões tomadas com base exclusivamente nas análises da plataforma.",
      },
      {
        title: "8. Rescisão",
        body: "A Ramppy pode suspender ou encerrar seu acesso à plataforma a qualquer momento, com ou sem motivo, mediante notificação. Em caso de violação destes termos, especialmente das cláusulas de propriedade intelectual, o encerramento será imediato e sem aviso prévio.",
      },
    ],

    privacyTitle: "Política de Privacidade",
    dataTitle: "1. Dados que coletamos",
    dataPersonalLabel: "Dados pessoais:",
    dataPersonal: "Nome, e-mail e informações de perfil fornecidas no cadastro.",
    dataUsageLabel: "Dados de uso:",
    dataUsage:
      "Transcrições de simulações e reuniões analisadas, notas de avaliação SPIN, histórico de atividades na plataforma.",
    dataIntegrationLabel: "Dados de integração:",
    dataIntegration:
      "Informações do Google Agenda para agendamento automático do bot de análise de reuniões.",
    dataImportantLabel: "Importante:",
    dataImportant:
      "Não armazenamos áudio ou vídeo das simulações ou reuniões. Apenas as transcrições em texto são processadas e armazenadas.",

    useTitle: "2. Como usamos seus dados",
    useItems: [
      "Gerar avaliações SPIN Selling das simulações e reuniões",
      "Personalizar a experiência de treinamento e coaching via Nicole IA",
      "Fornecer métricas e relatórios de performance ao gestor da equipe",
      "Melhorar a qualidade dos modelos de avaliação da plataforma",
      "Comunicações sobre o serviço e atualizações da plataforma",
    ],

    shareTitle: "3. Com quem compartilhamos",
    shareIntro:
      "Seus dados são processados pelos seguintes provedores de tecnologia, estritamente para funcionamento da plataforma:",
    shareItems: [
      { name: "OpenAI", desc: "Processamento de linguagem natural para avaliações e assistente IA" },
      { name: "Recall AI", desc: "Transcrição automática de reuniões" },
      { name: "Supabase", desc: "Banco de dados e autenticação" },
      { name: "Hostinger", desc: "Hospedagem da aplicação" },
    ],
    shareOutro:
      "Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins de marketing ou publicidade.",

    rightsTitle: "4. Seus direitos (LGPD)",
    rightsIntro:
      "Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:",
    rightsItems: [
      "Acessar seus dados pessoais armazenados na plataforma",
      "Solicitar correção de dados incorretos ou desatualizados",
      "Solicitar a exclusão dos seus dados pessoais",
      "Revogar o consentimento para o tratamento de dados",
      "Solicitar a portabilidade dos seus dados",
    ],
    rightsContactBefore: "Para exercer qualquer desses direitos, entre em contato pelo e-mail ",
    rightsContactAfter: ".",

    retentionTitle: "5. Retenção de dados",
    retentionBody:
      "Seus dados são mantidos enquanto sua conta estiver ativa. Após o cancelamento da assinatura, os dados são retidos por 30 dias para possível reativação. Após esse período, os dados são excluídos permanentemente, exceto quando houver obrigação legal de retenção.",

    securityTitle: "Segurança",
    securityItems: [
      {
        title: "Sem armazenamento de áudio/vídeo",
        desc: "Não armazenamos gravações de áudio ou vídeo. Apenas transcrições em texto são processadas e armazenadas de forma segura.",
      },
      {
        title: "Banco de dados protegido",
        desc: "Utilizamos Supabase com Row Level Security (RLS), garantindo que cada empresa acesse apenas seus próprios dados, com isolamento completo entre organizações.",
      },
      {
        title: "Comunicação criptografada",
        desc: "Todas as comunicações entre seu navegador e nossos servidores são protegidas por HTTPS/TLS.",
      },
      {
        title: "Autenticação segura",
        desc: "Login via Google OAuth ou credenciais com hash seguro. Suporte a autenticação de dois fatores.",
      },
      {
        title: "Código versionado",
        desc: "Todo o código-fonte é versionado no GitHub com controle de acesso restrito à equipe de desenvolvimento.",
      },
    ],

    contactTitle: "Dúvidas sobre termos ou privacidade?",
    contactBody: "Entre em contato com nossa equipe.",
  },
  en: {
    badge: "Legal",
    heroTitle: "Terms and Privacy",
    lastUpdated: "Last updated: April 2026",

    termsTitle: "Terms of Use",
    terms: [
      {
        title: "1. Acceptance of terms",
        body: "By accessing and using the Ramppy platform, you agree to these Terms of Use. If you do not agree with any part of these terms, do not use the platform. Continued use of the platform constitutes acceptance of any changes to these terms.",
      },
      {
        title: "2. Service description",
        body: "Ramppy is a SaaS platform for sales training and assistance powered by artificial intelligence. The service includes AI sales simulations, automated meeting analysis, a virtual assistant (Nicole AI), and a management dashboard for sales teams.",
      },
      {
        title: "3. Account and access",
        body: "Access to the platform is granted by invitation from the manager of the contracting company. Each user is responsible for keeping their access credentials confidential. You must notify Ramppy immediately of any unauthorized use of your account.",
      },
    ],
    ipTitle: "4. Intellectual property",
    ipBody:
      "All content on the Ramppy platform — including but not limited to software, algorithms, interface, design, text, evaluation methodologies, AI models, and documentation — is the exclusive property of Ramppy and is protected by intellectual property laws.",
    ipProhibitionsLabel: "Strict prohibitions:",
    ipProhibitions: [
      "Copying, reproducing, distributing, or creating derivative works from any part of the platform",
      "Reverse engineering, decompiling, or disassembling the software",
      "Sharing, leaking, or making public any content, data, evaluation, or feature of the platform",
      "Using platform data to train external AI models",
      "Taking screenshots, recording, or exporting content for use outside the platform without express authorization",
    ],
    termsAfter: [
      {
        title: "5. Acceptable use",
        body: "The platform must be used exclusively for sales team training and management purposes. It is forbidden to use the platform for illegal or abusive purposes, or in ways that violate the rights of third parties. Ramppy reserves the right to suspend or terminate accounts that violate these terms.",
      },
      {
        title: "6. Plans and payment",
        body: "Plans and pricing are available on the pricing page of the website. Payment is made monthly or annually, depending on the plan chosen. There is no lock-in — cancellation can be done at any time directly on the platform.",
      },
      {
        title: "7. Limitation of liability",
        body: "Ramppy provides the service \u201Cas is.\u201D We do not guarantee that the platform will be available uninterrupted or error-free. AI-generated evaluations are supporting tools and do not replace human professional judgment. Ramppy is not responsible for decisions made based solely on the platform\u2019s analyses.",
      },
      {
        title: "8. Termination",
        body: "Ramppy may suspend or terminate your access to the platform at any time, with or without cause, upon notice. In the event of a breach of these terms — especially the intellectual property clauses — termination will be immediate and without prior notice.",
      },
    ],

    privacyTitle: "Privacy Policy",
    dataTitle: "1. Data we collect",
    dataPersonalLabel: "Personal data:",
    dataPersonal: "Name, email, and profile information provided at sign-up.",
    dataUsageLabel: "Usage data:",
    dataUsage:
      "Transcripts of analyzed simulations and meetings, SPIN evaluation scores, and activity history on the platform.",
    dataIntegrationLabel: "Integration data:",
    dataIntegration:
      "Google Calendar information for automatic scheduling of the meeting analysis bot.",
    dataImportantLabel: "Important:",
    dataImportant:
      "We do not store audio or video from simulations or meetings. Only text transcripts are processed and stored.",

    useTitle: "2. How we use your data",
    useItems: [
      "Generate SPIN Selling evaluations of simulations and meetings",
      "Personalize the training and coaching experience via Nicole AI",
      "Provide performance metrics and reports to the team manager",
      "Improve the quality of the platform\u2019s evaluation models",
      "Send service-related communications and platform updates",
    ],

    shareTitle: "3. Who we share with",
    shareIntro:
      "Your data is processed by the following technology providers, strictly for the operation of the platform:",
    shareItems: [
      { name: "OpenAI", desc: "Natural language processing for evaluations and the AI assistant" },
      { name: "Recall AI", desc: "Automated meeting transcription" },
      { name: "Supabase", desc: "Database and authentication" },
      { name: "Hostinger", desc: "Application hosting" },
    ],
    shareOutro:
      "We do not sell, rent, or share your personal data with third parties for marketing or advertising purposes.",

    rightsTitle: "4. Your rights (LGPD)",
    rightsIntro:
      "In accordance with Brazil\u2019s General Data Protection Law (Law No. 13,709/2018), you have the right to:",
    rightsItems: [
      "Access your personal data stored on the platform",
      "Request correction of inaccurate or outdated data",
      "Request the deletion of your personal data",
      "Withdraw consent for data processing",
      "Request the portability of your data",
    ],
    rightsContactBefore: "To exercise any of these rights, contact us at ",
    rightsContactAfter: ".",

    retentionTitle: "5. Data retention",
    retentionBody:
      "Your data is kept while your account is active. After subscription cancellation, data is retained for 30 days in case of reactivation. After this period, data is permanently deleted, except when there is a legal obligation to retain it.",

    securityTitle: "Security",
    securityItems: [
      {
        title: "No audio/video storage",
        desc: "We do not store audio or video recordings. Only text transcripts are processed and stored securely.",
      },
      {
        title: "Protected database",
        desc: "We use Supabase with Row Level Security (RLS), ensuring each company only accesses its own data, with full isolation between organizations.",
      },
      {
        title: "Encrypted communication",
        desc: "All communications between your browser and our servers are protected by HTTPS/TLS.",
      },
      {
        title: "Secure authentication",
        desc: "Login via Google OAuth or credentials with secure hashing. Two-factor authentication is supported.",
      },
      {
        title: "Versioned code",
        desc: "All source code is versioned on GitHub with access restricted to the development team.",
      },
    ],

    contactTitle: "Questions about terms or privacy?",
    contactBody: "Get in touch with our team.",
  },
  es: {
    badge: "Legal",
    heroTitle: "Términos y Privacidad",
    lastUpdated: "Última actualización: abril de 2026",

    termsTitle: "Términos de Uso",
    terms: [
      {
        title: "1. Aceptación de los términos",
        body: "Al acceder y utilizar la plataforma Ramppy, usted acepta estos Términos de Uso. Si no está de acuerdo con alguna parte de estos términos, no utilice la plataforma. El uso continuado de la plataforma constituye la aceptación de cualquier modificación a estos términos.",
      },
      {
        title: "2. Descripción del servicio",
        body: "Ramppy es una plataforma SaaS de entrenamiento y asistencia en ventas con inteligencia artificial. El servicio incluye simulaciones de ventas con IA, análisis automático de reuniones, asistente virtual (Nicole IA) y un panel de gestión para equipos comerciales.",
      },
      {
        title: "3. Cuenta y acceso",
        body: "El acceso a la plataforma se otorga por invitación del responsable de la empresa contratante. Cada usuario es responsable de mantener la confidencialidad de sus credenciales de acceso. Debe notificar a Ramppy de inmediato sobre cualquier uso no autorizado de su cuenta.",
      },
    ],
    ipTitle: "4. Propiedad intelectual",
    ipBody:
      "Todo el contenido de la plataforma Ramppy — incluyendo, entre otros, el software, algoritmos, interfaz, diseño, textos, metodologías de evaluación, modelos de IA y documentación — es propiedad exclusiva de Ramppy y está protegido por las leyes de propiedad intelectual.",
    ipProhibitionsLabel: "Prohibiciones absolutas:",
    ipProhibitions: [
      "Copiar, reproducir, distribuir o crear obras derivadas de cualquier parte de la plataforma",
      "Realizar ingeniería inversa, descompilar o desensamblar el software",
      "Compartir, filtrar o hacer público cualquier contenido, dato, evaluación o funcionalidad de la plataforma",
      "Utilizar datos de la plataforma para entrenar modelos de IA externos",
      "Capturar pantallas, grabar o exportar contenido para uso fuera de la plataforma sin autorización expresa",
    ],
    termsAfter: [
      {
        title: "5. Uso aceptable",
        body: "La plataforma debe utilizarse exclusivamente con fines de entrenamiento y gestión de equipos de ventas. Está prohibido usar la plataforma con fines ilegales, abusivos o que violen los derechos de terceros. Ramppy se reserva el derecho de suspender o cancelar cuentas que infrinjan estos términos.",
      },
      {
        title: "6. Planes y pago",
        body: "Los planes y precios están disponibles en la página de planes del sitio. El pago se realiza de forma mensual o anual, según el plan elegido. No hay permanencia — la cancelación puede hacerse en cualquier momento directamente desde la plataforma.",
      },
      {
        title: "7. Limitación de responsabilidad",
        body: "Ramppy presta el servicio \u201Ctal cual\u201D. No garantizamos que la plataforma esté disponible de forma ininterrumpida o libre de errores. Las evaluaciones generadas por IA son herramientas de apoyo y no sustituyen el criterio profesional humano. Ramppy no se responsabiliza por decisiones tomadas basándose exclusivamente en los análisis de la plataforma.",
      },
      {
        title: "8. Rescisión",
        body: "Ramppy podrá suspender o cancelar su acceso a la plataforma en cualquier momento, con o sin causa, previa notificación. En caso de incumplimiento de estos términos, especialmente de las cláusulas de propiedad intelectual, la cancelación será inmediata y sin previo aviso.",
      },
    ],

    privacyTitle: "Política de Privacidad",
    dataTitle: "1. Datos que recopilamos",
    dataPersonalLabel: "Datos personales:",
    dataPersonal: "Nombre, correo electrónico e información de perfil proporcionados en el registro.",
    dataUsageLabel: "Datos de uso:",
    dataUsage:
      "Transcripciones de simulaciones y reuniones analizadas, puntuaciones de evaluación SPIN e historial de actividad en la plataforma.",
    dataIntegrationLabel: "Datos de integración:",
    dataIntegration:
      "Información de Google Calendar para la programación automática del bot de análisis de reuniones.",
    dataImportantLabel: "Importante:",
    dataImportant:
      "No almacenamos audio ni video de las simulaciones ni de las reuniones. Solo se procesan y almacenan las transcripciones en texto.",

    useTitle: "2. Cómo usamos sus datos",
    useItems: [
      "Generar evaluaciones SPIN Selling de simulaciones y reuniones",
      "Personalizar la experiencia de entrenamiento y coaching a través de Nicole IA",
      "Proporcionar métricas e informes de rendimiento al responsable del equipo",
      "Mejorar la calidad de los modelos de evaluación de la plataforma",
      "Enviar comunicaciones sobre el servicio y actualizaciones de la plataforma",
    ],

    shareTitle: "3. Con quién compartimos",
    shareIntro:
      "Sus datos son procesados por los siguientes proveedores tecnológicos, estrictamente para el funcionamiento de la plataforma:",
    shareItems: [
      { name: "OpenAI", desc: "Procesamiento de lenguaje natural para evaluaciones y asistente de IA" },
      { name: "Recall AI", desc: "Transcripción automática de reuniones" },
      { name: "Supabase", desc: "Base de datos y autenticación" },
      { name: "Hostinger", desc: "Alojamiento de la aplicación" },
    ],
    shareOutro:
      "No vendemos, alquilamos ni compartimos sus datos personales con terceros para fines de marketing o publicidad.",

    rightsTitle: "4. Sus derechos (LGPD)",
    rightsIntro:
      "De acuerdo con la Ley General de Protección de Datos de Brasil (Ley nº 13.709/2018), usted tiene derecho a:",
    rightsItems: [
      "Acceder a sus datos personales almacenados en la plataforma",
      "Solicitar la corrección de datos incorrectos o desactualizados",
      "Solicitar la eliminación de sus datos personales",
      "Revocar el consentimiento para el tratamiento de datos",
      "Solicitar la portabilidad de sus datos",
    ],
    rightsContactBefore: "Para ejercer cualquiera de estos derechos, contáctenos al correo ",
    rightsContactAfter: ".",

    retentionTitle: "5. Retención de datos",
    retentionBody:
      "Sus datos se conservan mientras su cuenta esté activa. Tras la cancelación de la suscripción, los datos se retienen durante 30 días para una posible reactivación. Pasado ese período, los datos se eliminan de forma permanente, salvo cuando exista una obligación legal de conservación.",

    securityTitle: "Seguridad",
    securityItems: [
      {
        title: "Sin almacenamiento de audio/video",
        desc: "No almacenamos grabaciones de audio ni video. Solo se procesan y almacenan de forma segura las transcripciones en texto.",
      },
      {
        title: "Base de datos protegida",
        desc: "Utilizamos Supabase con Row Level Security (RLS), garantizando que cada empresa acceda únicamente a sus propios datos, con aislamiento completo entre organizaciones.",
      },
      {
        title: "Comunicación cifrada",
        desc: "Todas las comunicaciones entre su navegador y nuestros servidores están protegidas mediante HTTPS/TLS.",
      },
      {
        title: "Autenticación segura",
        desc: "Inicio de sesión mediante Google OAuth o credenciales con hash seguro. Soporte para autenticación de dos factores.",
      },
      {
        title: "Código versionado",
        desc: "Todo el código fuente está versionado en GitHub con acceso restringido al equipo de desarrollo.",
      },
    ],

    contactTitle: "¿Dudas sobre términos o privacidad?",
    contactBody: "Póngase en contacto con nuestro equipo.",
  },
} as const;

export default function LegalContent() {
  const locale = useLocale();
  const t = strings[locale];

  return (
    <>
      {/* Hero */}
      <SectionWrapper>
        <div className="py-20 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-green-surface text-primary-green text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              {t.badge}
            </span>
            <h1 className="font-[var(--font-fustat)] text-[36px] md:text-[52px] font-semibold leading-[110%] tracking-[-0.04em] text-teal-dark">
              {t.heroTitle}
            </h1>
            <p className="mt-5 text-lg text-text-secondary leading-relaxed max-w-2xl">
              {t.lastUpdated}
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Termos de Uso */}
      <SectionWrapper id="termos">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl">
            <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[36px] font-semibold text-teal-dark leading-[115%] tracking-tight mb-8">
              {t.termsTitle}
            </h2>

            <div className="space-y-8">
              {t.terms.map((item) => (
                <div key={item.title}>
                  <h3 className="font-[var(--font-fustat)] text-xl font-semibold text-teal-dark mb-3">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}

              <div>
                <h3 className="font-[var(--font-fustat)] text-xl font-semibold text-teal-dark mb-3">{t.ipTitle}</h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  {t.ipBody}
                </p>
                <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                  <p className="text-sm font-semibold text-red-800 mb-2">{t.ipProhibitionsLabel}</p>
                  <ul className="space-y-2 text-sm text-red-700">
                    {t.ipProhibitions.map((p) => (
                      <li key={p}>• {p}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {t.termsAfter.map((item) => (
                <div key={item.title}>
                  <h3 className="font-[var(--font-fustat)] text-xl font-semibold text-teal-dark mb-3">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Política de Privacidade */}
      <SectionWrapper id="privacidade">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl">
            <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[36px] font-semibold text-white leading-[115%] tracking-tight mb-8">
              {t.privacyTitle}
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-[var(--font-fustat)] text-xl font-semibold text-teal-dark mb-3">{t.dataTitle}</h3>
                <div className="space-y-3">
                  <p className="text-text-secondary leading-relaxed"><strong className="text-teal-dark">{t.dataPersonalLabel}</strong> {t.dataPersonal}</p>
                  <p className="text-text-secondary leading-relaxed"><strong className="text-teal-dark">{t.dataUsageLabel}</strong> {t.dataUsage}</p>
                  <p className="text-text-secondary leading-relaxed"><strong className="text-teal-dark">{t.dataIntegrationLabel}</strong> {t.dataIntegration}</p>
                  <p className="text-text-secondary leading-relaxed"><strong className="text-teal-dark">{t.dataImportantLabel}</strong> {t.dataImportant}</p>
                </div>
              </div>

              <div>
                <h3 className="font-[var(--font-fustat)] text-xl font-semibold text-teal-dark mb-3">{t.useTitle}</h3>
                <ul className="space-y-2 text-text-secondary">
                  {t.useItems.map((u) => (
                    <li key={u}>• {u}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-[var(--font-fustat)] text-xl font-semibold text-teal-dark mb-3">{t.shareTitle}</h3>
                <p className="text-text-secondary leading-relaxed mb-3">
                  {t.shareIntro}
                </p>
                <ul className="space-y-2 text-text-secondary">
                  {t.shareItems.map((s) => (
                    <li key={s.name}>• <strong className="text-teal-dark">{s.name}</strong>: {s.desc}</li>
                  ))}
                </ul>
                <p className="text-text-secondary leading-relaxed mt-3">
                  {t.shareOutro}
                </p>
              </div>

              <div>
                <h3 className="font-[var(--font-fustat)] text-xl font-semibold text-teal-dark mb-3">{t.rightsTitle}</h3>
                <p className="text-text-secondary leading-relaxed mb-3">
                  {t.rightsIntro}
                </p>
                <ul className="space-y-2 text-text-secondary">
                  {t.rightsItems.map((r) => (
                    <li key={r}>• {r}</li>
                  ))}
                </ul>
                <p className="text-text-secondary leading-relaxed mt-3">
                  {t.rightsContactBefore}<a href="mailto:gabriel@ramppy.com" className="text-primary-green hover:underline">gabriel@ramppy.com</a>{t.rightsContactAfter}
                </p>
              </div>

              <div>
                <h3 className="font-[var(--font-fustat)] text-xl font-semibold text-teal-dark mb-3">{t.retentionTitle}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {t.retentionBody}
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Segurança */}
      <SectionWrapper id="seguranca">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl">
            <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[36px] font-semibold text-teal-dark leading-[115%] tracking-tight mb-8">
              {t.securityTitle}
            </h2>

            <div className="space-y-6">
              {t.securityItems.map((item) => (
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
        </div>
      </SectionWrapper>

      {/* Contato */}
      <SectionWrapper>
        <div className="py-12 md:py-20">
          <div className="bg-green-surface/50 border border-primary-green/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-[var(--font-fustat)] text-2xl md:text-3xl font-semibold text-teal-dark mb-3">
              {t.contactTitle}
            </h2>
            <p className="text-text-secondary mb-6 max-w-md mx-auto">
              {t.contactBody}
            </p>
            <a
              href="mailto:gabriel@ramppy.com"
              className="font-[var(--font-fustat)] inline-flex items-center gap-2 text-base font-semibold px-8 py-4 rounded-full bg-primary-green text-white hover:bg-green-dark transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              gabriel@ramppy.com
            </a>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
