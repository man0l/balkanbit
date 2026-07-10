import { Diamond } from "balkanbit";

/* Dark-first DS: preview cards render on a light page, so every export
   carries the system's page background. */
const Dark = ({ children }: { children?: React.ReactNode }) => (
  <div className="bg-bg p-8">{children}</div>
);

export const BrandMark = () => (
  <Dark>
    <span className="flex items-center gap-2.5 font-bold text-xl text-text-1">
      <Diamond className="bg-accent" />
      <span>
        Balkan<span className="text-accent">Bit</span>
      </span>
    </span>
  </Dark>
);

export const AccentBullet = () => (
  <Dark>
    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.07em] text-accent">
      <Diamond className="bg-accent scale-75" />
      Paid Acquisition
    </span>
  </Dark>
);

export const ParticleRow = () => (
  <Dark>
    <div className="flex items-center gap-6 p-4">
      <Diamond className="bg-accent" />
      <Diamond className="bg-white/25" />
      <Diamond className="bg-white/25" />
      <Diamond className="bg-positive" />
    </div>
  </Dark>
);
