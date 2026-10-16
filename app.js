/* ============================================================
   FP QUIZ — Multi-módulo
   ============================================================ */

// ── Configuración de tests ────────────────────────────────
const DB_BASE = 'https://coi-quiz-default-rtdb.europe-west1.firebasedatabase.app';

const TESTS = [
  {
    id: 'coi-ut1',
    titulo: 'Comunicaciones Industriales',
    ut: 'UT1',
    subtitulo: 'CFGS Automatización y Robótica Industrial',
    icono: '📡',
    color: '#3b82f6',
    password: 'coi2526',
    dbUrl: DB_BASE + '/ranking',          // ruta original — preserva datos existentes
    localKey: 'ci_ranking',
    get temas() { return TEMAS; },
  },
  {
    id: 'gsari-ut1',
    titulo: 'Informática Industrial',
    ut: 'UT1',
    subtitulo: 'CFGS Automatización y Robótica Industrial',
    icono: '🖥️',
    color: '#10b981',
    password: 'ini2627ut01',
    dbUrl: DB_BASE + '/ranking-gsari-ut1',
    localKey: 'gsari_ranking',
    get temas() { return TEMAS_GSARI; },
  },
];

// ── Estado global ─────────────────────────────────────────
const state = {
  view: 'home',
  currentTest: null,
  playerName: '',
  pendingTestId: null,
  questions: [],
  current: 0,
  answers: [],
  timer: null,
  elapsed: 0,
  mode: 'all',
  topics: [],
};

// ── Vistas ────────────────────────────────────────────────
const views = {
  home: document.getElementById('home'),
  quiz: document.getElementById('quiz-view'),
  results: document.getElementById('results-view'),
  ranking: document.getElementById('ranking-view'),
};

function showView(name) {
  state.view = name;
  Object.entries(views).forEach(([k, el]) => {
    el.style.display = k === name ? '' : 'none';
  });
  document.querySelectorAll('header nav button[data-view]').forEach(b => {
    b.classList.toggle('active', b.dataset.view === name);
  });
}

// ── Navegación header ─────────────────────────────────────
document.querySelectorAll('header nav button[data-view]').forEach(b => {
  b.addEventListener('click', () => {
    if (b.dataset.view === 'ranking') renderRanking();
    if (b.dataset.view === 'home') { stopTimer(); showView('home'); }
  });
});

document.getElementById('btn-change-test').addEventListener('click', changeTest);

// ── LANDING ───────────────────────────────────────────────
function renderTestCards() {
  const container = document.getElementById('test-cards');
  container.innerHTML = '';
  TESTS.forEach(test => {
    const totalQ = test.temas.reduce((s, t) => s + t.preguntas.length, 0);
    const card = document.createElement('div');
    card.style.cssText = [
      'background:#f8fafc', 'border:2px solid #e2e8f0', 'border-radius:12px',
      'padding:1rem 1.2rem', 'cursor:pointer', 'transition:all .2s',
      'display:flex', 'align-items:center', 'gap:1rem',
    ].join(';');
    card.innerHTML = `
      <div style="font-size:2rem">${test.icono}</div>
      <div style="flex:1">
        <div style="font-weight:700;color:#1e3a5f;font-size:.95rem">${test.titulo} — ${test.ut}</div>
        <div style="font-size:.78rem;color:#64748b">${test.subtitulo}</div>
        <div style="font-size:.75rem;color:${test.color};font-weight:600;margin-top:.25rem">${totalQ} preguntas · ${test.temas.length} bloques</div>
      </div>
      <span style="color:${test.color};font-size:1.2rem;font-weight:700">→</span>`;
    card.addEventListener('mouseenter', () => { card.style.borderColor = test.color; card.style.background = '#fff'; });
    card.addEventListener('mouseleave', () => { card.style.borderColor = '#e2e8f0'; card.style.background = '#f8fafc'; });
    card.addEventListener('click', () => selectTestCard(test.id));
    container.appendChild(card);
  });
}

function goToStep(stepId) {
  ['step-select', 'step-pwd', 'step-name'].forEach(id => {
    document.getElementById(id).style.display = id === stepId ? '' : 'none';
  });
}

