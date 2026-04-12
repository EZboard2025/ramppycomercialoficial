"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale, localizeHref } from "@/i18n/LocaleContext";

type MenuKey = "product" | "resources" | "company";
type MenuItem = { label: string; description: string; href: string };

const menuDataPt: Record<MenuKey, { title: string; items: MenuItem[] }> = {
  product: {
    title: "Produto",
    items: [
      { label: "Simulação", description: "Treine vendedores com IA", href: "/#funcionalidades" },
      { label: "Análise Meet", description: "Avalie reuniões reais", href: "/como-funciona#passo-04" },
      { label: "Copiloto Nicole", description: "IA assistente de vendas", href: "/#nicole" },
      { label: "Gestão", description: "Gerencie seu time", href: "/como-funciona#passo-06" },
    ],
  },
  resources: {
    title: "Recursos",
    items: [
      { label: "Como funciona", description: "Entenda o fluxo completo", href: "/como-funciona" },
      { label: "Metodologia SPIN", description: "Framework de vendas", href: "/metodologia-spin" },
      { label: "Blog", description: "Artigos e novidades", href: "/blog" },
      { label: "Central de ajuda", description: "Dúvidas frequentes", href: "/ajuda" },
    ],
  },
  company: {
    title: "Empresa",
    items: [
      { label: "Sobre nós", description: "Conheça a Ramppy", href: "/sobre" },
      { label: "Contato", description: "Fale conosco", href: "/contato" },
      { label: "Parceiros", description: "Programa de parceiros", href: "/parceiros" },
    ],
  },
};

const menuDataEn: Record<MenuKey, { title: string; items: MenuItem[] }> = {
  product: {
    title: "Product",
    items: [
      { label: "Simulation", description: "Train sales reps with AI", href: "/#funcionalidades" },
      { label: "Meet Analysis", description: "Review real meetings", href: "/como-funciona#passo-04" },
      { label: "Nicole Copilot", description: "AI sales assistant", href: "/#nicole" },
      { label: "Management", description: "Lead your team", href: "/como-funciona#passo-06" },
    ],
  },
  resources: {
    title: "Resources",
    items: [
      { label: "How it works", description: "Understand the full flow", href: "/como-funciona" },
      { label: "SPIN Methodology", description: "Sales framework", href: "/metodologia-spin" },
      { label: "Blog", description: "Articles and news", href: "/blog" },
      { label: "Help center", description: "Frequently asked questions", href: "/ajuda" },
    ],
  },
  company: {
    title: "Company",
    items: [
      { label: "About us", description: "Meet Ramppy", href: "/sobre" },
      { label: "Contact", description: "Get in touch", href: "/contato" },
      { label: "Partners", description: "Partner program", href: "/parceiros" },
    ],
  },
};

const labels = {
  pt: {
    plans: "Planos",
    cta: "Marcar teste grátis",
  },
  en: {
    plans: "Plans",
    cta: "Book free trial",
  },
};

const menuOrder: MenuKey[] = ["product", "resources", "company"];

