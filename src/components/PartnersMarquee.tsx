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
  // Marca oficial do Claude (claude.com) + "for Startups": o programa não publica um logotipo próprio
  { name: "Claude for Startups", logo: "/images/claude-for-startups.png", url: "https://claude.com/programs/startups", altura: "h-[30px] md:h-10" },
  { name: "ElevenLabs", logo: "https://eleven-public-cdn.elevenlabs.io/payloadcms/pwsc4vchsqt-ElevenLabsGrants.webp", url: "https://elevenlabs.io/startup-grants" },
  { name: "Be Growth", logo: "/images/be growth.png", url: "https://begrowth.com.br/" },
  { name: "Grupo Escalar", logo: "/images/grupo escalar.png", url: "https://grupoescalar.com/" },
];

const COPIES = 4;
const SPEED = 0.6; // px por frame do auto-scroll

export type LogoItem = { name: string; logo: string; url?: string; altura?: string };

export default function PartnersMarquee() {
  const locale = useLocale();
  return <LogoMarquee label={labelByLocale[locale] ?? labelByLocale.pt} logos={partners} />;
}

/** Seção com rótulo e a faixa de logos. */
export function LogoMarquee({ label, logos, reverso = false }: { label: string; logos: LogoItem[]; reverso?: boolean }) {
  return (
    <SectionWrapper className="overflow-hidden">
      <div className="py-10 md:py-12">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-text-secondary/70 mb-8">
          {label}
        </p>
        <LogoTrack logos={logos} reverso={reverso} />
      </div>
    </SectionWrapper>
  );
}

/** A faixa de logos que rola sozinha (arrasta com o mouse, pausa no toque). `reverso` rola para a direita.
 *  `margem` estica a faixa até a borda do cartão; `espaco` é o respiro de cada logo. */
export function LogoTrack({
  logos,
  reverso = false,
  margem = "-mx-6 md:-mx-[4%] lg:-mx-[5%] xl:-mx-[5.4%]",
  espaco = "px-8 md:px-14",
}: {
  logos: LogoItem[];
  reverso?: boolean;
  margem?: string;
  espaco?: string;
}) {
  const items = Array.from({ length: COPIES }, () => logos).flat();
  const speed = reverso ? -SPEED : SPEED;

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
        let next = pausedRef.current ? track.scrollLeft : posRef.current + speed;
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
  }, [speed]);

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
    pause();
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    const track = trackRef.current;
    if (!drag.active || !track) return;
    const delta = e.clientX - drag.startX;
    // só captura o ponteiro quando vira arrasto de verdade; capturar no clique roubaria o click dos links
    if (!drag.moved && Math.abs(delta) > 5) {
      drag.moved = true;
      track.setPointerCapture(e.pointerId);
    }
    if (drag.moved) track.scrollLeft = drag.startScroll - delta;
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
    <div
      ref={trackRef}
      className={`${margem} overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none`}
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
              className={`${partner.altura ?? "h-7 md:h-9"} w-auto object-contain opacity-80 transition-opacity duration-300 hover:opacity-100`}
            />
          );
          return (
            <div key={i} className={`shrink-0 ${espaco}`}>
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
  );
}

/** Faixa que passa sem parar (animação CSS), sem arrasto nem pausa: o topo do hero no celular. Rola para a direita. */
export function LogoLoop({ logos, margem = "", espaco = "px-6" }: { logos: LogoItem[]; margem?: string; espaco?: string }) {
  const fade = "linear-gradient(to right, transparent, black 8%, black 92%, transparent)";
  return (
    <div className={`${margem} overflow-hidden`} style={{ maskImage: fade, WebkitMaskImage: fade }}>
      <div className="logos-passando flex w-max items-center">
        {[...logos, ...logos].map((l, i) => (
          <div key={i} className={`shrink-0 ${espaco}`} aria-hidden={i >= logos.length || undefined}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={l.logo}
              alt={i < logos.length ? l.name : ""}
              draggable={false}
              className={`${l.altura ?? "h-7"} w-auto object-contain opacity-80 select-none`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
