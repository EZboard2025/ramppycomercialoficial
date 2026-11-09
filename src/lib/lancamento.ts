// Lançamento do Diagnóstico de vendas (B2C), 2026-11. Enquanto LANCAMENTO_DIAGNOSTICO for true, o hero da home em
// português fala do Diagnóstico (vídeo em motion próprio, botão para a landing da VSL). Quando o lançamento acabar,
// troque para false: o hero volta ao de empresa e a página /diagnostico continua no ar, pelo menu.
// Inglês e espanhol nunca mudam: o Diagnóstico é só para o Brasil.

export const LANCAMENTO_DIAGNOSTICO = true;

/** Entrada do Diagnóstico. A raiz do subdomínio é o tráfego orgânico: não entra no teste das landings dos anúncios. */
export const DIAGNOSTICO_URL = "https://diagnostico.ramppy.site/";

/** A landing com a VSL do Arthur: é para onde vai o "Fazer meu diagnóstico" do hero. */
export const DIAGNOSTICO_VSL_URL = "https://diagnostico.ramppy.site/c";

/** A landing de Black Friday (a oferta com o preço mora lá; o ramppy.com não mostra preço). */
export const DIAGNOSTICO_BLACK_FRIDAY_URL = "https://diagnostico.ramppy.site/d";

/** A VSL do Arthur, a mesma da landing /c, servida pelo app (R2 via /api/files, com Range). */
export const VSL = {
  src: "https://diagnostico.ramppy.site/api/files/PERSONA_AVATARS/diagnostico/video/vsl-v1.mp4",
  poster: "https://diagnostico.ramppy.site/api/files/PERSONA_AVATARS/diagnostico/video/vsl-v1.jpg",
};
