"use client";

import { createContext, useContext } from "react";
import { usePathname } from "next/navigation";

export type Locale = "pt" | "en" | "es";

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
  if (pathname && (pathname === "/es" || pathname.startsWith("/es/"))) return "es";
  return "pt";
}

export function pickLocale<T>(locale: Locale, values: { pt: T; en: T; es: T }): T {
  return values[locale];
}

export function localizeHref(locale: Locale, href: string): string {
  if (locale === "pt") return href;
  if (!href.startsWith("/")) return href;
  const prefix = locale === "en" ? "/en" : "/es";
  if (href === "/") return prefix;
  if (href.startsWith("/#")) return prefix + href.slice(1);
  if (href.startsWith(prefix + "/") || href === prefix) return href;
  return prefix + href;
}
