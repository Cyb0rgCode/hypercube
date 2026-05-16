/* Tasks — input row, segmented filter, item list with priority coding. */

function TaskRow({ task, onToggle, onDelete }) {
  const cls = task.urgent && task.important ? "li-both"
            : task.important ? "li-important"
            : task.urgent ? "li-urgent" : "";
  return (
    <li className={`row-li ${cls} ${task.completed ? "done" : ""}`}>
      <button
        className={`check ${task.completed ? "done" : ""}`}
        onClick={() => onToggle(task.id)}
        title="Toggle complete"
      >{task.completed ? "✓" : ""}</button>
      <span className="item-title">{task.title}</span>
      {task.task_type ? <Chip kind="type">{task.task_type}</Chip> : null}
      {task.category ? <Chip kind="category">{task.category}</Chip> : null}
      {task.urgent    ? <Chip kind="urgent">! urgent</Chip> : null}
      {task.important ? <Chip kind="key">★ key</Chip> : null}
      <Pill tone={task.priority}>{task.priority}</Pill>
      {task.deadline ? <span className="item-meta">{task.deadline}</span> : null}
      {task.time_logged ? <span className="time-badge">⏱ {fmtTime(task.time_logged)}</span> : null}
      <button className="btn-icon" data-action="edit" title="Edit">✎</button>
      <button className="btn-icon" title="Delete" onClick={() => onDelete(task.id)}>✕</button>
    </li>
  );
}

function Tasks({ tasks, onAdd, onToggle, onDelete }) {
  const [filter, setFilter] = React.useState("pending");
  const [title, setTitle]    = React.useState("");
  const [priority, setPriority] = React.useState("medium");
  const [urgent, setUrgent]    = React.useState(false);
  const [important, setImportant] = React.useState(false);
  const filterRowRef = React.useRef(null);
  const [ind, setInd] = React.useState({ x: 4, w: 0 });

  React.useLayoutEffect(() => {
    const row = filterRowRef.current;
    if (!row) return;
    const btn = row.querySelector(`.filter-btn.active`);
    if (!btn) return;
    const rRect = row.getBoundingClientRect();
    const bRect = btn.getBoundingClientRect();
    setInd({ x: bRect.left - rRect.left, w: bRect.width });
  }, [filter]);

  const shown = filter === "all"     ? tasks
              : filter === "pending" ? tasks.filter(t => !t.completed)
              :                        tasks.filter(t =>  t.completed);

  const submit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title: title.trim(), priority, urgent, important });
    setTitle(""); setUrgent(false); setImportant(false);
  };

  const todayStr = new Date().toISOString().slice(0, 10);
  const pending  = tasks.filter(t => !t.completed).length;
  const doneToday = tasks.filter(t => t.completed && t.completed_today).length;
  const subtitle = !tasks.length
    ? "Nothing here yet — add a task to get started"
    : pending === 0
      ? `All clear · ${tasks.length} archived`
      : `${pending} pending${doneToday ? ` · ${doneToday} done today` : ""}`;

  return (
    <section className="tab active">
      <header className="page-header">
        <h1 className="page-title">Tasks</h1>
        <p className="page-subtitle">{subtitle}</p>
      </header>

      <form className="input-row" onSubmit={submit}>
        <input className="flex" placeholder="New task…" value={title} onChange={e => setTitle(e.target.value)} required/>
        <select value={priority} onChange={e => setPriority(e.target.value)}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <input type="date" defaultValue=""/>
        <button type="button" className={`toggle-btn urgent`}    aria-pressed={urgent}    onClick={() => setUrgent(u => !u)}>Urgent</button>
        <button type="button" className={`toggle-btn important`} aria-pressed={important} onClick={() => setImportant(u => !u)}>Important</button>
        <button type="submit" className="btn-primary">Add</button>
      </form>

      <div className="filter-row" ref={filterRowRef}>
        <span className="filter-indicator" style={{ transform: `translateX(${ind.x - 4}px)`, width: ind.w, opacity: 1 }}/>
        {["all", "pending", "done"].map(f => (
          <button
            key={f}
            className={`filter-btn ${filter === f ? "active" : ""}`}
            onClick={() => setFilter(f)}
          >{f}</button>
        ))}
      </div>

      <ul className="item-list">
        {shown.length === 0 ? (
          <li className="empty">
            <div className="empty-icon"><Icon.Tasks/></div>
            <div className="empty-title">
              {filter === "done" ? "Nothing done yet" : filter === "pending" ? "Inbox zero" : "No tasks yet"}
            </div>
            <div className="empty-hint">
              {filter === "done" ? "Complete tasks will appear here."
              : filter === "pending" ? "All caught up — no pending tasks."
              : "Add a task above or import a JSON list to get started."}
            </div>
          </li>
        ) : (
          shown.map(t => (
            <TaskRow key={t.id} task={t} onToggle={onToggle} onDelete={onDelete}/>
          ))
        )}
      </ul>
    </section>
  );
}

window.Tasks = Tasks;
