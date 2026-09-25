module.exports = (L) => {
  const { H1, H2, H3, P, BUL, NUM, CAP, table, PB } = L;
  const c = [];

  c.push(H1("11-BOB. FAVQULODDA VAZIYATLAR VA BIRINCHI TIBBIY YORDAM"));

  c.push(H2("11.1. Favqulodda vaziyatlar tushunchasi va tasnifi"));
  c.push(P("Favqulodda vaziyat (FV) — muayyan hududda avariya, halokat, tabiiy yoki texnogen ofat natijasida yuzaga keladigan, odamlar halok bo'lishi yoki salomatligiga zarar yetkazilishi, moddiy zarar ko'rilishi va odamlarning hayot sharoiti buzilishi bilan tavsiflanadigan holat. Favqulodda vaziyatlar kelib chiqish manbaiga qarab tasniflanadi."));
  c.push(CAP("11.1-jadval. Favqulodda vaziyatlar tasnifi"));
  c.push(table(
    [2600, 7038],
    ["FV turi", "Misollar"],
    [
      ["Tabiiy", "Zilzila, sel, toshqin, ko'chki, qurg'oqchilik, kuchli shamol, jala"],
      ["Texnogen", "Sanoat avariyalari, portlash, yong'in, kimyoviy va radiatsiyaviy zaharlanish"],
      ["Ekologik", "Havo, suv, tuproqning ifloslanishi, cho'llanish"],
      ["Biologik-ijtimoiy", "Epidemiya, epizootiya (hayvonlar kasalligi), epifitotiya (o'simliklar kasalligi)"]
    ]
  ));
  c.push(P("Favqulodda vaziyatlar tarqalish ko'lamiga qarab ham tasniflanadi: obyekt darajasidagi (bir korxona doirasida), mahalliy, hududiy va yirik miqyosdagi favqulodda vaziyatlar. Har bir korxonada favqulodda vaziyatlarda harakat qilish rejasi ishlab chiqiladi va xodimlar bilan mashg'ulotlar o'tkaziladi."));

  c.push(H2("11.2. Birinchi tibbiy yordamning ahamiyati"));
  c.push(P("Birinchi tibbiy yordam — baxtsiz hodisa yoki to'satdan kasallanish paytida jabrlanuvchiga voqea joyida ko'rsatiladigan dastlabki yordam choralaridir. Bu yordamning o'z vaqtida va to'g'ri ko'rsatilishi ko'p hollarda inson hayotini saqlab qoladi, asoratlarning oldini oladi va tuzalish jarayonini tezlashtiradi. Statistikaga ko'ra, birinchi daqiqalarda ko'rsatilgan to'g'ri yordam o'lim ehtimolini sezilarli darajada kamaytiradi."));
  c.push(P("Birinchi tibbiy yordam ko'rsatishda umumiy tartib quyidagicha: birinchidan, xavf manbaini bartaraf etish yoki jabrlanuvchini xavfli zonadan olib chiqish; ikkinchidan, jabrlanuvchining holatini baholash (hushi, nafasi, yurak urishi); uchinchidan, holatga mos yordam ko'rsatish; to'rtinchidan, tez tibbiy yordamni chaqirish va jabrlanuvchini shifoxonaga yetkazishni tashkil etish."));
  c.push(P("Quyidagi jadvalda turli holatlarda ko'rsatiladigan birinchi tibbiy yordam choralari qisqacha keltirilgan."));
  c.push(CAP("11.2-jadval. Turli holatlarda birinchi tibbiy yordam"));
  c.push(table(
    [2600, 7038],
    ["Holat", "Birinchi yordam choralari"],
    [
      ["Qon ketishi", "Jarohat ustidan bosib turish, jgut (bog'ich) qo'yish, steril bog'lam qo'yish, a'zoni ko'tarish"],
      ["Suyak singishi", "A'zoni qimirlatmaslik, shina (taxta) bilan mahkamlash, sovuq qo'yish"],
      ["Kuyish", "Kiyimni ehtiyotkorlik bilan olib tashlash, sovuq suv bilan sovutish, steril bog'lam"],
      ["Elektr zarbasi", "Tokdan ajratish, nafas va yurak faoliyatini tekshirish, kerak bo'lsa jonlantirish"],
      ["Zaharlanish", "Toza havoga olib chiqish, zaharni chiqarish, ko'p suyuqlik berish"],
      ["Hushdan ketish", "Yotqizish, oyoqlarni ko'tarish, toza havo, ammiak hidlatish"],
      ["Yurak to'xtashi", "Bilvosita yurak massaji va sun'iy nafas oldirish (jonlantirish)"]
    ]
  ));

  c.push(H2("11.3. Jonlantirish (reanimatsiya) choralari"));
  c.push(P("Nafas olish va yurak faoliyati to'xtaganda darhol jonlantirish choralarini boshlash zarur. Bu choralarga sun'iy nafas oldirish va bilvosita (yopiq) yurak massaji kiradi. Jonlantirish choralari qanchalik erta boshlansa, muvaffaqiyat ehtimoli shunchalik yuqori bo'ladi — miya kislorodsizlikka atigi 4–6 daqiqa chidaydi, shundan keyin qaytmas o'zgarishlar boshlanadi."));
  c.push(P("Bilvosita yurak massaji ko'krak qafasining pastki qismiga ritmik bosish orqali amalga oshiriladi (kattalar uchun daqiqada taxminan 100–120 marta). Sun'iy nafas «og'izdan-og'izga» yoki «og'izdan-burunga» usulida beriladi. Bir kishi jonlantirsa, 30 marta bosishdan keyin 2 marta nafas berish nisbatiga rioya qilinadi. Choralar tez yordam kelguniga qadar yoki jabrlanuvchi hushiga kelguniga qadar davom ettiriladi."));

  c.push(H2("11.4. Elektr toki urganда yordam"));
  c.push(P("Elektr toki urgan jabrlanuvchiga yordam ko'rsatishda birinchi navbatda uni tok ta'siridan xavfsiz ajratish kerak. Buning uchun elektr manbaini o'chirish, o'tkazgichni quruq tayoq yoki boshqa dielektrik predmet bilan chetga surish yoki jabrlanuvchini quruq kiyimidan tortib olish lozim. Yordam beruvchi o'zi ham tok ta'siriga tushmasligi uchun ehtiyot choralarini ko'rishi shart."));
  c.push(P("Tokdan ajratilgach, jabrlanuvchining holati baholanadi. Agar u hushida bo'lsa, tinch holatda yotqizilib, tibbiy yordam kutiladi. Agar nafas va yurak faoliyati to'xtagan bo'lsa, darhol jonlantirish choralari boshlanadi. Elektr kuyishlari steril bog'lam bilan yopiladi. Barcha hollarda jabrlanuvchi shifokorga ko'rsatilishi shart, chunki elektr zarbasining oqibatlari keyinroq namoyon bo'lishi mumkin."));

  c.push(H2("11.5. Korxonada favqulodda vaziyatlarga tayyorgarlik"));
  c.push(P("Har bir korxona favqulodda vaziyatlarga oldindan tayyor bo'lishi kerak. Buning uchun favqulodda vaziyatlarda harakat rejalari ishlab chiqiladi, evakuatsiya yo'llari belgilanadi, ogohlantirish tizimlari o'rnatiladi va xodimlar bilan mashg'ulot hamda o'quv-mashqlar o'tkaziladi. Korxonada birinchi tibbiy yordam ko'rsatish uchun dori qutichalari (aptechka) belgilangan joylarga o'rnatiladi."));
  c.push(P("Xodimlar favqulodda vaziyatda o'zini qanday tutishni, kimga xabar berishni, qayerga evakuatsiya qilinishini va birinchi yordam ko'rsatish asoslarini bilishlari shart. Muntazam o'tkaziladigan o'quv-mashqlar xodimlarda kerakli ko'nikmalarni shakllantiradi va haqiqiy favqulodda vaziyatda vahima va chalkashlikning oldini oladi."));

  c.push(H3("Bob bo'yicha asosiy xulosalar"));
  c.push(
    BUL("Favqulodda vaziyatlar tabiiy, texnogen, ekologik va biologik-ijtimoiy turlarga bo'linadi;"),
    BUL("O'z vaqtida ko'rsatilgan birinchi yordam hayot saqlab qoladi;"),
    BUL("Miya kislorodsizlikka atigi 4–6 daqiqa chidaydi — jonlantirishni zudlik bilan boshlash kerak;"),
    BUL("Elektr toki urganda avval jabrlanuvchini xavfsiz tokdan ajratish lozim;"),
    BUL("Korxona favqulodda vaziyatlarga oldindan tayyorgarlik ko'rishi shart.")
  );
  c.push(PB());
  return c;
};
