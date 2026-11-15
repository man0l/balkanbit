/* Single row of monochrome proof logos (clients, ratings, certifications).
   Render only with real, approved assets — with none, the row is hidden. */
type TrustLogo = { src: string; alt: string; href?: string };

export function TrustRow({ logos = [], className = "" }: { logos?: TrustLogo[]; className?: string }) {
  if (logos.length === 0) return null;
  const cols = ["", "", "", "md:grid-cols-3", "md:grid-cols-4", "md:grid-cols-5"][Math.min(logos.length, 5)];
  return (
    <ul className={`grid grid-cols-2 ${cols} gap-3 ${className}`}>
      {logos.slice(0, 5).map((l) => {
        const img = (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={l.src} alt={l.alt} className="max-h-8 w-auto opacity-60 grayscale brightness-0 invert" />
        );
        return (
          <li key={l.src} className="h-14 rounded-lg bg-surface-1 border border-border-faint flex items-center justify-center px-4">
            {l.href ? (
              <a href={l.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-full w-full">
                {img}
              </a>
            ) : (
              img
            )}
          </li>
        );
      })}
    </ul>
  );
}
