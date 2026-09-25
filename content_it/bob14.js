module.exports = (L) => {
  const { H1, H2, H3, P, BUL, CAP, table, PB } = L;
  const c = [];

  c.push(H1("14-BOB. ELEKTRON HUKUMAT VA RAQAMLI XIZMATLAR"));

  c.push(H2("14.1. Elektron hukumat tushunchasi"));
  c.push(P("An'anaviy davlat boshqaruvida fuqarolar turli xizmatlarni olish uchun davlat idoralariga borishlari, navbatda turishlari va ko'plab hujjatlarni qo'lda to'ldirishlari kerak edi. Bu jarayon ko'p vaqt talab qilar va noqulayliklar tug'dirar edi. Axborot texnologiyalarining rivojlanishi bu muammolarni hal qilishning yangi yo'lini — elektron hukumatni yuzaga keltirdi."));
  c.push(P("Bugungi kunda ko'plab davlat xizmatlari onlayn tarzda, ya'ni internet orqali ko'rsatilmoqda. Fuqarolar uydan chiqmasdan turli ma'lumotnomalar olishlari, to'lovlarni amalga oshirishlari va arizalar topshirishlari mumkin. Bu davlat va fuqaro o'rtasidagi munosabatlarni tubdan o'zgartirdi."));
  c.push(P("Elektron hukumat (e-government) — davlat organlarining fuqarolar va tashkilotlarga xizmatlarni axborot texnologiyalari orqali ko'rsatish tizimidir. Elektron hukumat orqali fuqarolar navbatda turmasdan, uydan chiqmasdan turli davlat xizmatlaridan foydalanishlari mumkin. Bu tizim davlat boshqaruvini shaffof, tez va qulay qiladi."));
  c.push(P("Elektron hukumatning asosiy maqsadlari: davlat xizmatlarini soddalashtirish va tezlashtirish; byurokratiya va korrupsiyani kamaytirish; davlat va fuqaro o'rtasidagi muloqotni yaxshilash; xarajatlarni tejash. Elektron hukumat turli yo'nalishlarda faoliyat ko'rsatadi."));
  c.push(CAP("14.1-jadval. Elektron hukumat yo'nalishlari"));
  c.push(table(
    [1800, 3400, 4438],
    ["Yo'nalish", "Ma'nosi", "Misol"],
    [
      ["G2C", "Government to Citizen", "Davlat — fuqaroga xizmat (spravkalar, to'lovlar)"],
      ["G2B", "Government to Business", "Davlat — biznesga xizmat (litsenziya, soliq)"],
      ["G2G", "Government to Government", "Davlat organlari o'rtasida hamkorlik"],
      ["G2E", "Government to Employee", "Davlat — xodimlarga xizmat"]
    ]
  ));

  c.push(H2("14.2. Raqamli xizmatlar"));
  c.push(P("Raqamli (elektron) xizmatlar — internet orqali taqdim etiladigan turli xizmatlardir. Bularga onlayn to'lovlar, elektron hujjat aylanishi, onlayn ta'lim, telemeditsina, elektron tijorat va boshqalar kiradi. Raqamli xizmatlar vaqt va resurslarni tejaydi, xizmatlardan foydalanishni qulaylashtiradi."));
  c.push(P("Raqamli xizmatlardan foydalanish uchun ko'pincha shaxsni tasdiqlash (identifikatsiya va autentifikatsiya) talab qilinadi. Buning uchun elektron raqamli imzo (ERI), bir martalik parollar (SMS-kod) yoki biometrik ma'lumotlardan foydalaniladi. Bu xavfsizlikni ta'minlaydi va xizmatlarning huquqiy kuchini kafolatlaydi."));

  c.push(H2("14.3. Elektron raqamli imzo"));
  c.push(P("Elektron raqamli imzo (ERI) — elektron hujjatning haqiqiyligini va uni imzolagan shaxsni tasdiqlovchi maxsus raqamli vositadir. ERI qo'lda qo'yilgan imzoning elektron muqobili bo'lib, unga teng huquqiy kuchga ega. ERI orqali imzolangan hujjat o'zgartirilmaganligiga va aynan tegishli shaxs tomonidan imzolanganligiga ishonch hosil qilinadi."));
  c.push(P("ERI kriptografik usullarga asoslanadi va uni soxtalashtirish deyarli mumkin emas. ERI elektron hujjat aylanishida, davlat xizmatlaridan foydalanishda, bank operatsiyalarida va tijorat munosabatlarida keng qo'llaniladi. ERI raqamli iqtisodiyotning muhim elementidir."));

  c.push(H2("14.4. Elektron tijorat"));
  c.push(P("Elektron tijorat (e-commerce) — internet orqali tovar va xizmatlarni sotish va sotib olish jarayonidir. Onlayn do'konlar, marketpleyslar va turli xizmat platformalari orqali xaridorlar uydan chiqmasdan xarid qilishlari mumkin. Elektron tijorat savdo sohasini tubdan o'zgartirdi va uni yanada qulay qildi."));
  c.push(CAP("14.2-jadval. Elektron tijorat turlari"));
  c.push(table(
    [1600, 3200, 4838],
    ["Turi", "Ma'nosi", "Misol"],
    [
      ["B2C", "Business to Consumer", "Do'kon — xaridorga sotadi (onlayn do'konlar)"],
      ["B2B", "Business to Business", "Tashkilotlar o'rtasida savdo"],
      ["C2C", "Consumer to Consumer", "Fuqarolar o'rtasida savdo (e'lonlar saytlari)"],
      ["C2B", "Consumer to Business", "Fuqaro tashkilotga xizmat taklif qiladi"]
    ]
  ));

  c.push(H3("Bob bo'yicha asosiy xulosalar"));
  c.push(
    BUL("Elektron hukumat davlat xizmatlarini AT orqali ko'rsatadi;"),
    BUL("Yo'nalishlar — G2C, G2B, G2G, G2E;"),
    BUL("Raqamli xizmatlar vaqt va resurslarni tejaydi;"),
    BUL("ERI elektron hujjatning haqiqiyligini tasdiqlaydi;"),
    BUL("Elektron tijorat B2C, B2B, C2C va C2B turlariga bo'linadi.")
  );
  c.push(PB());
  return c;
};
