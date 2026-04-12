"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LangAttr() {
  const pathname = usePathname();
  useEffect(() => {
    if (!pathname) return;
    const isEn = pathname === "/en" || pathname.startsWith("/en/");
    document.documentElement.lang = isEn ? "en" : "pt-BR";
  }, [pathname]);
  return null;
}
