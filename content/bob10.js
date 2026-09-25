module.exports = (L) => {
  const { H1, H2, H3, P, BUL, NUM, CAP, table, PB } = L;
  const c = [];

  c.push(H1("10-BOB. SHAXSIY VA JAMOAVIY HIMOYA VOSITALARI"));

  c.push(H2("10.1. Himoya vositalari tushunchasi va tasnifi"));
  c.push(P("Himoya vositalari — xodimni zararli va xavfli ishlab chiqarish omillari ta'siridan himoya qilishga mo'ljallangan texnik vositalardir. Ular jamoaviy himoya vositalari (JHV) va shaxsiy himoya vositalari (SHV) ga bo'linadi. Jamoaviy himoya vositalari barcha xodimlarni bir vaqtda himoya qiladi (masalan, ventilyatsiya, to'siqlar, yerga ulash), shaxsiy himoya vositalari esa har bir xodimni alohida himoya qiladi."));
  c.push(P("Muhim tamoyil shundaki, shaxsiy himoya vositalari faqat jamoaviy himoya vositalari yetarli darajada himoya bera olmagan yoki texnik jihatdan qo'llab bo'lmaydigan hollarda ishlatiladi. Ya'ni avval jamoaviy choralar bilan xavfni kamaytirishga harakat qilinadi, so'ngra qolgan xavfdan himoyalanish uchun SHV qo'llaniladi. Shaxsiy himoya vositalari xodimlarga bepul beriladi."));

  c.push(H2("10.2. Shaxsiy himoya vositalarining turlari"));
  c.push(P("Shaxsiy himoya vositalari himoya qiladigan tana qismiga qarab turlarga bo'linadi. Har bir SHV turi muayyan omilga qarshi himoya qilishga mo'ljallangan. Quyidagi jadvalda SHV turlari va ularning vazifasi keltirilgan."));
  c.push(CAP("10.1-jadval. Shaxsiy himoya vositalari turlari"));
  c.push(table(
    [2900, 3400, 3338],
    ["SHV turi", "Namunalari", "Nimadan himoya qiladi"],
    [
      ["Nafas organlari himoyasi", "Respirator, gazniqob, niqob", "Chang, gaz, bug', aerozollardan"],
      ["Bosh himoyasi", "Kaska, shlem, bosh kiyim", "Predmet tushishi, zarbadan"],
      ["Ko'z va yuz himoyasi", "Ko'zoynak, yuz qalqoni, ekran", "Uchqun, chang, nurlanish, kimyoviy sachrashdan"],
      ["Eshitish himoyasi", "Quloqchin (naushnik), berush", "Yuqori shovqindan"],
      ["Qo'l himoyasi", "Qo'lqop, kraga", "Kesilish, kuyish, kimyoviy va elektrdan"],
      ["Oyoq himoyasi", "Maxsus poyabzal, botinka, etik", "Zarba, kesilish, sirpanish, elektrdan"],
      ["Tana himoyasi", "Kombinezon, xalat, kostyum", "Ifloslanish, issiqlik, kimyoviy ta'sirdan"],
      ["Yiqilishdan himoya", "Xavfsizlik kamari, arqon", "Balandlikdan yiqilishdan"]
    ]
  ));

  c.push(H2("10.3. Nafas organlarini himoya qilish vositalari"));
  c.push(P("Nafas organlarini himoya qilish vositalari havodagi zararli moddalardan himoya qilishning eng muhim usullaridan biridir. Ular ikki asosiy guruhga bo'linadi: filtrlovchi vositalar (havoni tozalab beradi) va izolyatsiyalovchi vositalar (toza havoni tashqi manbadan yetkazib beradi). Filtrlovchi vositalar havoda kislorod yetarli va zararli modda konsentratsiyasi juda yuqori bo'lmagan hollarda ishlatiladi."));
  c.push(P("Respiratorlar asosan changdan himoya qilish uchun, gazniqoblar esa zaharli gaz va bug'lardan himoya qilish uchun mo'ljallangan. Gazniqoblarning filtr qutilari turli zararli moddalarga qarshi turli xil bo'ladi va ular rangi bilan farqlanadi. Kislorod yetishmaydigan yoki zararli modda konsentratsiyasi juda yuqori bo'lgan joylarda faqat izolyatsiyalovchi (shlangli yoki ballonli) apparatlardan foydalaniladi."));

  c.push(H2("10.4. SHV bilan ta'minlash normalari"));
  c.push(P("Har bir kasb va ish turi uchun shaxsiy himoya vositalari bilan ta'minlashning tipik normalari belgilanadi. Bu normalarda xodimga qanday SHV, qancha miqdorda va qanday muddatga berilishi ko'rsatiladi. SHV belgilangan muddat tugagach yoki yaroqsiz holga kelganda yangisiga almashtiriladi. Quyidagi jadvalda ba'zi kasblar uchun taxminiy SHV normalari keltirilgan."));
  c.push(CAP("10.2-jadval. Ba'zi kasblar uchun SHV normalari (namuna)"));
  c.push(table(
    [3000, 4638, 2000],
    ["Kasb", "Beriladigan SHV", "Muddat"],
    [
      ["Payvandlovchi", "Brezent kostyum, kraga qo'lqop, yuz qalqoni, maxsus poyabzal", "12 oy"],
      ["Tokar / frezerchi", "Kombinezon, ko'zoynak, yarim botinka", "12 oy"],
      ["Elektromontyor", "Dielektrik qo'lqop va galosh, kombinezon, kaska", "Belgilangan tartibda"],
      ["Kimyogar-laborant", "Xalat, rezina qo'lqop, respirator, ko'zoynak", "12 oy"],
      ["Quruvchi", "Kombinezon, kaska, xavfsizlik kamari, botinka", "12 oy"]
    ]
  ));

  c.push(H2("10.5. SHV dan foydalanish va saqlash"));
  c.push(P("Shaxsiy himoya vositalari faqat to'g'ri ishlatilgandagina samarali bo'ladi. Xodim SHV dan foydalanish qoidalarini bilishi, uni ish oldidan tekshirishi va soz holatda saqlashi shart. Nosoz yoki yaroqsiz SHV ishlatilmaydi. Ish beruvchi SHV ni tozalash, dezinfeksiya qilish, ta'mirlash va o'z vaqtida almashtirishni ta'minlashi lozim."));
  c.push(P("SHV lar maxsus ajratilgan, toza va quruq joylarda saqlanadi. Ba'zi SHV lar (masalan, gazniqoblar, dielektrik himoya vositalari) muntazam sinovdan o'tkaziladi va ularning yaroqlilik muddati nazorat qilinadi. Yaroqlilik muddati o'tgan yoki sinovdan o'tmagan himoya vositalarini ishlatish qat'iyan taqiqlanadi."));

  c.push(H3("Bob bo'yicha asosiy xulosalar"));
  c.push(
    BUL("Himoya vositalari jamoaviy (JHV) va shaxsiy (SHV) turlarga bo'linadi;"),
    BUL("SHV faqat jamoaviy himoya yetarli bo'lmaganda qo'llaniladi va bepul beriladi;"),
    BUL("SHV himoya qiladigan tana qismiga qarab turlarga ajratiladi;"),
    BUL("Nafas himoyasi filtrlovchi va izolyatsiyalovchi turlarga bo'linadi;"),
    BUL("Nosoz yoki muddati o'tgan SHV ishlatilmaydi.")
  );
  c.push(PB());
  return c;
};
