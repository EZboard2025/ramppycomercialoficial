import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import SpinPillarDetail from "@/components/metodologia-spin/SpinPillarDetail";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Metodologia SPIN Selling | Ramppy",
  description:
    "Saiba como o Ramppy aplica a metodologia SPIN Selling com IA para avaliar e desenvolver vendedores automaticamente.",
};

/* ── Score bar visual component ── */
function ScoreBar({ label, score, color }: { label: string; score: number; color: string }) {
  const pct = (score / 10) * 100;
  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-semibold text-teal-dark w-28 shrink-0">{label}</span>
      <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-sm font-bold text-teal-dark w-10 text-right">{score}/10</span>
    </div>
  );
}

/* ── Benefit card ── */
function BenefitCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white border border-border-light rounded-2xl p-7 flex flex-col items-start gap-4 hover:shadow-lg transition-shadow duration-300">
      <div className="w-12 h-12 bg-green-surface rounded-xl flex items-center justify-center text-primary-green">
        {icon}
      </div>
      <h3 className="font-[var(--font-fustat)] text-lg md:text-xl font-semibold text-teal-dark">
        {title}
      </h3>
      <p className="text-text-secondary text-base leading-relaxed">{description}</p>
    </div>
  );
}

export default function MetodologiaSpinPage() {
  return (
    <PageShell>
      {/* Hero */}
      <PageHero
        badge="Metodologia"
        title="SPIN Selling aplicado com inteligência artificial"
        subtitle="Entenda como o Ramppy usa a metodologia SPIN para avaliar e desenvolver cada vendedor do seu time."
      />

      {/* Section 1 — O que é SPIN Selling */}
      <SectionWrapper>
        <div className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-[var(--font-fustat)] text-[32px] md:text-[48px] font-semibold leading-[110%] tracking-[-0.04em] text-teal-dark">
              O que é SPIN Selling?
            </h2>
            <p className="mt-6 text-base md:text-lg text-text-secondary leading-relaxed">
              SPIN Selling é uma metodologia de vendas criada por Neil Rackham, baseada em uma
              das maiores pesquisas já realizadas sobre eficácia comercial — mais de 35.000
              visitas de vendas em 12 anos. A metodologia se estrutura em 4 tipos de perguntas
              estratégicas (<strong>S</strong>ituação, <strong>P</strong>roblema,{" "}
              <strong>I</strong>mplicação e <strong>N</strong>ecessidade de Solução) que guiam o
              vendedor a conduzir conversas consultivas, entender profundamente o cliente e
              construir valor antes de apresentar a solução.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 2 — Os 4 Pilares */}
      <SpinPillarDetail />

      {/* Section 3 — Como o Ramppy avalia */}
      <SectionWrapper>
        <div className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="font-[var(--font-fustat)] text-[32px] md:text-[48px] font-semibold leading-[110%] tracking-[-0.04em] text-teal-dark">
              Como o Ramppy avalia cada vendedor
            </h2>
            <p className="mt-4 text-base md:text-lg text-text-secondary leading-relaxed max-w-xl mx-auto">
              Cada simulação de vendas e reunião real recebe uma nota de 0 a 10 em cada pilar
              SPIN. A IA analisa a transcrição e avalia qualidade, profundidade e timing das
              perguntas.
            </p>
          </div>

          {/* Visual score example */}
          <div className="max-w-2xl mx-auto bg-white border border-border-light rounded-2xl p-7 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-green-surface rounded-full flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-primary-green"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-teal-dark">Exemplo de avaliação</p>
                <p className="text-xs text-text-secondary">Simulação de vendas — 12 min</p>
              </div>
            </div>

            <div className="space-y-5">
              <ScoreBar label="Situação" score={8} color="bg-blue-500" />
              <ScoreBar label="Problema" score={6} color="bg-amber-500" />
              <ScoreBar label="Implicação" score={4} color="bg-red-500" />
              <ScoreBar label="Necessidade" score={7} color="bg-emerald-500" />
            </div>

            <div className="mt-8 pt-6 border-t border-border-light flex items-center justify-between">
              <span className="text-sm text-text-secondary">Nota geral</span>
              <span className="text-2xl font-bold text-teal-dark">6.3/10</span>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 4 — Por que SPIN + IA */}
      <SectionWrapper>
        <div className="py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-[var(--font-fustat)] text-[32px] md:text-[48px] font-semibold leading-[110%] tracking-[-0.04em] text-teal-dark">
              Por que SPIN + IA?
            </h2>
            <p className="mt-4 text-base md:text-lg text-text-secondary leading-relaxed max-w-xl mx-auto">
              A combinação de uma metodologia comprovada com inteligência artificial cria um
              ciclo de melhoria contínua para cada vendedor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <BenefitCard
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              }
              title="Avaliação objetiva"
              description="Sem viés humano. A IA aplica os mesmos critérios para todos os vendedores, garantindo consistência e justiça na avaliação."
            />
            <BenefitCard
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              }
              title="Feedback instantâneo"
              description="Após cada call, o vendedor recebe uma análise detalhada com pontos fortes e oportunidades de melhoria em cada pilar SPIN."
            />
            <BenefitCard
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              }
              title="Evolução mensurável"
              description="Acompanhe a nota de cada vendedor ao longo do tempo. Visualize a evolução semana a semana e identifique padrões de melhoria."
            />
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <CTA />
    </PageShell>
  );
}
