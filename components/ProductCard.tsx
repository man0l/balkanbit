import type { ReactNode } from "react";
import { Chip } from "./Chip";

type Metric = { value: ReactNode; label: string };
type Status = "concept" | "building" | "beta" | "live";

/* Product card — cover, logo, name, meta, status chip, description, up to 3
   metrics. With `href` the whole card is one link (stretched-link pattern). */
export function ProductCard({
  name,
  meta,
  status = "live",
  description,
  metrics = [],
  href,
  cta = "See what we shipped →",
  logo,
  cover,
  className = "",
}: {
  name: string;
  meta?: string;
  status?: Status;
  description?: string;
  metrics?: Metric[];
  href?: string;
  cta?: string;
  logo?: ReactNode;
  cover?: { src: string; alt: string; position?: string };
  className?: string;
}) {
  return (
    <article
      className={`group relative flex flex-col rounded-xl bg-surface border border-border overflow-hidden transition-colors ${
        href ? "hover:bg-surface-2 hover:border-border-strong has-[a:focus-visible]:shadow-[var(--focus-ring)]" : ""
      } ${className}`}
    >
      {cover && (
        <div className="relative aspect-[16/10] overflow-hidden bg-bg border-b border-border">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={cover.src}
            alt={cover.alt}
            loading="lazy"
            className={`w-full h-full object-cover ${cover.position ?? "object-top"} transition-transform duration-500 group-hover:scale-[1.03]`}
          />
        </div>
      )}
      <div className="flex flex-col gap-5 p-6 md:p-8 flex-1">
        <div className="flex justify-between items-start gap-4">
          <div className="flex gap-4 items-center min-w-0">
            {logo && (
              <div className="w-14 h-14 shrink-0 rounded-[14px] bg-bg border border-border flex items-center justify-center overflow-hidden">
                {logo}
              </div>
            )}
            <div className="flex flex-col gap-1 min-w-0">
              <h3 className="text-h3 font-bold">
                {href ? (
                  <a href={href} className="after:absolute after:inset-0 after:rounded-xl focus-visible:shadow-none">
                    {name}
                  </a>
                ) : (
                  name
                )}
              </h3>
              {meta && <span className="text-small text-text-3">{meta}</span>}
            </div>
          </div>
          <Chip tone={status} className="shrink-0">{status}</Chip>
        </div>
        {description && <p className="text-body text-text-2">{description}</p>}
        {metrics.length > 0 && (
          <div className="grid grid-cols-3 border-t border-border">
            {metrics.slice(0, 3).map((m, i) => (
              <div key={i} className={`flex flex-col gap-1 pt-4 ${i ? "pl-4 border-l border-border" : "pr-4"}`}>
                <span className="font-mono text-h3 font-semibold">{m.value}</span>
                <span className="text-small text-text-3">{m.label}</span>
              </div>
            ))}
          </div>
        )}
        {href && (
          <span aria-hidden className="mt-auto self-start font-semibold text-accent group-hover:text-accent-link-hover transition-colors">
            {cta}
          </span>
        )}
      </div>
    </article>
  );
}
