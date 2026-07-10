import { Card, Chip, HexBadge } from "balkanbit";

/* Dark-first DS: preview cards render on a light page, so every export
   carries the system's page background. */
const Dark = ({ children }: { children?: React.ReactNode }) => (
  <div className="bg-bg p-8">{children}</div>
);

export const Basic = () => (
  <Dark>
    <Card className="p-8 max-w-sm">
      <h3 className="text-xl font-bold mb-3">Every app starts 60% done</h3>
      <p className="text-sm text-text-3 leading-relaxed">
        Auth, payments, analytics — the shared Core is built, shipped, and running.
      </p>
    </Card>
  </Dark>
);

export const HoverProofPoint = () => (
  <Dark>
    <Card hover className="p-8 max-w-sm">
      <div className="mb-6 text-accent">
        <HexBadge size={52}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 22 8.5 12 15 2 8.5 12 2" />
            <polyline points="2 15.5 12 22 22 15.5" />
          </svg>
        </HexBadge>
      </div>
      <h3 className="text-xl font-bold mb-3">The model works</h3>
      <p className="text-sm text-text-3 leading-relaxed">
        ZeroShots.app is live on the App Store — concept to shipped product, end to end.
      </p>
    </Card>
  </Dark>
);

export const WithStatusChip = () => (
  <Dark>
    <Card className="p-6 max-w-sm">
      <div className="mb-4">
        <Chip tone="positive">Live</Chip>
      </div>
      <h3 className="text-lg font-bold mb-2">ZeroShots.app</h3>
      <p className="text-sm text-text-3">Tinder for your screenshots.</p>
    </Card>
  </Dark>
);
