import { Nav } from "./Nav";

/* The site's primary nav: section links are absolute ("/#model") so they
   work from every page, not just the homepage. */
const links = [
  { href: "/#model", label: "Model" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/#investors", label: "Investors" },
  { href: "/#founder", label: "Founder" },
  { href: "/#contact", label: "Contact" },
];

const mailIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
    <rect x="2" y="4" width="20" height="16" rx="3" />
    <path d="m2 7 10 6 10-6" />
  </svg>
);

export function SiteNav({ active }: { active?: string }) {
  return (
    <Nav
      links={links.map((l) => ({ ...l, active: l.href === active }))}
      cta={{
        href: "mailto:manol@balkanbit.app",
        label: (
          <>
            {mailIcon}
            Request LP Deck
          </>
        ),
      }}
    />
  );
}
