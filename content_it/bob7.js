module.exports = (L) => {
  const { H1, H2, H3, P, BUL, CAP, table, PB } = L;
  const c = [];

  c.push(H1("7-BOB. MA'LUMOTLAR BAZASI ASOSLARI"));

  c.push(H2("7.1. Ma'lumotlar bazasi tushunchasi"));
  c.push(P("Zamonaviy dunyoda har bir tashkilot katta hajmdagi ma'lumotlar bilan ishlaydi: banklar mijozlar hisoblarini, do'konlar tovarlar ro'yxatini, kutubxonalar kitoblar katalogini yuritadi. Bu ma'lumotlarni qog'ozda saqlash va boshqarish juda qiyin va samarasizdir. Aynan shu muammoni hal qilish uchun ma'lumotlar bazalari yaratilgan."));
  c.push(P("Ma'lumotlar bazasi ma'lumotlarni tartibli saqlash bilan bir qatorda, ularni tez qidirish, saralash, guruhlash va tahlil qilish imkonini beradi. Bu esa qaror qabul qilishni osonlashtiradi va xatolarni kamaytiradi. Ma'lumotlar bazalari deyarli barcha zamonaviy axborot tizimlarining asosini tashkil etadi."));
  c.push(P("Ma'lumotlar bazasi (MB) — muayyan soha haqidagi tartibli, o'zaro bog'liq ma'lumotlar to'plamidir. Ma'lumotlar bazasi ma'lumotlarni tizimli saqlash, tez qidirish, yangilash va tahlil qilish imkonini beradi. Masalan, kutubxona ma'lumotlar bazasida kitoblar, mualliflar va o'quvchilar haqidagi ma'lumotlar saqlanadi."));
  c.push(P("Ma'lumotlar bazasini boshqarish tizimi (MBBT yoki DBMS) — ma'lumotlar bazasini yaratish, to'ldirish, tahrirlash va boshqarish uchun mo'ljallangan dasturiy ta'minotdir. Eng keng tarqalgan MBBTlar: MySQL, PostgreSQL, Microsoft SQL Server, Oracle va Microsoft Access. MBBT foydalanuvchi bilan ma'lumotlar o'rtasida vositachi vazifasini bajaradi."));

  c.push(H2("7.2. Ma'lumotlar bazasi modellari"));
  c.push(P("Ma'lumotlar bazalari ma'lumotlarni tashkil etish usuliga qarab turli modellarga bo'linadi. Eng keng tarqalgani — relyatsion (jadvalli) model bo'lib, unda ma'lumotlar o'zaro bog'liq jadvallar ko'rinishida saqlanadi. Boshqa modellar orasida ierarxik, tarmoqli va zamonaviy NoSQL modellari mavjud."));
  c.push(CAP("7.1-jadval. Ma'lumotlar bazasi modellari"));
  c.push(table(
    [2600, 7038],
    ["Model", "Xususiyati"],
    [
      ["Relyatsion (jadvalli)", "Ma'lumotlar o'zaro bog'liq jadvallarda saqlanadi (eng keng tarqalgan)"],
      ["Ierarxik", "Ma'lumotlar daraxtsimon tuzilishda (ota-bola bog'lanish)"],
      ["Tarmoqli", "Ma'lumotlar murakkab tarmoq ko'rinishida bog'lanadi"],
      ["Obyektga yo'naltirilgan", "Ma'lumotlar obyektlar ko'rinishida saqlanadi"],
      ["NoSQL", "Katta va tuzilmasiz ma'lumotlar uchun (hujjatli, kalit-qiymat)"]
    ]
  ));

  c.push(H2("7.3. Relyatsion bazaning tuzilishi"));
  c.push(P("Relyatsion ma'lumotlar bazasi jadvallar (relyatsiyalar) dan iborat. Har bir jadval ustunlar (maydonlar, atributlar) va qatorlar (yozuvlar) dan tashkil topadi. Ustun ma'lumotning bir turini (masalan, ism, yosh), qator esa bitta obyekt haqidagi to'liq ma'lumotni ifodalaydi. Har bir jadvalda yozuvlarni yagona aniqlaydigan asosiy kalit (primary key) bo'ladi."));
  c.push(CAP("7.2-jadval. Ma'lumotlar bazasi atamalari"));
  c.push(table(
    [2600, 7038],
    ["Atama", "Ta'rifi"],
    [
      ["Jadval (relyatsiya)", "Ma'lum bir obyekt haqidagi ma'lumotlar to'plami"],
      ["Maydon (ustun)", "Ma'lumotning bitta xarakteristikasi (ism, yosh)"],
      ["Yozuv (qator)", "Bitta obyekt haqidagi to'liq ma'lumot"],
      ["Asosiy kalit (primary key)", "Yozuvni yagona aniqlaydigan maydon"],
      ["Tashqi kalit (foreign key)", "Jadvallarni o'zaro bog'lovchi maydon"],
      ["So'rov (query)", "Ma'lumotlarni qidirish va tanlash amali"]
    ]
  ));

  c.push(H2("7.4. SQL tili haqida"));
  c.push(P("SQL (Structured Query Language — tuzilgan so'rovlar tili) — relyatsion ma'lumotlar bazalari bilan ishlash uchun standart tildir. SQL orqali ma'lumotlarni qidirish, qo'shish, yangilash va o'chirish mumkin. SQL soddaligi va kuchli imkoniyatlari tufayli butun dunyoda keng qo'llaniladi."));
  c.push(CAP("7.3-jadval. Asosiy SQL buyruqlari"));
  c.push(table(
    [2400, 3400, 3838],
    ["Buyruq", "Vazifasi", "Misol"],
    [
      ["SELECT", "Ma'lumotlarni tanlash", "SELECT * FROM talabalar"],
      ["INSERT", "Yangi yozuv qo'shish", "INSERT INTO talabalar ..."],
      ["UPDATE", "Yozuvni yangilash", "UPDATE talabalar SET ..."],
      ["DELETE", "Yozuvni o'chirish", "DELETE FROM talabalar WHERE ..."],
      ["WHERE", "Shart qo'yish", "WHERE yosh > 18"],
      ["ORDER BY", "Saralash", "ORDER BY ism"]
    ]
  ));

  c.push(H2("7.5. Ma'lumotlar bazasining qo'llanish sohalari"));
  c.push(P("Ma'lumotlar bazalari zamonaviy hayotning deyarli barcha sohalarida ishlatiladi. Banklarda mijozlar hisoblari va tranzaksiyalar, do'konlarda tovarlar va savdo ma'lumotlari, kasalxonalarda bemorlar tarixi, ta'lim muassasalarida talabalar va baholar ma'lumotlar bazalarida saqlanadi. Har safar internet do'konidan xarid qilganda yoki bank kartasidan foydalanganda, orqa fonda ma'lumotlar bazasi ishlaydi."));
  c.push(P("Ma'lumotlar bazalarini himoya qilish alohida ahamiyatga ega, chunki ular ko'pincha maxfiy va shaxsiy ma'lumotlarni o'z ichiga oladi. Ma'lumotlar bazasini himoya qilishda foydalanuvchi huquqlarini cheklash, zaxira nusxalash va shifrlashdan foydalaniladi. Ma'lumotlar bazasi administratori bazaning to'g'ri ishlashi va xavfsizligi uchun mas'ul bo'ladi."));

  c.push(H3("Bob bo'yicha asosiy xulosalar"));
  c.push(
    BUL("Ma'lumotlar bazasi tartibli, o'zaro bog'liq ma'lumotlar to'plamidir;"),
    BUL("MBBT (DBMS) bazani yaratish va boshqarish uchun ishlatiladi;"),
    BUL("Eng keng tarqalgan model — relyatsion (jadvalli);"),
    BUL("Jadval maydonlar va yozuvlardan, asosiy kalitdan iborat;"),
    BUL("SQL — bazalar bilan ishlashning standart tili.")
  );
  c.push(PB());
  return c;
};
