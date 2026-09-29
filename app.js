/* ============================================================
   COMUNICACIONES INDUSTRIALES — Quiz App
   ============================================================ */

// ── Firebase Realtime Database ────────────────────────────────
const DB_URL = 'https://coi-quiz-default-rtdb.europe-west1.firebasedatabase.app/ranking';

// ── Estado global ────────────────────────────────────────────
const state = {
  view: "home",          // home | quiz | results | ranking
  questions: [],         // preguntas activas en la sesión
  current: 0,
  answers: [],           // { chosen: idx|null, correct: bool }
  timer: null,
  elapsed: 0,
  mode: "all",           // all | random
  numQ: 0,
  topics: [],            // ids de temas seleccionados
};

// ── Vistas ────────────────────────────────────────────────────
const views = {
  home: document.getElementById("home"),
  quiz: document.getElementById("quiz-view"),
  results: document.getElementById("results-view"),
  ranking: document.getElementById("ranking-view"),
};

function showView(name) {
  state.view = name;
  Object.entries(views).forEach(([k, el]) => {
    el.style.display = k === name ? "" : "none";
  });
  document.querySelectorAll("header nav button[data-view]").forEach(b => {
    b.classList.toggle("active", b.dataset.view === name);
  });
}

// ── Navegación header ─────────────────────────────────────────
document.querySelectorAll("header nav button[data-view]").forEach(b => {
  b.addEventListener("click", () => {
    if (b.dataset.view === "ranking") renderRanking();
    if (b.dataset.view === "home") { stopTimer(); showView("home"); }
  });
});

// ── HOME: selección de temas ──────────────────────────────────
function renderTopicGrid() {
  const grid = document.getElementById("topic-grid");
  grid.innerHTML = "";
  const icons = ["📡","🏭","📋","🔄","🔌","📻","⚙️","🌐","🔍","🛠️","💻"];
  TEMAS.forEach((t, i) => {
    const card = document.createElement("div");
    card.className = "topic-card";
    card.dataset.id = t.id;
    card.innerHTML = `
      <div style="display:flex;align-items:center;gap:.4rem;margin-bottom:.4rem">
        <span style="font-size:.7rem;font-weight:700;background:var(--primary);color:#fff;padding:.1rem .4rem;border-radius:4px">B${i+1}</span>
        <span class="icon" style="font-size:1.2rem;margin:0">${icons[i] || "📦"}</span>
      </div>
      <div class="check">✓</div>
      <h3>${t.nombre}</h3>
      <small>${t.preguntas.length} preguntas</small>`;
    card.addEventListener("click", () => toggleTopic(t.id, card));
    grid.appendChild(card);
  });
}

function toggleTopic(id, card) {
  if (state.topics.includes(id)) {
    state.topics = state.topics.filter(x => x !== id);
    card.classList.remove("selected");
  } else {
    state.topics.push(id);
    card.classList.add("selected");
  }
  updateStartBtn();
  updateNumQOptions();
}

function selectAllTopics() {
  state.topics = TEMAS.map(t => t.id);
  document.querySelectorAll(".topic-card").forEach(c => c.classList.add("selected"));
  updateStartBtn();
  updateNumQOptions();
}

document.getElementById("btn-select-all").addEventListener("click", selectAllTopics);

function totalAvailable() {
  return TEMAS
    .filter(t => state.topics.includes(t.id))
    .reduce((s, t) => s + t.preguntas.length, 0);
}

function updateNumQOptions() {
  const sel = document.getElementById("num-questions");
  const total = totalAvailable();
  sel.innerHTML = "";
  if (total === 0) return;
  const opts = [5, 10, 15, 20, 30, total].filter((v,i,a) => v <= total && a.indexOf(v) === i);
  opts.forEach(n => {
    const o = document.createElement("option");
    o.value = n;
    o.textContent = n === total ? `Todas (${n})` : n;
    sel.appendChild(o);
  });
  // por defecto 10 si disponible, si no el primero
  if (opts.includes(10)) sel.value = 10;
  updateStartBtn();
}

function updateStartBtn() {
  document.getElementById("btn-start").disabled = state.topics.length === 0;
}

// Modo aleatorio / todas
document.querySelectorAll('input[name="mode"]').forEach(r => {
  r.addEventListener("change", () => {
    state.mode = r.value;
    const numRow = document.getElementById("num-q-row");
    numRow.style.display = state.mode === "random" ? "" : "none";
  });
});

