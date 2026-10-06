"use client";

import { useId, useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { useLocale, type Locale } from "@/i18n/LocaleContext";
import { DIAS_UTEIS, MELHORA_CASO, calcularRoi, lerNumero } from "@/lib/roi";

/**
 * Calculadora de ROI: a mesma seção na home (#roi, o botão do topo rola até ela) e na página /calculadora.
 * O visitante põe as reuniões por dia, a conversão e o ticket do time; a melhora é fixa, a de um caso real
 * (18% para 30%, +12 pontos), sem nome da empresa. Sem preço.
 */

type Campo = { label: string; hint: string };
type Resumo = { reunioes: string; conversao: string; ticket: string; receitaMes: string };

type Copy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  reunioes: Campo;
  conversao: Campo;
  ticket: Campo;
  ganho: string;
  dePara: (de: string, para: string) => string;
  pontos: string;
  receitaMes: string;
  vendas: string;
  receitaAno: string;
  cta: string;
  whatsapp: (r: Resumo) => string;
  caso: { eyebrow: string; title: string; numeros: { valor: string; texto: string }[] };
  nota: string;
  /** `prefixar`: escreve o símbolo e o número em vez do formato do Intl (no es-419 o Intl dá "USD 10,000", e a caixa mostra US$). */
  moeda: { intl: string; codigo: string; simbolo: string; prefixar?: boolean };
  inicial: { reunioes: string; conversao: string; ticket: string };
};

const COPY: Record<Locale, Copy> = {
  pt: {
    eyebrow: "Calculadora de ROI",
    title: `E se o seu time convertesse ${MELHORA_CASO} pontos a mais?`,
    subtitle:
      "Foi o ganho de um time de vendedores novos treinado na Ramppy, de 18% para 30%. Coloque os números do seu time e veja quanto isso vale.",
    reunioes: { label: "Reuniões por dia", hint: `Somando o time todo. O mês conta ${DIAS_UTEIS} dias úteis.` },
    conversao: { label: "Conversão de hoje", hint: "De cada 100 reuniões, quantas viram venda" },
    ticket: { label: "Ticket médio", hint: "Valor médio de cada venda" },
    ganho: "Com o ganho do caso real",
    dePara: (de, para) => `de ${de}% para ${para}% de conversão`,
    pontos: `+${MELHORA_CASO} pontos`,
    receitaMes: "Receita a mais por mês",
    vendas: "Vendas a mais por mês",
    receitaAno: "Receita a mais por ano",
    cta: "Quero esse resultado",
    whatsapp: (r) =>
      `Olá, fiz a calculadora de ROI da Ramppy: ${r.reunioes} reuniões por dia, ${r.conversao}% de conversão hoje e ticket médio de ${r.ticket}. Com +${MELHORA_CASO} pontos de conversão, seriam ${r.receitaMes} a mais por mês. Quero entender como chegar lá.`,
    caso: {
      eyebrow: "Caso real",
      title: "Um time de vendedores novos treinado na Ramppy",
      numeros: [
        { valor: "6", texto: "pessoas que nunca tinham vendido" },
        { valor: "3 dias", texto: "até o time estar vendendo" },
        { valor: "18% → 30%", texto: "de conversão na primeira semana" },
        { valor: "6x", texto: "de retorno do investimento" },
      ],
    },
    nota: "Simulação a partir de um caso real. O resultado do seu time depende da sua operação.",
    moeda: { intl: "pt-BR", codigo: "BRL", simbolo: "R$" },
    inicial: { reunioes: "10", conversao: "18", ticket: "1.000" },
  },
  en: {
    eyebrow: "ROI calculator",
    title: `What if your team converted ${MELHORA_CASO} more points?`,
    subtitle:
      "That was the gain of a team of new reps trained on Ramppy, from 18% to 30%. Enter your team's numbers and see what it's worth.",
    reunioes: { label: "Meetings per day", hint: `Across the whole team. A month counts ${DIAS_UTEIS} business days.` },
    conversao: { label: "Current conversion", hint: "Out of every 100 meetings, how many close" },
    ticket: { label: "Average deal size", hint: "Average value of each sale" },
    ganho: "With the real case's gain",
    dePara: (de, para) => `from ${de}% to ${para}% conversion`,
    pontos: `+${MELHORA_CASO} points`,
    receitaMes: "Extra revenue per month",
    vendas: "Extra sales per month",
    receitaAno: "Extra revenue per year",
    cta: "I want this result",
    whatsapp: (r) =>
      `Hi, I used the Ramppy ROI calculator: ${r.reunioes} meetings per day, ${r.conversao}% conversion today and an average deal size of ${r.ticket}. With +${MELHORA_CASO} points of conversion, that would be ${r.receitaMes} extra per month. I'd like to understand how to get there.`,
    caso: {
      eyebrow: "Real case",
      title: "A team of new reps trained on Ramppy",
      numeros: [
        { valor: "6", texto: "people who had never sold" },
        { valor: "3 days", texto: "until the team was selling" },
        { valor: "18% → 30%", texto: "conversion in the first week" },
        { valor: "6x", texto: "return on investment" },
      ],
    },
    nota: "Simulation based on a real case. Your team's result depends on your operation.",
    moeda: { intl: "en-US", codigo: "USD", simbolo: "$" },
    inicial: { reunioes: "10", conversao: "18", ticket: "1,000" },
  },
  es: {
    eyebrow: "Calculadora de ROI",
    title: `¿Y si tu equipo convirtiera ${MELHORA_CASO} puntos más?`,
    subtitle:
      "Fue la mejora de un equipo de vendedores nuevos entrenado en Ramppy, de 18% a 30%. Pon los números de tu equipo y mira cuánto vale.",
    reunioes: { label: "Reuniones por día", hint: `Sumando todo el equipo. El mes cuenta ${DIAS_UTEIS} días hábiles.` },
    conversao: { label: "Conversión actual", hint: "De cada 100 reuniones, cuántas se convierten en venta" },
    ticket: { label: "Ticket promedio", hint: "Valor promedio de cada venta" },
    ganho: "Con la mejora del caso real",
    dePara: (de, para) => `de ${de}% a ${para}% de conversión`,
    pontos: `+${MELHORA_CASO} puntos`,
    receitaMes: "Ingreso extra por mes",
    vendas: "Ventas extra por mes",
    receitaAno: "Ingreso extra por año",
    cta: "Quiero ese resultado",
    whatsapp: (r) =>
      `Hola, usé la calculadora de ROI de Ramppy: ${r.reunioes} reuniones por día, ${r.conversao}% de conversión actual y ticket promedio de ${r.ticket}. Con +${MELHORA_CASO} puntos de conversión, serían ${r.receitaMes} extra por mes. Quiero entender cómo llegar ahí.`,
    caso: {
      eyebrow: "Caso real",
      title: "Un equipo de vendedores nuevos entrenado en Ramppy",
      numeros: [
        { valor: "6", texto: "personas que nunca habían vendido" },
        { valor: "3 días", texto: "hasta que el equipo estaba vendiendo" },
        { valor: "18% → 30%", texto: "de conversión en la primera semana" },
        { valor: "6x", texto: "de retorno de la inversión" },
      ],
    },
    nota: "Simulación a partir de un caso real. El resultado de tu equipo depende de tu operación.",
    moeda: { intl: "es-419", codigo: "USD", simbolo: "US$", prefixar: true },
    inicial: { reunioes: "10", conversao: "18", ticket: "1,000" },
  },
};

