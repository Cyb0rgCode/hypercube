# Graph Report - .  (2026-05-16)

## Corpus Check
- Corpus is ~25,577 words - fits in a single context window. You may not need a graph.

## Summary
- 397 nodes · 552 edges · 26 communities detected
- Extraction: 88% EXTRACTED · 12% INFERRED · 0% AMBIGUOUS · INFERRED: 64 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Flask REST API|Flask REST API]]
- [[_COMMUNITY_UI Component Library|UI Component Library]]
- [[_COMMUNITY_React App State & Philosophy|React App State & Philosophy]]
- [[_COMMUNITY_Brand Identity System|Brand Identity System]]
- [[_COMMUNITY_Vanilla JS Frontend Helpers|Vanilla JS Frontend Helpers]]
- [[_COMMUNITY_Flask Endpoint Handlers|Flask Endpoint Handlers]]
- [[_COMMUNITY_Typography System|Typography System]]
- [[_COMMUNITY_React UI Components|React UI Components]]
- [[_COMMUNITY_Radii & Shadow Tokens|Radii & Shadow Tokens]]
- [[_COMMUNITY_SVG Icon Assets|SVG Icon Assets]]
- [[_COMMUNITY_Spacing Scale|Spacing Scale]]
- [[_COMMUNITY_Surface & Ink Palette|Surface & Ink Palette]]
- [[_COMMUNITY_Husky Mascot Concept|Husky Mascot Concept]]
- [[_COMMUNITY_Husky Brand Mark Variants|Husky Brand Mark Variants]]
- [[_COMMUNITY_Forecasting Module|Forecasting Module]]
- [[_COMMUNITY_Husky Mark (transparent)|Husky Mark (transparent)]]
- [[_COMMUNITY_Toast Notification|Toast Notification]]
- [[_COMMUNITY_--fg-2 Token|--fg-2 Token]]
- [[_COMMUNITY_Card Background Token|Card Background Token]]
- [[_COMMUNITY_Border Color Token|Border Color Token]]
- [[_COMMUNITY_Foreground Primary Token|Foreground Primary Token]]
- [[_COMMUNITY_Foreground Muted Token|Foreground Muted Token]]
- [[_COMMUNITY_Button Radius Token|Button Radius Token]]
- [[_COMMUNITY_Pill Radius Token|Pill Radius Token]]
- [[_COMMUNITY_Flask Static Husky|Flask Static Husky]]
- [[_COMMUNITY_Annotated Dashboard Screenshot|Annotated Dashboard Screenshot]]

## God Nodes (most connected - your core abstractions)
1. `$()` - 22 edges
2. `get_db()` - 17 edges
3. `assets/icons/README.md` - 11 edges
4. `loadDashboard()` - 10 edges
5. `App (root orchestrator)` - 10 edges
6. `Dashboard component` - 10 edges
7. `Brand Icon Set Page` - 10 edges
8. `MatrixView (Eisenhower)` - 9 edges
9. `Sidebar Component (232px)` - 9 edges
10. `Surfaces & Ink Page` - 9 edges

## Surprising Connections (you probably didn't know these)
- `Husky Logo Mark (30x30 gradient)` --semantically_similar_to--> `logo-glyph.svg`  [EXTRACTED] [semantically similar]
  C:\Users\RayenMajoul\Desktop\Dash\assets\logo-mark.svg → C:\Users\RayenMajoul\Desktop\Dash\assets\icons\README.md
- `gunicorn >= 21.2.0` --conceptually_related_to--> `Flask App (Husky Backend)`  [INFERRED]
  requirements.txt → app.py
- `GET / index route` --references--> `index.html (single-page shell)`  [EXTRACTED]
  app.py → templates/index.html
- `Display type scale` --semantically_similar_to--> `Heading scale`  [INFERRED] [semantically similar]
  C:\Users\RayenMajoul\Desktop\Dash\preview\type-display.html → C:\Users\RayenMajoul\Desktop\Dash\preview\type-headings.html
