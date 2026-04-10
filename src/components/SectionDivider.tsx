export default function SectionDivider() {
  return (
    <div
      className="w-full h-[30px]"
      style={{
        background: "white",
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(226, 231, 241, 0.8) 0px, rgba(226, 231, 241, 0.8) 1px, transparent 1px, transparent 14px)",
      }}
    />
  );
}
