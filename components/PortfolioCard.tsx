import type { Project } from "@/lib/portfolio";
import { ProductCard } from "./ProductCard";

/* ProductCard wired to a portfolio Project: cover, icon (or monogram) and a
   link to its case study. */
export function PortfolioCard({ project: p }: { project: Project }) {
  return (
    <ProductCard
      name={p.name}
      meta={p.meta}
      status={p.status}
      description={p.summary}
      href={`/portfolio/${p.slug}`}
      cta="Read the case study →"
      cover={{
        src: p.cover.src,
        alt: p.cover.alt,
        position: p.cover.fit === "cover-center" ? "object-center" : "object-top",
      }}
      logo={
        p.icon ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={p.icon} alt="" className="w-full h-full object-cover" />
        ) : (
          <span aria-hidden className="text-h3 font-extrabold">
            {p.name[0]}
          </span>
        )
      }
    />
  );
}
