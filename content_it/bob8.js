module.exports = (L) => {
  const { H1, H2, H3, P, BUL, CAP, table, PB } = L;
  const c = [];

  c.push(H1("8-BOB. KOMPYUTER TARMOQLARI"));

  c.push(H2("8.1. Kompyuter tarmog'i tushunchasi"));
  c.push(P("Bir vaqtlar har bir kompyuter yakka holda, boshqalardan ajralgan tarzda ishlagan. Ma'lumotni bir kompyuterdan ikkinchisiga ko'chirish uchun disketa yoki boshqa tashuvchilardan foydalanishga to'g'ri kelardi. Kompyuter tarmoqlarining paydo bo'lishi bu jarayonni tubdan o'zgartirdi va kompyuterlarni yagona tizimga birlashtirdi."));
  c.push(P("Kompyuter tarmog'i — ma'lumot almashish va resurslardan birgalikda foydalanish maqsadida bir-biriga ulangan kompyuterlar va qurilmalar majmuidir. Tarmoq orqali fayllarni uzatish, printer va internetdan birgalikda foydalanish, xabar almashish mumkin. Tarmoqlar zamonaviy axborot texnologiyalarining asosini tashkil etadi."));
  c.push(P("Tarmoqning asosiy afzalliklari: resurslardan (printer, disk, internet) birgalikda foydalanish; ma'lumotlarni tez almashish; markazlashgan boshqaruv va ma'lumotlarni saqlash; foydalanuvchilar o'rtasidagi aloqa. Tarmoqlar qamrov hududi bo'yicha turli turlarga bo'linadi."));
  c.push(CAP("8.1-jadval. Tarmoqlarning qamrov bo'yicha turlari"));
  c.push(table(
    [1800, 3200, 4638],
    ["Turi", "To'liq nomi", "Qamrov hududi"],
    [
      ["LAN", "Local Area Network", "Mahalliy tarmoq — bir bino yoki ofis ichida"],
      ["MAN", "Metropolitan Area Network", "Shahar miqyosidagi tarmoq"],
      ["WAN", "Wide Area Network", "Keng hududli tarmoq — mamlakat yoki dunyo bo'ylab"],
      ["PAN", "Personal Area Network", "Shaxsiy tarmoq — bir necha metr (Bluetooth)"]
    ]
  ));

  c.push(H2("8.2. Tarmoq topologiyalari"));
  c.push(P("Tarmoq topologiyasi — kompyuter va qurilmalarning tarmoqda o'zaro bog'lanish sxemasidir. Topologiya tarmoqning ishonchliligi, tezligi va narxiga ta'sir qiladi. Asosiy topologiyalar: shina (bus), halqa (ring), yulduz (star) va aralash (mesh). Zamonaviy tarmoqlarda ko'pincha yulduz topologiyasi qo'llaniladi."));
  c.push(CAP("8.2-jadval. Tarmoq topologiyalari"));
  c.push(table(
    [2200, 7438],
    ["Topologiya", "Xususiyati"],
    [
      ["Shina (bus)", "Barcha qurilmalar bitta umumiy kabelga ulanadi; oddiy, ammo kam ishonchli"],
      ["Halqa (ring)", "Qurilmalar yopiq halqa bo'ylab ketma-ket ulanadi"],
      ["Yulduz (star)", "Barcha qurilmalar markaziy qurilmaga (kommutator) ulanadi; ishonchli"],
      ["To'liq bog'langan (mesh)", "Har bir qurilma boshqalari bilan bog'langan; eng ishonchli, qimmat"]
    ]
  ));

  c.push(H2("8.3. Tarmoq qurilmalari"));
  c.push(P("Tarmoqni qurish va ishlatish uchun maxsus qurilmalar ishlatiladi. Ular qurilmalarni o'zaro bog'laydi, signalni kuchaytiradi, ma'lumot oqimini yo'naltiradi va tarmoqlar o'rtasida bog'lanishni ta'minlaydi. Har bir qurilma o'z vazifasiga ega."));
  c.push(CAP("8.3-jadval. Asosiy tarmoq qurilmalari"));
  c.push(table(
    [2600, 7038],
    ["Qurilma", "Vazifasi"],
    [
      ["Kommutator (switch)", "Mahalliy tarmoqdagi qurilmalarni bog'laydi va ma'lumotni yo'naltiradi"],
      ["Marshrutizator (router)", "Turli tarmoqlarni bog'laydi, internetga chiqishni ta'minlaydi"],
      ["Modem", "Raqamli va analog signallarni o'zaro aylantiradi"],
      ["Tarmoq kartasi", "Kompyuterni tarmoqqa ulaydi"],
      ["Kirish nuqtasi (access point)", "Simsiz (Wi-Fi) ulanishni ta'minlaydi"]
    ]
  ));

  c.push(H2("8.4. Simli va simsiz tarmoqlar"));
  c.push(P("Tarmoqlar ma'lumot uzatish muhiti bo'yicha simli va simsiz turlarga bo'linadi. Simli tarmoqlar (masalan, Ethernet) kabellar orqali ulanadi va yuqori tezlik hamda barqarorlik bilan ajralib turadi. Simsiz tarmoqlar (Wi-Fi, Bluetooth) radioto'lqinlar orqali ma'lumot uzatadi va harakatchanlik hamda qulaylik beradi."));
  c.push(P("Har bir turning o'z afzallik va kamchiliklari bor. Simli tarmoq tezroq va xavfsizroq, ammo harakatni cheklaydi. Simsiz tarmoq qulay, ammo signal to'siqlardan ta'sirlanadi va xavfsizlikka ko'proq e'tibor talab qiladi. Zamonaviy tarmoqlarda ko'pincha ikkala tur birgalikda qo'llaniladi."));

  c.push(H2("8.5. IP-manzil va domen nomlari"));
  c.push(P("Tarmoqdagi har bir qurilma yagona manzilga — IP-manzilga ega bo'ladi. IP-manzil qurilmani tarmoqda aniqlash va unga ma'lumot yetkazish imkonini beradi. IP-manzil to'rt guruh raqamdan iborat bo'ladi (masalan, 192.168.0.1). Zamonaviy tarmoqlarda IPv4 va yangi IPv6 standartlari ishlatiladi."));
  c.push(P("Raqamli IP-manzillarni eslab qolish qiyin bo'lgani uchun domen nomlari qo'llaniladi. Domen nomi — sayt yoki resursning matnli, oson eslab qolinadigan manzilidir (masalan, edu.uz). DNS (Domain Name System) xizmati domen nomlarini mos IP-manzillarga aylantiradi. Bu foydalanuvchiga raqamlar o'rniga tushunarli nomlardan foydalanish imkonini beradi."));
  c.push(CAP("8.4-jadval. Ba'zi domen zonalari"));
  c.push(table(
    [2200, 7438],
    ["Domen zonasi", "Ma'nosi"],
    [
      [".uz", "O'zbekiston milliy domeni"],
      [".com", "Tijorat tashkilotlari"],
      [".org", "Notijorat tashkilotlar"],
      [".edu", "Ta'lim muassasalari"],
      [".gov", "Davlat organlari"],
      [".net", "Tarmoq xizmatlari"]
    ]
  ));

  c.push(H3("Bob bo'yicha asosiy xulosalar"));
  c.push(
    BUL("Kompyuter tarmog'i qurilmalarni ma'lumot almashish uchun bog'laydi;"),
    BUL("Qamrov bo'yicha LAN, MAN, WAN va PAN turlariga bo'linadi;"),
    BUL("Asosiy topologiyalar — shina, halqa, yulduz va mesh;"),
    BUL("Tarmoq qurilmalari — kommutator, marshrutizator, modem;"),
    BUL("Tarmoqlar simli (Ethernet) va simsiz (Wi-Fi) turlarga bo'linadi.")
  );
  c.push(PB());
  return c;
};