function selectTestCard(testId) {
  state.pendingTestId = testId;
  const test = TESTS.find(t => t.id === testId);
  document.getElementById('pwd-test-name').textContent = `${test.icono} ${test.titulo} — ${test.ut}`;
  document.getElementById('pwd-input').value = '';
  document.getElementById('pwd-error').style.display = 'none';
  goToStep('step-pwd');
  setTimeout(() => document.getElementById('pwd-input').focus(), 100);
}

function checkPassword() {
  const test = TESTS.find(t => t.id === state.pendingTestId);
  const val = document.getElementById('pwd-input').value;
  if (val === test.password) {
    document.getElementById('pwd-error').style.display = 'none';
    document.getElementById('name-input').value = '';
    document.getElementById('name-error').style.display = 'none';
    goToStep('step-name');
    setTimeout(() => document.getElementById('name-input').focus(), 100);
  } else {
    document.getElementById('pwd-error').style.display = '';
    document.getElementById('pwd-input').value = '';
    document.getElementById('pwd-input').focus();
  }
}

function enterApp() {
  const name = document.getElementById('name-input').value.trim();
  if (name.length < 3) {
    document.getElementById('name-error').style.display = '';
    document.getElementById('name-input').focus();
    return;
  }
  state.playerName = name;
  state.currentTest = TESTS.find(t => t.id === state.pendingTestId);

  document.getElementById('header-title').textContent = `${state.currentTest.titulo} · ${state.currentTest.ut}`;
  document.getElementById('header-sub').textContent = `${state.currentTest.subtitulo} · ${name}`;

  initHomeView();
  document.getElementById('landing').style.display = 'none';
  showView('home');
}

function changeTest() {
  stopTimer();
  state.currentTest = null;
  state.playerName = '';
  state.topics = [];
  state.questions = [];
  state.answers = [];
  // Resetear modo
  document.querySelector('input[name="mode"][value="all"]').checked = true;
  state.mode = 'all';
  document.getElementById('num-q-row').style.display = 'none';

  goToStep('step-select');
  document.getElementById('landing').style.display = 'flex';
}

// Enter en inputs del landing
document.getElementById('pwd-input').addEventListener('keydown', e => { if (e.key === 'Enter') checkPassword(); });
document.getElementById('name-input').addEventListener('keydown', e => { if (e.key === 'Enter') enterApp(); });

// ── INIT HOME VIEW ────────────────────────────────────────
function initHomeView() {
  const temas = state.currentTest.temas;
  const tot = temas.reduce((s, t) => s + t.preguntas.length, 0);

  document.getElementById('home-title').textContent = `${state.currentTest.titulo} — ${state.currentTest.ut}`;
  document.getElementById('home-subtitle').textContent =
    `${state.currentTest.subtitulo} · ${tot} preguntas · ${temas.length} bloques temáticos · Selecciona temas y pon a prueba tus conocimientos.`;
  document.getElementById('total-q-count').textContent = tot;
  document.getElementById('total-blocks').textContent = temas.length;
  document.getElementById('index-title').textContent = `Índice de contenidos — ${state.currentTest.ut}`;

  state.topics = [];
  renderTopicGrid();
  updateNumQOptions();
  updateStartBtn();

  // Tabla de índice
  const tbody = document.getElementById('index-tbody');
  tbody.innerHTML = '';
  temas.forEach((t, i) => {
    const tr = document.createElement('tr');
    tr.style.borderBottom = '1px solid var(--border)';
    tr.innerHTML = `
      <td style="padding:.55rem .6rem;white-space:nowrap">
        <span style="display:inline-block;background:var(--primary);color:#fff;font-size:.7rem;font-weight:700;padding:.15rem .45rem;border-radius:4px">B${i + 1}</span>
      </td>
      <td style="padding:.55rem .6rem">${t.nombre}</td>
      <td style="padding:.55rem .6rem;text-align:center;font-weight:700;color:var(--primary)">${t.preguntas.length}</td>`;
    tbody.appendChild(tr);
  });
  const tfooter = document.createElement('tr');
  tfooter.style.borderTop = '2px solid var(--border)';
  tfooter.innerHTML = `
    <td style="padding:.55rem .6rem"></td>
    <td style="padding:.55rem .6rem;font-weight:700">Total</td>
    <td style="padding:.55rem .6rem;text-align:center;font-weight:800;color:var(--primary);font-size:1.05rem">${tot}</td>`;
  tbody.appendChild(tfooter);
}

