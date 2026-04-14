import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo";
import LangAttr from "@/components/LangAttr";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Ramppy — Ecossistema de vendas com IA",
  description:
    "Treine vendas com IA, analise reuniões automaticamente, gerencie WhatsApp e receba coaching em tempo real. A plataforma completa para times de vendas.",
  applicationName: "Ramppy",
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    title: "Ramppy — Ecossistema de vendas com IA",
    description:
      "Treine vendas com IA, analise reuniões automaticamente e receba coaching em tempo real.",
    url: SITE_URL,
    siteName: "Ramppy",
    locale: "pt_BR",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Ramppy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramppy — Ecossistema de vendas com IA",
    description:
      "Treine vendas com IA, analise reuniões automaticamente e receba coaching em tempo real.",
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-[var(--font-inter-tight)]">
        <LangAttr />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
