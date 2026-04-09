"use client";

import { useState } from "react";
import RamppyLogo from "./RamppyLogo";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Funcionalidades", href: "/#funcionalidades" },
    { label: "Como funciona", href: "/#como-funciona" },
    { label: "Planos", href: "/#planos" },
  ];

  return (
    <header className="flex gap-[1px]">
      <div className="content-side rounded-r-lg" />
      <div className="content-center">
        <div className="flex items-center justify-between h-[80px] px-6 md:px-8 lg:px-16 xl:px-[104px]">
          {/* Logo */}
          <a href="/" className="flex items-center lg:ml-12 xl:ml-20">
            <img src="/images/Logo Moderna Verde branco (1).png" alt="Ramppy" className="h-8 object-contain" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-[var(--font-fustat)] text-base font-semibold text-teal-medium px-4 py-3 rounded-full hover:bg-surface-hover transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#planos"
              className="font-[var(--font-fustat)] text-base font-semibold text-teal-medium px-4 py-3 rounded-full hover:bg-surface-hover transition-colors duration-300"
            >
              Login
            </a>
            <a
              href="#planos"
              className="font-[var(--font-fustat)] text-base font-semibold px-5 py-3 rounded-full bg-primary-green text-white hover:bg-green-dark transition-all duration-300"
            >
              Comece gratis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileOpen ? (
                <path d="M6 6L18 18M6 18L18 6" />
              ) : (
                <path d="M4 6H20M4 12H20M4 18H20" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden px-6 pb-6 flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-[var(--font-fustat)] text-base font-semibold text-teal-medium px-4 py-3 rounded-xl hover:bg-surface-hover transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#planos"
              onClick={() => setMobileOpen(false)}
              className="font-[var(--font-fustat)] text-base font-semibold px-5 py-3 rounded-full bg-primary-green text-white text-center hover:bg-green-dark transition-all duration-300 mt-2"
            >
              Comece gratis
            </a>
          </div>
        )}
      </div>
      <div className="content-side rounded-l-lg" />
    </header>
  );
}
