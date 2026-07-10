import { Chip } from "balkanbit";

/* Dark-first DS: preview cards render on a light page, so every export
   carries the system's page background. */
const Dark = ({ children }: { children?: React.ReactNode }) => (
  <div className="bg-bg p-8">{children}</div>
);

export const Accent = () => (
  <Dark>
    <Chip>Paid Acquisition</Chip>
  </Dark>
);

export const Positive = () => (
  <Dark>
    <Chip tone="positive">
      <span className="w-1.5 h-1.5 rounded-full bg-positive" />
      Live — In-Studio Scaling
    </Chip>
  </Dark>
);

export const Neutral = () => (
  <Dark>
    <Chip tone="neutral">Full-Stack Engineer</Chip>
  </Dark>
);

export const TagGroup = () => (
  <Dark>
    <div className="flex flex-wrap gap-2 max-w-xs">
      {["Angel-Backed Founder", "Full-Stack Engineer", "Fundraising Operator", "AI & Mobile"].map(
        (tag) => (
          <Chip key={tag} tone="neutral">
            {tag}
          </Chip>
        )
      )}
    </div>
  </Dark>
);
