import { useState, useEffect } from "react";

const workoutPlan = [
  {
    day: "Monday",
    label: "GLUTES & HAMS",
    emoji: "🍑",
    focus: "Glutes · Hamstrings · Hip Thrusts",
    type: "lower",
    color: "#FF85A1",
    accent: "#FFD6E0",
    vibe: "The foundation of the Maki build. Go heavy, go home.",
    exercises: [
      { name: "Barbell Hip Thrust", sets: "5", reps: "8–10", note: "Primary glute builder — load this up heavy 🔥" },
      { name: "Romanian Deadlift", sets: "4", reps: "8–10", note: "Hamstring length + glute depth" },
      { name: "Sumo Squat (Dumbbell)", sets: "4", reps: "12", note: "Inner thigh & glute activation" },
      { name: "Cable Kickback", sets: "3", reps: "15 each", note: "Isolate glute max — squeeze at top" },
      { name: "Lying Hamstring Curl", sets: "3", reps: "12–15", note: "Hamstring isolation" },
      { name: "Frog Pump", sets: "3", reps: "20–25", note: "Glute burnout finisher 🐸" },
    ],
  },
  {
    day: "Tuesday",
    label: "UPPER BODY",
    emoji: "💪",
    focus: "Back · Shoulders · Arms",
    type: "upper",
    color: "#FF85A1",
    accent: "#FFD6E0",
    vibe: "Maki's upper body is wide & strong. Build that athletic V.",
    exercises: [
      { name: "Lat Pulldown (Wide Grip)", sets: "4", reps: "10–12", note: "Wide lats = athletic V-shape" },
      { name: "Seated Cable Row", sets: "4", reps: "10–12", note: "Mid-back thickness" },
      { name: "Lateral Raises", sets: "4", reps: "12–15", note: "Shoulder width — do this every upper day 🎯" },
      { name: "Face Pulls", sets: "3", reps: "15–20", note: "Rear delts + shoulder health" },
      { name: "Dumbbell Curl", sets: "3", reps: "12", note: "Arm tone & definition" },
      { name: "Overhead Tricep Extension", sets: "3", reps: "12", note: "Arm shape from behind" },
    ],
  },
  {
    day: "Wednesday",
    label: "LEG GAINS 🐱",
    emoji: "🦵",
    focus: "Quads · Calves · Glute Accessory",
    type: "lower",
    color: "#C77DFF",
    accent: "#EAD6FF",
    vibe: "Don't skip it bestie. Big legs = the whole aesthetic. 🌸",
    exercises: [
      { name: "Leg Press (High & Wide Foot)", sets: "5", reps: "12–15", note: "More glute activation than regular stance 🍑" },
      { name: "Bulgarian Split Squat", sets: "3", reps: "10 each", note: "Quad + glute unilateral — hurts so good" },
      { name: "Leg Extension", sets: "3", reps: "15", note: "Quad definition & shape" },
      { name: "Cable Hip Abduction", sets: "4", reps: "15 each", note: "Hip width + glute medius 🎀" },
      { name: "Standing Calf Raise", sets: "4", reps: "15–20", note: "Calf shape — slow & controlled" },
      { name: "Donkey Kick", sets: "3", reps: "20 each", note: "Easy finisher — glute medius & teres" },
    ],
  },
  {
    day: "Friday",
    label: "FULL GLUTE DAY",
    emoji: "🍑",
    focus: "Glutes · Hamstrings · Core",
    type: "lower",
    color: "#FF85A1",
    accent: "#FFD6E0",
    vibe: "Two glute days a week = fastest results. Trust the process 💕",
    exercises: [
      { name: "Hip Thrust (Single Leg)", sets: "4", reps: "10–12 each", note: "Unilateral glute isolation" },
      { name: "Glute Bridge (Heavy)", sets: "4", reps: "15", note: "Floor-based hip thrust variation" },
      { name: "Smith Machine RDL", sets: "4", reps: "10", note: "Controlled hamstring stretch" },
      { name: "Reverse Hyper / Back Extension", sets: "3", reps: "15", note: "Lower glute + lower back health" },
      { name: "Abductor Machine", sets: "4", reps: "20", note: "Hip width + outer glute 🎀" },
      { name: "Cable Pull-Through", sets: "3", reps: "15", note: "Hip hinge pattern — glute & ham finisher" },
    ],
  },
  {
    day: "Saturday",
    label: "SCULPT DAY",
    emoji: "✨",
    focus: "Shoulders · Arms · Light Lower",
    type: "upper",
    color: "#FFB3C6",
    accent: "#FFE8EE",
    vibe: "Fun day. Look cute. Lift cute. Still get gains. 🌷",
    exercises: [
      { name: "Dumbbell Shoulder Press", sets: "4", reps: "10–12", note: "Shoulder size & roundness" },
      { name: "Lateral Raise Superset w/ Front Raise", sets: "3", reps: "12 each", note: "Full delt sweep 🌸" },
      { name: "Preacher Curl", sets: "3", reps: "10–12", note: "Bicep peak" },
      { name: "Skull Crushers", sets: "3", reps: "12", note: "Tricep mass" },
      { name: "Hip Thrust (Light / Pump)", sets: "3", reps: "20", note: "Keep glutes activated — light & fun 🍑" },
      { name: "Plank Hold", sets: "3", reps: "45 sec", note: "Core strength for that tight waist" },
    ],
  },
];

