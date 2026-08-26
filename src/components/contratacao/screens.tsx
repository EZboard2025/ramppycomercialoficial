"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLocale } from "@/i18n/LocaleContext";
import {
  CANDIDATES,
  CATEGORY_SCORES,
  CONTRATACAO_COPY,
  OVERALL_SCORE,
  PUBLIC_LINK,
  SIMULATION_COUNT,
  formatCandidateDate,
} from "./copy";
import { formatScore, scoreFill, scoreText } from "./scoreColor";

/* ------------------------------------------------------------------ *
 * Hooks de animação — todos partem do zero quando `active` fica falso,
 * então as telas re-animam sempre que voltam à viewport.
 * ------------------------------------------------------------------ */

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function useCountUp(target: number, active: boolean, durationMs = 1100, delayMs = 0) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) {
      setValue(0);
      return;
    }
    if (prefersReducedMotion()) {
      setValue(target);
      return;
    }

    let raf = 0;
    let start = 0;
    const step = (ts: number) => {
      if (!start) start = ts;
      const t = Math.min(1, (ts - start) / durationMs);
      setValue(target * (1 - Math.pow(1 - t, 3)));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    const timer = setTimeout(() => {
      raf = requestAnimationFrame(step);
    }, delayMs);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [target, active, durationMs, delayMs]);

  return value;
}

/** Dispara `true` um tick depois de `active`, para as transições de CSS pegarem. */
function useArmed(active: boolean, delayMs = 60) {
  const [armed, setArmed] = useState(false);
  useEffect(() => {
    if (!active) {
      setArmed(false);
      return;
    }
    const timer = setTimeout(() => setArmed(true), delayMs);
    return () => clearTimeout(timer);
  }, [active, delayMs]);
  return armed;
}

