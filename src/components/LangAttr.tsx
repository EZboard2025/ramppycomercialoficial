"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LangAttr() {
  const pathname = usePathname();
  useEffect(() => {
    if (!pathname) return;
    const isEn = pathname === "/en" || pathname.startsWith("/en/");
    const isEs = pathname === "/es" || pathname.startsWith("/es/");
    document.documentElement.lang = isEn ? "en" : isEs ? "es" : "pt-BR";
  }, [pathname]);
  return null;
}