// ── START ─────────────────────────────────────────────────────
document.getElementById("btn-start").addEventListener("click", startQuiz);

function startQuiz() {
  if (state.topics.length === 0) return;

  // Recopilar preguntas de los temas seleccionados
  let pool = [];
  TEMAS.filter(t => state.topics.includes(t.id)).forEach(t => {
    t.preguntas.forEach(q => pool.push({ ...q, tema: t.nombre }));
  });

  // Modo
  if (state.mode === "random") {
    const n = parseInt(document.getElementById("num-questions").value) || 10;
    pool = shuffle(pool).slice(0, Math.min(n, pool.length));
  } else {
    pool = shuffle(pool);
  }

  state.questions = pool;
  state.current = 0;
  state.answers = pool.map(() => ({ chosen: null, correct: false }));
  state.elapsed = 0;

  showView("quiz");
  startTimer();
  renderQuestion();
}

// ── TIMER ─────────────────────────────────────────────────────
function startTimer() {
  stopTimer();
  state.elapsed = 0;
  updateTimerDisplay();
  state.timer = setInterval(() => {
    state.elapsed++;
    updateTimerDisplay();
  }, 1000);
}

function stopTimer() {
  if (state.timer) { clearInterval(state.timer); state.timer = null; }
}

function updateTimerDisplay() {
  const el = document.getElementById("quiz-timer");
  const m = Math.floor(state.elapsed / 60).toString().padStart(2, "0");
  const s = (state.elapsed % 60).toString().padStart(2, "0");
  el.textContent = `⏱ ${m}:${s}`;
  el.className = "quiz-timer";
}

// ── RENDER PREGUNTA ───────────────────────────────────────────
function renderQuestion() {
  const q = state.questions[state.current];
  const total = state.questions.length;
  const idx = state.current;

  // Barra de progreso
  document.getElementById("progress-fill").style.width = `${(idx / total) * 100}%`;
  document.getElementById("q-counter").textContent = `Pregunta ${idx + 1} de ${total}`;

  // Tema badge
  document.getElementById("q-topic").textContent = q.tema;

  // Texto
  document.getElementById("q-text").textContent = q.pregunta;

  // Opciones
  const container = document.getElementById("options-container");
  container.innerHTML = "";
  const letters = ["A", "B", "C", "D", "E"];
  q.opciones.forEach((op, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML = `<span class="opt-letter">${letters[i]}</span><span>${op}</span>`;

    // Si ya fue respondida esta pregunta
    const ans = state.answers[idx];
    if (ans.chosen !== null) {
      btn.disabled = true;
      if (i === q.correcta) btn.classList.add("correct");
      if (i === ans.chosen && i !== q.correcta) btn.classList.add("wrong");
    } else {
      btn.addEventListener("click", () => selectAnswer(i));
    }
    container.appendChild(btn);
  });

  // Explicación
  const expEl = document.getElementById("explanation");
  const ans = state.answers[idx];
  if (ans.chosen !== null) {
    expEl.textContent = q.explicacion;
    expEl.className = "explanation show" + (ans.correct ? "" : " wrong-exp");
  } else {
    expEl.className = "explanation";
    expEl.textContent = "";
  }

  // Navegación
  document.getElementById("btn-prev").disabled = idx === 0;
  const nextBtn = document.getElementById("btn-next");
  if (idx === total - 1) {
    nextBtn.textContent = "Ver resultados →";
    nextBtn.onclick = finishQuiz;
  } else {
    nextBtn.textContent = "Siguiente →";
    nextBtn.onclick = () => { state.current++; renderQuestion(); };
  }
  nextBtn.disabled = ans.chosen === null && idx === total - 1
    ? false   // permite ir a resultados aunque queden sin responder
    : false;

  document.getElementById("btn-prev").onclick = () => { state.current--; renderQuestion(); };
}

function selectAnswer(i) {
  const q = state.questions[state.current];
  state.answers[state.current].chosen = i;
  state.answers[state.current].correct = i === q.correcta;
  renderQuestion();
}

// ── FINALIZAR ─────────────────────────────────────────────────
function finishQuiz() {
  stopTimer();
  showView("results");
  renderResults();
}

