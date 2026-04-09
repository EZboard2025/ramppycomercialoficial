import SectionWrapper from "./SectionWrapper";

export default function PageHero({
  badge,
  title,
  subtitle,
  dark = false,
}: {
  badge: string;
  title: string;
  subtitle: string;
  dark?: boolean;
}) {
  return (
    <SectionWrapper dark={dark}>
      <div className="py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <span className={`inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 ${
            dark
              ? "bg-white/10 text-white/80"
              : "bg-green-surface text-primary-green"
          }`}>
            {badge}
          </span>
          <h1 className={`font-[var(--font-fustat)] text-[36px] md:text-[52px] font-semibold leading-[110%] tracking-[-0.04em] ${
            dark ? "text-white" : "text-teal-dark"
          }`}>
            {title}
          </h1>
          <p className={`mt-5 text-base md:text-lg leading-relaxed max-w-xl mx-auto ${
            dark ? "text-white/60" : "text-text-secondary"
          }`}>
            {subtitle}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
