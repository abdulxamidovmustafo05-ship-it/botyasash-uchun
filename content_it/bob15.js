module.exports = (L) => {
  const { H1, H2, H3, P, BUL, CAP, table, PB } = L;
  const c = [];

  c.push(H1("15-BOB. AXBOROT TEXNOLOGIYALARIDA MEHNAT MUHOFAZASI VA ERGONOMIKA"));

  c.push(H2("15.1. Kompyuterda ishlashda salomatlik masalalari"));
  c.push(P("Kompyuter bilan uzoq muddat ishlash inson salomatligiga salbiy ta'sir ko'rsatishi mumkin. Asosiy xavflar orasida ko'rish organlarining charchashi, umurtqa pog'onasi va bo'yin muammolari, qo'l bilaguzuk bo'g'imi kasalliklari hamda asab-ruhiy zo'riqish bor. Bu muammolarning oldini olish uchun ergonomika qoidalariga rioya qilish zarur."));
  c.push(P("Ergonomika — ish o'rnini va mehnat vositalarini insonning fiziologik xususiyatlariga moslashtiruvchi fandir. To'g'ri tashkil etilgan ish o'rni charchashni kamaytiradi, mehnat unumdorligini oshiradi va salomatlikni saqlaydi. Kompyuterda ishlashda ergonomika alohida ahamiyatga ega."));
  c.push(CAP("15.1-jadval. Kompyuterda ishlashning salomatlikка ta'siri"));
  c.push(table(
    [3200, 3200, 3238],
    ["Ta'sir qiluvchi omil", "Muammo", "Oldini olish"],
    [
      ["Monitor nurlanishi", "Ko'z charchashi, quruqlik", "Tanaffuslar, to'g'ri masofa"],
      ["Noto'g'ri o'tirish", "Bel va bo'yin og'rig'i", "Ergonomik stul, to'g'ri holat"],
      ["Klaviatura/sichqoncha", "Bilaguzuk bo'g'imi kasalligi", "To'g'ri qo'l holati, tanaffus"],
      ["Uzoq o'tirish", "Qon aylanishi buzilishi", "Harakat, mashqlar"],
      ["Yorug'lik yetishmasligi", "Ko'z zo'riqishi", "Yetarli yoritish"]
    ]
  ));

  c.push(H2("15.2. Ish o'rnini to'g'ri tashkil etish"));
  c.push(P("Kompyuterda ishlash o'rni ergonomika talablariga muvofiq tashkil etilishi kerak. Monitor ko'z darajasida va ko'zdan taxminan 50–70 sm masofada joylashtiriladi. Stul balandligi shunday sozlanadiki, oyoqlar polga tekis tegib tursin va tizzalar to'g'ri burchak hosil qilsin. Klaviatura va sichqoncha qo'llar erkin yetadigan joyda bo'lishi kerak."));
  c.push(P("Ish o'rnida yetarli yoritish ta'minlanishi, monitorga to'g'ridan-to'g'ri yorug'lik tushmasligi kerak (aks holda ko'zni qamashtiradi). Xona muntazam shamollatilishi va harorat qulay bo'lishi lozim. To'g'ri tashkil etilgan ish o'rni charchoqni sezilarli darajada kamaytiradi."));

  c.push(H2("15.3. Ish va dam olish rejimi"));
  c.push(P("Kompyuterda uzluksiz ishlash charchoqqa olib keladi, shu sababli muntazam tanaffuslar qilish zarur. Umumiy tavsiya — har 45–50 daqiqa ishdan so'ng 10–15 daqiqa tanaffus qilish. Tanaffus paytida ko'z uchun mashqlar bajarish, o'rindan turib harakatlanish va toza havodan nafas olish foydali."));
  c.push(P("Ko'z charchashining oldini olish uchun «20-20-20» qoidasi tavsiya etiladi: har 20 daqiqada 20 soniya davomida 20 fut (taxminan 6 metr) uzoqlikdagi obyektga qarash. Bu ko'z mushaklarini bo'shashtiradi. Kompyuterda ishlash vaqtini oqilona rejalashtirish salomatlikni saqlashning muhim shartidir."));

  c.push(H2("15.4. Elektr va yong'in xavfsizligi"));
  c.push(P("Kompyuter va boshqa elektron qurilmalar elektr tarmog'iga ulanadi, shu sababli elektr xavfsizligi qoidalariga rioya qilish zarur. Nosoz simlar, ortiqcha yuklangan rozetkalar va ho'l qo'l bilan elektr qurilmalarini ushlash xavflidir. Qurilmalarni to'g'ri ulash va yerga ulash (zazemleniye) muhim ahamiyatga ega."));
  c.push(P("Kompyuter xonalarida yong'in xavfsizligiga alohida e'tibor beriladi. Elektron qurilmalar qizib ketishi yoki qisqa tutashuv natijasida yong'in kelib chiqishi mumkin. Shu sababli qurilmalarni changdan tozalab turish, ventilyatsiyani ta'minlash va yong'in o'chirish vositalarini (CO₂ yoki kukunli o't o'chirgich) tayyor holatda saqlash lozim. Elektr qurilmalarini suv bilan o'chirish qat'iyan taqiqlanadi."));

  c.push(H3("Bob bo'yicha asosiy xulosalar"));
  c.push(
    BUL("Kompyuterda uzoq ishlash ko'rish, umurtqa va bo'g'imlarga ta'sir qiladi;"),
    BUL("Monitor ko'z darajasida, 50–70 sm masofada joylashtiriladi;"),
    BUL("Har 45–50 daqiqada tanaffus qilish tavsiya etiladi («20-20-20» qoidasi);"),
    BUL("Elektr qurilmalarini to'g'ri ulash va yerga ulash zarur;"),
    BUL("Elektr qurilmalarini suv bilan o'chirish taqiqlanadi.")
  );
  c.push(PB());
  return c;
};
