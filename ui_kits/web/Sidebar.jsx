/* Sidebar — fixed 232px shell with sliding pill nav indicator. */

function ThemeToggle({ theme, onChange }) {
  return (
    <div className="theme-toggle" role="group" aria-label="Theme" data-theme={theme}>
      <span className="theme-toggle-indicator" aria-hidden="true"/>
      <button
        type="button"
        className="theme-opt"
        aria-pressed={theme === "light"}
        aria-label="Light mode"
        title="Light mode"
        onClick={() => onChange("light")}
      >
        <Icon.Sun/>
      </button>
      <button
        type="button"
        className="theme-opt"
        aria-pressed={theme === "dark"}
        aria-label="Dark mode"
        title="Dark mode"
        onClick={() => onChange("dark")}
      >
        <Icon.Moon/>
      </button>
    </div>
  );
}

function SidebarUser({ user, onLogout }) {
  if (!user) return null;
  return (
    <div className="sidebar-user">
      <span className="sidebar-user-name">@{user}</span>
      <button
        type="button"
        className="sidebar-logout"
        onClick={onLogout}
        aria-label="Sign out"
        title="Sign out"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
          <polyline points="16 17 21 12 16 7"/>
          <line x1="21" y1="12" x2="9" y2="12"/>
        </svg>
      </button>
    </div>
  );
}

function Sidebar({ active, onChange, theme, onThemeChange, user, onLogout }) {
  const navRef = React.useRef(null);
  const items = [
    { id: "dashboard", label: "Dashboard",     icon: <Icon.Dashboard /> },
    { id: "matrix",    label: "Matrix",        icon: <Icon.Matrix /> },
    { id: "tasks",     label: "Tasks",         icon: <Icon.Tasks /> },
    { id: "habits",    label: "Habits & Goals", icon: <Icon.Target /> },
  ];

  // Sliding indicator
  const [ind, setInd] = React.useState({ x: 0, y: 0, w: 0, h: 0, ready: false });
  React.useLayoutEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const btn = nav.querySelector(".nav-btn.active");
    if (!btn) return;
    const nr = nav.getBoundingClientRect();
    const br = btn.getBoundingClientRect();
    setInd({ x: br.left - nr.left, y: br.top - nr.top, w: br.width, h: br.height, ready: true });
  }, [active]);

  return (
    <aside className="sidebar">
      <div className="logo">
        <img className="logo-mark-img" src="../../assets/husky-face.png" alt="Husky"/>
        <span className="logo-text">Husky</span>
      </div>
      <nav className="snav" ref={navRef}>
        <span className="nav-indicator" style={{
          transform: `translateX(${ind.x}px) translateY(${ind.y}px)`,
          width: ind.w, height: ind.h, opacity: ind.ready ? 1 : 0,
        }}/>
        {items.map(it => (
          <button
            key={it.id}
            className={`nav-btn ${active === it.id ? "active" : ""}`}
            onClick={() => onChange(it.id)}
          >
            <span style={{display: "inline-flex", width: 18, height: 18}}>{it.icon}</span>
            <span>{it.label}</span>
          </button>
        ))}
      </nav>
      <div className="sidebar-foot">
        <SidebarUser user={user} onLogout={onLogout}/>
        <ThemeToggle theme={theme} onChange={onThemeChange}/>
        <div className="sidebar-date">{dateMedium()}</div>
      </div>
    </aside>
  );
}

window.Sidebar = Sidebar;
window.ThemeToggle = ThemeToggle;
window.SidebarUser = SidebarUser;