const tips = [
  { icon: "🍗", text: "Eat 130–140g protein/day. Chicken, Greek yogurt, eggs & cottage cheese are your best friends." },
  { icon: "📈", text: "Progressive overload every week — add a little weight or a rep. That's how the legs grow." },
  { icon: "😴", text: "Sleep 7–9 hrs. Muscles are literally built while you sleep. Non-negotiable 💕" },
  { icon: "🍑", text: "Two glute sessions per week is intentional — it's the fastest way to actually grow them." },
  { icon: "🐱", text: "Leg day is Wednesday & shows up again Friday. We know. You'll thank us later." },
  { icon: "🌸", text: "Thu & Sun are full rest or light walks. Stretch, foam roll, recover cute." },
];

const schedule = [
  { d: "Mon", l: "Glutes", c: "#FF85A1", e: "🍑" },
  { d: "Tue", l: "Upper", c: "#FF85A1", e: "💪" },
  { d: "Wed", l: "Legs", c: "#C77DFF", e: "🦵" },
  { d: "Thu", l: "Rest", c: "#e8c4d4", e: "🛁" },
  { d: "Fri", l: "Glutes", c: "#FF85A1", e: "🍑" },
  { d: "Sat", l: "Sculpt", c: "#FFB3C6", e: "✨" },
  { d: "Sun", l: "Rest", c: "#e8c4d4", e: "🌸" },
];

const TODAY = new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

