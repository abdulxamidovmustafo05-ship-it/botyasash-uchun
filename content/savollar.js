module.exports = (L) => {
  const { H1, H2, P, NUM, PB } = L;
  const c = [];

  c.push(H1("NAZORAT VA MUSTAHKAMLASH SAVOLLARI"));
  c.push(P("Quyidagi savollar har bir bob bo'yicha bilimlarni mustahkamlash va o'z-o'zini tekshirish uchun mo'ljallangan. Savollarga javob berish orqali materialning qanchalik o'zlashtirilganini baholash mumkin."));

  const groups = [
    ["1-bob bo'yicha", [
      "Mehnat muhofazasi tushunchasiga ta'rif bering va uning tarkibiy qismlarini sanang.",
      "Mehnat muhofazasining asosiy maqsadi va vazifalari nimalardan iborat?",
      "Xavfli va zararli ishlab chiqarish omillari qanday farqlanadi?",
      "Profilaktika ustunligi tamoyilini tushuntiring.",
      "Baxtsiz hodisa va kasbiy kasallik tushunchalari qanday farq qiladi?"
    ]],
    ["2-bob bo'yicha", [
      "Me'yoriy-huquqiy hujjatlar ierarxiyasini keltiring.",
      "Ish beruvchi va xodimning asosiy majburiyatlarini sanang.",
      "«Mehnat muhofazasi to'g'risida»gi qonun nimalarni tartibga soladi?",
      "MXST, SanQvaM va QMQ qisqartmalari nimani anglatadi?",
      "Xalqaro Mehnat Tashkilotining roli nimadan iborat?"
    ]],
    ["3-bob bo'yicha", [
      "Mehnat muhofazasini boshqarish tizimi qanday funksiyalarni bajaradi?",
      "Uch bosqichli nazorat qanday tashkil etiladi?",
      "Mehnat muhofazasi xizmatining vazifalari nimalardan iborat?",
      "Mehnat muhofazasini buzganlik uchun qanday javobgarlik turlari mavjud?"
    ]],
    ["4-bob bo'yicha", [
      "Yo'riqnomaning qanday turlari bor va ular qachon o'tkaziladi?",
      "Kirish va dastlabki yo'riqnoma qanday farqlanadi?",
      "Bilimlarni tekshirish qanday davriylikda o'tkaziladi?",
      "Yo'riqnoma qanday hujjatlar bilan rasmiylashtiriladi?"
    ]],
    ["5-bob bo'yicha", [
      "Baxtsiz hodisalar qanday belgilarga ko'ra tasniflanadi?",
      "Baxtsiz hodisa yuz berganda qanday choralar ko'riladi?",
      "Baxtsiz hodisalarning asosiy sabablari qaysi guruhlarga bo'linadi?",
      "Jarohatlanish chastota va og'irlik koeffitsiyentlari qanday hisoblanadi?"
    ]],
    ["6-bob bo'yicha", [
      "Zararli omillar qanday guruhlarga bo'linadi?",
      "Mikroiqlim qanday ko'rsatkichlar bilan tavsiflanadi?",
      "Yoritilganlik nimaga bog'liq holda me'yorlanadi?",
      "Shovqin va tebranish qanday zarar keltiradi?",
      "PDK va xavflilik sinfi nimani bildiradi?"
    ]],
    ["7-bob bo'yicha", [
      "Xavfli zona nima va u qanday himoyalanadi?",
      "Xavfsizlik signal ranglarining ma'nosini tushuntiring.",
      "Bosim ostida ishlaydigan idishlar qanday himoya vositalari bilan jihozlanadi?",
      "Yuk ko'tarish mashinalari xavfsizligi qanday ta'minlanadi?"
    ]],
    ["8-bob bo'yicha", [
      "Elektr tokining inson organizmiga ta'siri nimaga bog'liq?",
      "Qaysi tok kuchi inson uchun halokatli hisoblanadi?",
      "Xonalar elektr xavfi bo'yicha qanday tasniflanadi?",
      "Yerga ulash va nolga ulash qanday himoya qiladi?",
      "Elektr xavfsizligi bo'yicha malaka guruhlarini sanang."
    ]],
    ["9-bob bo'yicha", [
      "Yonish uchun qanday shartlar zarur (yonish uchburchagi)?",
      "Binolar yong'in-portlash xavfi bo'yicha qanday toifalarga bo'linadi?",
      "O't o'chirgichlarning qanday turlari bor?",
      "Nima uchun elektr uskunalarini suv bilan o'chirish taqiqlanadi?",
      "Yong'in aniqlanganda qanday tartibda harakat qilish kerak?"
    ]],
    ["10-bob bo'yicha", [
      "Jamoaviy va shaxsiy himoya vositalari qanday farqlanadi?",
      "SHV qaysi tana qismini himoya qilishiga qarab qanday turlarga bo'linadi?",
      "Nafas organlarini himoya qilish vositalari qanday guruhlarga bo'linadi?",
      "SHV dan foydalanish va saqlashda qanday qoidalarga rioya qilinadi?"
    ]],
    ["11-bob bo'yicha", [
      "Favqulodda vaziyatlar qanday turlarga bo'linadi?",
      "Turli holatlarda birinchi tibbiy yordam qanday ko'rsatiladi?",
      "Jonlantirish (reanimatsiya) choralari nimalardan iborat?",
      "Elektr toki urgan jabrlanuvchiga qanday yordam beriladi?"
    ]],
    ["12–15-boblar bo'yicha", [
      "Ayollar va o'smirlar mehnati qanday muhofaza qilinadi?",
      "Ish o'rinlarini attestatsiyalashning maqsadi nima?",
      "Mehnat sharoitlari qanday sinflarga bo'linadi?",
      "Ergonomikaning maqsadi nimadan iborat?",
      "Qurilish va payvandlash ishlarida qanday xavflar mavjud?"
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
