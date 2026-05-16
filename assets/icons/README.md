# Husky icon set

All icons are **inline SVGs** drawn to match the product's hand-rolled style.
Drop them straight into JSX/HTML — they color from `currentColor`, so wrap
in a span / button that sets the text color and you're done.

| File | Used in | Notes |
| --- | --- | --- |
| `logo-glyph.svg` | Logo (4-tile mark) | Stroke 2.4. Sits inside a gradient-filled rounded square. |
| `dashboard.svg` | Sidebar nav | Bar chart, stroke 2. |
| `matrix.svg` | Sidebar nav, matrix view | 2×2 grid, stroke 2. |
| `tasks.svg` | Sidebar nav, tasks empty state | Checklist clipboard, stroke 2. |
| `target.svg` | Habits & Goals nav, focus banner | Concentric circles with filled center. |
| `check-circle.svg` | Stat card (Tasks Done Today) | Stroke 2.2. |
| `flame.svg` | Stat card (Habit Rate) | Stroke 2.2. |
| `inbox.svg` | Stat card (Open Tasks) | Stroke 2.2. |
| `upload.svg` | Import JSON button | Stroke 2. |
| `copy.svg` | Copy AI Prompt button | Stroke 2. |

**Style rules.**

- `viewBox="0 0 24 24"`, `fill="none"`, `stroke="currentColor"`.
- `stroke-linecap="round"`, `stroke-linejoin="round"` — no square caps.
- `stroke-width`: `2` (default), `2.2` (stat / focus accent), `2.4` (logo).
- Solid fills only as accents inside otherwise-stroked icons (e.g. target dot
  uses `fill="currentColor"`).
- Render at 14–24px. Don't ever stretch — they're drawn at 24×24.

If you need an icon not in this set, pull from
[Lucide](https://lucide.dev/) at `stroke-width: 2` — it's the closest match.
Avoid Heroicons (too thin) and Feather Solid (filled style breaks the system).
