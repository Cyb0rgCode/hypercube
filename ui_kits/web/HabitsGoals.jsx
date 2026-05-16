/* Habits & Goals — two-column layout with checks, streaks, and gradient bars. */

function HabitRow({ habit, onToggle }) {
  return (
    <li className="row-li">
      <button
        className={`check ${habit.done_today ? "done" : ""}`}
        onClick={() => onToggle(habit.id)}
        title="Toggle today"
      >{habit.done_today ? "✓" : ""}</button>
      <span className="item-title">{habit.name}</span>
      {habit.streak > 0 ? (
        <span className="streak-badge" style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
          <span style={{ width: 12, height: 12, color: "#f7c76a" }}><Icon.Flame/></span>
          {habit.streak}-day streak
        </span>
      ) : null}
      <button className="btn-icon" title="Delete">✕</button>
    </li>
  );
}

function GoalRow({ goal }) {
  const pct = Math.min(100, Math.round((goal.current_value / goal.target_value) * 100));
  return (
    <li className="row-li" style={{ flexDirection: "column", alignItems: "stretch", gap: 8 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <span className="item-title" style={{ flex: "0 1 auto" }}>{goal.title}</span>
        <span className="item-meta">{pct}%</span>
      </div>
      <div className="goal-progress-wrap">
        <div className="goal-bar-bg"><div className="goal-bar-fill" style={{ width: `${pct}%` }}/></div>
        <div className="goal-label-row">
          <span>{goal.current_value} / {goal.target_value} {goal.unit}</span>
          {goal.deadline && <span>by {goal.deadline}</span>}
        </div>
      </div>
    </li>
  );
}

function HabitsGoals({ habits, goals, onToggleHabit, onAddHabit, onAddGoal }) {
  const [habitName, setHabitName] = React.useState("");
  const [goalTitle, setGoalTitle] = React.useState("");
  const [goalTarget, setGoalTarget] = React.useState("");
  const [goalUnit, setGoalUnit] = React.useState("");

  const addHabit = (e) => {
    e.preventDefault();
    if (!habitName.trim()) return;
    onAddHabit(habitName.trim());
    setHabitName("");
  };
  const addGoal = (e) => {
    e.preventDefault();
    if (!goalTitle.trim() || !goalTarget) return;
    onAddGoal({ title: goalTitle.trim(), target_value: +goalTarget, unit: goalUnit, current_value: 0 });
    setGoalTitle(""); setGoalTarget(""); setGoalUnit("");
  };

  return (
    <section className="tab active">
      <h1 className="solid">Habits & Goals</h1>
      <div className="two-col">
        <div>
          <h2>Daily Habits</h2>
          <form className="input-row" onSubmit={addHabit}>
            <input className="flex" placeholder="New habit…" value={habitName} onChange={e => setHabitName(e.target.value)} required/>
            <button type="submit" className="btn-primary">Add</button>
          </form>
          <ul className="item-list">
            {habits.length === 0 ? (
              <li className="empty">
                <div className="empty-icon"><Icon.Flame/></div>
                <div className="empty-title">No habits yet</div>
                <div className="empty-hint">Pick something small you can do every day.</div>
              </li>
            ) : (
              habits.map(h => <HabitRow key={h.id} habit={h} onToggle={onToggleHabit}/>)
            )}
          </ul>
        </div>
        <div>
          <h2>Goals</h2>
          <form className="input-row" style={{ flexDirection: "column" }} onSubmit={addGoal}>
            <input className="flex" placeholder="Goal title" value={goalTitle} onChange={e => setGoalTitle(e.target.value)} required/>
            <div style={{ display: "flex", gap: 10, width: "100%" }}>
              <input type="number" placeholder="Target" min="1" value={goalTarget} onChange={e => setGoalTarget(e.target.value)} style={{ flex: 1 }} required/>
              <input type="text" placeholder="Unit (e.g. km)" value={goalUnit} onChange={e => setGoalUnit(e.target.value)} style={{ flex: 1 }}/>
              <input type="date" style={{ flex: 1 }}/>
            </div>
            <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start" }}>Add Goal</button>
          </form>
          <ul className="item-list">
            {goals.length === 0 ? (
              <li className="empty">
                <div className="empty-icon"><Icon.Target/></div>
                <div className="empty-title">No goals yet</div>
                <div className="empty-hint">Set something measurable with a deadline.</div>
              </li>
            ) : (
              goals.map(g => <GoalRow key={g.id} goal={g}/>)
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

window.HabitsGoals = HabitsGoals;
