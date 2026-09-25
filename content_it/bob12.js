module.exports = (L) => {
  const { H1, H2, H3, P, BUL, CAP, table, PB } = L;
  const c = [];

  c.push(H1("12-BOB. MULTIMEDIA VA KOMPYUTER GRAFIKASI"));

  c.push(H2("12.1. Multimedia tushunchasi"));
  c.push(P("Inson axborotni turli sezgi organlari orqali qabul qiladi: ko'rish, eshitish va boshqalar. Tadqiqotlar shuni ko'rsatadiki, axborot bir vaqtning o'zida bir necha sezgi organi orqali taqdim etilganda, u yaxshiroq eslab qolinadi. Aynan shu tamoyilga multimedia texnologiyalari asoslanadi."));
  c.push(P("Multimedia bugungi kunda ta'lim, reklama, ko'ngilochar sanoat va boshqa ko'plab sohalarda keng qo'llaniladi. Elektron darsliklar, interaktiv o'yinlar, video darslar va jozibali taqdimotlar — bularning barchasi multimedia texnologiyalari mahsulidir."));
  c.push(P("Multimedia — matn, grafika, ovoz, animatsiya va videoni birlashtirib, axborotni yaxlit taqdim etish texnologiyasidir. Multimedia axborotni yanada jozibali va tushunarli qiladi, shu sababli u ta'lim, reklama, ko'ngilochar va boshqa sohalarda keng qo'llaniladi. Multimedia mahsulotlariga elektron darsliklar, o'yinlar, taqdimotlar va veb-saytlar misol bo'ladi."));
  c.push(P("Multimedia bir necha axborot turini birlashtiradi. Har bir tur o'ziga xos xususiyatga va fayl formatiga ega. Bu turlarning uyg'unlashuvi axborotni bir vaqtning o'zida bir necha sezgi organi orqali qabul qilish imkonini beradi, bu esa uni yaxshiroq eslab qolishga yordam beradi."));
  c.push(CAP("12.1-jadval. Multimedia tarkibiy qismlari"));
  c.push(table(
    [2400, 3600, 3638],
    ["Tur", "Tavsifi", "Fayl formatlari"],
    [
      ["Matn", "Yozma axborot", ".txt, .docx, .pdf"],
      ["Grafika (rasm)", "Statik tasvirlar", ".jpg, .png, .gif"],
      ["Ovoz (audio)", "Musiqa, nutq, tovushlar", ".mp3, .wav"],
      ["Video", "Harakatlanuvchi tasvirlar", ".mp4, .avi, .mkv"],
      ["Animatsiya", "Sun'iy harakat", ".gif, .swf"]
    ]
  ));

  c.push(H2("12.2. Kompyuter grafikasi turlari"));
  c.push(P("Kompyuter grafikasi — kompyuter yordamida tasvirlarni yaratish, tahrirlash va ko'rsatish texnologiyasidir. Grafik tasvirlar yaratish usuliga ko'ra ikki asosiy turga bo'linadi: rastr (nuqtali) grafika va vektor grafikasi. Har bir turning o'z afzallik va qo'llanish sohasi bor."));
  c.push(P("Rastr grafikasida tasvir mayda nuqtalar (piksellar) to'plamidan iborat bo'ladi. Rastr tasvirlar rangdorlik va detallarni yaxshi ifodalaydi, ammo kattalashtirilganda sifat pasayadi. Vektor grafikasida esa tasvir matematik formulalar (chiziq, egri chiziq, shakl) yordamida quriladi. Vektor tasvirlar sifatni yo'qotmasdan istalgancha kattalashtiriladi."));
  c.push(CAP("12.2-jadval. Rastr va vektor grafikasini taqqoslash"));
  c.push(table(
    [3200, 3200, 3238],
    ["Xususiyat", "Rastr grafika", "Vektor grafika"],
    [
      ["Asosi", "Piksellar (nuqtalar)", "Matematik formulalar"],
      ["Kattalashtirish", "Sifat pasayadi", "Sifat saqlanadi"],
      ["Rangdorlik", "Yuqori (fotosuratlar)", "Cheklangan"],
      ["Fayl hajmi", "Katta", "Kichik"],
      ["Qo'llanishi", "Fotosuratlar, tasvirlar", "Logotip, chizma, shrift"],
      ["Dasturlar", "Photoshop, GIMP", "CorelDRAW, Illustrator"]
    ]
  ));

  c.push(H2("12.3. Rang modellari"));
  c.push(P("Kompyuterda ranglar maxsus rang modellari yordamida ifodalanadi. Ekranda tasvirlar uchun RGB modeli ishlatiladi — bunda har bir rang qizil (Red), yashil (Green) va ko'k (Blue) ranglarning aralashmasidan hosil qilinadi. Chop etish uchun esa CMYK modeli qo'llaniladi — u zangori (Cyan), qip-qizil (Magenta), sariq (Yellow) va qora (blacK) ranglardan iborat."));
  c.push(P("Rang modelini to'g'ri tanlash muhim: ekranda ko'rinadigan ranglar (RGB) qog'ozda bosilganda (CMYK) biroz farq qilishi mumkin. Shu sababli chop etiladigan materiallar CMYK modelida tayyorlanadi. Grafik dizaynerlar bu farqni hisobga olishlari lozim."));

  c.push(H2("12.4. Grafik va video muharrirlari"));
  c.push(P("Grafik muharrirlar rasmlarni yaratish va tahrirlash uchun ishlatiladi. Rastr muharrirlari (Photoshop, GIMP) fotosuratlarni tahrirlash, vektor muharrirlari (CorelDRAW, Illustrator) esa logotip va chizmalar yaratish uchun mo'ljallangan. Video muharrirlari (Adobe Premiere, DaVinci Resolve) videolarni montaj qilish, effektlar qo'shish va tovush bilan ishlash imkonini beradi."));
  c.push(P("Zamonaviy grafik va video muharrirlari professional darajadagi imkoniyatlarni taqdim etadi. Ular reklama, kino, o'yin va veb-dizayn sohalarida keng qo'llaniladi. Bu vositalar bilan ishlash uchun maxsus ko'nikma va ijodiy yondashuv talab qilinadi."));

  c.push(H2("12.5. Multimedianing qo'llanish sohalari"));
  c.push(P("Multimedia texnologiyalari deyarli barcha sohalarda qo'llaniladi. Ta'limda multimedia darslarni jonli va qiziqarli qiladi, murakkab tushunchalarni ko'rgazmali tarzda tushuntiradi. Tibbiyotda tashxis qo'yish va o'qitishda 3D vizualizatsiya ishlatiladi. Reklama va marketingda jozibali video va grafikalar mahsulotlarni targ'ib qiladi."));
  c.push(P("Ko'ngilochar sanoati — kino, o'yinlar va animatsiya — multimedia texnologiyalarining eng yorqin namunasidir. Zamonaviy kompyuter o'yinlari va animatsion filmlar yuqori sifatli grafika, realistik ovoz va murakkab effektlardan foydalanadi. Bu sohalarda ishlash uchun ijodiy qobiliyat bilan bir qatorda maxsus texnik ko'nikmalar ham talab qilinadi."));

  c.push(H3("Bob bo'yicha asosiy xulosalar"));
  c.push(
    BUL("Multimedia matn, grafika, ovoz, video va animatsiyani birlashtiradi;"),
    BUL("Kompyuter grafikasi rastr (nuqtali) va vektor turlariga bo'linadi;"),
    BUL("Rastr piksellardan, vektor formulalardan iborat;"),
    BUL("Ekran uchun RGB, chop etish uchun CMYK rang modeli ishlatiladi;"),
    BUL("Grafik va video muharrirlari professional ijod vositalaridir.")
  );
  c.push(PB());
  return c;
};
