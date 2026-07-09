const phases = [
  {
    number: "01",
    phase: "Ideation",
    action: "Mining TikTok for trending apps and underserved niches — we validate demand with real user behavior before writing a line of code.",
    role: "TikTok Research",
    image: "/phase-ideation.webp",
  },
  {
    number: "02",
    phase: "Engineering",
    action: "One React Native + Expo codebase shipping to both iOS and Android — cutting dev time in half while native apps take months.",
    role: "React Native & Expo",
    image: "/phase-engineering.webp",
  },
  {
    number: "03",
    phase: "Capital",
    action: "Studio funds deploy directly into Meta & TikTok ad campaigns — systematic testing to find product-market fit with real paying users.",
    role: "Paid Acquisition",
    image: "/phase-capital.webp",
  },
  {
    number: "04",
    phase: "Scale",
    action: "Winning campaigns get more capital. Losing ones get killed. A data-driven flywheel that compounds spend behind what already works.",
    role: "Scale What Works",
    image: "/phase-scale.webp",
  },
];

const advantages = [
  {
    icon: "◈",
    title: "One Product Already Live",
    body: "ZeroShots.app is on the App Store — proof the studio model works end-to-end, from concept to shipped product.",
  },
  {
    icon: "⬡",
    title: "Proprietary Core Shipped",
    body: 'A shared engineering "Core" for auth, payments, and analytics is built and running. Every new product starts at 60% completion.',
  },
  {
    icon: "◉",
    title: "Lean Cost Structure",
    body: "Based in Sofia, Bulgaria — senior engineering talent at a fraction of coastal US rates, without compromising quality.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080b12] text-[#f0f4ff] overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-[#080b12]/80 backdrop-blur-md border-b border-white/5">
        <span className="font-mono text-lg font-bold tracking-tight">
          <span className="text-[#4f8fff]">Balkan</span>Bit
        </span>
        <div className="hidden md:flex items-center gap-8 text-sm text-[#8ca0c8]">
          <a href="#model" className="hover:text-white transition-colors">Model</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#investors" className="hover:text-white transition-colors">Investors</a>
          <a href="#founder" className="hover:text-white transition-colors">Founder</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <a
          href="mailto:manol@balkanbit.app"
          className="text-sm px-4 py-2 rounded-lg bg-[#4f8fff]/10 border border-[#4f8fff]/30 text-[#4f8fff] hover:bg-[#4f8fff]/20 transition-all"
        >
          Request Limited Partner Deck
        </a>
      </nav>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 pt-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.webp')" }}
        />
        <div className="absolute inset-0 bg-[#080b12]/80" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#4f8fff 1px, transparent 1px), linear-gradient(90deg, #4f8fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#4f8fff]/10 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#8ca0c8] mb-8 animate-fade-in-up">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4f8fff] glow-dot" />
            Sofia, Bulgaria &nbsp;·&nbsp; Venture Building Studio
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6 animate-fade-in-up">
            Ideas don&apos;t{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f8fff] to-[#a78bfa]">
              ship.
            </span>
            <br />
            Builders{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#4f8fff]">
              do.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#8ca0c8] max-w-2xl mx-auto mb-10 animate-fade-in-up-delay-1">
            BalkanBit is a venture building studio. One founder, a shared engineering core, and
            studio-funded capital — turning validated ideas into shipped mobile products at speed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
            <a
              href="mailto:manol@balkanbit.app"
              className="px-8 py-3.5 rounded-xl bg-[#4f8fff] hover:bg-[#3d74f0] text-white font-semibold transition-all shadow-lg shadow-[#4f8fff]/25"
            >
              Request Limited Partner Deck
            </a>
            <a
              href="#portfolio"
              className="px-8 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold transition-all"
            >
              View Portfolio
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#4a5568] text-xs animate-fade-in-up-delay-3">
          <span>Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#4a5568] to-transparent" />
        </div>
      </section>

      {/* Venture Building Model */}
      <section id="model" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-[#4f8fff] tracking-widest uppercase">
            How BalkanBit Operates
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">Build · Fund · Scale</h2>
          <p className="mt-4 text-[#8ca0c8] max-w-xl mx-auto">
            TikTok signals the gap. React Native ships the app. Studio capital buys the users. Scale what sticks. Every product follows the same machine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {phases.map((p) => (
            <div
              key={p.number}
              className="relative rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-[#4f8fff]/40 hover:bg-white/[0.05] transition-all group overflow-hidden"
            >
              <div className="relative w-full aspect-video overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.phase} phase`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080b12] via-[#080b12]/40 to-transparent" />
                <div className="absolute top-3 left-4 text-4xl font-mono font-bold text-[#4f8fff]/20 group-hover:text-[#4f8fff]/40 transition-colors">
                  {p.number}
                </div>
              </div>
              <div className="p-6 pt-3">
                <div className="text-sm font-mono text-[#4f8fff] mb-1">{p.phase}</div>
                <p className="text-[#8ca0c8] text-sm mb-4">{p.action}</p>
                <span className="inline-block text-xs px-2.5 py-1 rounded-md bg-[#4f8fff]/10 border border-[#4f8fff]/20 text-[#4f8fff] font-mono">
                  {p.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Flagship: ZeroShots */}
      <section id="portfolio" className="py-24 px-6 md:px-12 bg-white/[0.01] border-y border-white/[0.05]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-[#a78bfa] tracking-widest uppercase">
              Portfolio
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">Proof the Model Works</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#1a1040] via-[#0f1a30] to-[#080b12] border border-white/10 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#a78bfa]/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a78bfa]/10 border border-[#a78bfa]/30 text-xs text-[#a78bfa] mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 glow-dot" />
                  Live — In-Studio Scaling
                </div>
                <h3 className="text-4xl font-bold mb-2">
                  ZeroShots
                  <span className="text-[#a78bfa]">.app</span>
                </h3>
                <p className="text-sm text-[#a78bfa] font-mono mb-6">Tinder for Your Screenshots</p>

                <div className="space-y-4 mb-6">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 text-sm flex-shrink-0 mt-0.5">
                      ✕
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-0.5">The Problem</p>
                      <p className="text-sm text-[#8ca0c8]">
                        Hundreds of screenshots piling up. You&apos;ll never look at most of them again — but deleting them one by one is tedious.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 text-sm flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-0.5">The Solution</p>
                      <p className="text-sm text-[#8ca0c8]">
                        Swipe right to keep, left to delete. ZeroShots turns your screenshot backlog into a fast, satisfying swipe session — and tells you exactly how much space you freed. Delete 200 screenshots. Five minutes. Done.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <img
                    src="https://www.zeroshots.app/images/stack.png"
                    alt="ZeroShots screenshot stack"
                    className="w-full rounded-xl border border-white/10"
                  />
                  <img
                    src="https://www.zeroshots.app/images/recap.png"
                    alt="ZeroShots recap screen"
                    className="w-full rounded-xl border border-white/10"
                  />
                </div>

                <a
                  href="https://zeroshots.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center px-4 py-2.5 rounded-xl bg-[#a78bfa] hover:bg-[#9370f0] text-white text-sm font-semibold transition-all"
                >
                  View on App Store
                </a>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { label: "Platform", value: "iOS-first (iPhone)" },
                { label: "Category", value: "Utilities / Productivity" },
                { label: "Core Mechanic", value: "Swipe to delete screenshots" },
                { label: "Studio Role", value: "Design · Engineering · Capital" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/[0.07]"
                >
                  <span className="text-sm text-[#8ca0c8]">{item.label}</span>
                  <span className="text-sm font-semibold">{item.value}</span>
                </div>
              ))}

              <div className="p-4 rounded-xl bg-[#4f8fff]/5 border border-[#4f8fff]/20 mt-4">
                <p className="text-sm text-[#8ca0c8]">
                  <span className="text-[#4f8fff] font-semibold">Pipeline: </span>
                  Product #2 is in early-stage development. Back the studio now and get in
                  before the next launch.{" "}
                  <a href="mailto:manol@balkanbit.app" className="text-[#4f8fff] underline underline-offset-2">
                    Request Limited Partner Deck.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investors */}
      <section id="investors" className="relative py-24 px-6 md:px-12 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/investors-bg.webp')" }}
        />
        <div className="absolute inset-0 bg-[#080b12]/85" />
        <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-[#4f8fff] tracking-widest uppercase">
            For Investors
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">What&apos;s Already De-Risked</h2>
          <p className="mt-4 text-[#8ca0c8] max-w-xl mx-auto">
            The studio model only works if the infrastructure works. Here&apos;s what BalkanBit has
            already proven — before you write a check.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {advantages.map((adv) => (
            <div
              key={adv.title}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-[#4f8fff]/30 transition-all"
            >
              <div className="text-3xl text-[#4f8fff] mb-4">{adv.icon}</div>
              <h3 className="font-bold mb-2">{adv.title}</h3>
              <p className="text-sm text-[#8ca0c8] leading-relaxed">{adv.body}</p>
            </div>
          ))}
        </div>

        <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-r from-[#4f8fff]/10 to-[#a78bfa]/10 border border-white/10 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#4f8fff]/5 to-[#a78bfa]/5 blur-xl" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Back the Studio. Own the Pipeline.</h3>
            <p className="text-[#8ca0c8] mb-6 max-w-lg mx-auto">
              BalkanBit partners with angels and micro-VCs who want operating leverage — not just
              a bet on one product, but a stake in every product the studio ships.
            </p>
            <a
              href="mailto:manol@balkanbit.app"
              className="inline-block px-8 py-3.5 rounded-xl bg-[#4f8fff] hover:bg-[#3d74f0] text-white font-semibold transition-all shadow-lg shadow-[#4f8fff]/25"
            >
              Request Limited Partner Deck
            </a>
          </div>
        </div>
        </div>
      </section>

      {/* Founder */}
      <section id="founder" className="py-24 px-6 md:px-12 bg-white/[0.01] border-y border-white/[0.05]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-[#4f8fff] tracking-widest uppercase">
              The Founder
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">One Builder. Full Stack.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Avatar + name */}
            <div className="flex flex-col items-center md:items-start gap-6">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#4f8fff] to-[#a78bfa] blur-sm opacity-60" />
                <img
                  src="https://aiaccelerator.bg/wp-content/uploads/2025/12/avatar-upwork.png"
                  alt="Manol Trendafilov"
                  className="relative w-32 h-32 rounded-full object-cover border-2 border-white/10"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Manol Trendafilov</h3>
                <p className="text-[#4f8fff] font-mono text-sm mt-1">Founder &amp; General Partner, BalkanBit</p>
                <a
                  href="https://www.linkedin.com/in/man0l/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-[#0077b5]/10 border border-[#0077b5]/30 text-[#4f8fff] text-sm hover:bg-[#0077b5]/20 transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  linkedin.com/in/man0l
                </a>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {["Angel-Backed Founder", "Full-Stack Engineer", "Fundraising Operator", "AI & Mobile"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-[#4f8fff]/10 border border-[#4f8fff]/20 text-[#4f8fff] font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Story */}
            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#4f8fff]/10 border border-[#4f8fff]/20 flex items-center justify-center text-[#4f8fff] text-sm flex-shrink-0 font-mono font-bold">1</div>
                  <div>
                    <p className="font-semibold mb-1">trak.ink — From Zero to Angel Investment</p>
                    <p className="text-sm text-[#8ca0c8] leading-relaxed">
                      Co-founded trak.ink, a dropshipping arbitrage SaaS. Pitched, secured angel
                      funding, and navigated the full fundraising cycle — pitch deck through term
                      sheet. The fundraising playbook BalkanBit uses was built here.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#a78bfa]/10 border border-[#a78bfa]/20 flex items-center justify-center text-[#a78bfa] text-sm flex-shrink-0 font-mono font-bold">2</div>
                  <div>
                    <p className="font-semibold mb-1">Multi-Discipline Operator</p>
                    <p className="text-sm text-[#8ca0c8] leading-relaxed">
                      Deep engineering work, NLP coaching, real estate investment — each a
                      different lens on building products and managing risk. BalkanBit is the
                      synthesis: a studio that builds, funds, and scales mobile-first products.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 text-sm flex-shrink-0 font-mono font-bold">3</div>
                  <div>
                    <p className="font-semibold mb-1">Now: Shipping AI Products Full-Time</p>
                    <p className="text-sm text-[#8ca0c8] leading-relaxed">
                      Operating as a software engineer contractor while building BalkanBit&apos;s
                      product pipeline. ZeroShots is live on the App Store. The shared Core is
                      built. The studio machine is running — now it needs capital to compound.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-white/[0.07] bg-[#05080f]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <span className="font-mono text-xl font-bold">
                <span className="text-[#4f8fff]">Balkan</span>Bit
              </span>
              <p className="mt-3 text-sm text-[#8ca0c8] leading-relaxed">
                A venture building studio. One founder, a shared engineering core, and
                studio-funded capital — shipping mobile products from Sofia to the world.
              </p>
            </div>

            <div>
              <p className="text-xs font-mono text-[#4f8fff] tracking-widest uppercase mb-4">
                Navigate
              </p>
              <div className="space-y-2 text-sm text-[#8ca0c8]">
                <div><a href="#model" className="hover:text-white transition-colors">Venture Model</a></div>
                <div><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></div>
                <div><a href="#investors" className="hover:text-white transition-colors">For Investors</a></div>
                <div>
                  <a
                    href="https://zeroshots.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    ZeroShots.app ↗
                  </a>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-mono text-[#4f8fff] tracking-widest uppercase mb-4">
                Legal & Contact
              </p>
              <div className="space-y-1.5 text-sm text-[#8ca0c8]">
                <p className="text-white font-semibold">Pazaruvai Umno EOOD</p>
                <p>Lyulin District, Lyulin 2, bl. 235</p>
                <p>ent. V, fl. 2, apt. 81</p>
                <p>Sofia, 1343, Bulgaria</p>
                <div className="pt-2 space-y-1">
                  <p>
                    <span className="text-[#4f8fff]">D-U-N-S:</span> 525523661
                  </p>
                  <p>
                    <span className="text-[#4f8fff]">Tel:</span>{" "}
                    <a href="tel:+19294657840" className="hover:text-white transition-colors">
                      +1 929-465-7840
                    </a>
                  </p>
                  <p>
                    <span className="text-[#4f8fff]">Email:</span>{" "}
                    <a href="mailto:manol@balkanbit.app" className="hover:text-white transition-colors">
                      manol@balkanbit.app
                    </a>
                  </p>
                </div>
                <div className="pt-2 space-y-1">
                  <p>
                    <a href="/axend/privacy-policy" className="hover:text-white transition-colors">
                      Axend Privacy Policy
                    </a>
                  </p>
                  <p>
                    <a href="/axend/terms" className="hover:text-white transition-colors">
                      Axend Terms of Use
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/[0.05] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#4a5568]">
            <p>&copy; {new Date().getFullYear()} BalkanBit. All rights reserved.</p>
            <p className="font-mono">Registered entity · D-U-N-S 525523661 · Sofia, BG</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