/** Digita as falas em ciclo, uma de cada vez. */
function useTypedCycle(lines: readonly string[], active: boolean) {
  const [index, setIndex] = useState(0);
  const [chars, setChars] = useState(0);
  const key = lines.join("\u0001");
  const linesRef = useRef(lines);
  linesRef.current = lines;

  useEffect(() => {
    const lines = linesRef.current;
    if (!active) {
      setIndex(0);
      setChars(0);
      return;
    }
    if (prefersReducedMotion()) {
      setChars(lines[0]?.length ?? 0);
      return;
    }

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;
    let line = 0;

    const type = (n: number) => {
      if (cancelled) return;
      setChars(n);
      if (n < lines[line].length) {
        timer = setTimeout(() => type(n + 1), 26);
      } else {
        timer = setTimeout(() => {
          if (cancelled) return;
          line = (line + 1) % lines.length;
          setIndex(line);
          type(0);
        }, 1900);
      }
    };

    setIndex(0);
    type(0);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [key, active]);

  return { index, text: (lines[index] ?? "").slice(0, chars) };
}

/** Cronômetro da call, arrancando de 4:12. */
function useCallClock(active: boolean) {
  const [seconds, setSeconds] = useState(4 * 60 + 12);
  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [active]);
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s < 10 ? "0" : ""}${s}`;
}

/* ------------------------------------------------------------------ *
 * Ícones
 * ------------------------------------------------------------------ */

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const IconLink = (p: { className?: string }) => (
  <svg viewBox="0 0 24 24" {...stroke} className={p.className}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const IconUsers = (p: { className?: string }) => (
  <svg viewBox="0 0 24 24" {...stroke} className={p.className}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconCheckCircle = (p: { className?: string }) => (
  <svg viewBox="0 0 24 24" {...stroke} className={p.className}>
    <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const IconCopy = (p: { className?: string }) => (
  <svg viewBox="0 0 24 24" {...stroke} className={p.className}>
    <rect x="9" y="9" width="13" height="13" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const IconUser = (p: { className?: string }) => (
  <svg viewBox="0 0 24 24" {...stroke} className={p.className}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const IconMic = (p: { className?: string }) => (
  <svg viewBox="0 0 24 24" {...stroke} className={p.className}>
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <path d="M12 19v3" />
  </svg>
);

const IconVolume = (p: { className?: string }) => (
  <svg viewBox="0 0 24 24" {...stroke} className={p.className}>
    <path d="M11 5 6 9H2v6h4l5 4V5z" />
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
  </svg>
);

const IconVideo = (p: { className?: string }) => (
  <svg viewBox="0 0 24 24" {...stroke} className={p.className}>
    <path d="m23 7-7 5 7 5V7z" />
    <rect x="1" y="5" width="15" height="14" rx="2" />
  </svg>
);

const IconPhoneOff = (p: { className?: string }) => (
  <svg viewBox="0 0 24 24" {...stroke} className={p.className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

/* ------------------------------------------------------------------ *
 * 01 · Painel do gestor — grupo da vaga e link público
 * ------------------------------------------------------------------ */

export function ScreenLink({ active }: { active: boolean }) {
  const locale = useLocale();
  const t = CONTRATACAO_COPY[locale].ui;
  const count = useCountUp(SIMULATION_COUNT, active, 900, 260);
  const armed = useArmed(active, 900);

  return (
    <div className="ctr-card p-5 md:p-[22px]">
      <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-primary-green">
        {t.eyebrow}
      </div>
      <div className="mt-1 text-[22px] font-semibold tracking-[-0.02em] text-teal-dark">
        {t.role}
      </div>
      <div className="mt-[3px] text-[13px] text-ctr-muted">{t.roleSub}</div>

      <div className="mt-4 grid grid-cols-2 gap-2.5">
        <div className="ctr-kpi col-span-2">
          <div className="ctr-kpi-head">
            <span className="ctr-kpi-ico">
              <IconLink className="w-[13px] h-[13px]" />
            </span>
            <span className="ctr-kpi-label">{t.link}</span>
          </div>
          <div className="relative flex items-center gap-1.5 min-w-0">
            <code className="font-sans text-[12.5px] font-semibold text-teal-dark truncate">
              {PUBLIC_LINK}
            </code>
            <IconCopy
              className={`w-[13px] h-[13px] shrink-0 transition-opacity duration-200 ${
                armed ? "opacity-0" : "opacity-100 text-[#D1D5DB]"
              }`}
            />
            <IconCheckCircle
              className={`w-[13px] h-[13px] shrink-0 absolute right-0 text-[#22C55E] transition-all duration-300 ${
                armed ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`}
            />
          </div>
          <div className="mt-1 text-[11px] min-h-[1.3em] whitespace-nowrap">
            <span
              className={`transition-opacity duration-200 ${
                armed ? "opacity-0" : "opacity-100 text-ctr-muted"
              }`}
            >
              {t.copyHint}
            </span>
          </div>
        </div>

        <div className="ctr-kpi">
          <div className="ctr-kpi-head">
            <span className="ctr-kpi-ico">
              <IconUsers className="w-[13px] h-[13px]" />
            </span>
            <span className="ctr-kpi-label">{t.simulations}</span>
          </div>
          <div className="text-2xl font-bold leading-[1.1] tabular-nums text-teal-dark">
            {Math.round(count)}
          </div>
          <div className="mt-1 text-[11px] text-ctr-muted">{t.simulationsHint}</div>
        </div>

        <div className="ctr-kpi">
          <div className="ctr-kpi-head">
            <span className="ctr-kpi-ico">
              <IconCheckCircle className="w-[13px] h-[13px]" />
            </span>
            <span className="ctr-kpi-label">{t.status}</span>
          </div>
          <div className="inline-flex items-center gap-[7px] rounded-full border border-[#22C55E]/35 bg-[#F0FDF4] px-2.5 py-1 text-[13px] font-bold text-[#15803D]">
            <i className="ctr-dot" />
            {t.active}
          </div>
          <div className="mt-1 text-[11px] text-ctr-muted">{t.statusHint}</div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * 02 · A simulação ao vivo com o cliente sintético
 * ------------------------------------------------------------------ */

export function ScreenCall({ active }: { active: boolean }) {
  const locale = useLocale();
  const t = CONTRATACAO_COPY[locale].ui;
  const lines = t.dialogue;
  const texts = useMemo(() => lines.map((l) => l.text), [lines]);
  const { index, text } = useTypedCycle(texts, active);
  const clock = useCallClock(active);
  const current = lines[index];
  const isCandidate = index === 1;

  return (
    <div>
      <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-[#0c130f] shadow-[0_34px_80px_-34px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.06)]">
        <img
          src="/images/contratacao-cliente-sintetico.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,0.45)_0%,transparent_20%,transparent_52%,rgba(0,0,0,0.78)_100%)]" />
        <div className="ctr-call-glow pointer-events-none absolute inset-0 z-[2] rounded-[22px]" />

        <div className="absolute inset-x-3 top-3 z-[3] flex items-center justify-between">
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold tracking-[0.03em] ${
              isCandidate
                ? "border-[#60a5fa]/50 bg-[rgba(6,20,12,0.78)] text-[#cfe6ff]"
                : "border-[#39C72E]/40 bg-[rgba(6,20,12,0.78)] text-[#d6ffd0]"
            }`}
          >
            <i className={isCandidate ? "ctr-dot ctr-dot-blue" : "ctr-dot ctr-dot-lime"} />
            <span>{isCandidate ? current.who : t.speaking}</span>
          </span>
          <span className="text-[12.5px] font-semibold tabular-nums text-white/90 [text-shadow:0_1px_3px_rgba(0,0,0,0.6)]">
            {clock}
          </span>
        </div>

        <div
          className={`ctr-eq absolute left-4 z-[3] flex h-[26px] items-end gap-1 transition-opacity duration-300 ${
            isCandidate ? "opacity-0" : "opacity-100"
          }`}
          style={{ bottom: "122px" }}
        >
          <i /><i /><i /><i /><i />
        </div>

        <div className="absolute left-3.5 z-[3] text-sm text-white/80 [text-shadow:0_1px_4px_rgba(0,0,0,0.7)]" style={{ bottom: "94px" }}>
          <b className="font-bold text-white">Clarice</b>
        </div>

        <div className="absolute inset-x-3 bottom-3 z-[4]">
          <div className="min-h-[2.6em] rounded-[13px] border border-white/10 bg-[rgba(6,12,9,0.82)] px-3.5 py-2.5 text-[13px] leading-[1.42] text-white">
            <span
              className={`block text-[9px] font-bold uppercase tracking-[0.08em] ${
                isCandidate ? "text-[#39C72E]/90" : "text-white/55"
              }`}
            >
              {current.who}
            </span>
            <span className="mt-[3px] block">
              {text}
              <span className={`ctr-caret ${isCandidate ? "ctr-caret-light" : "ctr-caret-amber"}`} />
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-4">
        <span className="ctr-call-btn"><IconMic className="w-5 h-5" /></span>
        <span className="ctr-call-btn"><IconVideo className="w-5 h-5" /></span>
        <span className="ctr-call-btn ctr-call-btn-end"><IconPhoneOff className="w-5 h-5" /></span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * 03 · Avaliação por categoria
 * ------------------------------------------------------------------ */

