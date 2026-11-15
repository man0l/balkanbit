import type { Metadata } from "next";
import { PortfolioCard, SectionHeader, SiteFooter, SiteNav } from "@/components";
import { projects } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Portfolio — BalkanBit",
  description:
    "Products BalkanBit builds and runs: slashloop, Axend, Mathly and ZeroShots. Live products, a beta and a launch in the works.",
};

export default function PortfolioIndex() {
  const live = projects.filter((p) => p.status === "live").length;
  return (
    <main id="main" className="min-h-screen bg-bg text-text-1 overflow-x-hidden">
      <SiteNav active="/portfolio" />

      <section className="pt-36 md:pt-44 pb-24 md:pb-[120px] px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            as="h1"
            className="mb-16"
            eyebrow="Portfolio"
            title={
              <>
                Products we <span className="text-accent">build and run</span>
              </>
            }
            lead={`${projects.length} products, ${live} live. Every one is built, launched and operated by the studio — not delivered to a client and forgotten.`}
          />
          <div className="grid md:grid-cols-2 gap-3">
            {projects.map((p) => (
              <PortfolioCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