- `Mono type scale` --semantically_similar_to--> `Stat numerals scale`  [INFERRED] [semantically similar]
  C:\Users\RayenMajoul\Desktop\Dash\preview\type-mono.html → C:\Users\RayenMajoul\Desktop\Dash\preview\type-stats.html

## Hyperedges (group relationships)
- **Task CRUD pipeline (UI → API → DB)** — appjs_render_tasks, app_create_task, app_update_task, database_tasks_table [EXTRACTED 0.95]
- **Forecast pipeline (task_logs → predictor → dashboard chart)** — database_task_logs_table, predictor_forecast, appjs_overlay_forecast, appjs_render_daily_chart [EXTRACTED 0.95]
- **Habit + streak tracking system** — app_toggle_habit, app_calc_streak, database_habits_table, database_habit_completions_table [EXTRACTED 0.95]
- **Tab routing composition (Sidebar -> App -> Surfaces)** — sidebar_Sidebar, app_App, dashboard_Dashboard, matrix_MatrixView, tasks_Tasks, habitsgoals_HabitsGoals [EXTRACTED 1.00]
- **Shared atoms consumed across surfaces (Icon/Chip/Pill)** — parts_Icon, parts_Chip, parts_Pill, tasks_TaskRow, dashboard_Dashboard, habitsgoals_HabitsGoals, sidebar_Sidebar [EXTRACTED 1.00]
- **Tasks data lifecycle (store + mutators + surfaces)** — app_tasksStore, app_addTask, app_toggleTask, app_deleteTask, tasks_Tasks, matrix_MatrixView, dashboard_Dashboard [EXTRACTED 1.00]
- **Violet brand palette family** — color_violet_7c6af7, color_violet_light_9d8fff, color_violet_dim_15 [EXTRACTED 1.00]
- **Semantic priority color trio** — color_pink_danger_f76a8c, color_amber_warning_f7c76a, color_mint_success_6af7c8 [EXTRACTED 1.00]
- **Dark surface depth stack** — color_bg_0a0a0f, color_surface_12121a, color_surface_2_1a1a26 [EXTRACTED 1.00]
- **Button Variant Family** — btn_primary, btn_ghost, btn_dashed, btn_danger, btn_icon [EXTRACTED 1.00]
- **Priority Signal Token Set (pink/mint/yellow)** — token_color_pink, token_color_mint, token_color_yellow, pill_high, pill_medium, pill_low, row_li_both, row_li_important, row_li_urgent [INFERRED 0.90]
- **Tag & Badge Family** — tag_type, tag_category, tag_urgent, tag_key, pill_high, pill_medium, pill_low, time_badge, forecast_badge [EXTRACTED 1.00]
- **Spacing scale (s-1..s-8)** — spacing_s1_4, spacing_s2_8, spacing_s3_12, spacing_s4_16, spacing_s5_20, spacing_s6_24, spacing_s7_32, spacing_s8_40 [EXTRACTED 1.00]
- **Radius scale (xs..xl + pill)** — radius_xs_4, radius_sm_6, radius_md_8, radius_lg_12, radius_xl_14, radius_pill_999 [EXTRACTED 1.00]
- **Heading scale (H0..H3)** — heading_h0, heading_h1, heading_h2, heading_h3 [EXTRACTED 1.00]
- **Dash App 24x24 Line Icon Set** — icon_check_circle, icon_copy, icon_dashboard, icon_flame, icon_inbox, icon_logo_glyph, icon_matrix, icon_target, icon_tasks, icon_upload [EXTRACTED 0.95]
- **Husky Brand Identity Assets** — icon_logo_mark, icon_logo_glyph [EXTRACTED 0.95]

## Communities

### Community 0 - "Flask REST API"
Cohesion: 0.05
Nodes (62): GET /api/analytics, _calc_streak(), POST /api/goals, POST /api/habits, POST /api/tasks, DELETE /api/goals/<id>, DELETE /api/habits/<id>, DELETE /api/tasks/<id> (+54 more)

