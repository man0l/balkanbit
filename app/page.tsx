import {
  Button,
  Card,
  Chip,
  HexBadge,
  PortfolioCard,
  SectionHeader,
  SiteFooter,
  SiteNav,
  StatCounter,
} from "@/components";
import { projects } from "@/lib/portfolio";

const phases = [
  {
    phase: "Ideation",
    action: "TikTok tells us what users want — before we write a line of code.",
    image: "/gen/service-ideation.webp",
    fallback: "/phase-ideation.webp",
  },
  {
    phase: "Engineering",
    action: "One React Native codebase. iOS + Android. Half the dev time.",
    image: "/gen/service-engineering.webp",
    fallback: "/phase-engineering.webp",
  },
  {
    phase: "Capital",
    action: "Studio funds buy real users on Meta & TikTok from day one.",
    image: "/gen/service-capital.webp",
    fallback: "/phase-capital.webp",
  },
  {
    phase: "Scale",
    action: "Winners get more capital. Losers get killed.",
    image: "/gen/service-scale.webp",
    fallback: "/phase-scale.webp",
  },
];

const advantages = [
  {
    icon: (
      /* rocket */
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
    title: "The model works",
    body: "Axend is live on the App Store and slashloop is live on the web — concept to shipped product, end to end.",
  },
  {
    icon: (
      /* layers / core */
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 22 8.5 12 15 2 8.5 12 2" />
        <polyline points="2 15.5 12 22 22 15.5" />
        <polyline points="2 12 12 18.5 22 12" />
      </svg>
    ),
    title: "Every app starts 60% done",
    body: "Auth, payments, analytics — the shared Core is built, shipped, and running.",
  },
  {
    icon: (
      /* cost */
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
        <path d="M12 6v2m0 8v2" />
      </svg>
    ),
    title: "Your check buys growth",
    body: "Every dollar goes to shipping and user acquisition — not payroll.",
  },
];

/* Starfield, sparkles, planet spheres and the planet horizon. Flip to false
   to hide every .space-motif element on the page. */
const SPACE_MOTIFS = true;

export default function Home() {
  return (
    <main
      id="main"
      data-motifs={SPACE_MOTIFS ? "on" : "off"}
      className="min-h-screen bg-bg text-text-1 overflow-x-hidden"
    >
      <SiteNav />

      {/* Hero — starfield + planet horizon */}
      <section className="relative flex flex-col items-center min-h-screen text-center px-6 pt-40 pb-0 overflow-hidden">
        <div className="space-motif absolute inset-0 starfield" />
        <div className="space-motif sparkle left-[12%] top-[30%]" />
        <div className="space-motif sparkle sparkle-accent right-[16%] top-[22%]" />
        <div className="space-motif sparkle right-[9%] top-[55%]" />
        <div className="space-motif sparkle left-[7%] top-[62%]" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-label md:text-small font-semibold uppercase tracking-[0.08em] text-text-4 mb-6 animate-fade-in-up">
            Venture studio · Sofia, Bulgaria
          </p>

          <h1 className="font-extrabold text-balance text-display mb-7 animate-fade-in-up">
            TikTok trends in.
            <br />
            <span className="text-accent-brand">Profitable apps out.</span>
          </h1>

          <p className="text-lead text-text-2 max-w-2xl mx-auto mb-9 animate-fade-in-up-delay-1">
            We mine TikTok for proven demand, ship the app in weeks, and scale
            winners with studio capital. Investors own a piece of every launch.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center animate-fade-in-up-delay-2">
            <Button href="mailto:manol@balkanbit.app" size="lg">
              Join the Journey — Invest
            </Button>
            <Button href="#portfolio" variant="secondary" size="lg">
              See what&apos;s live ↓
            </Button>
          </div>
        </div>

        {/* Planet horizon with proof badges riding the arc */}
        <div className="relative w-full h-[470px] md:h-[400px] mt-14">
          <img
            src="/gen/planet-horizon.webp"
            alt=""
            aria-hidden="true"
            className="space-motif absolute inset-0 w-full h-full object-cover object-[center_55%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-bg to-transparent" />
          <div className="absolute left-1/2 -translate-x-1/2 top-[100px] md:top-[118px] w-full max-w-4xl px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {[
                {
                  stat: "53%",
                  caption: "Avg. IRR of studio-built startups",
                  icon: (
                    /* percent */
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="5" x2="5" y2="19" />
                      <circle cx="6.5" cy="6.5" r="2.5" />
                      <circle cx="17.5" cy="17.5" r="2.5" />
                    </svg>
                  ),
                },
                {
                  stat: "2.5×",
                  caption: "The returns of traditional VC",
                  icon: (
                    /* trending up */
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  ),
                },
                {
                  stat: "72%",
                  caption: "Of studio startups reach Series A",
                  icon: (
                    /* flag */
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 8 2 1.25 0 2.13-.17 4-.7v11.4c-1.87.53-2.75.7-4 .7-3 0-5-2-8-2a6 6 0 0 0-3.6 1.2" />
                    </svg>
                  ),
                },
                {
                  stat: "25mo",
                  caption: "To Series A — vs 56 traditional",
                  icon: (
                    /* clock */
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  ),
                },
              ].map((b) => (
                <div key={b.caption} className="flex flex-col items-center gap-2.5">
                  <HexBadge>{b.icon}</HexBadge>
                  <span className="font-mono text-h3 font-semibold leading-none">
                    {b.stat}
                  </span>
                  <span className="text-label font-semibold uppercase tracking-[0.08em] text-text-2 max-w-[160px]">
                    {b.caption}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-label text-text-4">
              Startup-studio model benchmarks — Global Startup Studio Network research
            </p>
          </div>
        </div>
      </section>

      {/* Full-bleed device montage strip */}
      <section className="relative h-[240px] md:h-[320px] overflow-hidden">
        <img
          src="/gen/hero-montage.webp"
          alt="BalkanBit product devices"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg" />
      </section>

      {/* Venture Building Model */}
      <section id="model" className="relative py-24 md:py-[120px] px-6 md:px-12 overflow-hidden">
        <div className="space-motif absolute inset-0 starfield opacity-50" />
        <div className="space-motif sparkle left-[6%] top-[18%]" />
        <div className="space-motif sparkle right-[8%] top-[40%]" />
        <div className="relative max-w-6xl mx-auto">
          <SectionHeader
            className="mb-16"
            eyebrow="How BalkanBit Operates"
            title={
              <>
                Weeks to market. <span className="text-accent">Not quarters.</span>
              </>
            }
            lead="TikTok finds the gap. React Native ships the app. Studio capital buys the users."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {phases.map((p, i) => (
              <Card
                key={p.phase}
                hover
                className="relative group overflow-hidden"
              >
                <div className="p-6 pb-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-h3 font-bold">{p.phase}</h3>
                    <p className="text-text-3 text-small mt-2 min-h-[63px]">{p.action}</p>
                  </div>
                  <span className="font-mono text-small font-semibold text-text-4 pt-1.5">0{i + 1}</span>
                </div>
                <div className="relative w-full aspect-[3/2] overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.phase}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio — products the studio builds and runs */}
      <section id="portfolio" className="py-24 md:py-[120px] px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            className="mb-16"
            eyebrow="Portfolio"
            title={
              <>
                <span className="text-accent">Proof,</span> not promises
              </>
            }
            lead="Products we build and run ourselves: live, in beta and about to launch."
          />

          <div className="grid md:grid-cols-2 gap-3">
            {projects.map((p) => (
              <PortfolioCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="relative py-20 md:py-24 px-6 overflow-hidden bg-bg-alt">
        <div className="space-motif absolute inset-0 starfield opacity-40" />
        <div className="space-motif planet-sphere w-40 h-40 -left-14 top-10" />
        <div className="space-motif planet-sphere w-56 h-56 -right-20 -bottom-16" />
        <div className="relative flex flex-wrap items-end justify-center gap-x-16 gap-y-10 max-w-5xl mx-auto">
          {[
            { value: "2", suffix: "", label: "Products live: Axend and slashloop" },
            { value: "60", suffix: "%", label: "Head start from the shared Core" },
            { value: "2", suffix: "×", label: "Faster shipping, one codebase" },
            { value: "100", suffix: "%", label: "Of capital funds product & ads, not payroll" },
          ].map((s) => (
            <StatCounter
              key={s.label}
              value={s.value}
              suffix={s.suffix || undefined}
              label={s.label}
            />
          ))}
        </div>
      </section>

      {/* Investors */}
      <section id="investors" className="relative py-24 md:py-[120px] px-6 md:px-12 overflow-hidden">
        <div className="space-motif absolute inset-0 starfield opacity-60" />
        <div className="space-motif sparkle left-[20%] top-[14%]" />
        <div className="space-motif sparkle sparkle-accent right-[24%] top-[24%]" />
        <div className="space-motif sparkle left-[10%] bottom-[18%]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <SectionHeader
            className="mb-16"
            eyebrow="For Investors"
            title={
              <>
                De-risked <span className="text-accent">before your check clears</span>
              </>
            }
          />

          <div className="grid md:grid-cols-3 gap-3 mb-16">
            {advantages.map((adv) => (
              <Card key={adv.title} hover className="p-8">
                <div className="mb-6 text-accent">
                  <HexBadge size={52}>{adv.icon}</HexBadge>
                </div>
                <h3 className="text-xl font-bold mb-3">{adv.title}</h3>
                <p className="text-small text-text-3">{adv.body}</p>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto p-10 md:p-14 rounded-xl bg-surface text-center">
            <h3 className="text-h3 md:text-h2 font-bold mb-4">
              One check. <span className="text-accent">Every product.</span>
            </h3>
            <p className="text-text-2 leading-relaxed mb-8 max-w-md mx-auto">
              Not a bet on one app — a stake in everything the studio ships.
            </p>
            <Button href="mailto:manol@balkanbit.app" size="lg">
              Request Limited Partner Deck
            </Button>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section id="founder" className="py-24 md:py-[120px] px-6 md:px-12 bg-bg-alt">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            className="mb-16"
            eyebrow="The Founder"
            title={
              <>
                One builder. <span className="text-accent">Full stack.</span>
              </>
            }
          />

          <div className="grid md:grid-cols-[280px_1fr] gap-12 items-start">
            {/* Avatar + name */}
            <div className="flex flex-col items-center md:items-start gap-5">
              <img
                src="https://aiaccelerator.bg/wp-content/uploads/2025/12/avatar-upwork.png"
                alt="Manol Trendafilov"
                className="w-36 h-36 rounded-full object-cover"
              />
              <div className="text-center md:text-left">
                <h3 className="text-h3 font-bold">Manol Trendafilov</h3>
                <p className="text-text-3 text-small mt-1">Founder &amp; General Partner</p>
                <a
                  href="https://www.linkedin.com/in/man0l/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-accent hover:text-accent-link-hover text-small font-semibold transition-colors"
                >
                  linkedin.com/in/man0l ↗
                </a>
              </div>
            </div>

            {/* Story — one-liners against a hairline */}
            <div className="space-y-8 md:border-l md:border-border md:pl-10 pt-2">
              {[
                {
                  n: "1",
                  title: "Raised angel funding at trak.ink",
                  body: "Pitch deck to term sheet — the fundraising playbook BalkanBit runs today.",
                },
                {
                  n: "2",
                  title: "Full-stack operator",
                  body: "Engineering, coaching, real-estate investing — one operator, many lenses on risk.",
                },
                {
                  n: "3",
                  title: "All-in on BalkanBit",
                  body: "Axend and slashloop are live. The Core is built. The machine needs capital to compound.",
                },
              ].map((step) => (
                <div key={step.n} className="flex gap-5">
                  <div className="font-mono text-h3 font-semibold text-accent flex-shrink-0 w-8 leading-none pt-0.5">
                    {step.n}
                  </div>
                  <div>
                    <p className="text-lg font-bold mb-1.5">{step.title}</p>
                    <p className="text-small text-text-3">{step.body}</p>
                  </div>
                </div>
              ))}

              <div className="flex flex-wrap gap-2 pt-2">
                {["Angel-Backed Founder", "Full-Stack Engineer", "Fundraising Operator", "AI & Mobile"].map((tag) => (
                  <Chip key={tag} tone="neutral">
                    {tag}
                  </Chip>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact card — Mercury "Have questions?" pattern */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto rounded-xl bg-surface grid md:grid-cols-2 overflow-hidden">
          <div className="p-10 md:p-12 md:border-r md:border-border">
            <h3 className="text-h3 font-bold text-accent mb-3">Ready to invest?</h3>
            <p className="text-small text-text-3 mb-10">
              The LP deck answers the numbers. One email away.
            </p>
            <a href="mailto:manol@balkanbit.app" className="block text-accent hover:text-accent-link-hover text-small font-semibold mb-2 transition-colors">
              manol@balkanbit.app
            </a>
            <a href="tel:+19294657840" className="block font-mono text-xl font-semibold hover:text-text-2 transition-colors">
              +1 929 465 7840
            </a>
          </div>
          <div className="relative hidden md:block">
            <div className="space-motif absolute inset-0 starfield opacity-70" />
            <div className="space-motif sparkle sparkle-accent left-[45%] top-[45%]" />
            <div className="space-motif planet-sphere w-28 h-28 right-8 bottom-8" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
