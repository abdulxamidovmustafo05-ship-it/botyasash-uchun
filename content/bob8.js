module.exports = (L) => {
  const { H1, H2, H3, P, BUL, NUM, CAP, table, PB } = L;
  const c = [];

  c.push(H1("8-BOB. ELEKTR XAVFSIZLIGI"));

  c.push(H2("8.1. Elektr tokining inson organizmiga ta'siri"));
  c.push(P("Elektr toki inson organizmiga ta'sir qilganda uni jiddiy jarohatlashi yoki halok qilishi mumkin. Elektr toki xavfining o'ziga xosligi shundaki, u ko'zga ko'rinmaydi, hidi va tovushi yo'q, shu sababli xodim xavfni oldindan sezmaydi. Elektr toki organizmga issiqlik, kimyoviy va biologik ta'sir ko'rsatadi."));
  c.push(P("Elektr toki inson tanasidan o'tganda ikki xil jarohat keltirib chiqaradi: elektr jarohatlari (kuyish, elektr belgilari, terining metallashuvi) va elektr zarbasi (mushaklar tortishishi, nafas olish va yurak faoliyatining buzilishi). Elektr zarbasi eng xavfli hisoblanadi, chunki u yurak va nafas olishning to'xtashiga olib kelishi mumkin."));
  c.push(P("Elektr tokining ta'sir kuchi bir necha omilga bog'liq: tok kuchiga, kuchlanishga, ta'sir vaqtiga, tokning yo'nalishiga, inson tanasining qarshiligiga va organizmning individual xususiyatlariga. Bularning ichida tok kuchi hal qiluvchi ahamiyatga ega. Quyidagi jadvalda o'zgaruvchan tokning turli qiymatlarida uning inson organizmiga ta'siri keltirilgan."));
  c.push(CAP("8.1-jadval. O'zgaruvchan tokning inson organizmiga ta'siri"));
  c.push(table(
    [2600, 7038],
    ["Tok kuchi, mA", "Inson organizmiga ta'siri"],
    [
      ["0,6–1,5", "Sezila boshlaydi, barmoqlarda yengil qaltirash"],
      ["2–3", "Barmoqlarda kuchli qaltirash"],
      ["5–7", "Qo'lda tirishish (spazm), og'riq"],
      ["8–10", "Qo'lni o'tkazgichdan uzib olish qiyinlashadi (qo'yib yubormaydigan tok)"],
      ["20–25", "Qo'llar falajlanadi, nafas olish qiyinlashadi"],
      ["50–80", "Nafas olish falaji, yurak faoliyati buziladi"],
      ["100 va undan yuqori", "Yurak titrashi (fibrillyatsiya), o'lim xavfi (halok qiluvchi tok)"]
    ]
  ));
  c.push(P("Tajribalar shuni ko'rsatadiki, 50 mA dan yuqori tok inson uchun xavfli, 100 mA esa halokatli hisoblanadi. Xavfsiz kuchlanish quruq va xavfsiz sharoitda 42 V, ayniqsa xavfli sharoitda esa 12 V deb qabul qilingan."));

  c.push(H2("8.2. Xonalarning elektr xavfi bo'yicha tasnifi"));
  c.push(P("Elektr xavfi darajasi bo'yicha barcha xonalar uch toifaga bo'linadi. Bu tasnif xonadagi sharoitlarga — namlik, harorat, o'tkazuvchi chang, yer va boshqalarga bog'liq. Xona toifasi qanchalik xavfli bo'lsa, elektr uskunalariga va xavfsizlik choralariga qo'yiladigan talablar shunchalik qattiqroq bo'ladi."));
  c.push(CAP("8.2-jadval. Xonalarning elektr xavfi bo'yicha tasnifi"));
  c.push(table(
    [3000, 6638],
    ["Xona toifasi", "Xususiyatlari"],
    [
      ["Xavfi oshirilmagan xonalar", "Quruq, normal harorat, izolyatsiyalangan pol, yuqori xavf omillari yo'q"],
      ["Xavfi oshirilgan xonalar", "Namlik 75% dan yuqori, o'tkazuvchi chang, o'tkazuvchi pol, harorat +35 °C dan yuqori"],
      ["Ayniqsa xavfli xonalar", "Namlik 100% ga yaqin, kimyoviy faol muhit, bir vaqtda ikki va undan ortiq xavf omili"]
    ]
  ));

  c.push(H2("8.3. Elektr xavfidan himoyalanish choralari"));
  c.push(P("Elektr tokidan himoyalanish uchun tashkiliy va texnik chora-tadbirlar majmuidan foydalaniladi. Asosiy texnik himoya choralari quyidagilardan iborat:"));
  L.startList();
  c.push(
    NUM("himoya uchun yerga ulash (zazemleniye) — uskuna korpusini yer bilan ulash;"),
    NUM("nolga ulash (zanuleniye) — korpusni nol o'tkazgich bilan ulash;"),
    NUM("himoya uzilishi (avtomatik o'chirish) qurilmalari;"),
    NUM("past (xavfsiz) kuchlanishdan foydalanish;"),
    NUM("elektr izolyatsiyasi va uni muntazam tekshirish;"),
    NUM("to'suvchi vositalar va bloklashlar;"),
    NUM("ogohlantiruvchi signal va belgilar.")
  );
  c.push(P("Himoya uchun yerga ulash — elektr uskunasining tok o'tkazmaydigan metall qismlarini (korpus, karkas) yer bilan qasddan elektr ulash. Izolyatsiya buzilib, korpusga tok o'tsa, yerga ulash tokning katta qismini yerga yo'naltiradi va korpusdagi kuchlanishni xavfsiz darajaga tushiradi. Bu esa xodim korpusga tegib qolganda elektr zarbasi olmasligini ta'minlaydi."));

  c.push(H2("8.4. Elektr xavfsizligi bo'yicha malaka guruhlari"));
  c.push(P("Elektr uskunalari bilan ishlaydigan xodimlar elektr xavfsizligi bo'yicha maxsus bilim va malakaga ega bo'lishlari shart. Ularning tayyorgarlik darajasiga qarab beshta malaka guruhi belgilanadi. Guruh qanchalik yuqori bo'lsa, xodimga ruxsat etilgan ish murakkabligi va mas'uliyati shunchalik yuqori bo'ladi."));
  c.push(CAP("8.3-jadval. Elektr xavfsizligi bo'yicha malaka guruhlari"));
  c.push(table(
    [1400, 8238],
    ["Guruh", "Talablar va ruxsatlar"],
    [
      ["I guruh", "Elektrotexnik bo'lmagan xodimlar; elektr xavfi haqida umumiy tushuncha"],
      ["II guruh", "Elektr uskunalari bilan ishlovchilar; xavf haqida aniq tasavvur, yordam ko'nikmalari"],
      ["III guruh", "Elektr qurilmalariga mustaqil xizmat ko'rsatish (1000 V gacha)"],
      ["IV guruh", "Elektr xo'jaligi uchun mas'ul; ishlarni tashkil etish va nazorat qilish"],
      ["V guruh", "Har qanday kuchlanishdagi qurilmalar; eng yuqori mas'uliyat va bilim"]
    ]
  ));

  c.push(H2("8.5. Statik elektr va chaqmoqdan himoyalanish"));
  c.push(P("Statik elektr — dielektrik materiallarning ishqalanishi natijasida yuzaga keladigan elektr zaryadlari. Statik elektr uchqun hosil qilib, yong'in va portlashga sabab bo'lishi mumkin, ayniqsa yonuvchan gaz va changlar mavjud joylarda. Statik elektrga qarshi kurashda yerga ulash, havoni namlash, antistatik qoplamalar va ionizatorlardan foydalaniladi."));
  c.push(P("Chaqmoq — atmosfera elektri razryadi bo'lib, binolar, inshootlar va odamlar uchun jiddiy xavf tug'diradi. Chaqmoqdan himoyalanish uchun binolarga chaqmoq qaytargichlar (molniyaotvod) o'rnatiladi. Ular chaqmoq razryadini o'ziga qabul qilib, uni xavfsiz tarzda yerga o'tkazadi."));

  c.push(H3("Bob bo'yicha asosiy xulosalar"));
  c.push(
    BUL("Elektr toki ko'zga ko'rinmas, ammo o'ta xavfli omildir;"),
    BUL("100 mA va undan yuqori tok inson uchun halokatli hisoblanadi;"),
    BUL("Xonalar elektr xavfi bo'yicha uch toifaga bo'linadi;"),
    BUL("Asosiy himoya choralari — yerga ulash, nolga ulash va himoya uzilishi;"),
    BUL("Elektr xodimlari beshta malaka guruhiga ajratiladi.")
  );
  c.push(PB());
  return c;
};