### Community 1 - "UI Component Library"
Cohesion: 0.05
Nodes (57): Danger Button (.btn-danger), Dashed Button (.btn-dashed), Ghost Button (.btn-ghost), Icon Button (.btn-icon), Primary Button (.btn-primary), Buttons Component Family, Round Check Toggle (.check), Chip Tag (.chip) (+49 more)

### Community 2 - "React App State & Philosophy"
Cohesion: 0.05
Nodes (53): App (root orchestrator), addGoal mutator, addHabit mutator, addTask mutator, deleteTask mutator, Goals In-Memory Store, Habits In-Memory Store, nextId helper (+45 more)

### Community 3 - "Brand Identity System"
Cohesion: 0.06
Nodes (47): Brand Gradient 135° Violet→Mint, Radial Blur Halo Decoration, Tri-stop Gradient Violet→Light→Mint, Check Icon, Dashboard Icon, Flame Icon, Inbox Icon, Matrix Icon (+39 more)

### Community 4 - "Vanilla JS Frontend Helpers"
Cohesion: 0.13
Nodes (31): $(), api(), applyDragSelect(), countUp(), escHtml(), getToggle(), greeting(), loadDashboard() (+23 more)

### Community 5 - "Flask Endpoint Handlers"
Cohesion: 0.18
Nodes (18): analytics(), _calc_streak(), create_goal(), create_habit(), create_task(), delete_goal(), delete_habit(), delete_task() (+10 more)

### Community 6 - "Typography System"
Cohesion: 0.11
Nodes (20): JetBrains Mono (Google Font · mono/data), Syne (Google Font · display/UI), fonts/README.md, H0 page title · Syne 800 · 36 · -.03em, H1 section · Syne 800 · 26 · -.02em, H2 subsection · Syne 700 · 14 · -.01em, H3 task title · Syne 600 · 14, Mono big · 22px · 700 · -.01em (+12 more)

### Community 7 - "React UI Components"
Cohesion: 0.12
Nodes (7): Dashboard(), dateMedium(), fmtTime(), greeting(), todayLong(), Sidebar(), TaskRow()

### Community 8 - "Radii & Shadow Tokens"
Cohesion: 0.17
Nodes (13): preview/spacing-radii.html, preview/spacing-shadows.html, Radius scale (family), Radius lg · 12px · segment, Radius md · 8px · button, Radius pill · 999px, Radius sm · 6px · chip, Radius xl · 14px · card (+5 more)

### Community 9 - "SVG Icon Assets"
Cohesion: 0.28
Nodes (13): check-circle.svg, copy.svg, dashboard.svg, flame.svg, inbox.svg, logo-glyph.svg, Husky Logo Mark (30x30 gradient), matrix.svg (+5 more)

### Community 10 - "Spacing Scale"
Cohesion: 0.2
Nodes (10): preview/spacing-scale.html, Spacing scale (family), s-1 · 4px, s-2 · 8px, s-3 · 12px, s-4 · 16px, s-5 · 20px, s-6 · 24px (+2 more)

### Community 11 - "Surface & Ink Palette"
Cohesion: 0.31
Nodes (9): Background #0A0A0F, Border #1E1E2E, Muted Meta #6060A0, Surface #12121A, Surface-2 #1A1A26, Text/Ink #E8E8F0, Surfaces & Ink Page, CSS var --font-mono (+1 more)

### Community 12 - "Husky Mascot Concept"
Cohesion: 0.29
Nodes (7): Cyan-blue eye accent, Logo / brand mark design, Brand mascot / logo mark, Siberian Husky (dog breed), Sketchy line-art illustration style, Husky face brand mark with piercing blue eyes, Stylized husky head logo with blue eyes

### Community 13 - "Husky Brand Mark Variants"
Cohesion: 0.53
Nodes (6): Dash brand identity (visual system), Piercing blue husky eyes (accent color element), Husky head line-art illustration, Husky Logo Mark, Husky brand mark image (frontal husky head illustration), Sidebar husky mark (UI placement)

