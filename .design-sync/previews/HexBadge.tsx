import { HexBadge } from "balkanbit";

/* Dark-first DS: preview cards render on a light page, so every export
   carries the system's page background. */
const Dark = ({ children }: { children?: React.ReactNode }) => (
  <div className="bg-bg p-8">{children}</div>
);

const RocketIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
  </svg>
);

const ChartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

export const WithIcon = () => (
  <Dark>
    <div className="text-accent">
      <HexBadge size={52}>
        <RocketIcon />
      </HexBadge>
    </div>
  </Dark>
);

export const Sizes = () => (
  <Dark>
    <div className="flex items-end gap-6 text-text-1">
      <HexBadge size={44}>
        <ChartIcon />
      </HexBadge>
      <HexBadge size={56}>
        <ChartIcon />
      </HexBadge>
      <HexBadge size={72}>
        <ChartIcon />
      </HexBadge>
    </div>
  </Dark>
);

export const ProofBadge = () => (
  <Dark>
    <div className="flex flex-col items-center gap-2.5 max-w-[160px] text-center">
      <HexBadge>
        <ChartIcon />
      </HexBadge>
      <span className="text-2xl font-extrabold leading-none text-text-1">53%</span>
      <span className="text-[10px] font-semibold uppercase tracking-[0.07em] text-text-2 leading-relaxed">
        Avg. IRR of studio-built startups
      </span>
    </div>
  </Dark>
);
