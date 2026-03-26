export default function SectionWrapper({
  children,
  className = "",
  dark = false,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}) {
  return (
    <section className="flex gap-[1px]" id={id}>
      <div className="content-side rounded-r-lg" />
      <div
        className={`content-center ${
          dark ? "bg-teal-dark text-white" : "bg-white"
        } ${className}`}
      >
        <div className="px-6 md:px-8 lg:px-16 xl:px-[104px]">{children}</div>
      </div>
      <div className="content-side rounded-l-lg" />
    </section>
  );
}
