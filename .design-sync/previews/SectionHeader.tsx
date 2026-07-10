import { SectionHeader } from "balkanbit";

/* Dark-first DS: preview cards render on a light page, so every export
   carries the system's page background. */
const Dark = ({ children }: { children?: React.ReactNode }) => (
  <div className="bg-bg p-8">{children}</div>
);

export const WithLead = () => (
  <Dark>
    <SectionHeader
      eyebrow="How BalkanBit Operates"
      title={
        <>
          Weeks to market. <span className="text-accent">Not quarters.</span>
        </>
      }
      lead="TikTok finds the gap. React Native ships the app. Studio capital buys the users."
    />
  </Dark>
);

export const TitleOnly = () => (
  <Dark>
    <SectionHeader
      eyebrow="Portfolio"
      title={
        <>
          <span className="text-accent">Proof,</span> not promises
        </>
      }
    />
  </Dark>
);
