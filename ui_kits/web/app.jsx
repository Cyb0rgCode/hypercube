/* App orchestrator — tab routing + in-memory state. */

const THEME_KEY = "husky-theme";

function readInitialTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch (e) {}
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) return "light";
  return "dark";
}

function App() {
  const [tab, setTab] = React.useState("dashboard");
  const [theme, setTheme] = React.useState(readInitialTheme);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
  }, [theme]);
  const [tasks, setTasks] = React.useState([
    { id: 1, title: "Finish thesis introduction draft",  priority: "high",   urgent: true,  important: true,  completed: false, category: "Thesis",  task_type: "writing", deadline: "May 18", time_logged: 80 },
    { id: 2, title: "Reply to advisor about Friday",      priority: "high",   urgent: true,  important: false, completed: false, category: "Email" },
    { id: 3, title: "Submit assignment 4 to portal",      priority: "high",   urgent: false, important: true,  completed: false, category: "Math 201",  task_type: "assignment", deadline: "May 21" },
    { id: 4, title: "Read chapter 3 intro",               priority: "low",    urgent: false, important: false, completed: true,  category: "Math 201",  task_type: "reading",    time_logged: 12, completed_today: true },
    { id: 5, title: "Review meeting notes from Tuesday",  priority: "medium", urgent: false, important: false, completed: false, category: "Lab" },
    { id: 6, title: "Cancel unused subscription",         priority: "low",    urgent: false, important: false, completed: false, category: "Admin" },
  ]);

  const [habits, setHabits] = React.useState([
    { id: 1, name: "Read for 30 minutes", done_today: true,  streak: 14 },
    { id: 2, name: "Run 3 km",            done_today: false, streak: 0  },
    { id: 3, name: "No screens after 11", done_today: true,  streak: 5  },
  ]);

  const [goals, setGoals] = React.useState([
    { id: 1, title: "Run 100 km this quarter",        target_value: 100, current_value: 62,  unit: "km",   deadline: "Jun 30" },
    { id: 2, title: "Finish 6 chapters of thesis",    target_value: 6,   current_value: 2,   unit: "ch",   deadline: "Aug 15" },
  ]);

  const nextId = (arr) => Math.max(0, ...arr.map(x => x.id)) + 1;

  const addTask = (data) => {
    setTasks(prev => [{ ...data, id: nextId(prev), completed: false }, ...prev]);
  };
  const toggleTask = (id) => {
    setTasks(prev => prev.map(t => t.id === id
      ? { ...t, completed: !t.completed, completed_today: !t.completed }
      : t));
  };
  const deleteTask = (id) => setTasks(prev => prev.filter(t => t.id !== id));

  const toggleHabit = (id) => {
    setHabits(prev => prev.map(h => h.id === id
      ? { ...h, done_today: !h.done_today, streak: h.done_today ? Math.max(0, h.streak - 1) : h.streak + 1 }
      : h));
  };
  const addHabit = (name) => setHabits(prev => [...prev, { id: nextId(prev), name, done_today: false, streak: 0 }]);
  const addGoal  = (data) => setGoals(prev => [...prev, { ...data, id: nextId(prev) }]);

  return (
    <React.Fragment>
      <Sidebar active={tab} onChange={setTab} theme={theme} onThemeChange={setTheme}/>
      <main className="content">
        {tab === "dashboard" && <Dashboard tasks={tasks}/>}
        {tab === "matrix"    && <MatrixView tasks={tasks} onToggle={toggleTask}/>}
        {tab === "tasks"     && <Tasks tasks={tasks} onAdd={addTask} onToggle={toggleTask} onDelete={deleteTask}/>}
        {tab === "habits"    && <HabitsGoals habits={habits} goals={goals} onToggleHabit={toggleHabit} onAddHabit={addHabit} onAddGoal={addGoal}/>}
      </main>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
