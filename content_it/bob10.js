module.exports = (L) => {
  const { H1, H2, H3, P, BUL, CAP, table, PB } = L;
  const c = [];

  c.push(H1("10-BOB. AXBOROT XAVFSIZLIGI"));

  c.push(H2("10.1. Axborot xavfsizligi tushunchasi"));
  c.push(P("Axborot texnologiyalarining rivojlanishi bilan birga axborotni himoya qilish zarurati ham ortib bormoqda. Internet va raqamli xizmatlardan foydalanish qulaylik keltirish bilan birga, shaxsiy ma'lumotlar, moliyaviy hisoblar va muhim hujjatlar uchun yangi xavflarni ham yuzaga keltiradi. Har kuni dunyoda minglab kiberhujumlar sodir bo'lmoqda."));
  c.push(P("Axborot xavfsizligi faqat texnik masala emas, balki har bir foydalanuvchining mas'uliyatidir. Oddiy qoidalarga rioya qilish — kuchli parol yaratish, shubhali havolalarni ochmaslik, dasturlarni yangilab turish — ko'plab tahdidlarning oldini oladi. Shu sababli axborot xavfsizligi savodxonligi zamonaviy insonning muhim ko'nikmasidir."));
  c.push(P("Axborot xavfsizligi — axborotni ruxsatsiz kirish, o'zgartirish, yo'q qilish yoki oshkor etishdan himoya qilish choralari majmuidir. Zamonaviy dunyoda axborot qimmatli resurs bo'lgani uchun uni himoya qilish alohida ahamiyatga ega. Axborot xavfsizligining buzilishi moliyaviy zarar, shaxsiy ma'lumotlarning tarqalishi va boshqa jiddiy oqibatlarga olib kelishi mumkin."));
  c.push(P("Axborot xavfsizligi uchta asosiy tamoyilga asoslanadi: maxfiylik (axborotga faqat ruxsat etilgan shaxslar kira olishi), yaxlitlik (axborotning to'liq va o'zgarishsiz saqlanishi) va foydalanuvchanlik (axborot kerak bo'lganda mavjud bo'lishi). Bu uch tamoyil «CIA triadasi» deb ataladi."));
  c.push(CAP("10.1-jadval. Axborot xavfsizligining asosiy tamoyillari"));
  c.push(table(
    [2600, 7038],
    ["Tamoyil", "Mazmuni"],
    [
      ["Maxfiylik (Confidentiality)", "Axborotga faqat ruxsat etilgan shaxslar kira oladi"],
      ["Yaxlitlik (Integrity)", "Axborot to'liq va o'zgartirilmagan holda saqlanadi"],
      ["Foydalanuvchanlik (Availability)", "Axborot kerak bo'lganda mavjud va foydalanishga tayyor"]
    ]
  ));

  c.push(H2("10.2. Axborotga tahdidlar"));
  c.push(P("Axborot xavfsizligiga turli tahdidlar mavjud. Ular ataylab (qasddan) yoki tasodifan yuzaga kelishi mumkin. Eng keng tarqalgan tahdidlar orasida zararli dasturlar (viruslar), xakerlik hujumlari, firibgarlik (fishing) va inson xatolari bor. Tahdidlarni bilish ulardan himoyalanishning birinchi qadamidir."));
  c.push(CAP("10.2-jadval. Zararli dasturlar turlari"));
  c.push(table(
    [2400, 7238],
    ["Turi", "Xususiyati"],
    [
      ["Virus", "O'zini boshqa fayllarga nusxalaydi va tarqaladi"],
      ["Qurt (worm)", "Tarmoq orqali mustaqil tarqaladi"],
      ["Troyan oti", "Foydali dastur ko'rinishida yashiringan zararli dastur"],
      ["Josuslik dasturi (spyware)", "Foydalanuvchi ma'lumotlarini yashirincha yig'adi"],
      ["Shifrlovchi (ransomware)", "Fayllarni shifrlab, ochish uchun pul talab qiladi"],
      ["Reklama dasturi (adware)", "Keraksiz reklamalarni ko'rsatadi"]
    ]
  ));

  c.push(H2("10.3. Himoya usullari"));
  c.push(P("Axborotni himoya qilish uchun texnik, dasturiy va tashkiliy choralar majmuidan foydalaniladi. Asosiy himoya usullariga antivirus dasturlari, tarmoqlararo ekran (firewall), ma'lumotlarni shifrlash, kuchli parollar va zaxira nusxalash (backup) kiradi. Bir necha himoya usulini birgalikda qo'llash ishonchliroq natija beradi."));
  c.push(
    BUL("antivirus dasturidan foydalanish va uni muntazam yangilash;"),
    BUL("operatsion tizim va dasturlarni yangilab turish;"),
    BUL("kuchli va noyob parollardan foydalanish;"),
    BUL("muhim ma'lumotlarning zaxira nusxasini saqlash;"),
    BUL("noma'lum havolalar va fayllarni ochmaslik;"),
    BUL("shaxsiy ma'lumotlarni ishonchsiz saytlarga kiritmaslik;"),
    BUL("ikki bosqichli autentifikatsiyadan foydalanish.")
  );

  c.push(H2("10.4. Parol xavfsizligi"));
  c.push(P("Parol — foydalanuvchini tizimda tanib olish va ruxsatsiz kirishdan himoya qilishning asosiy vositasidir. Zaif parollarni xakerlar oson topadi, shu sababli kuchli parol yaratish muhim. Kuchli parol yetarlicha uzun bo'lishi, katta va kichik harflar, raqamlar hamda maxsus belgilardan iborat bo'lishi kerak."));
  c.push(CAP("10.3-jadval. Kuchli va zaif parollarni taqqoslash"));
  c.push(table(
    [4819, 4819],
    ["Zaif parol (yomon)", "Kuchli parol (yaxshi)"],
    [
      ["123456", "Kcombinatsiya: harf + raqam + belgi"],
      ["parol, password", "Kamida 8–12 belgidan iborat"],
      ["tug'ilgan sana", "Shaxsiy ma'lumot bilan bog'liq emas"],
      ["ism, familiya", "Katta va kichik harflar aralashmasi"],
      ["qwerty", "Turli xizmatlar uchun turli parollar"]
    ]
  ));

  c.push(H2("10.5. Zaxira nusxalash va shifrlash"));
  c.push(P("Ma'lumotlarni yo'qotishdan himoya qilishning eng ishonchli usuli — zaxira nusxalash (backup). Zaxira nusxa — muhim ma'lumotlarning boshqa joyda (tashqi disk, bulut) saqlangan qo'shimcha nusxasidir. Agar asosiy ma'lumot yo'qolsa yoki buzilsa, zaxira nusxadan tiklash mumkin. Zaxira nusxalarni muntazam yangilab turish tavsiya etiladi."));
  c.push(P("Shifrlash (kriptografiya) — ma'lumotni maxsus kalit yordamida o'qib bo'lmaydigan ko'rinishga o'tkazish usulidir. Shifrlangan ma'lumotni faqat to'g'ri kalitga ega shaxs o'qiy oladi. Shifrlash bank operatsiyalari, xabar almashish va muhim hujjatlarni uzatishda keng qo'llaniladi. Zamonaviy internetda ko'plab xizmatlar avtomatik ravishda ma'lumotlarni shifrlaydi."));
  c.push(CAP("10.4-jadval. Ma'lumotlarni himoya qilish usullari"));
  c.push(table(
    [2800, 6838],
    ["Usul", "Vazifasi"],
    [
      ["Zaxira nusxalash (backup)", "Ma'lumotlarni yo'qotishdan himoya qiladi"],
      ["Shifrlash", "Ma'lumotni ruxsatsiz o'qishdan himoya qiladi"],
      ["Autentifikatsiya", "Foydalanuvchini tekshiradi (parol, kod)"],
      ["Firewall (tarmoq ekrani)", "Tarmoq hujumlaridan himoya qiladi"],
      ["Antivirus", "Zararli dasturlarni aniqlaydi va yo'q qiladi"]
    ]
  ));

  c.push(H3("Bob bo'yicha asosiy xulosalar"));
  c.push(
    BUL("Axborot xavfsizligi maxfiylik, yaxlitlik va foydalanuvchanlikka asoslanadi;"),
    BUL("Asosiy tahdidlar — viruslar, xakerlik va firibgarlik;"),
    BUL("Zararli dasturlar: virus, qurt, troyan, ransomware;"),
    BUL("Himoya usullari — antivirus, firewall, shifrlash, backup;"),
    BUL("Kuchli parol uzun va turli belgilardan iborat bo'lishi kerak.")
  );
  c.push(PB());
  return c;
};
