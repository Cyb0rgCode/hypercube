# Husky web app — UI kit

A pixel-faithful recreation of the Husky productivity dashboard, drawn straight
from the source CSS in `Dash/static/css/style.css`. Built as a single React
prototype that mounts all four product surfaces (Dashboard, Matrix, Tasks,
Habits & Goals) under one sidebar shell.

## Files

- `index.html` — interactive entry point. Click sidebar items to switch
  surfaces. Tasks can be checked off, added, and filtered. Habits toggle.
- `app.jsx` — orchestrator; tab routing + in-memory state stores.
- `Sidebar.jsx` — fixed 232px glassmorphic sidebar + nav with sliding
  pill indicator.
- `Dashboard.jsx` — greeting, focus banner, three stat cards, two chart
  panels (rendered as inline SVG so we don't pull in Chart.js).
- `Matrix.jsx` — Eisenhower 2×2 grid with axis labels.
- `Tasks.jsx` — input row, filter segmented control, item list with chips,
  priority pills, left-border priority coding, batch bar.
- `HabitsGoals.jsx` — two-column layout: daily habits with streak chips +
  goals with gradient progress bars.
- `parts.jsx` — shared atoms (chips, pills, icons, badges).

## What's faithful, what's faked

- ✅ Tokens (color, type, spacing, radii, shadows) — all pulled from
  `colors_and_type.css`, no shortcuts.
- ✅ Iconography — every SVG copied verbatim from the live `index.html`.
- ✅ Springy iOS-style press feedback, sliding nav indicator, hover lifts.
- ✅ Empty states and copy match product voice (`Inbox zero`,
  `Last one standing`, etc.).
- ⏸ Charts — Chart.js replaced with hand-drawn SVG that mirrors the
  product's gradient bars and doughnut, without the runtime.
- ⏸ No backend. State lives in memory and resets on reload.
- ⏸ Time logging input on each row is shown but inert.
- ⏸ Edit sheet, drag-to-select, AI prompt copy, JSON import — not wired
  (they're documented in the source if you need to extend).

## How to use

Open `index.html` directly. Everything else lives in JSX files loaded via
Babel standalone — no build step.

To copy components into a new design, pull just the JSX file you need plus
`parts.jsx`. They all consume CSS variables from `../../colors_and_type.css`.