// ── RESULTADOS ────────────────────────────────────────────────
function renderResults() {
  const total = state.questions.length;
  const answered = state.answers.filter(a => a.chosen !== null).length;
  const correct = state.answers.filter(a => a.correct).length;
  const wrong = answered - correct;
  const skipped = total - answered;

  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
  const nota = (correct / total * 10).toFixed(1);

  // Círculo de puntuación
  document.getElementById("score-pct").textContent = `${pct}%`;
  document.getElementById("score-nota").textContent = `Nota: ${nota}/10`;

  // Mensaje según nota
  let msg = "";
  if (pct >= 90) msg = "¡Excelente! Dominas las comunicaciones industriales.";
  else if (pct >= 75) msg = "¡Muy bien! Buen nivel de conocimiento.";
  else if (pct >= 50) msg = "Aprobado. Repasa los temas fallidos.";
  else msg = "Hay margen de mejora. ¡Sigue practicando!";
  document.getElementById("result-msg").textContent = msg;

  // Estadísticas
  document.getElementById("stat-correct").textContent = correct;
  document.getElementById("stat-wrong").textContent = wrong;
  document.getElementById("stat-skipped").textContent = skipped;
  document.getElementById("stat-time").textContent = formatTime(state.elapsed);

  // Guardar en ranking local
  saveToRanking(nota, correct, total);

  // Guardar estado para el botón de ranking global
  state.lastResult = { nota: parseFloat(nota), correct, total };
  document.getElementById('global-name').value = '';
  document.getElementById('global-name').disabled = false;
  document.getElementById('btn-save-global').disabled = false;
  document.getElementById('btn-save-global').textContent = 'Guardar →';
  const saveMsg = document.getElementById('save-msg');
  saveMsg.style.display = 'none';
  saveMsg.textContent = '';

  // Revisión pregunta a pregunta
  const list = document.getElementById("review-list");
  list.innerHTML = "";
  state.questions.forEach((q, i) => {
    const ans = state.answers[i];
    const isCorrect = ans.correct;
    const skipped = ans.chosen === null;
    const item = document.createElement("div");
    item.className = "review-item " + (skipped ? "" : isCorrect ? "correct" : "wrong");
    const chosenText = ans.chosen !== null ? q.opciones[ans.chosen] : "— Sin responder";
    const correctText = q.opciones[q.correcta];
    const letters = ["A","B","C","D","E"];
    item.innerHTML = `
      <div class="ri-topic">${q.tema}</div>
      <div class="ri-q">${i + 1}. ${q.pregunta}</div>
      <div class="ri-ans">
        <span class="tag ${isCorrect ? "tag-correct" : "tag-wrong"}">${skipped ? "Sin responder" : isCorrect ? "Correcto" : "Incorrecto"}</span>
        ${!skipped && !isCorrect ? `Tu respuesta: <em>${letters[ans.chosen]}. ${chosenText}</em> &nbsp;·&nbsp; ` : ""}
        ${!isCorrect ? `Correcta: <strong>${letters[q.correcta]}. ${correctText}</strong>` : `Respuesta: <strong>${letters[q.correcta]}. ${correctText}</strong>`}
      </div>
      <div class="ri-exp">${q.explicacion}</div>`;
    list.appendChild(item);
  });
}

// ── RANKING (localStorage) ────────────────────────────────────
function saveToRanking(nota, correct, total) {
  const entry = {
    nota: parseFloat(nota),
    correct,
    total,
    pct: Math.round(correct / total * 100),
    temas: state.topics.join(", "),
    time: state.elapsed,
    date: new Date().toLocaleDateString("es-ES"),
  };
  const ranking = getRanking();
  ranking.push(entry);
  ranking.sort((a, b) => b.nota - a.nota || a.time - b.time);
  localStorage.setItem("ci_ranking", JSON.stringify(ranking.slice(0, 50)));
}

function getRanking() {
  try { return JSON.parse(localStorage.getItem("ci_ranking") || "[]"); } catch { return []; }
}

async function saveToGlobalRanking(name, nota, correct, total) {
  const entry = {
    nombre: name.trim().slice(0, 25),
    nota: parseFloat(nota),
    correct,
    total,
    pct: Math.round(correct / total * 100),
    time: state.elapsed,
    date: new Date().toLocaleDateString('es-ES'),
    ts: Date.now(),
  };
  const res = await fetch(DB_URL + '.json', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(entry),
  });
  if (!res.ok) throw new Error('Error al guardar');
}

