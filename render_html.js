/* Kontent modullarini HTML ko'rinishida chiqaradi — sahifa sonini baholash uchun */
const L = require('./htmllib');
const fs = require('fs');

const parts = [
  './content/kirish','./content/bob1','./content/bob2','./content/bob3','./content/bob4',
  './content/bob5','./content/bob6','./content/bob7','./content/bob8','./content/bob9',
  './content/bob10','./content/bob11','./content/bob12','./content/bob13',
  './content/bob14','./content/bob15','./content/baholash','./content/xulosa','./content/savollar','./content/ilovalar'
];
let body = "";
// Titul + mundarija taxminan 2 sahifa
let content = "";
for (const p of parts) {
  content += require(p)(L).join("\n");
}
// Haqiqiy mundarija: barcha sarlavhalardan tuziladi (Word ham shunday qiladi)
const heads = [...content.matchAll(/<h([123])>([\s\S]*?)<\/h\1>/g)].map(m => `<div class="toc l${m[1]}">${m[2]}</div>`);
const toc = heads.join("\n");

body += `<div class="title"><p class="c b">O'ZBEKISTON RESPUBLIKASI OLIY VA O'RTA MAXSUS TA'LIM VAZIRLIGI</p>
<h1 class="cover">MEHNAT MUHOFAZASI VA TEXNIKA XAVFSIZLIGI</h1>
<p class="c">O'quv-uslubiy qo'llanma</p><p class="c">Toshkent — 2026</p></div><div class="pb"></div>
<h1>MUNDARIJA</h1>${toc}<div class="pb"></div>`;
body += content;

// li larni ul/ol ga o'rash
body = body.replace(/(<li class="bul">[\s\S]*?<\/li>)(?=(?:\s*<li class="bul">)*)/g, (m) => m);
// consecutive bullet items
body = body.replace(/((?:<li class="bul">[\s\S]*?<\/li>\s*)+)/g, '<ul>$1</ul>');
body = body.replace(/((?:<li class="num">[\s\S]*?<\/li>\s*)+)/g, '<ol>$1</ol>');

const html = `<!DOCTYPE html><html lang="uz"><head><meta charset="utf-8">
<style>
@page { size: A4; margin: 2cm 1.5cm 2cm 2.5cm; }
* { box-sizing: border-box; }
body { font-family: "Liberation Serif","Times New Roman", Times, serif; font-size: 14pt; line-height: 1.72; text-align: justify; margin: 0; }
h1 { font-size: 15pt; color:#1F3864; font-weight:bold; margin: 16pt 0 10pt; page-break-after: avoid; }
h2 { font-size: 13.5pt; color:#2E5496; font-weight:bold; margin: 12pt 0 7pt; page-break-after: avoid; }
h3 { font-size: 12.5pt; color:#44546A; font-weight:bold; margin: 9pt 0 6pt; page-break-after: avoid; }
p { margin: 0 0 6pt; text-indent: 1.25cm; }
.cap { font-style: italic; font-weight:bold; font-size:11pt; color:#44546A; margin: 7pt 0 3pt; }
ul, ol { margin: 0 0 6pt; padding-left: 1.25cm; }
li { margin: 0 0 3pt; }
table { width:100%; border-collapse: collapse; margin: 4pt 0 8pt; page-break-inside: avoid; font-size:11pt; }
th { background:#1F3864; color:#fff; border:1px solid #7f7f7f; padding:3pt 5pt; text-align:center; font-weight:bold; }
td { border:1px solid #7f7f7f; padding:3pt 5pt; vertical-align: top; }
tbody tr:nth-child(even) td { background:#EAF0F8; }
.pb { page-break-before: always; }
.title { text-align:center; padding-top: 3cm; }
.c { text-align:center; text-indent:0; } .b { font-weight:bold; }
.cover { font-size: 30pt; color:#1F3864; text-align:center; margin: 2cm 0; }
.g2 { background:#FBE2E2 !important; } .g3 { background:#FFF4D6 !important; } .g4 { background:#E5EDF8 !important; } .g5 { background:#E3F1E3 !important; }
table.rub td { font-size:10.5pt; vertical-align:top; }
.toc { text-indent:0; text-align:left; margin:0 0 2pt; }
.toc.l1 { font-weight:bold; margin-top:5pt; } .toc.l2 { padding-left:0.6cm; } .toc.l3 { padding-left:1.2cm; }
</style></head><body>${body}</body></html>`;

fs.writeFileSync('preview.html', html);
console.log('preview.html yozildi:', (html.length/1024).toFixed(1), 'KB');
