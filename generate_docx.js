/*
 * "Mehnat muhofazasi va texnika xavfsizligi" — o'quv-uslubiy qo'llanma (~80 varoq).
 * docx-js yordamida generatsiya qilinadi.
 */
const L = require('./docxlib');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
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
  CENTER("MEHNAT MUHOFAZASI VA", { bold: true, size: 52, color: "1F3864" }),
  CENTER("TEXNIKA XAVFSIZLIGI", { bold: true, size: 52, color: "1F3864", after: 240 }),
  ...SPACER(1),
  CENTER("O'quv-uslubiy qo'llanma", { size: 30, color: "44546A" }),
  CENTER("ma'ruzalar matni, jadvallar va me'yoriy ma'lumotlar", { size: 24, color: "808080", italics: true, after: 300 }),
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
  './content/kirish',
  './content/bob1',
  './content/bob2',
  './content/bob3',
  './content/bob4',
  './content/bob5',
  './content/bob6',
  './content/bob7',
  './content/bob8',
  './content/bob9',
  './content/bob10',
  './content/bob11',
  './content/bob12',
  './content/bob13',
  './content/bob14',
  './content/bob15',
  './content/xulosa',
  './content/savollar',
  './content/ilovalar'
];
for (const p of parts) {
  const build = require(p);
  const els = build(L);
  children.push(...els);
}

/* ---------- HUJJAT ---------- */
const doc = new Document({
  creator: "Mehnat muhofazasi qo'llanmasi",
  title: "Mehnat muhofazasi va texnika xavfsizligi",
  description: "O'quv-uslubiy qo'llanma",
  features: { updateFields: true },
  styles: {
    default: {
      document: {
        run: { font: "Times New Roman", size: 28 },
        paragraph: { spacing: { line: 360 } }
      },
      heading1: { run: { font: "Times New Roman" } },
      heading2: { run: { font: "Times New Roman" } },
      heading3: { run: { font: "Times New Roman" } }
    }
  },
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [{
          level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } }
        }]
      },
      {
        reference: "nums",
        levels: [{
          level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } }
        }]
      }
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 }, // A4
        margin: { top: 1134, bottom: 1134, left: 1418, right: 850 }
      }
    },
    headers: {
      default: new Header({
        children: [new Paragraph({
          alignment: AlignmentType.RIGHT,
          border: { bottom: { color: "BFBFBF", space: 2, style: BorderStyle.SINGLE, size: 4 } },
          children: [new TextRun({ text: "Mehnat muhofazasi va texnika xavfsizligi", italics: true, size: 18, color: "808080" })]
        })]
      })
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new TextRun({ children: [PageNumber.CURRENT], size: 20, color: "595959" })]
        })]
      })
    },
    children
  }]
});

Packer.toBuffer(doc).then(buf => {
  const out = "Mehnat_muhofazasi_va_texnika_xavfsizligi.docx";
  fs.writeFileSync(out, buf);
  console.log("Yaratildi:", out, "(", (buf.length / 1024).toFixed(1), "KB )");
  console.log("Jami elementlar:", children.length);
});
