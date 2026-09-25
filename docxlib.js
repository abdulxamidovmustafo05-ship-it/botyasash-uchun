/* Umumiy yordamchi funksiyalar va docx qayta-eksporti */
const docx = require('docx');
const {
  Paragraph, TextRun, HeadingLevel, AlignmentType,
  Table, TableRow, TableCell, WidthType, ShadingType,
  PageBreak, TableOfContents, VerticalAlign
} = docx;

function P(text, opts = {}) {
  const runs = Array.isArray(text) ? text : [new TextRun({ text })];
  return new Paragraph({
    alignment: opts.align || AlignmentType.JUSTIFIED,
    spacing: { line: 360, after: opts.after ?? 120, before: opts.before ?? 0 },
    indent: opts.noIndent ? undefined : { firstLine: 709 },
    children: runs
  });
}
function H1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    alignment: AlignmentType.LEFT,
    spacing: { before: 320, after: 200 },
    children: [new TextRun({ text, bold: true, size: 30, color: "1F3864" })]
  });
}
function H2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 240, after: 140 },
    children: [new TextRun({ text, bold: true, size: 27, color: "2E5496" })]
  });
}
function H3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 180, after: 120 },
    children: [new TextRun({ text, bold: true, size: 25, color: "44546A" })]
  });
}
function BUL(text) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { line: 340, after: 60 },
    alignment: AlignmentType.JUSTIFIED,
    children: [new TextRun({ text })]
  });
}
let _numInstance = 0;
function startList() { _numInstance++; return _numInstance; }
function NUM(text) {
  return new Paragraph({
    numbering: { reference: "nums", level: 0, instance: _numInstance },
    spacing: { line: 340, after: 60 },
    alignment: AlignmentType.JUSTIFIED,
    children: [new TextRun({ text })]
  });
}
function CAP(text) {
  return new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { before: 140, after: 60 },
    children: [new TextRun({ text, italics: true, bold: true, size: 22, color: "44546A" })]
  });
}
function CENTER(text, opts = {}) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { line: 360, after: opts.after ?? 120, before: opts.before ?? 0 },
    children: [new TextRun({ text, bold: opts.bold, size: opts.size, color: opts.color, italics: opts.italics })]
  });
}
function SPACER(n = 1) {
  const arr = [];
  for (let i = 0; i < n; i++) arr.push(new Paragraph({ children: [new TextRun("")] }));
  return arr;
}
function cell(text, { bold = false, width, shading, align = AlignmentType.LEFT, size = 22 } = {}) {
  return new TableCell({
    width: { size, type: WidthType.DXA },
    verticalAlign: VerticalAlign.CENTER,
    shading: shading ? { type: ShadingType.CLEAR, fill: shading, color: "auto" } : undefined,
    margins: { top: 40, bottom: 40, left: 90, right: 90 },
    children: String(text).split("\n").map(line => new Paragraph({
      alignment: align,
      spacing: { line: 264, after: 0 },
      children: [new TextRun({ text: line, bold, size })]
    }))
  });
}
function makeTable(colWidths, headers, rows, headShade = "1F3864") {
  const headerRow = new TableRow({
    tableHeader: true,
    children: headers.map((h, i) =>
      cell(h, { bold: true, width: colWidths[i], shading: headShade, align: AlignmentType.CENTER, size: 22 }))
  });
  // make header text white on dark shade
  headerRow.root.forEach && null;
  const bodyRows = rows.map((r, ri) => new TableRow({
    children: r.map((c, i) => cell(c, {
      width: colWidths[i],
      align: AlignmentType.LEFT,
      shading: ri % 2 === 1 ? "EAF0F8" : undefined
    }))
  }));
  return new Table({
    columnWidths: colWidths,
    width: { size: colWidths.reduce((a, b) => a + b, 0), type: WidthType.DXA },
    rows: [headerRow, ...bodyRows]
  });
}
// header oq matnli variant
function headerCell(text, width) {
  return new TableCell({
    width: { size: width, type: WidthType.DXA },
    verticalAlign: VerticalAlign.CENTER,
    shading: { type: ShadingType.CLEAR, fill: "1F3864", color: "auto" },
    margins: { top: 40, bottom: 40, left: 90, right: 90 },
    children: String(text).split("\n").map(line => new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { line: 264, after: 0 },
      children: [new TextRun({ text: line, bold: true, size: 22, color: "FFFFFF" })]
    }))
  });
}
function table(colWidths, headers, rows) {
  const headerRow = new TableRow({
    tableHeader: true,
    children: headers.map((h, i) => headerCell(h, colWidths[i]))
  });
  const bodyRows = rows.map((r, ri) => new TableRow({
    children: r.map((c, i) => cell(c, {
      width: colWidths[i],
      align: AlignmentType.LEFT,
      shading: ri % 2 === 1 ? "EAF0F8" : undefined
    }))
  }));
  return new Table({
    columnWidths: colWidths,
    width: { size: colWidths.reduce((a, b) => a + b, 0), type: WidthType.DXA },
    rows: [headerRow, ...bodyRows]
  });
}
const PB = () => new Paragraph({ children: [new PageBreak()] });

module.exports = {
  docx, P, H1, H2, H3, BUL, NUM, CAP, CENTER, SPACER, cell, makeTable, table, PB,
  startList, CONTENT_WIDTH: 9638
};
