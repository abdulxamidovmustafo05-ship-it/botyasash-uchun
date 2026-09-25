module.exports = (L) => {
  const { H1, H2, H3, P, BUL, NUM, CAP, table, PB } = L;
  const c = [];

  c.push(H1("11-BOB. ALGORITMLAR VA DASTURLASH ASOSLARI"));

  c.push(H2("11.1. Algoritm tushunchasi"));
  c.push(P("Algoritm — muayyan masalani yechish uchun bajariladigan aniq va tartibli amallar ketma-ketligidir. Algoritm nomi buyuk matematik al-Xorazmiy nomidan kelib chiqqan. Kundalik hayotda ham biz algoritmlardan foydalanamiz: ovqat tayyorlash retsepti, qurilma yig'ish yo'riqnomasi — bularning barchasi algoritm ko'rinishidir."));
  c.push(P("Har bir to'g'ri algoritm bir qator xususiyatlarga ega bo'lishi kerak. Bu xususiyatlar algoritmning aniq, tushunarli va natijaga olib keluvchi bo'lishini ta'minlaydi. Algoritmning asosiy xususiyatlari quyidagi jadvalda keltirilgan."));
  c.push(CAP("11.1-jadval. Algoritmning asosiy xususiyatlari"));
  c.push(table(
    [2600, 7038],
    ["Xususiyat", "Ma'nosi"],
    [
      ["Aniqlik (determinlik)", "Har bir amal aniq va bir xil tushuniladi"],
      ["Tushunarlilik", "Har bir amal bajaruvchi uchun tushunarli"],
      ["Diskretlik", "Algoritm alohida qadamlarga bo'linadi"],
      ["Ommaviylik", "Bir turdagi barcha masalalarga qo'llanadi"],
      ["Natijaviylik", "Cheklangan qadamdan so'ng natija beradi"]
    ]
  ));

  c.push(H2("11.2. Algoritmlarni tasvirlash usullari"));
  c.push(P("Algoritmni turli usullarda ifodalash mumkin: so'z bilan (og'zaki), formula bilan, blok-sxema ko'rinishida yoki dasturlash tilida. Blok-sxema — algoritmni maxsus geometrik shakllar yordamida grafik tasvirlash usulidir. Har bir shakl ma'lum bir amal turini bildiradi. Blok-sxemalar algoritmni ko'rgazmali va tushunarli qiladi."));
  c.push(CAP("11.2-jadval. Blok-sxema elementlari"));
  c.push(table(
    [3000, 6638],
    ["Element (shakl)", "Ma'nosi"],
    [
      ["Oval", "Algoritmning boshi va oxiri"],
      ["To'g'ri to'rtburchak", "Amal (jarayon, hisoblash)"],
      ["Romb", "Shart (tekshirish, tanlash)"],
      ["Parallelogramm", "Ma'lumot kiritish yoki chiqarish"],
      ["Strelka (chiziq)", "Amallar ketma-ketligi (yo'nalish)"]
    ]
  ));

  c.push(H2("11.3. Algoritm turlari"));
  c.push(P("Algoritmlar tuzilishiga ko'ra uch asosiy turga bo'linadi: chiziqli, tarmoqlanuvchi va takrorlanuvchi. Chiziqli algoritmda amallar ketma-ket, bir marta bajariladi. Tarmoqlanuvchi algoritmda shartga qarab turli yo'nalishlardan biri tanlanadi. Takrorlanuvchi (siklli) algoritmda ma'lum amallar bir necha marta takrorlanadi."));
  c.push(CAP("11.3-jadval. Algoritm turlari"));
  c.push(table(
    [2600, 7038],
    ["Algoritm turi", "Xususiyati va misoli"],
    [
      ["Chiziqli", "Amallar ketma-ket bajariladi (masalan, ikki sonni qo'shish)"],
      ["Tarmoqlanuvchi", "Shartga qarab yo'nalish tanlanadi (masalan, sonni juft/toqlikka tekshirish)"],
      ["Takrorlanuvchi (sikl)", "Amallar takrorlanadi (masalan, 1 dan 100 gacha sonlarni yig'ish)"]
    ]
  ));

  c.push(H2("11.4. Dasturlash tillari"));
  c.push(P("Dasturlash tili — kompyuterga buyruq berish va dastur yozish uchun ishlatiladigan sun'iy tildir. Dasturlash tili orqali algoritm kompyuter tushunadigan buyruqlarga aylantiriladi. Dasturlash tillari past darajali (mashina tiliga yaqin) va yuqori darajali (inson tiliga yaqin) turlarga bo'linadi. Yuqori darajali tillar o'rganish va ishlatish uchun qulayroqdir."));
  c.push(CAP("11.4-jadval. Ba'zi dasturlash tillari"));
  c.push(table(
    [2200, 7438],
    ["Til", "Qo'llanish sohasi"],
    [
      ["Python", "Boshlang'ich o'rganish, sun'iy intellekt, ma'lumotlar tahlili"],
      ["C / C++", "Tizimli dasturlash, o'yinlar, yuqori unumdorlik"],
      ["Java", "Korporativ ilovalar, Android ilovalari"],
      ["JavaScript", "Veb-sahifalar va veb-ilovalar"],
      ["PHP", "Veb-serverlar, veb-saytlar"],
      ["SQL", "Ma'lumotlar bazasi bilan ishlash"]
    ]
  ));

  c.push(H2("11.5. Dastur yaratish bosqichlari"));
  c.push(P("Dastur yaratish bir necha bosqichdan iborat murakkab jarayondir. Har bir bosqich muhim bo'lib, ular ketma-ket bajariladi. To'g'ri tashkil etilgan jarayon sifatli va ishonchli dastur yaratishga yordam beradi."));
  c.push(
    NUM("masalani qo'yish — nima qilish kerakligini aniqlash;"),
    NUM("algoritmni ishlab chiqish — yechim usulini tuzish;"),
    NUM("dasturni kodlash — algoritmni dasturlash tilida yozish;"),
    NUM("dasturni sinash (test) — xatolarni topish va tuzatish;"),
    NUM("dasturni ishga tushirish va foydalanish;"),
    NUM("dasturni qo'llab-quvvatlash va takomillashtirish.")
  );

  c.push(H2("11.6. O'zgaruvchilar va ma'lumot turlari"));
  c.push(P("Dasturlashda o'zgaruvchi — ma'lumotni saqlash uchun ishlatiladigan, nom bilan belgilangan xotira maydonidir. O'zgaruvchi qiymati dastur ishlashi davomida o'zgarishi mumkin. Har bir o'zgaruvchi muayyan ma'lumot turiga ega bo'ladi, bu tur o'zgaruvchida qanday ma'lumot saqlanishini belgilaydi (son, matn, mantiqiy qiymat va boshqalar)."));
  c.push(P("Ma'lumot turlarini to'g'ri tanlash dastur to'g'ri va samarali ishlashini ta'minlaydi. Masalan, yosh uchun butun son, narx uchun haqiqiy son, ism uchun matn turi ishlatiladi. Quyidagi jadvalda asosiy ma'lumot turlari keltirilgan."));
  c.push(CAP("11.5-jadval. Asosiy ma'lumot turlari"));
  c.push(table(
    [2600, 3600, 3438],
    ["Tur", "Nima saqlaydi", "Misol"],
    [
      ["Butun son (integer)", "Kasrsiz sonlar", "5, -3, 100"],
      ["Haqiqiy son (float)", "Kasrli sonlar", "3.14, -0.5"],
      ["Matn (string)", "Belgilar ketma-ketligi", "\"Salom\", \"IT\""],
      ["Mantiqiy (boolean)", "Rost yoki yolg'on", "true, false"],
      ["Belgi (char)", "Bitta belgi", "'A', '9'"]
    ]
  ));

  c.push(H3("Bob bo'yicha asosiy xulosalar"));
  c.push(
    BUL("Algoritm — masalani yechishning aniq va tartibli amallar ketma-ketligi;"),
    BUL("Algoritm blok-sxema orqali grafik tasvirlanadi;"),
    BUL("Algoritm turlari — chiziqli, tarmoqlanuvchi va takrorlanuvchi;"),
    BUL("Dasturlash tili algoritmni kompyuter buyruqlariga aylantiradi;"),
    BUL("Dastur yaratish masala qo'yishdan qo'llab-quvvatlashgacha bosqichlardan iborat.")
  );
  c.push(PB());
  return c;
};
