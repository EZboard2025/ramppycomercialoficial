"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import RamppyLogo from "./RamppyLogo";
import ProfilePage from "./ProfilePage";
import SimulationPage from "./SimulationPage";
import CalendarPage from "./CalendarPage";
import HistoricoPage from "./HistoricoPage";

/* ─── Lucide-style SVG icons (matching the real Ramppy sidebar) ─── */
const icons = {
  house: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
      <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </svg>
  ),
  user: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  users: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  messageSquare: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  calendar: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2v4" /><path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" />
      <path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" />
    </svg>
  ),
  video: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  ),
  clock: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  trendingUp: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  ),
  link2: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 17H7A5 5 0 0 1 7 7h2" />
      <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
      <line x1="8" x2="16" y1="12" y2="12" />
    </svg>
  ),
  download: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  ),
  settings: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  logOut: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  ),
  play: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  ),
  eye: (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  arrowRight: (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  ),
  chevronLeft: (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  ),
  chevronRight: (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  ),
  layoutGrid: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  ),
  bell: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  ),
  list: (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12h.01" /><path d="M3 18h.01" /><path d="M3 6h.01" />
      <path d="M8 12h13" /><path d="M8 18h13" /><path d="M8 6h13" />
    </svg>
  ),
  sparkles: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      <path d="M20 3v4" /><path d="M22 5h-4" />
    </svg>
  ),
  send: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
    </svg>
  ),
};

const scrollToPlanos = (e: React.MouseEvent) => { e.stopPropagation(); const el = document.getElementById("planos"); if (el) el.scrollIntoView({ behavior: "smooth" }); };

const sidebarItems = [
  { key: "home", icon: icons.house, label: "Home" },
  { key: "perfil", icon: icons.user, label: "Meu Perfil" },
  { key: "simulacao", icon: icons.users, label: "Simulacao" },
  { key: "whatsapp", icon: icons.messageSquare, label: "WhatsApp IA" },
  { key: "calendario", icon: icons.calendar, label: "Calendario" },
  { key: "meet", icon: icons.video, label: "Analise Meet" },
  { key: "historico", icon: icons.clock, label: "Historico" },
  { key: "gestao", icon: icons.trendingUp, label: "Gestao" },
  { key: "publica", icon: icons.link2, label: "Simulacao Publica" },
  { key: "download", icon: icons.download, label: "Download" },
];

