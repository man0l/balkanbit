"use client";

import { useState } from "react";
import { Button } from "./Button";
import { Logo } from "./Logo";

type NavLink = { href: string; label: string; active?: boolean };

/* Primary nav — floating pill bar on surface-1. Links collapse into a
   menu button below md. */
export function Nav({
  links,
  cta,
}: {
  links: NavLink[];
  cta?: { href: string; label: React.ReactNode };
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-3 inset-x-3 md:top-4 md:inset-x-6 z-50">
      <nav
        aria-label="Primary"
        className="max-w-[1200px] mx-auto bg-surface-1/95 backdrop-blur-md border border-border rounded-[28px] md:rounded-full pl-5 pr-2 py-2"
      >
        <div className="flex items-center justify-between gap-4">
          <Logo href="#" />

          <ul className="hidden md:flex items-center gap-1 text-small font-semibold">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={l.active ? "page" : undefined}
                  className={`inline-flex items-center h-11 px-3 lg:px-4 rounded-full transition-colors ${
                    l.active ? "text-text-1" : "text-text-2 hover:text-text-1"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1">
            {cta && (
              <span className="hidden sm:block">
                <Button href={cta.href} className="whitespace-nowrap">
                  {cta.label}
                </Button>
              </span>
            )}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="primary-menu"
              onClick={() => setOpen((o) => !o)}
              className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full text-text-1 hover:bg-surface transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
                {open ? (
                  <path d="M6 6l12 12M18 6 6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <ul id="primary-menu" className="md:hidden flex flex-col pt-2 pb-2 pr-3 text-body font-semibold">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={l.active ? "page" : undefined}
                  className={`flex items-center h-11 ${l.active ? "text-text-1" : "text-text-2 hover:text-text-1"}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
            {cta && (
              <li className="pt-2 sm:hidden">
                <Button href={cta.href} className="w-full" onClick={() => setOpen(false)}>
                  {cta.label}
                </Button>
              </li>
            )}
          </ul>
        )}
      </nav>
    </div>
  );
}
