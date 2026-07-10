# design-sync notes — balkanbit

- App repo, not a packaged DS: no `dist/`, no `.d.ts` exports. Converter entry is the source barrel `./components/index.ts` (pass `--entry ./components/index.ts`), and all 7 components are pinned in `cfg.componentSrcMap` — **add new components there and to `components/index.ts`** or discovery finds nothing (`[ZERO_MATCH]`).
- `cfg.buildCmd` = `npm run build && node .design-sync/prepare-css.mjs`. The prep script copies the hashed Turbopack stylesheet (`.next/static/chunks/*.css`, largest wins) to `.design-sync/.cache/app.css` (= `cfg.cssEntry`) and rewrites `url(../media/*.woff2)` → `./fonts/*`, copying the woff2s. Turbopack emits `../media/` urls, not `/_next/static/media/` — the script handles both.
- Tailwind v4 auto-scans `.design-sync/previews/*.tsx`, so preview-only classes DO compile into the app stylesheet — but only after a full `npm run build`. **Always run the full buildCmd (not just the converter) after editing previews.**
- Dark-first system: preview cards render on a light page, so every preview export wraps in a local `Dark` helper (`bg-bg p-8`). Without it, `text-text-1` content is white-on-white invisible (cost one debugging cycle).
- (resolved 2026-07-10) A dead `.font-\[family-name\:var\(--font-archivo\)\]` utility used to compile in because Tailwind scanned the obsolete `design_handoff/` folder; that folder is deleted, so the utility drops out on the next full build. Lesson: Tailwind v4 scans every non-gitignored text file — stray docs can mint utilities.
- Playwright: cached chromium-1228 matched latest `playwright-core` at sync time (July 2026).
- `mx-auto` was added to StatCounter's label during preview grading (label was left-offset outside flex parents) — a real component fix, shipped to the site too.

## Known render warns
- (none outstanding — Diamond `[RENDER_BLANK]` and HexBadge `[RENDER_THIN]` were pre-authoring floor states, fixed by authored previews.)

## Re-sync risks
- `cssEntry` is the compiled **app** stylesheet: utilities exist only if the app or the preview files use them. If a page redesign drops a class the DS previews/conventions rely on, it silently vanishes from the bundle — re-validate conventions.md's class table against `_ds_bundle.css` each sync (it was fully verified this run).
- Hashed `fonts/*.woff2` filenames churn whenever next/font re-subsets — expect fonts/ paths to change and old ones to need reconciliation deletes.
- `components/` is live app code (app/page.tsx imports it) — API changes ripple to the site; rebuild and eyeball the site when changing them.
- The resync driver's validate stage failed once with exit 1 and passed identically on re-run (suspected chromium contention). If validate fails in the driver, run `package-validate.mjs` standalone before diagnosing.
- GSSN ROI copy in preview content ("53% avg IRR") mirrors the live site's hero claims — if the site's sourced stats change, update `previews/HexBadge.tsx` to match.