/* ─── Calendar grid ─── */
function CalendarGrid() {
  const days = ["D", "S", "T", "Q", "Q", "S", "S"];
  const cells = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,
  ];
  const today = 26;
  return (
    <div className="select-none">
      <div className="flex items-center justify-between mb-2">
        <button onClick={scrollToPlanos} className="p-0.5 hover:bg-gray-100 rounded-full transition-colors text-gray-500">{icons.chevronLeft}</button>
        <span className="text-xs font-medium text-gray-700">Marco 2026</span>
        <button onClick={scrollToPlanos} className="p-0.5 hover:bg-gray-100 rounded-full transition-colors text-gray-500">{icons.chevronRight}</button>
      </div>
      <div className="grid grid-cols-7 mb-0.5">
        {days.map((d, i) => (
          <div key={i} className="text-center text-[10px] font-medium text-gray-400 py-0.5">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {cells.map((d) => (
          <div key={d} className={`relative text-[11px] h-[24px] w-full flex items-center justify-center ${d === today ? "text-white font-semibold" : "text-gray-600"}`}>
            {d === today && (
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-[22px] h-[22px] bg-green-600 rounded-full" />
              </span>
            )}
            <span className="relative z-[1]">{d}</span>
          </div>
        ))}
        {[1,2,3,4].map((d) => (
          <div key={`next-${d}`} className="relative text-[11px] h-[24px] w-full flex items-center justify-center text-gray-300">
            <span className="relative z-[1]">{d}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Performance Chart (SVG matching Recharts output) ─── */
function PerformanceChart() {
  const linePath = "M0,76 C8,75 16,74 25,71 C33,68 41,50 50,50 C58,50 66,51 74,51 C83,51 91,43 99,40 C107,37 115,36 124,33 C132,30 140,23 148,20 C157,17 165,15 173,15 C181,15 190,21 198,23 C206,26 214,30 223,30 C231,30 239,30 247,30 C256,30 264,30 272,30 C280,30 289,31 297,31 C305,31 313,31 322,30 C330,29 338,20 346,20 C355,20 363,41 371,41 C379,41 388,36 396,36 C404,36 412,40 421,46 C429,53 437,170 446,170 C454,170 462,125 470,81";
  const areaPath = linePath + " L470,170 L0,170 Z";

  return (
    <svg viewBox="0 0 470 175" className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#22c55e" stopOpacity="0.2" />
          <stop offset="95%" stopColor="#22c55e" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Grid */}
      {[0, 33, 66, 99, 132, 165].map((y) => (
        <line key={y} x1="0" y1={y} x2="470" y2={y} stroke="#f3f4f6" strokeWidth="1" strokeDasharray="3 3" />
      ))}
      {/* Area */}
      <path d={areaPath} fill="url(#chartGrad)" fillOpacity="0.6" />
      {/* Line */}
      <path d={linePath} fill="none" stroke="#22c55e" strokeWidth="2" />
      {/* Dots */}
      {[[0,76],[25,71],[50,50],[74,51],[99,40],[124,33],[148,20],[173,15],[198,23],[223,30],[247,30],[272,30],[297,31],[322,30],[346,20],[371,41],[396,36],[421,46],[446,170],[470,81]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="#22c55e" fillOpacity="0.6" stroke="#22c55e" />
      ))}
    </svg>
  );
}

/* ─── Nicole Chat Panel ─── */
function NicolePanel() {
  return (
    <div className="w-[280px] border-l border-gray-200 bg-white flex flex-col shrink-0">
      {/* Header */}
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-green-600">{icons.sparkles}</span>
          <span className="text-sm font-bold text-gray-900">Nicole</span>
          <span className="text-[10px] bg-green-50 text-green-600 font-semibold px-2 py-0.5 rounded border border-green-100">IA Ramppy</span>
        </div>
        <button onClick={scrollToPlanos} className="text-gray-400 hover:text-gray-600 text-lg leading-none">&times;</button>
      </div>

      {/* Body */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
          </svg>
        </div>
        <h3 className="text-sm font-bold text-gray-900 mb-1">Ola, Joao! Sou a Nicole, sua assistente pessoal.</h3>
        <p className="text-xs text-gray-500 leading-relaxed">Performance, reunioes, treinos, agenda e gestao da equipe</p>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center bg-gray-50 rounded-xl px-3 py-2.5 border border-gray-200">
          <span className="text-xs text-gray-400 flex-1">Fale com a Nicole...</span>
          <button onClick={scrollToPlanos} className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center text-white shrink-0">
            {icons.send}
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 pb-4 space-y-2">
        {[
          { emoji: "🎯", text: "Quem precisa de atencao?" },
          { emoji: "📊", text: "Compare os vendedores" },
          { emoji: "📈", text: "Como esta minha performance?" },
        ].map((a) => (
          <button key={a.text} onClick={scrollToPlanos} className="w-full flex items-center gap-2 bg-gray-50 hover:bg-gray-100 rounded-lg px-3 py-2 transition-colors text-left">
            <span className="text-sm">{a.emoji}</span>
            <span className="text-xs font-medium text-gray-700">{a.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ─── Home Page Content (matching real Ramppy layout) ─── */
function HomePage() {
  return (
    <div className="grid grid-cols-12 gap-4 animate-[fadeIn_0.3s_ease]">
      {/* Col 1: Performance chart + SPIN metrics */}
      <div className="col-span-5 space-y-4">
        {/* Evolucao de Performance */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 cursor-pointer hover:border-green-300 hover:shadow-sm transition-all">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-gray-900">Evolucao de Performance</h3>
            <div className="flex gap-1 bg-gray-100 rounded-lg p-0.5">
              <button onClick={scrollToPlanos} className="px-2.5 py-1 rounded-md text-[10px] font-semibold transition-all bg-green-500 text-white">Roleplay</button>
              <button onClick={scrollToPlanos} className="px-2.5 py-1 rounded-md text-[10px] font-semibold transition-all text-gray-500 hover:text-gray-700">Meet Real</button>
            </div>
          </div>
          <div className="h-[200px]">
            <PerformanceChart />
          </div>
        </div>

        {/* Metricas SPIN */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 cursor-pointer hover:border-green-300 hover:shadow-sm transition-all">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Metricas SPIN</h3>
          <div className="space-y-4">
            {[
              { letter: "S", label: "Situacao", value: 7.5, pct: 74.5, color: "green", focus: false },
              { letter: "P", label: "Problema", value: 7.5, pct: 75.5, color: "green", focus: false },
              { letter: "I", label: "Implicacao", value: 6.7, pct: 66.5, color: "yellow", focus: true },
              { letter: "N", label: "Necessidade", value: 7.0, pct: 70.5, color: "green", focus: false },
            ].map((s) => (
              <div key={s.letter}>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-gray-700 w-5">{s.letter}</span>
                    <span className="text-xs text-gray-500">{s.label}</span>
                    {s.focus && <span className="text-[10px] font-semibold text-red-500 bg-red-50 px-1.5 py-0.5 rounded border border-red-100">foco</span>}
                  </div>
                  <span className={`text-sm font-bold ${s.color === "green" ? "text-green-600" : "text-yellow-600"}`}>{s.value}</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full transition-all duration-500 ${s.color === "green" ? "bg-green-500" : "bg-yellow-500"}`} style={{ width: `${s.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Col 2: Pratica Direcionada + Agenda */}
      <div className="col-span-4 space-y-4">
        {/* Pratica Direcionada */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-4 flex items-start gap-3">
            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0 text-green-600">
              {icons.video}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <h3 className="text-sm font-semibold text-gray-900">Pratica Direcionada</h3>
                <span className="px-2 py-0.5 bg-amber-50 text-amber-600 text-[10px] font-medium rounded border border-amber-100">Pendente</span>
              </div>
              <div className="flex items-center gap-1.5 mb-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" className="flex-shrink-0"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/></svg>
                <span className="text-[11px] text-blue-600 font-medium">Google Meet</span>
                <span className="text-[10px] text-gray-400">•</span>
                <span className="text-[11px] text-gray-600">Gabriel Gomide</span>
                <span className="text-[10px] text-gray-400">•</span>
                <span className="text-[11px] font-semibold text-amber-600">6.0/10</span>
                <span className="text-[10px] text-gray-400">•</span>
                <span className="text-[10px] text-gray-400">18/03</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-100">Situacao</span>
                <span className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded border border-gray-100">Problema</span>
                <span className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded border border-gray-100">Implicacao</span>
              </div>
            </div>
            <button onClick={scrollToPlanos} className="flex items-center gap-1 text-xs text-green-600 hover:text-green-700 font-medium transition-colors flex-shrink-0 whitespace-nowrap">
              {icons.eye} Ver detalhes
            </button>
          </div>
          <div className="p-4 pt-0 space-y-2">
            <button onClick={scrollToPlanos} className="w-full flex items-center justify-center gap-2 py-2.5 bg-green-50 hover:bg-green-100 text-green-700 text-sm font-medium rounded-lg transition-colors border border-green-200">
              {icons.play} Iniciar Simulacao
            </button>
            <button onClick={scrollToPlanos} className="w-full flex items-center justify-center gap-2 py-2 bg-amber-50 hover:bg-amber-100 text-amber-700 text-xs font-medium rounded-lg transition-colors border border-amber-200">
              {icons.list} Voce tem 8 simulacoes pendentes — Ver todas
            </button>
          </div>
        </div>

        {/* Agenda */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-900">Agenda</h3>
            <button onClick={scrollToPlanos} className="text-xs text-green-600 hover:text-green-700 font-medium flex items-center gap-1 transition-colors">
              Ver completo {icons.arrowRight}
            </button>
          </div>
          <CalendarGrid />
          {/* Hoje - reuniao */}
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Hoje</p>
            <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-50 border border-gray-100">
              <span className="text-xs text-gray-500 font-medium">12:00</span>
              <span className="text-xs text-gray-700 flex-1">Ramppy {"<>"} Gabriel Gomide</span>
              <span className="text-gray-400">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/></svg>
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Col 3: Sessoes + Historico + Nota Media */}
      <div className="col-span-3 space-y-4">
        {/* Sessoes */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-9 h-9 bg-green-50 rounded-lg flex items-center justify-center text-green-600 border border-green-100">
              {icons.trendingUp}
            </div>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Sessoes</span>
          </div>
          <div className="text-4xl font-bold text-gray-900 leading-tight">20</div>
          <p className="text-xs text-gray-500 mt-1">sessoes avaliadas</p>
        </div>

        {/* Historico */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 cursor-pointer hover:border-green-300 hover:shadow-sm transition-all">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-500">
              {icons.clock}
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 leading-tight">Historico</h3>
              <p className="text-[11px] text-gray-400">Todas as sessoes</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">Simulacoes, Follow-ups e analises de Meet.</p>
        </div>

        {/* Nota Media */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-gray-500">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
            </div>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Nota Media</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-3xl font-bold text-gray-900">7.5</span>
            <span className="text-sm font-semibold text-green-500">↗ +5.0</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">de 20 sessoes</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Placeholder pages for other sidebar items ─── */
function PlaceholderPage({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-center justify-center h-full min-h-[400px]">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-green-600">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-sm text-gray-500 mb-6">{description}</p>
        <p className="text-sm text-gray-400 mb-4">Essa funcionalidade esta disponivel no plano Pro.</p>
        <a href="#planos" className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-xl transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          Conhecer planos
        </a>
      </div>
    </div>
  );
}

const pages: Record<string, { title: string; description: string }> = {
  perfil: { title: "Meu Perfil", description: "Veja suas metricas SPIN, evolucao e conexoes." },
  simulacao: { title: "Simulacao", description: "Configure persona, objecoes e inicie um roleplay com IA." },
  whatsapp: { title: "WhatsApp IA", description: "Gerencie conversas com o copiloto Nicole em tempo real." },
  calendario: { title: "Calendario", description: "Gerencie sua agenda e grave reunioes automaticamente." },
  meet: { title: "Analise Meet", description: "Envie o bot para suas reunioes e receba avaliacao SPIN." },
  historico: { title: "Historico", description: "Todas as simulacoes, follow-ups e analises de Meet." },
  gestao: { title: "Gestao", description: "Dashboard da equipe com metricas de cada vendedor." },
  publica: { title: "Simulacao Publica", description: "Compartilhe um link de simulacao para prospects." },
  download: { title: "Download", description: "Baixe o app desktop com a bubble flutuante da Nicole." },
};

/* ─── Main Dashboard Component ─── */
const autoPages = ["home", "perfil", "simulacao", "calendario", "historico"];

export default function DashboardInteractive() {
  const [activeNav, setActiveNav] = useState("home");
  const [userInteracted, setUserInteracted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (userInteracted) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setActiveNav((prev) => {
        const idx = autoPages.indexOf(prev);
        return autoPages[(idx + 1) % autoPages.length];
      });
    }, 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [userInteracted]);

  return (
    <div className="min-h-screen text-gray-900 flex bg-white rounded-lg overflow-hidden" style={{ width: 1360, height: 820 }}>
      {/* Sidebar */}
      <aside className="w-16 bg-[#0D4A3A] flex flex-col shrink-0">
        {/* Logo */}
        <div className="p-2 border-b border-white/10 h-14 flex items-center justify-center">
          <img src="/images/Ramppy logo branca site.png" alt="Ramppy" className="h-8 object-contain" />
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 px-2 overflow-y-auto space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.key}
              onClick={(e) => {
                e.stopPropagation();
                setUserInteracted(true);
                if (["whatsapp", "meet", "gestao", "publica", "download"].includes(item.key)) {
                  const el = document.getElementById("planos");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                } else {
                  setActiveNav(item.key);
                }
              }}
              title={item.label}
              className={`relative w-full flex items-center justify-center px-3 py-2.5 rounded-lg transition-colors duration-150 ${
                activeNav === item.key
                  ? "bg-green-500/20 text-white font-semibold"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {activeNav === item.key && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-green-500 rounded-r-full" />
              )}
              {item.icon}
            </button>
          ))}
        </nav>

        {/* Bottom */}
        <div className="p-2 border-t border-white/10 space-y-1">
          <button onClick={scrollToPlanos} className="w-full flex items-center justify-center px-3 py-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all">
            {icons.settings}
          </button>
          <button onClick={scrollToPlanos} className="w-full flex items-center justify-center px-3 py-2.5 rounded-lg text-gray-300 hover:text-red-400 hover:bg-red-500/10 transition-all">
            {icons.logOut}
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 h-full overflow-y-auto bg-[#FAFBFC]">
        <div className="py-8 px-6">
          <div>
            {/* Header - only on home */}
            {activeNav === "home" && (
              <div className="mb-8 flex items-center">
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-gray-900">Ola, Visitante</h1>
                  <p className="text-xs text-gray-400 mt-0.5">voce@email.com</p>
                </div>
                <div className="flex items-center gap-1">
                  <button onClick={scrollToPlanos} className="p-2.5 rounded-xl hover:bg-gray-100 text-gray-400">{icons.layoutGrid}</button>
                  <button onClick={scrollToPlanos} className="p-2.5 rounded-xl hover:bg-gray-100 text-gray-500">{icons.bell}</button>
                </div>
              </div>
            )}

            {/* Content */}
            <div key={activeNav} className="animate-[fadeSlideIn_0.4s_ease-out]">
              {activeNav === "home" ? (
                <HomePage />
              ) : activeNav === "perfil" ? (
                <ProfilePage />
              ) : activeNav === "simulacao" ? (
                <SimulationPage />
              ) : activeNav === "calendario" ? (
                <CalendarPage />
              ) : activeNav === "historico" ? (
                <HistoricoPage />
              ) : (
                <PlaceholderPage
                  title={pages[activeNav]?.title ?? "Pagina"}
                  description={pages[activeNav]?.description ?? ""}
                />
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Nicole Panel */}
      <NicolePanel />
    </div>
  );
}
