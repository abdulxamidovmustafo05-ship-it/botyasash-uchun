module.exports = (L) => {
  const { H1, H2, H3, P, BUL, NUM, CAP, table, PB } = L;
  const c = [];

  c.push(H1("15-BOB. ALOHIDA SOHALARDA MEHNAT XAVFSIZLIGI"));

  c.push(P("Har bir ishlab chiqarish sohasi o'ziga xos xavf va zararli omillarga ega bo'lib, ular sohaning texnologik xususiyatlaridan kelib chiqadi. Shu sababli umumiy talablar bilan bir qatorda har bir soha uchun maxsus xavfsizlik qoidalari ishlab chiqiladi. Ushbu bobda eng ko'p tarqalgan sohalardagi xavfsizlik masalalari ko'rib chiqiladi."));

  c.push(H2("15.1. Qurilishda mehnat xavfsizligi"));
  c.push(P("Qurilish jarohatlanish darajasi eng yuqori bo'lgan sohalardan biridir. Bu yerdagi asosiy xavflar balandlikdan yiqilish, predmetlarning tushishi, qurilma va inshootlarning qulashi, yer qazish ishlaridagi ko'chkilar, yuk ko'tarish mexanizmlari bilan bog'liq baxtsiz hodisalar bilan bog'liq. Qurilishda xavfsizlikni ta'minlashning asosiy choralari quyidagilardan iborat:"));
  c.push(
    BUL("balandlikdagi ishlarda xavfsizlik kamari va to'siqlardan foydalanish;"),
    BUL("qurilish maydonini to'g'ri tashkil etish va xavfli zonalarni belgilash;"),
    BUL("yuk ko'tarish mexanizmlarini xavfsiz ekspluatatsiya qilish;"),
    BUL("kotlovan va transheyalarni mustahkamlash (kreplenie);"),
    BUL("qulash mumkin bo'lgan zonalarga kirishni taqiqlash;"),
    BUL("kaska va boshqa SHV lardan majburiy foydalanish.")
  );
  c.push(P("Balandlikdagi ishlar (1,3 metrdan yuqori) alohida xavf tug'diradi va ular uchun maxsus talablar belgilangan. Bunday ishlarga faqat maxsus tayyorgarlikdan o'tgan, tibbiy ko'rikdan o'tgan va 18 yoshga to'lgan xodimlar qo'yiladi. Balandlikdagi ishlarda xavfsizlik kamari mustahkam konstruksiyaga biriktiriladi."));

  c.push(H2("15.2. Transportda va yuk ishlarida xavfsizlik"));
  c.push(P("Transport vositalari va yuk ortish-tushirish ishlari yuqori xavf manbaidir. Yo'l-transport hodisalari, yuklarning ag'darilishi, transport vositasi ostida qolish kabi hodisalar ko'p uchraydi. Yuk ortish-tushirish ishlarida mexanizatsiyadan keng foydalanish, yuklarni to'g'ri bog'lash va joylashtirish, transport vositalari harakati yo'nalishlarini belgilash muhim ahamiyatga ega."));
  c.push(P("Qo'lda yuk ko'tarish va tashishda erkaklar uchun ham me'yorlar belgilangan. Yuk og'ir bo'lganda ko'tarishning to'g'ri texnikasiga (tizzani bukib, belni to'g'ri tutgan holda ko'tarish) rioya qilish umurtqa pog'onasi shikastlanishining oldini oladi. Og'ir yuklar bir necha kishi tomonidan yoki mexanizmlar yordamida ko'tariladi."));
  c.push(CAP("15.1-jadval. Erkaklar uchun qo'lda yuk ko'tarish me'yorlari"));
  c.push(table(
    [6538, 3100],
    ["Ish turi", "Ruxsat etilgan yuk, kg"],
    [
      ["Doimiy ravishda yuk ko'tarish va tashish", "15 gacha"],
      ["Boshqa ish bilan navbatlashib (soatiga 2 martagacha)", "30 gacha"],
      ["18–20 yoshli o'smir erkaklar uchun", "Kamaytirilgan me'yor"]
    ]
  ));

  c.push(H2("15.3. Qishloq xo'jaligida xavfsizlik"));
  c.push(P("Qishloq xo'jaligida asosiy xavflar traktor va qishloq xo'jaligi mashinalari bilan ishlash, pestitsid va agrokimyoviy moddalar bilan muomala, chorvachilikdagi xavflar bilan bog'liq. Mashinalar bilan ishlashda ularning harakatlanuvchi qismlari, ag'darilib ketish xavfi katta ahamiyatga ega. Pestitsidlar bilan ishlashda esa zaharlanishning oldini olish uchun maxsus SHV va gigiyena qoidalariga qat'iy rioya qilinadi."));
  c.push(P("Kimyoviy o'g'itlar va o'simliklarni himoya qilish vositalari bilan ishlaydigan xodimlar maxsus o'qitishdan o'tadi, tibbiy ko'rik bilan qamrab olinadi va shaxsiy himoya vositalari bilan ta'minlanadi. Bu moddalarni saqlash, tashish va qo'llash belgilangan qat'iy qoidalar asosida amalga oshiriladi."));

  c.push(H2("15.4. Kimyo va neft-gaz sanoatida xavfsizlik"));
  c.push(P("Kimyo va neft-gaz sanoati portlash, yong'in, zaharli moddalar bilan zaharlanish va kimyoviy kuyishlar xavfi yuqori bo'lgan sohalardir. Bu sohalarda texnologik jarayonlar germetik (yopiq) tizimlarda olib boriladi, avtomatlashtirish keng qo'llaniladi va havo muhitining doimiy nazorati o'rnatiladi. Portlash-yong'in xavfli zonalarda maxsus (portlashdan himoyalangan) elektr uskunalari ishlatiladi."));
  c.push(P("Kimyoviy moddalar bilan ishlashda ularning xavflilik xususiyatlarini bilish hal qiluvchi ahamiyatga ega. Har bir kimyoviy modda uchun xavfsizlik pasporti tuziladi, unda moddaning xossalari, xavfi, saqlash va ishlatish qoidalari, zaharlanishda birinchi yordam choralari ko'rsatiladi. Zaharli moddalar maxsus belgilar bilan belgilanadi."));

  c.push(H2("15.5. Payvandlash ishlarida xavfsizlik"));
  c.push(P("Payvandlash ishlari bir necha xavfli omilni birlashtiradi: yuqori harorat va ochiq olov, yorqin nur (ultrabinafsha va infraqizil), zararli gazlar va aerozollar, elektr toki (elektr payvandlashda), portlash xavfi (gaz payvandlashda). Payvandlovchi bu omillarning barchasidan himoyalanishi kerak."));
  c.push(P("Payvandlash ishlarida quyidagi himoya choralari qo'llaniladi: yuz va ko'zni himoya qiluvchi maxsus qalqon yoki niqob (yorug'lik filtri bilan); jarima olovga chidamli kiyim va kraga qo'lqoplar; ish joyida mahalliy so'ruvchi ventilyatsiya; elektr xavfsizligi choralari; gaz ballonlarini to'g'ri saqlash va ishlatish. Payvandlash ishlari yong'in xavfli joylarda maxsus ruxsatnoma (naryad-dopusk) asosida o'tkaziladi."));

  c.push(H3("Bob bo'yicha asosiy xulosalar"));
  c.push(
    BUL("Har bir soha o'ziga xos xavflarga va maxsus qoidalarga ega;"),
    BUL("Qurilishda asosiy xavf — balandlikdan yiqilish va predmet tushishi;"),
    BUL("Transportda yuklarni to'g'ri ko'tarish va bog'lash muhim;"),
    BUL("Kimyo sanoatida germetiklik, avtomatlashtirish va havo nazorati qo'llaniladi;"),
    BUL("Payvandlash ishlari bir necha xavfli omilni birlashtiradi va maxsus himoyani talab qiladi.")
  );
  c.push(PB());
  return c;
};
