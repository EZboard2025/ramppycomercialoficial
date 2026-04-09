"use client";

import SectionWrapper from "./SectionWrapper";

export default function ProblemStats() {
  return (
    <SectionWrapper dark>
      <div className="py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 md:p-10 text-center">
            <p className="font-[var(--font-fustat)] text-[64px] md:text-[80px] font-bold leading-none tracking-tight text-primary-green mb-4">
              84%
            </p>
            <p className="text-lg md:text-xl text-white/80 font-medium leading-snug">
              dos vendedores não bateram a meta em 2025
            </p>
            <p className="mt-4 text-xs text-white/30">Fonte: Kondo</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 md:p-10 text-center">
            <p className="font-[var(--font-fustat)] text-[64px] md:text-[80px] font-bold leading-none tracking-tight text-primary-green mb-4">
              3-6
            </p>
            <p className="text-lg md:text-xl text-white/80 font-medium leading-snug">
              meses para um novo vendedor bater meta pela primeira vez
            </p>
            <p className="mt-4 text-xs text-white/30">Fonte: Remuner / WorkRamp</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
