"use client";

import { useEffect, useRef } from "react";
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

const COPIES = 4;
const SPEED = 0.6; // px por frame do auto-scroll

export default function PartnersMarquee() {
  const locale = useLocale();
  const label = labelByLocale[locale] ?? labelByLocale.pt;
  const items = Array.from({ length: COPIES }, () => partners).flat();

  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const posRef = useRef(0);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dragRef = useRef({ active: false, startX: 0, startScroll: 0, moved: false });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;

    const step = () => {
      const setWidth = track.scrollWidth / COPIES;
      if (setWidth > 0) {
        let next = pausedRef.current ? track.scrollLeft : posRef.current + SPEED;
        let wrapped = false;
        // mantém a posição dentro das cópias do meio pra rolagem infinita nos dois sentidos
        if (next >= setWidth * 2) {
          next -= setWidth;
          wrapped = true;
        } else if (next <= 0) {
          next += setWidth;
          wrapped = true;
        }
        posRef.current = next;
        if (!pausedRef.current || wrapped) track.scrollLeft = next;
      }
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(raf);
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  const pause = () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    pausedRef.current = true;
  };

  const resumeAfter = (ms: number) => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      pausedRef.current = false;
    }, ms);
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const track = trackRef.current;
    if (!track) return;
    dragRef.current = { active: true, startX: e.clientX, startScroll: track.scrollLeft, moved: false };
    track.setPointerCapture(e.pointerId);
    pause();
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    const track = trackRef.current;
    if (!drag.active || !track) return;
    const delta = e.clientX - drag.startX;
    if (Math.abs(delta) > 5) drag.moved = true;
    track.scrollLeft = drag.startScroll - delta;
  };

  const onPointerUp = () => {
    dragRef.current.active = false;
    resumeAfter(300);
  };

  const onClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (dragRef.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      dragRef.current.moved = false;
    }
  };

  return (
    <SectionWrapper className="overflow-hidden">
      <div className="py-10 md:py-12">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-text-secondary/70 mb-8">
          {label}
        </p>
        <div
          ref={trackRef}
          className="-mx-6 md:-mx-[4%] lg:-mx-[5%] xl:-mx-[5.4%] overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
          onMouseEnter={pause}
          onMouseLeave={() => {
            if (!dragRef.current.active) resumeAfter(0);
          }}
          onTouchStart={pause}
          onTouchEnd={() => resumeAfter(1500)}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onClickCapture={onClickCapture}
        >
          <div className="flex w-max items-center">
            {items.map((partner, i) => {
              const logo = (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  draggable={false}
                  className="h-7 md:h-9 w-auto object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
                />
              );
              return (
                <div key={i} className="shrink-0 px-8 md:px-14">
                  {partner.url ? (
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                      draggable={false}
                    >
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
