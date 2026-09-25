module.exports = (L) => {
  const { H1, H2, H3, P, BUL, NUM, CAP, table, PB } = L;
  const c = [];

  c.push(H1("9-BOB. YONG'IN XAVFSIZLIGI"));

  c.push(H2("9.1. Yonish jarayoni va yong'in sabablari"));
  c.push(P("Yong'in — nazorat qilib bo'lmaydigan, moddiy zarar keltiruvchi va odamlar hayoti uchun xavf tug'diruvchi yonish jarayonidir. Yonish sodir bo'lishi uchun bir vaqtning o'zida uchta shart bajarilishi kerak: yonuvchi modda, kislorod (oksidlovchi) va yong'in manbai (issiqlik). Bu uch element «yonish uchburchagi» deb ataladi. Ulardan birini yo'qotish yonishni to'xtatadi — o't o'chirishning barcha usullari aynan shu tamoyilga asoslanadi."));
  c.push(P("Ishlab chiqarishda yong'inlarning asosiy sabablari quyidagilardan iborat: elektr uskunalarining nosozligi va noto'g'ri ekspluatatsiyasi; ochiq olov va chekishga rioya qilmaslik; texnologik jarayonlarning buzilishi; statik elektr va chaqmoq; yonuvchan moddalarni noto'g'ri saqlash; payvandlash ishlari paytida ehtiyotsizlik. Statistikaga ko'ra, yong'inlarning katta qismi elektr uskunalari va inson omili bilan bog'liq."));

  c.push(H2("9.2. Moddalarning yong'in xavfliligi"));
  c.push(P("Moddalar va materiallar yong'in xavfliligi bo'yicha turli xususiyatlarga ega. Suyuqliklar uchun eng muhim ko'rsatkich — alangalanish harorati, ya'ni suyuqlik bug'lari alangalanadigan eng past harorat. Bu ko'rsatkichga qarab yonuvchan suyuqliklar ikki guruhga bo'linadi: oson alangalanuvchi suyuqliklar (alangalanish harorati 61 °C gacha) va yonuvchan suyuqliklar (61 °C dan yuqori)."));
  c.push(CAP("9.1-jadval. Ba'zi suyuqliklarning alangalanish harorati"));
  c.push(table(
    [4800, 2400, 2438],
    ["Suyuqlik", "Alangalanish harorati, °C", "Guruh"],
    [
      ["Benzin", "-40 dan past", "Oson alangalanuvchi"],
      ["Atseton", "-18", "Oson alangalanuvchi"],
      ["Etil spirti", "13", "Oson alangalanuvchi"],
      ["Kerosin", "28–45", "Oson alangalanuvchi"],
      ["Skipidar", "34", "Oson alangalanuvchi"],
      ["Dizel yoqilg'isi", "40–60", "Oson alangalanuvchi"],
      ["Transformator moyi", "147", "Yonuvchan"],
      ["Motor moyi", "170–190", "Yonuvchan"]
    ]
  ));
  c.push(P("Binolar va inshootlar yong'in-portlash xavfliligi bo'yicha toifalarga bo'linadi (A, B, V, G, D). A toifa — eng xavfli (portlovchan gaz va suyuqliklar), D toifa — eng xavfsiz (yonmaydigan sovuq materiallar). Bino toifasiga qarab unga qo'yiladigan yong'inga qarshi talablar belgilanadi."));
  c.push(CAP("9.2-jadval. Binolarning yong'in-portlash xavfi bo'yicha toifalari"));
  c.push(table(
    [1400, 8238],
    ["Toifa", "Xususiyati va misollar"],
    [
      ["A", "Portlash-yong'in xavfli: yonuvchan gaz, oson alangalanuvchi suyuqliklar (neftni qayta ishlash)"],
      ["B", "Portlash-yong'in xavfli: yonuvchan chang, tolalar (un tegirmoni, shakar zavodi)"],
      ["V", "Yong'in xavfli: yonuvchan qattiq va suyuq moddalar (yog'ochni qayta ishlash, ombor)"],
      ["G", "Yonmaydigan qizigan moddalar, olov ishlatiladigan sexlar (metallurgiya, quyish)"],
      ["D", "Sovuq holatdagi yonmaydigan materiallar (mexanik ishlov berish sexi)"]
    ]
  ));

  c.push(H2("9.3. Yong'inning oldini olish choralari"));
  c.push(P("Yong'inning oldini olish choralari tashkiliy, texnik, rejaviy va ekspluatatsion tadbirlarga bo'linadi. Ular yong'in kelib chiqishining oldini olish va yong'in yuzaga kelgan taqdirda uning tarqalishini cheklashga qaratilgan. Asosiy profilaktika choralari quyidagilardan iborat:"));
  c.push(
    BUL("yong'in xavfsizligi qoidalari va rejimini o'rnatish hamda unga rioya qilish;"),
    BUL("xodimlarni yong'in xavfsizligi bo'yicha o'qitish va yo'riqnoma o'tkazish;"),
    BUL("elektr uskunalarini soz holatda ushlab turish;"),
    BUL("yonuvchan moddalarni to'g'ri saqlash va tashish;"),
    BUL("yong'inga qarshi to'siqlar (devor, eshik) o'rnatish;"),
    BUL("evakuatsiya yo'llari va chiqishlarni ta'minlash;"),
    BUL("yong'in signalizatsiyasi va avtomatik o't o'chirish tizimlarini o'rnatish.")
  );

  c.push(H2("9.4. O't o'chirish vositalari"));
  c.push(P("O't o'chirish yonish uchburchagi elementlaridan birini yo'qotishga asoslanadi: yonuvchi moddani olib tashlash, kislorodni to'sish yoki haroratni pasaytirish. O't o'chirish vositalari birlamchi (o't o'chirgichlar, qum, kigiz) va statsionar (avtomatik tizimlar, gidrantlar) turlarga bo'linadi. Eng keng tarqalgan birlamchi vosita — qo'l o't o'chirgichlaridir."));
  c.push(CAP("9.3-jadval. O't o'chirgich turlari va qo'llanilishi"));
  c.push(table(
    [2400, 3600, 3638],
    ["O't o'chirgich turi", "Ishlatiladigan modda", "Qayerda qo'llaniladi"],
    [
      ["Ko'pikli (OХP, OVP)", "Kimyoviy yoki havo-mexanik ko'pik", "Qattiq va suyuq yonuvchi moddalar (elektrsiz)"],
      ["Karbonat angidridli (OU)", "Suyuq karbonat angidrid (CO₂)", "Elektr uskunalari, qimmatbaho jihozlar"],
      ["Kukunli (OP)", "Maxsus kimyoviy kukun", "Deyarli barcha yong'in turlari, universal"],
      ["Suvli (OV)", "Suv yoki suv aralashmasi", "Qattiq materiallar (yog'och, qog'oz, mato)"]
    ]
  ));
  c.push(P("Muhim qoida: elektr uskunalari va elektr o'tkazgichlarni suvli yoki ko'pikli o't o'chirgichlar bilan o'chirish qat'iyan taqiqlanadi, chunki suv tokni o'tkazadi va elektr zarbasiga sabab bo'ladi. Bunday hollarda karbonat angidridli yoki kukunli o't o'chirgichlar ishlatiladi. Har bir o't o'chirgich muntazam tekshiruvdan o'tkaziladi va zaryadi nazorat qilinadi."));

  c.push(H2("9.5. Evakuatsiya va harakat tartibi"));
  c.push(P("Yong'in yuz berganda odamlarni tez va xavfsiz evakuatsiya qilish hayotiy ahamiyatga ega. Har bir bino evakuatsiya yo'llari va zaxira chiqishlari bilan ta'minlanishi, evakuatsiya rejasi ishlab chiqilishi va ko'rinadigan joyga osib qo'yilishi shart. Evakuatsiya yo'llari to'sib qo'yilmasligi va yaxshi yoritilgan bo'lishi kerak."));
  c.push(P("Yong'in aniqlanganda xodim quyidagi tartibda harakat qilishi lozim: darhol yong'in xizmatiga xabar berish; imkoniyat bo'lsa, birlamchi vositalar bilan o't o'chirishga kirishish; odamlarni ogohlantirish va evakuatsiya qilish; elektr va gaz ta'minotini o'chirish; qimmatbaho mol-mulkni imkon qadar saqlab qolish. Bunda o'z hayotini xavf ostiga qo'ymaslik birinchi o'rinda turadi."));

  c.push(H2("9.6. Yong'in signalizatsiyasi va avtomatik o't o'chirish"));
  c.push(P("Yong'inni erta bosqichda aniqlash uning tarqalishining oldini olishda hal qiluvchi ahamiyatga ega. Shu maqsadda binolarga avtomatik yong'in signalizatsiyasi o'rnatiladi. Bu tizim maxsus datchiklar (tutun, issiqlik yoki alanga datchiklari) yordamida yong'in belgilarini aniqlaydi va ovoz hamda yorug'lik signali orqali odamlarni ogohlantiradi, shuningdek yong'in xizmatiga avtomatik xabar yuboradi."));
  c.push(P("Yong'in xavfi yuqori bo'lgan obyektlarda avtomatik o't o'chirish tizimlari (sprinkler va drencher qurilmalari, gazli yoki kukunli o't o'chirish tizimlari) o'rnatiladi. Ular yong'in aniqlangach, odam ishtirokisiz avtomatik ravishda o't o'chirishni boshlaydi. Bunday tizimlar ayniqsa qimmatbaho jihozlar, ombor va ishlab chiqarish sexlarida keng qo'llaniladi."));
  c.push(CAP("9.4-jadval. Yong'in datchiklari turlari"));
  c.push(table(
    [2800, 6838],
    ["Datchik turi", "Ishlash tamoyili va qo'llanilishi"],
    [
      ["Tutun datchigi", "Havodagi tutun zarralarini aniqlaydi; ofis, ombor, turar joylarda"],
      ["Issiqlik datchigi", "Haroratning oshishini yoki belgilangan chegaraga yetishini aniqlaydi"],
      ["Alanga datchigi", "Olovning nurlanishini (UB/IQ) aniqlaydi; tez rivojlanuvchi yong'inlarda"],
      ["Gaz datchigi", "Yonuvchi yoki zaharli gaz konsentratsiyasini aniqlaydi"]
    ]
  ));

  c.push(H3("Bob bo'yicha asosiy xulosalar"));
  c.push(
    BUL("Yonish uchun yonuvchi modda, kislorod va issiqlik manbai kerak;"),
    BUL("Suyuqliklar alangalanish haroratiga, binolar A–D toifalariga bo'linadi;"),
    BUL("Elektr uskunalarini suv yoki ko'pik bilan o'chirish taqiqlanadi;"),
    BUL("CO₂ va kukunli o't o'chirgichlar elektr uchun xavfsiz;"),
    BUL("Evakuatsiya yo'llari doimo ochiq va yoritilgan bo'lishi shart.")
  );
  c.push(PB());
  return c;
};
