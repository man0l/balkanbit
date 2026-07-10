# BalkanBit — build conventions

**Dark-first system.** Every screen starts on the near-black page ground: wrap the app root in `bg-bg text-text-1` (there is no light theme). No provider component is needed — styling is pure CSS via the bundled stylesheet. Body type is Hanken Grotesk (ships with the bundle; applied automatically via `body`).

**Styling idiom: Tailwind utility classes bound to the DS tokens.** The stylesheet is *compiled* — a utility not present in `_ds_bundle.css` silently does nothing, and new arbitrary values (e.g. `text-[19px]`) are NOT generated at runtime. Stick to this vocabulary plus the standard layout utilities (`flex`, `grid`, `gap-*`, `p-*`, `m-*`, `max-w-*`, `rounded-*`) and the exact arbitrary values shown in component `.prompt.md` examples; when unsure, grep `_ds_bundle.css`.

| Role | Classes |
|---|---|
| Surfaces | `bg-bg` (page), `bg-bg-alt` (alternate sections), `bg-surface` (cards; `hover:bg-surface-2` for lift) |
| Text ladder | `text-text-1` (primary) → `text-text-2` → `text-text-3` (body-muted) → `text-text-4` (faint labels) |
| Accent (Signal Red #FF0044) | `text-accent`, `bg-accent` + `hover:bg-accent-hover`, `bg-accent-soft` (tinted fills), `border-accent` |
| Positive (live/shipped ONLY) | `text-positive`, `bg-positive-soft` |
| Borders | `border-border` (8% white hairline), `border-border-faint` |
| Radii | `rounded-full` for ALL interactive pills (buttons, chips); `rounded-lg` (8px) for cards |

**Type rules.** Headings: `font-bold`, tight leading, and accent-color at most ONE key phrase per heading via a nested `<span className="text-accent">` (never a whole heading, never gradient text). Eyebrows and labels are uppercase and letterspaced: eyebrow `text-[15px] font-semibold uppercase tracking-[0.05em] text-text-4`, small labels `text-[11px] font-semibold uppercase tracking-[0.07em]`. No emoji, no icon fonts — inline stroke SVGs inside `HexBadge`, and `Diamond` as the brand mark/bullet.

**Where the truth lives.** Read `styles.css` → `_ds_bundle.css` (all compiled utilities + the `:root` token values) before styling. Per-component API is `components/general/<Name>/<Name>.d.ts`; usage examples are in each `<Name>.prompt.md`.

**Idiomatic composition** (a proof-point card, from the shipped site):

```jsx
import { Card, HexBadge, Chip } from "balkanbit";

<div className="bg-bg text-text-1 p-8">
  <Card hover className="p-8 max-w-sm">
    <div className="mb-6 text-accent">
      <HexBadge size={52}>{/* inline stroke svg */}</HexBadge>
    </div>
    <h3 className="text-xl font-bold mb-3">The model works</h3>
    <p className="text-sm text-text-3 leading-relaxed">
      ZeroShots.app is live on the App Store — concept to shipped product, end to end.
    </p>
    <div className="mt-4"><Chip tone="positive">Live</Chip></div>
  </Card>
</div>
```
