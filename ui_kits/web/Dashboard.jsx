/* Dashboard — greeting, focus banner, stat cards, two SVG chart panels. */

function FocusBanner({ task, pendingCount }) {
  return (
    <div className="focus-banner">
      <div className="focus-banner-glow"></div>
      <div className="focus-banner-icon"><Icon.Target /></div>
      <div className="focus-banner-content">
        <div className="focus-banner-label">Today's focus</div>
        <div className="focus-banner-task">{task ? task.title : "Add a task to get started"}</div>
      </div>
      <div className="focus-banner-meta">
        {pendingCount > 1
          ? (<><strong>{pendingCount - 1}</strong> more pending</>)
          : task ? "Last one standing" : ""}
      </div>
    </div>
  );
}

function StatCard({ tone, icon, value, label }) {
  return (
    <div className="card stat" data-tone={tone}>
      <div className="stat-icon">{icon}</div>
      <div>
        <div className="stat-num">{value}</div>
        <div className="stat-label">{label}</div>
      </div>
    </div>
  );
}

/* ── Inline SVG bar chart (replaces Chart.js for static prototyping) ─── */
function DailyBarChart({ data }) {
  const W = 460, H = 200, P = { l: 28, r: 12, t: 12, b: 28 };
  const innerW = W - P.l - P.r, innerH = H - P.t - P.b;
  const max = Math.max(60, ...data.map(d => d.total));
  const bw = innerW / data.length;
  const yTicks = [0, max/2, max];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={H} style={{ maxHeight: 220 }}>
      <defs>
        <linearGradient id="huskyBar" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%"   stopColor="#7c6af7" stopOpacity="0.95"/>
          <stop offset="100%" stopColor="#7c6af7" stopOpacity="0.2"/>
        </linearGradient>
      </defs>
      {yTicks.map((t, i) => {
        const y = P.t + innerH - (t / max) * innerH;
        return (
          <g key={i}>
            <line x1={P.l} x2={W - P.r} y1={y} y2={y} stroke="rgba(30,30,46,0.8)" strokeWidth="1"/>
            <text x={P.l - 6} y={y + 3} fill="#6060a0" fontSize="11" fontFamily="JetBrains Mono" textAnchor="end">{Math.round(t)}</text>
          </g>
        );
      })}
      {data.map((d, i) => {
        const h = (d.total / max) * innerH;
        const x = P.l + i * bw + bw * 0.18;
        const w = bw * 0.64;
        const y = P.t + innerH - h;
        return (
          <g key={i}>
            <rect x={x} y={y} width={w} height={h} rx="6" fill="url(#huskyBar)"/>
            <text x={x + w/2} y={H - 10} fill="#6060a0" fontSize="11" fontFamily="JetBrains Mono" textAnchor="middle">{d.label}</text>
          </g>
        );
      })}
    </svg>
  );
}

function PriorityDoughnut({ data }) {
  const W = 280, H = 200, cx = 140, cy = 96, r = 64, ir = 42;
  const total = data.reduce((s, d) => s + d.total, 0) || 1;
  let a0 = -Math.PI / 2;
  const colorOf = { high: "#f76a8c", medium: "#f7c76a", low: "#6af7c8" };

  const slices = data.map(d => {
    const a = (d.total / total) * Math.PI * 2;
    const a1 = a0 + a;
    const p0 = [cx + r * Math.cos(a0), cy + r * Math.sin(a0)];
    const p1 = [cx + r * Math.cos(a1), cy + r * Math.sin(a1)];
    const i0 = [cx + ir * Math.cos(a1), cy + ir * Math.sin(a1)];
    const i1 = [cx + ir * Math.cos(a0), cy + ir * Math.sin(a0)];
    const large = a > Math.PI ? 1 : 0;
    const path = [
      `M ${p0.join(" ")}`,
      `A ${r} ${r} 0 ${large} 1 ${p1.join(" ")}`,
      `L ${i0.join(" ")}`,
      `A ${ir} ${ir} 0 ${large} 0 ${i1.join(" ")}`,
      `Z`,
    ].join(" ");
    a0 = a1;
    return { d, path };
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={H} style={{ maxHeight: 220 }}>
        {slices.map((s, i) => (
          <path key={i} d={s.path} fill={colorOf[s.d.category] || "#7c6af7"} stroke="#0a0a0f" strokeWidth="3"/>
        ))}
      </svg>
      <div style={{ display: "flex", gap: 14, justifyContent: "center" }}>
        {data.map(d => (
          <div key={d.category} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "JetBrains Mono", fontSize: 11, color: "#e8e8f0", fontWeight: 600 }}>
            <span style={{ width: 10, height: 10, borderRadius: 50, background: colorOf[d.category] }}/>
            <span>{d.category[0].toUpperCase() + d.category.slice(1)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Dashboard({ tasks }) {
  const pending = tasks.filter(t => !t.completed);
  const focus = [...pending].sort((a, b) => {
    const s = t => (t.urgent && t.important ? 100 : 0) + ({ high: 30, medium: 10, low: 0 }[t.priority] || 0);
    return s(b) - s(a);
  })[0];
  const doneToday = tasks.filter(t => t.completed && t.completed_today).length;

  const dailyData = [
    { label: "Wed", total: 45 },
    { label: "Thu", total: 70 },
    { label: "Fri", total: 30 },
    { label: "Sat", total: 0 },
    { label: "Sun", total: 25 },
    { label: "Mon", total: 95 },
    { label: "Tue", total: 80 },
  ];
  const priorityData = [
    { category: "high",   total: 120 },
    { category: "medium", total: 90  },
    { category: "low",    total: 45  },
  ];

  return (
    <section className="tab active">
      <header className="page-header">
        <h1 className="page-title">{greeting()}</h1>
        <p className="page-subtitle">
          {todayLong()} · {pending.length > 0 ? `${pending.length} ${pending.length === 1 ? "task" : "tasks"} on your plate` : "Inbox zero — nice"}
        </p>
      </header>

      <FocusBanner task={focus} pendingCount={pending.length} />

      <div className="stat-cards">
        <StatCard tone="green"  icon={<Icon.CheckCircle/>} value={doneToday}   label="Tasks Done Today"/>
        <StatCard tone="yellow" icon={<Icon.Flame/>}        value="86%"         label="Habit Rate (7d)"/>
        <StatCard tone="cyan"   icon={<Icon.Inbox/>}        value={pending.length} label="Open Tasks"/>
      </div>

      <div className="charts-row">
        <div className="card chart-card">
          <h2>Time Logged Per Day (last 7 days)<span className="forecast-badge">7d forecast</span></h2>
          <DailyBarChart data={dailyData}/>
        </div>
        <div className="card chart-card">
          <h2>Time by Priority (last 7 days)</h2>
          <PriorityDoughnut data={priorityData}/>
        </div>
      </div>
    </section>
  );
}

window.Dashboard = Dashboard;
