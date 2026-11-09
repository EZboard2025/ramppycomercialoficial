import SectionWrapper from "@/components/SectionWrapper";
import VslPlayer from "@/components/VslPlayer";
import { DIAGNOSTICO_BLACK_FRIDAY_URL, DIAGNOSTICO_URL, VSL } from "@/lib/lancamento";

// Página do Diagnóstico de vendas (B2C) no ramppy.com, só em português. É a landing /c do app
// (diagnostico.ramppy.site/c) no visual do site: a VSL do Arthur, o case da Zoppy, como funciona, o que a pessoa
// leva e as perguntas frequentes. Sem preço (o ramppy.com não mostra preço): a oferta de Black Friday fica num link
// para a landing /d. O botão leva para a entrada do Diagnóstico (a raiz do subdomínio, fora do teste das landings).

const CASE = { antes: 18, depois: 30, dias: 3, aumento: 70 };

const RELATORIO = {
  nota: 6.1,
  categorias: [
    { nome: "Abertura e condução", nota: 7.7 },
    { nome: "Qualificação", nota: 5.3 },
    { nome: "Apresentação da solução", nota: 4.9 },
    { nome: "Objeções", nota: 6.2 },
    { nome: "Encerramento", nota: 7.0 },
  ],
};

const PASSOS = [
  { titulo: "Conheça o cliente", texto: "Um vídeo curto apresenta o produto e quem vai atender a ligação." },
  { titulo: "Ligue", texto: "10 minutos, por voz, no navegador. Ele hesita, objeta e pressiona, como um cliente de verdade." },
  { titulo: "Veja onde você erra", texto: "Nota de 0 a 10 em cada parte da venda e o que fazer para chegar no 10." },
];

const LEVA = [
  "Sua nota em cada etapa da venda.",
  "Os erros que mais te custam vendas.",
  "O que fazer para chegar no 10.",
  "A transcrição da sua ligação.",
  "Um plano de capacitação montado a partir do que travou.",
];

const FAQ = [
  { p: "Preciso instalar algo?", r: "Não. Funciona no navegador, no celular ou no computador. Só precisa de um microfone." },
  { p: "Do outro lado é uma pessoa?", r: "Não. É um cliente sintético que reage ao que você fala, igual a um de verdade." },
  { p: "Preciso conhecer o produto?", r: "Não. Um vídeo curto te apresenta tudo antes da ligação." },
  { p: "Serve para iniciante?", r: "Serve. Quanto antes você descobre seus erros, menos vendas perde." },
  { p: "E depois do diagnóstico?", r: "Você vê sua nota na hora. Se quiser corrigir o que travou, tem a capacitação, com novas simulações até chegar lá." },
];

/** Quem usa a Ramppy (os mesmos da landing /c, com a mesma altura óptica: os compridos ficam mais baixos). */
const LOGOS = [
  { nome: "Zoppy", src: "/images/diagnostico/zoppy.svg", altura: "h-6 lg:h-9" },
  { nome: "G4 Educação", src: "/images/diagnostico/g4.png", altura: "h-8 lg:h-11" },
  { nome: "Allu", src: "/images/diagnostico/allu.png", altura: "h-7 lg:h-10" },
  { nome: "Sambatech", src: "/images/diagnostico/sambatech-horizontal.png", altura: "h-[22px] lg:h-8" },
  { nome: "Grupo Escalar", src: "/images/diagnostico/grupo-escalar.png", altura: "h-5 lg:h-7" },
];

const virgula = (n: number) => n.toFixed(1).replace(".", ",");

/** A cor da nota na régua do app: vermelho embaixo, âmbar no meio, verde em cima. */
function corDaNota(n: number) {
  if (n >= 7) return "#2D8C3C";
  if (n >= 5.5) return "#C48A12";
  return "#D9622B";
}

function Selo({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 bg-green-surface text-primary-green text-sm font-semibold px-4 py-1.5 rounded-full">
      {children}
    </span>
  );
}

function Titulo({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[36px] lg:text-[44px] font-semibold leading-[110%] tracking-[-0.04em] text-teal-dark">
      {children}
    </h2>
  );
}

