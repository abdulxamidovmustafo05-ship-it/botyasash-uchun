module.exports = (L) => {
  const { H1, H2, H3, P, BUL, NUM, CAP, table, PB } = L;
  const c = [];

  c.push(H1("3-BOB. MEHNAT MUHOFAZASINI TASHKIL ETISH VA BOSHQARISH"));

  c.push(H2("3.1. Korxonada mehnat muhofazasini boshqarish tizimi"));
  c.push(P("Mehnat muhofazasini boshqarish tizimi (MMBT) — mehnat muhofazasi siyosatini amalga oshirish, maqsadlarga erishish va ularni nazorat qilishga qaratilgan o'zaro bog'liq elementlar majmuidir. Zamonaviy boshqaruv tizimi «reja–bajarish–tekshirish–takomillashtirish» (PDCA) tsikliga asoslanadi va doimiy takomillashtirishni ko'zda tutadi."));
  c.push(P("Boshqarish tizimi quyidagi asosiy bosqichlarni o'z ichiga oladi: mehnat muhofazasi siyosatini belgilash; xavflarni aniqlash va baholash; maqsad va vazifalarni rejalashtirish; rejalarni amalga oshirish; natijalarni nazorat qilish va o'lchash; boshqaruvni tahlil qilish va tizimni takomillashtirish. Bu tsikl uzluksiz takrorlanib, mehnat sharoitlarining doimiy yaxshilanishini ta'minlaydi."));
  c.push(P("Quyidagi jadvalda mehnat muhofazasini boshqarish tizimining asosiy funksiyalari va ularning mazmuni keltirilgan."));
  c.push(CAP("3.1-jadval. Boshqarish tizimining asosiy funksiyalari"));
  c.push(table(
    [2600, 7038],
    ["Funksiya", "Mazmuni"],
    [
      ["Rejalashtirish", "Maqsadlarni belgilash, chora-tadbirlar rejasini tuzish, mablag' ajratish"],
      ["Tashkil etish", "Vazifalarni taqsimlash, mas'ul shaxslarni tayinlash, xizmatni shakllantirish"],
      ["Nazorat qilish", "Talablar bajarilishini tekshirish, ko'rsatkichlarni o'lchash"],
      ["Rag'batlantirish", "Xavfsiz mehnat uchun moddiy va ma'naviy rag'batlantirish"],
      ["Tahlil va takomillashtirish", "Kamchiliklarni aniqlash, tuzatuvchi choralar ko'rish"]
    ]
  ));

  c.push(H2("3.2. Mehnat muhofazasi xizmati"));
  c.push(P("Xodimlar soni belgilangan miqdordan ortiq bo'lgan korxonalarda mehnat muhofazasi xizmati tashkil etiladi yoki mehnat muhofazasi bo'yicha mutaxassis lavozimi kiritiladi. Xizmat bevosita korxona rahbariga yoki uning o'rinbosariga bo'ysunadi va quyidagi asosiy vazifalarni bajaradi:"));
  L.startList();
  c.push(
    NUM("mehnat muhofazasi holatini tahlil qilish va profilaktika choralarini ishlab chiqish;"),
    NUM("ish o'rinlarini mehnat sharoitlari bo'yicha attestatsiyadan o'tkazishni tashkil etish;"),
    NUM("yo'riqnomalarni tashkil etish va ularning o'tkazilishini nazorat qilish;"),
    NUM("baxtsiz hodisalarni tekshirishda ishtirok etish va hisobga olish;"),
    NUM("mehnat muhofazasi bo'yicha ko'rsatmalar berish va ularni bartaraf etilishini kuzatish;"),
    NUM("himoya vositalari bilan ta'minlanishni nazorat qilish.")
  );

  c.push(H2("3.3. Mas'uliyat va vazifalar taqsimoti"));
  c.push(P("Mehnat muhofazasi bo'yicha mas'uliyat korxonaning barcha darajalarida taqsimlanadi. Har bir lavozim egasi o'z vakolati doirasida mehnat muhofazasi uchun javobgar bo'ladi. Quyidagi jadvalda korxonadagi asosiy lavozimlar va ularning mehnat muhofazasi bo'yicha mas'uliyati keltirilgan."));
  c.push(CAP("3.2-jadval. Mehnat muhofazasi bo'yicha mas'uliyat taqsimoti"));
  c.push(table(
    [2600, 7038],
    ["Lavozim", "Mehnat muhofazasi bo'yicha asosiy mas'uliyati"],
    [
      ["Korxona rahbari", "Mehnat muhofazasining umumiy holatiga javobgar, siyosatni belgilaydi, mablag' ajratadi"],
      ["Bosh muhandis", "Texnik xavfsizlik, uskunalarning nosoz holatini bartaraf etish"],
      ["Sex boshlig'i", "Sexdagi xavfsizlik, joriy yo'riqnoma, intizom"],
      ["Usta / brigadir", "Ish o'rnidagi bevosita xavfsizlik, xodimlar ustidan kundalik nazorat"],
      ["MM bo'yicha mutaxassis", "Tizimni muvofiqlashtirish, nazorat, tahlil va uslubiy yordam"],
      ["Xodim", "O'z ish o'rnida qoidalarga rioya qilish, himoya vositalaridan foydalanish"]
    ]
  ));

  c.push(H2("3.4. Nazorat turlari"));
  c.push(P("Mehnat muhofazasi ustidan nazorat ko'p bosqichli tizim asosida amalga oshiriladi. Nazorat davlat organlari tomonidan olib boriladigan tashqi nazoratga va korxonaning o'zi tomonidan olib boriladigan ichki (ma'muriy-jamoat) nazoratga bo'linadi. Ichki nazorat odatda uch bosqichli tizim asosida tashkil etiladi:"));
  c.push(CAP("3.3-jadval. Uch bosqichli ma'muriy-jamoat nazorati"));
  c.push(table(
    [1200, 3600, 4838],
    ["Bosqich", "Kim tomonidan", "Qanchalik tez-tez va nima nazorat qilinadi"],
    [
      ["1-bosqich", "Usta, brigadir, jamoat inspektori", "Har kuni — ish o'rni holati, uskunalar, SHV mavjudligi"],
      ["2-bosqich", "Sex boshlig'i, kasaba uyushmasi vakili", "Haftada bir marta — sex bo'yicha umumiy holat"],
      ["3-bosqich", "Rahbariyat, MM xizmati, komissiya", "Oyda bir marta — korxona bo'yicha keng qamrovli tekshiruv"]
    ]
  ));
  c.push(P("Bunday ko'p bosqichli tizim kamchiliklarni turli darajalarda aniqlash va ularni o'z vaqtida bartaraf etish imkonini beradi. Har bir bosqichda aniqlangan nuqsonlar maxsus jurnalga qayd etiladi va ularni bartaraf etish muddatlari belgilanadi."));

  c.push(H2("3.5. Davlat nazorati organlari"));
  c.push(P("Mehnat muhofazasi qonunchiligiga rioya etilishi ustidan davlat nazorati vakolatli organlar tomonidan amalga oshiriladi. Bu organlarga mehnat inspeksiyasi, sanitariya-epidemiologiya xizmati, texnik va yong'in nazorati organlari kiradi. Ular korxonalarni tekshirish, qoida buzilishlari bo'yicha ko'rsatmalar berish va javobgarlikka tortish vakolatiga ega."));
  c.push(P("Mehnat muhofazasi talablari buzilganligi uchun intizomiy, ma'muriy, moddiy va jinoiy javobgarlik nazarda tutilgan. Javobgarlik turi qoida buzilishining og'irligi va oqibatlariga qarab belgilanadi. Quyidagi jadvalda javobgarlik turlari keltirilgan."));
  c.push(CAP("3.4-jadval. Mehnat muhofazasini buzganlik uchun javobgarlik turlari"));
  c.push(table(
    [2200, 3600, 3838],
    ["Javobgarlik turi", "Qo'llanish holati", "Chorasi"],
    [
      ["Intizomiy", "Mehnat intizomini buzish", "Hayfsan, tanbeh, ishdan bo'shatish"],
      ["Ma'muriy", "Ma'muriy huquqbuzarlik", "Jarima, faoliyatni to'xtatib qo'yish"],
      ["Moddiy", "Korxonaga yoki xodimga zarar yetkazish", "Yetkazilgan zararni qoplash"],
      ["Jinoiy", "Og'ir oqibatlarga olib kelgan buzilish", "Jinoiy javobgarlik (jarima, ozodlikdan mahrum qilish)"]
    ]
  ));

  c.push(H3("Bob bo'yicha asosiy xulosalar"));
  c.push(
    BUL("Mehnat muhofazasini boshqarish PDCA tsikli asosida uzluksiz amalga oshiriladi;"),
    BUL("Mas'uliyat korxonaning barcha darajalarida taqsimlanadi;"),
    BUL("Ichki nazorat uch bosqichli tizim orqali tashkil etiladi;"),
    BUL("Qoida buzilishlari uchun intizomiydan jinoiygacha javobgarlik nazarda tutilgan.")
  );
  c.push(PB());
  return c;
};
