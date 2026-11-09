"use client";

import { LogoMarquee, type LogoItem } from "./PartnersMarquee";
import { useLocale } from "@/i18n/LocaleContext";
import { LANCAMENTO_DIAGNOSTICO } from "@/lib/lancamento";

const labelByLocale = {
  pt: "Empresas que usam a Ramppy",
  en: "Companies that use Ramppy",
  es: "Empresas que usan Ramppy",
};

export const clientesLabel = labelByLocale;

// Os mesmos logos da página /diagnostico; a altura de cada um equilibra o peso visual entre eles.
export const clientes: LogoItem[] = [
  { name: "Zoppy", logo: "/images/diagnostico/zoppy.svg", altura: "h-6 md:h-9" },
  { name: "G4 Educação", logo: "/images/diagnostico/g4.png", altura: "h-8 md:h-11" },
  { name: "Allu", logo: "/images/diagnostico/allu.png", altura: "h-7 md:h-10" },
  { name: "Sambatech", logo: "/images/diagnostico/sambatech-horizontal.png", altura: "h-[22px] md:h-8" },
  { name: "Grupo Escalar", logo: "/images/diagnostico/grupo-escalar.png", altura: "h-5 md:h-7" },
];

/** Os clientes, logo acima dos parceiros; rola no sentido contrário para as duas faixas não parecerem uma só.
 *  No lançamento, no celular, a faixa sobe para o topo do hero (no lugar da pílula), então aqui some abaixo de md. */
export default function ClientsMarquee() {
  const locale = useLocale();
  const noHero = LANCAMENTO_DIAGNOSTICO && locale === "pt";
  return (
    <div className={noHero ? "hidden md:block" : undefined}>
      <LogoMarquee label={labelByLocale[locale] ?? labelByLocale.pt} logos={clientes} reverso />
    </div>
  );
}
