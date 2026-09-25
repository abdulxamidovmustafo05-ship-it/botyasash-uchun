module.exports = (L) => {
  const { H1, H2, H3, P, BUL, NUM, CAP, table, PB } = L;
  const c = [];

  c.push(H1("5-BOB. ISHLAB CHIQARISHDAGI BAXTSIZ HODISALAR VA KASBIY KASALLIKLAR"));

  c.push(H2("5.1. Baxtsiz hodisalar tushunchasi va tasnifi"));
  c.push(P("Ishlab chiqarishdagi baxtsiz hodisa — xodim mehnat vazifalarini bajarish jarayonida xavfli ishlab chiqarish omili ta'sirida jarohatlanishi, salomatligining zararlanishi yoki halok bo'lishi hodisasidir. Baxtsiz hodisalar oqibatlarining og'irligiga va jabrlanuvchilar soniga qarab bir necha turga tasniflanadi. To'g'ri tasniflash hodisani tekshirish tartibini va zarur choralarni belgilashda muhim ahamiyatga ega."));
  c.push(CAP("5.1-jadval. Baxtsiz hodisalar tasnifi"));
  c.push(table(
    [2800, 3200, 3638],
    ["Tasniflash belgisi", "Turi", "Ta'rifi"],
    [
      ["Oqibat og'irligiga ko'ra", "Yengil", "Qisqa muddatli mehnat qobiliyatini yo'qotish"],
      ["", "Og'ir", "Uzoq muddatli yoki barqaror mehnat qobiliyatini yo'qotish"],
      ["", "O'lim bilan tugagan", "Xodimning halok bo'lishi"],
      ["Jabrlanuvchilar soniga ko'ra", "Yakka", "Bir xodim jabr ko'radi"],
      ["", "Guruhli", "Ikki va undan ortiq xodim jabr ko'radi"],
      ["Bog'liqligiga ko'ra", "Ishlab chiqarish bilan bog'liq", "Mehnat vazifalarini bajarish jarayonida"],
      ["", "Ishlab chiqarish bilan bog'liq emas", "Mehnat vazifalaridan tashqari holatda"]
    ]
  ));

  c.push(H2("5.2. Baxtsiz hodisalarni tekshirish tartibi"));
  c.push(P("Har bir ishlab chiqarish bilan bog'liq baxtsiz hodisa belgilangan tartibda tekshirilishi va hisobga olinishi shart. Tekshirishning maqsadi — hodisa sabablarini aniqlash, aybdorlarni belgilash va shunga o'xshash hodisalar takrorlanishining oldini olish choralarini ishlab chiqishdan iborat. Baxtsiz hodisa yuz berganda quyidagi choralar ketma-ket ko'riladi:"));
  L.startList();
  c.push(
    NUM("jabrlanuvchiga zudlik bilan birinchi tibbiy yordam ko'rsatiladi;"),
    NUM("avariya rivojlanishining oldi olinadi, xavfli zona to'siladi;"),
    NUM("hodisa joyi imkon qadar o'zgarishsiz saqlab qolinadi;"),
    NUM("rahbariyat va tegishli organlar xabardor qilinadi;"),
    NUM("tekshiruv komissiyasi tuziladi;"),
    NUM("komissiya sabablarni aniqlaydi va dalolatnoma tuzadi;"),
    NUM("profilaktika choralari ishlab chiqiladi va amalga oshiriladi.")
  );
  c.push(P("Yengil baxtsiz hodisalar korxona komissiyasi tomonidan qisqa muddatda tekshiriladi. Og'ir, guruhli va o'lim bilan tugagan hodisalar esa davlat organlari vakillari ishtirokidagi maxsus komissiya tomonidan tekshiriladi. Tekshiruv natijalari maxsus shakldagi dalolatnoma bilan rasmiylashtiriladi va belgilangan muddat davomida saqlanadi."));

  c.push(H2("5.3. Baxtsiz hodisalar sabablari"));
  c.push(P("Baxtsiz hodisalar sabablari odatda bir necha guruhga bo'linadi. Sabablarni to'g'ri aniqlash profilaktika choralarini samarali ishlab chiqishning asosidir. Amaliyotda ko'p hollarda baxtsiz hodisa bir necha sabablarning birgalikda ta'sir qilishi natijasida yuzaga keladi."));
  c.push(CAP("5.2-jadval. Baxtsiz hodisalarning asosiy sabablari"));
  c.push(table(
    [2600, 7038],
    ["Sabablar guruhi", "Misollar"],
    [
      ["Texnik", "Uskunalarning nosozligi, konstruktiv kamchiliklar, himoya vositalarining yo'qligi, texnologiya buzilishi"],
      ["Tashkiliy", "Yo'riqnoma o'tkazilmasligi, nazorat yetishmasligi, ish o'rnining noto'g'ri tashkil etilishi, mehnat rejimi buzilishi"],
      ["Sanitariya-gigiyena", "Yorug'lik yetishmasligi, shovqin, chang, noqulay mikroiqlim, ventilyatsiya yo'qligi"],
      ["Psixofiziologik", "Charchoq, e'tiborsizlik, malaka yetishmasligi, salomatlik holati, intizomsizlik"]
    ]
  ));

  c.push(H2("5.4. Kasbiy kasalliklar"));
  c.push(P("Kasbiy kasallik — zararli ishlab chiqarish omillari xodim organizmiga uzoq muddat ta'sir etishi natijasida yuzaga keladigan kasallik. Baxtsiz hodisadan farqli o'laroq, kasbiy kasallik to'satdan emas, balki asta-sekin, ba'zan yillar davomida rivojlanadi. Kasbiy kasalliklar o'tkir (bir marta yuqori dozadagi ta'sirdan) va surunkali (uzoq muddatli ta'sirdan) turlarga bo'linadi."));
  c.push(P("Quyidagi jadvalda zararli omillar va ular keltirib chiqaradigan tipik kasbiy kasalliklar keltirilgan."));
  c.push(CAP("5.3-jadval. Zararli omillar va kasbiy kasalliklar"));
  c.push(table(
    [3200, 3200, 3238],
    ["Zararli omil", "Kasbiy kasallik", "Xavf ostidagi kasblar"],
    [
      ["Sanoat changi", "Pnevmokonioz, silikoz, bronxit", "Konchilar, quyuvchilar, tegirmonchilar"],
      ["Shovqin", "Kar bo'lish, eshitish pasayishi", "Metallchilar, to'quvchilar, uchuvchilar"],
      ["Tebranish (vibratsiya)", "Vibratsion kasallik", "Burg'ilovchilar, haydovchilar, betonchilar"],
      ["Zaharli moddalar", "Zaharlanish, kimyoviy kasalliklar", "Kimyogarlar, bo'yoqchilar, akkumulyatorchilar"],
      ["Nurlanish", "Nur kasalligi, katarakta", "Rentgenologlar, atom sanoati xodimlari"],
      ["Og'ir jismoniy mehnat", "Umurtqa va bo'g'im kasalliklari", "Yuk ko'taruvchilar, quruvchilar"]
    ]
  ));

  c.push(H2("5.5. Jarohatlanish ko'rsatkichlari"));
  c.push(P("Korxonadagi jarohatlanish holatini baholash uchun maxsus statistik ko'rsatkichlardan foydalaniladi. Bu ko'rsatkichlar turli korxona va sohalardagi jarohatlanish darajasini qiyoslash, dinamikani kuzatish va profilaktika ishlarining samaradorligini baholash imkonini beradi. Asosiy ko'rsatkichlar quyidagi jadvalda keltirilgan."));
  c.push(CAP("5.4-jadval. Jarohatlanish statistik ko'rsatkichlari"));
  c.push(table(
    [2600, 3400, 3638],
    ["Ko'rsatkich", "Hisoblash usuli", "Nimani ko'rsatadi"],
    [
      ["Chastota koeffitsiyenti (Kch)", "Kch = (N × 1000) / P", "1000 xodimga to'g'ri keladigan baxtsiz hodisalar soni"],
      ["Og'irlik koeffitsiyenti (Kog)", "Kog = D / N", "Bir hodisaga to'g'ri keladigan yo'qotilgan ish kunlari"],
      ["Yo'qotishlar koeffitsiyenti (Kyo)", "Kyo = Kch × Kog", "Umumiy jarohatlanish og'irligini baholash"]
    ]
  ));
  c.push(P("Bu yerda N — hodisalar soni, P — xodimlarning o'rtacha soni, D — yo'qotilgan ish kunlari soni. Ko'rsatkichlarni davriy hisoblab borish korxonada mehnat muhofazasi holati yaxshilanayotgani yoki yomonlashayotganini aniq baholashga yordam beradi."));

  c.push(H3("Bob bo'yicha asosiy xulosalar"));
  c.push(
    BUL("Baxtsiz hodisalar og'irligi va jabrlanuvchilar soniga ko'ra tasniflanadi;"),
    BUL("Har bir hodisa belgilangan tartibda tekshiriladi va hisobga olinadi;"),
    BUL("Sabablar texnik, tashkiliy, sanitariya-gigiyena va psixofiziologik guruhlarga bo'linadi;"),
    BUL("Kasbiy kasallik zararli omillarning uzoq muddatli ta'siridan kelib chiqadi;"),
    BUL("Jarohatlanish darajasi maxsus statistik koeffitsiyentlar bilan baholanadi.")
  );
  c.push(PB());
  return c;
};
