// Script temporal para convertir banco_test_aules.xml de COI UT2 al formato questions_coi_ut2.js
const fs = require('fs');

const xmlPath = 'C:\\Users\\MONRA\\OneDrive\\Documents\\GSARI2026\\materiales\\0967-comunicaciones-industriales\\UT2\\banco_test_aules.xml';
const xml = fs.readFileSync(xmlPath, 'utf8');

const CE_NAMES = {
  'RA2.a': 'RA2.a — Tramas Modbus RTU: campos, CRC y delimitadores',
  'RA2.b': 'RA2.b — Interfaces físicas: RS-485, RS-232 y Ethernet industrial',
  'RA2.c': 'RA2.c — Configuración de dispositivos Modbus y OPC UA',
  'RA2.d': 'RA2.d — Programación Python para comunicaciones industriales',
  'RA2.e': 'RA2.e — Diagnóstico y resolución de problemas en redes industriales',
};

function stripHtml(html) {
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function getCE(nameText) {
  const m = nameText.match(/\((RA\d+\.\w+)\)/);
  return m ? m[1] : 'RA2.a';
}

const questions = [];
const questionRegex = /<question type="multichoice">([\s\S]*?)<\/question>/g;
let match;

while ((match = questionRegex.exec(xml)) !== null) {
  const block = match[1];

  const nameMatch = block.match(/<name>\s*<text>(.*?)<\/text>/);
  const ce = nameMatch ? getCE(nameMatch[1]) : 'RA2.a';

  const qtMatch = block.match(/<questiontext[^>]*>\s*<text><!\[CDATA\[([\s\S]*?)\]\]><\/text>/);
  if (!qtMatch) continue;
  const pregunta = stripHtml(qtMatch[1]);

  const fbMatch = block.match(/<generalfeedback[^>]*>\s*<text><!\[CDATA\[([\s\S]*?)\]\]><\/text>/);
  const explicacion = fbMatch ? stripHtml(fbMatch[1]) : '';

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

// Agrupar por CE manteniendo orden RA2.a → RA2.e
const groups = {};
for (const q of questions) {
  if (!groups[q.ce]) groups[q.ce] = [];
  groups[q.ce].push(q);
}

const ceOrder = ['RA2.a', 'RA2.b', 'RA2.c', 'RA2.d', 'RA2.e'];

let out = `// Banco de preguntas — UT2: Modbus y programación Python industrial
// Fuente: banco_test_aules.xml · J. Monrabal Mateo · CFGS Automatización y Robótica Industrial

const TEMAS_COI_UT2 = [\n`;

for (const ce of ceOrder) {
  const qs = groups[ce];
  if (!qs || qs.length === 0) continue;
  const nombre = CE_NAMES[ce] || ce;
  out += `  {\n    id: "${ce.toLowerCase().replace('.', '_')}",\n    nombre: "${nombre}",\n    preguntas: [\n`;
  for (const q of qs) {
    const opStr = q.opciones.map(o => `        ${JSON.stringify(o)}`).join(',\n');
    out += `      {\n        pregunta: ${JSON.stringify(q.pregunta)},\n        opciones: [\n${opStr}\n        ],\n        correcta: ${q.correcta},\n        explicacion: ${JSON.stringify(q.explicacion)}\n      },\n`;
  }
  out += `    ]\n  },\n`;
}

// CEs no esperados si los hubiera
for (const [ce, qs] of Object.entries(groups)) {
  if (ceOrder.includes(ce)) continue;
  const nombre = CE_NAMES[ce] || ce;
  out += `  {\n    id: "${ce.toLowerCase().replace('.', '_')}",\n    nombre: "${nombre}",\n    preguntas: [\n`;
  for (const q of qs) {
    const opStr = q.opciones.map(o => `        ${JSON.stringify(o)}`).join(',\n');
    out += `      {\n        pregunta: ${JSON.stringify(q.pregunta)},\n        opciones: [\n${opStr}\n        ],\n        correcta: ${q.correcta},\n        explicacion: ${JSON.stringify(q.explicacion)}\n      },\n`;
  }
  out += `    ]\n  },\n`;
}

out += `];\n`;

fs.writeFileSync('C:\\Users\\MONRA\\OneDrive\\Documents\\web-coi-repo\\questions_coi_ut2.js', out, 'utf8');
console.log(`Convertidas ${questions.length} preguntas en ${Object.keys(groups).length} grupos.`);
for (const ce of ceOrder) {
  if (groups[ce]) console.log(`  ${ce}: ${groups[ce].length} preguntas`);
}