function Chamada({ centro = true }: { centro?: boolean }) {
  return (
    <div className={`flex flex-col ${centro ? "items-center" : "items-start"} gap-3`}>
      <a
        href={DIAGNOSTICO_URL}
        className="font-[var(--font-fustat)] inline-flex items-center justify-center gap-2 text-base md:text-lg font-semibold px-7 md:px-9 py-3.5 md:py-4 rounded-full bg-primary-green text-white hover:bg-green-dark transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_18px_40px_-18px_rgba(45,140,60,0.7)]"
      >
        Fazer meu diagnóstico
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </a>
      <a
        href={DIAGNOSTICO_BLACK_FRIDAY_URL}
        className="group inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-teal-dark transition-colors"
      >
        <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-[#111] rounded-full px-2.5 py-0.5">Black Friday</span>
        Ver a oferta
        <span className="transition-transform group-hover:translate-x-0.5">→</span>
      </a>
    </div>
  );
}

function RelatorioExemplo() {
  const R = 42;
  const L = 2 * Math.PI * R;
  return (
    <div className="w-full max-w-[520px] rounded-3xl bg-[#FFFDF8] border border-border-light p-6 md:p-8 shadow-[0_30px_70px_-30px_rgba(22,32,26,0.35)]">
      <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ctr-muted">Exemplo de diagnóstico</div>
      <div className="mt-5 flex items-center gap-5 md:gap-7">
        <div className="relative w-[104px] h-[104px] md:w-[124px] md:h-[124px] shrink-0">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <circle cx="50" cy="50" r={R} fill="none" stroke="#ECE9E1" strokeWidth="8" />
            <circle cx="50" cy="50" r={R} fill="none" stroke={corDaNota(RELATORIO.nota)} strokeWidth="8" strokeLinecap="round" strokeDasharray={L} strokeDashoffset={L * (1 - RELATORIO.nota / 10)} />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-[var(--font-fustat)] text-[28px] md:text-[34px] font-semibold" style={{ color: corDaNota(RELATORIO.nota) }}>{virgula(RELATORIO.nota)}</span>
            <span className="text-xs text-gray-300 font-medium ml-0.5 mt-2">/10</span>
          </div>
        </div>
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ctr-muted">Nota geral</div>
          <div className="mt-1 font-[var(--font-fustat)] text-xl md:text-2xl font-semibold text-teal-dark tracking-tight">Diagnóstico de vendas</div>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-3.5">
        {RELATORIO.categorias.map((c) => (
          <div key={c.nome}>
            <div className="flex justify-between text-sm md:text-[15px] text-text-secondary mb-1.5">
              <span>{c.nome}</span>
              <span className="font-semibold" style={{ color: corDaNota(c.nota) }}>{virgula(c.nota)}</span>
            </div>
            <div className="h-1.5 rounded-full bg-[#EEF0EE] overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${c.nota * 10}%`, background: corDaNota(c.nota) }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 border-l-[3px] border-primary-green pl-4 text-sm md:text-[15px] leading-relaxed text-teal-dark">
        <b className="text-primary-green">Para o 10:</b> ligue cada benefício a uma dor que o cliente contou.
      </div>
    </div>
  );
}

export default function DiagnosticoContent() {
  return (
    <>
      {/* Topo: título, a VSL e o botão */}
      <SectionWrapper>
        <div className="py-12 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <Selo>Diagnóstico de vendas em 10 minutos</Selo>
            <h1 className="mt-6 font-[var(--font-fustat)] text-[38px] md:text-[54px] lg:text-[64px] font-semibold leading-[105%] tracking-[-0.045em] text-teal-dark">
              Você está perdendo <span className="text-primary-green">vendas</span> e nem sabe onde.
            </h1>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-text-secondary max-w-xl mx-auto">
              Em 10 minutos, uma ligação com um cliente sintético mostra onde você perde venda.
            </p>
          </div>
          <div className="mt-10 md:mt-12 max-w-5xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden border border-gray-200/60 bg-black shadow-[0_25px_80px_-12px_rgba(0,0,0,0.25),0_12px_35px_-8px_rgba(0,0,0,0.15)]">
            <VslPlayer src={VSL.src} poster={VSL.poster} />
          </div>
          <div className="mt-8 md:mt-10">
            <Chamada />
          </div>
        </div>
      </SectionWrapper>

      {/* Prova: o case da Zoppy */}
      <SectionWrapper>
        <div className="py-14 md:py-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <Selo>Case de sucesso</Selo>
            <div className="mt-5">
              <Titulo>
                A Zoppy converteu <span className="text-primary-green">{CASE.aumento}% mais</span> em {CASE.dias} dias.
              </Titulo>
            </div>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-text-secondary max-w-md">
              O time de vendas treinou na Ramppy e foi de {CASE.antes}% para {CASE.depois}% de conversão. Agora é a sua vez.
            </p>
          </div>
          <div className="rounded-3xl bg-[#FFFDF8] border border-border-light p-6 md:p-8">
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ctr-muted">A cada 100 ligações da Zoppy</div>
            {[
              { rotulo: "Antes", valor: CASE.antes, cor: "#C9C5BA" },
              { rotulo: `Em ${CASE.dias} dias`, valor: CASE.depois, cor: "#2D8C3C" },
            ].map((b) => (
              <div key={b.rotulo} className="mt-6">
                <div className="flex items-baseline justify-between">
                  <span className="font-[var(--font-fustat)] text-base md:text-lg font-semibold text-teal-dark">{b.rotulo}</span>
                  <span>
                    <span className="font-[var(--font-fustat)] text-2xl md:text-3xl font-semibold text-teal-dark">{b.valor}</span>
                    <span className="ml-1.5 text-sm text-text-secondary">vendas</span>
                  </span>
                </div>
                <div className="mt-2.5 h-4 rounded-full bg-[#F0EEE8] overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${(b.valor / CASE.depois) * 100}%`, background: b.cor }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Quem usa a Ramppy */}
      <SectionWrapper>
        <div className="py-10 md:py-14">
          <div className="text-center text-[11px] md:text-xs font-semibold uppercase tracking-[0.14em] text-ctr-muted">Empresas que usam a Ramppy</div>
          <div className="mt-7 md:mt-9 flex flex-wrap items-center justify-center gap-x-10 gap-y-7 md:gap-x-16">
            {LOGOS.map((l) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={l.nome} src={l.src} alt={l.nome} className={`${l.altura} w-auto object-contain`} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Como funciona */}
      <SectionWrapper>
        <div className="py-14 md:py-20">
          <div className="text-center">
            <Selo>Como funciona</Selo>
            <div className="mt-5">
              <Titulo>Três passos, dez minutos.</Titulo>
            </div>
          </div>
          <div className="mt-10 md:mt-14 grid md:grid-cols-3 gap-5 md:gap-6">
            {PASSOS.map((p, i) => (
              <div key={p.titulo} className="rounded-3xl bg-surface-hover/70 border border-border-light p-6 md:p-8">
                <span className="font-[var(--font-fustat)] inline-flex w-9 h-9 items-center justify-center rounded-full bg-primary-green text-white text-sm font-semibold">{i + 1}</span>
                <h3 className="mt-5 font-[var(--font-fustat)] text-xl md:text-2xl font-semibold text-teal-dark tracking-tight">{p.titulo}</h3>
                <p className="mt-2.5 text-[15px] md:text-base leading-relaxed text-text-secondary">{p.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* O que você leva */}
      <SectionWrapper>
        <div className="py-14 md:py-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <Selo>O que você leva</Selo>
            <div className="mt-5">
              <Titulo>A sua nota, os seus gargalos e o caminho para o 10.</Titulo>
            </div>
            <ul className="mt-7 flex flex-col gap-3.5">
              {LEVA.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base md:text-lg text-text-secondary">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-surface">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2D8C3C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center lg:justify-end">
            <RelatorioExemplo />
          </div>
        </div>
      </SectionWrapper>

      {/* Perguntas frequentes */}
      <SectionWrapper>
        <div className="py-14 md:py-20 max-w-3xl mx-auto">
          <div className="text-center">
            <Titulo>Perguntas frequentes</Titulo>
          </div>
          <div className="mt-10 flex flex-col divide-y divide-border-light border-y border-border-light">
            {FAQ.map((f) => (
              <details key={f.p} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-[var(--font-fustat)] text-lg md:text-xl font-semibold text-teal-dark">
                  {f.p}
                  <span className="text-2xl font-normal text-primary-green transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-base leading-relaxed text-text-secondary">{f.r}</p>
              </details>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Fecho */}
      <SectionWrapper dark>
        <div className="py-16 md:py-24 text-center">
          <h2 className="font-[var(--font-fustat)] text-[30px] md:text-[44px] lg:text-[52px] font-semibold leading-[110%] tracking-[-0.04em] text-white max-w-3xl mx-auto">
            Cada ligação errada é uma venda perdida.
          </h2>
          <p className="mt-5 text-base md:text-lg text-white/70">Descubra onde você erra em 10 minutos.</p>
          <div className="mt-9 [&_a:last-child]:text-white/70 [&_a:last-child:hover]:text-white">
            <Chamada />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
