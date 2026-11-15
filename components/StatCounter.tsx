import type { ReactNode } from "react";

export function StatCounter({ value, suffix, label }: { value: ReactNode; suffix?: ReactNode; label: ReactNode }) {
  return (
    <div className="text-center">
      <div className="font-mono text-5xl md:text-6xl font-semibold leading-none">
        {value}
        {suffix && <span className="text-accent-brand text-3xl md:text-4xl align-super">{suffix}</span>}
      </div>
      <div className="mt-3 text-label font-semibold uppercase tracking-[0.08em] text-text-3 max-w-[180px] mx-auto">{label}</div>
    </div>
  );
}
