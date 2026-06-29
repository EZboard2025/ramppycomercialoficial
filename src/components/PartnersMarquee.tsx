"use client";

import SectionWrapper from "./SectionWrapper";
import { useLocale } from "@/i18n/LocaleContext";

const labelByLocale = {
  pt: "Parceiros e apoiadores",
  en: "Partners & supporters",
  es: "Partners y aliados",
};

const partners = [
  { name: "Growthway", logo: "/images/gpEEaKIzXt5vOrnP2EA3vRSbUUU.svg", url: "https://growthway.vc/" },
  { name: "Newhack", logo: "/images/Newhack logo.png", url: "https://newhack.vc/" },
  { name: "Sebrae", logo: "/images/Sebrae logo.png", url: "https://www.sebrae.com.br/" },
  { name: "Google for Startups", logo: "/images/google-for-startups.svg", url: "https://cloud.google.com/startup" },
  { name: "ElevenLabs", logo: "https://eleven-public-cdn.elevenlabs.io/payloadcms/pwsc4vchsqt-ElevenLabsGrants.webp", url: "https://elevenlabs.io/startup-grants" },
  { name: "Be Growth", logo: "/images/be growth.png", url: "https://begrowth.com.br/" },
  { name: "Grupo Escalar", logo: "/images/grupo escalar.png", url: "https://grupoescalar.com/" },
];

export default function PartnersMarquee() {
  const locale = useLocale();
  const label = labelByLocale[locale] ?? labelByLocale.pt;
  const items = [...partners, ...partners];

  return (
    <SectionWrapper className="overflow-hidden">
      <div className="py-10 md:py-12">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-text-secondary/70 mb-8">
          {label}
        </p>
        <div
          className="-mx-6 md:-mx-[4%] lg:-mx-[5%] xl:-mx-[5.4%]"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="flex w-max items-center animate-carousel hover:[animation-play-state:paused]">
            {items.map((partner, i) => {
              const logo = (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-7 md:h-9 w-auto object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
                />
              );
              return (
                <div key={i} className="shrink-0 px-8 md:px-14">
                  {partner.url ? (
                    <a href={partner.url} target="_blank" rel="noopener noreferrer" className="block">
                      {logo}
                    </a>
                  ) : (
                    logo
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
