"use client";

import { useState } from "react";

const scrollToPlanos = () => { const el = document.getElementById("planos"); if (el) el.scrollIntoView({ behavior: "smooth" }); };

const allPersonas = [
  { name: "Gerente Comercial", desc: "Software de gestao para pequenos negocios. LTV...", score: "9.0", group: "franquia" },
  { name: "Dono de franquia", desc: "Clinica medica, faturamento de R$1.000.000,00/mes", score: "6.8", group: "franquia" },
  { name: "Head de vendas", desc: "EdTech focada em cursos profissionais...", score: "8.7", group: null },
  { name: "Gerente de vendas", desc: "Software de gestao para pequenos negocios...", score: "8.0", group: null },
];

const allObjections = [
  { text: "Demonstra inseguranca em adotar um treinamento novo", dot: "green" },
  { text: "Confunde nossa ferramenta com metodologia", dot: "red" },
  { text: "Nao consegue associar o uso de 15/20 minutos diarios", dot: "green" },
  { text: "Tempo pra usar a plataforma", dot: null },
  { text: "Valor dos planos parece alto", dot: null },
  { text: "Nao sei se todos os membros da minha equipe irao se adaptar", dot: "green" },
  { text: "Estamos com orcamento apertado", dot: null },
  { text: "Nao estou convencido de que a metodologia SPIN Selling", dot: null },
];

const temperaments = ["Analitico", "Empatico", "Determinado", "Indeciso", "Sociavel"];

