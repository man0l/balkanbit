import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button, Card, Chip, Diamond, SiteFooter, SiteNav, StatTile } from "@/components";
import { getProject, projects } from "@/lib/portfolio";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: `${p.name} — Portfolio | BalkanBit`,
    description: p.summary,
    openGraph: {
      title: `${p.name} — built by BalkanBit`,
      description: p.summary,
      images: [p.cover.src],
    },
  };
}

const isExternal = (href: string) => href.startsWith("http");

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-label font-semibold uppercase tracking-[0.08em] text-text-4">{children}</p>
  );
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const i = projects.indexOf(p);
  const next = projects[(i + 1) % projects.length];

  return (
    <main id="main" className="min-h-screen bg-bg text-text-1 overflow-x-hidden">
      <SiteNav active="/portfolio" />

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/portfolio"
            className="inline-flex items-center h-11 text-small font-semibold text-text-3 hover:text-text-1 transition-colors"
          >
            ← All products
          </Link>

          <div className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-5 mb-8">
                {p.icon ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.icon}
                    alt={`${p.name} icon`}
                    className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-[18px] border border-border"
                  />
                ) : (
                  <span
                    aria-hidden
                    className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-[18px] border border-border bg-surface flex items-center justify-center text-h2 font-extrabold"
                  >
                    {p.name[0]}
                  </span>
                )}
                <div className="flex flex-col gap-2 items-start">
                  <Chip tone={p.status}>{p.status}</Chip>
                  <span className="text-small text-text-3">{p.statusNote}</span>
                </div>
              </div>

              <h1 className="text-h2 md:text-h1 font-extrabold">{p.name}</h1>
              <p className="mt-4 text-h3 font-bold text-text-1 text-balance">{p.tagline}</p>
              <p className="mt-6 text-lead text-text-2">{p.summary}</p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
              {p.links.map((l, k) => (
                <Button
                  key={l.href}
                  href={l.href}
                  size="lg"
                  variant={k === 0 ? "primary" : "secondary"}
                  {...(isExternal(l.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {l.label}
                  {isExternal(l.href) && <span aria-hidden>↗</span>}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Screens */}
      <section aria-label={`${p.name} screenshots`} className="px-6 md:px-12">
        <div className="max-w-6xl mx-auto rounded-xl bg-surface-1 border border-border overflow-hidden">
          {p.screensLayout === "phones" ? (
            <div className="flex gap-4 md:gap-8 justify-start sm:justify-center items-start px-6 pt-10 md:pt-14 overflow-x-auto">
              {p.screens.map((s) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={s.src}
                  src={s.src}
                  alt={s.alt}
                  className={
                    p.screens.length === 1
                      ? "w-full max-w-[420px] mb-10 md:mb-14 rounded-lg border border-border"
                      : "w-[62%] sm:w-[30%] max-w-[280px] shrink-0 rounded-t-[28px] border border-b-0 border-border"
                  }
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-4 p-4 md:p-8">
              {p.screens.map((s) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={s.src} src={s.src} alt={s.alt} className="w-full rounded-lg border border-border" />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* At a glance */}
      <section aria-label="At a glance" className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {p.facts.map((f) => (
            <StatTile key={f.eyebrow} eyebrow={f.eyebrow} value={f.value} label={f.label} />
          ))}
        </div>
      </section>

      {/* Problem / approach */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-bg-alt">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-16">
          <div>
            <Eyebrow>The problem</Eyebrow>
            <p className="mt-4 text-lead text-text-1">{p.problem}</p>
          </div>
          <div className="md:border-l md:border-border md:pl-12">
            <Eyebrow>What we built</Eyebrow>
            <div className="mt-4 space-y-5">
              {p.approach.map((para) => (
                <p key={para.slice(0, 24)} className="text-body text-text-2">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Eyebrow>Inside the product</Eyebrow>
          <h2 className="mt-4 mb-10 text-h3 md:text-h2 font-bold">What it does</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {p.features.map((f) => (
              <li key={f.title}>
                <Card className="h-full p-6 border border-border-faint">
                  <p className="flex items-center gap-3 text-body font-bold">
                    <Diamond className="bg-accent-brand shrink-0" />
                    {f.title}
                  </p>
                  <p className="mt-2 text-small text-text-3">{f.body}</p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Optional extra (e.g. distribution) */}
      {p.extra && (
        <section className="py-16 md:py-24 px-6 md:px-12 bg-bg-alt">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-16">
            <div>
              <Eyebrow>{p.extra.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-h3 md:text-h2 font-bold">{p.extra.title}</h2>
            </div>
            <div className="space-y-5">
              {p.extra.body.map((para) => (
                <p key={para.slice(0, 24)} className="text-body text-text-2">
                  {para}
                </p>
              ))}
              {p.extra.bullets && (
                <ul className="pt-2 space-y-3">
                  {p.extra.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-body text-text-1">
                      <Diamond className="bg-accent-brand shrink-0 mt-2" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Stack */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Eyebrow>How it&apos;s built</Eyebrow>
          <h2 className="mt-4 mb-10 text-h3 md:text-h2 font-bold">Stack</h2>
          <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
            {p.stack.map((g) => (
              <div key={g.group}>
                <dt className="text-small font-semibold text-text-1 mb-3">{g.group}</dt>
                <dd className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="inline-flex items-center px-3 py-1.5 rounded-full bg-surface border border-border-faint text-small text-text-2"
                    >
                      {it}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Next product + CTA */}
      <section className="pb-24 md:pb-[120px] px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-3">
          <Link
            href={`/portfolio/${next.slug}`}
            className="group flex flex-col justify-between gap-8 p-8 md:p-10 rounded-xl bg-surface border border-border hover:bg-surface-2 hover:border-border-strong transition-colors"
          >
            <Eyebrow>Next product</Eyebrow>
            <div>
              <p className="text-h3 md:text-h2 font-bold">{next.name}</p>
              <p className="mt-2 text-body text-text-2">{next.tagline}</p>
              <span className="mt-6 inline-block font-semibold text-accent group-hover:text-accent-link-hover transition-colors">
                Read the case study →
              </span>
            </div>
          </Link>
          <div className="flex flex-col justify-between gap-8 p-8 md:p-10 rounded-xl bg-surface-1 border border-border">
            <Eyebrow>For investors</Eyebrow>
            <div>
              <p className="text-h3 md:text-h2 font-bold">
                One check. <span className="text-accent">Every product.</span>
              </p>
              <p className="mt-2 text-body text-text-2">
                A stake in everything the studio ships, {p.name} included.
              </p>
              <Button href="mailto:manol@balkanbit.app" className="mt-6">
                Request LP Deck
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
