import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo";
import LangAttr from "@/components/LangAttr";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Ramppy — Simulação de vendas para contratar vendedores",
  description:
    "Veja o candidato vender antes de contratar: ele conduz uma venda real com um cliente sintético e você recebe nota por etapa e ranking. Depois, a mesma IA treina e avalia o time que já está em campo.",
  applicationName: "Ramppy",
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    title: "Ramppy — Simulação de vendas para contratar vendedores",
    description:
      "Veja o candidato vender antes de contratar. Depois, a mesma IA treina e avalia o time que já está em campo.",
    url: SITE_URL,
    siteName: "Ramppy",
    locale: "pt_BR",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Ramppy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramppy — Simulação de vendas para contratar vendedores",
    description:
      "Veja o candidato vender antes de contratar. Depois, a mesma IA treina e avalia o time que já está em campo.",
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
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "wc6z1n7pan");`}
        </Script>
      </body>
    </html>
  );
}
