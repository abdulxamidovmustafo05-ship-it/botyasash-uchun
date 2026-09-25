module.exports = (L) => {
  const { H1, H2, P, BUL, CAP, table } = L;
  const c = [];

  c.push(H1("ILOVALAR"));
  c.push(P("Ushbu bo'limda mehnat muhofazasi va texnika xavfsizligi bo'yicha amaliy ma'lumotlar — xavfsizlik belgilari, me'yoriy qiymatlar, sinov muddatlari va nazorat ro'yxatlari (chek-listlar) keltirilgan. Bu materiallardan kundalik ishda ma'lumotnoma sifatida foydalanish mumkin."));

  c.push(H2("1-ilova. Xavfsizlik belgilari guruhlari"));
  c.push(P("Xavfsizlik belgilari xodimlarni xavf haqida ogohlantirish, taqiq yoki majburiyatni bildirish uchun qo'llaniladi. Ular shakli va rangi bilan farqlanadi."));
  c.push(CAP("I.1-jadval. Xavfsizlik belgilarining guruhlari"));
  c.push(table(
    [2200, 2200, 2200, 3038],
    ["Guruh", "Shakli", "Rangi", "Misol"],
    [
      ["Taqiqlovchi", "Doira (chiziqli)", "Qizil", "«Chekish taqiqlanadi», «O'tish taqiqlanadi»"],
      ["Ogohlantiruvchi", "Uchburchak", "Sariq", "«Ehtiyot bo'l — elektr», «Zaharli moddalar»"],
      ["Buyuruvchi", "Doira", "Ko'k", "«Kaska kiy», «Ko'zoynak taq»"],
      ["Ko'rsatuvchi/evakuatsiya", "To'rtburchak", "Yashil", "«Chiqish», «Birinchi yordam punkti»"],
      ["Yong'in xavfsizligi", "To'rtburchak", "Qizil", "«O't o'chirgich», «Yong'in kranı»"]
    ]
  ));

  c.push(H2("2-ilova. Elektr himoya vositalarining sinov muddatlari"));
  c.push(P("Elektr himoya vositalari muntazam sinovdan o'tkaziladi. Muddati o'tgan yoki sinovdan o'tmagan vositalardan foydalanish taqiqlanadi."));
  c.push(CAP("I.2-jadval. Ba'zi elektr himoya vositalarining sinov davriyligi"));
  c.push(table(
    [4800, 2400, 2438],
    ["Himoya vositasi", "Sinov davriyligi", "Ko'rikdan o'tkazish"],
    [
      ["Dielektrik qo'lqoplar", "6 oyda bir marta", "Har foydalanishdan oldin"],
      ["Dielektrik galoshlar", "12 oyda bir marta", "Har foydalanishdan oldin"],
      ["Dielektrik botinkalar", "36 oyda bir marta", "Foydalanishdan oldin"],
      ["Izolyatsiyalovchi shtangalar", "24 oyda bir marta", "Foydalanishdan oldin"],
      ["Kuchlanish ko'rsatkichlari", "12 oyda bir marta", "Foydalanishdan oldin"]
    ]
  ));

  c.push(H2("3-ilova. O't o'chirgichni tanlash"));
  c.push(P("Yong'in turiga (sinfiga) qarab to'g'ri o't o'chirgich tanlanadi. Noto'g'ri tanlangan vosita o't o'chirishda samarasiz yoki xavfli bo'lishi mumkin."));
  c.push(CAP("I.3-jadval. Yong'in sinflari va mos o't o'chirgichlar"));
  c.push(table(
    [1400, 4400, 3838],
    ["Sinf", "Yonuvchi modda", "Mos o't o'chirgich"],
    [
      ["A", "Qattiq moddalar (yog'och, qog'oz, mato)", "Suvli, ko'pikli, kukunli"],
      ["B", "Yonuvchi suyuqliklar (benzin, moy)", "Ko'pikli, kukunli, CO₂"],
      ["C", "Gazlar (propan, metan)", "Kukunli, CO₂"],
      ["D", "Metallar (magniy, natriy)", "Maxsus kukunli"],
      ["E", "Elektr uskunalari (kuchlanish ostida)", "CO₂, kukunli (suv/ko'pik TAQIQLANADI)"]
    ]
  ));

  c.push(H2("4-ilova. Ish o'rni xavfsizligi nazorat ro'yxati (chek-list)"));
  c.push(P("Quyidagi nazorat ro'yxati ish o'rnini kundalik yoki davriy tekshirishda foydalanish uchun mo'ljallangan. Har bir band bo'yicha holat baholanadi."));
  c.push(CAP("I.4-jadval. Ish o'rni xavfsizligini tekshirish ro'yxati"));
  c.push(table(
    [700, 6938, 2000],
    ["№", "Tekshiriladigan band", "Holati (ha/yo'q)"],
    [
      ["1", "Ish o'rni toza va tartibli, o'tish yo'llari ochiq", "___"],
      ["2", "Uskunalarning himoya to'siqlari o'rnatilgan va soz", "___"],
      ["3", "Yoritilganlik yetarli, chiroqlar ishlaydi", "___"],
      ["4", "Ventilyatsiya ishlaydi, havo muhiti me'yorda", "___"],
      ["5", "Elektr o'tkazgichlar va rozetkalar soz holatda", "___"],
      ["6", "Shaxsiy himoya vositalari mavjud va soz", "___"],
      ["7", "O't o'chirgich joyida, zaryadi yetarli, muddati o'tmagan", "___"],
      ["8", "Evakuatsiya yo'llari va chiqishlar ochiq", "___"],
      ["9", "Birinchi yordam qutichasi (aptechka) to'liq", "___"],
      ["10", "Xavfsizlik belgilari o'rnatilgan va ko'rinadi", "___"],
      ["11", "Yo'riqnoma o'tkazilgan, jurnal to'ldirilgan", "___"],
      ["12", "Zararli va yonuvchi moddalar to'g'ri saqlanadi", "___"]
    ]
  ));

  c.push(H2("5-ilova. Mikroiqlim ko'rsatkichlari (issiq davr)"));
  c.push(P("Yilning issiq davrida (o'rtacha kunlik harorat +10 °C dan yuqori) optimal mikroiqlim ko'rsatkichlari sovuq davrga nisbatan yuqoriroq belgilanadi."));
  c.push(CAP("I.5-jadval. Optimal mikroiqlim (issiq davr)"));
  c.push(table(
    [3400, 2100, 2069, 2069],
    ["Ish toifasi", "Harorat, °C", "Namlik, %", "Havo tezligi, m/s"],
    [
      ["Yengil (Ia)", "23–25", "40–60", "0,1"],
      ["Yengil (Ib)", "22–24", "40–60", "0,1–0,2"],
      ["O'rta (IIa)", "20–22", "40–60", "0,2"],
      ["O'rta (IIb)", "19–21", "40–60", "0,2–0,3"],
      ["Og'ir (III)", "18–20", "40–60", "0,3"]
    ]
  ));

  c.push(H2("6-ilova. Gazniqob filtr qutilarining belgilanishi"));
  c.push(P("Filtrlovchi gazniqoblarning filtr qutilari turli zararli moddalarga qarshi mo'ljallangan bo'lib, ular harf va rang bilan belgilanadi. To'g'ri filtr tanlash himoya samaradorligini ta'minlaydi."));
  c.push(CAP("I.6-jadval. Filtr qutilari markalari va qo'llanilishi"));
  c.push(table(
    [1600, 2600, 5438],
    ["Marka", "Rangi", "Nimadan himoya qiladi"],
    [
      ["A", "Jigarrang", "Organik bug'lar (benzin, atseton, erituvchilar)"],
      ["B", "Sariq", "Kislotali gazlar (SO₂, xlor, vodorod sulfidi)"],
      ["G", "Sariq-qora", "Simob bug'lari"],
      ["E", "Qora", "Arsin, fosfin"],
      ["KD", "Kulrang", "Ammiak va uning aralashmalari"],
      ["SO", "Oq", "Uglerod oksidi (CO)"],
      ["M", "Qizil", "Universal — bir necha gaz turiga qarshi"]
    ]
  ));

  c.push(H2("7-ilova. Birinchi yordam qutichasi (aptechka) tarkibi"));
  c.push(P("Har bir ish o'rnida yoki sexda birinchi yordam qutichasi bo'lishi shart. Uning tarkibi muntazam tekshirilib, muddati o'tgan yoki ishlatilgan vositalar to'ldirib turiladi."));
  c.push(CAP("I.7-jadval. Aptechkaning asosiy tarkibi"));
  c.push(table(
    [5200, 2200, 2238],
    ["Vosita / dori", "Miqdori", "Vazifasi"],
    [
      ["Steril bint (bog'lam)", "5 dona", "Jarohatni bog'lash"],
      ["Steril paxta", "1 paket", "Jarohatni tozalash"],
      ["Leykoplastir", "1–2 dona", "Kichik jarohatlarni yopish"],
      ["Jgut (qon to'xtatuvchi bog'ich)", "1 dona", "Kuchli qon ketishini to'xtatish"],
      ["Yod yoki yashil dori (zelyonka)", "1 shisha", "Jarohatni dezinfeksiya qilish"],
      ["Ammiakli spirt (najotkor)", "1 shisha", "Hushdan ketganda hidlatish"],
      ["Bint qaychisi", "1 dona", "Bint va matoni kesish"],
      ["Bir martalik qo'lqop", "2 juft", "Gigiyena va himoya"]
    ]
  ));

  c.push(H2("8-ilova. Nurlanish va elektromagnit maydon me'yorlari"));
  c.push(P("Zamonaviy ishlab chiqarishda elektromagnit maydonlar va nurlanish manbalari keng tarqalgan. Ularning ta'siri me'yorlanadi va nazorat qilinadi."));
  c.push(CAP("I.8-jadval. Ba'zi nurlanish omillari va me'yorlari"));
  c.push(table(
    [4200, 2638, 2800],
    ["Omil", "O'lchov birligi", "Me'yoriy tavsif"],
    [
      ["Sanoat chastotali elektr maydoni", "kV/m", "5 kV/m — cheklovsiz ish vaqti"],
      ["Ovoz balandligidagi shovqin (impuls)", "dBA", "110 dan oshmasligi kerak"],
      ["Ultrabinafsha nurlanish", "Vt/m²", "Manba himoyalanishi shart"],
      ["Ionlashtiruvchi nurlanish (xodimlar)", "mZv/yil", "Yillik doza cheklangan, nazorat majburiy"],
      ["Lazer nurlanishi", "—", "Sinfga qarab himoya choralari"]
    ]
  ));

  c.push(H2("9-ilova. Favqulodda vaziyatda harakatlar tartibi"));
  c.push(P("Favqulodda vaziyat yuz berganda vahima qilmasdan, belgilangan tartibda harakat qilish zarur. Quyidagi jadvalda umumiy harakatlar ketma-ketligi keltirilgan."));
  c.push(CAP("I.9-jadval. Favqulodda vaziyatda umumiy harakatlar"));
  c.push(table(
    [700, 3600, 5338],
    ["№", "Vaziyat", "Harakat"],
    [
      ["1", "Yong'in", "Ogohlantirish → xizmatga xabar → evakuatsiya → o't o'chirish (imkon bo'lsa)"],
      ["2", "Baxtsiz hodisa", "Xavfni bartaraf etish → birinchi yordam → tez yordam chaqirish → xabar berish"],
      ["3", "Gaz sizishi", "Olovni o'chirish → shamollatish → elektrni yoqmaslik → xizmatga xabar"],
      ["4", "Zilzila", "Xotirjamlik → mustahkam joyga o'tish → binodan chiqish → ochiq maydon"],
      ["5", "Elektr zarbasi", "Tokni o'chirish → jabrlanuvchini ajratish → holatni tekshirish → yordam"]
    ]
  ));

  c.push(H2("10-ilova. Muhim eslatmalar"));
  c.push(P("Xavfsiz mehnat faoliyatini ta'minlash uchun quyidagi asosiy qoidalarni doimo yodda tutish lozim:"));
  c.push(
    BUL("Ishni faqat tegishli yo'riqnoma va o'qitishdan o'tgach boshlang;"),
    BUL("Shaxsiy himoya vositalaridan doimo va to'g'ri foydalaning;"),
    BUL("Nosoz uskuna yoki asbobda hech qachon ishlamang;"),
    BUL("Xavf yoki nosozlikni sezsangiz, darhol rahbariyatga xabar bering;"),
    BUL("Elektr uskunalarini suv yoki ho'l qo'l bilan ushlamang;"),
    BUL("Favqulodda vaziyatda tinchlikni saqlang va belgilangan tartibda harakat qiling;"),
    BUL("Birinchi tibbiy yordam ko'rsatish asoslarini biling;"),
    BUL("Xavfsizlik belgilari va ogohlantirishlarga qat'iy amal qiling.")
  );
  c.push(P("Esda tuting: har qanday ishni xavfsiz bajarish mumkin. Xavfsizlik qoidalari — bu cheklovlar emas, balki sizning hayotingiz va salomatligingizni himoya qiluvchi qadriyatlardir."));

  return c;
};
