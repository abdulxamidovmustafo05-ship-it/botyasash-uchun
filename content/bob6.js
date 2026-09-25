module.exports = (L) => {
  const { H1, H2, H3, P, BUL, NUM, CAP, table, PB } = L;
  const c = [];

  c.push(H1("6-BOB. ISHLAB CHIQARISH SANITARIYASI VA GIGIYENASI"));

  c.push(H2("6.1. Ishlab chiqarish sanitariyasi tushunchasi"));
  c.push(P("Ishlab chiqarish sanitariyasi — zararli ishlab chiqarish omillarining xodim organizmiga ta'sirini oldini oluvchi tashkiliy, gigiyena va sanitariya-texnik chora-tadbirlar tizimidir. Uning asosiy vazifasi — ish o'rnida sog'lom mehnat sharoitini yaratish, kasbiy kasalliklar va zaharlanishlarning oldini olishdan iborat. Ishlab chiqarish sanitariyasi mehnat gigiyenasi ilmi yutuqlariga tayanadi."));
  c.push(P("Zararli ishlab chiqarish omillari fizik, kimyoviy, biologik va psixofiziologik guruhlarga bo'linadi. Har bir omil uchun ruxsat etilgan chegaraviy qiymat (REChQ yoki PDK) belgilanadi — bu shunday miqdorki, undan oshmaganda omil xodim salomatligiga zarar yetkazmaydi. Quyidagi jadvalda zararli omillar guruhlari keltirilgan."));
  c.push(CAP("6.1-jadval. Zararli ishlab chiqarish omillari tasnifi"));
  c.push(table(
    [2200, 7438],
    ["Omillar guruhi", "Misollar"],
    [
      ["Fizik omillar", "Harorat, namlik, havo harakati, shovqin, tebranish, chang, nurlanish, yoritish"],
      ["Kimyoviy omillar", "Zaharli gazlar, bug'lar, aerozollar, kislotalar, ishqorlar, erituvchilar"],
      ["Biologik omillar", "Mikroorganizmlar, bakteriyalar, viruslar, zamburug'lar, oqsilli preparatlar"],
      ["Psixofiziologik omillar", "Jismoniy zo'riqish, asab-ruhiy zo'riqish, monotonlik, mehnat rejimi"]
    ]
  ));

  c.push(H2("6.2. Ishlab chiqarish mikroiqlimi"));
  c.push(P("Ish zonasi mikroiqlimi harorat, nisbiy namlik, havo harakati tezligi va issiqlik nurlanishi bilan tavsiflanadi. Bu ko'rsatkichlar xodimning issiqlik almashinuviga va, natijada, uning ish qobiliyati hamda salomatligiga bevosita ta'sir qiladi. Noqulay mikroiqlim organizmning haddan tashqari qizishi yoki sovushiga olib kelishi mumkin."));
  c.push(P("Mikroiqlim ko'rsatkichlari optimal va ruxsat etilgan qiymatlarga bo'linadi. Optimal qiymatlar to'liq qulaylik va yuqori ish qobiliyatini ta'minlaydi. Ruxsat etilgan qiymatlar esa kichik va tez o'tib ketadigan noqulaylikni keltirib chiqarishi mumkin, ammo salomatlikka zarar yetkazmaydi. Quyidagi jadvalda ish og'irligi toifalari bo'yicha optimal mikroiqlim ko'rsatkichlari keltirilgan."));
  c.push(CAP("6.2-jadval. Optimal mikroiqlim ko'rsatkichlari (sovuq davr)"));
  c.push(table(
    [3400, 2100, 2069, 2069],
    ["Ish toifasi", "Harorat, °C", "Namlik, %", "Havo tezligi, m/s"],
    [
      ["Yengil (Ia) — o'tirib ishlash", "22–24", "40–60", "0,1"],
      ["Yengil (Ib) — kam harakat", "21–23", "40–60", "0,1"],
      ["O'rta (IIa)", "19–21", "40–60", "0,2"],
      ["O'rta (IIb)", "17–19", "40–60", "0,2"],
      ["Og'ir (III)", "16–18", "40–60", "0,3"]
    ]
  ));
  c.push(P("Issiq davrda (yozda) harorat normalari 2–4 °C ga yuqoriroq belgilanadi. Mikroiqlimni me'yorda ushlab turish uchun isitish, ventilyatsiya, konditsionerlash tizimlari, issiqlik manbalarini izolyatsiya qilish va boshqa chora-tadbirlardan foydalaniladi."));

  c.push(H2("6.3. Ish joyini yoritish"));
  c.push(P("To'g'ri tashkil etilgan yoritish mehnat unumdorligini oshiradi, jarohatlanish xavfini kamaytiradi va ko'rish organlarini himoya qiladi. Yetarli bo'lmagan yoki noto'g'ri yoritish ko'zning charchashiga, ko'rish qobiliyatining pasayishiga va baxtsiz hodisalarga sabab bo'ladi. Ishlab chiqarish yoritilishi tabiiy, sun'iy va aralash turlarga bo'linadi."));
  c.push(P("Yoritilganlik darajasi lyuks (lk) birligida o'lchanadi va bajarilayotgan ishning aniqlik darajasiga bog'liq holda me'yorlanadi. Ish qanchalik nozik bo'lsa, yoritilganlik shunchalik yuqori bo'lishi kerak. Quyidagi jadvalda ish aniqligiga qarab yoritilganlik normalari keltirilgan."));
  c.push(CAP("6.3-jadval. Sun'iy yoritilganlik normalari"));
  c.push(table(
    [3400, 3138, 3100],
    ["Ish aniqligi darajasi", "Obyekt o'lchami, mm", "Yoritilganlik normasi, lk"],
    [
      ["Eng yuqori aniqlikdagi ish", "0,15 dan kichik", "1500–5000"],
      ["Juda yuqori aniqlik", "0,15–0,30", "1000–4000"],
      ["Yuqori aniqlik", "0,30–0,50", "750–2000"],
      ["O'rta aniqlik", "0,50–1,0", "300–750"],
      ["Past aniqlik", "1,0–5,0", "200–300"],
      ["Qo'pol (aniqligi past) ish", "5,0 dan katta", "100–200"]
    ]
  ));

  c.push(H2("6.4. Shovqin va tebranish"));
  c.push(P("Shovqin — inson uchun noxush yoki zararli bo'lgan tovushlar majmui. Uzoq muddatli yuqori shovqin eshitish qobiliyatining pasayishiga, asab tizimining zo'riqishiga, qon bosimining oshishiga va mehnat unumdorligining kamayishiga olib keladi. Shovqin darajasi desibel (dBA) birligida o'lchanadi. Ish o'rinlarida ruxsat etilgan shovqin darajasi ish turiga bog'liq holda belgilanadi."));
  c.push(CAP("6.4-jadval. Ruxsat etilgan shovqin darajalari"));
  c.push(table(
    [6538, 3100],
    ["Ish joyi turi", "REChD, dBA"],
    [
      ["Ijodiy, ilmiy faoliyat, loyihalash", "50"],
      ["Yuqori malaka talab qiluvchi ma'muriy ish", "60"],
      ["Operator xonalari, laboratoriyalar", "65"],
      ["Doimiy ish o'rinlari (ishlab chiqarish sexlari)", "80"],
      ["Kuchli shovqinli sexlar (SHV bilan)", "85 dan yuqori — himoya majburiy"]
    ]
  ));
  c.push(P("Tebranish (vibratsiya) — mexanik tebranishlarning inson organizmiga ta'siri. U mahalliy (qo'l orqali, masalan, elektr asboblardan) va umumiy (butun tana orqali, masalan, transport vositalarida) turlarga bo'linadi. Uzoq muddatli tebranish ta'sirida vibratsion kasallik rivojlanadi. Shovqin va tebranishga qarshi kurashda tovush yutuvchi materiallar, amortizatorlar, dinamik ravishda muvozanatlangan uskunalar va shaxsiy himoya vositalaridan foydalaniladi."));

  c.push(H2("6.5. Havodagi zararli moddalar"));
  c.push(P("Ishlab chiqarish jarayonida havoga turli zararli moddalar — chang, gazlar, bug'lar ajralib chiqishi mumkin. Ular nafas olish, teri yoki hazm yo'llari orqali organizmga kirib, zaharlanish yoki kasbiy kasalliklarga sabab bo'ladi. Har bir zararli modda uchun ish zonasi havosidagi ruxsat etilgan chegaraviy konsentratsiya (PDK) belgilanadi. Quyidagi jadvalda ba'zi moddalarning PDK qiymatlari keltirilgan."));
  c.push(CAP("6.5-jadval. Ba'zi zararli moddalarning ruxsat etilgan konsentratsiyasi"));
  c.push(table(
    [4200, 2638, 2800],
    ["Modda", "PDK, mg/m³", "Xavflilik sinfi"],
    [
      ["Uglerod oksidi (CO)", "20", "IV"],
      ["Azot dioksidi (NO₂)", "2", "III"],
      ["Oltingugurt dioksidi (SO₂)", "10", "III"],
      ["Ammiak (NH₃)", "20", "IV"],
      ["Xlor (Cl₂)", "1", "II"],
      ["Simob (Hg) bug'lari", "0,01", "I"],
      ["Qo'rg'oshin (Pb) va birikmalari", "0,01", "I"],
      ["Sanoat changi (silikatlar)", "1–4", "III–IV"]
    ]
  ));
  c.push(P("Xavflilik sinfi moddaning zararlilik darajasini bildiradi: I sinf — o'ta xavfli, II — yuqori xavfli, III — o'rtacha xavfli, IV — kam xavfli. PDK qiymati qanchalik kichik bo'lsa, modda shunchalik xavfli hisoblanadi. Havodagi zararli moddalar konsentratsiyasi maxsus asboblar bilan muntazam nazorat qilinadi."));

  c.push(H2("6.6. Ventilyatsiya"));
  c.push(P("Ventilyatsiya — ishlab chiqarish binolarida havo almashinuvini ta'minlash, zararli moddalar, ortiqcha issiqlik va namlikni chiqarib yuborish tizimidir. Ventilyatsiya tabiiy va mexanik (sun'iy) turlarga bo'linadi. Mexanik ventilyatsiya, o'z navbatida, so'ruvchi, puflovchi va aralash turlarga bo'linadi."));
  c.push(P("Ventilyatsiya samaradorligi havo almashinuvi karrasi bilan baholanadi — bu bir soatda xona havosining necha marta almashinishini ko'rsatadi. Zararli moddalar ko'p ajraladigan joylarda mahalliy so'ruvchi ventilyatsiya (so'rgichlar, shkaflar) qo'llaniladi, bu esa zararli moddalarni manbaida ushlab qolish imkonini beradi."));

  c.push(H2("6.7. Suv ta'minoti va sanitariya-maishiy xonalar"));
  c.push(P("Ishlab chiqarish korxonalarida xodimlar uchun tegishli sanitariya-maishiy sharoitlar yaratilishi shart. Bunga ichimlik suvi bilan ta'minlash, yuvinish xonalari, hojatxonalar, kiyim almashtirish xonalari (garderob), ovqatlanish va dam olish xonalari kiradi. Bu xonalarning soni va jihozi xodimlar soni hamda ishlab chiqarish jarayonlarining sanitariya tavsifiga qarab belgilanadi."));
  c.push(P("Zararli moddalar bilan ishlaydigan xodimlar uchun maxsus yuvinish vositalari, dush va zararsizlantirish moslamalari nazarda tutiladi. Issiq sexlarda ishlaydigan xodimlar tuz-mineral tarkibli ichimliklar bilan ta'minlanadi. Bunday choralar xodimlarning shaxsiy gigiyenasini ta'minlaydi va zararli moddalarning organizmga kirishini kamaytiradi."));

  c.push(H3("Bob bo'yicha asosiy xulosalar"));
  c.push(
    BUL("Ishlab chiqarish sanitariyasi zararli omillar ta'sirini oldini oladi;"),
    BUL("Mikroiqlim harorat, namlik va havo harakati bilan tavsiflanadi;"),
    BUL("Yoritilganlik ish aniqligiga qarab lyuksda me'yorlanadi;"),
    BUL("Shovqin dBA da o'lchanadi, ruxsat etilgan daraja ish turiga bog'liq;"),
    BUL("Har bir zararli modda uchun PDK va xavflilik sinfi belgilanadi;"),
    BUL("Ventilyatsiya sog'lom havo muhitini ta'minlaydi.")
  );
  c.push(PB());
  return c;
};