function ScoreBar({ label, score, active, delay }: { label: string; score: number; active: boolean; delay: number }) {
  const locale = useLocale();
  const value = useCountUp(score, active, 1000, delay);
  const armed = useArmed(active, delay);

  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-semibold text-text-secondary">{label}</span>
        <span className="text-sm font-bold tabular-nums" style={{ color: scoreText(score) }}>
          {formatScore(value, locale)}
        </span>
      </div>
      <div className="h-[9px] rounded-full bg-black/[0.07]">
        <div
          className="h-full rounded-full transition-[width] duration-[900ms] ease-out"
          style={{ width: armed ? `${score * 10}%` : "0%", background: scoreFill(score) }}
        />
      </div>
    </div>
  );
}

export function ScreenBars({ active }: { active: boolean }) {
  const locale = useLocale();
  const t = CONTRATACAO_COPY[locale].ui;

  return (
    <div className="ctr-card p-5 md:p-[22px]">
      <div className="text-xl font-bold tracking-[-0.02em] text-teal-dark md:text-[22px]">
        {t.scoreTitle}
      </div>
      <div className="mb-5 mt-1 text-[13px] text-ctr-soft">{t.scoreSub}</div>
      <div className="flex flex-col gap-4">
        {t.categories.map((label, i) => (
          <ScoreBar
            key={label}
            label={label}
            score={CATEGORY_SCORES[i]}
            active={active}
            delay={140 + i * 120}
          />
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * 03b · Radar — a régua única
 * ------------------------------------------------------------------ */

const RADAR_RINGS = [
  "110,30 186.08,85.28 157.02,174.72 62.98,174.72 33.92,85.28",
  "110,50 167.06,91.46 145.27,158.54 74.73,158.54 52.94,91.46",
  "110,70 148.04,97.64 133.51,142.36 86.49,142.36 71.96,97.64",
  "110,90 129.02,103.82 121.76,126.18 98.24,126.18 90.98,103.82",
];

const RADAR_SPOKES: [number, number][] = [
  [110, 30],
  [186.08, 85.28],
  [157.02, 174.72],
  [62.98, 174.72],
  [33.92, 85.28],
];

const RADAR_VERTICES: [number, number][] = [
  [110, 55.6],
  [164.78, 92.2],
  [143.39, 155.95],
  [79.9, 151.42],
  [48.38, 89.98],
];

export function ScreenRadar({ active }: { active: boolean }) {
  const locale = useLocale();
  const t = CONTRATACAO_COPY[locale].ui;
  const armed = useArmed(active, 120);
  const value = useCountUp(OVERALL_SCORE, active, 1100, 500);
  const poly = RADAR_VERTICES.map(([x, y]) => `${x},${y}`).join(" ");

  return (
    <div className="ctr-card flex items-center justify-center p-5 md:p-[22px]">
      <svg
        viewBox="-58 -16 336 252"
        role="img"
        aria-label={`${t.radarCaption}: ${formatScore(OVERALL_SCORE, locale)}`}
        className="w-full max-w-[420px]"
      >
        {RADAR_RINGS.map((points) => (
          <polygon key={points} points={points} fill="none" stroke="rgba(0,0,0,0.07)" strokeWidth={1} />
        ))}
        {RADAR_SPOKES.map(([x, y]) => (
          <line key={`${x}-${y}`} x1={110} y1={110} x2={x} y2={y} stroke="rgba(45,140,60,0.18)" strokeWidth={1} />
        ))}
        <polygon
          points={poly}
          fill="rgba(45,140,60,0.16)"
          stroke="var(--color-primary-green)"
          strokeWidth={2}
          strokeLinejoin="round"
          strokeDasharray={340}
          style={{
            strokeDashoffset: armed ? 0 : 340,
            transition: "stroke-dashoffset 1.2s ease-out",
            filter: "drop-shadow(0 0 6px rgba(45,140,60,0.4))",
          }}
        />
        {RADAR_VERTICES.map(([x, y], i) => (
          <circle
            key={`${x}-${y}`}
            cx={x}
            cy={y}
            r={4}
            fill="var(--color-primary-green)"
            style={{
              opacity: armed ? 1 : 0,
              transition: `opacity 400ms ease-out ${500 + i * 90}ms`,
            }}
          />
        ))}
        <text x={110} y={2} textAnchor="middle" className="ctr-radar-label">{t.radarLabels[0]}</text>
        <text x={200} y={80} textAnchor="start" className="ctr-radar-label">{t.radarLabels[1]}</text>
        <text x={172} y={196} textAnchor="middle" className="ctr-radar-label">{t.radarLabels[2]}</text>
        <text x={48} y={196} textAnchor="middle" className="ctr-radar-label">{t.radarLabels[3]}</text>
        <text x={20} y={80} textAnchor="end" className="ctr-radar-label">{t.radarLabels[4]}</text>
        <text x={110} y={108} textAnchor="middle" className="ctr-radar-score">
          {formatScore(value, locale)}
        </text>
        <text x={110} y={122} textAnchor="middle" className="ctr-radar-caption">
          {t.radarCaption}
        </text>
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * 04 · Ranking de candidatos
 * ------------------------------------------------------------------ */

function RankRow({
  candidate,
  active,
  delay,
  last,
}: {
  candidate: (typeof CANDIDATES)[number];
  active: boolean;
  delay: number;
  last: boolean;
}) {
  const locale = useLocale();
  const value = useCountUp(candidate.score, active, 900, delay + 120);
  const armed = useArmed(active, delay);

  return (
    <div
      className={`py-[9px] transition-all duration-500 ease-out ${last ? "" : "border-b border-black/[0.04]"} ${
        armed ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      }`}
    >
      <div className="mb-[7px] flex items-center gap-3.5">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[9px] border border-border-light bg-[#F9FAFB] text-ctr-soft">
          <IconUser className="h-4 w-4" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="text-sm font-semibold text-teal-dark">{candidate.name}</div>
          <div className="mt-0.5 text-[11px] tabular-nums text-ctr-muted">
            {formatCandidateDate(locale, candidate)}
          </div>
        </div>
        <span className="ml-auto text-lg font-bold tabular-nums" style={{ color: scoreText(candidate.score) }}>
          {formatScore(value, locale)}
        </span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-[#F3F4F6]">
        <div
          className="h-full rounded-full transition-[width] duration-[900ms] ease-out"
          style={{
            width: armed ? `${candidate.score * 10}%` : "0%",
            background: scoreFill(candidate.score),
          }}
        />
      </div>
    </div>
  );
}

export function ScreenRank({ active }: { active: boolean }) {
  const locale = useLocale();
  const t = CONTRATACAO_COPY[locale].ui;

  return (
    <div>
      <div className="text-xl font-bold tracking-[-0.02em] text-teal-dark md:text-[22px]">
        {t.rankTitle}
      </div>
      <div className="mb-5 mt-1 text-[13px] text-ctr-soft">{t.rankSub}</div>
      <div className="ctr-card px-[18px] py-2.5">
        {CANDIDATES.map((c, i) => (
          <RankRow
            key={c.name}
            candidate={c}
            active={active}
            delay={140 + i * 150}
            last={i === CANDIDATES.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Utilitário: dispara `active` quando o elemento entra na viewport.
 * ------------------------------------------------------------------ */

export function WhenVisible({
  children,
  className = "",
  threshold = 0.35,
}: {
  children: (active: boolean) => React.ReactNode;
  className?: string;
  threshold?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={className}>
      {children(active)}
    </div>
  );
}