const WHATSAPP = "https://wa.me/5531995525157";
const buildWa = (msg: string) => `${WHATSAPP}?text=${encodeURIComponent(msg)}`;

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path
        d="M3.5 8h9M9 4.5L12.5 8 9 11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CampoNumero({
  campo,
  valor,
  onChange,
  prefixo,
  sufixo,
}: {
  campo: Campo;
  valor: string;
  onChange: (v: string) => void;
  prefixo?: string;
  sufixo?: string;
}) {
  const id = useId();
  return (
    // coluna com a caixa no pé: as caixas lado a lado ficam alinhadas mesmo quando uma dica quebra em duas linhas
    <div className="flex flex-col h-full">
      <label htmlFor={id} className="block text-[14px] font-medium text-[#0A0A0A]">
        {campo.label}
      </label>
      <p className="mt-1 mb-3 text-[13px] leading-[1.45] text-[#6B7280]">{campo.hint}</p>
      <div className="mt-auto flex items-center h-12 rounded-xl border border-[#E5E7EB] bg-white px-4 focus-within:border-primary-green focus-within:ring-2 focus-within:ring-primary-green/15 transition-colors">
        {prefixo && <span className="mr-2 text-[16px] text-[#6B7280]">{prefixo}</span>}
        <input
          id={id}
          type="text"
          inputMode="decimal"
          autoComplete="off"
          value={valor}
          onChange={(e) => onChange(e.target.value)}
          className="w-full min-w-0 bg-transparent text-[17px] font-medium text-[#0A0A0A] tabular-nums outline-none"
        />
        {sufixo && <span className="ml-2 text-[16px] text-[#6B7280]">{sufixo}</span>}
      </div>
    </div>
  );
}