export default function SimulationPage() {
  const [selectedPersona, setSelectedPersona] = useState(0);
  const [selectedObjs, setSelectedObjs] = useState<number[]>([]);
  const [selectedTemp, setSelectedTemp] = useState(0);
  const [hideConfig, setHideConfig] = useState(false);

  function toggleObj(i: number) {
    setSelectedObjs((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  }

  function randomize() {
    setSelectedPersona(Math.floor(Math.random() * allPersonas.length));
    setSelectedTemp(Math.floor(Math.random() * temperaments.length));
    const count = Math.floor(Math.random() * 3) + 1;
    const shuffled = allObjections.map((_, i) => i).sort(() => Math.random() - 0.5);
    setSelectedObjs(shuffled.slice(0, count));
  }

  return (
    <div className="flex gap-6">
      {/* Left: Config */}
      <div className="flex-1 min-w-0 space-y-4">
        {/* Perfil do Cliente */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-green-50">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
            </div>
            <h3 className="text-sm font-semibold text-gray-900">Perfil do Cliente</h3>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Idade</span>
                <span className="text-lg font-bold text-green-600">30 anos</span>
              </div>
              <div className="w-full h-2 rounded-lg bg-gray-200 relative">
                <div className="absolute left-0 top-0 h-full bg-green-500 rounded-lg" style={{ width: "29%" }} />
                <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-green-500 rounded-full shadow" style={{ left: "29%" }} />
              </div>
              <div className="flex justify-between text-[10px] mt-1 text-gray-400">
                <span>18</span><span>60</span>
              </div>
              <div className="mt-2.5 p-2.5 bg-gray-50 rounded-lg border border-gray-100">
                <p className="text-xs font-medium text-green-600 mb-0.5">25 a 34 anos</p>
                <p className="text-[10px] text-gray-500"><span className="text-gray-700">Tom:</span> Pragmatico e orientado a resultados</p>
                <p className="text-[10px] text-gray-500"><span className="text-gray-700">Comportamento:</span> Foco em ROI • Aceita risco calculado</p>
              </div>
            </div>
            <div>
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider block mb-2">Temperamento</span>
              <div className="flex flex-wrap gap-2">
                {temperaments.map((t, i) => (
                  <button key={t} onClick={(e) => { e.stopPropagation(); setSelectedTemp(i); scrollToPlanos(); }} className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${i === selectedTemp ? "bg-green-500 text-white border border-green-500" : "bg-gray-50 text-gray-600 border border-gray-200 hover:border-gray-300"}`}>
                    {t}
                  </button>
                ))}
              </div>
              <div className="mt-2.5 p-2.5 bg-green-50/50 rounded-lg border border-green-100">
                <p className="text-xs font-medium text-green-600 mb-0.5">{temperaments[selectedTemp]}</p>
                <p className="text-[10px] text-gray-500"><span className="text-gray-700">Estilo:</span> Formal, racional, calmo e preciso</p>
                <p className="text-[10px] text-gray-500"><span className="text-gray-700">Gatilhos:</span> Dados concretos, estatisticas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Persona do Cliente */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-green-50">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3 className="text-sm font-semibold text-gray-900">Persona do Cliente</h3>
          </div>
          <div className="relative mb-3">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" className="absolute left-3 top-1/2 -translate-y-1/2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <input readOnly placeholder="Buscar persona..." className="w-full pl-9 pr-8 py-2 text-xs bg-gray-50 border border-gray-200 rounded-lg placeholder:text-gray-400" />
          </div>
          {/* Franquia */}
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Personas franquia</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {allPersonas.filter(p => p.group === "franquia").map((p, i) => {
                const idx = allPersonas.indexOf(p);
                const isSelected = idx === selectedPersona;
                return (
                  <div key={p.name} onClick={(e) => { e.stopPropagation(); setSelectedPersona(idx); scrollToPlanos(); }} className={`p-3 rounded-xl border transition-all duration-200 cursor-pointer ${isSelected ? "border-2 border-green-500 bg-green-50/50 shadow-sm" : "border border-gray-200 bg-white hover:border-green-300 hover:shadow-sm"}`}>
                    <div className="flex items-center gap-2.5">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${isSelected ? "bg-green-100" : "bg-gray-100"}`}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={isSelected ? "#22c55e" : "#9CA3AF"} strokeWidth="2"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{p.name}</p>
                        <p className="text-[10px] text-gray-500 truncate">{p.desc}</p>
                      </div>
                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${parseFloat(p.score) >= 8 ? "bg-green-50 text-green-700" : "bg-yellow-50 text-yellow-700"}`}>{p.score}</span>
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        {isSelected && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Sem Etiqueta */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Sem Etiqueta</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {allPersonas.filter(p => !p.group).map((p) => {
                const idx = allPersonas.indexOf(p);
                const isSelected = idx === selectedPersona;
                return (
                  <div key={p.name} onClick={(e) => { e.stopPropagation(); setSelectedPersona(idx); scrollToPlanos(); }} className={`p-3 rounded-xl border transition-all duration-200 cursor-pointer ${isSelected ? "border-2 border-green-500 bg-green-50/50 shadow-sm" : "border border-gray-200 bg-white hover:border-green-300 hover:shadow-sm"}`}>
                    <div className="flex items-center gap-2.5">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${isSelected ? "bg-green-100" : "bg-gray-100"}`}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={isSelected ? "#22c55e" : "#9CA3AF"} strokeWidth="2"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{p.name}</p>
                        <p className="text-[10px] text-gray-500 truncate">{p.desc}</p>
                      </div>
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${parseFloat(p.score) >= 8 ? "bg-green-50 text-green-700" : "bg-yellow-50 text-yellow-700"}`}>{p.score}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Objecoes */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-green-50">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
              </div>
              <h3 className="text-sm font-semibold text-gray-900">Objecoes</h3>
            </div>
            <span className="text-xs font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-500">{selectedObjs.length} selecionadas</span>
          </div>
          <div className="relative mb-3">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" className="absolute left-3 top-1/2 -translate-y-1/2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <input readOnly placeholder="Buscar objecao..." className="w-full pl-9 pr-8 py-2 text-xs bg-gray-50 border border-gray-200 rounded-lg placeholder:text-gray-400" />
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {allObjections.map((obj, i) => (
              <button key={i} onClick={(e) => { e.stopPropagation(); toggleObj(i); scrollToPlanos(); }} className="w-full flex items-start gap-2 px-2.5 py-2 rounded-lg text-left hover:bg-gray-50 border border-transparent">
                <div className={`w-3.5 h-3.5 mt-0.5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${selectedObjs.includes(i) ? "bg-green-500 border-green-500" : "border-gray-300"}`}>
                  {selectedObjs.includes(i) && <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>}
                </div>
                <span className="text-xs leading-snug flex-1 line-clamp-2 text-gray-700">{obj.text}</span>
                {obj.dot && <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1 ${obj.dot === "green" ? "bg-green-500" : "bg-red-500"}`} />}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Session Summary */}
        <div className="w-[280px] shrink-0">
          <div className="bg-white rounded-xl border border-gray-200 p-5 sticky top-8">
            <h3 className="text-sm font-bold text-gray-900 mb-5 uppercase tracking-wider">Resumo da Sessao</h3>
            <div className="space-y-4">
              {[
                { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>, label: "Objetivo", value: "Marcar teste gratis" },
                { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>, label: "Persona", value: allPersonas[selectedPersona].name },
                { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={selectedObjs.length > 0 ? "#22c55e" : "#9CA3AF"} strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>, label: "Objecoes", value: hideConfig ? "Oculto" : selectedObjs.length > 0 ? selectedObjs.map(i => allObjections[i].text.slice(0, 25) + "...").join(", ") : "—" },
                { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>, label: "Perfil", value: hideConfig ? "Oculto" : `30 anos • ${temperaments[selectedTemp]}` },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className="mt-0.5">{item.icon}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{item.label}</p>
                    <p className="text-sm font-medium text-gray-900 truncate">{item.value}</p>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" className="ml-auto mt-0.5 flex-shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>
                </div>
              ))}
            </div>

            <button onClick={(e) => { e.stopPropagation(); scrollToPlanos(); }} className="w-full mt-6 flex items-center justify-center gap-2 py-3.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold rounded-xl transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
              Iniciar Simulacao
            </button>
            <p className="text-[10px] text-gray-400 text-center mt-2">
              {selectedObjs.length === 0 ? "Selecione: objecao" : "Pronto para iniciar"}
            </p>

            <div className="grid grid-cols-2 gap-2 mt-4">
              <button onClick={(e) => { e.stopPropagation(); randomize(); scrollToPlanos(); }} className="flex items-center justify-center gap-1.5 py-2 rounded-lg border border-gray-200 text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"/><path d="m18 2 4 4-4 4"/><path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2"/><path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8"/><path d="m18 14 4 4-4 4"/></svg>
                Aleatorio
              </button>
              <button onClick={(e) => { e.stopPropagation(); setHideConfig(!hideConfig); scrollToPlanos(); }} className="flex items-center justify-center gap-1.5 py-2 rounded-lg border border-gray-200 text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg>
                Ocultar
              </button>
            </div>
          </div>
        </div>
    </div>
  );
}
