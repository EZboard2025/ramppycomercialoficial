export default function RamppyLogo({
  size = 32,
  variant = "green",
}: {
  size?: number;
  variant?: "green" | "white";
}) {
  const color = variant === "white" ? "#ffffff" : "#4CB944";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bar chart bars (ascending) */}
      <rect x="8" y="72" width="10" height="16" rx="2" fill={color} />
      <rect x="22" y="60" width="10" height="28" rx="2" fill={color} />
      <rect x="36" y="46" width="10" height="42" rx="2" fill={color} />
      {/* Upward swoosh arrow */}
      <path
        d="M12 68C20 55 32 40 50 30C62 23 75 20 88 12"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Arrow head */}
      <path
        d="M78 8L92 12L82 24"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