### Community 14 - "Forecasting Module"
Cohesion: 0.5
Nodes (3): forecast(), Lightweight statistical forecaster.  Pure-Python (no numpy / no ML) — works on t, Return `horizon` predicted daily values given historical `values` (oldest first)

### Community 18 - "Husky Mark (transparent)"
Cohesion: 1.0
Nodes (2): Husky brand mark, Husky head line-art with blue eyes (background removed)

### Community 19 - "Toast Notification"
Cohesion: 1.0
Nodes (1): toast() notification

### Community 20 - "--fg-2 Token"
Cohesion: 1.0
Nodes (1): CSS var --fg-2

### Community 21 - "Card Background Token"
Cohesion: 1.0
Nodes (1): Card Background #12121a

### Community 22 - "Border Color Token"
Cohesion: 1.0
Nodes (1): Border #1e1e2e

### Community 23 - "Foreground Primary Token"
Cohesion: 1.0
Nodes (1): Foreground Primary #e8e8f0

### Community 24 - "Foreground Muted Token"
Cohesion: 1.0
Nodes (1): Foreground Muted #6060a0

### Community 25 - "Button Radius Token"
Cohesion: 1.0
Nodes (1): Button Radius 6-8px

### Community 26 - "Pill Radius Token"
Cohesion: 1.0
Nodes (1): Pill Radius 20px

### Community 27 - "Flask Static Husky"
Cohesion: 1.0
Nodes (1): Husky brand mark (Flask static) - stylized howling husky head silhouette in light gray

### Community 28 - "Annotated Dashboard Screenshot"
Cohesion: 1.0
Nodes (1): Husky Dashboard screenshot annotated with red circle around sidebar logo (canvas export)

## Knowledge Gaps
- **114 isolated node(s):** `Lightweight statistical forecaster.  Pure-Python (no numpy / no ML) — works on t`, `Return `horizon` predicted daily values given historical `values` (oldest first)`, `GET / index route`, `POST /api/habits`, `DELETE /api/habits/<id>` (+109 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Husky Mark (transparent)`** (2 nodes): `Husky brand mark`, `Husky head line-art with blue eyes (background removed)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Toast Notification`** (1 nodes): `toast() notification`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `--fg-2 Token`** (1 nodes): `CSS var --fg-2`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Card Background Token`** (1 nodes): `Card Background #12121a`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Border Color Token`** (1 nodes): `Border #1e1e2e`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Foreground Primary Token`** (1 nodes): `Foreground Primary #e8e8f0`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Foreground Muted Token`** (1 nodes): `Foreground Muted #6060a0`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Button Radius Token`** (1 nodes): `Button Radius 6-8px`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Pill Radius Token`** (1 nodes): `Pill Radius 20px`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Flask Static Husky`** (1 nodes): `Husky brand mark (Flask static) - stylized howling husky head silhouette in light gray`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Annotated Dashboard Screenshot`** (1 nodes): `Husky Dashboard screenshot annotated with red circle around sidebar logo (canvas export)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Shared preview.css Stylesheet` connect `Brand Identity System` to `Surface & Ink Palette`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **Are the 15 inferred relationships involving `get_db()` (e.g. with `get_tasks()` and `log_task_time()`) actually correct?**
  _`get_db()` has 15 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Lightweight statistical forecaster.  Pure-Python (no numpy / no ML) — works on t`, `Return `horizon` predicted daily values given historical `values` (oldest first)`, `GET / index route` to the rest of the system?**
  _114 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Flask REST API` be split into smaller, more focused modules?**
  _Cohesion score 0.05 - nodes in this community are weakly interconnected._
- **Should `UI Component Library` be split into smaller, more focused modules?**
  _Cohesion score 0.05 - nodes in this community are weakly interconnected._
- **Should `React App State & Philosophy` be split into smaller, more focused modules?**
  _Cohesion score 0.05 - nodes in this community are weakly interconnected._
- **Should `Brand Identity System` be split into smaller, more focused modules?**
  _Cohesion score 0.06 - nodes in this community are weakly interconnected._