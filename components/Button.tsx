import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Base = { variant?: "primary" | "secondary" | "ghost"; size?: "md" | "lg"; children: ReactNode; className?: string };
type AsLink = Base & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children">;
type AsButton = Base & { href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function Button(props: AsLink | AsButton) {
  const { variant = "primary", size = "md", className = "", children, ...rest } = props;
  const v = {
    primary: "bg-accent-fill hover:bg-accent-fill-hover text-white",
    secondary: "border border-border-strong text-text-1 hover:bg-surface",
    ghost: "text-accent hover:bg-accent-soft",
  }[variant];
  const s = size === "lg" ? "h-13 px-7 text-base" : "h-11 px-5.5 text-[15px]";
  const cls = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors disabled:bg-surface-2 disabled:text-text-4 disabled:pointer-events-none ${v} ${s} ${className}`;
  if ("href" in rest && rest.href) {
    return <a {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)} className={cls}>{children}</a>;
  }
  return <button type="button" {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)} className={cls}>{children}</button>;
}
