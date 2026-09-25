module.exports = (L) => {
  const { H1, H2, H3, P, BUL, CAP, table, PB } = L;
  const c = [];

  c.push(H1("3-BOB. DASTURIY TA'MINOT"));

  c.push(H2("3.1. Dasturiy ta'minot tushunchasi"));
  c.push(P("Kompyuterning ishlashi ikki asosiy tashkil etuvchiga — apparat va dasturiy ta'minotga bog'liq. Agar apparat ta'minotini inson tanasiga o'xshatsak, dasturiy ta'minot uning ongi va bilimiga o'xshaydi. Aynan dasturlar kompyuterga qanday ishlash, qanday masalalarni yechish va foydalanuvchi bilan qanday muloqot qilishni belgilaydi."));
  c.push(P("Dasturiy ta'minot inson tomonidan maxsus dasturlash tillarida yoziladi. Har bir dastur muayyan vazifani bajarish uchun mo'ljallangan bo'ladi. Zamonaviy kompyuterlarda yuzlab dasturlar o'rnatilgan bo'lib, ular birgalikda foydalanuvchiga keng imkoniyatlarni taqdim etadi."));
  c.push(P("Dasturiy ta'minot (software) — kompyuterni boshqaruvchi va muayyan masalalarni hal qiluvchi dasturlar hamda ma'lumotlar majmuidir. Apparat ta'minoti kompyuterning fizik qismi bo'lsa, dasturiy ta'minot uni «jonli» qiladi — apparatga nima qilishni buyuradi. Apparat va dasturiy ta'minot bir-birisiz ishlay olmaydi; ular birgalikda yagona hisoblash tizimini tashkil etadi."));
  c.push(P("Dasturiy ta'minot vazifasiga ko'ra uch asosiy turga bo'linadi: tizimli dasturiy ta'minot (kompyuterni boshqaradi), amaliy dasturiy ta'minot (foydalanuvchi masalalarini hal qiladi) va dasturlash tizimlari (yangi dasturlar yaratish uchun). Har bir tur o'ziga xos vazifani bajaradi."));
  c.push(CAP("3.1-jadval. Dasturiy ta'minot turlari"));
  c.push(table(
    [2800, 3400, 3438],
    ["Turi", "Vazifasi", "Misollar"],
    [
      ["Tizimli DT", "Kompyuter resurslarini boshqarish", "Operatsion tizimlar, drayverlar, utilitalar"],
      ["Amaliy DT", "Foydalanuvchi masalalarini hal qilish", "Matn muharriri, brauzer, o'yinlar, grafik muharrir"],
      ["Dasturlash tizimlari", "Yangi dasturlar yaratish", "Kompilyatorlar, muharrirlar, IDE"]
    ]
  ));

  c.push(H2("3.2. Tizimli dasturiy ta'minot"));
  c.push(P("Tizimli dasturiy ta'minot kompyuterning ishlashini ta'minlaydi va uning resurslarini boshqaradi. Uning eng muhim qismi — operatsion tizim. Bundan tashqari, tizimli dasturiy ta'minotga drayverlar (qurilmalarni boshqaruvchi maxsus dasturlar), utilitalar (xizmat ko'rsatuvchi dasturlar: antivirus, arxivator, disk tozalash) va tizim yordamchilari kiradi."));
  c.push(P("Drayverlar operatsion tizim bilan apparat qurilmalari o'rtasida vositachi vazifasini bajaradi. Har bir qurilma (printer, videokarta, tarmoq kartasi) o'z drayveriga ega. Drayver o'rnatilmasa yoki eskirsa, qurilma to'g'ri ishlamasligi mumkin. Utilitalar esa kompyuterni sozlash, tozalash va himoyalashda yordam beradi."));

  c.push(H2("3.3. Amaliy dasturiy ta'minot"));
  c.push(P("Amaliy dasturiy ta'minot foydalanuvchining aniq vazifalarini hal qilish uchun mo'ljallangan. Bu dasturlar orqali foydalanuvchi matn yozadi, hisob-kitob qiladi, rasm chizadi, internetda ishlaydi va boshqa amallarni bajaradi. Amaliy dasturlar sohalar bo'yicha juda ko'p turlarga bo'linadi."));
  c.push(CAP("3.2-jadval. Amaliy dasturlar turlari"));
  c.push(table(
    [3200, 6438],
    ["Dastur turi", "Vazifasi va misollari"],
    [
      ["Matn muharrirlari", "Hujjatlar yaratish va tahrirlash (Word, Writer)"],
      ["Elektron jadvallar", "Hisob-kitob va ma'lumotlar tahlili (Excel, Calc)"],
      ["Taqdimot dasturlari", "Slaydlar yaratish (PowerPoint, Impress)"],
      ["Grafik muharrirlar", "Rasm chizish va tahrirlash (Photoshop, GIMP, CorelDRAW)"],
      ["Brauzerlar", "Internetda ishlash (Chrome, Firefox, Edge)"],
      ["Ma'lumotlar bazasi", "Ma'lumotlarni saqlash va boshqarish (Access, MySQL)"],
      ["Multimedia pleyerlar", "Audio va video ijro etish (VLC, Media Player)"]
    ]
  ));

  c.push(H2("3.4. Dasturiy ta'minotni tarqatish turlari"));
  c.push(P("Dasturiy ta'minot foydalanuvchiga turli shartlar asosida taqdim etiladi. Litsenziya turiga ko'ra dasturlar pullik va bepul, ochiq kodli va yopiq kodli bo'lishi mumkin. Litsenziya shartlariga rioya qilish — dasturdan qonuniy foydalanishning muhim sharti hisoblanadi."));
  c.push(CAP("3.3-jadval. Dasturiy ta'minot litsenziya turlari"));
  c.push(table(
    [2600, 7038],
    ["Litsenziya turi", "Xususiyati"],
    [
      ["Tijoriy (proprietar)", "Pullik, kodi yopiq, foydalanish cheklangan (Windows, MS Office)"],
      ["Freeware", "Bepul, ammo kodi yopiq (masalan, ba'zi brauzerlar)"],
      ["Shareware", "Sinov muddati bepul, keyin to'lov talab qilinadi"],
      ["Ochiq kodli (Open Source)", "Bepul, kodi ochiq, erkin o'zgartirish mumkin (Linux, GIMP)"],
      ["Bulutli (SaaS)", "Internet orqali obuna asosida ishlatiladi"]
    ]
  ));

  c.push(H2("3.5. Dasturiy ta'minotni o'rnatish va yangilash"));
  c.push(P("Dasturdan foydalanish uchun avval uni kompyuterga o'rnatish (install) kerak. O'rnatish jarayonida dastur fayllari kompyuterga ko'chiriladi va tizimga sozlanadi. O'rnatish tugagach, dastur ishga tayyor bo'ladi. Keraksiz dasturni esa tizimdan olib tashlash (uninstall) mumkin."));
  c.push(P("Dasturlarni muntazam yangilab turish muhim ahamiyatga ega. Yangilanishlar (updates) dasturga yangi imkoniyatlar qo'shadi, xatolarni tuzatadi va xavfsizlik kamchiliklarini bartaraf etadi. Ayniqsa operatsion tizim va antivirus dasturlarini o'z vaqtida yangilash xavfsizlik uchun zarurdir. Litsenziyasiz (noqonuniy) dasturlardan foydalanish esa xavfli va qonunga zid hisoblanadi."));

  c.push(H3("Bob bo'yicha asosiy xulosalar"));
  c.push(
    BUL("Dasturiy ta'minot apparatni boshqaradi va masalalarni hal qiladi;"),
    BUL("U tizimli, amaliy va dasturlash tizimlariga bo'linadi;"),
    BUL("Tizimli DT ning asosi — operatsion tizim va drayverlar;"),
    BUL("Amaliy DT foydalanuvchining aniq vazifalarini hal qiladi;"),
    BUL("Dasturlar litsenziya turi bo'yicha pullik, bepul va ochiq kodli bo'ladi.")
  );
  c.push(PB());
  return c;
};
