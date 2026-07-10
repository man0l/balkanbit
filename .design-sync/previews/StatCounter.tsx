import { StatCounter } from "balkanbit";

/* Dark-first DS: preview cards render on a light page, so every export
   carries the system's page background. */
const Dark = ({ children }: { children?: React.ReactNode }) => (
  <div className="bg-bg p-8">{children}</div>
);

export const Percent = () => (
  <Dark>
    <StatCounter value="60" suffix="%" label="Head start from the shared Core" />
  </Dark>
);

export const Multiplier = () => (
  <Dark>
    <StatCounter value="2" suffix="×" label="Faster shipping, one codebase" />
  </Dark>
);

export const DefaultPlus = () => (
  <Dark>
    <StatCounter value="1" label="App live on the App Store" />
  </Dark>
);

export const StatsBand = () => (
  <Dark>
    <div className="flex flex-wrap items-end justify-center gap-x-16 gap-y-10">
      <StatCounter value="1" label="App live on the App Store" />
      <StatCounter value="60" suffix="%" label="Head start from the shared Core" />
      <StatCounter value="2" suffix="×" label="Faster shipping, one codebase" />
    </div>
  </Dark>
);
