import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ramppy — Ecossistema Completo de Vendas com IA",
  description:
    "Treine vendas com IA, analise reuniões automaticamente, gerencie WhatsApp e receba coaching em tempo real. A plataforma completa para times de vendas.",
  keywords: [
    "vendas",
    "IA",
    "inteligencia artificial",
    "treinamento de vendas",
    "SPIN selling",
    "roleplay",
    "análise de reuniões",
    "copiloto de vendas",
  ],
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    title: "Ramppy — Ecossistema Completo de Vendas com IA",
    description:
      "Treine vendas com IA, analise reuniões automaticamente e receba coaching em tempo real.",
    type: "website",
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
      <body className="font-[var(--font-inter-tight)]">{children}</body>
    </html>
  );
}