export default function WorkoutPlan() {
  const [activeDay, setActiveDay] = useState(0);
  const [activeTab, setActiveTab] = useState("workout");
  const [logs, setLogs] = useState(() => {
    try { return JSON.parse(localStorage.getItem("workout-logs") || "{}"); } catch { return {}; }
  });
  const [inputs, setInputs] = useState({});
  const [savedToday, setSavedToday] = useState(false);

  const plan = workoutPlan[activeDay];

  useEffect(() => {
    localStorage.setItem("workout-logs", JSON.stringify(logs));
  }, [logs]);

  const handleInput = (exName, field, value) => {
    setInputs(prev => ({ ...prev, [exName]: { ...prev[exName], [field]: value } }));
  };

  const saveSession = () => {
    const logKey = `${plan.day}-${TODAY}`;
    const sessionData = {
      day: plan.day,
      label: plan.label,
      emoji: plan.emoji,
      date: TODAY,
      exercises: plan.exercises.map(ex => ({
        name: ex.name,
        weight: inputs[ex.name]?.weight || "",
        reps: inputs[ex.name]?.reps || "",
      }))
    };
    setLogs(prev => ({ ...prev, [logKey]: sessionData }));
    setSavedToday(true);
    setTimeout(() => setSavedToday(false), 2500);
  };

  const historyEntries = Object.values(logs).sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div style={{ minHeight: "100vh", background: "#fff0f5", fontFamily: "'Georgia', serif", color: "#3a1a28", padding: 0, position: "relative", overflow: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #fff0f5; }
        .polka-bg { position: fixed; inset: 0; background-image: radial-gradient(circle, #ffb3c6 1.2px, transparent 1.2px); background-size: 28px 28px; opacity: 0.35; pointer-events: none; z-index: 0; }
        .content { position: relative; z-index: 1; }
        .day-btn { background: white; border: 2px solid #ffd6e0; cursor: pointer; transition: all 0.2s ease; font-family: 'DM Sans', sans-serif; border-radius: 50px; }
        .day-btn:hover { transform: translateY(-2px); box-shadow: 0 4px 14px rgba(255,133,161,0.25); }
        .day-btn.active { transform: translateY(-2px); box-shadow: 0 4px 18px rgba(255,133,161,0.4); }
        .exercise-row { border-bottom: 1px dashed #ffd6e0; transition: background 0.2s ease; }
        .exercise-row:hover { background: rgba(255,182,204,0.08); }
        .exercise-row:last-child { border-bottom: none; }
        .tip-card { background: white; border: 1.5px solid #ffd6e0; border-radius: 16px; padding: 14px 18px; display: flex; align-items: center; gap: 12px; font-family: 'DM Sans', sans-serif; font-size: 13px; color: #7a3a52; transition: all 0.2s; box-shadow: 0 2px 8px rgba(255,133,161,0.1); }
        .tip-card:hover { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(255,133,161,0.2); border-color: #FF85A1; }
        .bow { display: inline-block; font-size: 22px; animation: wiggle 2.5s ease-in-out infinite; }
        @keyframes wiggle { 0%, 100% { transform: rotate(-5deg); } 50% { transform: rotate(5deg); } }
        .card { background: white; border: 1.5px solid #ffd6e0; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 24px rgba(255,133,161,0.12); }
        .stat-pill { background: #fff0f5; border: 1.5px solid #ffd6e0; border-radius: 50px; padding: 6px 16px; display: flex; flex-direction: column; align-items: center; gap: 2px; }
        .paw { opacity: 0.08; font-size: 80px; position: absolute; pointer-events: none; user-select: none; }
        .log-input { border: 1.5px solid #ffd6e0; border-radius: 8px; padding: 5px 8px; font-family: 'DM Sans', sans-serif; font-size: 12px; color: #3a1a28; background: #fff8fa; width: 68px; outline: none; transition: border-color 0.2s; text-align: center; }
        .log-input:focus { border-color: #FF85A1; background: white; }
        .log-input::placeholder { color: #e0b0c0; }
        .save-btn { background: linear-gradient(135deg, #FF85A1, #ffb3c6); color: white; border: none; border-radius: 50px; padding: 12px 32px; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: 0.08em; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 16px rgba(255,133,161,0.35); }
        .save-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(255,133,161,0.5); }
        .tab-btn { background: none; border: none; cursor: pointer; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 600; padding: 10px 24px; border-radius: 50px; transition: all 0.2s; letter-spacing: 0.05em; }
        .tab-btn.active { background: white; color: #FF85A1; box-shadow: 0 2px 12px rgba(255,133,161,0.2); }
        .tab-btn:not(.active) { color: #c090a8; }
        .history-card { background: white; border: 1.5px solid #ffd6e0; border-radius: 16px; overflow: hidden; box-shadow: 0 2px 12px rgba(255,133,161,0.1); margin-bottom: 14px; }
        .history-ex-row { display: grid; grid-template-columns: 1fr 80px 80px; padding: 10px 20px; border-bottom: 1px dashed #ffeef4; font-family: 'DM Sans', sans-serif; }
        .history-ex-row:last-child { border-bottom: none; }
        .saved-toast { position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%); background: linear-gradient(135deg, #FF85A1, #C77DFF); color: white; padding: 12px 28px; border-radius: 50px; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 600; box-shadow: 0 4px 20px rgba(255,133,161,0.4); z-index: 999; animation: popIn 0.3s ease; }
        @keyframes popIn { from { opacity: 0; transform: translateX(-50%) translateY(10px); } to { opacity: 1; transform: translateX(-50%) translateY(0); } }
      `}</style>

      <div className="polka-bg" />
      <div className="content">

        {/* Header */}
        <div style={{ background: "linear-gradient(135deg, #FF85A1 0%, #ffb3c6 50%, #C77DFF 100%)", padding: "44px 40px 36px", position: "relative", overflow: "hidden" }}>
          <span className="paw" style={{ top: -10, right: 30 }}>🐾</span>
          <span className="paw" style={{ bottom: -20, left: 10 }}>🐾</span>
          <div style={{ maxWidth: 820, margin: "0 auto", position: "relative" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <span className="bow">🎀</span>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: "0.2em", color: "rgba(255,255,255,0.85)", textTransform: "uppercase", fontWeight: 600 }}>5-Day Program · Maki Build Phase</p>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 5vw, 52px)", fontWeight: 900, lineHeight: 1.1, color: "white", marginBottom: 8, textShadow: "0 2px 12px rgba(180,60,100,0.25)" }}>Glutes, Strength<br />& Soft Life ✨</h1>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.85)", fontWeight: 300, fontStyle: "italic", marginBottom: 22 }}>Built for athletic legs · big glutes · feminine muscle · Maki energy 🍑</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {[["🎂","Age","20"],["📏","Height","5′ 3″"],["⚖️","Weight","160 lbs"],["🎯","Goal","Maki Physique"],["🍑","Priority","Glutes + Legs"]].map(([e,k,v]) => (
                <div key={k} className="stat-pill" style={{ background: "rgba(255,255,255,0.2)", border: "1.5px solid rgba(255,255,255,0.35)" }}>
                  <span style={{ fontSize: 13 }}>{e}</span>
                  <span style={{ fontFamily: "'DM Sans'", fontSize: 9, letterSpacing: "0.12em", color: "rgba(255,255,255,0.7)", textTransform: "uppercase" }}>{k}</span>
                  <span style={{ fontFamily: "'DM Sans'", fontSize: 12, color: "white", fontWeight: 600 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tab switcher */}
        <div style={{ background: "#fff0f5", borderBottom: "1.5px solid #ffd6e0", padding: "10px 24px" }}>
          <div style={{ maxWidth: 820, margin: "0 auto", display: "flex", gap: 4, background: "#ffe0eb", borderRadius: 50, padding: 4, width: "fit-content" }}>
            <button className={`tab-btn${activeTab === "workout" ? " active" : ""}`} onClick={() => setActiveTab("workout")}>🏋️ Workout</button>
            <button className={`tab-btn${activeTab === "history" ? " active" : ""}`} onClick={() => setActiveTab("history")}>
              📖 History {Object.keys(logs).length > 0 && <span style={{ background: "#FF85A1", color: "white", borderRadius: 50, padding: "1px 7px", fontSize: 10, marginLeft: 4 }}>{Object.keys(logs).length}</span>}
            </button>
          </div>
        </div>

        <div style={{ maxWidth: 820, margin: "0 auto", padding: "30px 24px 80px" }}>

          {activeTab === "workout" && (
            <>
              {/* Day Selector */}
              <div style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
                {workoutPlan.map((w, i) => (
                  <button key={i} className={`day-btn${activeDay === i ? " active" : ""}`}
                    onClick={() => { setActiveDay(i); setInputs({}); }}
                    style={{ padding: "10px 20px", color: activeDay === i ? "white" : "#b06080", background: activeDay === i ? `linear-gradient(135deg, ${w.color}, ${w.color}cc)` : "white", borderColor: activeDay === i ? w.color : "#ffd6e0", fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    <span style={{ fontSize: 16, display: "block", marginBottom: 2 }}>{w.emoji}</span>
                    {w.day}
                    <span style={{ display: "block", fontSize: 9, letterSpacing: "0.1em", opacity: 0.8, marginTop: 1 }}>{w.label}</span>
                  </button>
                ))}
              </div>

              {/* Workout Card */}
              <div className="card" style={{ marginBottom: 24 }}>
                <div style={{ padding: "22px 28px", borderBottom: "1.5px dashed #ffd6e0", background: `linear-gradient(135deg, ${plan.accent}60, white)`, display: "flex", justifyContent: "space-between", alignItems: "flex-start", position: "relative", overflow: "hidden" }}>
                  <span className="paw" style={{ top: -15, right: 20, fontSize: 60 }}>🐾</span>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                      <span style={{ background: plan.color, color: "white", fontFamily: "'DM Sans'", fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", padding: "3px 12px", borderRadius: 50 }}>{plan.emoji} {plan.label}</span>
                    </div>
                    <h2 style={{ fontFamily: "'Playfair Display'", fontSize: 24, fontWeight: 700, color: "#3a1a28", marginBottom: 4 }}>{plan.day}</h2>
                    <p style={{ fontFamily: "'DM Sans'", fontSize: 12, color: "#c06080", marginBottom: 6 }}>{plan.focus}</p>
                    <p style={{ fontFamily: "'DM Sans'", fontSize: 12, color: "#a07080", fontStyle: "italic" }}>{plan.vibe}</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontFamily: "'Playfair Display'", fontSize: 38, fontWeight: 900, color: plan.color, lineHeight: 1 }}>{plan.exercises.length}</div>
                    <div style={{ fontFamily: "'DM Sans'", fontSize: 10, color: "#c06080", textTransform: "uppercase", letterSpacing: "0.1em" }}>exercises</div>
                  </div>
                </div>

                {/* Column headers */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 60px 80px 80px", padding: "10px 28px", borderBottom: "1px solid #ffeef4" }}>
                  {["Exercise", "Sets", "Reps", "Log"].map(h => (
                    <span key={h} style={{ fontFamily: "'DM Sans'", fontSize: 10, color: "#d0809a", textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 600 }}>{h}</span>
                  ))}
                </div>

                {plan.exercises.map((ex, i) => (
                  <div key={i} className="exercise-row" style={{ display: "grid", gridTemplateColumns: "1fr 60px 80px 80px", padding: "14px 28px", alignItems: "center" }}>
                    <div>
                      <div style={{ fontFamily: "'DM Sans'", fontSize: 14, fontWeight: 600, color: "#3a1a28", marginBottom: 3 }}>{ex.name}</div>
                      <div style={{ fontFamily: "'DM Sans'", fontSize: 11.5, color: "#c090a8", fontStyle: "italic" }}>{ex.note}</div>
                    </div>
                    <div style={{ fontFamily: "'DM Sans'", fontSize: 16, fontWeight: 700, color: plan.color }}>{ex.sets}</div>
                    <div style={{ fontFamily: "'DM Sans'", fontSize: 13, color: "#a06878" }}>{ex.reps}</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                      <input className="log-input" placeholder="lbs" value={inputs[ex.name]?.weight || ""} onChange={e => handleInput(ex.name, "weight", e.target.value)} />
                      <input className="log-input" placeholder="reps" value={inputs[ex.name]?.reps || ""} onChange={e => handleInput(ex.name, "reps", e.target.value)} />
                    </div>
                  </div>
                ))}

                <div style={{ padding: "20px 28px", borderTop: "1.5px dashed #ffd6e0", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
                  <div style={{ fontFamily: "'DM Sans'", fontSize: 12, color: "#c090a8" }}>📅 {TODAY}</div>
                  <button className="save-btn" onClick={saveSession}>🎀 Save Session</button>
                </div>
              </div>

              {/* Weekly Schedule */}
              <div className="card" style={{ padding: "22px 28px", marginBottom: 24 }}>
                <h3 style={{ fontFamily: "'Playfair Display'", fontSize: 17, color: "#3a1a28", marginBottom: 16 }}>🗓️ Weekly Schedule</h3>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {schedule.map(({ d, l, c, e }) => (
                    <div key={d} style={{ flex: 1, minWidth: 68, background: l === "Rest" ? "#fff8fa" : `${c}18`, border: `1.5px solid ${l === "Rest" ? "#ffd6e0" : c}`, borderRadius: 12, padding: "10px 8px", textAlign: "center" }}>
                      <div style={{ fontSize: 18, marginBottom: 4 }}>{e}</div>
                      <div style={{ fontFamily: "'DM Sans'", fontSize: 11, color: "#c090a8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 3 }}>{d}</div>
                      <div style={{ fontFamily: "'DM Sans'", fontSize: 11, color: l === "Rest" ? "#d4aaba" : c, fontWeight: 600 }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips */}
              <h3 style={{ fontFamily: "'Playfair Display'", fontSize: 17, color: "#3a1a28", marginBottom: 14 }}>🌸 Key Notes, Bestie</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {tips.map((t, i) => (
                  <div key={i} className="tip-card">
                    <span style={{ fontSize: 20, flexShrink: 0 }}>{t.icon}</span>
                    <span>{t.text}</span>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === "history" && (
            <>
              <h2 style={{ fontFamily: "'Playfair Display'", fontSize: 22, fontWeight: 700, color: "#3a1a28", marginBottom: 6 }}>📖 Workout History</h2>
              <p style={{ fontFamily: "'DM Sans'", fontSize: 13, color: "#c090a8", marginBottom: 24, fontStyle: "italic" }}>All your saved sessions, most recent first 🌸</p>

              {historyEntries.length === 0 ? (
                <div style={{ textAlign: "center", padding: "60px 20px", fontFamily: "'DM Sans'", color: "#d4a0b4" }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>🍑</div>
                  <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>No sessions saved yet!</div>
                  <div style={{ fontSize: 13 }}>Log your first workout and it'll show up here 💕</div>
                </div>
              ) : (
                historyEntries.map((session, i) => (
                  <div key={i} className="history-card">
                    <div style={{ padding: "16px 20px", borderBottom: "1px dashed #ffd6e0", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#fff8fa" }}>
                      <div>
                        <div style={{ fontFamily: "'Playfair Display'", fontSize: 16, fontWeight: 700, color: "#3a1a28" }}>{session.emoji} {session.day} — {session.label}</div>
                        <div style={{ fontFamily: "'DM Sans'", fontSize: 11, color: "#c090a8", marginTop: 3 }}>📅 {session.date}</div>
                      </div>
                    </div>
                    <div>
                      <div className="history-ex-row" style={{ borderBottom: "1px solid #ffeef4" }}>
                        {["Exercise", "Weight", "Reps"].map(h => (
                          <span key={h} style={{ fontFamily: "'DM Sans'", fontSize: 10, color: "#d0809a", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600 }}>{h}</span>
                        ))}
                      </div>
                      {session.exercises.map((ex, j) => (
                        <div key={j} className="history-ex-row">
                          <span style={{ fontFamily: "'DM Sans'", fontSize: 13, color: "#3a1a28", fontWeight: 500 }}>{ex.name}</span>
                          <span style={{ fontFamily: "'DM Sans'", fontSize: 13, color: "#FF85A1", fontWeight: 600 }}>{ex.weight ? `${ex.weight} lbs` : "—"}</span>
                          <span style={{ fontFamily: "'DM Sans'", fontSize: 13, color: "#a06878" }}>{ex.reps || "—"}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </>
          )}

          <div style={{ textAlign: "center", marginTop: 40, fontFamily: "'DM Sans'", fontSize: 12, color: "#d4a0b4" }}>
            made with 🎀 · maki build phase · you got this girl
          </div>
        </div>
      </div>

      {savedToday && (
        <div className="saved-toast">🎀 Session saved! Keep grinding bestie 💕</div>
      )}
    </div>
  );
}
