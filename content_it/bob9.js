module.exports = (L) => {
  const { H1, H2, H3, P, BUL, CAP, table, PB } = L;
  const c = [];

  c.push(H1("9-BOB. INTERNET VA VEB-TEXNOLOGIYALAR"));

  c.push(H2("9.1. Internet tushunchasi"));
  c.push(P("Internet — butun dunyo bo'ylab millionlab kompyuter tarmoqlarini birlashtiruvchi global tarmoqdir. Internet orqali foydalanuvchilar axborot izlashi, xabar almashishi, fayllarni uzatishi, video ko'rishi, xarid qilishi va boshqa ko'plab amallarni bajarishi mumkin. Internet bugungi kunda insoniyatning eng katta axborot manbaiga aylandi."));
  c.push(P("Internet ishlashi uchun protokollar — ma'lumot almashish qoidalari kerak. Asosiy protokol — TCP/IP bo'lib, u ma'lumotlarni paketlarga bo'lib uzatishni va manzilga yetkazishni ta'minlaydi. Har bir qurilma tarmoqda yagona IP-manzilga ega bo'ladi, bu esa ma'lumotni to'g'ri manzilga yetkazish imkonini beradi."));
  c.push(CAP("9.1-jadval. Internetning asosiy protokollari va xizmatlari"));
  c.push(table(
    [2200, 7438],
    ["Protokol / xizmat", "Vazifasi"],
    [
      ["HTTP / HTTPS", "Veb-sahifalarni uzatish (HTTPS — himoyalangan)"],
      ["TCP/IP", "Ma'lumotlarni paketlarga bo'lib uzatish"],
      ["FTP", "Fayllarni uzatish"],
      ["SMTP / POP3 / IMAP", "Elektron pochta xabarlarini uzatish va qabul qilish"],
      ["DNS", "Domen nomlarini IP-manzilga aylantirish"]
    ]
  ));

  c.push(H2("9.2. World Wide Web (WWW)"));
  c.push(P("World Wide Web (WWW yoki Veb) — internet orqali o'zaro bog'langan veb-sahifalar tizimidir. Veb-sahifalar giperhavolalar orqali bir-biriga bog'lanadi, bu esa foydalanuvchiga sahifadan sahifaga o'tish imkonini beradi. Veb-sahifalar veb-serverlarda saqlanadi va brauzer orqali ko'riladi. Har bir sahifa yagona manzilga (URL) ega."));
  c.push(P("URL (Uniform Resource Locator) — internetdagi resursning yagona manzilidir. URL protokol (https), domen nomi (masalan, edu.uz) va sahifa yo'lidan iborat. Domen nomlari xotirada oson saqlanadigan matnli manzillar bo'lib, DNS xizmati ularni raqamli IP-manzilga aylantiradi."));

  c.push(H2("9.3. Brauzerlar va qidiruv tizimlari"));
  c.push(P("Brauzer — veb-sahifalarni ko'rish va internetda ishlash uchun mo'ljallangan dasturdir. Brauzer veb-serverdan sahifani so'raydi, uni qabul qiladi va foydalanuvchiga ko'rsatadi. Eng keng tarqalgan brauzerlar: Google Chrome, Mozilla Firefox, Microsoft Edge, Safari va Opera."));
  c.push(P("Qidiruv tizimlari (masalan, Google, Yandex, Bing) internetdagi ulkan axborotdan kerakli ma'lumotni topishga yordam beradi. Foydalanuvchi kalit so'zlarni kiritadi va qidiruv tizimi mos sahifalar ro'yxatini taqdim etadi. Samarali qidirish uchun aniq kalit so'zlar va qidiruv operatorlaridan foydalanish tavsiya etiladi."));

  c.push(H2("9.4. Veb-texnologiyalar asoslari"));
  c.push(P("Veb-sahifalar maxsus tillar yordamida yaratiladi. HTML (HyperText Markup Language) veb-sahifaning tuzilishini va mazmunini belgilaydi. CSS (Cascading Style Sheets) sahifaning tashqi ko'rinishini — rang, shrift, joylashuvni bezaydi. JavaScript esa sahifaga interaktivlik va harakat qo'shadi."));
  c.push(CAP("9.2-jadval. Asosiy veb-texnologiyalar"));
  c.push(table(
    [2200, 7438],
    ["Texnologiya", "Vazifasi"],
    [
      ["HTML", "Veb-sahifaning tuzilishi va mazmuni (sarlavha, matn, rasm)"],
      ["CSS", "Sahifaning tashqi ko'rinishi (rang, shrift, joylashuv)"],
      ["JavaScript", "Sahifaga interaktivlik va dinamiklik qo'shish"],
      ["PHP / Python", "Server tomonida ishlovchi dasturlash"],
      ["MySQL", "Veb-ilovaning ma'lumotlar bazasi"]
    ]
  ));

  c.push(H2("9.5. Elektron pochta va onlayn xizmatlar"));
  c.push(P("Elektron pochta (email) — internet orqali xabar almashishning eng keng tarqalgan usullaridan biridir. Elektron pochta orqali matn, rasm, hujjat va boshqa fayllarni tez va bepul yuborish mumkin. Har bir foydalanuvchi yagona pochta manziliga ega bo'ladi (masalan, ism@example.com)."));
  c.push(P("Internet ko'plab onlayn xizmatlarni taqdim etadi: ijtimoiy tarmoqlar (muloqot), onlayn do'konlar (xarid), video xizmatlar (ko'ngilochar), onlayn ta'lim, bank xizmatlari va davlat xizmatlari. Bu xizmatlardan foydalanishda xavfsizlik qoidalariga rioya qilish muhim ahamiyatga ega."));

  c.push(H2("9.6. Internetdan xavfsiz va madaniyatli foydalanish"));
  c.push(P("Internet ulkan imkoniyatlar bilan bir qatorda ma'lum xavflarni ham keltirib chiqaradi: ishonchsiz axborot, firibgarlik, shaxsiy ma'lumotlarning o'g'irlanishi va zararli kontent. Shu sababli internetdan foydalanishda ehtiyotkorlik va mas'uliyat talab qilinadi. Ayniqsa bolalar va o'smirlar internetdan foydalanishda kattalar nazorati muhim ahamiyatga ega."));
  c.push(P("Internet madaniyati (netiket) — internetdagi muloqot va xulq-atvor qoidalaridir. Bunga boshqalarni hurmat qilish, haqoratdan saqlanish, mualliflik huquqlariga rioya qilish, ishonchli manbalardan foydalanish va yolg'on axborot tarqatmaslik kiradi. Raqamli madaniyat zamonaviy insonning muhim fazilatlaridan biridir."));

  c.push(H2("9.7. Ijtimoiy tarmoqlar"));
  c.push(P("Ijtimoiy tarmoqlar — foydalanuvchilarga bir-biri bilan muloqot qilish, ma'lumot va kontent almashish imkonini beruvchi onlayn platformalardir. Ular insonlar o'rtasidagi masofani qisqartirdi va yangi muloqot shakllarini yaratdi. Ijtimoiy tarmoqlar shaxsiy muloqotdan tashqari, biznes, ta'lim, marketing va yangiliklar tarqatishda ham keng qo'llaniladi."));
  c.push(P("Ijtimoiy tarmoqlardan foydalanishda ehtiyotkorlik zarur. Shaxsiy ma'lumotlarni ochiq qoldirmaslik, notanish shaxslarga ishonmaslik va vaqtni oqilona sarflash muhim. Bolalar va o'smirlar ijtimoiy tarmoqlardan foydalanishida kattalar nazorati va yo'l-yo'rig'i alohida ahamiyatga ega."));

  c.push(H3("Bob bo'yicha asosiy xulosalar"));
  c.push(
    BUL("Internet — global kompyuter tarmog'i, TCP/IP protokoli asosida ishlaydi;"),
    BUL("WWW — giperhavolalar bilan bog'langan veb-sahifalar tizimi;"),
    BUL("URL — resursning yagona manzili, DNS uni IP-ga aylantiradi;"),
    BUL("Brauzer sahifalarni ko'rsatadi, qidiruv tizimi ma'lumot topadi;"),
    BUL("Veb-sahifalar HTML, CSS va JavaScript yordamida yaratiladi.")
  );
  c.push(PB());
  return c;
};
