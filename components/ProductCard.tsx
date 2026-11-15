import type { ReactNode } from "react";
import { Chip } from "./Chip";

type Metric = { value: ReactNode; label: string };

export function ProductCard({ name, meta, status = "live", description, metrics = [], href, logo }: {
  name: string; meta?: string; status?: "concept" | "building" | "beta" | "live";
  description?: string; metrics?: Metric[]; href?: string; logo?: ReactNode;
}) {
  return (
    <article className="flex flex-col gap-5 p-8 rounded-xl bg-surface border border-border">
      <div className="flex justify-between items-start gap-4">
        <div className="flex gap-4 items-center">
          {logo && <div className="w-14 h-14 rounded-[14px] bg-bg border border-border flex items-center justify-center overflow-hidden">{logo}</div>}
          <div className="flex flex-col gap-1">
            <h3 className="text-h3 font-bold">{name}</h3>
            {meta && <span className="text-small text-text-3">{meta}</span>}
          </div>
        </div>
        <Chip tone={status}>{status}</Chip>
      </div>
      {description && <p className="text-body text-text-2">{description}</p>}
      {metrics.length > 0 && (
        <div className="grid grid-cols-3 border-t border-border">
          {metrics.slice(0, 3).map((m, i) => (
            <div key={i} className={`flex flex-col gap-1 pt-4 ${i ? "pl-4 border-l border-border" : "pr-4"}`}>
              <span className="font-mono text-[28px] font-semibold">{m.value}</span>
              <span className="text-small text-text-3">{m.label}</span>
            </div>
          ))}
        </div>
      )}
      {href && <a href={href} className="self-start font-semibold text-accent hover:text-accent-link-hover">See what we shipped →</a>}
    </article>
  );
}
