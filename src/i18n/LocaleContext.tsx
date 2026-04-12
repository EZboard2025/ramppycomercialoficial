"use client";

import { createContext, useContext } from "react";
import { usePathname } from "next/navigation";

export type Locale = "pt" | "en";

const LocaleContext = createContext<Locale | null>(null);

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Locale {
  const override = useContext(LocaleContext);
  const pathname = usePathname();
  if (override) return override;
  if (pathname && (pathname === "/en" || pathname.startsWith("/en/"))) return "en";
  return "pt";
}

export function pickLocale<T>(locale: Locale, values: { pt: T; en: T }): T {
  return values[locale];
}

export function localizeHref(locale: Locale, href: string): string {
  if (locale === "pt") return href;
  if (!href.startsWith("/")) return href;
  if (href === "/") return "/en";
  if (href.startsWith("/#")) return "/en" + href.slice(1);
  if (href.startsWith("/en/") || href === "/en") return href;
  return "/en" + href;
}
