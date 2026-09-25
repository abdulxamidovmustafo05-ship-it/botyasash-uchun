/* docxlib bilan bir xil interfeys, ammo HTML string qaytaradi (faqat sahifa sonini baholash uchun) */
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const H1 = (t) => `<h1>${esc(t)}</h1>`;
const H2 = (t) => `<h2>${esc(t)}</h2>`;
const H3 = (t) => `<h3>${esc(t)}</h3>`;
const P = (t) => `<p>${esc(Array.isArray(t) ? t.map(r => r.text || "").join("") : t)}</p>`;
const BUL = (t) => `<li class="bul">${esc(t)}</li>`;
const NUM = (t) => `<li class="num">${esc(t)}</li>`;
const CAP = (t) => `<div class="cap">${esc(t)}</div>`;
const PB = () => `<div class="pb"></div>`;
function table(colWidths, headers, rows) {
  const total = colWidths.reduce((a, b) => a + b, 0);
  let h = `<table><thead><tr>` +
    headers.map((x, i) => `<th style="width:${(colWidths[i] / total * 100).toFixed(2)}%">${esc(x)}</th>`).join("") +
    `</tr></thead><tbody>`;
  h += rows.map(r => `<tr>` + r.map(x => `<td>${esc(x).replace(/\n/g, "<br>")}</td>`).join("") + `</tr>`).join("");
  h += `</tbody></table>`;
  return h;
}
const startList = () => 0;
function gradeLabel(g){ return {2:"2 (qoniqarsiz)",3:"3 (qoniqarli)",4:"4 (yaxshi)",5:"5 (a'lo)"}[g]||String(g); }
function rubricTable(colWidths, headers, outcomes) {
  const total = colWidths.reduce((a,b)=>a+b,0);
  let h = `<table class="rub"><thead><tr>` + headers.map((x,i)=>`<th style="width:${(colWidths[i]/total*100).toFixed(2)}%">${esc(x)}</th>`).join("") + `</tr></thead><tbody>`;
  for (const oc of outcomes) {
    const totalRows = oc.indicators.reduce((a,ind)=>a+ind.grades.length,0);
    let fo = true;
    for (const ind of oc.indicators) {
      let fi = true;
      for (const g of ind.grades) {
        h += `<tr>`;
        if (fo){ h += `<td rowspan="${totalRows}"><b>${esc(oc.outcome)}</b></td>`; fo=false; }
        if (fi){ h += `<td rowspan="${ind.grades.length}">${esc(ind.name)}</td>`; fi=false; }
        h += `<td>${esc(g[1])}</td><td class="g${g[0]}" style="text-align:center"><b>${esc(gradeLabel(g[0]))}</b></td></tr>`;
      }
    }
  }
  return h + `</tbody></table>`;
}
module.exports = { H1, H2, H3, P, BUL, NUM, CAP, table, rubricTable, PB, startList, CONTENT_WIDTH: 9638, __html: true };
