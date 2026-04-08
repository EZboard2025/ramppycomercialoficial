import SectionWrapper from "./SectionWrapper";
import DashboardPreview from "./DashboardPreview";

const features = [
  {
    tag: "Roleplay",
    title: "Simulacao de Vendas",
    description:
      "Treine vendas conversando com uma IA por voz. Configure o perfil do cliente, idade, temperamento e objecoes. No final, receba uma avaliacao detalhada com metodologia SPIN Selling.",
    bullets: [
      "Roleplay por voz em tempo real",
      "Personas e objecoes customizaveis",
      "Avaliacao SPIN automatica",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
        <path d="M19 10v2a7 7 0 01-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
    visual: (
      <img
        src="/images/roleplay.png.png"
        alt="Roleplay de vendas com IA"
        className="w-full h-auto block rounded-2xl shadow-[0_25px_60px_-12px_rgba(0,0,0,0.15)]"
      />
    ),
  },
  {
    tag: "Analise Meet",
    title: "Analise de Reunioes",
    description:
      "Um bot entra automaticamente nas suas reunioes do Google Meet, transcreve tudo e gera uma avaliacao de performance completa com metodologia SPIN.",
    bullets: [
      "Bot automatico no Google Meet",
      "Transcricao completa com IA",
      "Avaliacao SPIN da call real",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    visual: (
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-[0_25px_60px_-12px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>
            </div>
            <div>
              <span className="text-sm font-bold text-gray-900 block">Analise de Reuniao</span>
              <span className="text-[11px] text-gray-400">Google Meet • 45 min</span>
            </div>
          </div>
          <span className="text-[11px] bg-green-50 text-green-600 font-semibold px-2.5 py-1 rounded-full">Concluido</span>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-gray-700">Ramppy {"<>"} Gabriel Gomide</span>
            <span className="text-[10px] text-gray-400">Hoje, 14:30</span>
          </div>
          <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full w-[85%]" />
          </div>
          <p className="text-[10px] text-gray-400 mt-1.5">85% do tempo analisado</p>
        </div>
        <div className="grid grid-cols-4 gap-2 mb-4">
          {[
            { l: "S", v: "8.5", c: "text-green-600" },
            { l: "P", v: "7.8", c: "text-green-600" },
            { l: "I", v: "6.5", c: "text-amber-600" },
            { l: "N", v: "8.0", c: "text-green-600" },
          ].map((s) => (
            <div key={s.l} className="text-center py-2.5 bg-gray-50 rounded-lg">
              <span className="text-[9px] font-bold text-gray-400 uppercase">{s.l}</span>
              <p className={`text-base font-bold ${s.c}`}>{s.v}</p>
            </div>
          ))}
        </div>
        <div className="text-center py-3 bg-green-50 rounded-xl border border-green-100">
          <p className="text-sm font-bold text-green-700">Nota geral: 7.7/10</p>
          <p className="text-[11px] text-green-600 mt-0.5">3 oportunidades identificadas</p>
        </div>
      </div>
    ),
  },
  {
    tag: "WhatsApp",
    title: "WhatsApp Integrado",
    description:
      "Gerencie suas conversas do WhatsApp direto no app com interface completa. Envie mensagens, midia, audio e documentos sem sair da plataforma.",
    bullets: [
      "Interface completa de chat",
      "Midia, audio e documentos",
      "Integrado com a Nicole IA",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
    visual: (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_25px_60px_-12px_rgba(0,0,0,0.08)] overflow-hidden">
        <div className="bg-green-600 px-5 py-3 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-white text-sm font-bold">G</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Gabriel Gomide</p>
            <p className="text-[10px] text-green-200">online</p>
          </div>
        </div>
        <div className="p-4 space-y-3 bg-[#ECE5DD] min-h-[180px]">
          <div className="bg-white rounded-xl rounded-tl-sm px-3.5 py-2.5 max-w-[80%] shadow-sm">
            <p className="text-[13px] text-gray-800">Boa tarde! Gostaria de saber mais sobre o plano Pro.</p>
            <p className="text-[9px] text-gray-400 text-right mt-1">14:32</p>
          </div>
          <div className="bg-[#DCF8C6] rounded-xl rounded-tr-sm px-3.5 py-2.5 max-w-[80%] ml-auto shadow-sm">
            <p className="text-[13px] text-gray-800">Claro! Posso te mostrar como funciona na pratica?</p>
            <p className="text-[9px] text-gray-400 text-right mt-1">14:33</p>
          </div>
          <div className="bg-white rounded-xl rounded-tl-sm px-3.5 py-2.5 max-w-[60%] shadow-sm">
            <p className="text-[13px] text-gray-800">Sim, por favor!</p>
            <p className="text-[9px] text-gray-400 text-right mt-1">14:33</p>
          </div>
          <div className="bg-[#DCF8C6] rounded-xl rounded-tr-sm px-3.5 py-2.5 max-w-[85%] ml-auto shadow-sm border-l-2 border-green-500">
            <p className="text-[10px] text-green-600 font-medium mb-1">Sugerido pela Nicole IA</p>
            <p className="text-[13px] text-gray-800">Perfeito! O plano Pro inclui simulacoes ilimitadas e a Nicole IA como copiloto. Quer agendar uma demo?</p>
            <p className="text-[9px] text-gray-400 text-right mt-1">14:34</p>
          </div>
        </div>
        <div className="px-3 py-2.5 bg-white flex items-center gap-2 border-t border-gray-100">
          <span className="text-xs text-gray-400 flex-1 px-2">Digite uma mensagem...</span>
          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z" /></svg>
          </div>
        </div>
      </div>
    ),
  },
  {
    tag: "Nicole IA",
    title: "Copiloto de Vendas",
    description:
      "Assistente IA que sugere respostas em tempo real durante conversas no WhatsApp. Aprende com seus acertos e erros automaticamente e se adapta ao seu estilo.",
    bullets: [
      "Sugestoes em tempo real",
      "Aprende com seu historico",
      "Analise de sentimento do cliente",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      </svg>
    ),
    visual: (
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-[0_25px_60px_-12px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /></svg>
          </div>
          <div>
            <span className="text-sm font-bold text-gray-900 block">Nicole</span>
            <span className="text-[11px] text-gray-400">Copiloto ativo nesta conversa</span>
          </div>
          <div className="ml-auto w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        </div>
        <div className="space-y-3">
          <div className="bg-green-50 border border-green-100 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
              <span className="text-[10px] font-bold text-green-700 uppercase tracking-wider">Sugestao</span>
            </div>
            <p className="text-sm text-green-800 leading-relaxed">Mencione o case da empresa X que teve +40% de conversao. O cliente valoriza dados concretos.</p>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
              <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider">Alerta</span>
            </div>
            <p className="text-sm text-amber-800 leading-relaxed">Cliente demonstrou hesitacao. Reforce o periodo de teste gratis.</p>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
              <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">Sentimento</span>
            </div>
            <p className="text-sm text-blue-800">Interessado mas cauteloso</p>
            <div className="mt-2 h-1.5 bg-blue-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full w-[72%]" />
            </div>
            <p className="text-[10px] text-blue-600 mt-1">Confianca: 72%</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    tag: "Gestao",
    title: "Gestao de Equipe",
    description:
      "Painel administrativo completo para acompanhar a performance de toda a equipe de vendas, com ranking, metricas individuais e visao geral.",
    bullets: [
      "Dashboard de equipe",
      "Ranking de performance",
      "Metricas por vendedor",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    visual: (
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-[0_25px_60px_-12px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-between mb-5">
          <div>
            <span className="text-sm font-bold text-gray-900 block">Performance da Equipe</span>
            <span className="text-[11px] text-gray-400">Ultima semana</span>
          </div>
          <span className="text-[11px] bg-green-50 text-green-600 font-semibold px-2.5 py-1 rounded-full">8 vendedores</span>
        </div>
        <div className="space-y-2.5">
          {[
            { name: "Joao G.", score: "8.4", change: "+0.6", rank: 1 },
            { name: "Maria S.", score: "7.9", change: "+1.2", rank: 2 },
            { name: "Rafael C.", score: "7.3", change: "+0.3", rank: 3 },
            { name: "Ana L.", score: "6.8", change: "-0.2", rank: 4 },
          ].map((v) => (
            <div key={v.name} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <span className="text-[10px] font-bold text-gray-400 w-4">{v.rank}</span>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                <span className="text-[11px] font-bold text-white">{v.name[0]}</span>
              </div>
              <span className="text-sm font-medium text-gray-700 flex-1">{v.name}</span>
              <span className={`text-[11px] font-semibold ${v.change.startsWith("+") ? "text-green-600" : "text-red-500"}`}>
                {v.change}
              </span>
              <span className="text-sm font-bold text-gray-900 w-12 text-right">{v.score}</span>
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
      <div className="py-20 md:py-32">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 bg-green-surface text-primary-green text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            Funcionalidades
          </span>
          <h2 className="font-[var(--font-fustat)] text-[32px] md:text-[48px] font-semibold leading-[110%] tracking-[-0.04em] text-teal-dark">
            Tudo que seu time precisa para{" "}
            <span className="text-primary-green">vender mais</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-text-secondary leading-relaxed max-w-lg mx-auto">
            Da simulacao ao fechamento, cada ferramenta foi pensada para acelerar o aprendizado e maximizar resultados.
          </p>
        </div>

        {/* Interactive Dashboard */}
        <div className="mb-32 max-w-5xl mx-auto">
          <DashboardPreview />
          <p className="text-center text-xs text-text-secondary mt-4 opacity-60">
            Explore a plataforma — clique na sidebar para navegar
          </p>
        </div>

        {/* Feature Sections */}
        <div className="space-y-32">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${
                idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-16 lg:gap-20`}
            >
              {/* Text */}
              <div className="flex-1 max-w-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-green-surface text-primary-green flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <span className="text-xs font-bold text-primary-green bg-green-surface px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {feature.tag}
                  </span>
                </div>
                <h3 className="font-[var(--font-fustat)] text-[28px] md:text-[36px] font-semibold text-teal-dark leading-[115%] tracking-tight mb-5">
                  {feature.title}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed mb-8">
                  {feature.description}
                </p>
                <ul className="space-y-4">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary-green flex items-center justify-center flex-shrink-0">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-teal-medium">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div className="flex-1 w-full max-w-md lg:max-w-lg">
                {feature.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
