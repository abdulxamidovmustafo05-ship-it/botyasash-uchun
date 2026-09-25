module.exports = (L) => {
  const { H1, H2, H3, P, BUL, NUM, CAP, table, PB } = L;
  const c = [];

  c.push(H1("4-BOB. MEHNAT MUHOFAZASI BO'YICHA O'QITISH VA YO'RIQNOMALAR"));

  c.push(H2("4.1. O'qitishning ahamiyati va turlari"));
  c.push(P("Baxtsiz hodisalar sabablarining tahlili shuni ko'rsatadiki, ularning katta qismi xodimlarning mehnat muhofazasi qoidalarini bilmasligi yoki ularga rioya qilmasligi natijasida yuzaga keladi. Shu sababli mehnat muhofazasi bo'yicha o'qitish va yo'riqnoma o'tkazish baxtsiz hodisalar profilaktikasining eng muhim vositalaridan biridir. Har bir xodim ishga qabul qilingan paytdan boshlab, o'z kasbi va ish o'rniga oid xavfsizlik qoidalarini o'rganishi shart."));
  c.push(P("Mehnat muhofazasi bo'yicha o'qitish barcha toifadagi xodimlar uchun majburiy: rahbarlar, mutaxassislar, ishchilar va yangi qabul qilinganlar. O'qitish nazariy bilim berish va amaliy ko'nikma hosil qilishni o'z ichiga oladi. O'qitish yakunida xodimning bilimlari tekshiriladi va u faqat bilimlarni muvaffaqiyatli topshirgandan keyingina mustaqil ishlashga qo'yiladi."));

  c.push(H2("4.2. Yo'riqnoma turlari"));
  c.push(P("Yo'riqnoma — xodimga xavfsiz mehnat usullarini o'rgatish maqsadida o'tkaziladigan tadbir. Yo'riqnoma o'tkazilish vaqti va maqsadiga qarab bir necha turga bo'linadi. Har bir yo'riqnoma turi o'ziga xos mazmun va o'tkazilish tartibiga ega. Quyidagi jadvalda yo'riqnoma turlari batafsil keltirilgan."));
  c.push(CAP("4.1-jadval. Yo'riqnoma turlari va ularning xususiyatlari"));
  c.push(table(
    [1900, 2900, 4838],
    ["Yo'riqnoma turi", "Qachon o'tkaziladi", "Maqsadi va mazmuni"],
    [
      ["Kirish yo'riqnomasi", "Ishga qabul qilinganda, bir marta", "Korxonaning umumiy xavfsizlik qoidalari, ichki tartib, umumiy xavflar bilan tanishtirish"],
      ["Dastlabki yo'riqnoma", "Ish o'rnida ishga tushishdan oldin", "Aniq ish o'rni, uskunalar va texnologik jarayon xavfsizligi"],
      ["Takroriy yo'riqnoma", "Davriy — odatda 3–6 oyda bir marta", "Bilimlarni yangilash va mustahkamlash"],
      ["Rejadan tashqari yo'riqnoma", "Qoida o'zgarganda, baxtsiz hodisadan keyin", "Yangi talablar yoki hodisa sabablari bilan tanishtirish"],
      ["Maqsadli yo'riqnoma", "Bir martalik, xavfli ish oldidan", "Aniq bir topshiriq yoki favqulodda ish xavfsizligi"]
    ]
  ));
  c.push(P("Kirish yo'riqnomasi mehnat muhofazasi bo'yicha mutaxassis tomonidan maxsus jihozlangan xonada o'tkaziladi. Dastlabki, takroriy, rejadan tashqari va maqsadli yo'riqnomalar esa bevosita ish rahbari (usta, sex boshlig'i) tomonidan ish o'rnida o'tkaziladi. Barcha yo'riqnomalar maxsus jurnalga qayd etilib, yo'riqnoma o'tkazgan va olgan shaxslarning imzosi bilan tasdiqlanadi."));

  c.push(H2("4.3. Bilimlarni tekshirish va attestatsiya"));
  c.push(P("Mehnat muhofazasi bo'yicha o'qitishdan so'ng xodimlarning bilimlari komissiya tomonidan tekshiriladi. Rahbar va mutaxassislar davriy ravishda (odatda uch yilda bir marta) attestatsiyadan o'tkaziladi. Bilimlar tekshiruvi og'zaki, yozma yoki test shaklida o'tkazilishi mumkin. Tekshiruv natijalari bayonnoma bilan rasmiylashtiriladi."));
  c.push(P("Bilimlarni qoniqarsiz topshirgan xodim qayta o'qitiladi va bilimlari qayta tekshiriladi. Bilimlarni takroran topshira olmagan xodim mustaqil ishlashga qo'yilmaydi. Bu tartib xodimning yetarli bilimga ega bo'lishini kafolatlaydi."));
  c.push(CAP("4.2-jadval. O'qitish va bilim tekshiruvi davriyligi"));
  c.push(table(
    [3600, 3000, 3038],
    ["Toifasi", "O'qitish", "Bilim tekshiruvi"],
    [
      ["Ishchilar (oddiy ishlar)", "Ishga kirganda", "Har 6–12 oyda takroriy yo'riqnoma"],
      ["Ishchilar (xavfli ishlar)", "Maxsus dastur bo'yicha", "Yiliga bir marta"],
      ["Mutaxassis va rahbarlar", "Lavozimga tayinlanganda", "Har 3 yilda attestatsiya"],
      ["MM xizmati xodimlari", "Maxsus kurslar", "Belgilangan tartibda davriy"]
    ]
  ));

  c.push(H2("4.4. Yo'riqnoma va o'qitish hujjatlari"));
  c.push(P("Mehnat muhofazasi bo'yicha o'qitish va yo'riqnomalar tegishli hujjatlar bilan rasmiylashtiriladi. Bu hujjatlar nazorat organlari tekshiruvida talab qilinadi va baxtsiz hodisa yuz berganda muhim dalil bo'lib xizmat qiladi. Asosiy hujjatlar quyidagilardan iborat:"));
  c.push(
    BUL("kirish yo'riqnomasini qayd etish jurnali;"),
    BUL("ish o'rnida yo'riqnomani qayd etish jurnali;"),
    BUL("mehnat muhofazasi bo'yicha yo'riqnomalar (ko'rsatmalar) to'plami;"),
    BUL("bilimlarni tekshirish bayonnomalari;"),
    BUL("o'qitish dasturlari va reja-jadvallari.")
  );
  c.push(P("Har bir kasb va ish turi uchun alohida mehnat muhofazasi yo'riqnomasi (ko'rsatmasi) ishlab chiqiladi. Bu hujjatda ishga kirishishdan oldingi, ish jarayonidagi va ish tugagandan keyingi xavfsizlik talablari, shuningdek favqulodda vaziyatlarda harakat qilish tartibi bayon etiladi."));

  c.push(H3("Bob bo'yicha asosiy xulosalar"));
  c.push(
    BUL("Baxtsiz hodisalarning ko'p qismi bilimsizlik yoki qoidaga rioya qilmaslikdan kelib chiqadi;"),
    BUL("Yo'riqnoma besh turga bo'linadi: kirish, dastlabki, takroriy, rejadan tashqari va maqsadli;"),
    BUL("Bilimlar tekshiruvi va attestatsiya majburiy va davriy o'tkaziladi;"),
    BUL("Barcha o'qitish tadbirlari hujjatlar bilan rasmiylashtiriladi.")
  );
  c.push(PB());
  return c;
};
