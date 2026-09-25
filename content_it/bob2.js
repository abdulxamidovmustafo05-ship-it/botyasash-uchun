module.exports = (L) => {
  const { H1, H2, H3, P, BUL, CAP, table, PB } = L;
  const c = [];

  c.push(H1("2-BOB. KOMPYUTERNING APPARAT TA'MINOTI"));

  c.push(H2("2.1. Kompyuterning umumiy tuzilishi"));
  c.push(P("Zamonaviy kompyuterlar juda murakkab qurilmalar bo'lib, ular minglab elektron komponentlardan tashkil topgan. Biroq ularning umumiy ishlash tamoyilini tushunish uchun har bir mayda detalning ishini bilish shart emas. Kompyuterni asosiy qurilmalar majmui sifatida ko'rish uning qanday ishlashini tushunishga yordam beradi."));
  c.push(P("Kompyuter — axborotni avtomatik ravishda qayta ishlash uchun mo'ljallangan elektron qurilmadir. Zamonaviy kompyuter tuzilishi amerikalik olim Jon fon Neyman tomonidan taklif etilgan tamoyillarga asoslanadi. Ushbu tamoyilga ko'ra kompyuter to'rtta asosiy qurilmadan iborat: protsessor, xotira, kirish qurilmalari va chiqish qurilmalari."));
  c.push(P("Apparat ta'minoti (hardware) — kompyuterning ko'rish va ushlash mumkin bo'lgan barcha fizik qismlaridir. Barcha qurilmalar bir-biri bilan ma'lumot almashinadi va yagona tizim sifatida ishlaydi. Qurilmalar ish o'rniga qarab ichki (tizim bloki ichida) va tashqi (periferiya) qurilmalarga bo'linadi."));
  c.push(CAP("2.1-jadval. Kompyuterning asosiy qurilmalari"));
  c.push(table(
    [2900, 6738],
    ["Qurilma", "Vazifasi"],
    [
      ["Protsessor (CPU)", "Ma'lumotlarni qayta ishlaydi va boshqaradi — kompyuterning «miyasi»"],
      ["Operativ xotira (RAM)", "Ishlayotgan dastur va ma'lumotlarni vaqtincha saqlaydi"],
      ["Doimiy xotira (ROM/disk)", "Ma'lumotlarni uzoq muddat saqlaydi"],
      ["Kirish qurilmalari", "Ma'lumotni kompyuterga kiritadi (klaviatura, sichqoncha)"],
      ["Chiqish qurilmalari", "Natijani foydalanuvchiga taqdim etadi (monitor, printer)"],
      ["Tizim platasi (ona plata)", "Barcha qurilmalarni o'zaro bog'laydi"]
    ]
  ));

  c.push(H2("2.2. Protsessor"));
  c.push(P("Protsessor (CPU — Central Processing Unit, markaziy protsessor) — kompyuterning asosiy qurilmasi bo'lib, barcha hisoblash va boshqaruv amallarini bajaradi. Protsessor ikki asosiy qismdan iborat: arifmetik-mantiqiy qurilma (hisoblash amallarini bajaradi) va boshqaruv qurilmasi (amallarni muvofiqlashtiradi). Protsessorning ishlash tezligi taktli chastota bilan o'lchanadi (gigagerts, GHz)."));
  c.push(P("Zamonaviy protsessorlar ko'p yadroli (multi-core) bo'lib, bir vaqtning o'zida bir necha amalni parallel bajarishi mumkin. Protsessorning asosiy ko'rsatkichlari — yadrolar soni, taktli chastota, kesh xotira hajmi va texnologik jarayon (nanometrlarda). Bu ko'rsatkichlar kompyuterning umumiy unumdorligini belgilaydi."));

  c.push(H2("2.3. Xotira turlari"));
  c.push(P("Kompyuter xotirasi ma'lumotlarni saqlash uchun mo'ljallangan. Xotira ichki (protsessor bilan bevosita ishlaydigan) va tashqi (uzoq muddatli saqlash) turlariga bo'linadi. Operativ xotira (RAM) tez, ammo o'zgaruvchan — kompyuter o'chirilganda undagi ma'lumotlar yo'qoladi. Doimiy xotira (disklar) esa sekinroq, ammo ma'lumotni doimiy saqlaydi."));
  c.push(CAP("2.2-jadval. Xotira turlarining qiyosiy tavsifi"));
  c.push(table(
    [2400, 2400, 2400, 2438],
    ["Xotira turi", "Tezligi", "Hajmi", "O'zgaruvchanligi"],
    [
      ["Registr / kesh", "Eng yuqori", "Juda kichik", "O'zgaruvchan"],
      ["Operativ xotira (RAM)", "Yuqori", "O'rtacha (4–32 GB)", "O'zgaruvchan"],
      ["SSD disk", "O'rtacha-yuqori", "Katta (256 GB–2 TB)", "Doimiy"],
      ["Qattiq disk (HDD)", "O'rtacha", "Juda katta (1–8 TB)", "Doimiy"],
      ["Optik/flesh disk", "Past-o'rtacha", "O'zgaruvchan", "Doimiy"]
    ]
  ));

  c.push(H2("2.4. Kirish va chiqish qurilmalari"));
  c.push(P("Kirish qurilmalari foydalanuvchidan yoki tashqi muhitdan ma'lumotni qabul qilib, kompyuterga uzatadi. Chiqish qurilmalari esa kompyuterda qayta ishlangan natijani foydalanuvchiga tushunarli shaklda taqdim etadi. Ba'zi qurilmalar ham kirish, ham chiqish vazifasini bajaradi (masalan, sensorli ekran, tarmoq kartasi)."));
  c.push(CAP("2.3-jadval. Kirish va chiqish qurilmalari"));
  c.push(table(
    [3200, 3200, 3238],
    ["Kirish qurilmalari", "Chiqish qurilmalari", "Kirish-chiqish (ikki tomonlama)"],
    [
      ["Klaviatura", "Monitor", "Sensorli ekran"],
      ["Sichqoncha", "Printer", "Tarmoq kartasi"],
      ["Skaner", "Karnay (audio)", "Modem"],
      ["Mikrofon", "Proyektor", "Tashqi disk"],
      ["Veb-kamera", "Plotter", "Fleshka (USB)"]
    ]
  ));

  c.push(H2("2.5. Axborot tashuvchilar"));
  c.push(P("Axborot tashuvchilar — ma'lumotlarni saqlash va bir joydan ikkinchi joyga ko'chirish uchun ishlatiladigan qurilmalardir. Tarixan magnit tasmalar, disketalar, optik disklardan foydalanilgan. Bugungi kunda flesh-xotira (USB fleshka, xotira kartalari) va tashqi qattiq disklar keng tarqalgan. Zamonaviy tendensiya — ma'lumotlarni bulutli saqlash xizmatlarida saqlashdir."));
  c.push(P("Axborot tashuvchini tanlashda uning hajmi, ma'lumot o'qish/yozish tezligi, ishonchliligi, narxi va ko'chma bo'lishi hisobga olinadi. Har bir vazifa uchun mos tashuvchi tanlanadi: tez ish uchun SSD, katta arxiv uchun HDD, ko'chirish uchun fleshka yoki bulut."));

  c.push(H2("2.6. Kompyuter turlari"));
  c.push(P("Kompyuterlar hajmi, quvvati va qo'llanish sohasiga qarab turli turlarga bo'linadi. Eng kuchli kompyuterlardan tortib cho'ntak qurilmalarigacha — barchasi bir xil asosiy tamoyil bo'yicha ishlaydi, ammo imkoniyatlari va vazifalari bilan farqlanadi. Kompyuter turini tanlash uni ishlatish maqsadiga bog'liq."));
  c.push(CAP("2.4-jadval. Kompyuter turlari"));
  c.push(table(
    [2800, 6838],
    ["Turi", "Xususiyati va qo'llanilishi"],
    [
      ["Superkompyuter", "Eng katta quvvat; ilmiy hisoblashlar, ob-havo bashorati, tadqiqotlar"],
      ["Server", "Tarmoqqa xizmat ko'rsatadi, ma'lumot va resurslarni taqdim etadi"],
      ["Shaxsiy kompyuter (PC)", "Uy va ofis uchun; kundalik vazifalar"],
      ["Noutbuk (laptop)", "Ko'chma shaxsiy kompyuter, akkumulyatorda ishlaydi"],
      ["Planshet", "Sensorli ekranli ixcham qurilma"],
      ["Smartfon", "Aqlli telefon — kompyuter imkoniyatlariga ega"]
    ]
  ));

  c.push(H3("Bob bo'yicha asosiy xulosalar"));
  c.push(
    BUL("Kompyuter fon Neyman tamoyili asosida to'rt qurilmadan iborat;"),
    BUL("Protsessor (CPU) — barcha hisoblash va boshqaruvni bajaradi;"),
    BUL("RAM tez, ammo o'zgaruvchan; disklar sekin, ammo doimiy saqlaydi;"),
    BUL("Qurilmalar kirish, chiqish va ikki tomonlama turlarga bo'linadi;"),
    BUL("Zamonaviy axborot tashuvchilar — SSD, fleshka va bulutli xizmatlar.")
  );
  c.push(PB());
  return c;
};
