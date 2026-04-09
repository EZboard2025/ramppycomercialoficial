import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import SectionWrapper from "@/components/SectionWrapper";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Metodologia SPIN Selling | Ramppy",
  description:
    "Saiba como a Ramppy aplica a metodologia SPIN Selling com IA para avaliar e desenvolver vendedores automaticamente.",
};

export default function MetodologiaSpinPage() {
  return (
    <PageShell>
      {/* Hero */}
      <SectionWrapper>
        <div className="py-20 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-green-surface text-primary-green text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Metodologia
            </span>
            <h1 className="font-[var(--font-fustat)] text-[36px] md:text-[52px] font-semibold leading-[110%] tracking-[-0.04em] text-teal-dark">
              SPIN Selling: a ciência por trás de cada avaliação da Ramppy
            </h1>
            <p className="mt-5 text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
              Criada por Neil Rackham após analisar mais de 35.000 ligações de vendas em 23 países, a metodologia SPIN é o framework que a Ramppy usa para avaliar cada interação do seu time.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* A pesquisa */}
      <SectionWrapper dark>
        <div className="py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[40px] font-semibold leading-[115%] tracking-tight text-white">
              A maior pesquisa sobre vendas já realizada
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/60 leading-relaxed">
              Neil Rackham e o Huthwaite Research Group conduziram um estudo de 12 anos que mudou para sempre a forma como entendemos vendas complexas.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "35.000+", label: "ligações de vendas analisadas" },
              { number: "10.000", label: "vendedores estudados" },
              { number: "23", label: "países pesquisados" },
              { number: "12", label: "anos de pesquisa" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-[var(--font-fustat)] text-4xl md:text-5xl font-bold text-white tracking-tight">
                  {stat.number}
                </p>
                <p className="text-sm text-white/50 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* O que descobriram */}
      <SectionWrapper>
        <div className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[40px] font-semibold leading-[115%] tracking-tight text-teal-dark mb-8">
              O que a pesquisa descobriu
            </h2>
            <div className="space-y-6">
              {[
                "Técnicas de fechamento agressivo são contraproducentes em vendas complexas,reduziram o sucesso em 23%.",
                "Vendedores que não usavam técnicas tradicionais de fechamento tinham taxas de satisfação mais altas e clientes mais fiéis.",
                "O sucesso em vendas complexas depende, mais do que qualquer outra coisa, de como a fase de investigação é conduzida.",
                "Vendedores de alto desempenho fazem 4x mais perguntas de implicação que vendedores medianos.",
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-green-surface flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2D8C3C" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-lg text-text-secondary leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Os 4 Pilares */}
      <SectionWrapper>
        <div className="py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 bg-green-surface text-primary-green text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Os 4 pilares
            </span>
            <h2 className="font-[var(--font-fustat)] text-[32px] md:text-[48px] font-semibold leading-[110%] tracking-[-0.04em] text-teal-dark">
              <span className="text-blue-500">Situação</span>, <span className="text-amber-500">Problema</span>, <span className="text-red-500">Implicação</span> e <span className="text-emerald-500">Necessidade</span>
            </h2>
          </div>

          <div className="space-y-8">
            {/* S */}
            <div className="bg-white border border-border-light rounded-2xl p-8 md:p-10">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <div className="lg:w-20 flex-shrink-0">
                  <span className="font-[var(--font-fustat)] text-[64px] md:text-[80px] font-bold leading-none text-blue-500/20">S</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-[var(--font-fustat)] text-2xl md:text-3xl font-semibold text-teal-dark mb-3">
                    Situação
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed mb-6">
                    Perguntas para entender o contexto atual do cliente. São o ponto de partida da conversa,você está mapeando o cenário antes de aprofundar.
                  </p>
                  <div className="bg-blue-50 rounded-xl p-5 mb-5">
                    <p className="text-sm font-semibold text-blue-800 mb-3">Exemplos de perguntas:</p>
                    <ul className="space-y-2 text-sm text-blue-700">
                      <li>• "Quantos vendedores tem no time?"</li>
                      <li>• "Qual CRM vocês usam hoje?"</li>
                      <li>• "Como é o processo de onboarding atual?"</li>
                    </ul>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-amber-700 bg-amber-50 rounded-xl p-4">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-shrink-0">
                      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                      <line x1="12" y1="9" x2="12" y2="13" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                    <span>Cuidado: a taxa de sucesso cai 11% para cada pergunta de situação além de 4. Pesquise antes da reunião.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* P */}
            <div className="bg-white border border-border-light rounded-2xl p-8 md:p-10">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <div className="lg:w-20 flex-shrink-0">
                  <span className="font-[var(--font-fustat)] text-[64px] md:text-[80px] font-bold leading-none text-amber-500/20">P</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-[var(--font-fustat)] text-2xl md:text-3xl font-semibold text-teal-dark mb-3">
                    Problema
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed mb-6">
                    Perguntas para descobrir dores, dificuldades e insatisfações. O objetivo é identificar necessidades implícitas,problemas que o cliente reconhece mas ainda não considera urgentes.
                  </p>
                  <div className="bg-amber-50 rounded-xl p-5 mb-5">
                    <p className="text-sm font-semibold text-amber-800 mb-3">Exemplos de perguntas:</p>
                    <ul className="space-y-2 text-sm text-amber-700">
                      <li>• "Qual o maior desafio do time hoje?"</li>
                      <li>• "Onde vocês perdem mais negócios?"</li>
                      <li>• "Está satisfeito com a taxa de conversão atual?"</li>
                    </ul>
                  </div>
                  <p className="text-sm text-text-secondary italic">
                    "Se você não consegue resolver um problema para o seu cliente, então não há base para uma venda.",Neil Rackham
                  </p>
                </div>
              </div>
            </div>

            {/* I */}
            <div className="bg-white border border-border-light rounded-2xl p-8 md:p-10">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <div className="lg:w-20 flex-shrink-0">
                  <span className="font-[var(--font-fustat)] text-[64px] md:text-[80px] font-bold leading-none text-red-500/20">I</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-[var(--font-fustat)] text-2xl md:text-3xl font-semibold text-teal-dark mb-3">
                    Implicação
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed mb-4">
                    As perguntas mais poderosas do framework. Fazem o cliente calcular o custo real de não agir. Transformam problemas pequenos em questões urgentes.
                  </p>
                  <div className="bg-primary-green/5 border border-primary-green/10 rounded-xl p-4 mb-6">
                    <p className="text-sm font-semibold text-primary-green mb-1">Dado da pesquisa:</p>
                    <p className="text-sm text-teal-dark">Negócios com 4+ perguntas de implicação fecham <strong>34% mais rápido</strong>. Vendedores top fazem <strong>4x mais</strong> perguntas de implicação.</p>
                  </div>
                  <div className="bg-red-50 rounded-xl p-5 mb-5">
                    <p className="text-sm font-semibold text-red-800 mb-3">Exemplos de perguntas:</p>
                    <ul className="space-y-2 text-sm text-red-700">
                      <li>• "Quanto custa cada vendedor que não bate meta?"</li>
                      <li>• "Como isso afeta a moral do time?"</li>
                      <li>• "Qual o impacto no faturamento?"</li>
                    </ul>
                  </div>
                  <p className="text-sm text-text-secondary italic">
                    São as mais difíceis porque exigem conhecimento profundo do negócio do cliente e não podem ser improvisadas.
                  </p>
                </div>
              </div>
            </div>

            {/* N */}
            <div className="bg-white border border-border-light rounded-2xl p-8 md:p-10">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <div className="lg:w-20 flex-shrink-0">
                  <span className="font-[var(--font-fustat)] text-[64px] md:text-[80px] font-bold leading-none text-emerald-500/20">N</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-[var(--font-fustat)] text-2xl md:text-3xl font-semibold text-teal-dark mb-3">
                    Necessidade de Solução
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed mb-6">
                    Perguntas que fazem o cliente articular o valor da solução com as próprias palavras. Em vez de você convencer, o cliente convence a si mesmo. Objeções caem 55% quando necessidades explícitas são desenvolvidas antes da oferta.
                  </p>
                  <div className="bg-emerald-50 rounded-xl p-5 mb-5">
                    <p className="text-sm font-semibold text-emerald-800 mb-3">Exemplos de perguntas:</p>
                    <ul className="space-y-2 text-sm text-emerald-700">
                      <li>• "Se o ramp-up fosse 50% mais rápido, qual o impacto?"</li>
                      <li>• "Como seria ter visibilidade total das calls?"</li>
                      <li>• "O que mudaria se cada vendedor recebesse coaching diário?"</li>
                    </ul>
                  </div>
                  <p className="text-sm text-text-secondary italic">
                    "Perguntas de Need-payoff focam a atenção em soluções, não em problemas. E fazem os clientes contarem a você os benefícios.",Neil Rackham
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Como a Ramppy usa SPIN */}
      <SectionWrapper>
        <div className="py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            <div className="flex-1 max-w-xl">
              <span className="text-xs font-bold text-primary-green bg-green-surface px-3 py-1.5 rounded-full uppercase tracking-wider">
                Ramppy + SPIN
              </span>
              <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[36px] font-semibold text-teal-dark leading-[115%] tracking-tight mt-5 mb-5">
                Como a Ramppy avalia com SPIN
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Cada simulação e reunião real é transcrita e analisada pela IA da Ramppy. A IA identifica cada pergunta feita pelo vendedor, classifica no pilar SPIN correto e avalia qualidade, profundidade e timing.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                O resultado é uma nota de 0 a 10 em cada pilar, com feedback específico sobre o que foi bem e o que pode melhorar. Tudo automático, sem viés humano, após cada interação.
              </p>
              <div className="space-y-4">
                {[
                  { label: "Avaliação objetiva", desc: "IA analisa sem viés humano, com critérios consistentes" },
                  { label: "Feedback instantâneo", desc: "Resultado disponível segundos após cada call" },
                  { label: "Evolução mensurável", desc: "Acompanhe a nota SPIN ao longo do tempo" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-green flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-teal-dark">{item.label}</p>
                      <p className="text-sm text-text-secondary">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Score visual,reprodução fiel do app */}
            <div className="flex-1 w-full max-w-lg">
              <div className="bg-white border border-border-light rounded-2xl overflow-hidden" style={{ boxShadow: "0 25px 80px -12px rgba(0, 0, 0, 0.15), 0 12px 35px -8px rgba(0, 0, 0, 0.1)" }}>
                {/* Header */}
                <div className="px-6 py-4 border-b border-border-light flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-surface flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2D8C3C" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <div>
                    <p className="font-[var(--font-fustat)] text-sm font-semibold text-teal-dark">Análise SPIN</p>
                    <p className="text-xs text-text-secondary">S: 8.0 &nbsp; P: 8.0 &nbsp; I: 7.0 &nbsp; N: 8.0</p>
                  </div>
                </div>

                {/* Notas principais */}
                <div className="grid grid-cols-4 gap-2 px-4 py-4">
                  {[
                    { label: "SITUAÇÃO", score: "8.0", color: "bg-green-100 text-green-700" },
                    { label: "PROBLEMA", score: "8.0", color: "bg-green-100 text-green-700" },
                    { label: "IMPLICAÇÃO", score: "7.0", color: "bg-amber-100 text-amber-700" },
                    { label: "NECESSIDADE", score: "8.0", color: "bg-green-100 text-green-700" },
                  ].map((item) => (
                    <div key={item.label} className={`rounded-xl p-3 text-center ${item.color}`}>
                      <p className="font-[var(--font-fustat)] text-2xl font-bold">{item.score}</p>
                      <p className="text-[9px] font-bold uppercase tracking-wider mt-1">{item.label}</p>
                    </div>
                  ))}
                </div>

                {/* Média geral */}
                <div className="mx-4 mb-4 bg-green-50 rounded-xl p-3 text-center">
                  <p className="font-[var(--font-fustat)] text-3xl font-bold text-green-700">7.8</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-green-600 mt-1">MÉDIA GERAL SPIN</p>
                </div>

                {/* Detalhes dos pilares */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 pb-4">
                  {/* Situação */}
                  <div className="border border-border-light rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">S</span>
                      <div>
                        <p className="text-sm font-semibold text-teal-dark">Situação</p>
                        <p className="text-xs text-text-secondary">8.0/10</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {[
                        { label: "Adaptabilidade", score: 8 },
                        { label: "Perguntas Abertas", score: 8 },
                        { label: "Mapeamento de Cenário", score: 8 },
                      ].map((sub) => (
                        <div key={sub.label}>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-text-secondary">{sub.label}</span>
                            <span className="font-semibold text-teal-dark">{sub.score}/10</span>
                          </div>
                          <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 rounded-full" style={{ width: `${sub.score * 10}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Problema */}
                  <div className="border border-border-light rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-7 h-7 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-bold">P</span>
                      <div>
                        <p className="text-sm font-semibold text-teal-dark">Problema</p>
                        <p className="text-xs text-text-secondary">8.0/10</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {[
                        { label: "Profundidade", score: 7 },
                        { label: "Empatia", score: 9 },
                        { label: "Compreensão de Impacto", score: 8 },
                        { label: "Identificação de Problemas", score: 8 },
                        { label: "Exploração de Consequências", score: 8 },
                      ].map((sub) => (
                        <div key={sub.label}>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-text-secondary">{sub.label}</span>
                            <span className="font-semibold text-teal-dark">{sub.score}/10</span>
                          </div>
                          <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className={`h-full rounded-full ${sub.score >= 8 ? "bg-green-500" : sub.score >= 6 ? "bg-amber-500" : "bg-red-500"}`} style={{ width: `${sub.score * 10}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Implicação */}
                  <div className="border border-border-light rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-7 h-7 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xs font-bold">I</span>
                      <div>
                        <p className="text-sm font-semibold text-teal-dark">Implicação</p>
                        <p className="text-xs text-text-secondary">7.0/10</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {[
                        { label: "Riscos Concretos", score: 6 },
                        { label: "Consequências da Inação", score: 7 },
                        { label: "Amplificação de Urgência", score: 7 },
                        { label: "Urgência Não Agressiva", score: 8 },
                      ].map((sub) => (
                        <div key={sub.label}>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-text-secondary">{sub.label}</span>
                            <span className="font-semibold text-teal-dark">{sub.score}/10</span>
                          </div>
                          <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className={`h-full rounded-full ${sub.score >= 8 ? "bg-green-500" : sub.score >= 6 ? "bg-amber-500" : "bg-red-500"}`} style={{ width: `${sub.score * 10}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Necessidade */}
                  <div className="border border-border-light rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">N</span>
                      <div>
                        <p className="text-sm font-semibold text-teal-dark">Necessidade</p>
                        <p className="text-xs text-text-secondary">8.0/10</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {[
                        { label: "Credibilidade", score: 8 },
                        { label: "Personalização", score: 8 },
                        { label: "Clareza de Benefícios", score: 8 },
                        { label: "Clareza da Solução", score: 8 },
                        { label: "Eficácia do CTA", score: 7 },
                      ].map((sub) => (
                        <div key={sub.label}>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-text-secondary">{sub.label}</span>
                            <span className="font-semibold text-teal-dark">{sub.score}/10</span>
                          </div>
                          <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className={`h-full rounded-full ${sub.score >= 8 ? "bg-green-500" : sub.score >= 6 ? "bg-amber-500" : "bg-red-500"}`} style={{ width: `${sub.score * 10}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Dados de impacto */}
      <SectionWrapper dark>
        <div className="py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[40px] font-semibold leading-[115%] tracking-tight text-white">
              Os números não mentem
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { stat: "+34%", desc: "mais rápido para fechar negócios com 4+ perguntas de implicação" },
              { stat: "-55%", desc: "de objeções quando necessidades explícitas são desenvolvidas via SPIN" },
              { stat: "87%", desc: "dos negócios acima de US$100k usaram a sequência SPIN" },
              { stat: "4x", desc: "mais perguntas de implicação feitas por vendedores de alto desempenho" },
              { stat: "-23%", desc: "na taxa de sucesso ao usar fechamento agressivo em vendas complexas" },
              { stat: "50%", desc: "das Fortune 100 usam SPIN para treinar seus times de vendas" },
            ].map((item) => (
              <div key={item.stat} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 text-center">
                <p className="font-[var(--font-fustat)] text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
                  {item.stat}
                </p>
                <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center space-y-2">
            <p className="text-xs text-white/40 mb-3">Fontes:</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs">
              <a href="https://www.huthwaiteinternational.com/spin-methodology" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-primary-green transition-colors underline underline-offset-2">Huthwaite International,SPIN Methodology</a>
              <a href="https://www.huthwaiteinternational.com/fifty-years-of-spin" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-primary-green transition-colors underline underline-offset-2">Huthwaite,50 Years of SPIN</a>
              <a href="https://blog.hubspot.com/sales/spin-selling-the-ultimate-guide" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-primary-green transition-colors underline underline-offset-2">HubSpot,SPIN Selling Guide</a>
              <a href="https://www.highspot.com/blog/spin-selling/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-primary-green transition-colors underline underline-offset-2">Highspot,SPIN Selling Explained</a>
              <a href="https://www.zendesk.com/blog/spin-selling/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-primary-green transition-colors underline underline-offset-2">Zendesk,SPIN Selling</a>
              <a href="https://www.demandfarm.com/blog/spin-selling/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-primary-green transition-colors underline underline-offset-2">DemandFarm,SPIN Selling</a>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <CTA />
    </PageShell>
  );
}
