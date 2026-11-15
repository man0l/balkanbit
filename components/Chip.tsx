import type { ReactNode } from "react";

const tones = {
  accent: "bg-accent-soft text-accent",
  positive: "bg-positive-soft text-positive",
  neutral: "bg-surface text-text-2",
  concept: "bg-surface text-text-2",
  building: "bg-warning-soft text-warning",
  beta: "bg-info-soft text-info",
  live: "bg-positive-soft text-positive",
} as const;

export function Chip({ tone = "accent", children, className = "" }: { tone?: keyof typeof tones; children: ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 text-label font-semibold uppercase tracking-[0.08em] px-3 py-1.5 rounded-full ${tones[tone]} ${className}`}>
      <span aria-hidden className="w-1.5 h-1.5 rotate-45 bg-current" />
      {children}
    </span>
  );
}
