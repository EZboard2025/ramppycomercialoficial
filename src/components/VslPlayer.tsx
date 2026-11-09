"use client";

import { useEffect, useRef, useState } from "react";

// O player da VSL, igual ao da landing /c do app (components/diagnostico/landings/LandingVsl.tsx): toca sozinho e
// mudo (o navegador não deixa tocar com som sem um gesto), com "Toque para ouvir" por cima. O primeiro toque liga o
// som e volta ao começo, para a VSL ser ouvida inteira; depois o toque pausa e retoma.

type Estado = "parado" | "mudo" | "tocando" | "pausado";

export default function VslPlayer({ src, poster }: { src: string; poster?: string }) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [estado, setEstado] = useState<Estado>("parado");
  const [progresso, setProgresso] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    el.muted = true;
    el.play().then(() => setEstado("mudo")).catch(() => setEstado("parado"));
  }, [src]);

  const tocar = () => {
    const el = ref.current;
    if (!el) return;
    if (estado === "mudo" || estado === "parado") {
      el.currentTime = 0;
      el.muted = false;
      void el.play().then(() => setEstado("tocando")).catch(() => {});
      return;
    }
    if (estado === "tocando") {
      el.pause();
      setEstado("pausado");
    } else {
      void el.play().then(() => setEstado("tocando")).catch(() => {});
    }
  };

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-teal-dark">
      <video
        ref={ref}
        src={src}
        poster={poster}
        playsInline
        muted
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
        onTimeUpdate={(e) => {
          const el = e.currentTarget;
          if (el.duration > 0) setProgresso(el.currentTime / el.duration);
        }}
        onEnded={() => setEstado("pausado")}
      />
      <button
        type="button"
        onClick={tocar}
        aria-label={estado === "tocando" ? "Pausar" : estado === "mudo" ? "Toque para ouvir" : "Assistir ao vídeo"}
        className="absolute inset-0 flex items-center justify-center focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-white/40"
      >
        {estado === "mudo" && (
          <span className="inline-flex items-center gap-2.5 rounded-full bg-primary-green px-5 py-3 text-[15px] font-semibold text-white shadow-lg max-md:bg-teal-dark/75 max-md:px-4 max-md:py-2.5 max-md:text-[14px] max-md:backdrop-blur-md">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M11 5 6 9H2v6h4l5 4V5z" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
            Toque para ouvir
          </span>
        )}
        {(estado === "parado" || estado === "pausado") && (
          <span className="grid h-16 w-16 place-items-center rounded-full bg-white/90 text-gray-900 shadow-lg">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="ml-1">
              <path d="M7 4l13 8-13 8z" />
            </svg>
          </span>
        )}
      </button>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-white/15" aria-hidden="true">
        <div className="h-full bg-primary-green" style={{ width: `${progresso * 100}%` }} />
      </div>
    </div>
  );
}
