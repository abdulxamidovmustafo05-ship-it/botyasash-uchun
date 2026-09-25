module.exports = (L) => {
  const { H1, H2, H3, P, BUL, NUM, CAP, table, PB } = L;
  const W = L.CONTENT_WIDTH;
  const c = [];

  c.push(H1("1-BOB. MEHNAT MUHOFAZASINING ASOSLARI"));

  c.push(H2("1.1. Mehnat muhofazasi tushunchasi, maqsadi va vazifalari"));
  c.push(P("Mehnat muhofazasi — mehnat faoliyati jarayonida xodimlarning hayoti va salomatligini saqlashga qaratilgan huquqiy, ijtimoiy-iqtisodiy, tashkiliy-texnik, sanitariya-gigiyena, davolash-profilaktika, reabilitatsiya va boshqa chora-tadbirlar hamda vositalarning yagona tizimidir. Bu tizim bir-biri bilan chambarchas bog'liq bo'lgan bir necha yo'nalishni o'z ichiga oladi va ularning har biri xodimni muayyan xavf turidan himoya qilishga xizmat qiladi."));
  c.push(P("Mehnat muhofazasining bosh maqsadi — mehnat jarayonida inson uchun eng qulay va xavfsiz sharoitlarni yaratish, baxtsiz hodisalar, jarohatlanish va kasbiy kasalliklarni imkon qadar kamaytirish yoki butunlay bartaraf etishdir. Bu maqsad quyidagi asosiy vazifalar orqali amalga oshiriladi:"));
  L.startList();
  c.push(
    NUM("mehnat sharoitlarini muntazam o'rganish, xavfli va zararli omillarni aniqlash hamda baholash;"),
    NUM("ishlab chiqarish jarayonlari, mashina va uskunalarni xavfsiz holatda ushlab turish;"),
    NUM("xodimlarni jamoaviy va shaxsiy himoya vositalari bilan ta'minlash;"),
    NUM("mehnat muhofazasi bo'yicha o'qitish, yo'riqnoma va targ'ibot ishlarini tashkil etish;"),
    NUM("davolash-profilaktika tadbirlarini o'tkazish, tibbiy ko'rikdan o'tkazish;"),
    NUM("baxtsiz hodisalar va kasbiy kasalliklarni tekshirish, hisobga olish va tahlil qilish;"),
    NUM("mehnat muhofazasi qoidalariga rioya etilishi ustidan nazorat o'rnatish.")
  );

  c.push(P("Mehnat muhofazasi fani bir nechta mustaqil, ammo o'zaro bog'liq yo'nalishlardan tashkil topgan. Ularning har biri o'z predmeti va usullariga ega. Quyidagi jadvalda mehnat muhofazasining tarkibiy qismlari va ularning mazmuni keltirilgan."));
  c.push(CAP("1.1-jadval. Mehnat muhofazasining tarkibiy qismlari"));
  c.push(table(
    [1400, 3300, 4938],
    ["Tarkibiy qism", "Predmeti", "Asosiy vazifasi"],
    [
      ["Mehnat qonunchiligi", "Mehnat munosabatlarini tartibga soluvchi huquqiy normalar", "Xodim va ish beruvchi huquq-majburiyatlarini belgilash, kafolatlar berish"],
      ["Texnika xavfsizligi", "Mashina, mexanizm va jarayonlarning xavfsizligi", "Jarohatlanishning texnik sabablarini bartaraf etish"],
      ["Ishlab chiqarish sanitariyasi", "Zararli ishlab chiqarish omillari va ularning inson organizmiga ta'siri", "Kasbiy kasalliklarning oldini olish, sog'lom mikroiqlim yaratish"],
      ["Yong'in xavfsizligi", "Yong'in chiqishi va uning oldini olish", "Yong'in xavfini kamaytirish, o't o'chirish vositalari bilan ta'minlash"],
      ["Mehnat gigiyenasi", "Mehnat va dam olish rejimi, mehnat fiziologiyasi", "Charchashning oldini olish, mehnat qobiliyatini saqlash"]
    ]
  ));

  c.push(H2("1.2. Mehnat muhofazasining asosiy tamoyillari"));
  c.push(P("Mehnat muhofazasi tizimi bir qator asosiy tamoyillarga tayanadi. Bu tamoyillar davlat siyosatining ustuvor yo'nalishlarini belgilaydi va ularga rioya etilishi mehnat muhofazasining samaradorligini ta'minlaydi. Asosiy tamoyillar quyidagilardan iborat:"));
  c.push(
    BUL("xodimning hayoti va salomatligi ishlab chiqarish natijalaridan ustun qo'yiladi;"),
    BUL("davlat tomonidan mehnat muhofazasi bo'yicha yagona siyosat olib borilishi;"),
    BUL("mehnat muhofazasi talablarining barcha korxonalar uchun majburiyligi;"),
    BUL("baxtsiz hodisalar oldini olishning davolash tadbirlaridan ustunligi (profilaktika ustunligi);"),
    BUL("xodimlarni ijtimoiy sug'urta qilish, ularga kafolatli qoplamalar berish;"),
    BUL("mehnat muhofazasi masalalarida ish beruvchi, xodim va davlatning hamkorligi;"),
    BUL("ilmiy-texnik yutuqlar va ilg'or tajribani joriy etish.")
  );
  c.push(P("Ushbu tamoyillar orasida profilaktika ustunligi alohida ahamiyatga ega. U baxtsiz hodisa yuz bergandan keyin uni tekshirish va oqibatlarini bartaraf etishdan ko'ra, uning sodir bo'lishiga yo'l qo'ymaslik ancha maqsadga muvofiq ekanini anglatadi. Amaliyot shuni ko'rsatadiki, profilaktikaga sarflangan har bir mablag' baxtsiz hodisa oqibatlarini bartaraf etishga sarflanadigan mablag'dan bir necha barobar kam bo'ladi."));

  c.push(H2("1.3. Asosiy atamalar va tushunchalar"));
  c.push(P("Mehnat muhofazasi sohasida ishlatiladigan atamalar aniq va bir xil ma'noda tushunilishi lozim. Quyidagi jadvalda eng ko'p qo'llaniladigan atamalar va ularning ta'riflari keltirilgan."));
  c.push(CAP("1.2-jadval. Mehnat muhofazasining asosiy atamalari"));
  c.push(table(
    [2200, 7438],
    ["Atama", "Ta'rifi"],
    [
      ["Xavfli ishlab chiqarish omili", "Ta'siri natijasida xodim to'satdan jarohatlanadigan yoki salomatligi keskin yomonlashadigan omil (masalan, harakatlanuvchi qism, elektr toki, yuqori harorat)."],
      ["Zararli ishlab chiqarish omili", "Ta'siri natijasida xodim kasbiy kasallikka chalinadigan yoki mehnat qobiliyati pasayadigan omil (masalan, chang, shovqin, tebranish, zaharli gaz)."],
      ["Mehnat sharoitlari", "Mehnat jarayonida xodimning ish qobiliyati va salomatligiga ta'sir etuvchi omillar majmui."],
      ["Xavfsizlik texnikasi", "Xodimlarga xavfli ishlab chiqarish omillari ta'sirini oldini oluvchi tashkiliy va texnik chora-tadbirlar tizimi."],
      ["Baxtsiz hodisa", "Mehnat vazifalarini bajarish jarayonida xodim salomatligiga yetkazilgan shikast yoki jarohat."],
      ["Kasbiy kasallik", "Zararli ishlab chiqarish omillari uzoq muddat ta'sir etishi natijasida yuzaga keladigan kasallik."],
      ["Ish joyi", "Xodim mehnat vazifalarini bajaradigan va ish beruvchi nazorati ostida bo'lgan joy."],
      ["Shaxsiy himoya vositasi (SHV)", "Xodimni zararli va xavfli omillar ta'siridan himoya qilishga mo'ljallangan vosita."],
      ["Xavf (risk)", "Xavfli hodisa yuz berish ehtimoli va uning oqibatlari og'irligining kombinatsiyasi."]
    ]
  ));

  c.push(H2("1.4. Mehnat muhofazasining rivojlanish tarixi"));
  c.push(P("Mehnat muhofazasi to'g'risidagi dastlabki tasavvurlar qadimgi davrlarga borib taqaladi. Antik davr olimlari, jumladan Gippokrat va Galen, ba'zi hunar egalarida uchraydigan kasalliklarni ta'riflab bergan. Biroq mehnat muhofazasi mustaqil fan sifatida sanoat inqilobi davrida, XVIII–XIX asrlarda shakllana boshladi. Bu davrda korxonalarda mashinalar keng joriy etilishi bilan jarohatlanish hollari keskin ko'paydi va bu mehnatni muhofaza qilish choralarini ishlab chiqishni taqozo etdi."));
  c.push(P("XX asrga kelib mehnat muhofazasi to'liq shakllangan ilmiy-amaliy sohaga aylandi. 1919-yilda tashkil etilgan Xalqaro Mehnat Tashkiloti (XMT) mehnat muhofazasi bo'yicha xalqaro standartlarni ishlab chiqishda muhim rol o'ynadi. Bugungi kunda mehnat muhofazasi ergonomika, mehnat psixologiyasi, tibbiyot, texnika fanlari va huquqshunoslik yutuqlarini o'zida jamlagan integratsiyalashgan sohadir."));
  c.push(P("O'zbekiston Respublikasida mustaqillik yillarida mehnat muhofazasi sohasida keng islohotlar amalga oshirildi. «Mehnat muhofazasi to'g'risida»gi qonun qabul qilindi, Mehnat kodeksida xodim huquqlari mustahkamlandi, xalqaro mehnat standartlariga muvofiq milliy me'yoriy hujjatlar ishlab chiqildi. Bu tizim doimiy takomillashtirilib borilmoqda."));

  c.push(H3("Bob bo'yicha asosiy xulosalar"));
  c.push(
    BUL("Mehnat muhofazasi — xodim hayoti va salomatligini saqlashga qaratilgan chora-tadbirlarning yagona tizimidir;"),
    BUL("U huquqiy, texnik, sanitariya-gigiyena va tashkiliy yo'nalishlarni birlashtiradi;"),
    BUL("Xavfli omillar to'satdan jarohatlanishga, zararli omillar esa kasbiy kasallikka olib keladi;"),
    BUL("Profilaktika baxtsiz hodisa oqibatlarini bartaraf etishdan samaraliroq va arzonroqdir.")
  );
  c.push(PB());
  return c;
};
