"use client";

import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import CTA from "@/components/CTA";
import FaqAccordion from "@/components/ajuda/FaqAccordion";
import { useLocale } from "@/i18n/LocaleContext";
import { ajudaStrings } from "@/data/ajuda";


export default function AjudaContent() {
  const locale = useLocale();
  const t = ajudaStrings[locale];

  return (
    <>
      <PageHero badge={t.heroBadge} title={t.heroTitle} subtitle={t.heroSubtitle} />

      {/* FAQ Accordion */}
      <SectionWrapper>
        <div className="py-10 md:py-16">
          <h2 className="font-[var(--font-fustat)] text-[32px] md:text-[48px] font-semibold leading-[110%] tracking-[-0.04em] text-teal-dark mb-10">
            {t.faqHeading}
          </h2>
          <div className="max-w-3xl">
            <FaqAccordion categories={t.sections} />
          </div>
        </div>
      </SectionWrapper>

      {/* Contact support section */}
      <SectionWrapper>
        <div className="py-10 md:py-16">
          <div className="bg-green-surface/50 border border-primary-green/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-[var(--font-fustat)] text-2xl md:text-3xl font-semibold text-teal-dark mb-3">
              {t.supportTitle}
            </h2>
            <p className="text-text-secondary mb-6 max-w-md mx-auto">
              {t.supportSubtitle}
            </p>
            <a
              href={t.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-[var(--font-fustat)] inline-flex items-center gap-2 text-base font-semibold px-8 py-4 rounded-full bg-primary-green text-white hover:bg-green-dark transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary-green/30"
            >
              {t.supportCta}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </SectionWrapper>

      <CTA />
    </>
  );
}
