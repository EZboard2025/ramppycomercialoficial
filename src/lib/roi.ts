/**
 * A conta da calculadora de ROI (seção #roi da home e página /calculadora).
 *
 * A pessoa informa quantas reuniões o time faz por dia, a conversão de hoje e o ticket médio. A melhora é fixa e
 * é a de um caso real: um time que nunca tinha vendido na vida, treinado na Ramppy, foi de 18% para 30% de
 * conversão na primeira semana (+12 pontos). O visitante não escolhe a melhora (dono, 2026-10-06).
 */

/** Os pontos de conversão que o caso real ganhou (18% para 30%). */
export const MELHORA_CASO = 12;
/** Dias úteis num mês, para passar de reuniões por dia a reuniões por mês. */
export const DIAS_UTEIS = 22;

export type EntradaRoi = {
  /** Reuniões por dia, somando o time todo. */
  reunioesPorDia: number;
  /** Conversão de hoje, em % (0 a 100). */
  conversao: number;
  /** Ticket médio, na moeda da página. */
  ticket: number;
};

export type ResultadoRoi = {
  reunioesMes: number;
  conversaoNova: number;
  vendasAMais: number;
  receitaMes: number;
  receitaAno: number;
};

const positivo = (n: number) => (Number.isFinite(n) && n > 0 ? n : 0);

export function calcularRoi(e: EntradaRoi): ResultadoRoi {
  const reunioesMes = positivo(e.reunioesPorDia) * DIAS_UTEIS;
  const ticket = positivo(e.ticket);
  const hoje = Math.min(positivo(e.conversao), 100);
  const conversaoNova = Math.min(hoje + MELHORA_CASO, 100);
  // arredonda para não mostrar 26.400000000000002 de ponto flutuante
  const vendasAMais = Math.round(reunioesMes * (conversaoNova - hoje) * 100) / 10000;
  const receitaMes = Math.round(vendasAMais * ticket * 100) / 100;
  return { reunioesMes, conversaoNova, vendasAMais, receitaMes, receitaAno: receitaMes * 12 };
}

/**
 * Lê o número que a pessoa digitou, em qualquer formato: "1.500", "1,500", "18,5", "18.5", "R$ 2.000".
 * Um separador seguido de exatamente 3 dígitos no fim é de milhar; senão o último separador é o decimal.
 */
export function lerNumero(texto: string): number {
  const limpo = texto.replace(/[^\d.,]/g, "");
  if (!/\d/.test(limpo)) return 0;
  const seps = limpo.match(/[.,]/g) ?? [];
  let normal: string;
  if (seps.length === 0) {
    normal = limpo;
  } else {
    const ultimo = Math.max(limpo.lastIndexOf("."), limpo.lastIndexOf(","));
    const depois = limpo.slice(ultimo + 1);
    const soMilhar = depois.length === 3 && (seps.length > 1 ? new Set(seps).size === 1 : true);
    normal = soMilhar
      ? limpo.replace(/[.,]/g, "")
      : limpo.slice(0, ultimo).replace(/[.,]/g, "") + "." + depois;
  }
  const n = Number(normal);
  return Number.isFinite(n) ? n : 0;
}