// ── HOME: selección de temas ──────────────────────────────
const TOPIC_ICONS = ['📡','🏭','📋','🔄','🔌','📻','⚙️','🌐','🔍','🛠️','💻','🖥️','⚡','🔧','📊','🧰','🗃️'];

function renderTopicGrid() {
  const temas = state.currentTest ? state.currentTest.temas : [];
  const grid = document.getElementById('topic-grid');
  grid.innerHTML = '';
  temas.forEach((t, i) => {
    const card = document.createElement('div');
    card.className = 'topic-card';
    card.dataset.id = t.id;
    card.innerHTML = `
      <div style="display:flex;align-items:center;gap:.4rem;margin-bottom:.4rem">
        <span style="font-size:.7rem;font-weight:700;background:var(--primary);color:#fff;padding:.1rem .4rem;border-radius:4px">B${i + 1}</span>
        <span class="icon" style="font-size:1.2rem;margin:0">${TOPIC_ICONS[i] || '📦'}</span>
      </div>
      <div class="check">✓</div>
      <h3>${t.nombre}</h3>
      <small>${t.preguntas.length} preguntas</small>`;
    card.addEventListener('click', () => toggleTopic(t.id, card));
    grid.appendChild(card);
  });
}

function toggleTopic(id, card) {
  if (state.topics.includes(id)) {
    state.topics = state.topics.filter(x => x !== id);
    card.classList.remove('selected');
  } else {
    state.topics.push(id);
    card.classList.add('selected');
  }
  updateStartBtn();
  updateNumQOptions();
}

function selectAllTopics() {
  state.topics = state.currentTest.temas.map(t => t.id);
  document.querySelectorAll('.topic-card').forEach(c => c.classList.add('selected'));
  updateStartBtn();
  updateNumQOptions();
}

document.getElementById('btn-select-all').addEventListener('click', selectAllTopics);

function totalAvailable() {
  const temas = state.currentTest ? state.currentTest.temas : [];
  return temas.filter(t => state.topics.includes(t.id)).reduce((s, t) => s + t.preguntas.length, 0);
}

function updateNumQOptions() {
  const sel = document.getElementById('num-questions');
  const total = totalAvailable();
  sel.innerHTML = '';
  if (total === 0) return;
  const opts = [5, 10, 15, 20, 30, total].filter((v, i, a) => v <= total && a.indexOf(v) === i);
  opts.forEach(n => {
    const o = document.createElement('option');
    o.value = n;
    o.textContent = n === total ? `Todas (${n})` : n;
    sel.appendChild(o);
  });
  if (opts.includes(10)) sel.value = 10;
  updateStartBtn();
}

function updateStartBtn() {
  document.getElementById('btn-start').disabled = state.topics.length === 0;
}

// Modo aleatorio / todas
document.querySelectorAll('input[name="mode"]').forEach(r => {
  r.addEventListener('change', () => {
    state.mode = r.value;
    document.getElementById('num-q-row').style.display = state.mode === 'random' ? '' : 'none';
  });
});

// ── START ─────────────────────────────────────────────────
document.getElementById('btn-start').addEventListener('click', startQuiz);

function startQuiz() {
  if (state.topics.length === 0) return;
  const temas = state.currentTest.temas;

  let pool = [];
  temas.filter(t => state.topics.includes(t.id)).forEach(t => {
    t.preguntas.forEach(q => pool.push({ ...q, tema: t.nombre }));
  });

  if (state.mode === 'random') {
    const n = parseInt(document.getElementById('num-questions').value) || 10;
    pool = shuffle(pool).slice(0, Math.min(n, pool.length));
  } else {
    pool = shuffle(pool);
  }

  state.questions = pool.map(shuffleOptions);
  state.current = 0;
  state.answers = pool.map(() => ({ chosen: null, correct: false }));
  state.elapsed = 0;

  showView('quiz');
  startTimer();
  renderQuestion();
}

// ── TIMER ─────────────────────────────────────────────────
function startTimer() {
  stopTimer();
  state.elapsed = 0;
  updateTimerDisplay();
  state.timer = setInterval(() => { state.elapsed++; updateTimerDisplay(); }, 1000);
}

function stopTimer() {
  if (state.timer) { clearInterval(state.timer); state.timer = null; }
}

function updateTimerDisplay() {
  const m = Math.floor(state.elapsed / 60).toString().padStart(2, '0');
  const s = (state.elapsed % 60).toString().padStart(2, '0');
  document.getElementById('quiz-timer').textContent = `⏱ ${m}:${s}`;
  document.getElementById('quiz-timer').className = 'quiz-timer';
}

