module.exports = (L) => {
  const { H1, H2, H3, P, BUL, CAP, table, PB } = L;
  const c = [];

  c.push(H1("4-BOB. OPERATSION TIZIMLAR"));

  c.push(H2("4.1. Operatsion tizim tushunchasi"));
  c.push(P("Operatsion tizim (OT) — kompyuter resurslarini boshqaruvchi va foydalanuvchi bilan apparat o'rtasida vositachilik qiluvchi asosiy tizimli dasturdir. Kompyuter yoqilganda birinchi bo'lib operatsion tizim ishga tushadi va boshqa barcha dasturlar uning boshqaruvi ostida ishlaydi. Operatsion tizimsiz kompyuterda hech qanday dastur ishlay olmaydi."));
  c.push(P("Operatsion tizimning asosiy vazifalari quyidagilardan iborat: kompyuter qurilmalarini boshqarish; dasturlarni ishga tushirish va ular o'rtasida resurslarni taqsimlash; fayllar va papkalar bilan ishlashni ta'minlash; foydalanuvchi interfeysini taqdim etish; kompyuter xavfsizligini ta'minlash. Bu vazifalar foydalanuvchidan yashiringan holda, avtomatik bajariladi."));

  c.push(H2("4.2. Operatsion tizimlar turlari"));
  c.push(P("Bugungi kunda turli operatsion tizimlar mavjud bo'lib, ular shaxsiy kompyuterlar, serverlar, mobil qurilmalar va boshqa maxsus qurilmalar uchun mo'ljallangan. Har bir operatsion tizim o'ziga xos xususiyatlarga, afzallik va kamchiliklarga ega. Eng keng tarqalgan operatsion tizimlar quyidagi jadvalda keltirilgan."));
  c.push(CAP("4.1-jadval. Keng tarqalgan operatsion tizimlar"));
  c.push(table(
    [2400, 3400, 3838],
    ["Operatsion tizim", "Ishlab chiqaruvchi / turi", "Qo'llanish sohasi"],
    [
      ["Windows", "Microsoft (tijoriy)", "Shaxsiy kompyuterlar, ofis"],
      ["Linux", "Ochiq kodli", "Serverlar, dasturchilar, shaxsiy foydalanish"],
      ["macOS", "Apple (tijoriy)", "Apple kompyuterlari"],
      ["Android", "Google (ochiq kodli)", "Smartfon va planshetlar"],
      ["iOS", "Apple (tijoriy)", "iPhone va iPad qurilmalari"]
    ]
  ));

  c.push(H2("4.3. Fayl tizimi"));
  c.push(P("Fayl tizimi — operatsion tizimning ma'lumotlarni disklarda saqlash, tashkil etish va ularga murojaat qilish usulidir. Ma'lumotlar fayllar ko'rinishida saqlanadi, fayllar esa papkalar (kataloglar) ichida guruhlanadi. Har bir fayl nom va kengaytmaga ega bo'lib, kengaytma faylning turini bildiradi (masalan, .docx — matn hujjati, .jpg — rasm)."));
  c.push(P("Fayllar ustida asosiy amallar: yaratish, nusxa ko'chirish (copy), ko'chirish (move), qayta nomlash (rename), o'chirish (delete) va qidirish. Papkalar daraxtsimon (ierarxik) tuzilishga ega bo'lib, bosh katalogdan tarmoqlanib boradi. To'g'ri tashkil etilgan fayl tizimi ma'lumotlarni tez topish va tartibli saqlash imkonini beradi."));
  c.push(CAP("4.2-jadval. Keng tarqalgan fayl kengaytmalari"));
  c.push(table(
    [2400, 3600, 3638],
    ["Kengaytma", "Fayl turi", "Dastur"],
    [
      [".docx / .doc", "Matn hujjati", "Microsoft Word"],
      [".xlsx / .xls", "Elektron jadval", "Microsoft Excel"],
      [".pptx", "Taqdimot", "PowerPoint"],
      [".pdf", "Portativ hujjat", "Acrobat, brauzer"],
      [".jpg / .png", "Rasm (grafika)", "Grafik muharrirlar"],
      [".mp3 / .mp4", "Audio / video", "Media pleyerlar"],
      [".zip / .rar", "Arxiv (siqilgan)", "Arxivatorlar"],
      [".exe", "Bajariladigan dastur", "Windows"]
    ]
  ));

  c.push(H2("4.4. Foydalanuvchi interfeysi"));
  c.push(P("Foydalanuvchi interfeysi — foydalanuvchi va kompyuter o'rtasidagi muloqot vositasidir. Interfeys ikki asosiy turga bo'linadi: matnli (buyruq satri orqali) va grafik (oyna, tugma, belgi orqali). Grafik interfeys (GUI — Graphical User Interface) foydalanuvchi uchun qulayroq bo'lib, sichqoncha va belgilar orqali boshqariladi. Matnli interfeys (buyruq satri) esa tez va aniq boshqaruv imkonini beradi, asosan mutaxassislar tomonidan ishlatiladi."));
  c.push(P("Zamonaviy operatsion tizimlar asosan grafik interfeysga ega bo'lib, ish stoli, oynalar, menyular, belgilar (ikonkalar) va vazifalar panelidan iborat. Bu elementlar foydalanuvchiga dasturlarni ishga tushirish, fayllar bilan ishlash va tizimni sozlashni osonlashtiradi."));

  c.push(H2("4.5. Kompyuterni ishga tushirish jarayoni"));
  c.push(P("Kompyuter yoqilganda bir necha bosqichdan iborat ishga tushish (yuklash) jarayoni sodir bo'ladi. Avval BIOS (yoki zamonaviy UEFI) dasturi ishga tushib, apparat qurilmalarini tekshiradi. So'ngra operatsion tizim diskdan operativ xotiraga yuklanadi va foydalanuvchi interfeysi paydo bo'ladi. Faqat shundan keyingina foydalanuvchi kompyuter bilan ishlashi mumkin bo'ladi."));
  c.push(P("Operatsion tizimni sozlash (nastroyka) foydalanuvchiga tizimni o'z ehtiyojlariga moslashtirishga imkon beradi. Sozlamalar orqali til, sana va vaqt, ish stoli ko'rinishi, foydalanuvchi hisoblari, tarmoq va xavfsizlik parametrlari o'zgartiriladi. To'g'ri sozlangan tizim qulay va samarali ishlashni ta'minlaydi."));

  c.push(H2("4.6. Mobil operatsion tizimlar"));
  c.push(P("Smartfon va planshetlarning keng tarqalishi bilan mobil operatsion tizimlar alohida ahamiyat kasb etdi. Mobil operatsion tizimlar shaxsiy kompyuter operatsion tizimlaridan farq qiladi: ular sensorli ekran uchun moslashtirilgan, kam energiya sarflaydi va ilovalarni maxsus do'konlar orqali o'rnatadi. Eng keng tarqalgan mobil operatsion tizimlar — Android va iOS."));
  c.push(P("Mobil operatsion tizimlar orqali foydalanuvchi qo'ng'iroq qilish, xabar yuborish, internetdan foydalanish, rasm olish, navigatsiya va minglab boshqa ilovalar bilan ishlashi mumkin. Mobil ilovalar (apps) maxsus ilovalar do'konlari (Google Play, App Store) orqali yuklab olinadi. Bu operatsion tizimlar zamonaviy raqamli hayotning ajralmas qismiga aylandi."));

  c.push(H3("Bob bo'yicha asosiy xulosalar"));
  c.push(
    BUL("Operatsion tizim kompyuter resurslarini boshqaradi va vositachilik qiladi;"),
    BUL("Eng keng tarqalgan OT — Windows, Linux, macOS, Android, iOS;"),
    BUL("Fayl tizimi ma'lumotlarni fayllar va papkalar ko'rinishida tashkil etadi;"),
    BUL("Fayl kengaytmasi uning turini bildiradi;"),
    BUL("Interfeys matnli (buyruq satri) va grafik (GUI) turlarga bo'linadi.")
  );
  c.push(PB());
  return c;
};
