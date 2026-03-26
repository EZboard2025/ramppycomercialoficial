"use client";

import type React from "react";
import { useState } from "react";

const scrollToPlanos = (e: React.MouseEvent) => { e.stopPropagation(); const el = document.getElementById("planos"); if (el) el.scrollIntoView({ behavior: "smooth" }); };

const PerformanceChartProfile = () => (
  <svg viewBox="0 0 630 265" className="w-full h-full" preserveAspectRatio="none">
    {[0, 53, 106, 159, 212, 265].map((y) => (
      <line key={y} x1="0" y1={y} x2="630" y2={y} stroke="#f3f4f6" strokeWidth="1" strokeDasharray="3 3" />
    ))}
    <path d="M0,40 C23,40 47,40 70,40 C93,40 117,40 140,40 C163,40 187,42 210,42 C233,42 257,42 280,40 C303,38 327,24 350,24 C373,24 397,58 420,58 C443,58 467,50 490,50 C513,50 537,56 560,66 C583,77 607,100 630,122" fill="none" stroke="#22c55e" strokeWidth="2.5" />
    {[[0,40],[70,40],[140,40],[210,42],[280,40],[350,24],[420,58],[490,50],[560,66],[630,122]].map(([x,y],i) => (
      <circle key={i} cx={x} cy={y} r="3" fill="#22c55e" />
    ))}
  </svg>
);

const MiniChart = ({ points }: { points: number[] }) => {
  const max = 10, h = 60, w = 120;
  const step = w / (points.length - 1);
  const path = points.map((p, i) => `${i === 0 ? "M" : "L"}${i * step},${h - (p / max) * h}`).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full">
      <rect x="0" y="0" width={w} height={h} fill="#f0fdf4" rx="4" />
      <path d={path} fill="none" stroke="#22c55e" strokeWidth="2" />
      {points.map((p, i) => <circle key={i} cx={i * step} cy={h - (p / max) * h} r="2.5" fill="#22c55e" />)}
    </svg>
  );
};

