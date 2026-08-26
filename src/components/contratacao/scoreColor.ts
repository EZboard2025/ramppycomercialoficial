// Rampa de cor das notas — a mesma do produto (lib/scoreColor.ts):
// vermelho → laranja → amarelo → lima → verde → profundidade da marca.
const SCORE_STOPS: readonly [number, readonly [number, number, number]][] = [
  [0, [239, 68, 68]],
  [4.5, [249, 115, 22]],
  [6, [234, 179, 8]],
  [7, [132, 175, 30]],
  [8.5, [34, 139, 99]],
  [10, [21, 96, 75]],
];

function lerpScore(score: number): [number, number, number] {
  const c = Math.max(0, Math.min(score, 10));
  for (let i = 0; i < SCORE_STOPS.length - 1; i++) {
    const [s0, c0] = SCORE_STOPS[i];
    const [s1, c1] = SCORE_STOPS[i + 1];
    if (c <= s1) {
      const t = s1 === s0 ? 0 : (c - s0) / (s1 - s0);
      return [
        Math.round(c0[0] + (c1[0] - c0[0]) * t),
        Math.round(c0[1] + (c1[1] - c0[1]) * t),
        Math.round(c0[2] + (c1[2] - c0[2]) * t),
      ];
    }
  }
  return [...SCORE_STOPS[SCORE_STOPS.length - 1][1]] as [number, number, number];
}

/** Cor de preenchimento (barra, ponto) para uma nota de 0 a 10. */
export function scoreFill(score: number): string {
  const [r, g, b] = lerpScore(score);
  return `rgb(${r},${g},${b})`;
}

/** Cor do texto da nota: 72% do preenchimento, para manter contraste no branco. */
export function scoreText(score: number): string {
  const [r, g, b] = lerpScore(score);
  return `rgb(${Math.round(r * 0.72)},${Math.round(g * 0.72)},${Math.round(b * 0.72)})`;
}

/** Formata a nota no padrão do produto: uma casa decimal, vírgula decimal. */
export function formatScore(score: number, locale: "pt" | "en" | "es"): string {
  const fixed = score.toFixed(1);
  return locale === "en" ? fixed : fixed.replace(".", ",");
}