async function renderGlobalRanking() {
  const tbody = document.getElementById('global-ranking-tbody');
  tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:var(--muted);padding:1.5rem">Cargando...</td></tr>';
  try {
    const res = await fetch(DB_URL + '.json');
    const data = await res.json();
    if (!data) {
      tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:var(--muted);padding:1.5rem">Aún no hay resultados globales.</td></tr>';
      return;
    }
    const entries = Object.values(data).sort((a, b) => b.nota - a.nota || a.time - b.time).slice(0, 20);
    const medals = ['🥇','🥈','🥉'];
    tbody.innerHTML = '';
    entries.forEach((r, i) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="rank-pos">${medals[i] || i + 1}</td>
        <td style="font-weight:600">${escapeHtml(r.nombre || '—')}</td>
        <td class="rank-score">${r.nota}/10 <small style="color:var(--muted)">(${r.pct}%)</small></td>
        <td>${r.correct}/${r.total}</td>
        <td>${formatTime(r.time)}</td>`;
      tbody.appendChild(tr);
    });
  } catch(e) {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:#dc2626;padding:1.5rem">Error al cargar el ranking.</td></tr>';
  }
}

function renderRanking() {
  showView("ranking");
  renderGlobalRanking();
  const ranking = getRanking();
  const tbody = document.getElementById("ranking-tbody");
  tbody.innerHTML = "";
  if (ranking.length === 0) {
    document.getElementById("ranking-empty").style.display = "";
    return;
  }
  document.getElementById("ranking-empty").style.display = "none";
  const medals = ["🥇","🥈","🥉"];
  ranking.forEach((r, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="rank-pos">${medals[i] || i + 1}</td>
      <td class="rank-score">${r.nota}/10 <small style="color:var(--muted)">(${r.pct}%)</small></td>
      <td>${r.correct}/${r.total}</td>
      <td>${formatTime(r.time)}</td>
      <td class="rank-date">${r.date}</td>`;
    tbody.appendChild(tr);
  });
}

document.getElementById("btn-clear-ranking").addEventListener("click", () => {
  if (confirm("¿Borrar todos los resultados guardados?")) {
    localStorage.removeItem("ci_ranking");
    renderRanking();
  }
});

// ── Botones de resultados ────────────────────────────────────
document.getElementById("btn-retry").addEventListener("click", () => {
  showView("home");
  startQuiz();
});
document.getElementById("btn-new").addEventListener("click", () => showView("home"));

// ── Utils ─────────────────────────────────────────────────────
function escapeHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatTime(s) {
  const m = Math.floor(s / 60).toString().padStart(2, "0");
  const sec = (s % 60).toString().padStart(2, "0");
  return `${m}:${sec}`;
}

// ── Guardar en ranking global ─────────────────────────────────
document.getElementById('btn-save-global').addEventListener('click', async function() {
  const name = document.getElementById('global-name').value.trim();
  const msg = document.getElementById('save-msg');
  if (!name) {
    msg.style.display = '';
    msg.style.color = '#dc2626';
    msg.textContent = 'Escribe tu nombre antes de guardar.';
    return;
  }
  if (!state.lastResult) return;
  this.disabled = true;
  this.textContent = 'Guardando...';
  msg.style.display = 'none';
  try {
    const { nota, correct, total } = state.lastResult;
    await saveToGlobalRanking(name, nota, correct, total);
    msg.style.display = '';
    msg.style.color = '#16a34a';
    msg.textContent = '¡Resultado guardado en el ranking global!';
    this.textContent = 'Guardado ✓';
    document.getElementById('global-name').disabled = true;
  } catch(e) {
    msg.style.display = '';
    msg.style.color = '#dc2626';
    msg.textContent = 'Error al guardar. Comprueba tu conexión.';
    this.disabled = false;
    this.textContent = 'Guardar →';
  }
});

document.getElementById('btn-refresh-ranking').addEventListener('click', renderGlobalRanking);

// ── Init ──────────────────────────────────────────────────────
renderTopicGrid();
updateNumQOptions();
updateStartBtn();
showView("home");
