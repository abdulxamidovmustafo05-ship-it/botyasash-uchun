module.exports = (L) => {
  const { H1, H2, P, NUM, PB } = L;
  const c = [];

  c.push(H1("NAZORAT VA MUSTAHKAMLASH SAVOLLARI"));
  c.push(P("Quyidagi savollar har bir bob bo'yicha bilimlarni mustahkamlash va o'z-o'zini tekshirish uchun mo'ljallangan."));

  const groups = [
    ["1-bob bo'yicha", [
      "Axborot va ma'lumot tushunchalari qanday farqlanadi?",
      "Axborotning eng kichik o'lchov birligi nima?",
      "Axborot texnologiyalari qanday tarkibiy qismlardan iborat?",
      "Kompyuterlar necha avlodga bo'linadi?",
      "Kompyuter qaysi sanoq sistemasida ishlaydi?"
    ]],
    ["2-bob bo'yicha", [
      "Fon Neyman tamoyili bo'yicha kompyuter qanday qurilmalardan iborat?",
      "Protsessorning vazifasi nima?",
      "RAM va disk xotira qanday farqlanadi?",
      "Kirish va chiqish qurilmalariga misollar keltiring.",
      "Zamonaviy axborot tashuvchilar qaysilar?"
    ]],
    ["3-bob bo'yicha", [
      "Dasturiy ta'minot qanday turlarga bo'linadi?",
      "Tizimli dasturiy ta'minotga nimalar kiradi?",
      "Drayver nima vazifa bajaradi?",
      "Dasturiy ta'minot litsenziya turlarini sanang."
    ]],
    ["4-bob bo'yicha", [
      "Operatsion tizimning asosiy vazifalari nimalardan iborat?",
      "Qanday operatsion tizimlarni bilasiz?",
      "Fayl tizimi nima va u qanday tashkil etiladi?",
      "Fayl kengaytmasi nimani bildiradi?",
      "Grafik va matnli interfeys qanday farqlanadi?"
    ]],
    ["5-bob bo'yicha", [
      "Matn muharriri qanday vazifalarni bajaradi?",
      "Formatlash qanday darajalarda amalga oshiriladi?",
      "Jadval ustida qanday amallar bajariladi?",
      "Hujjatni qanday formatlarda saqlash mumkin?"
    ]],
    ["6-bob bo'yicha", [
      "Elektron jadval nima uchun ishlatiladi?",
      "Katak manzili qanday tuziladi?",
      "Formula qaysi belgi bilan boshlanadi?",
      "Qanday funksiyalarni bilasiz?",
      "Diagramma turlarini sanang."
    ]],
    ["7-bob bo'yicha", [
      "Ma'lumotlar bazasi nima?",
      "MBBT (DBMS) qanday vazifa bajaradi?",
      "Relyatsion bazaning tuzilishini tushuntiring.",
      "Asosiy kalit nima?",
      "Asosiy SQL buyruqlarini sanang."
    ]],
    ["8-bob bo'yicha", [
      "Kompyuter tarmog'i nima?",
      "Tarmoqlar qamrov bo'yicha qanday turlarga bo'linadi?",
      "Tarmoq topologiyalarini sanang.",
      "Asosiy tarmoq qurilmalari qaysilar?",
      "Simli va simsiz tarmoq qanday farqlanadi?"
    ]],
    ["9-bob bo'yicha", [
      "Internet nima va u qanday ishlaydi?",
      "WWW nima?",
      "URL nimalardan iborat?",
      "Brauzer va qidiruv tizimi qanday farqlanadi?",
      "Asosiy veb-texnologiyalarni sanang."
    ]],
    ["10-bob bo'yicha", [
      "Axborot xavfsizligining asosiy tamoyillari qaysilar?",
      "Zararli dasturlar turlarini sanang.",
      "Axborotni himoya qilishning asosiy usullari qanday?",
      "Kuchli parol qanday bo'lishi kerak?"
    ]],
    ["11-bob bo'yicha", [
      "Algoritm nima va uning xususiyatlari qaysilar?",
      "Algoritm qanday usullarda tasvirlanadi?",
      "Algoritm turlarini sanang.",
      "Dasturlash tili nima uchun kerak?",
      "Dastur yaratish bosqichlarini ayting."
    ]],
    ["12–15-boblar bo'yicha", [
      "Multimedia nima va u nimalardan iborat?",
      "Rastr va vektor grafika qanday farqlanadi?",
      "Bulutli texnologiya nima?",
      "Sun'iy intellekt qanday vazifalarni bajaradi?",
      "Kompyuterda ishlashda qanday ergonomika qoidalariga rioya qilish kerak?"
    ]]
  ];

  for (const [title, qs] of groups) {
    c.push(H2(title));
    L.startList();
    c.push(...qs.map(q => NUM(q)));
  }
  c.push(PB());
  return c;
};
