"use client";
import { useEffect, useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { useLocale, localizeHref } from "@/i18n/LocaleContext";
import { DIAGNOSTICO_VSL_URL, LANCAMENTO_DIAGNOSTICO } from "@/lib/lancamento";
import { LogoLoop } from "./PartnersMarquee";
import { clientes, clientesLabel } from "./ClientsMarquee";

// No topo do hero, no celular, os logos ficam menores que na faixa (a frase continua sendo o maior elemento)
const ALTURA_NO_HERO: Record<string, string> = {
  Zoppy: "h-[18px]",
  "G4 Educação": "h-6",
  Allu: "h-5",
  Sambatech: "h-4",
  "Grupo Escalar": "h-[15px]",
};
const clientesNoHero = clientes.map((c) => ({ ...c, url: undefined, altura: ALTURA_NO_HERO[c.name] ?? "h-5" }));

function useTypewriter(
  phrases: readonly (readonly string[])[],
  typeSpeedMs = 45,
  deleteSpeedMs = 25,
  startDelayMs = 250,
  pauseAtFullMs = 2500,
  pauseAtEmptyMs = 350,
) {
  const key = phrases.map((p) => p.join("\u0001")).join("\u0002");
  const initialLen = phrases[0].reduce((a, s) => a + s.length, 0);
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [pos, setPos] = useState(initialLen);

  useEffect(() => {
    setPhraseIdx(0);
    setPos(initialLen);
    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let currentPhrase = 0;
    const totalLenFor = (idx: number) => phrases[idx].reduce((a, s) => a + s.length, 0);

    function typeStep(next: number) {
      if (cancelled) return;
      setPos(next);
      const total = totalLenFor(currentPhrase);
      if (next < total) {
        timeoutId = setTimeout(() => typeStep(next + 1), typeSpeedMs);
      } else {
        timeoutId = setTimeout(() => deleteStep(total - 1), pauseAtFullMs);
      }
    }

    function deleteStep(next: number) {
      if (cancelled) return;
      setPos(next);
      if (next > 0) {
        timeoutId = setTimeout(() => deleteStep(next - 1), deleteSpeedMs);
      } else {
        currentPhrase = (currentPhrase + 1) % phrases.length;
        setPhraseIdx(currentPhrase);
        timeoutId = setTimeout(() => typeStep(0), pauseAtEmptyMs);
      }
    }

    // Start with phrase 0 already fully typed, then begin the delete → next cycle.
    timeoutId = setTimeout(() => deleteStep(initialLen - 1), pauseAtFullMs);

    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [key, typeSpeedMs, deleteSpeedMs, startDelayMs, pauseAtFullMs, pauseAtEmptyMs, phrases, initialLen]);

  const segments = phrases[phraseIdx] ?? phrases[0];
  const typed: string[] = [];
  let remaining = pos;
  for (const s of segments) {
    const take = Math.min(remaining, s.length);
    typed.push(s.slice(0, take));
    remaining -= take;
  }
  return { typed, segments };
}

function Cursor() {
  return (
    <span
      aria-hidden="true"
      className="inline-block w-[3px] md:w-[4px] h-[0.85em] align-middle ml-1 bg-primary-green animate-cursor-blink"
    />
  );
}

const strings = {
  pt: {
    socialProof: "Aumente em até 46% suas conversões",
    h1MobileVariants: [
      ["Antes de contratar,", "veja ", "vender."],
      ["Contrate quem", "vende ", "mais."],
      ["Sem achismo.", "Só ", "dados."],
      ["Treine melhor.", "Venda ", "mais."],
    ] as const,
    h1DesktopVariants: [
      ["Veja o candidato ", "vender", " antes de ", "contratar."],
      ["Contrate quem ", "vende", ", não quem ", "entrevista bem."],
      ["Pare de descobrir se ", "vende", " depois de ", "contratar."],
      ["Transforme a ", "performance", " do seu time ", "comercial."],
    ] as const,
    subtitleMobile: "O candidato vende para um cliente sintético. A nota chega antes da entrevista.",
    subtitleDesktop:
      "Simulação de vendas com IA para contratar melhor: o candidato vende para um cliente sintético e a nota chega antes da entrevista. Depois, o mesmo motor treina e avalia quem já está no time.",
    ctaPrimary: "Calcular ROI",
    ctaSecondary: "Ver como funciona",
  },
  es: {
    socialProof: "Aumenta hasta un 46% tus conversiones",
    h1MobileVariants: [
      ["Míralo vender.", "Luego ", "decide."],
      ["Contrata a quien", "vende ", "más."],
      ["Sin corazonadas.", "Solo ", "datos."],
      ["Entrena mejor.", "Vende ", "más."],
    ] as const,
    h1DesktopVariants: [
      ["Mira al candidato ", "vender", " antes de ", "contratarlo."],
      ["Contrata a quien ", "vende", ", no a quien ", "entrevista bien."],
      ["Deja de descubrir si ", "vende", " después de ", "contratar."],
      ["Transforma el ", "rendimiento", " de tu equipo ", "comercial."],
    ] as const,
    subtitleMobile: "El candidato le vende a un cliente sintético. La nota llega antes de la entrevista.",
    subtitleDesktop:
      "Simulación de ventas con IA para contratar mejor: el candidato le vende a un cliente sintético y la nota llega antes de la entrevista. Después, el mismo motor entrena y evalúa a tu equipo.",
    ctaPrimary: "Calcular ROI",
    ctaSecondary: "Ver cómo funciona",
  },
  en: {
    socialProof: "Boost your conversions by up to 46%",
    h1MobileVariants: [
      ["Simulate the sale.", "Then ", "hire."],
      ["Hire the ones who", "really ", "sell."],
      ["No more guessing.", "Hire on ", "data."],
      ["Train better.", "Sell ", "more."],
    ] as const,
    h1DesktopVariants: [
      ["Watch candidates ", "sell", " before you ", "hire them."],
      ["Hire who ", "sells", ", not who ", "interviews well."],
      ["Know they can ", "sell", " before the ", "offer."],
      ["Transform the ", "performance", " of your ", "sales team."],
    ] as const,
    subtitleMobile: "Candidates sell to a synthetic customer. The score lands before the interview.",
    subtitleDesktop:
      "AI sales simulation for better hiring: candidates sell to a synthetic customer and the score lands before the interview. Then the same engine trains and scores the team you already have.",
    ctaPrimary: "Calculate ROI",
    ctaSecondary: "See how it works",
  },
};

// Lançamento do Diagnóstico (só em português; a chave fica em src/lib/lancamento.ts): mesma estrutura do hero, com
// o texto, os botões e o vídeo do Diagnóstico. O "Sou empresa" desce para o conteúdo de empresa da própria home.
const lancamentoPt = {
  h1MobileVariants: [
    ["Onde você", "perde ", "venda?"],
    ["Sua nota em", "10 ", "minutos."],
    ["Agora é a", "sua ", "vez."],
  ] as const,
  h1DesktopVariants: [
    ["Descubra o que está ", "travando", " as suas ", "vendas."],
    ["Nunca mais perca uma ", "venda", " sem saber ", "por quê."],
    ["Uma ligação de ", "10 minutos", " e a sua ", "nota na hora."],
    ["O que era só de ", "empresa grande", ", agora é ", "seu."],
  ] as const,
  subtitleMobile: "Uma ligação de 10 minutos com um cliente sintético. A\u00A0nota e os seus gargalos chegam na hora.",
  subtitleDesktop:
    "Uma ligação de 10 minutos com um cliente sintético, como numa venda de verdade. Na hora, você recebe a sua nota, os seus gargalos e o que fazer no lugar.",
  ctaPrimary: "Fazer meu diagnóstico",
  ctaPrimaryHref: DIAGNOSTICO_VSL_URL,
  ctaSecondary: "Sou empresa",
  ctaSecondaryHref: "#contratacao",
  // Até 1023 px o quadro aparece inteiro (versão centralizada); a partir de 1024 px a borda direita sai da tela, e a
  // versão de desktop anda o conteúdo para a esquerda.
  video: "/videos/hero-diagnostico-celular.mp4",
  videoDesktop: "/videos/hero-diagnostico.mp4" as string | null,
};

export default function Hero() {
  const locale = useLocale();
  const lancamento = LANCAMENTO_DIAGNOSTICO && locale === "pt";
  const base = strings[locale];
  const t = lancamento
    ? { ...base, ...lancamentoPt }
    : {
        ...base,
        ctaPrimaryHref: "#roi",
        ctaSecondaryHref: localizeHref(locale, "/como-funciona"),
        video: `/videos/hero-${locale}.mp4`,
        videoDesktop: null as string | null,
      };

  const desktop = useTypewriter(t.h1DesktopVariants);
  const mobile = useTypewriter(t.h1MobileVariants);

  return (
    <SectionWrapper className="overflow-visible">
      <div className="py-6 md:py-24 lg:py-32">
        {/* No lançamento o texto fica no meio da altura do vídeo (as quatro frases têm 2 linhas, nada pula) */}
        <div className={`flex flex-col lg:flex-row items-start ${lancamento ? "lg:items-center" : ""} gap-10 md:gap-8 lg:gap-[5%]`}>
          {/* Left: Text Content */}
          <div className="lg:w-[33%] xl:w-[33%] shrink-0 mt-[10px] md:mt-0">
            {/* Lançamento, só no celular: o carrossel de clientes no lugar da pílula (no desktop ele é a faixa abaixo do hero) */}
            {lancamento && (
              <div className="md:hidden mb-11">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary/70 mb-3">
                  {clientesLabel.pt}
                </p>
                <LogoLoop logos={clientesNoHero} margem="-mx-6" espaco="px-6" />
              </div>
            )}

            {/* Social proof badge - mobile only */}
            <div className={`${lancamento ? "hidden" : "md:hidden inline-flex"} items-center gap-2.5 bg-surface-hover/60 border border-border-light/60 rounded-full px-4 py-2 mb-6`}>
              <div className="flex -space-x-2">
                <img src="/images/Gabriel Gomide.png" alt="Gabriel" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                <img src="/images/1769295670916.jpg" alt="Arthur" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                <img src="/images/Matheus Muniz.png" alt="Matheus" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
              </div>
              <span className="text-xs text-text-secondary font-medium">{t.socialProof}</span>
            </div>

            {/* H1 */}
            <h1 className="font-[var(--font-fustat)] text-[52px] md:text-[42px] lg:text-[3.5vw] xl:text-[3.75vw] font-semibold leading-[105%] tracking-[-0.03em] md:tracking-[-0.05em] text-teal-dark mt-4 md:mt-0 lg:w-[42vw] xl:w-[42vw] lg:relative lg:z-10 min-h-[2.1em] md:min-h-[2.1em]">
              <span className="md:hidden">
                {mobile.typed[0]}
                {mobile.typed[0].length === mobile.segments[0].length && <br />}
                <span className="whitespace-nowrap">
                  {mobile.typed[1]}
                  <span className="clip-text">{mobile.typed[2]}</span>
                </span>
                <Cursor />
              </span>
              <span className="hidden md:inline">
                {desktop.typed[0]}
                <span className="clip-text">{desktop.typed[1]}</span>
                {desktop.typed[2]}
                <span className="clip-text">{desktop.typed[3]}</span>
                <Cursor />
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-7 md:mt-6 text-[17px] md:text-lg font-normal md:font-medium leading-relaxed md:leading-7 text-text-secondary/80 md:text-text-secondary">
              <span className="md:hidden max-w-[240px] block">{t.subtitleMobile}</span>
              <span className="hidden md:inline">{t.subtitleDesktop}</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-row items-center gap-3 md:gap-4 mt-[40px] md:mt-10">
              <a
                href={t.ctaPrimaryHref}
                className="font-[var(--font-fustat)] inline-flex items-center justify-center gap-1.5 md:gap-2 text-sm md:text-base font-semibold px-5 md:px-6 py-3 md:py-3.5 rounded-full bg-primary-green text-white hover:bg-green-dark transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              >
                {t.ctaPrimary}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 md:w-5 md:h-5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16l4-4-4-4" />
                  <path d="M8 12h8" />
                </svg>
              </a>
              <a
                href={t.ctaSecondaryHref}
                className={`font-[var(--font-fustat)] inline-flex items-center justify-center gap-2 text-sm md:text-base font-semibold ${lancamento ? "px-3 whitespace-nowrap" : "px-5"} md:px-6 py-3 md:py-3.5 rounded-full text-teal-medium md:bg-white md:border md:border-border-light hover:bg-surface-hover transition-all duration-300`}
              >
                {t.ctaSecondary}
              </a>
            </div>

          </div>

          {/* Right: Video */}
          <div className="flex-1 w-full mt-[55px] md:mt-0 lg:translate-x-[9.4vw] xl:translate-x-[14vw] order-last lg:order-none md:scale-100 origin-center">
            <div className="rounded-2xl overflow-hidden border border-gray-200/50" style={{ boxShadow: "0 25px 80px -12px rgba(0, 0, 0, 0.25), 0 12px 35px -8px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)" }}>
              {/* o filme emenda sozinho (último quadro igual ao primeiro): o loop nativo basta */}
              <video
                key={t.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto block object-cover scale-[1.02] transition-opacity duration-400"
                style={{ marginLeft: "-1%" }}
                preload="auto"
              >
                {t.videoDesktop && <source media="(min-width: 1024px)" src={t.videoDesktop} type="video/mp4" />}
                <source src={t.video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
