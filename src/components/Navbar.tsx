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
  const headerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const [dropdownStyle, setDropdownStyle] = useState<{ left: number; width: number } | null>(null);

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
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
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
    if (logoRef.current && ctaRef.current) {
      const logoRect = logoRef.current.getBoundingClientRect();
      const ctaRect = ctaRef.current.getBoundingClientRect();
      const padding = 20;
      setDropdownStyle({
        left: logoRect.left - padding,
        width: ctaRect.right - logoRect.left + padding * 2,
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
    <header className="flex gap-[1px] relative z-50" ref={headerRef}>
      <div className="content-side rounded-r-lg" />
      <div className="content-center overflow-visible">
        {/* Top bar */}
        <div className="flex items-center justify-between h-20 md:h-[80px] px-4 md:px-8 max-w-7xl mx-auto w-full">
          {/* Mobile: Logo + CTA */}
          <a href={homeHref} className="flex items-center shrink-0 lg:hidden">
            <img src="/images/Logo Moderna Verde branco (1).png" alt="Ramppy" className="h-7 object-contain" />
          </a>
          <a
            href={plansHref}
            className="lg:hidden font-[var(--font-fustat)] text-xs font-semibold px-4 py-2.5 rounded-full bg-primary-green text-white hover:bg-green-dark transition-all duration-300 inline-flex items-center gap-1.5"
          >
            {lbl.cta}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>

          {/* Desktop Nav — logo + links + CTA all together centered */}
          <div className="hidden lg:flex items-center justify-center gap-6 w-full relative z-50">
            <a ref={logoRef} href={homeHref} className="flex items-center shrink-0">
              <img src="/images/Logo Moderna Verde branco (1).png" alt="Ramppy" className="h-8 object-contain" />
            </a>

            <nav className="flex items-center gap-1">
              {menuOrder.map((key) => (
                <button
                  key={key}
                  className={`font-[var(--font-fustat)] text-[15px] font-semibold px-4 py-3 rounded-full flex items-center gap-1.5 transition-colors duration-200 ${
                    openMenu === key
                      ? "bg-surface-hover text-teal-dark"
                      : "text-teal-medium hover:bg-surface-hover"
                  }`}
                  onMouseEnter={() => handleEnter(key)}
                  onMouseLeave={handleLeave}
                  onClick={() => (openMenu === key ? closeMenu() : handleEnter(key))}
                >
                  {menuData[key].title}
                  <svg
                    width="10"
                    height="6"
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
                className="font-[var(--font-fustat)] text-[15px] font-semibold text-teal-medium px-4 py-3 rounded-full hover:bg-surface-hover transition-colors duration-200"
                onMouseEnter={() => {
                  if (timeoutRef.current) clearTimeout(timeoutRef.current);
                  closeMenu();
                }}
              >
                {lbl.plans}
              </a>
            </nav>

            <a
              ref={ctaRef}
              href={plansHref}
              className="font-[var(--font-fustat)] text-[15px] font-semibold px-5 py-3 rounded-full bg-primary-green text-white hover:bg-green-dark transition-all duration-300 shrink-0"
            >
              {lbl.cta}
            </a>
          </div>
        </div>

        {/* Backdrop blur — covers entire screen */}
        {isAnyOpen && (
          <div
            className={`hidden lg:block fixed inset-0 z-40 bg-black/10 backdrop-blur-[2px] transition-all duration-500 ${closing ? "opacity-0" : "opacity-100"}`}
            style={{ animation: closing ? undefined : "fadeIn 0.5s ease-out" }}
            onClick={() => closeMenu()}
          />
        )}

        {/* White background panel behind header bar */}
        {isAnyOpen && dropdownStyle && (
          <div
            className={`hidden lg:block fixed top-0 z-[45] bg-white transition-opacity duration-250 ${closing ? "opacity-0" : "opacity-100"}`}
            style={{ left: dropdownStyle.left, width: dropdownStyle.width, height: "80px" }}
          />
        )}

        {/* Desktop Mega Dropdown */}
        {isAnyOpen && dropdownStyle && (
          <div
            key={closing ? "closing" : "open"}
            className={`hidden lg:block fixed top-[80px] z-50 ${closing ? "animate-dropdown-close" : "animate-dropdown"}`}
            style={{ left: dropdownStyle.left, width: dropdownStyle.width }}
            onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); if (closeTimeoutRef.current) { clearTimeout(closeTimeoutRef.current); setClosing(false); } }}
            onMouseLeave={handleLeave}
          >
            <div className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] w-full">
              <div className="border-t border-border-light/40 mx-6" />
              <div className="px-10 py-8">
                <div className="grid grid-cols-3 gap-10">
                  {menuOrder.map((key) => (
                    <div key={key}>
                      <h3 className={`font-[var(--font-fustat)] text-xs font-bold uppercase tracking-wider mb-4 ${
                        openMenu === key ? "text-primary-green" : "text-text-secondary/60"
                      }`}>
                        {menuData[key].title}
                      </h3>
                      <div className="flex flex-col gap-1">
                        {menuData[key].items.map((item) => (
                          <a
                            key={item.label}
                            href={localizeHref(locale, item.href)}
                            className="group flex flex-col gap-0.5 px-3 py-2.5 -mx-3 rounded-xl hover:bg-surface-hover transition-colors duration-150"
                            onClick={() => closeMenu()}
                          >
                            <span className="font-[var(--font-fustat)] text-sm font-semibold text-teal-dark group-hover:text-primary-green transition-colors">
                              {item.label}
                            </span>
                            <span className="text-xs text-text-secondary">
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
      <div className="content-side rounded-l-lg" />
    </header>
  );
}

