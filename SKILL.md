---
name: husky-design
description: Use this skill to generate well-branded interfaces and assets for Husky (a personal productivity dashboard for tasks, time, habits, and goals), either for production code or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files:

- `colors_and_type.css` — every design token (color, type, spacing, radii, shadows, motion). Import or copy into your output; never invent new tokens.
- `assets/` — the Husky logo mark and the full icon set as inline-SVG files. Copy these into output, don't redraw.
- `ui_kits/web/` — pixel-faithful React/JSX recreations of every Husky surface (Dashboard, Matrix, Tasks, Habits & Goals). Pull components into your output as a starting point.
- `preview/` — small reference cards for each token category and component. Useful for sanity-checking that your output matches the system.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions (target surface — dashboard view, task list, settings? Existing screen to extend or new flow? Mobile, desktop, both? Static mock or interactive?), and act as an expert designer who outputs HTML artifacts or production code depending on the need.

Key things to remember about Husky:

- **Dark always.** `--bg-1 #0a0a0f` body with an ambient violet+mint radial wash. No light mode exists.
- **Two fonts only.** Syne 700/800 for display + UI; JetBrains Mono 400/600/700 for *everything* numeric, label-ish, or meta. Title-case sentences; UPPERCASE only for small mono labels with 0.08em+ tracking.
- **One gradient.** `linear-gradient(135deg, #7c6af7 0%, #9d8fff 60%, #6af7c8 100%)` for page titles (text-clip), the logo mark, focus banner icon, goal bars. Don't reach for it on every surface.
- **Iconography is inline SVG**, stroke 2 (2.2 for stats, 2.4 for logo), `round` caps + joins, `currentColor`, 24×24 viewBox. Pull from `assets/icons/`; if you need more, Lucide is the closest match.
- **Springy taps.** Every interactive element scales to 0.94 on press with cubic-bezier(0.34, 1.56, 0.64, 1) over 0.4s.
- **No emoji** in chrome. Unicode glyphs (`✓ ✕ ✎ ⏱ ★ !`) are used inline like icons — keep them.
- **Voice:** terse, warm, observational. "Inbox zero — nice", "Last one standing", "Burning the midnight oil". Never address the user as "you".
