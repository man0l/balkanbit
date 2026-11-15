"use client";

import { useId, type InputHTMLAttributes } from "react";

export function Input({ label, hint, error, className = "", ...rest }: { label: string; hint?: string; error?: string } & InputHTMLAttributes<HTMLInputElement>) {
  const id = useId();
  const msgId = `${id}-msg`;
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={id} className="text-small font-semibold text-text-1">{label}</label>
      <input
        id={id}
        aria-invalid={!!error}
        aria-describedby={hint || error ? msgId : undefined}
        className={`h-12 px-4 rounded-lg bg-bg text-text-1 text-base border placeholder:text-text-4 focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(255,77,115,0.25)] ${error ? "border-danger" : "border-border-strong"}`}
        {...rest}
      />
      {(error || hint) && <span id={msgId} className={`text-small ${error ? "text-danger" : "text-text-3"}`}>{error ?? hint}</span>}
    </div>
  );
}
