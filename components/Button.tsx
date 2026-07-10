/* Pill button — primary solid red, or ghost red-outline with uppercase tracked label */
export function Button({
  variant = "primary",
  href,
  children,
  className = "",
  ...rest
}: {
  variant?: "primary" | "ghost";
  href: string;
  children: React.ReactNode;
  className?: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">) {
  const base =
    variant === "primary"
      ? "px-9 py-3.5 rounded-full bg-accent hover:bg-accent-hover text-white text-base font-semibold transition-colors"
      : "px-7 py-2.5 rounded-full border border-accent text-accent hover:bg-accent-soft text-[13px] font-semibold uppercase tracking-[0.07em] transition-colors";
  return (
    <a href={href} className={`inline-flex items-center justify-center gap-2 ${base} ${className}`} {...rest}>
      {children}
    </a>
  );
}
