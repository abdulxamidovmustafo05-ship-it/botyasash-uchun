module.exports = (L) => {
  const { H1, H2, H3, P, BUL, NUM, CAP, table, PB } = L;
  const c = [];

  c.push(H1("7-BOB. TEXNIKA XAVFSIZLIGINING UMUMIY MASALALARI"));

  c.push(H2("7.1. Texnika xavfsizligi tushunchasi"));
  c.push(P("Texnika xavfsizligi — xodimlarga xavfli ishlab chiqarish omillari ta'sirini oldini oluvchi tashkiliy va texnik chora-tadbirlar hamda vositalar tizimidir. Uning asosiy maqsadi — mashina, mexanizm, uskuna va texnologik jarayonlarni shunday loyihalash va ekspluatatsiya qilishki, ular xodim uchun jarohatlanish xavfini keltirib chiqarmasin. Texnika xavfsizligi mehnat muhofazasining eng amaliy va texnik yo'nalishidir."));
  c.push(P("Zamonaviy texnika xavfsizligi «xavfsizlik konstruksiya bosqichida» tamoyiliga asoslanadi — ya'ni xavfsizlik uskuna ishlab chiqilayotgan paytdayoq ta'minlanishi kerak. Uskunaning xavfsizligi uning butun xizmat muddati davomida — loyihalash, ishlab chiqarish, o'rnatish, ekspluatatsiya va utilizatsiya bosqichlarida ta'minlanadi."));

  c.push(H2("7.2. Xavfli zonalar va himoya vositalari"));
  c.push(P("Xavfli zona — uskunaning xodim uchun jarohatlanish xavfi mavjud bo'lgan qismi. Xavfli zonaga harakatlanuvchi qismlar, kesuvchi asboblar, qizigan yuzalar, elektr o'tkazgichlar va boshqalar kiradi. Xavfli zonani xodimdan ajratish uchun turli himoya vositalaridan foydalaniladi. Ular quyidagi jadvalda keltirilgan."));
  c.push(CAP("7.1-jadval. Texnik himoya vositalari"));
  c.push(table(
    [2900, 6738],
    ["Himoya vositasi turi", "Vazifasi va misollari"],
    [
      ["To'suvchi vositalar", "Harakatlanuvchi qismlarni to'sib qo'yish — panjaralar, qopqoqlar, ekranlar, kojuxlar"],
      ["Xavfsizlik qurilmalari", "Xavfli holatda uskunani avtomatik to'xtatish — bloklovchi, cheklovchi qurilmalar"],
      ["Signal beruvchi vositalar", "Xavf haqida ogohlantirish — yorug'lik, tovush, rangli signallar"],
      ["Masofadan boshqarish", "Xodimni xavfli zonadan uzoqlashtirish"],
      ["Xavfsizlik belgilari", "Ogohlantiruvchi, taqiqlovchi, ko'rsatuvchi belgilar"]
    ]
  ));
  c.push(P("Signal ranglari va xavfsizlik belgilari xalqaro standartlarga muvofiq belgilanadi. Qizil rang — taqiq va bevosita xavf, sariq — ogohlantirish, yashil — xavfsizlik va ruxsat, ko'k — ko'rsatma va majburiyatni bildiradi. Bu ranglar xodimga xavf haqida tez va aniq ma'lumot berish imkonini beradi."));
  c.push(CAP("7.2-jadval. Xavfsizlik signal ranglarining ma'nosi"));
  c.push(table(
    [2200, 3600, 3838],
    ["Rang", "Ma'nosi", "Qo'llanish misoli"],
    [
      ["Qizil", "Taqiq, xavf, to'xtatish", "«Kirish taqiqlanadi», «STOP» tugmasi, o't o'chirish vositalari"],
      ["Sariq", "Ogohlantirish, ehtiyotkorlik", "«Ehtiyot bo'l!», xavfli zona chegaralari"],
      ["Yashil", "Xavfsizlik, ruxsat", "«Chiqish», xavfsiz zona, ishlashga ruxsat"],
      ["Ko'k", "Ko'rsatma, majburiyat", "«Himoya vositasini kiying», ko'rsatma belgilari"]
    ]
  ));

  c.push(H2("7.3. Bosim ostida ishlaydigan idishlar"));
  c.push(P("Bosim ostida ishlaydigan idishlar — bug' qozonlari, ballonlar, kompressorlar, avtoklavlar va boshqalar — yuqori xavf manbai hisoblanadi, chunki ularning portlashi og'ir oqibatlarga olib kelishi mumkin. Shu sababli bunday idishlar maxsus talablarga muvofiq loyihalanadi, ro'yxatga olinadi va muntazam texnik ko'rikdan o'tkaziladi."));
  c.push(P("Bosim ostida ishlaydigan idishlar majburiy ravishda quyidagi himoya vositalari bilan jihozlanadi: manometr (bosimni o'lchash uchun), saqlagich (predoxranitel) klapan (ortiqcha bosimni chiqarish uchun), sath ko'rsatkichi va avtomatik boshqaruv qurilmalari. Gaz ballonlari turli gazlar uchun turli ranglarga bo'yaladi, bu ularni farqlash va noto'g'ri ishlatishning oldini olish imkonini beradi."));
  c.push(CAP("7.3-jadval. Gaz ballonlarining rangli belgilanishi"));
  c.push(table(
    [3200, 3200, 3238],
    ["Gaz", "Ballon rangi", "Yozuv rangi"],
    [
      ["Kislorod", "Ko'k", "Qora"],
      ["Atsetilen", "Oq", "Qizil"],
      ["Vodorod", "To'q yashil", "Qizil"],
      ["Azot", "Qora", "Sariq"],
      ["Karbonat angidrid (CO₂)", "Qora", "Sariq"],
      ["Ammiak", "Sariq", "Qora"],
      ["Propan-butan", "Qizil", "Oq"]
    ]
  ));

  c.push(H2("7.4. Yuk ko'tarish mashinalari va mexanizmlari"));
  c.push(P("Yuk ko'tarish mashinalari — kranlar, taleplar, liftlar, ko'targichlar — ham yuqori xavf manbai hisoblanadi. Ular yuk tushib ketishi, ag'darilib ketishi yoki mexanizmlarning nosozligi natijasida jiddiy baxtsiz hodisalarga sabab bo'lishi mumkin. Yuk ko'tarish mashinalari xavfsizligini ta'minlash uchun quyidagi choralar ko'riladi:"));
  c.push(
    BUL("mashinalarni davlat ro'yxatidan o'tkazish va texnik ko'rikdan o'tkazish;"),
    BUL("yuk ko'tarish qobiliyati cheklovchi qurilmalari bilan jihozlash;"),
    BUL("balandlik va yon tomon harakatini cheklovchi qurilmalar o'rnatish;"),
    BUL("arqon, zanjir va ilgaklarni muntazam tekshirish;"),
    BUL("kran mashinistlari va yuk bog'lovchilarni maxsus o'qitish va attestatsiyalash;"),
    BUL("yuk ko'tarish ishlarini xavfsiz tashkil etish sxemasini ishlab chiqish.")
  );
  c.push(P("Arqon va boshqa yuk tortuvchi qurilmalarning zaxira kuchi (xavfsizlik zaxirasi) ularning ish yukidan bir necha barobar yuqori bo'lishi shart. Har bir yuk tortuvchi qurilma o'zining ruxsat etilgan yuk ko'tarish qobiliyatini ko'rsatuvchi biriktirma yorliqqa ega bo'ladi."));

  c.push(H2("7.5. Uskunalarni xavfsiz ekspluatatsiya qilish"));
  c.push(P("Uskunalarni xavfsiz ekspluatatsiya qilish ularning texnik holatini muntazam nazorat qilish, o'z vaqtida profilaktik ta'mirlash va texnik xizmat ko'rsatish orqali ta'minlanadi. Ish boshlashdan oldin xodim uskunaning soz holatini, himoya vositalarining mavjudligi va ishlashini tekshirishi shart. Nosoz uskunada ishlash qat'iyan taqiqlanadi."));
  c.push(P("Uskunani ta'mirlash yoki tozalash faqat u to'liq to'xtatilgandan va elektr tarmog'idan uzilgandan keyin amalga oshiriladi. Bu paytda boshqaruv panelida «Yoqmang — odamlar ishlamoqda!» degan ogohlantiruvchi yozuv osib qo'yiladi. Bunday tartib uskuna tasodifan ishga tushib ketishining oldini oladi."));

  c.push(H3("Bob bo'yicha asosiy xulosalar"));
  c.push(
    BUL("Texnika xavfsizligi uskunalar va jarayonlarning xavfsizligini ta'minlaydi;"),
    BUL("Xavfli zonalar to'suvchi va bloklovchi vositalar bilan himoyalanadi;"),
    BUL("Signal ranglari xavf haqida tez va aniq ma'lumot beradi;"),
    BUL("Bosim ostidagi idishlar va yuk ko'tarish mashinalari maxsus nazoratga olinadi;"),
    BUL("Nosoz uskunada ishlash qat'iyan taqiqlanadi.")
  );
  c.push(PB());
  return c;
};
