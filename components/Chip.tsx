/* Pill chip — accent for process/category, positive for live status, neutral for metadata */
export function Chip({
  tone = "accent",
  children,
  className = "",
}: {
  tone?: "accent" | "positive" | "neutral";
  children: React.ReactNode;
  className?: string;
}) {
  const tones = {
    accent: "bg-accent-soft text-accent",
    positive: "bg-positive-soft text-positive",
    neutral: "bg-surface text-text-2",
  } as const;
  return (
    <span
      className={`inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.07em] px-3.5 py-1.5 rounded-full ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
