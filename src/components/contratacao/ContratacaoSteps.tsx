"use client";

import SectionWrapper from "../SectionWrapper";
import { useLocale } from "@/i18n/LocaleContext";
import { CONTRATACAO_COPY } from "./copy";
import {
  ScreenBars,
  ScreenCall,
  ScreenLink,
  ScreenRadar,
  ScreenRank,
  WhenVisible,
} from "./screens";

const WHATSAPP = "https://wa.me/5531995525157";

const SCREENS = [ScreenLink, ScreenCall, ScreenBars, ScreenRank] as const;

export default function ContratacaoSteps() {
  const locale = useLocale();
  const t = CONTRATACAO_COPY[locale];

  return (
    <SectionWrapper id="contratacao">
      <div className="py-16 md:py-32">
        {/* Cabeçalho */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-20">
          <span className="inline-block rounded-full bg-green-surface px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-green">
            {t.badge}
          </span>
          <h2 className="mt-5 font-[var(--font-fustat)] text-2xl font-semibold leading-[110%] tracking-[-0.04em] text-teal-dark md:text-[32px] lg:text-[48px]">
            {t.titleA}
            <span className="relative isolate inline-block">
              <span className="relative z-10">{t.titleHighlight}</span>
              <svg
                className="pointer-events-none absolute -left-3 -top-2 z-0 h-[calc(100%+16px)] w-[calc(100%+24px)]"
                viewBox="0 0 200 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M 30 38 C 25 18, 65 6, 110 8 C 155 10, 190 18, 188 38 C 186 58, 150 72, 100 74 C 50 76, 12 62, 14 42 C 16 28, 45 16, 90 14"
                  stroke="#4CAF50"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  className="draw-circle-path"
                />
              </svg>
            </span>
            {t.titleB}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* Os quatro passos */}
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-x-12 md:gap-y-20">
          {t.steps.map((step, i) => {
            const Screen = SCREENS[i];
            return (
              <div key={step.title} className="flex flex-col">
                <div className="mb-5 flex items-baseline gap-3">
                  <span className="font-[var(--font-fustat)] text-2xl font-semibold tabular-nums text-primary-green/35">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-[var(--font-fustat)] text-lg font-semibold text-teal-dark md:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 max-w-md text-sm leading-relaxed text-text-secondary md:text-base">
                      {step.body}
                    </p>
                  </div>
                </div>
                <WhenVisible className="mx-auto w-full max-w-[440px]">
                  {(active) => <Screen active={active} />}
                </WhenVisible>
              </div>
            );
          })}
        </div>

        {/* Fecho */}
        <div className="mt-16 border-t border-border-light pt-14 md:mt-28 md:pt-20">
          <div className="flex flex-col items-center gap-10 md:flex-row md:gap-14">
            <div className="flex-1">
              <h3 className="font-[var(--font-fustat)] text-3xl font-semibold leading-[105%] tracking-[-0.03em] text-teal-dark md:text-[44px]">
                {t.statementA}
                <br />
                <span className="text-primary-green">{t.statementB}</span>
              </h3>
              <p className="mt-5 max-w-md text-base leading-relaxed text-text-secondary">
                {t.statementBody}
              </p>
              <a
                href={`${WHATSAPP}?text=${encodeURIComponent(t.whatsapp)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary-green px-6 py-3.5 font-[var(--font-fustat)] text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-green-dark active:scale-[0.98]"
              >
                {t.cta}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16l4-4-4-4" />
                  <path d="M8 12h8" />
                </svg>
              </a>
            </div>
            <WhenVisible className="w-full max-w-[420px] shrink-0">
              {(active) => <ScreenRadar active={active} />}
            </WhenVisible>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
