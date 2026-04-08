"use client";

import { useEffect, useState } from "react";
import SectionWrapper from "./SectionWrapper";

const stats = [
  { target: 50, suffix: "%", label: "Redução no tempo de ramp-up" },
  { target: 46, suffix: "%", label: "Maior conversão em vendas" },
  { target: 35, suffix: "%", label: "Mais reuniões marcadas" },
  { target: 33, suffix: "%", label: "Menos tempo de onboarding" },
];

const ANIMATION_DURATION = 1500;
const REPEAT_INTERVAL = 8000;

function useCountUp(target: number, trigger: number) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(0);
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / ANIMATION_DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [target, trigger]);

  return value;
}

function StatItem({ target, suffix, label, trigger }: { target: number; suffix: string; label: string; trigger: number }) {
  const value = useCountUp(target, trigger);

  return (
    <div className="text-center shrink-0 w-[50vw] sm:w-[33vw] md:w-[25vw] cursor-default group">
      <p className="font-[var(--font-fustat)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight transition-transform duration-300 group-hover:scale-110 clip-text-subtle">
        {value}{suffix}
      </p>
      <p className="text-sm md:text-base text-text-secondary mt-2">{label}</p>
    </div>
  );
}

export default function LogoBar() {
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrigger((t) => t + 1);
    }, REPEAT_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  // 2 copies only — each item is wide enough that 4 items fill the screen,
  // so the second set only appears as the first leaves
  const items = [...stats, ...stats];

  return (
    <SectionWrapper className="overflow-hidden">
      <div className="py-12 md:py-16 -mx-6 md:-mx-[4%] lg:-mx-[5%] xl:-mx-[5.4%]">
        <div className="flex w-max animate-carousel">
          {items.map((stat, i) => (
            <StatItem
              key={i}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
              trigger={trigger}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
