module.exports = (L) => {
  const { H1, H2, H3, P, BUL, NUM, CAP, table, PB } = L;
  const c = [];

  c.push(H1("2-BOB. MEHNAT MUHOFAZASINING HUQUQIY VA ME'YORIY ASOSLARI"));

  c.push(H2("2.1. Mehnat muhofazasining huquqiy asoslari"));
  c.push(P("Mehnat muhofazasi sohasidagi munosabatlar davlat tomonidan qonun va boshqa me'yoriy-huquqiy hujjatlar orqali tartibga solinadi. Huquqiy asoslar mehnat muhofazasi bo'yicha davlat siyosatining mustahkam poydevorini tashkil etadi, ish beruvchi va xodimlarning huquq hamda majburiyatlarini belgilaydi, javobgarlik chora-tadbirlarini nazarda tutadi."));
  c.push(P("O'zbekiston Respublikasida mehnat muhofazasiga oid huquqiy hujjatlar tizimi bir necha darajaga bo'linadi. Eng yuqori yuridik kuchga ega hujjat — Konstitutsiya, so'ngra qonunlar, Prezident farmonlari va qarorlari, Vazirlar Mahkamasi qarorlari, vazirlik va idoralarning me'yoriy hujjatlari (qoidalar, normalar, standartlar) keladi. Ushbu ierarxiyada quyi darajadagi hujjat yuqori darajadagi hujjatga zid bo'lishi mumkin emas."));

  c.push(P("Quyidagi jadvalda mehnat muhofazasini tartibga soluvchi asosiy me'yoriy-huquqiy hujjatlar va ularning yuridik darajasi keltirilgan."));
  c.push(CAP("2.1-jadval. Me'yoriy-huquqiy hujjatlar ierarxiyasi"));
  c.push(table(
    [900, 4200, 4538],
    ["Daraja", "Hujjat turi", "Mazmuni va misollar"],
    [
      ["I", "Konstitutsiya", "Mehnat qilish, xavfsiz mehnat sharoitiga va dam olishga bo'lgan huquqni kafolatlaydi"],
      ["II", "Qonunlar", "Mehnat kodeksi, «Mehnat muhofazasi to'g'risida»gi qonun, «Fuqarolar sog'lig'ini saqlash to'g'risida»gi qonun"],
      ["III", "Prezident farmon va qarorlari", "Mehnat muhofazasi tizimini takomillashtirish bo'yicha strategik hujjatlar"],
      ["IV", "Vazirlar Mahkamasi qarorlari", "Baxtsiz hodisalarni tekshirish tartibi, yagona nizomlar"],
      ["V", "Idoraviy hujjatlar", "Xavfsizlik qoidalari, sanitariya normalari (SanQvaM), qurilish normalari (QMQ), standartlar"],
      ["VI", "Lokal hujjatlar", "Korxona ichki nizomlari, yo'riqnomalar, buyruqlar, jamoa shartnomasi"]
    ]
  ));

  c.push(H2("2.2. O'zbekiston Respublikasi Mehnat kodeksi"));
  c.push(P("Mehnat kodeksi mehnat munosabatlarini tartibga soluvchi asosiy qonun hujjati hisoblanadi. Kodeksda mehnat shartnomasi, ish vaqti va dam olish vaqti, mehnatga haq to'lash, mehnat intizomi hamda mehnat muhofazasi masalalari to'liq yoritilgan. Mehnat kodeksining alohida bo'limi mehnat muhofazasiga bag'ishlangan bo'lib, unda quyidagi masalalar tartibga solinadi:"));
  c.push(
    BUL("xodimlarning xavfsiz mehnat sharoitiga bo'lgan huquqi;"),
    BUL("ish beruvchining mehnat muhofazasini ta'minlash bo'yicha majburiyatlari;"),
    BUL("ayollar va o'n sakkiz yoshga to'lmagan shaxslar mehnatini muhofaza qilish;"),
    BUL("og'ir, zararli va xavfli ishlarda mehnat qilish sharoitlari;"),
    BUL("mehnat muhofazasi bo'yicha kafolatlar va imtiyozlar.")
  );
  c.push(P("Mehnat kodeksiga muvofiq, ish beruvchi har bir ish o'rnida xavfsiz mehnat sharoitini ta'minlashi, xodimlarni shaxsiy himoya vositalari bilan bepul ta'minlashi, ularni mehnat muhofazasi bo'yicha o'qitishi va yo'riqnomadan o'tkazishi shart. O'z navbatida, xodim ham mehnat muhofazasi qoidalariga rioya qilishi, himoya vositalaridan to'g'ri foydalanishi va o'ziga ma'lum bo'lgan xavf haqida ma'muriyatni xabardor qilishi majburdir."));

  c.push(H2("2.3. Xodim va ish beruvchining huquq va majburiyatlari"));
  c.push(P("Mehnat muhofazasi tizimida xodim va ish beruvchi o'rtasidagi huquq va majburiyatlarning aniq taqsimlanishi muhim ahamiyatga ega. Quyidagi jadvalda tomonlarning asosiy huquq va majburiyatlari qiyoslangan holda keltirilgan."));
  c.push(CAP("2.2-jadval. Xodim va ish beruvchining huquq va majburiyatlari"));
  c.push(table(
    [4819, 4819],
    ["Ish beruvchi", "Xodim"],
    [
      ["Xavfsiz mehnat sharoitini yaratish", "Mehnat muhofazasi qoidalariga rioya qilish"],
      ["Ish o'rnini attestatsiyadan o'tkazish", "Shaxsiy himoya vositalaridan to'g'ri foydalanish"],
      ["Xodimlarni bepul SHV bilan ta'minlash", "Belgilangan mehnat va texnologik intizomga amal qilish"],
      ["Yo'riqnoma va o'qitishni tashkil etish", "Yo'riqnoma va o'qitishlardan o'tish"],
      ["Tibbiy ko'rikni tashkil etish", "Belgilangan tartibda tibbiy ko'rikdan o'tish"],
      ["Baxtsiz hodisalarni tekshirish va hisobga olish", "Baxtsiz hodisa yoki xavf haqida darhol xabar berish"],
      ["Ijtimoiy sug'urta bilan ta'minlash", "Uskunalar va materiallardan ehtiyotkorlik bilan foydalanish"]
    ]
  ));

  c.push(H2("2.4. «Mehnat muhofazasi to'g'risida»gi qonun"));
  c.push(P("«Mehnat muhofazasi to'g'risida»gi qonun mehnat faoliyati jarayonida fuqarolarning hayoti va salomatligini muhofaza qilishga qaratilgan davlat siyosatining asosiy yo'nalishlarini belgilaydi. Qonun mehnat muhofazasi sohasidagi asosiy tushunchalarni, davlat boshqaruvi organlarining vakolatlarini, ish beruvchi va xodimlarning huquq va majburiyatlarini, shuningdek mehnat muhofazasini moliyalashtirish tartibini nazarda tutadi."));
  c.push(P("Qonunga muvofiq mehnat muhofazasi sohasidagi davlat siyosatining asosiy yo'nalishlari quyidagilardan iborat: xodim hayoti va salomatligining ustuvorligini ta'minlash; mehnat muhofazasi bo'yicha yagona talablarni belgilash; ilmiy tadqiqotlarni rag'batlantirish; xavfsiz texnika va texnologiyalarni joriy etish; xalqaro hamkorlikni rivojlantirish."));

  c.push(H2("2.5. Standartlar va sanitariya normalari tizimi"));
  c.push(P("Mehnat xavfsizligi standartlari tizimi (MXST) — mehnat muhofazasi sohasidagi o'zaro bog'liq standartlar majmuidir. Bu standartlar xavfli va zararli ishlab chiqarish omillari, himoya vositalari, xavfsizlik talablari bo'yicha yagona normalarni belgilaydi. Sanitariya qoidalari va normalari (SanQvaM) esa ishlab chiqarish muhitidagi zararli omillarning ruxsat etilgan chegaraviy qiymatlarini o'rnatadi."));
  c.push(P("Quyidagi jadvalda mehnat muhofazasida qo'llaniladigan asosiy me'yoriy hujjat turlari va ular tartibga soladigan masalalar keltirilgan."));
  c.push(CAP("2.3-jadval. Me'yoriy-texnik hujjat turlari"));
  c.push(table(
    [1900, 3400, 4338],
    ["Qisqartma", "To'liq nomi", "Tartibga soladigan masala"],
    [
      ["MXST", "Mehnat xavfsizligi standartlari tizimi", "Xavfsizlik talablari, omillar tasnifi, himoya vositalari"],
      ["SanQvaM", "Sanitariya qoidalari va normalari", "Mikroiqlim, shovqin, chang, yoritish normalari"],
      ["QMQ", "Qurilish me'yorlari va qoidalari", "Bino va inshootlarni xavfsiz loyihalash"],
      ["EIQ", "Elektr inshootlarini o'rnatish qoidalari", "Elektr uskunalari xavfsizligi"],
      ["YXQ", "Yong'in xavfsizligi qoidalari", "Yong'inning oldini olish talablari"]
    ]
  ));

  c.push(H2("2.6. Xalqaro mehnat tashkiloti (XMT) va uning konvensiyalari"));
  c.push(P("Xalqaro Mehnat Tashkiloti (XMT) — 1919-yilda tashkil etilgan, mehnat sohasidagi xalqaro standartlarni ishlab chiquvchi tashkilot. XMT konvensiyalari mehnat muhofazasi bo'yicha xalqaro me'yorlarni belgilaydi va ularni ratifikatsiya qilgan davlatlar uchun majburiy kuchga ega bo'ladi. O'zbekiston qator XMT konvensiyalarini ratifikatsiya qilgan."));
  c.push(P("XMTning mehnat muhofazasiga oid muhim konvensiyalari orasida sanoatda xavfsizlik, kasbiy salomatlik xizmatlari, kimyoviy moddalar bilan ishlash xavfsizligi va boshqalarga oid hujjatlar mavjud. Bu konvensiyalar milliy qonunchilikni takomillashtirishda muhim yo'nalish beruvchi hujjatlar bo'lib xizmat qiladi."));

  c.push(H3("Bob bo'yicha asosiy xulosalar"));
  c.push(
    BUL("Mehnat muhofazasi qonun va me'yoriy hujjatlar orqali tartibga solinadi;"),
    BUL("Hujjatlar Konstitutsiyadan lokal yo'riqnomalargacha aniq ierarxiyaga ega;"),
    BUL("Ish beruvchi va xodim o'zaro huquq va majburiyatlarga ega;"),
    BUL("Milliy qonunchilik xalqaro mehnat standartlariga muvofiqlashtiriladi.")
  );
  c.push(PB());
  return c;
};
