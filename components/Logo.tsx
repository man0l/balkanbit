import { Diamond } from "./Diamond";

/* Wordmark — brand-red Diamond + "BalkanBit" at 800 */
export function Logo({ href = "/", className = "" }: { href?: string; className?: string }) {
  return (
    <a href={href} className={`inline-flex items-center gap-2.5 font-extrabold text-lg tracking-tight text-text-1 ${className}`}>
      <Diamond className="bg-accent-brand" />
      BalkanBit
    </a>
  );
}
