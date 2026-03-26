"use client";

import type React from "react";

const scrollToPlanos = (e: React.MouseEvent) => {
  e.stopPropagation();
  const el = document.getElementById("planos");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function CalendarPage() {
  const days = [
    { label: "DOM", num: 22, today: false },
    { label: "SEG", num: 23, today: false },
    { label: "TER", num: 24, today: false },
    { label: "QUA", num: 25, today: false },
    { label: "QUI", num: 26, today: true },
    { label: "SEX", num: 27, today: false },
    { label: "SAB", num: 28, today: false },
  ];
  const hours = ["8 AM","9 AM","10 AM","11 AM","12 PM","1 PM","2 PM","3 PM","4 PM","5 PM"];
  const calDays = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

  return (
    <div className="min-h-[600px] bg-gray-50 -mx-6 -mt-8 px-6 pt-8">
      {/* Header */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900">Calendario</h1>
          <p className="text-sm text-gray-500">Gerencie sua agenda e grave reunioes automaticamente</p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-xs text-gray-400">gabriel@ramppy.com</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-green-50 border border-green-200 text-green-700">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
          Bot Ativo
          <div className="w-2 h-2 rounded-full bg-green-400" />
        </div>
        <button onClick={scrollToPlanos} className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl shadow-sm">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          <span className="text-sm font-medium text-gray-700">Criar</span>
        </button>
        <button onClick={scrollToPlanos} className="p-1.5 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>
        </button>
        <button onClick={scrollToPlanos} className="flex items-center gap-1.5 px-2.5 py-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg text-xs">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
          Sair
        </button>
      </div>

      {/* Calendar */}
      <div className="flex gap-4">
        {/* Mini calendar */}
        <div className="bg-white rounded-xl border border-gray-200 p-3 w-[200px] shrink-0">
          <div className="flex items-center justify-between mb-2">
            <button onClick={scrollToPlanos} className="p-0.5 hover:bg-gray-100 rounded-full">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <span className="text-sm font-medium text-gray-800">Marco 2026</span>
            <button onClick={scrollToPlanos} className="p-0.5 hover:bg-gray-100 rounded-full">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
          <div className="grid grid-cols-7 mb-0.5">
            {["D","S","T","Q","Q","S","S"].map((d,i) => (
              <div key={i} className="text-center text-[10px] font-medium text-gray-400 py-0.5">{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7">
            {calDays.map((d) => {
              const inWeek = d >= 22 && d <= 28;
              const isToday = d === 26;
              return (
                <div key={d} onClick={scrollToPlanos} className={`relative text-[12px] h-[26px] w-full flex items-center justify-center cursor-pointer ${isToday ? "text-white font-semibold" : inWeek ? "text-blue-700 font-medium bg-blue-50" : "text-gray-700"} ${d === 22 ? "rounded-l-full" : ""} ${d === 28 ? "rounded-r-full" : ""}`}>
                  {isToday && <span className="absolute inset-0 flex items-center justify-center"><span className="w-[24px] h-[24px] bg-blue-600 rounded-full" /></span>}
                  <span className="relative z-[1]">{d}</span>
                </div>
              );
            })}
            {[1,2,3,4].map((d) => (
              <div key={`n${d}`} className="text-[12px] h-[26px] flex items-center justify-center text-gray-300">{d}</div>
            ))}
          </div>
        </div>

        {/* Week view */}
        <div className="flex-1 bg-white rounded-xl border border-gray-200 overflow-hidden">
          {/* Week header */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-200">
            <div className="flex items-center gap-1">
              <button onClick={scrollToPlanos} className="p-1.5 hover:bg-gray-100 rounded-full">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <button onClick={scrollToPlanos} className="p-1.5 hover:bg-gray-100 rounded-full">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
              </button>
              <button onClick={scrollToPlanos} className="px-3 py-1 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 ml-2">Hoje</button>
            </div>
            <h2 className="text-base font-medium text-gray-800">22-28 Mar 2026</h2>
            <div className="w-[120px]" />
          </div>

          {/* Day headers */}
          <div className="grid border-b border-gray-200" style={{ gridTemplateColumns: "56px repeat(7, 1fr)" }}>
            <div />
            {days.map((d) => (
              <div key={d.label} className={`text-center py-2 ${d.today ? "" : ""} border-l border-gray-200`}>
                <div className={`text-[11px] font-medium tracking-wider ${d.today ? "text-blue-600" : "text-gray-500"}`}>{d.label}</div>
                <div className={`text-[26px] font-normal leading-none mt-1 ${d.today ? "w-11 h-11 bg-blue-600 text-white rounded-full inline-flex items-center justify-center" : "text-gray-800"}`}>{d.num}</div>
                <div className={`text-[10px] mt-0.5 ${d.today ? "text-blue-600 font-medium" : "text-gray-400"}`}>Mar</div>
              </div>
            ))}
          </div>

          {/* Time grid */}
          <div className="relative overflow-y-auto" style={{ height: "400px" }}>
            <div className="grid" style={{ gridTemplateColumns: "56px repeat(7, 1fr)", minHeight: "600px" }}>
              {/* Time labels */}
              <div className="relative" style={{ height: "600px" }}>
                {hours.map((h, i) => (
                  <div key={h} className="absolute text-[11px] text-gray-400 text-right pr-2 leading-none" style={{ top: `${i * 60}px` }}>{h}</div>
                ))}
              </div>

              {/* Day columns */}
              {days.map((d, di) => (
                <div key={d.label} className="relative border-l border-gray-200" style={{ height: "600px" }}>
                  {/* Hour lines */}
                  {hours.map((_, i) => (
                    <div key={i} className="absolute left-0 right-0 border-t border-gray-100" style={{ top: `${i * 60}px` }} />
                  ))}
                  {/* Event on Thursday at 12PM */}
                  {di === 4 && (
                    <div className="absolute left-1 right-1 bg-blue-500 text-white rounded-lg p-2 cursor-pointer hover:bg-blue-600 transition-colors" style={{ top: "240px", height: "80px" }}>
                      <div className="flex items-center gap-1 mb-0.5">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/></svg>
                        <span className="text-[10px] font-medium truncate">Ramppy {"<>"} Gabriel ...</span>
                      </div>
                      <span className="text-[10px] opacity-80">12:00</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