/* ─── Tab: Visao Geral ─── */
function TabVisaoGeral() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2">
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">Evolucao de Performance</h2>
                <p className="text-gray-500 text-sm">19 sessoes</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex gap-1 bg-gray-100 rounded-lg p-0.5">
                <button onClick={scrollToPlanos} className="px-3 py-1.5 rounded-md text-xs font-semibold bg-green-500 text-white">Roleplay</button>
                <button onClick={scrollToPlanos} className="px-3 py-1.5 rounded-md text-xs font-semibold text-gray-500">Meet Real</button>
              </div>
              <div className="bg-gray-50 rounded-xl p-3 border border-gray-200 text-center">
                <div className="text-[10px] font-bold text-green-600 mb-1 tracking-wider uppercase">Ultima Simulacao</div>
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <span className="text-xs font-medium text-gray-500">Nota:</span>
                  <span className="text-xl font-bold text-yellow-600">5.4</span>
                </div>
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg font-bold text-sm bg-green-50 text-green-600">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                  +5.4
                </div>
              </div>
            </div>
          </div>
          <div className="h-[260px]"><PerformanceChartProfile /></div>
          <div className="flex items-center justify-end mt-3">
            <button onClick={scrollToPlanos} className="flex items-center gap-1.5 text-sm font-medium text-green-600">Ver tudo <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></button>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>
            </div>
            <h3 className="text-base font-bold text-gray-900">Metricas SPIN</h3>
          </div>
          <div className="space-y-3">
            {[
              { letter: "S", label: "Situacao", value: "7.5", color: "green" },
              { letter: "P", label: "Problema", value: "7.5", color: "green" },
              { letter: "I", label: "Implicacao", value: "6.7", color: "yellow" },
              { letter: "N", label: "Necessidade", value: "7.0", color: "green" },
            ].map((s) => (
              <div key={s.letter} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-8 rounded-full ${s.color === "green" ? "bg-green-500" : "bg-yellow-500"}`} />
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wide font-bold">{s.letter}</span>
                    <p className="text-sm font-medium text-gray-900">{s.label}</p>
                  </div>
                </div>
                <span className={`text-xl font-bold ${s.color === "green" ? "text-green-600" : "text-yellow-600"}`}>{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Tab: Analise SPIN ─── */
function TabAnaliseSpin() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {[
          { letter: "S", label: "Situacao", value: "7.5", trend: "+6.0", color: "green", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg> },
          { letter: "P", label: "Problema", value: "7.5", trend: "+6.0", color: "green", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/></svg> },
          { letter: "I", label: "Implicacao", value: "6.7", trend: "+5.0", color: "yellow", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EAB308" strokeWidth="2"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg> },
          { letter: "N", label: "Necessidade", value: "7.0", trend: "+3.0", color: "green", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg> },
        ].map((s) => (
          <div key={s.letter} className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${s.color === "green" ? "bg-green-50" : "bg-yellow-50"}`}>{s.icon}</div>
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wide font-bold">{s.letter}</span>
                  <p className="text-sm font-semibold text-gray-900">{s.label}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-green-600">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/></svg>
                <span className="text-xs font-bold">{s.trend}</span>
              </div>
            </div>
            <div className={`text-4xl font-bold mb-3 ${s.color === "green" ? "text-green-600" : "text-yellow-600"}`}>{s.value}</div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className={`h-full rounded-full ${s.color === "green" ? "bg-green-500" : "bg-yellow-500"}`} style={{ width: `${parseFloat(s.value) * 10}%` }} />
            </div>
          </div>
        ))}
      </div>

      {/* Pontos Fortes */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>
          <div>
            <h3 className="text-base font-bold text-gray-900">Pontos Fortes Recorrentes</h3>
            <p className="text-xs text-gray-500">Ultimas 5 sessoes</p>
          </div>
        </div>
        <div className="space-y-3">
          {[
            "Uso consistente de perguntas abertas para mapeamento de situacao e problema",
            "Empatia genuina validando preocupacao do cliente e contexto operacional",
            "Resposta consultiva as objecoes com prova social e adaptacao a visao do cliente",
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-3 p-3 bg-green-50/50 rounded-xl border border-green-100">
              <span className="w-6 h-6 rounded-full bg-green-100 text-green-700 text-xs font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
              <div>
                <p className="text-sm text-gray-900">{text}</p>
                <span className="text-[10px] text-green-600 font-medium">#16</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Tab: Por Persona ─── */
function TabPorPersona() {
  const personas = [
    { name: "Dono de franquia de Clinica medica, faturamento de R$1.000.000,00/mes", score: "7.7", practices: 9, lastDate: "24/03/2026", points: [6, 7, 7.5, 8, 8.5, 8, 8.5, 9, 7.5] },
    { name: "Gerente Comercial, Software de gestao para pequenos negocios", score: "8.4", practices: 2, lastDate: "09/12/2025", points: [7.5, 8.5] },
    { name: "Head de vendas de EdTech focada em cursos profissionais", score: "8.9", practices: 3, lastDate: "15/02/2026", points: [8, 9, 9.5] },
    { name: "Gerente de vendas de Software de gestao para pequenos negocios", score: "8.5", practices: 4, lastDate: "20/01/2026", points: [7, 8, 9, 8.5] },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {personas.map((p, i) => (
        <div key={i} className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 line-clamp-2">{p.name}</p>
              <p className="text-[10px] text-gray-400 mt-0.5">Sessao Antiga (Segment)</p>
            </div>
            <div className="text-right flex-shrink-0">
              <span className="text-[9px] font-bold text-red-500 uppercase tracking-wider">Media</span>
              <p className={`text-2xl font-bold ${parseFloat(p.score) >= 8 ? "text-green-600" : "text-yellow-600"}`}>{p.score}</p>
            </div>
          </div>
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-green-600 font-medium">Praticas realizadas</span>
            <span className="font-bold text-gray-900">{p.practices}</span>
          </div>
          <div className="flex items-center justify-between text-xs mb-3">
            <span className="text-green-600 font-medium">Ultima pratica</span>
            <span className="font-bold text-gray-900">{p.lastDate}</span>
          </div>
          <p className="text-xs text-gray-500 mb-2">Evolucao das notas</p>
          <div className="h-[80px]">
            <MiniChart points={p.points} />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Tab: Por Objecao ─── */
function TabPorObjecao() {
  const objections = [
    { text: "Cliente confunde nossa ferramenta com metodologia, comparando a ramppy com um...", score: "7.0", scoreColor: "green", times: 1, best: "7.0", pct: 70 },
    { text: "Cliente nao consegue associar o uso de 15/20 minutos diarios de treinamento como algo...", score: "6.5", scoreColor: "yellow", times: 2, best: "7.0", pct: 65 },
    { text: "Nao sei se todos os membros da minha equipe irao se adaptar a um treinamento online com IA.", score: "8.0", scoreColor: "green", times: 1, best: "8.0", pct: 80 },
    { text: "Cliente demonstra inseguranca em adotar um treinamento novo porque acredita que seu tim...", score: "9.0", scoreColor: "green", times: 1, best: "9.0", pct: 90 },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {objections.map((o, i) => (
        <div key={i} className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <p className="text-sm font-medium text-gray-900 flex-1 line-clamp-2">{o.text}</p>
            <div className="text-right flex-shrink-0">
              <span className="text-[9px] font-bold text-red-500 uppercase tracking-wider">Media</span>
              <p className={`text-2xl font-bold ${o.scoreColor === "green" ? "text-green-600" : "text-yellow-600"}`}>{o.score}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-xs text-green-600 font-medium">Vezes enfrentada</p>
              <p className="text-xl font-bold text-gray-900">{o.times}</p>
            </div>
            <div>
              <p className="text-xs text-green-600 font-medium">Melhor nota</p>
              <p className="text-xl font-bold text-gray-900">{o.best}</p>
            </div>
          </div>
          <p className="text-xs text-green-600 font-medium mb-1">Desempenho medio</p>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className={`h-full rounded-full ${o.scoreColor === "green" ? "bg-green-500" : "bg-yellow-500"}`} style={{ width: `${o.pct}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Top Section (shared across all tabs) ─── */
function ProfileHeader() {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Visitante</h1>
        <p className="text-gray-500 text-sm flex items-center gap-2 mb-6">
          <span className="w-2 h-2 bg-green-500 rounded-full" />voce@email.com
        </p>
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-base font-bold text-gray-900">Conexoes</h3>
            <button onClick={scrollToPlanos} className="text-gray-400"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg></button>
          </div>
          <p className="text-xs text-gray-500 mb-4">1 Conexao Ativa</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-50 ring-2 ring-green-200 flex items-center justify-center">
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-green-600 opacity-40" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </div>
            <div onClick={scrollToPlanos} className="w-10 h-10 rounded-full bg-gray-50 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 cursor-pointer"><span className="text-lg">+</span></div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm text-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" className="mx-auto mb-2"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>
            <p className="text-2xl font-bold text-green-600">9.4</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Melhor Nota</p>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm text-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" className="mx-auto mb-2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
            <p className="text-2xl font-bold text-green-600">+5.4</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Tendencia</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
          </div>
          <h3 className="text-base font-bold text-gray-900">Minhas Reunioes</h3>
        </div>
        <div className="flex items-center justify-between py-3">
          <span className="text-sm text-gray-500">qui, 26 mar · 12:00</span>
          <div className="flex items-center gap-2 ml-4">
            <span className="text-sm font-medium text-gray-900 truncate">Ramppy {"<>"} Gabriel G...</span>
            <svg onClick={scrollToPlanos} className="cursor-pointer" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Profile Page ─── */
export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>, label: "Visao Geral" },
    { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>, label: "Analise SPIN" },
    { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, label: "Por Persona" },
    { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>, label: "Por Objecao" },
  ];

  return (
    <div>
      <ProfileHeader />

      {/* Tabs */}
      <div className="flex gap-1 mb-6 p-1 bg-gray-100 rounded-xl">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(i)}
            className={`flex-1 px-4 py-2.5 rounded-lg font-medium transition-all ${
              i === activeTab ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }`}
          >
            <span className="flex items-center justify-center gap-2 text-sm">{tab.icon}{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 0 && <TabVisaoGeral />}
      {activeTab === 1 && <TabAnaliseSpin />}
      {activeTab === 2 && <TabPorPersona />}
      {activeTab === 3 && <TabPorObjecao />}
    </div>
  );
}
