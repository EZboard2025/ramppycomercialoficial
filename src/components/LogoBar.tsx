"use client";

import { useEffect, useState, useCallback } from "react";
import SectionWrapper from "./SectionWrapper";

const stats = [
  { target: 50, suffix: "%", label: "Reducao no tempo de ramp-up" },
  { target: 46, suffix: "%", label: "Maior conversao em vendas" },
  { target: 35, suffix: "%", label: "Mais reunioes marcadas" },
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
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [target, trigger]);

  return value;
}

function AnimatedStat({ target, suffix, label }: { target: number; suffix: string; label: string; trigger: number }) {
  // We get trigger from parent but need to pass it through
  return null; // placeholder, actual component below
}

function StatItem({ target, suffix, label, trigger }: { target: number; suffix: string; label: string; trigger: number }) {
  const value = useCountUp(target, trigger);

  return (
    <div className="text-center group cursor-default">
      <p className="font-[var(--font-fustat)] text-4xl md:text-5xl lg:text-6xl font-bold text-teal-dark tracking-tight transition-transform duration-300 group-hover:scale-110">
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

  return (
    <SectionWrapper>
      <div className="py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <StatItem
              key={stat.label}
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