// ── RENDER PREGUNTA ───────────────────────────────────────
function renderQuestion() {
  const q = state.questions[state.current];
  const total = state.questions.length;
  const idx = state.current;

  document.getElementById('progress-fill').style.width = `${(idx / total) * 100}%`;
  document.getElementById('q-counter').textContent = `Pregunta ${idx + 1} de ${total}`;
  document.getElementById('q-topic').textContent = q.tema;
  document.getElementById('q-text').textContent = q.pregunta;

  const container = document.getElementById('options-container');
  container.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D', 'E'];
  q.opciones.forEach((op, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="opt-letter">${letters[i]}</span><span>${op}</span>`;
    const ans = state.answers[idx];
    if (ans.chosen !== null) {
      btn.disabled = true;
      if (i === q.correcta) btn.classList.add('correct');
      if (i === ans.chosen && i !== q.correcta) btn.classList.add('wrong');
    } else {
      btn.addEventListener('click', () => selectAnswer(i));
    }
    container.appendChild(btn);
  });

  const expEl = document.getElementById('explanation');
  const ans = state.answers[idx];
  if (ans.chosen !== null) {
    expEl.textContent = q.explicacion;
    expEl.className = 'explanation show' + (ans.correct ? '' : ' wrong-exp');
  } else {
    expEl.className = 'explanation';
    expEl.textContent = '';
  }

  document.getElementById('btn-prev').disabled = idx === 0;
  const nextBtn = document.getElementById('btn-next');
  if (idx === total - 1) {
    nextBtn.textContent = 'Ver resultados →';
    nextBtn.onclick = finishQuiz;
  } else {
    nextBtn.textContent = 'Siguiente →';
    nextBtn.onclick = () => { state.current++; renderQuestion(); };
  }
  nextBtn.disabled = false;
  document.getElementById('btn-prev').onclick = () => { state.current--; renderQuestion(); };
}

function selectAnswer(i) {
  const q = state.questions[state.current];
  state.answers[state.current].chosen = i;
  state.answers[state.current].correct = i === q.correcta;
  renderQuestion();
}

// ── FINALIZAR ─────────────────────────────────────────────
function finishQuiz() {
  stopTimer();
  showView('results');
  renderResults();
}

// ── RESULTADOS ────────────────────────────────────────────
async function renderResults() {
  const total = state.questions.length;
  const answered = state.answers.filter(a => a.chosen !== null).length;
  const correct = state.answers.filter(a => a.correct).length;
  const wrong = answered - correct;
  const skipped = total - answered;

  const score = Math.max(0, correct - wrong / 3);
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;
  const nota = (score / total * 10).toFixed(1);

  document.getElementById('score-pct').textContent = `${pct}%`;
  document.getElementById('score-nota').textContent = `Nota: ${nota}/10`;

  let msg = '';
  if (pct >= 90) msg = '¡Excelente! Dominas el temario.';
  else if (pct >= 75) msg = '¡Muy bien! Buen nivel de conocimiento.';
  else if (pct >= 50) msg = 'Aprobado. Repasa los temas fallidos.';
  else msg = 'Hay margen de mejora. ¡Sigue practicando!';
  document.getElementById('result-msg').textContent = msg;

  const penalty = wrong / 3;
  document.getElementById('stat-correct').textContent = correct;
  document.getElementById('stat-wrong').textContent = wrong;
  document.getElementById('stat-penalty').textContent = `−${penalty.toFixed(2)}`;
  document.getElementById('stat-skipped').textContent = skipped;
  document.getElementById('stat-time').textContent = formatTime(state.elapsed);

  // Guardar en ranking local
  saveToRanking(nota, correct, total);

  // Auto-guardar en ranking global con el nombre del alumno
  const saveBox = document.getElementById('global-save-box');
  const saveMsg = document.getElementById('save-status-msg');
  saveMsg.textContent = `Guardando resultado de ${state.playerName}...`;
  saveMsg.style.color = '#0369a1';
  saveBox.style.background = '#f0f9ff';
  saveBox.style.borderColor = '#bae6fd';

  try {
    await saveToGlobalRanking(parseFloat(nota), correct, total);
    saveMsg.textContent = `✓ Resultado de ${state.playerName} guardado en el ranking`;
    saveMsg.style.color = '#16a34a';
    saveBox.style.background = '#f0fdf4';
    saveBox.style.borderColor = '#86efac';
  } catch (e) {
    saveMsg.textContent = `⚠ No se pudo guardar en el ranking global. Comprueba tu conexión.`;
    saveMsg.style.color = '#dc2626';
    saveBox.style.background = '#fef2f2';
    saveBox.style.borderColor = '#fca5a5';
  }

  // Revisión pregunta a pregunta
  const list = document.getElementById('review-list');
  list.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D', 'E'];
  state.questions.forEach((q, i) => {
    const ans = state.answers[i];
    const isCorrect = ans.correct;
    const wasSkipped = ans.chosen === null;
    const item = document.createElement('div');
    item.className = 'review-item ' + (wasSkipped ? '' : isCorrect ? 'correct' : 'wrong');
    item.innerHTML = `
      <div class="ri-topic">${q.tema}</div>
      <div class="ri-q">${i + 1}. ${q.pregunta}</div>
      <div class="ri-ans">
        <span class="tag ${isCorrect ? 'tag-correct' : 'tag-wrong'}">${wasSkipped ? 'Sin responder' : isCorrect ? 'Correcto' : 'Incorrecto'}</span>
        ${!wasSkipped && !isCorrect ? `Tu respuesta: <em>${letters[ans.chosen]}. ${q.opciones[ans.chosen]}</em> &nbsp;·&nbsp; ` : ''}
        ${!isCorrect ? `Correcta: <strong>${letters[q.correcta]}. ${q.opciones[q.correcta]}</strong>` : `Respuesta: <strong>${letters[q.correcta]}. ${q.opciones[q.correcta]}</strong>`}
      </div>
      <div class="ri-exp">${q.explicacion}</div>`;
    list.appendChild(item);
  });
}

// ── RANKING (localStorage) ────────────────────────────────
function saveToRanking(nota, correct, total) {
  const entry = {
    nota: parseFloat(nota),
    correct,
    total,
    pct: Math.round(correct / total * 100),
    temas: state.topics.join(', '),
    time: state.elapsed,
    date: new Date().toLocaleDateString('es-ES'),
  };
  const ranking = getRanking();
  ranking.push(entry);
  ranking.sort((a, b) => b.nota - a.nota || a.time - b.time);
  localStorage.setItem(state.currentTest.localKey, JSON.stringify(ranking.slice(0, 50)));
}

function getRanking() {
  try { return JSON.parse(localStorage.getItem(state.currentTest.localKey) || '[]'); } catch { return []; }
}

async function saveToGlobalRanking(nota, correct, total) {
  const entry = {
    nombre: state.playerName,
    nota,
    correct,
    total,
    pct: Math.round(correct / total * 100),
    time: state.elapsed,
    date: new Date().toLocaleDateString('es-ES'),
    ts: Date.now(),
  };
  const res = await fetch(state.currentTest.dbUrl + '.json', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(entry),
  });
  if (!res.ok) throw new Error('Error al guardar');
}

function buildFilterBar(barId, totals, activeFilter, onSelect) {
  const bar = document.getElementById(barId);
  bar.innerHTML = '';
  const all = ['todas', ...totals.sort((a, b) => a - b)];
  all.forEach(val => {
    const btn = document.createElement('button');
    btn.className = 'btn ' + (val === activeFilter ? 'btn-primary' : 'btn-ghost');
    btn.style.cssText = 'font-size:.78rem;padding:.3rem .75rem';
    btn.textContent = val === 'todas' ? 'Todas' : `${val} preguntas`;
    btn.addEventListener('click', () => onSelect(val));
    bar.appendChild(btn);
  });
}

async function renderGlobalRanking() {
  const tbody = document.getElementById('global-ranking-tbody');
  tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:var(--muted);padding:1.5rem">Cargando...</td></tr>';
  try {
    const res = await fetch(state.currentTest.dbUrl + '.json');
    const data = await res.json();
    if (!data) {
      tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:var(--muted);padding:1.5rem">Aún no hay resultados globales.</td></tr>';
      document.getElementById('global-filter-bar').innerHTML = '';
      return;
    }
    const allEntries = Object.values(data).sort((a, b) => b.nota - a.nota || a.time - b.time);
    const totals = [...new Set(allEntries.map(e => e.total))];
    let activeFilter = 'todas';

    const medals = ['🥇', '🥈', '🥉'];
    const roasts = [
      '¡Eres un máquina! 🤖',
      '¡Casi, casi... pero no eres el 1! 😤',
      'Bronce, como el cinturón de herramientas 🔧',
      'Top 4, eso no lo pone nadie en el CV 😂',
      '¡El quinto Beatle del módulo! 🎸',
    ];

    function paintGlobalTable(filter) {
      activeFilter = filter;
      buildFilterBar('global-filter-bar', totals, activeFilter, paintGlobalTable);
      const entries = (filter === 'todas' ? allEntries : allEntries.filter(e => e.total === filter)).slice(0, 20);
      tbody.innerHTML = '';
      entries.forEach((r, i) => {
        const roast = i < 5 ? `<br><small style="color:var(--muted);font-weight:400">${roasts[i]}</small>` : '';
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td class="rank-pos">${medals[i] || i + 1}</td>
          <td style="font-weight:600">${escapeHtml(r.nombre || '—')}${roast}</td>
          <td class="rank-score">${r.nota}/10 <small style="color:var(--muted)">(${r.pct}%)</small></td>
          <td>${r.correct}/${r.total}</td>
          <td>${formatTime(r.time)}</td>`;
        tbody.appendChild(tr);
      });
    }

    paintGlobalTable('todas');
  } catch (e) {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:#dc2626;padding:1.5rem">Error al cargar el ranking.</td></tr>';
  }
}

