import SectionWrapper from "./SectionWrapper";

const features = [
  {
    tag: "Roleplay",
    title: "Simulacao de Vendas",
    description: "Treine vendas conversando com uma IA por voz. Configure o perfil do cliente, idade, temperamento e objecoes. No final, receba uma avaliacao detalhada com metodologia SPIN Selling.",
    bullets: ["Roleplay por voz em tempo real", "Personas e objecoes customizaveis", "Avaliacao SPIN automatica"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
        <path d="M19 10v2a7 7 0 01-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
    visual: (
      <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2"/></svg>
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900">Roleplay em andamento</p>
            <p className="text-[10px] text-gray-400">Gerente Comercial • Analitico • 30 anos</p>
          </div>
        </div>
        <div className="space-y-2">
          {["Situacao", "Problema", "Implicacao", "Necessidade"].map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-gray-500 w-4">{s[0]}</span>
              <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${i === 2 ? "bg-yellow-500" : "bg-green-500"}`} style={{ width: `${[75, 75, 67, 70][i]}%` }} />
              </div>
              <span className="text-[10px] font-bold text-gray-700">{["7.5", "7.5", "6.7", "7.0"][i]}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    tag: "Meet",
    title: "Analise de Reunioes",
    description: "Um bot entra automaticamente nas suas reunioes do Google Meet, transcreve tudo e gera uma avaliacao de performance completa. Tambem funciona com gravacao manual.",
    bullets: ["Bot automatico no Google Meet", "Transcricao completa com IA", "Avaliacao SPIN da call real"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    visual: (
      <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
            </div>
            <span className="text-sm font-bold text-gray-900">Analise Meet</span>
          </div>
          <span className="text-[10px] bg-green-50 text-green-600 font-semibold px-2 py-0.5 rounded">Bot Ativo</span>
        </div>
        <div className="bg-gray-50 rounded-xl p-3 mb-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center"><span className="text-[8px] font-bold text-blue-600">G</span></div>
            <span className="text-xs text-gray-700">Google Meet • Ramppy {"<>"} Gabriel</span>
          </div>
          <div className="h-1 bg-green-200 rounded-full"><div className="h-full bg-green-500 rounded-full w-3/4" /></div>
        </div>
        <div className="text-center p-3 bg-green-50 rounded-xl">
          <p className="text-xs font-semibold text-green-700">Nota geral: 8.0/10</p>
          <p className="text-[10px] text-green-600">Avaliacao SPIN completa disponivel</p>
        </div>
      </div>
    ),
  },
  {
    tag: "Chat",
    title: "WhatsApp Integrado",
    description: "Gerencie suas conversas do WhatsApp direto no app com interface completa. Envie mensagens, midia, audio e documentos sem sair da plataforma.",
    bullets: ["Interface completa de chat", "Midia, audio e documentos", "Integrado com a Nicole IA"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
    visual: (
      <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-100">
          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center"><span className="text-white text-xs font-bold">G</span></div>
          <div><p className="text-sm font-semibold text-gray-900">Gabriel Gomide</p><p className="text-[10px] text-green-500">online</p></div>
        </div>
        <div className="space-y-2 mb-3">
          <div className="bg-gray-100 rounded-xl rounded-tl-sm px-3 py-2 max-w-[80%]"><p className="text-xs text-gray-700">Boa tarde! Gostaria de saber mais sobre o plano Pro.</p></div>
          <div className="bg-green-500 rounded-xl rounded-tr-sm px-3 py-2 max-w-[80%] ml-auto"><p className="text-xs text-white">Claro! Posso te mostrar como funciona na pratica?</p></div>
          <div className="bg-gray-100 rounded-xl rounded-tl-sm px-3 py-2 max-w-[60%]"><p className="text-xs text-gray-700">Sim, por favor!</p></div>
        </div>
        <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2 border border-gray-200">
          <span className="text-[10px] text-gray-400 flex-1">Digite uma mensagem...</span>
          <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center"><svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/></svg></div>
        </div>
      </div>
    ),
  },
  {
    tag: "Nicole IA",
    title: "Copiloto de Vendas",
    description: "Assistente IA que sugere respostas em tempo real durante conversas no WhatsApp. Aprende com seus acertos e erros automaticamente e se adapta ao seu estilo.",
    bullets: ["Sugestoes em tempo real", "Aprende com seu historico", "Analise de sentimento do cliente"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      </svg>
    ),
    visual: (
      <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>
          </div>
          <div><span className="text-sm font-bold text-gray-900">Nicole</span> <span className="text-[10px] bg-green-50 text-green-600 font-semibold px-1.5 py-0.5 rounded">IA</span></div>
        </div>
        <div className="space-y-2">
          <div className="bg-green-50 border border-green-100 rounded-xl p-3"><p className="text-xs text-green-800">Sugiro mencionar o case da empresa X que teve +40% de conversao. O cliente parece valorizar dados concretos.</p></div>
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-3"><p className="text-xs text-amber-800">Atencao: o cliente demonstrou hesitacao. Reforce o periodo de teste gratis.</p></div>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-3"><p className="text-xs text-blue-800">Sentimento do cliente: Interessado mas cauteloso. Confianca: 72%</p></div>
        </div>
      </div>
    ),
  },
  {
    tag: "Metricas",
    title: "Perfil e Historico",
    description: "Acompanhe sua evolucao com metricas SPIN detalhadas, graficos de performance ao longo do tempo e historico completo de todas as sessoes.",
    bullets: ["Metricas SPIN detalhadas", "Graficos de evolucao", "Historico completo de sessoes"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    visual: (
      <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-bold text-gray-900">Evolucao SPIN</span>
          <span className="text-[10px] bg-green-50 text-green-600 font-bold px-2 py-0.5 rounded">+5.4 tendencia</span>
        </div>
        <svg viewBox="0 0 300 80" className="w-full h-20 mb-3">
          <defs><linearGradient id="featGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#22c55e" stopOpacity="0.15"/><stop offset="100%" stopColor="#22c55e" stopOpacity="0"/></linearGradient></defs>
          <path d="M0,60 30,50 60,52 90,45 120,35 150,30 180,25 210,22 240,20 270,25 300,35 L300,80 0,80Z" fill="url(#featGrad)"/>
          <polyline points="0,60 30,50 60,52 90,45 120,35 150,30 180,25 210,22 240,20 270,25 300,35" fill="none" stroke="#22c55e" strokeWidth="2"/>
        </svg>
        <div className="grid grid-cols-4 gap-2">
          {[{l:"S",v:"7.5"},{l:"P",v:"7.5"},{l:"I",v:"6.7"},{l:"N",v:"7.0"}].map(s=>(
            <div key={s.l} className="text-center p-2 bg-gray-50 rounded-lg">
              <span className="text-[9px] font-bold text-gray-400">{s.l}</span>
              <p className="text-sm font-bold text-gray-900">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    tag: "Desktop",
    title: "App Desktop",
    description: "Bubble flutuante que fica sempre visivel na tela com acesso rapido a Nicole e gravacao automatica de reunioes. Disponivel para Windows e Mac.",
    bullets: ["Bubble flutuante sempre visivel", "Gravacao automatica de meets", "Acesso rapido a Nicole"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    visual: (
      <div className="bg-gray-900 rounded-2xl p-4 shadow-sm relative">
        <div className="bg-gray-800 rounded-xl p-3 mb-3">
          <div className="flex gap-1 mb-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400"/><div className="w-1.5 h-1.5 rounded-full bg-yellow-400"/><div className="w-1.5 h-1.5 rounded-full bg-green-400"/></div>
          <div className="h-16 bg-gray-700 rounded-lg flex items-center justify-center"><span className="text-[10px] text-gray-400">Sua tela de trabalho</span></div>
        </div>
        <div className="absolute bottom-3 right-3 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full shadow-lg flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>
        </div>
        <p className="text-[10px] text-gray-400 text-center">Nicole sempre acessivel na bubble</p>
      </div>
    ),
  },
  {
    tag: "Admin",
    title: "Gestao de Equipe",
    description: "Painel administrativo completo para configurar personas, objecoes, dados da empresa e acompanhar a performance de toda a equipe de vendas.",
    bullets: ["Dashboard de equipe", "Personas e objecoes customizaveis", "Metricas por vendedor"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      </svg>
    ),
    visual: (
      <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-bold text-gray-900">Dashboard da Equipe</span>
          <span className="text-[10px] text-gray-400">8 vendedores</span>
        </div>
        <div className="space-y-2">
          {[{name:"Joao G.",score:"7.3",color:"green"},{name:"Matheus M.",score:"6.3",color:"yellow"},{name:"Terron R.",score:"6.2",color:"yellow"},{name:"Arthur X.",score:"6.2",color:"yellow"}].map(v=>(
            <div key={v.name} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
              <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center"><span className="text-[9px] font-bold text-green-700">{v.name[0]}</span></div>
              <span className="text-xs font-medium text-gray-700 flex-1">{v.name}</span>
              <span className={`text-xs font-bold ${v.color === "green" ? "text-green-600" : "text-yellow-600"}`}>{v.score}/10</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function Features() {
  return (
    <SectionWrapper id="funcionalidades">
      <div className="py-16 md:py-24">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 bg-green-surface text-primary-green text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            Funcionalidades
          </span>
          <h2 className="font-[var(--font-fustat)] text-[32px] md:text-[48px] font-semibold leading-[120%] tracking-[-0.04em] text-teal-dark">
            Tudo que seu time precisa para{" "}
            <span className="text-primary-green">vender mais</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-text-secondary leading-relaxed">
            Da simulacao ao fechamento, cada ferramenta foi pensada para
            acelerar o aprendizado e maximizar resultados.
          </p>
        </div>

        {/* Feature Sections */}
        <div className="space-y-24">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-16`}
            >
              {/* Text */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-green-surface text-primary-green flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <span className="text-xs font-semibold text-primary-green bg-green-surface px-3 py-1 rounded-full">
                    {feature.tag}
                  </span>
                </div>
                <h3 className="font-[var(--font-fustat)] text-[28px] md:text-[36px] font-semibold text-teal-dark leading-tight mb-4">
                  {feature.title}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary-green flex items-center justify-center flex-shrink-0">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                      </div>
                      <span className="text-sm font-medium text-teal-medium">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div className="flex-1 w-full max-w-md lg:max-w-none">
                {feature.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
