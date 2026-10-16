// Script para convertir banco_test_aules.xml de GSARI al formato questions.js
const fs = require('fs');
const path = require('path');

const xmlPath = 'C:\\Users\\MONRA\\OneDrive\\Documents\\GSARI2026\\materiales\\0964-informatica-industrial\\ut-01\\banco_test_aules.xml';
const xml = fs.readFileSync(xmlPath, 'utf8');

// Nombres descriptivos para cada CE
const CE_NAMES = {
  'RA1.a': 'RA1.a — Documentación técnica de sistemas industriales',
  'RA1.b': 'RA1.b — Componentes hardware de sistemas informáticos',
  'RA1.c': 'RA1.c — Sistemas operativos en entornos industriales',
  'RA1.d': 'RA1.d — Redes y comunicaciones industriales',
  'RA1.e': 'RA1.e — Seguridad en sistemas informáticos industriales',
  'RA1.f': 'RA1.f — Mantenimiento y diagnóstico de sistemas',
  'RA1.g': 'RA1.g — Montaje e integración de sistemas',
  'RA1.h': 'RA1.h — Configuración de sistemas y periféricos',
  'RA1.i': 'RA1.i — Verificación y puesta en marcha',
  'RA6.a': 'RA6.a — Prevención de riesgos laborales',
  'RA6.b': 'RA6.b — Normativa de seguridad y medioambiente',
};

function stripHtml(html) {
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Extraer CE del nombre de pregunta
function getCE(nameText) {
  const m = nameText.match(/\((RA\d+\.\w+)\)/);
  return m ? m[1] : 'RA1.a';
}

// Parsear todas las preguntas
const questions = [];
const questionRegex = /<question type="multichoice">([\s\S]*?)<\/question>/g;
let match;

while ((match = questionRegex.exec(xml)) !== null) {
  const block = match[1];

  // Nombre/CE
  const nameMatch = block.match(/<name>\s*<text>(.*?)<\/text>/);
  const ce = nameMatch ? getCE(nameMatch[1]) : 'RA1.a';

  // Pregunta
  const qtMatch = block.match(/<questiontext[^>]*>\s*<text><!\[CDATA\[([\s\S]*?)\]\]><\/text>/);
  if (!qtMatch) continue;
  const pregunta = stripHtml(qtMatch[1]);

  // Feedback general (explicación)
  const fbMatch = block.match(/<generalfeedback[^>]*>\s*<text><!\[CDATA\[([\s\S]*?)\]\]><\/text>/);
  const explicacion = fbMatch ? stripHtml(fbMatch[1]) : '';

  // Respuestas
  const answerRegex = /<answer fraction="([^"]+)"[^>]*>\s*<text><!\[CDATA\[([\s\S]*?)\]\]><\/text>/g;
  const opciones = [];
  let correcta = 0;
  let ansMatch;
  let idx = 0;
  while ((ansMatch = answerRegex.exec(block)) !== null) {
    const fraction = parseFloat(ansMatch[1]);
    const texto = stripHtml(ansMatch[2]);
    opciones.push(texto);
    if (fraction > 0) correcta = idx;
    idx++;
  }

  if (opciones.length < 2) continue;

  questions.push({ ce, pregunta, opciones, correcta, explicacion });
}

// Agrupar por CE
const groups = {};
for (const q of questions) {
  if (!groups[q.ce]) groups[q.ce] = [];
  groups[q.ce].push(q);
}

// Generar JS
let out = `// Banco de preguntas — UT1: Informática Industrial
// Fuente: banco_test_aules.xml · J. Monrabal Mateo · CFGS Automatización y Robótica Industrial

const TEMAS_GSARI = [\n`;

for (const [ce, qs] of Object.entries(groups)) {
  const nombre = CE_NAMES[ce] || ce;
  out += `  {\n    id: "${ce.toLowerCase().replace('.', '_')}",\n    nombre: "${nombre}",\n    preguntas: [\n`;
  for (const q of qs) {
    const opStr = q.opciones.map(o => `        ${JSON.stringify(o)}`).join(',\n');
    out += `      {\n        pregunta: ${JSON.stringify(q.pregunta)},\n        opciones: [\n${opStr}\n        ],\n        correcta: ${q.correcta},\n        explicacion: ${JSON.stringify(q.explicacion)}\n      },\n`;
  }
  out += `    ]\n  },\n`;
}

out += `];\n`;

fs.writeFileSync('C:\\Users\\MONRA\\OneDrive\\Documents\\web-coi-repo\\questions_gsari.js', out, 'utf8');
console.log(`Convertidas ${questions.length} preguntas en ${Object.keys(groups).length} grupos.`);
for (const [ce, qs] of Object.entries(groups)) {
  console.log(`  ${ce}: ${qs.length} preguntas`);
}
