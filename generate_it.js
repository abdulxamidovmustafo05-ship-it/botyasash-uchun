/*
 * "Axborot texnologiyalari" — o'quv-uslubiy qo'llanma (~80 varoq).
 * Mehnat muhofazasi hujjati bilan bir xil dizayn va tuzilma.
 */
const L = require('./docxlib');
const {
  Document, Packer, Paragraph, TextRun, AlignmentType,
  LevelFormat, PageNumber, Header, Footer, TableOfContents, PageBreak, BorderStyle
} = L.docx;
const { CENTER, SPACER } = L;
const fs = require('fs');

const children = [];

/* ---------- TITUL VARAG'I ---------- */
children.push(
  ...SPACER(1),
  CENTER("O'ZBEKISTON RESPUBLIKASI", { bold: true, size: 26 }),
  CENTER("OLIY VA O'RTA MAXSUS TA'LIM VAZIRLIGI", { bold: true, size: 26, after: 200 }),
  ...SPACER(4),
  CENTER("AXBOROT", { bold: true, size: 52, color: "1F3864" }),
  CENTER("TEXNOLOGIYALARI", { bold: true, size: 52, color: "1F3864", after: 240 }),
  ...SPACER(1),
  CENTER("O'quv-uslubiy qo'llanma", { size: 30, color: "44546A" }),
  CENTER("ma'ruzalar matni, jadvallar va amaliy ma'lumotlar", { size: 24, color: "808080", italics: true, after: 300 }),
  ...SPACER(8),
  CENTER("Toshkent — 2026", { bold: true, size: 26, before: 300 }),
  new Paragraph({ children: [new PageBreak()] })
);

/* ---------- MUNDARIJA ---------- */
children.push(
  CENTER("MUNDARIJA", { bold: true, size: 32, color: "1F3864", after: 200 }),
  new TableOfContents("Mundarija", { hyperlink: true, headingStyleRange: "1-3" }),
  new Paragraph({ children: [new PageBreak()] })
);

/* ---------- KONTENT MODULLARI ---------- */
const parts = [
  './content_it/kirish',
  './content_it/bob1', './content_it/bob2', './content_it/bob3', './content_it/bob4',
  './content_it/bob5', './content_it/bob6', './content_it/bob7', './content_it/bob8',
  './content_it/bob9', './content_it/bob10', './content_it/bob11', './content_it/bob12',
  './content_it/bob13', './content_it/bob14', './content_it/bob15',
  './content_it/baholash', './content_it/xulosa', './content_it/savollar', './content_it/ilovalar'
];
for (const p of parts) {
  children.push(...require(p)(L));
}

/* ---------- HUJJAT ---------- */
const doc = new Document({
  creator: "Axborot texnologiyalari qo'llanmasi",
  title: "Axborot texnologiyalari",
  description: "O'quv-uslubiy qo'llanma",
  features: { updateFields: true },
  styles: {
    default: {
      document: {
        run: { font: "Times New Roman", size: 28 },
        paragraph: { spacing: { line: 360 } }
      }
    }
  },
  numbering: {
    config: [
      { reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "nums", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] }
    ]
  },
  sections: [{
    properties: {
      page: { size: { width: 11906, height: 16838 }, margin: { top: 1134, bottom: 1134, left: 1418, right: 850 } }
    },
    headers: {
      default: new Header({
        children: [new Paragraph({
          alignment: AlignmentType.RIGHT,
          border: { bottom: { color: "BFBFBF", space: 2, style: BorderStyle.SINGLE, size: 4 } },
          children: [new TextRun({ text: "Axborot texnologiyalari", italics: true, size: 18, color: "808080" })]
        })]
      })
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ children: [PageNumber.CURRENT], size: 20, color: "595959" })] })]
      })
    },
    children
  }]
});

Packer.toBuffer(doc).then(buf => {
  const out = "Axborot_texnologiyalari.docx";
  fs.writeFileSync(out, buf);
  console.log("Yaratildi:", out, "(", (buf.length / 1024).toFixed(1), "KB )");
  console.log("Jami elementlar:", children.length);
});
