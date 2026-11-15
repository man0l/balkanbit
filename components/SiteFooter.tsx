import Link from "next/link";
import { projects } from "@/lib/portfolio";
import { Logo } from "./Logo";

/* Site footer: wordmark, navigation (incl. every portfolio product), legal */
export function SiteFooter() {
  return (
      <footer id="contact" className="border-t border-border-faint">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <Logo href="/" className="text-xl" />
              <p className="mt-4 text-small text-text-3">
                A venture building studio shipping mobile products from Sofia to the world.
              </p>
            </div>

            <div>
              <p className="text-label font-semibold uppercase tracking-[0.08em] text-text-4 mb-5">
                Navigate
              </p>
              <div className="space-y-2.5 text-small text-text-2">
                <div><Link href="/#model" className="hover:text-accent transition-colors">Venture Model</Link></div>
                <div><Link href="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link></div>
                <div><Link href="/#investors" className="hover:text-accent transition-colors">For Investors</Link></div>
                {projects.map((p) => (
                  <div key={p.slug}>
                    <Link href={`/portfolio/${p.slug}`} className="hover:text-accent transition-colors">
                      {p.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-label font-semibold uppercase tracking-[0.08em] text-text-4 mb-5">
                Legal & Contact
              </p>
              <div className="space-y-1.5 text-small text-text-3">
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
                    <Link href="/axend/privacy-policy" className="hover:text-accent transition-colors">
                      Axend Privacy Policy
                    </Link>
                  </p>
                  <p>
                    <Link href="/axend/terms" className="hover:text-accent transition-colors">
                      Axend Terms of Use
                    </Link>
                  </p>
                  <p>
                    <Link href="/mathly/privacy-policy" className="hover:text-accent transition-colors">
                      Mathly Privacy Policy
                    </Link>
                  </p>
                  <p>
                    <Link href="/mathly/terms" className="hover:text-accent transition-colors">
                      Mathly Terms of Use
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border-faint pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-small text-text-4">
            <p>&copy; {new Date().getFullYear()} BalkanBit. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/man0l/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-full border border-border-strong flex items-center justify-center text-text-1 hover:border-accent hover:text-accent transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:manol@balkanbit.app"
                aria-label="Email"
                className="w-11 h-11 rounded-full border border-border-strong flex items-center justify-center text-text-1 hover:border-accent hover:text-accent transition-colors"
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
  );
}