export default function Navbar() {
  const locale = useLocale();
  const menuData = locale === "en" ? menuDataEn : menuDataPt;
  const lbl = labels[locale];

  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [closing, setClosing] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const islandRef = useRef<HTMLDivElement>(null);
  const [dropdownStyle, setDropdownStyle] = useState<{ left: number; width: number; top: number } | null>(null);

  function closeMenu() {
    setClosing(true);
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
      setClosing(false);
    }, 250);
  }

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (islandRef.current && !islandRef.current.contains(e.target as Node)) {
        closeMenu();
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  function handleEnter(key: MenuKey) {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      setClosing(false);
    }
    if (islandRef.current) {
      const rect = islandRef.current.getBoundingClientRect();
      setDropdownStyle({
        left: rect.left,
        width: rect.width,
        top: rect.bottom,
      });
    }
    setOpenMenu(key);
  }

  function handleLeave() {
    timeoutRef.current = setTimeout(() => closeMenu(), 200);
  }

  const isAnyOpen = openMenu !== null;
  const homeHref = localizeHref(locale, "/");
  const plansHref = localizeHref(locale, "/#planos");

  return (
    <>
      {/* Single header element: mobile nav + desktop spacer (no separator line) */}
      <header className="flex relative z-50 lg:z-0 lg:-mb-[1px]">
        <div className="content-side rounded-r-lg" />
        <div className="content-center">
          <div className="flex items-center justify-between h-20 px-4 lg:hidden">
            <a href={homeHref} className="flex items-center shrink-0">
              <img src="/images/Logo Moderna Verde branco (1).png" alt="Ramppy" className="h-7 object-contain" />
            </a>
            <a
              href={plansHref}
              className="font-[var(--font-fustat)] text-xs font-semibold px-4 py-2.5 rounded-full bg-primary-green text-white hover:bg-green-dark transition-all duration-300 inline-flex items-center gap-1.5"
            >
              {lbl.cta}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="hidden lg:block h-20" />
        </div>
        <div className="content-side rounded-l-lg" />
      </header>

      {/* SVG filter for Liquid Glass refraction */}
      <svg aria-hidden="true" style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="liquid-glass" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.012" numOctaves="2" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="18" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* Desktop Dynamic Island */}
      <div className="hidden lg:block fixed top-5 left-1/2 -translate-x-1/2 z-50" ref={islandRef}>
        {/* Island container */}
        <div
          className={`flex items-center gap-2 px-4 py-3 transition-all duration-300 ${
            isAnyOpen && !closing
              ? "bg-white rounded-t-[24px] shadow-[0_8px_60px_rgba(0,0,0,0.12)]"
              : "bg-white/60 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.25),0_12px_50px_rgba(0,0,0,0.1),0_0_80px_rgba(255,255,255,0.15)]"
          }`}
          style={
            isAnyOpen && !closing
              ? undefined
              : {
                  backdropFilter: "url(#liquid-glass) blur(12px) saturate(1.6)",
                  WebkitBackdropFilter: "blur(12px) saturate(1.6)",
                }
          }
          onMouseLeave={handleLeave}
        >
          {/* Logo */}
          <a href={homeHref} className="flex items-center shrink-0 pl-2">
            <img src="/images/Logo Moderna Verde branco (1).png" alt="Ramppy" className="h-7 object-contain" />
          </a>

          {/* Nav links */}
          <nav className="flex items-center gap-0.5 ml-2">
            {menuOrder.map((key) => (
              <button
                key={key}
                className={`font-[var(--font-fustat)] text-[14px] font-semibold px-3.5 py-2 rounded-full flex items-center gap-1.5 transition-colors duration-200 ${
                  openMenu === key
                    ? "bg-gray-100 text-teal-dark"
                    : "text-gray-600 hover:bg-gray-50 hover:text-teal-dark"
                }`}
                onMouseEnter={() => handleEnter(key)}
                onClick={() => (openMenu === key ? closeMenu() : handleEnter(key))}
              >
                {menuData[key].title}
                <svg
                  width="9"
                  height="5"
                  viewBox="0 0 10 6"
                  fill="none"
                  className={`transition-transform duration-200 ${openMenu === key ? "rotate-180" : ""}`}
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            ))}

            <a
              href={plansHref}
              className="font-[var(--font-fustat)] text-[14px] font-semibold text-gray-600 px-3.5 py-2 rounded-full hover:bg-gray-50 hover:text-teal-dark transition-colors duration-200"
              onMouseEnter={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                closeMenu();
              }}
            >
              {lbl.plans}
            </a>
          </nav>

          {/* CTA with animated glow ring */}
          <div className="relative inline-flex shrink-0 ml-1 rounded-full p-[2px] overflow-hidden">
            <div className="absolute inset-0 glow-ring-bg animate-spin-slow" aria-hidden="true" />
            <a
              href={plansHref}
              className="relative font-[var(--font-fustat)] text-[13px] font-semibold px-5 py-2.5 rounded-full bg-primary-green text-white hover:bg-green-dark transition-all duration-300"
            >
              {lbl.cta}
            </a>
          </div>
        </div>

        {/* Dropdown — attached below the island */}
        {isAnyOpen && (
          <div
            key={closing ? "closing" : "open"}
            className={`${closing ? "animate-dropdown-close" : "animate-dropdown"}`}
            onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); if (closeTimeoutRef.current) { clearTimeout(closeTimeoutRef.current); setClosing(false); } }}
            onMouseLeave={handleLeave}
          >
            <div className={`bg-white w-full shadow-[0_20px_60px_rgba(0,0,0,0.1)] rounded-b-[24px] transition-all duration-300 ${closing ? "opacity-0" : "opacity-100"}`}>
              <div className="border-t border-gray-100 mx-5" />
              <div className="px-8 py-7">
                <div className="grid grid-cols-3 gap-8">
                  {menuOrder.map((key) => (
                    <div key={key}>
                      <h3 className={`font-[var(--font-fustat)] text-xs font-bold uppercase tracking-wider mb-4 ${
                        openMenu === key ? "text-primary-green" : "text-gray-400"
                      }`}>
                        {menuData[key].title}
                      </h3>
                      <div className="flex flex-col gap-0.5">
                        {menuData[key].items.map((item) => (
                          <a
                            key={item.label}
                            href={localizeHref(locale, item.href)}
                            className="group flex flex-col gap-0.5 px-3 py-2.5 -mx-3 rounded-xl hover:bg-gray-50 transition-colors duration-150"
                            onClick={() => closeMenu()}
                          >
                            <span className="font-[var(--font-fustat)] text-sm font-semibold text-teal-dark group-hover:text-primary-green transition-colors">
                              {item.label}
                            </span>
                            <span className="text-xs text-gray-400">
                              {item.description}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Backdrop blur — desktop only, when dropdown open */}
      {isAnyOpen && (
        <div
          className={`hidden lg:block fixed inset-0 z-40 bg-black/5 backdrop-blur-[2px] transition-all duration-500 ${closing ? "opacity-0" : "opacity-100"}`}
          style={{ animation: closing ? undefined : "fadeIn 0.5s ease-out" }}
          onClick={() => closeMenu()}
        />
      )}
    </>
  );
}
