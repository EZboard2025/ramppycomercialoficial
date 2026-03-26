export default function HistoricoPage() {
  const categories = [
    {
      title: "Simulacoes",
      desc: "Revise seus roleplays de vendas e avaliacoes SPIN",
      color: "green",
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    },
    {
      title: "Google Meet",
      desc: "Avaliacoes de reunioes reais gravadas pelo bot",
      color: "blue",
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>,
    },
    {
      title: "Reunioes Gravadas",
      desc: "Avaliacoes de audios e videos enviados manualmente",
      color: "purple",
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9333EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0"/></svg>,
    },
    {
      title: "Correcoes",
      desc: "Simulacoes de correcao baseadas nos seus erros",
      color: "amber",
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>,
    },
  ];

  const colorMap: Record<string, { bg: string; hoverBg: string; hoverBorder: string }> = {
    green: { bg: "bg-green-50", hoverBg: "hover:bg-green-50", hoverBorder: "hover:border-green-300" },
    blue: { bg: "bg-blue-50", hoverBg: "hover:bg-blue-50", hoverBorder: "hover:border-blue-300" },
    purple: { bg: "bg-purple-50", hoverBg: "hover:bg-purple-50", hoverBorder: "hover:border-purple-300" },
    amber: { bg: "bg-amber-50", hoverBg: "hover:bg-amber-50", hoverBorder: "hover:border-amber-300" },
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200 mb-6 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Historico</h1>
            <p className="text-gray-500 text-sm">Escolha qual historico deseja acessar</p>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 gap-4">
        {categories.map((cat) => {
          const colors = colorMap[cat.color];
          return (
            <button
              key={cat.title}
              onClick={() => {
                const el = document.getElementById("planos");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className={`group w-full bg-white rounded-2xl p-6 border-2 border-gray-200 transition-all text-left shadow-sm hover:shadow-md ${colors.hoverBg} ${colors.hoverBorder}`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${colors.bg} group-hover:scale-110 transition-transform`}>
                  {cat.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{cat.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{cat.desc}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
