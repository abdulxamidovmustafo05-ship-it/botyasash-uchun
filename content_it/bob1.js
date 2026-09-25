module.exports = (L) => {
  const { H1, H2, H3, P, BUL, CAP, table, PB } = L;
  const c = [];

  c.push(H1("1-BOB. AXBOROT TEXNOLOGIYALARI ASOSLARI"));

  c.push(H2("1.1. Axborot va ma'lumot tushunchalari"));
  c.push(P("Insoniyat tarixi davomida axborot doimo muhim ahamiyatga ega bo'lgan. Qadimda odamlar axborotni og'zaki, keyinchalik yozuv, kitob va bosma nashrlar orqali uzatishgan. Bugungi kunda esa axborot asosan elektron shaklda — kompyuterlar va internet orqali saqlanadi va tarqatiladi. Axborotning bunday tez tarqalishi jamiyat taraqqiyotining muhim omiliga aylandi."));
  c.push(P("Axborot — bu bizni o'rab turgan olam, undagi jarayonlar, hodisalar va obyektlar haqidagi ma'lumotlardir. Axborot inson tomonidan sezgi organlari orqali yoki texnik vositalar yordamida qabul qilinadi, qayta ishlanadi va uzatiladi. Axborotning asosiy xususiyatlari — ishonchlilik, to'liqlik, aniqlik, dolzarblik va tushunarlilikdir."));
  c.push(P("Ma'lumot (data) va axborot (information) tushunchalarini farqlash muhim. Ma'lumot — bu qayta ishlanmagan, xom holdagi belgilar, raqamlar yoki faktlar. Axborot esa ma'lumotni qayta ishlash natijasida hosil bo'lgan, ma'no kasb etgan va qaror qabul qilishda foydali bo'lgan natijadir. Masalan, «25» — bu ma'lumot, «bugungi harorat 25 daraja» — bu axborot."));
  c.push(P("Axborotni o'lchash uchun maxsus birliklar qo'llaniladi. Kompyuterda axborotning eng kichik birligi — bit (bitta 0 yoki 1). Sakkiz bit bir baytni tashkil etadi. Kattaroq hajmlarni ifodalash uchun kilobayt, megabayt, gigabayt va boshqa birliklardan foydalaniladi."));
  c.push(CAP("1.1-jadval. Axborot o'lchov birliklari"));
  c.push(table(
    [3200, 3200, 3238],
    ["Birlik", "Belgilanishi", "Miqdori"],
    [
      ["Bit", "bit", "Eng kichik birlik (0 yoki 1)"],
      ["Bayt", "B", "8 bit"],
      ["Kilobayt", "KB", "1024 bayt"],
      ["Megabayt", "MB", "1024 KB"],
      ["Gigabayt", "GB", "1024 MB"],
      ["Terabayt", "TB", "1024 GB"],
      ["Petabayt", "PB", "1024 TB"]
    ]
  ));

  c.push(H2("1.2. Axborot texnologiyalari tushunchasi"));
  c.push(P("Axborot texnologiyalari (AT) — axborotni yig'ish, saqlash, qidirish, qayta ishlash, uzatish va foydalanuvchiga taqdim etish jarayonlarini avtomatlashtiruvchi usullar va texnik vositalar majmuidir. Axborot texnologiyalarining asosiy maqsadi — inson mehnatini yengillashtirish, jarayonlarni tezlashtirish va axborotdan samarali foydalanish imkonini yaratishdir."));
  c.push(P("Axborot texnologiyalari quyidagi asosiy tarkibiy qismlardan iborat: apparat ta'minoti (hardware) — kompyuter va texnik qurilmalar; dasturiy ta'minot (software) — kompyuterni boshqaruvchi va masalalarni hal qiluvchi dasturlar; ma'lumotlar (data) — qayta ishlanadigan axborot; tarmoq (network) — qurilmalarni bog'lovchi vositalar; foydalanuvchi (user) — tizimdan foydalanuvchi inson."));

  c.push(H2("1.3. Axborot texnologiyalarining rivojlanish tarixi"));
  c.push(P("Hisoblash vositalarining rivojlanishi uzoq tarixga ega. Dastlabki hisoblash vositalari — barmoqlar, toshlar va abakdan boshlanib, mexanik hisoblash mashinalari, elektromexanik qurilmalar va nihoyat elektron kompyuterlarga qadar rivojlandi. Zamonaviy kompyuterlarning rivojlanishi an'anaviy ravishda avlodlarga bo'linadi."));
  c.push(CAP("1.2-jadval. Kompyuterlar avlodlari"));
  c.push(table(
    [1600, 2600, 5438],
    ["Avlod", "Element bazasi", "Xususiyatlari"],
    [
      ["I avlod", "Elektron lampalar", "Katta hajm, ko'p energiya, past ishonchlilik"],
      ["II avlod", "Tranzistorlar", "Kichikroq hajm, tezroq, ishonchliroq"],
      ["III avlod", "Integral sxemalar", "Yanada kichik, arzon, operatsion tizimlar paydo bo'ldi"],
      ["IV avlod", "Mikroprotsessorlar", "Shaxsiy kompyuterlar, katta unumdorlik"],
      ["V avlod", "Sun'iy intellekt", "Parallel hisoblash, neyron tarmoqlar, aqlli tizimlar"]
    ]
  ));

  c.push(H2("1.4. Sanoq sistemalari"));
  c.push(P("Kompyuterlar axborotni ikkilik (binar) sanoq sistemasida qayta ishlaydi, chunki elektron qurilmalar ikki holatni — bor (1) va yo'q (0) ni oson ifodalaydi. Inson kundalik hayotda o'nlik sanoq sistemasidan foydalanadi. Dasturlashda o'n oltilik va sakkizlik sanoq sistemalari ham qo'llaniladi. Sanoq sistemasi asosini uning belgilar soni (asosi) belgilaydi."));
  c.push(CAP("1.3-jadval. Asosiy sanoq sistemalari"));
  c.push(table(
    [3000, 1800, 4838],
    ["Sanoq sistemasi", "Asosi", "Ishlatiladigan belgilar"],
    [
      ["Ikkilik (binar)", "2", "0, 1"],
      ["Sakkizlik", "8", "0–7"],
      ["O'nlik (detsimal)", "10", "0–9"],
      ["O'n oltilik (heksadesimal)", "16", "0–9, A–F"]
    ]
  ));
  c.push(P("Ikkilik sanoq sistemasida sonlar faqat 0 va 1 raqamlaridan tuziladi. Masalan, o'nlik sistemadagi 5 soni ikkilik sistemada 101 ko'rinishida yoziladi. Kompyuter barcha ma'lumotlarni — matn, rasm, ovoz va videoni — pirovardida ikkilik kodlar ko'rinishida saqlaydi va qayta ishlaydi."));

  c.push(H2("1.5. Axborotni kodlash"));
  c.push(P("Kompyuter faqat ikkilik kodlar (0 va 1) bilan ishlagani uchun, barcha axborot — matn, son, rasm, ovoz va video — ikkilik kod ko'rinishiga o'tkazilishi kerak. Bu jarayon kodlash deb ataladi. Har bir belgi, rang yoki tovush muayyan ikkilik kod bilan ifodalanadi."));
  c.push(P("Matnni kodlash uchun maxsus kodlash jadvallaridan foydalaniladi. Ular har bir harf, raqam va belgiga muayyan raqamli kod biriktiradi. Dastlab ASCII kodlash tizimi keng tarqalgan bo'lib, u asosan lotin harflarini qamrab olgan. Turli tillardagi barcha belgilarni qamrab olish uchun esa Unicode tizimi yaratilgan."));
  c.push(CAP("1.4-jadval. Axborot turlarini kodlash"));
  c.push(table(
    [2600, 7038],
    ["Axborot turi", "Kodlash usuli"],
    [
      ["Matn", "Har bir belgiga kod (ASCII, Unicode)"],
      ["Son", "Ikkilik sanoq sistemasiga o'tkazish"],
      ["Rasm (grafika)", "Piksellar va ularning ranglarini kodlash"],
      ["Ovoz (audio)", "Tovush to'lqinini raqamli qiymatlarga aylantirish"],
      ["Video", "Ketma-ket kadrlarni kodlash"]
    ]
  ));

  c.push(H3("Bob bo'yicha asosiy xulosalar"));
  c.push(
    BUL("Axborot — olam haqidagi ma'lumotlar; ma'lumot xom, axborot qayta ishlangan holatdir;"),
    BUL("Axborotning eng kichik birligi — bit, 8 bit bir baytni tashkil etadi;"),
    BUL("AT apparat, dasturiy ta'minot, ma'lumot, tarmoq va foydalanuvchidan iborat;"),
    BUL("Kompyuterlar besh avlodga bo'linadi;"),
    BUL("Kompyuter ikkilik sanoq sistemasida ishlaydi.")
  );
  c.push(PB());
  return c;
};