function renderRanking() {
  showView('ranking');
  renderGlobalRanking();
  const ranking = getRanking();
  const tbody = document.getElementById('ranking-tbody');
  tbody.innerHTML = '';
  if (ranking.length === 0) {
    document.getElementById('ranking-empty').style.display = '';
    document.getElementById('local-filter-bar').innerHTML = '';
    return;
  }
  document.getElementById('ranking-empty').style.display = 'none';
  const medals = ['🥇', '🥈', '🥉'];
  const roasts = [
    '¡Eres un máquina! 🤖',
    '¡Casi, casi... pero no eres el 1! 😤',
    'Bronce, como el cinturón de herramientas 🔧',
    'Top 4, eso no lo pone nadie en el CV 😂',
    '¡El quinto Beatle del módulo! 🎸',
  ];
  const totals = [...new Set(ranking.map(r => r.total))];
  let activeFilter = 'todas';

  function paintLocalTable(filter) {
    activeFilter = filter;
    buildFilterBar('local-filter-bar', totals, activeFilter, paintLocalTable);
    tbody.innerHTML = '';
    const entries = filter === 'todas' ? ranking : ranking.filter(r => r.total === filter);
    entries.forEach((r, i) => {
      const roast = i < 5 ? `<br><small style="color:var(--muted);font-weight:400">${roasts[i]}</small>` : '';
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="rank-pos">${medals[i] || i + 1}</td>
        <td class="rank-score">${r.nota}/10 <small style="color:var(--muted)">(${r.pct}%)</small></td>
        <td>${r.correct}/${r.total}${roast}</td>
        <td>${formatTime(r.time)}</td>
        <td class="rank-date">${r.date}</td>`;
      tbody.appendChild(tr);
    });
  }

  paintLocalTable('todas');
}

document.getElementById('btn-clear-ranking').addEventListener('click', () => {
  if (confirm('¿Borrar todos los resultados guardados?')) {
    localStorage.removeItem(state.currentTest.localKey);
    renderRanking();
  }
});

// ── Botones de resultados ─────────────────────────────────
document.getElementById('btn-retry').addEventListener('click', () => {
  showView('home');
  startQuiz();
});
document.getElementById('btn-new').addEventListener('click', () => showView('home'));

document.getElementById('btn-refresh-ranking').addEventListener('click', renderGlobalRanking);

// ── Utils ─────────────────────────────────────────────────
function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function shuffleOptions(q) {
  const indices = q.opciones.map((_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return {
    ...q,
    opciones: indices.map(i => q.opciones[i]),
    correcta: indices.indexOf(q.correcta),
  };
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
  const m = Math.floor(s / 60).toString().padStart(2, '0');
  const sec = (s % 60).toString().padStart(2, '0');
  return `${m}:${sec}`;
}

// ── Init ──────────────────────────────────────────────────
renderTestCards();
showView('home');
