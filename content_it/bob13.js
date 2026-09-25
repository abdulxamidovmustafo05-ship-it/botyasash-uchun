module.exports = (L) => {
  const { H1, H2, H3, P, BUL, CAP, table, PB } = L;
  const c = [];

  c.push(H1("13-BOB. BULUTLI TEXNOLOGIYALAR VA ZAMONAVIY TENDENSIYALAR"));

  c.push(H2("13.1. Bulutli texnologiyalar"));
  c.push(P("Bulutli texnologiyalar (cloud computing) — internet orqali masofadan turib hisoblash resurslari, saqlash joyi va dasturlardan foydalanish imkonini beruvchi texnologiyadir. «Bulut» — bu internetdagi serverlar majmui bo'lib, foydalanuvchi o'z ma'lumotlarini shu serverlarda saqlaydi va ularga istalgan qurilmadan kirishi mumkin. Bulutli xizmatlarga Google Drive, Dropbox, OneDrive kabi misollar bor."));
  c.push(P("Bulutli texnologiyalarning asosiy afzalliklari: ma'lumotlarga istalgan joydan kirish; qurilmaning xotirasini tejash; ma'lumotlarni yo'qotmaslik (avtomatik zaxiralash); birgalikda ishlash imkoniyati; xarajatlarni kamaytirish. Bulutli xizmatlar turli xizmat modellarida taqdim etiladi."));
  c.push(CAP("13.1-jadval. Bulutli xizmat modellari"));
  c.push(table(
    [1600, 3400, 4638],
    ["Model", "To'liq nomi", "Nima taqdim etadi"],
    [
      ["IaaS", "Infrastructure as a Service", "Infratuzilma: serverlar, xotira, tarmoq"],
      ["PaaS", "Platform as a Service", "Dastur ishlab chiqish platformasi"],
      ["SaaS", "Software as a Service", "Tayyor dasturlar (Gmail, Office 365)"]
    ]
  ));

  c.push(H2("13.2. Sun'iy intellekt"));
  c.push(P("Sun'iy intellekt (SI yoki AI — Artificial Intelligence) — kompyuter tizimlarining inson aqliga xos vazifalarni (o'rganish, tahlil qilish, qaror qabul qilish) bajarish qobiliyatidir. Sun'iy intellekt bugungi kunda tez rivojlanayotgan sohalardan biri bo'lib, tibbiyot, transport, ta'lim, biznes va boshqa ko'plab sohalarda qo'llanilmoqda."));
  c.push(P("Sun'iy intellektning muhim yo'nalishi — mashinaviy o'rganish (machine learning), bunda kompyuter ma'lumotlar asosida o'zi o'rganadi va takomillashadi. Neyron tarmoqlar inson miyasi tuzilishiga taqlid qilib ishlaydi. SI misollariga ovozli yordamchilar, tarjima tizimlari, tavsiya tizimlari va suhbatdosh dasturlar (chatbotlar) kiradi."));

  c.push(H2("13.3. Katta ma'lumotlar (Big Data)"));
  c.push(P("Katta ma'lumotlar (Big Data) — an'anaviy usullar bilan qayta ishlab bo'lmaydigan darajada katta hajmdagi, turli xil va tez o'zgaruvchan ma'lumotlar to'plamidir. Har kuni internetda, ijtimoiy tarmoqlarda va turli qurilmalarda ulkan hajmda ma'lumot yaratiladi. Bu ma'lumotlarni tahlil qilish qimmatli xulosalar chiqarish imkonini beradi."));
  c.push(P("Katta ma'lumotlar uch asosiy xususiyat («3V») bilan tavsiflanadi: hajm (Volume — ma'lumot juda katta), tezlik (Velocity — ma'lumot tez yaratiladi) va xilma-xillik (Variety — ma'lumot turli formatlarda). Katta ma'lumotlar tahlili biznes, tibbiyot va fanda muhim ahamiyatga ega."));

  c.push(H2("13.4. Buyumlar interneti (IoT)"));
  c.push(P("Buyumlar interneti (IoT — Internet of Things) — kundalik buyumlar va qurilmalarning internetga ulanib, bir-biri bilan ma'lumot almashishi texnologiyasidir. «Aqlli» uy jihozlari, sensorlar, soatlar va boshqa qurilmalar internetga ulanib, masofadan boshqarilishi va nazorat qilinishi mumkin. IoT hayotni qulayroq va samaraliroq qiladi."));
  c.push(P("IoT misollariga aqlli uy tizimlari (masofadan yoritish, isitishni boshqarish), aqlli soatlar (salomatlik nazorati), aqlli shaharlar (transport, energiya boshqaruvi) kiradi. IoT tez rivojlanayotgan soha bo'lib, kelajakda milliardlab qurilmalar internetga ulanishi kutilmoqda."));
  c.push(CAP("13.2-jadval. Zamonaviy raqamli texnologiyalar"));
  c.push(table(
    [2800, 6838],
    ["Texnologiya", "Qisqacha mazmuni"],
    [
      ["Bulutli texnologiya", "Internet orqali resurslardan foydalanish"],
      ["Sun'iy intellekt", "Kompyuterning aqliy vazifalarni bajarishi"],
      ["Katta ma'lumotlar", "Ulkan hajmdagi ma'lumotlarni tahlil qilish"],
      ["Buyumlar interneti", "Qurilmalarning internetga ulanishi"],
      ["Blokcheyn", "Xavfsiz, taqsimlangan ma'lumotlar reyestri"],
      ["Virtual va to'ldirilgan reallik", "VR/AR — raqamli muhitni yaratish"]
    ]
  ));

  c.push(H2("13.5. Blokcheyn va virtual reallik"));
  c.push(P("Blokcheyn (blockchain) — ma'lumotlarni bloklar zanjiri ko'rinishida saqlaydigan, taqsimlangan va xavfsiz texnologiyadir. Har bir blok o'zidan oldingi blok bilan bog'langan bo'lib, ma'lumotni o'zgartirish deyarli imkonsiz. Blokcheyn kriptovalyutalar (masalan, Bitkoin) asosini tashkil etadi, shuningdek moliyaviy operatsiyalar, hujjat aylanishi va ta'minot zanjirlarida qo'llaniladi."));
  c.push(P("Virtual reallik (VR — Virtual Reality) foydalanuvchini to'liq raqamli, sun'iy muhitga olib kiradi. To'ldirilgan reallik (AR — Augmented Reality) esa real dunyoga raqamli obyektlarni qo'shadi. Bu texnologiyalar o'yin, ta'lim, tibbiyot, loyihalash va boshqa sohalarda tobora keng qo'llanilmoqda. Ular inson va kompyuter o'rtasidagi o'zaro aloqaning yangi shakllarini yaratadi."));

  c.push(H2("13.6. Raqamli texnologiyalarning kelajagi"));
  c.push(P("Axborot texnologiyalari juda tez sur'atlarda rivojlanmoqda. Bir necha o'n yil oldin fantastik ko'ringan g'oyalar bugun kundalik hayotimizning bir qismiga aylandi. Sun'iy intellekt, robototexnika, virtual reallik va boshqa texnologiyalar kelajakda yanada takomillashishi va yangi imkoniyatlar ochishi kutilmoqda."));
  c.push(P("Shu bilan birga, yangi texnologiyalar yangi masalalarni ham keltirib chiqaradi: shaxsiy ma'lumotlar maxfiyligi, kiberxavfsizlik, ayrim kasblarning avtomatlashuvi va raqamli tengsizlik. Shu sababli texnologiyalarni rivojlantirish bilan bir qatorda, ularni oqilona va axloqiy tarzda qo'llash masalalariga ham e'tibor berish zarur. Kelajak mutaxassislari nafaqat texnologiyalarni bilishi, balki ularni jamiyat manfaati uchun ishlatishi lozim."));

  c.push(H3("Bob bo'yicha asosiy xulosalar"));
  c.push(
    BUL("Bulutli texnologiya internet orqali resurslardan foydalanish imkonini beradi;"),
    BUL("Xizmat modellari — IaaS, PaaS va SaaS;"),
    BUL("Sun'iy intellekt inson aqliga xos vazifalarni bajaradi;"),
    BUL("Katta ma'lumotlar «3V» (hajm, tezlik, xilma-xillik) bilan tavsiflanadi;"),
    BUL("IoT kundalik qurilmalarni internetga ulaydi.")
  );
  c.push(PB());
  return c;
};
