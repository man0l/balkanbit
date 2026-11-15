import type { ReactNode } from "react";

export function StatTile({ eyebrow, value, suffix, label }: { eyebrow?: string; value: ReactNode; suffix?: ReactNode; label: string }) {
  return (
    <div className="flex flex-col gap-2 p-6 rounded-xl bg-surface-1 border border-border">
      {eyebrow && <span className="text-label font-semibold uppercase tracking-[0.08em] text-text-4">{eyebrow}</span>}
      <span className="font-mono text-5xl font-semibold leading-none">
        {value}{suffix && <span className="text-accent-brand">{suffix}</span>}
      </span>
      <span className="text-small text-text-3">{label}</span>
    </div>
  );
}
