module.exports = (L) => {
  const { H1, H2, P, BUL, CAP, table } = L;
  const c = [];

  c.push(H1("ILOVALAR"));
  c.push(P("Ushbu bo'limda axborot texnologiyalari bo'yicha amaliy ma'lumotlar — klaviatura tugmalari, fayl kengaytmalari, o'lchov birliklari va foydali maslahatlar keltirilgan. Bu materiallardan kundalik ishda ma'lumotnoma sifatida foydalanish mumkin."));

  c.push(H2("1-ilova. Klaviaturaning tez tugmalari (kombinatsiyalar)"));
  c.push(P("Tez tugmalar (hotkeys) ish tezligini sezilarli darajada oshiradi. Quyida eng ko'p ishlatiladigan kombinatsiyalar keltirilgan."));
  c.push(CAP("I.1-jadval. Asosiy tez tugmalar"));
  c.push(table(
    [2600, 7038],
    ["Tugmalar", "Vazifasi"],
    [
      ["Ctrl + C", "Nusxa olish (copy)"],
      ["Ctrl + V", "Qo'yish (paste)"],
      ["Ctrl + X", "Kesish (cut)"],
      ["Ctrl + Z", "Amalni bekor qilish (undo)"],
      ["Ctrl + Y", "Amalni qaytarish (redo)"],
      ["Ctrl + S", "Saqlash (save)"],
      ["Ctrl + A", "Hammasini belgilash (select all)"],
      ["Ctrl + F", "Qidirish (find)"],
      ["Ctrl + P", "Chop etish (print)"],
      ["Alt + Tab", "Ochiq oynalar o'rtasida o'tish"]
    ]
  ));

  c.push(H2("2-ilova. Fayl kengaytmalari"));
  c.push(P("Fayl kengaytmasi faylning turini va uni ochadigan dasturni bildiradi."));
  c.push(CAP("I.2-jadval. Ko'p uchraydigan fayl kengaytmalari"));
  c.push(table(
    [2200, 3600, 3838],
    ["Kengaytma", "Fayl turi", "Dastur"],
    [
      [".docx", "Matn hujjati", "Microsoft Word"],
      [".xlsx", "Elektron jadval", "Microsoft Excel"],
      [".pptx", "Taqdimot", "PowerPoint"],
      [".pdf", "Portativ hujjat", "Acrobat / brauzer"],
      [".txt", "Oddiy matn", "Bloknot"],
      [".jpg / .png", "Rasm", "Grafik muharrir"],
      [".mp3 / .mp4", "Audio / video", "Media pleyer"],
      [".zip / .rar", "Arxiv", "Arxivator"],
      [".html", "Veb-sahifa", "Brauzer"],
      [".exe", "Dastur", "Windows"]
    ]
  ));

  c.push(H2("3-ilova. Axborot o'lchov birliklari"));
  c.push(P("Axborot hajmi va uzatish tezligini o'lchash uchun maxsus birliklar ishlatiladi."));
  c.push(CAP("I.3-jadval. O'lchov birliklari"));
  c.push(table(
    [3200, 3200, 3238],
    ["Birlik", "Belgisi", "Qiymati"],
    [
      ["Bit", "bit", "Eng kichik birlik (0/1)"],
      ["Bayt", "B", "8 bit"],
      ["Kilobayt", "KB", "1024 bayt"],
      ["Megabayt", "MB", "1024 KB"],
      ["Gigabayt", "GB", "1024 MB"],
      ["Terabayt", "TB", "1024 GB"],
      ["Bit/sekund", "bit/s", "Ma'lumot uzatish tezligi"]
    ]
  ));

  c.push(H2("4-ilova. Xavfsiz internetdan foydalanish nazorat ro'yxati"));
  c.push(P("Quyidagi nazorat ro'yxati internetdan xavfsiz foydalanishga yordam beradi."));
  c.push(CAP("I.4-jadval. Xavfsizlik chek-listi"));
  c.push(table(
    [700, 6938, 2000],
    ["№", "Tekshiriladigan band", "Holati"],
    [
      ["1", "Antivirus o'rnatilgan va yangilangan", "___"],
      ["2", "Operatsion tizim yangilanishlari o'rnatilgan", "___"],
      ["3", "Kuchli va noyob parollardan foydalaniladi", "___"],
      ["4", "Muhim ma'lumotlarning zaxira nusxasi bor", "___"],
      ["5", "Noma'lum havolalar ochilmaydi", "___"],
      ["6", "Saytlar HTTPS (himoyalangan) ekani tekshiriladi", "___"],
      ["7", "Shaxsiy ma'lumotlar ishonchsiz saytlarga kiritilmaydi", "___"],
      ["8", "Ikki bosqichli autentifikatsiya yoqilgan", "___"]
    ]
  ));

  c.push(H2("5-ilova. Internet va tarmoq qisqartmalari"));
  c.push(P("Axborot texnologiyalarida ko'plab qisqartmalar (abbreviaturalar) ishlatiladi. Quyida eng ko'p uchraydiganlari izohi bilan keltirilgan."));
  c.push(CAP("I.5-jadval. Ko'p uchraydigan IT qisqartmalari"));
  c.push(table(
    [1800, 3600, 4238],
    ["Qisqartma", "To'liq shakli", "Ma'nosi"],
    [
      ["CPU", "Central Processing Unit", "Markaziy protsessor"],
      ["RAM", "Random Access Memory", "Operativ xotira"],
      ["ROM", "Read Only Memory", "Doimiy (faqat o'qish) xotira"],
      ["HTTP", "HyperText Transfer Protocol", "Veb-sahifa uzatish protokoli"],
      ["URL", "Uniform Resource Locator", "Resurs manzili"],
      ["HTML", "HyperText Markup Language", "Veb-sahifa belgilash tili"],
      ["USB", "Universal Serial Bus", "Universal ulanish porti"],
      ["Wi-Fi", "Wireless Fidelity", "Simsiz tarmoq texnologiyasi"],
      ["AI", "Artificial Intelligence", "Sun'iy intellekt"]
    ]
  ));

  c.push(H2("6-ilova. Axborot texnologiyalari sohasidagi kasblar"));
  c.push(P("Axborot texnologiyalari sohasi keng imkoniyatlar va turli kasblarni taqdim etadi. Quyida eng talabgir IT kasblari keltirilgan."));
  c.push(CAP("I.6-jadval. IT sohasidagi kasblar"));
  c.push(table(
    [2800, 6838],
    ["Kasb", "Faoliyati"],
    [
      ["Dasturchi (dastur ishlab chiquvchi)", "Dasturlar va ilovalar yaratadi"],
      ["Veb-dasturchi", "Veb-saytlar va veb-ilovalar yaratadi"],
      ["Tizim administratori", "Kompyuter tizimlari va tarmoqlarni boshqaradi"],
      ["Ma'lumotlar tahlilchisi", "Ma'lumotlarni tahlil qilib xulosa chiqaradi"],
      ["Kiberxavfsizlik mutaxassisi", "Axborot xavfsizligini ta'minlaydi"],
      ["Grafik / UX dizayner", "Interfeys va grafik dizayn yaratadi"],
      ["Sun'iy intellekt muhandisi", "AI tizimlarini ishlab chiqadi"]
    ]
  ));

  c.push(H2("7-ilova. Onlayn xizmatlar turlari"));
  c.push(P("Internet turli onlayn xizmatlarni taqdim etadi. Quyida asosiy xizmat turlari va misollari keltirilgan."));
  c.push(CAP("I.7-jadval. Onlayn xizmatlar"));
  c.push(table(
    [2800, 6838],
    ["Xizmat turi", "Vazifasi va misoli"],
    [
      ["Ijtimoiy tarmoqlar", "Muloqot va axborot almashish"],
      ["Elektron pochta", "Xabar va fayl yuborish"],
      ["Bulutli saqlash", "Fayllarni internetda saqlash (Google Drive)"],
      ["Onlayn ta'lim", "Masofaviy o'qish platformalari"],
      ["Elektron tijorat", "Onlayn xarid va savdo"],
      ["Video xizmatlar", "Video ko'rish va translyatsiya"],
      ["Onlayn bank", "Masofadan bank operatsiyalari"]
    ]
  ));

  c.push(H2("8-ilova. Kompyuterda ishlash bo'yicha maslahatlar"));
  c.push(P("Kompyuterdan samarali va sog'lom foydalanish uchun quyidagi maslahatlarga amal qiling:"));
  c.push(
    BUL("Har 45–50 daqiqada qisqa tanaffus qiling va ko'zga dam bering;"),
    BUL("Monitorni ko'z darajasida va 50–70 sm masofada joylashtiring;"),
    BUL("To'g'ri o'tirish holatiga rioya qiling, orqangizni to'g'ri tuting;"),
    BUL("Muhim fayllarni muntazam saqlab va zaxiralab boring;"),
    BUL("Kuchli parollardan foydalaning va ularni hech kimga aytmang;"),
    BUL("Noma'lum manbalardan dastur va fayl yuklamang;"),
    BUL("Litsenzion (qonuniy) dasturiy ta'minotdan foydalaning;"),
    BUL("Ish o'rnini toza va yetarli yoritilgan holda saqlang.")
  );
  c.push(P("Esda tuting: axborot texnologiyalari — bu kuchli vosita. Undan oqilona, xavfsiz va samarali foydalanish sizning bilim va mas'uliyatingizga bog'liq."));

  return c;
};