export default function RoiCalculator({ comoPagina = false }: { comoPagina?: boolean }) {
  const locale = useLocale();
  const t = COPY[locale];

  const [reunioes, setReunioes] = useState(t.inicial.reunioes);
  const [conversao, setConversao] = useState(t.inicial.conversao);
  const [ticket, setTicket] = useState(t.inicial.ticket);

  const r = calcularRoi({
    reunioesPorDia: lerNumero(reunioes),
    conversao: lerNumero(conversao),
    ticket: lerNumero(ticket),
  });

  const intl = new Intl.NumberFormat(t.moeda.intl, {
    style: "currency",
    currency: t.moeda.codigo,
    maximumFractionDigits: 0,
  });
  const inteiro = new Intl.NumberFormat(t.moeda.intl, { maximumFractionDigits: 0 });
  const dinheiro = (n: number) => (t.moeda.prefixar ? `${t.moeda.simbolo} ${inteiro.format(n)}` : intl.format(n));
  const numero = new Intl.NumberFormat(t.moeda.intl, { maximumFractionDigits: 1 });
  const hoje = Math.min(lerNumero(conversao), 100);

  const mensagem = t.whatsapp({
    reunioes: numero.format(lerNumero(reunioes)),
    conversao: numero.format(hoje),
    ticket: dinheiro(lerNumero(ticket)),
    receitaMes: dinheiro(r.receitaMes),
  });

  const Titulo = comoPagina ? "h1" : "h2";

  return (
    <SectionWrapper id="roi">
      <div className="py-20 md:py-28 lg:py-32 text-[#0A0A0A]">
        {/* Header */}
        <header className="max-w-3xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">{t.eyebrow}</p>
          <Titulo className="mt-4 font-[var(--font-fustat)] text-[40px] md:text-[56px] lg:text-[64px] font-medium leading-[1.02] tracking-[-0.035em] text-[#0A0A0A]">
            {t.title}
          </Titulo>
          <p className="mt-5 max-w-2xl text-[17px] md:text-[18px] leading-[1.55] text-[#4B5563]">{t.subtitle}</p>
        </header>

        <div className="mt-14 md:mt-16 h-px w-full bg-[#E5E7EB]" />

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 py-12 md:py-16">
          {/* Os números do time */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <CampoNumero campo={t.reunioes} valor={reunioes} onChange={setReunioes} />
              <CampoNumero campo={t.conversao} valor={conversao} onChange={setConversao} sufixo="%" />
            </div>
            <div className="sm:max-w-[calc(50%-16px)]">
              <CampoNumero campo={t.ticket} valor={ticket} onChange={setTicket} prefixo={t.moeda.simbolo} />
            </div>

            {/* A melhora fixa, a do caso real */}
            <div className="border-t border-[#E5E7EB] pt-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">{t.ganho}</p>
              <p className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[17px] text-[#1F2937] tabular-nums">
                <span className="font-semibold text-primary-green">{t.pontos}</span>
                <span>{t.dePara(numero.format(hoje), numero.format(r.conversaoNova))}</span>
              </p>
            </div>
          </div>

          {/* O resultado */}
          <div className="rounded-2xl bg-[#F6F8F5] border border-[#E8ECE6] p-7 md:p-10 flex flex-col">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">{t.receitaMes}</p>
            <p
              className="mt-3 font-[var(--font-fustat)] text-[44px] md:text-[60px] font-medium leading-none tracking-[-0.035em] text-[#0A0A0A] tabular-nums break-all"
              aria-live="polite"
            >
              {dinheiro(r.receitaMes)}
            </p>

            <div className="mt-8 grid grid-cols-2 border-t border-[#E3E8E1]">
              <div className="pt-5 pr-4">
                <p className="text-[12px] leading-[1.4] text-[#6B7280]">{t.vendas}</p>
                <p className="mt-1.5 text-[22px] md:text-[26px] font-semibold tracking-[-0.02em] text-[#0A0A0A] tabular-nums">
                  +{numero.format(r.vendasAMais)}
                </p>
              </div>
              <div className="pt-5 pl-4 border-l border-[#E3E8E1]">
                <p className="text-[12px] leading-[1.4] text-[#6B7280]">{t.receitaAno}</p>
                <p className="mt-1.5 text-[22px] md:text-[26px] font-semibold tracking-[-0.02em] text-[#0A0A0A] tabular-nums break-all">
                  {dinheiro(r.receitaAno)}
                </p>
              </div>
            </div>

            <a
              href={buildWa(mensagem)}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 lg:mt-auto self-start inline-flex items-center justify-center gap-2 h-11 rounded-full px-6 text-[14px] font-medium bg-primary-green text-white hover:bg-primary-light shadow-[0_8px_24px_-12px_rgba(45,140,60,0.65)] transition-all duration-200"
            >
              <span>{t.cta}</span>
              <Arrow className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="h-px w-full bg-[#E5E7EB]" />

        {/* O caso real de onde vem a melhora */}
        <div className="pt-12 md:pt-16">
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-green">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-green" aria-hidden />
            {t.caso.eyebrow}
          </p>
          <p className="mt-4 text-[20px] md:text-[24px] font-medium tracking-[-0.02em] text-[#0A0A0A]">{t.caso.title}</p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-y-8 md:divide-x md:divide-[#E5E7EB]">
            {t.caso.numeros.map((n) => (
              <div key={n.texto} className="pr-4 md:px-8 first:md:pl-0 last:md:pr-0">
                <p className="font-[var(--font-fustat)] text-[25px] sm:text-[30px] md:text-[40px] font-medium leading-none tracking-[-0.035em] text-[#0A0A0A] whitespace-nowrap">
                  {n.valor}
                </p>
                <p className="mt-2 text-[14px] leading-[1.45] text-[#4B5563]">{n.texto}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-[12px] text-[#6B7280]">{t.nota}</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
