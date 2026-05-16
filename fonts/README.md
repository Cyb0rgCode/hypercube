# fonts/

Husky uses two Google Fonts, loaded from the CDN — no local files are bundled.

**Display + UI:** [Syne](https://fonts.google.com/specimen/Syne) — weights `400`, `700`, `800`
**Mono + data:** [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) — weights `400`, `600`, `700`

Drop this `<link>` in `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap"
  rel="stylesheet"
/>
```

Or import via CSS (already done in `colors_and_type.css`):

```css
@import url("https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap");
```

If you need an offline copy, download both families from Google Fonts and
drop the WOFF2 files in this folder, then add `@font-face` blocks pointing
at them.
