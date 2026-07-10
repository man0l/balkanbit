import {
  Button,
  Card,
  Chip,
  Diamond,
  HexBadge,
  SectionHeader,
  StatCounter,
} from "@/components";

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
    body: "ZeroShots.app is live on the App Store — concept to shipped product, end to end.",
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

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-text-1 overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-3.5 bg-bg/85 backdrop-blur-md">
        <a href="#" className="flex items-center gap-2.5">
          <Diamond className="bg-accent" />
          <span className="font-bold text-lg tracking-tight">
            Balkan<span className="text-accent">Bit</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.07em] text-text-1">
          <a href="#model" className="px-[19px] hover:text-accent transition-colors">Model</a>
          <a href="#portfolio" className="px-[19px] hover:text-accent transition-colors">Portfolio</a>
          <a href="#investors" className="px-[19px] hover:text-accent transition-colors">Investors</a>
          <a href="#founder" className="px-[19px] hover:text-accent transition-colors">Founder</a>
          <a href="#contact" className="px-[19px] hover:text-accent transition-colors">Contact</a>
        </div>
        <a
          href="mailto:manol@balkanbit.app"
          className="inline-flex items-center gap-2 text-[15px] font-medium pl-6 pr-8 py-2.5 rounded-full bg-accent hover:bg-accent-hover text-white transition-colors"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <rect x="2" y="4" width="20" height="16" rx="3" />
            <path d="m2 7 10 6 10-6" />
          </svg>
          Request LP Deck
        </a>
      </nav>

      {/* Hero — starfield + planet horizon */}
      <section className="relative flex flex-col items-center min-h-screen text-center px-6 pt-40 pb-0 overflow-hidden">
        <div className="absolute inset-0 starfield" />
        <div className="sparkle left-[12%] top-[30%]" />
        <div className="sparkle sparkle-accent right-[16%] top-[22%]" />
        <div className="sparkle right-[9%] top-[55%]" />
        <div className="sparkle left-[7%] top-[62%]" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-[13px] md:text-[15px] font-semibold uppercase tracking-[0.07em] text-text-4 mb-6 animate-fade-in-up">
            Venture studio · Sofia, Bulgaria
          </p>

          <h1 className="font-bold text-balance text-[42px] md:text-[80px] lg:text-[98px] leading-[1.12] tracking-[-0.8px] mb-7 animate-fade-in-up">
            TikTok trends in.
            <br />
            <span className="text-accent">Profitable apps out.</span>
          </h1>

          <p className="text-lg md:text-[22px] leading-relaxed text-text-2 max-w-2xl mx-auto mb-9 animate-fade-in-up-delay-1">
            We mine TikTok for proven demand, ship the app in weeks, and scale
            winners with studio capital. Investors own a piece of every launch.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center animate-fade-in-up-delay-2">
            <Button href="mailto:manol@balkanbit.app">Join the Journey — Invest</Button>
            <a
              href="#portfolio"
              className="text-[13px] font-semibold uppercase tracking-[0.07em] text-text-2 hover:text-accent transition-colors"
            >
              See what&apos;s live ↓
            </a>
          </div>
        </div>

        {/* Planet horizon with proof badges riding the arc */}
        <div className="relative w-full h-[470px] md:h-[400px] mt-14">
          <img
            src="/gen/planet-horizon.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-[center_55%]"
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
                  <span className="text-2xl font-extrabold leading-none">
                    {b.stat}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.07em] text-text-2 max-w-[150px] leading-relaxed">
                    {b.caption}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-[10px] text-text-4 tracking-wide">
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
        <div className="absolute inset-0 starfield opacity-50" />
        <div className="sparkle left-[6%] top-[18%]" />
        <div className="sparkle right-[8%] top-[40%]" />
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
                    <h3 className="text-[22px] font-bold leading-snug">{p.phase}</h3>
                    <p className="text-text-3 text-sm leading-relaxed mt-2 min-h-[60px]">{p.action}</p>
                  </div>
                  <span className="text-sm font-bold text-text-4 pt-1.5">0{i + 1}</span>
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

      {/* Featured projects — full-bleed vibrant mosaic, Mercury style */}
      <section id="portfolio" className="py-24 md:py-[120px]">
        <SectionHeader
          className="mb-16 px-6"
          eyebrow="Portfolio"
          title={
            <>
              <span className="text-accent">Proof,</span> not promises
            </>
          }
        />

        <div className="grid md:grid-cols-2">
          {/* ZeroShots tile */}
          <a
            href="https://zeroshots.app"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block aspect-[4/5] md:aspect-[5/6] overflow-hidden group"
          >
            <img
              src="/gen/zeroshots-tile.webp"
              alt="ZeroShots app"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/30" />
            <div className="absolute top-0 left-0 right-0 p-8 md:p-10 flex items-start justify-between">
              <div>
                <h3 className="text-[28px] md:text-[34px] font-bold text-white">ZeroShots</h3>
                <p className="text-white/80 text-sm mt-1">Tinder for your screenshots</p>
              </div>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.07em] text-white bg-black/30 backdrop-blur-sm px-3.5 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-positive glow-dot" />
                Live
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 flex items-end justify-between">
              <p className="text-white/90 text-sm md:text-base max-w-[260px] font-medium leading-snug">
                200 screenshots deleted in five minutes. Swipe. Done.
              </p>
              <span className="inline-flex px-6 py-2.5 rounded-full bg-white text-black text-sm font-semibold group-hover:bg-accent group-hover:text-white transition-colors whitespace-nowrap">
                App Store ↗
              </span>
            </div>
          </a>

          {/* Product #2 teaser tile */}
          <a
            href="mailto:manol@balkanbit.app"
            className="relative block aspect-[4/5] md:aspect-[5/6] overflow-hidden group"
          >
            <img
              src="/gen/pipeline-tile.webp"
              alt="Product #2 — in development"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/30" />
            <div className="absolute top-0 left-0 right-0 p-8 md:p-10 flex items-start justify-between">
              <div>
                <h3 className="text-[28px] md:text-[34px] font-bold text-white">Product #2</h3>
                <p className="text-white/80 text-sm mt-1">In development</p>
              </div>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.07em] text-white bg-black/30 backdrop-blur-sm px-3.5 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-accent glow-dot" />
                Pipeline
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 flex items-end justify-between">
              <p className="text-white/90 text-sm md:text-base max-w-[260px] font-medium leading-snug">
                Back the studio now — get in before the next launch.
              </p>
              <span className="inline-flex px-6 py-2.5 rounded-full bg-accent text-white text-sm font-semibold group-hover:bg-accent-hover transition-colors whitespace-nowrap">
                Get early access
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* Stats band */}
      <section className="relative py-20 md:py-24 px-6 overflow-hidden bg-bg-alt">
        <div className="absolute inset-0 starfield opacity-40" />
        <div className="planet-sphere w-40 h-40 -left-14 top-10" />
        <div className="planet-sphere w-56 h-56 -right-20 -bottom-16" />
        <div className="relative flex flex-wrap items-end justify-center gap-x-16 gap-y-10 max-w-5xl mx-auto">
          {[
            { value: "1", suffix: "", label: "App live on the App Store" },
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
        <div className="absolute inset-0 starfield opacity-60" />
        <div className="sparkle left-[20%] top-[14%]" />
        <div className="sparkle sparkle-accent right-[24%] top-[24%]" />
        <div className="sparkle left-[10%] bottom-[18%]" />

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
                <p className="text-sm text-text-3 leading-relaxed">{adv.body}</p>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto p-10 md:p-14 rounded-xl bg-surface text-center">
            <h3 className="text-[30px] md:text-[40px] font-bold leading-tight mb-4">
              One check. <span className="text-accent">Every product.</span>
            </h3>
            <p className="text-text-2 leading-relaxed mb-8 max-w-md mx-auto">
              Not a bet on one app — a stake in everything the studio ships.
            </p>
            <Button href="mailto:manol@balkanbit.app">Request Limited Partner Deck</Button>
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
                <h3 className="text-[24px] font-bold">Manol Trendafilov</h3>
                <p className="text-text-3 text-sm mt-1">Founder &amp; General Partner</p>
                <a
                  href="https://www.linkedin.com/in/man0l/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-accent hover:text-accent-link-hover text-sm font-semibold transition-colors"
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
                  body: "ZeroShots is live. The Core is built. The machine needs capital to compound.",
                },
              ].map((step) => (
                <div key={step.n} className="flex gap-5">
                  <div className="text-[26px] font-extrabold text-accent flex-shrink-0 w-8 leading-none pt-0.5">
                    {step.n}
                  </div>
                  <div>
                    <p className="text-lg font-bold mb-1.5">{step.title}</p>
                    <p className="text-sm text-text-3 leading-relaxed">{step.body}</p>
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
            <h3 className="text-[28px] md:text-[32px] font-bold text-accent mb-3">Ready to invest?</h3>
            <p className="text-sm text-text-3 leading-relaxed mb-10">
              The LP deck answers the numbers. One email away.
            </p>
            <a href="mailto:manol@balkanbit.app" className="block text-accent hover:text-accent-link-hover text-sm font-semibold mb-2 transition-colors">
              manol@balkanbit.app
            </a>
            <a href="tel:+19294657840" className="block text-xl font-bold hover:text-text-2 transition-colors">
              +1 929 465 7840
            </a>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute inset-0 starfield opacity-70" />
            <div className="sparkle sparkle-accent left-[45%] top-[45%]" />
            <div className="planet-sphere w-28 h-28 right-8 bottom-8" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-border-faint">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <span className="flex items-center gap-2.5 font-bold text-xl">
                <Diamond className="bg-accent" />
                <span>
                  Balkan<span className="text-accent">Bit</span>
                </span>
              </span>
              <p className="mt-4 text-sm text-text-3 leading-relaxed">
                A venture building studio shipping mobile products from Sofia to the world.
              </p>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.07em] text-text-4 mb-5">
                Navigate
              </p>
              <div className="space-y-2.5 text-sm text-text-2">
                <div><a href="#model" className="hover:text-accent transition-colors">Venture Model</a></div>
                <div><a href="#portfolio" className="hover:text-accent transition-colors">Portfolio</a></div>
                <div><a href="#investors" className="hover:text-accent transition-colors">For Investors</a></div>
                <div>
                  <a
                    href="https://zeroshots.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    ZeroShots.app ↗
                  </a>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.07em] text-text-4 mb-5">
                Legal & Contact
              </p>
              <div className="space-y-1.5 text-sm text-text-3">
                <p className="text-text-1 font-semibold">Pazaruvai Umno EOOD</p>
                <p>Lyulin District, Lyulin 2, bl. 235</p>
                <p>ent. V, fl. 2, apt. 81</p>
                <p>Sofia, 1343, Bulgaria</p>
                <div className="pt-2 space-y-1">
                  <p>D-U-N-S: 525523661</p>
                  <p>
                    <a href="tel:+19294657840" className="hover:text-accent transition-colors">
                      +1 929-465-7840
                    </a>
                  </p>
                  <p>
                    <a href="mailto:manol@balkanbit.app" className="text-accent hover:text-accent-link-hover transition-colors">
                      manol@balkanbit.app
                    </a>
                  </p>
                </div>
                <div className="pt-2 space-y-1">
                  <p>
                    <a href="/axend/privacy-policy" className="hover:text-accent transition-colors">
                      Axend Privacy Policy
                    </a>
                  </p>
                  <p>
                    <a href="/axend/terms" className="hover:text-accent transition-colors">
                      Axend Terms of Use
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border-faint pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-text-4">
            <p>&copy; {new Date().getFullYear()} BalkanBit. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/man0l/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-border-strong flex items-center justify-center text-text-1 hover:border-accent hover:text-accent transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:manol@balkanbit.app"
                aria-label="Email"
                className="w-9 h-9 rounded-full border border-border-strong flex items-center justify-center text-text-1 hover:border-accent hover:text-accent transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="16" rx="3" />
                  <path d="m2 7 10 6 10-6" />
                </svg>
              </a>
            </div>
            <p>Registered entity · D-U-N-S 525523661 · Sofia, BG</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
