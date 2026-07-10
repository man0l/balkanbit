import { Button } from "balkanbit";

/* Dark-first DS: preview cards render on a light page, so every export
   carries the system's page background. */
const Dark = ({ children }: { children?: React.ReactNode }) => (
  <div className="bg-bg p-8">{children}</div>
);

export const Primary = () => (
  <Dark>
    <Button href="mailto:manol@balkanbit.app">Join the Journey — Invest</Button>
  </Dark>
);

export const Ghost = () => (
  <Dark>
    <Button variant="ghost" href="#portfolio">
      View Portfolio
    </Button>
  </Dark>
);

export const WithIcon = () => (
  <Dark>
    <Button href="mailto:manol@balkanbit.app" className="pl-6 pr-8 py-2.5 text-[15px] font-medium">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path d="m2 7 10 6 10-6" />
      </svg>
      Request LP Deck
    </Button>
  </Dark>
);

export const CallToActionPair = () => (
  <Dark>
    <div className="flex items-center gap-4">
      <Button href="#invest">Request Limited Partner Deck</Button>
      <Button variant="ghost" href="#proof">
        See the Proof
      </Button>
    </div>
  </Dark>
);
