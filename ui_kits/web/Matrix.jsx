/* Eisenhower Matrix — 2×2 grid of tasks by urgency × importance. */

function MatrixView({ tasks, onToggle }) {
  const q1 = tasks.filter(t => t.urgent && t.important);
  const q2 = tasks.filter(t => !t.urgent && t.important);
  const q3 = tasks.filter(t => t.urgent && !t.important);
  const q4 = tasks.filter(t => !t.urgent && !t.important);

  const Quad = ({ cls, label, sub, list, emptyHint }) => (
    <div className={`matrix-quadrant ${cls}`}>
      <div className="quadrant-header">
        <span className="quadrant-label">{label}</span>
        <span className="quadrant-sub">{sub}</span>
      </div>
      <ul className="matrix-task-list">
        {list.length === 0 && <li className="matrix-empty">{emptyHint}</li>}
        {list.map(t => (
          <li key={t.id} className={`matrix-task ${t.completed ? "done" : ""}`}>
            <button
              className={`matrix-check ${t.completed ? "done" : ""}`}
              onClick={() => onToggle(t.id)}
              title="Toggle complete"
            >{t.completed ? "✓" : ""}</button>
            <span>{t.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="tab active">
      <h1 className="solid">Eisenhower Matrix</h1>
      <p className="matrix-subtitle">Classify tasks by urgency and importance when creating them in the Tasks tab.</p>
      <div className="matrix-axis-labels">
        <div className="axis-col-labels">
          <span>URGENT</span>
          <span>NOT URGENT</span>
        </div>
      </div>
      <div className="matrix-layout">
        <div className="axis-row-labels">
          <span>IMPORTANT</span>
          <span>NOT IMPORTANT</span>
        </div>
        <div className="matrix-grid">
          <Quad cls="q1" label="Do First"  sub="Urgent · Important"        list={q1} emptyHint="Nothing critical right now." />
          <Quad cls="q2" label="Schedule"  sub="Not Urgent · Important"    list={q2} emptyHint="No long-game work queued." />
          <Quad cls="q3" label="Delegate"  sub="Urgent · Not Important"    list={q3} emptyHint="Clear of busywork." />
          <Quad cls="q4" label="Eliminate" sub="Not Urgent · Not Important" list={q4} emptyHint="Nothing to cut." />
        </div>
      </div>
    </section>
  );
}

window.MatrixView = MatrixView;
