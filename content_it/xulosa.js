module.exports = (L) => {
  const { H1, H2, P, NUM, CAP, table } = L;
  const c = [];

  /* ===== XULOSA ===== */
  c.push(H1("XULOSA"));
  c.push(P("Ushbu o'quv-uslubiy qo'llanmada axborot texnologiyalarining nazariy asoslari, kompyuterning apparat va dasturiy ta'minoti, operatsion tizimlar, amaliy dasturlar, ma'lumotlar bazasi, kompyuter tarmoqlari, internet, axborot xavfsizligi, algoritmlash hamda zamonaviy raqamli texnologiyalar batafsil yoritildi. Bayon etilgan materiallar zamonaviy axborot texnologiyalari sohasining asosiy yo'nalishlarini qamrab oladi."));
  c.push(P("Qo'llanmani o'rganish jarayonida quyidagi asosiy xulosalarga kelish mumkin. Birinchidan, axborot texnologiyalari zamonaviy jamiyatning barcha sohalariga chuqur kirib borgan va ularsiz hayotni tasavvur qilib bo'lmaydi. Ikkinchidan, kompyuterdan samarali foydalanish uchun uning apparat va dasturiy ta'minoti tuzilishini bilish zarur. Uchinchidan, axborot xavfsizligi qoidalariga rioya qilish har bir foydalanuvchi uchun majburiy talabdir."));
  c.push(P("Axborot texnologiyalari juda tez rivojlanayotgan soha hisoblanadi. Sun'iy intellekt, bulutli texnologiyalar, katta ma'lumotlar va buyumlar interneti kabi yangi yo'nalishlar hayotimizni tubdan o'zgartirmoqda. Shu sababli bu sohadagi bilimlarni doimiy yangilab borish, yangi texnologiyalarni o'rganish va ularni amaliyotda qo'llash muhim ahamiyatga ega."));
  c.push(P("Xulosa qilib aytganda, axborot texnologiyalari bo'yicha bilim va ko'nikmalar zamonaviy mutaxassisning ajralmas fazilatiga aylandi. Ushbu qo'llanmada bayon etilgan bilimlar o'quvchiga raqamli dunyoda ishonchli qadam tashlash, texnologiyalardan samarali va xavfsiz foydalanish imkonini beradi."));

  /* ===== ATAMALAR LUG'ATI ===== */
  c.push(H1("ATAMALAR LUG'ATI"));
  c.push(P("Quyida qo'llanmada uchraydigan asosiy atamalar va ularning qisqacha izohi alifbo tartibida keltirilgan."));
  c.push(CAP("Asosiy atamalar va tushunchalar lug'ati"));
  c.push(table(
    [2600, 7038],
    ["Atama", "Izohi"],
    [
      ["Algoritm", "Masalani yechish uchun aniq amallar ketma-ketligi"],
      ["Apparat ta'minoti", "Kompyuterning fizik qismlari (hardware)"],
      ["Baza (ma'lumotlar)", "Tartibli, o'zaro bog'liq ma'lumotlar to'plami"],
      ["Bayt", "Axborot o'lchov birligi (8 bit)"],
      ["Brauzer", "Veb-sahifalarni ko'rish dasturi"],
      ["Bulutli texnologiya", "Internet orqali resurslardan foydalanish"],
      ["Dasturiy ta'minot", "Kompyuterni boshqaruvchi dasturlar (software)"],
      ["Fayl", "Nom bilan saqlanadigan ma'lumotlar to'plami"],
      ["Internet", "Global kompyuter tarmog'i"],
      ["IP-manzil", "Tarmoqdagi qurilmaning yagona raqamli manzili"],
      ["Operatsion tizim", "Kompyuter resurslarini boshqaruvchi asosiy dastur"],
      ["Protsessor", "Ma'lumotlarni qayta ishlovchi asosiy qurilma (CPU)"],
      ["Sun'iy intellekt", "Kompyuterning aqliy vazifalarni bajarishi"],
      ["Tarmoq", "O'zaro bog'langan kompyuterlar majmui"],
      ["Virus", "Zararli, o'zini nusxalovchi dastur"]
    ]
  ));

  /* ===== FOYDALANILGAN ADABIYOTLAR ===== */
  c.push(H1("FOYDALANILGAN ADABIYOTLAR"));
  c.push(P("Ushbu qo'llanmani tayyorlashda axborot texnologiyalari sohasidagi o'quv adabiyotlari va uslubiy manbalardan foydalanildi. Chuqurroq o'rganish uchun quyidagi manba turlariga murojaat qilish tavsiya etiladi:"));
  L.startList();
  c.push(
    NUM("Axborot texnologiyalari bo'yicha o'quv qo'llanmalar va darsliklar."),
    NUM("Informatika va hisoblash texnikasi asoslari bo'yicha adabiyotlar."),
    NUM("Operatsion tizimlar va amaliy dasturlar bo'yicha qo'llanmalar."),
    NUM("Ma'lumotlar bazasi va SQL bo'yicha o'quv materiallari."),
    NUM("Kompyuter tarmoqlari va internet texnologiyalari bo'yicha adabiyotlar."),
    NUM("Axborot xavfsizligi bo'yicha uslubiy qo'llanmalar."),
    NUM("Algoritmlash va dasturlash asoslari bo'yicha darsliklar."),
    NUM("Zamonaviy raqamli texnologiyalar (AI, bulut, IoT) bo'yicha manbalar."),
    NUM("O'zbekiston Respublikasining «Axborotlashtirish to'g'risida»gi qonuni."),
    NUM("O'zbekiston Respublikasining «Elektron hujjat aylanishi to'g'risida»gi qonuni."),
    NUM("Elektron ta'lim resurslari va rasmiy hujjatlar.")
  );
  c.push(P("Eslatma: axborot texnologiyalari tez rivojlanayotgani sababli manbalardan foydalanishda ularning eng so'nggi nashrini tanlash tavsiya etiladi."));

  return c;
};
