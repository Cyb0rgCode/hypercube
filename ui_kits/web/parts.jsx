/* Husky · shared atoms — icons, chips, pills, badges, small UI parts. */

const Icon = {
  Dashboard: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/>
      <line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6"  y1="20" x2="6"  y2="14"/>
      <line x1="3"  y1="20" x2="21" y2="20"/>
    </svg>
  ),
  Matrix: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3"  y="3"  width="7" height="7" rx="1.2"/>
      <rect x="14" y="3"  width="7" height="7" rx="1.2"/>
      <rect x="3"  y="14" width="7" height="7" rx="1.2"/>
      <rect x="14" y="14" width="7" height="7" rx="1.2"/>
    </svg>
  ),
  Tasks: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4"/>
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
    </svg>
  ),
  Target: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
    </svg>
  ),
  CheckCircle: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  ),
  Flame: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.06 2-6 .5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
    </svg>
  ),
  Inbox: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
    </svg>
  ),
  LogoGlyph: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3"    y="3"  width="7.5" height="9"  rx="1.5"/>
      <rect x="13.5" y="3"  width="7.5" height="5"  rx="1.5"/>
      <rect x="13.5" y="11" width="7.5" height="10" rx="1.5"/>
      <rect x="3"    y="15" width="7.5" height="6"  rx="1.5"/>
    </svg>
  ),
  Sun: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4"/>
      <line x1="12" y1="2"    x2="12"  y2="4"/>
      <line x1="12" y1="20"   x2="12"  y2="22"/>
      <line x1="4.93"  y1="4.93"  x2="6.34"  y2="6.34"/>
      <line x1="17.66" y1="17.66" x2="19.07" y2="19.07"/>
      <line x1="2"  y1="12"   x2="4"   y2="12"/>
      <line x1="20" y1="12"   x2="22"  y2="12"/>
      <line x1="4.93"  y1="19.07" x2="6.34"  y2="17.66"/>
      <line x1="17.66" y1="6.34"  x2="19.07" y2="4.93"/>
    </svg>
  ),
  Moon: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  ),
};

/* ── Tags / chips ─────────────────────────────────────────────────────────── */

function Chip({ kind = "type", children }) {
  return <span className={`chip tag-${kind}`}>{children}</span>;
}

function Pill({ tone = "high", children }) {
  return <span className={`pill ${tone}`}>{children}</span>;
}

/* ── Time pretty-printer ──────────────────────────────────────────────────── */

function fmtTime(mins) {
  if (!mins) return "";
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

/* ── Greeting ─────────────────────────────────────────────────────────────── */

function greeting() {
  const h = new Date().getHours();
  if (h < 5)  return "Burning the midnight oil";
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  if (h < 22) return "Good evening";
  return "Late night focus";
}

function todayLong() {
  return new Date().toLocaleDateString(undefined, {
    weekday: "long", month: "long", day: "numeric",
  });
}

function dateMedium() {
  return new Date().toLocaleDateString(undefined, {
    weekday: "long", month: "short", day: "numeric",
  });
}

Object.assign(window, { Icon, Chip, Pill, fmtTime, greeting, todayLong, dateMedium });
