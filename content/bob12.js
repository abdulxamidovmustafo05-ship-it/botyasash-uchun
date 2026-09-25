module.exports = (L) => {
  const { H1, H2, H3, P, BUL, NUM, CAP, table, PB } = L;
  const c = [];

  c.push(H1("12-BOB. AYOLLAR, O'SMIRLAR VA NOGIRONLAR MEHNATINI MUHOFAZA QILISH"));

  c.push(H2("12.1. Ayollar mehnatini muhofaza qilishning o'ziga xosligi"));
  c.push(P("Ayollar organizmining fiziologik xususiyatlari, ayniqsa ona bo'lish vazifasi, ularning mehnatini alohida muhofaza qilishni taqozo etadi. Qonunchilikka muvofiq ayollarni og'ir jismoniy ishlarga, zararli va xavfli mehnat sharoitli ishlarga, shuningdek yer osti ishlariga jalb qilish cheklanadi yoki taqiqlanadi. Bu cheklovlar ayollar salomatligini va kelajak avlod sog'lig'ini himoya qilishga qaratilgan."));
  c.push(P("Ayollar uchun qo'lda ko'tarib tashiladigan yuklarning eng ko'p me'yori belgilangan. Bu me'yor ish jarayonining xususiyatiga — yuk doimiy ravishda ko'tariladimi yoki boshqa ish bilan navbatlashadimi — bog'liq holda farqlanadi. Homilador va emizikli ayollarga nisbatan alohida, yanada qattiqroq talablar qo'yiladi."));
  c.push(CAP("12.1-jadval. Ayollar uchun yuk ko'tarish va tashish me'yorlari"));
  c.push(table(
    [6538, 3100],
    ["Ish turi", "Ruxsat etilgan yuk, kg"],
    [
      ["Boshqa ish bilan navbatlashib yuk ko'tarish", "10 gacha"],
      ["Butun ish smenasi davomida doimiy yuk ko'tarish", "7 gacha"],
      ["Bir soat davomida ko'tariladigan umumiy yuk (ish yuzasidan)", "350 gacha"],
      ["Bir soat davomida ko'tariladigan umumiy yuk (poldan)", "175 gacha"]
    ]
  ));
  c.push(P("Homilador ayollar tungi, qo'shimcha ish va dam olish kunlaridagi ishlarga jalb qilinmaydi, xizmat safariga yuborilmaydi. Ularning iltimosiga ko'ra ish normalari kamaytiriladi yoki ular yengilroq ishga o'tkaziladi. Bunda avvalgi ish o'rnidagi o'rtacha ish haqi saqlanib qoladi."));

  c.push(H2("12.2. O'smirlar mehnatini muhofaza qilish"));
  c.push(P("O'n sakkiz yoshga to'lmagan shaxslar (o'smirlar) organizmi hali to'liq shakllanmagani sababli ularning mehnati alohida muhofazaga muhtoj. O'smirlarni og'ir, zararli va xavfli ishlarga jalb qilish taqiqlanadi. Ular uchun qisqartirilgan ish vaqti belgilanadi va yuk ko'tarish me'yorlari sezilarli darajada kamaytiriladi."));
  c.push(P("O'smirlar ishga qabul qilinishdan oldin va keyinchalik voyaga yetgunga qadar har yili majburiy tibbiy ko'rikdan o'tkaziladi. Bu ularning salomatligi ish sharoitiga mos kelishini nazorat qilish imkonini beradi. O'smirlar uchun sinov muddati belgilanmaydi va ular ish haqi to'liq saqlangan holda qisqartirilgan vaqt ishlaydi."));
  c.push(CAP("12.2-jadval. O'smirlar uchun ish vaqti va yuk me'yorlari"));
  c.push(table(
    [3600, 3038, 3000],
    ["Yosh toifasi", "Haftalik ish vaqti", "Yuk ko'tarish (taxminiy)"],
    [
      ["16–18 yosh", "36 soatdan ko'p emas", "Cheklangan, jinsga qarab"],
      ["15–16 yosh", "24 soatdan ko'p emas", "Sezilarli cheklangan"],
      ["O'qish bilan birga (14 yoshdan)", "Yanada qisqartirilgan", "Eng kam me'yorda"]
    ]
  ));

  c.push(H2("12.3. Nogironlar mehnatini tashkil etish"));
  c.push(P("Nogironligi bo'lgan shaxslarni ishga joylashtirish va ular uchun maxsus mehnat sharoitlarini yaratish davlat siyosatining muhim yo'nalishlaridan biridir. Nogironlar uchun ish o'rinlari ularning salomatlik holati va individual reabilitatsiya dasturiga muvofiq moslashtiriladi. Ularga qulay ish vaqti rejimi, qo'shimcha ta'til va boshqa imtiyozlar beriladi."));
  c.push(P("Ish beruvchilar belgilangan kvota doirasida nogironlar uchun ish o'rinlari yaratishlari yoki ajratishlari lozim. Nogironlarni ular uchun tibbiy ko'rsatmalarga zid bo'lgan sharoitlarda ishlatish taqiqlanadi. Ish o'rni nogironning imkoniyatlariga moslab jihozlanadi, zarur bo'lganda maxsus texnik vositalar bilan ta'minlanadi."));

  c.push(H2("12.4. Majburiy tibbiy ko'riklar"));
  c.push(P("Ayrim toifadagi xodimlar majburiy tibbiy ko'rikdan o'tkaziladi. Tibbiy ko'riklar dastlabki (ishga kirishdan oldin) va davriy (ish jarayonida muntazam) turlarga bo'linadi. Ularning maqsadi — xodimning salomatligi ishga mosligini aniqlash, kasbiy kasalliklarni erta bosqichda aniqlash va oldini olishdan iborat."));
  c.push(CAP("12.3-jadval. Tibbiy ko'rik turlari va maqsadi"));
  c.push(table(
    [2600, 7038],
    ["Ko'rik turi", "Maqsadi va o'tkazilishi"],
    [
      ["Dastlabki", "Ishga kirishda salomatlik ish sharoitiga mosligini aniqlash"],
      ["Davriy", "Ish jarayonida muntazam — kasbiy kasalliklarni erta aniqlash"],
      ["Navbatdan tashqari", "Xodim iltimosiga yoki tibbiy ko'rsatmaga ko'ra"],
      ["Smenadan oldingi/keyingi", "Ba'zi kasblarda (haydovchilar) — holatni tekshirish"]
    ]
  ));
  c.push(P("Tibbiy ko'rikdan o'tmagan yoki tibbiy ko'rsatmalarga ko'ra ishga yaroqsiz deb topilgan xodim tegishli ishga qo'yilmaydi. Bu talab xodim salomatligini himoya qilish bilan birga, boshqa xodimlar va atrofdagilar xavfsizligini ham ta'minlaydi (masalan, transport haydovchilari uchun)."));

  c.push(H3("Bob bo'yicha asosiy xulosalar"));
  c.push(
    BUL("Ayollar mehnati fiziologik xususiyatlari sababli alohida muhofaza qilinadi;"),
    BUL("Homilador ayollarga nisbatan qattiqroq himoya choralari qo'llaniladi;"),
    BUL("O'smirlar og'ir va zararli ishlarga jalb qilinmaydi, ular qisqartirilgan vaqt ishlaydi;"),
    BUL("Nogironlar uchun ish o'rinlari moslashtiriladi va imtiyozlar beriladi;"),
    BUL("Ayrim toifalar majburiy tibbiy ko'rikdan o'tkaziladi.")
  );
  c.push(PB());
  return c;
};
