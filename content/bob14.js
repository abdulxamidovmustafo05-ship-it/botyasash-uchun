module.exports = (L) => {
  const { H1, H2, H3, P, BUL, NUM, CAP, table, PB } = L;
  const c = [];

  c.push(H1("14-BOB. ERGONOMIKA VA MEHNAT GIGIYENASI ASOSLARI"));

  c.push(H2("14.1. Ergonomika tushunchasi"));
  c.push(P("Ergonomika — inson, mehnat vositalari va ishlab chiqarish muhiti o'rtasidagi o'zaro munosabatlarni o'rganuvchi hamda ular uchun eng qulay va samarali sharoitlarni loyihalovchi fandir. Ergonomikaning maqsadi — mehnat vositalari va ish o'rnini insonning anatomik, fiziologik va psixologik xususiyatlariga moslashtirishdan iborat. To'g'ri ergonomik yechim mehnat unumdorligini oshiradi, charchashni kamaytiradi va salomatlikni saqlaydi."));
  c.push(P("Ergonomika bir necha fanlar yutuqlarini birlashtiradi: anatomiya, fiziologiya, psixologiya, gigiyena, muhandislik va dizayn. Ergonomik talablar ish o'rnini loyihalash, uskunalar boshqaruv panellarini joylashtirish, o'rindiqlar konstruksiyasi, ish holati va harakatlar tashkil etilishida hisobga olinadi."));

  c.push(H2("14.2. Ish o'rnini ergonomik tashkil etish"));
  c.push(P("Ish o'rnini to'g'ri tashkil etish xodimning qulay ish holatini, kerakli asbob-uskunalarga qulay yetib borishini va ortiqcha harakatlarning oldini olishni ta'minlaydi. Ish o'rni antropometrik ma'lumotlar — inson tanasi o'lchamlariga asoslangan holda loyihalanadi. Ish yuzasining balandligi, o'rindiq balandligi, oyoq va tirsak uchun bo'sh joy ish turiga va xodim bo'yiga moslab belgilanadi."));
  c.push(P("Ish o'rnini tashkil etishda ish zonalari tushunchasi muhim. Optimal ish zonasi — qo'l tirsakda bukilgan holatda erkin yetib boradigan hudud, bu yerga eng ko'p ishlatiladigan asboblar joylashtiriladi. Maksimal ish zonasi — qo'l to'liq yozilganda yetib boradigan hudud. Kam ishlatiladigan predmetlar shu zonaga qo'yiladi."));
  c.push(CAP("14.1-jadval. O'tirib va tik turib ishlashning qiyosiy tavsifi"));
  c.push(table(
    [3200, 3200, 3238],
    ["Xususiyat", "O'tirib ishlash", "Tik turib ishlash"],
    [
      ["Charchash darajasi", "Kamroq (statik yuk kam)", "Ko'proq (oyoq va bel zo'riqadi)"],
      ["Aniqlik va nozik harakat", "Yuqori", "Pastroq"],
      ["Katta kuch talab qilish", "Cheklangan", "Yuqori kuch qo'llash mumkin"],
      ["Harakatchanlik", "Cheklangan", "Erkin harakat"],
      ["Tavsiya etiladi", "Nozik, aniq, uzoq davomli ishlar", "Kuch va harakat talab qiladigan ishlar"]
    ]
  ));

  c.push(H2("14.3. Mehnat va dam olish rejimi"));
  c.push(P("To'g'ri tashkil etilgan mehnat va dam olish rejimi charchashning oldini oladi va yuqori ish qobiliyatini uzoq vaqt saqlashga yordam beradi. Ish kuni davomida inson ish qobiliyati o'zgarib turadi: ishga kirishish davri, barqaror yuqori qobiliyat davri va charchoq tufayli qobiliyatning pasayishi davri kuzatiladi. Dam olish tanaffuslari aynan qobiliyat pasaya boshlagan paytda belgilanishi kerak."));
  c.push(P("Charchoq — uzoq yoki jadal ishlash natijasida ish qobiliyatining vaqtincha pasayishidir. Charchoqning oldini olish uchun ish jarayonida qisqa muddatli dam olish tanaffuslari, jismoniy mashqlar (ishlab chiqarish gimnastikasi), ish holatini almashtirish va monotonlikni kamaytirish choralari qo'llaniladi. Surunkali charchoq (chalchashning to'planishi) esa salomatlikka jiddiy zarar yetkazadi."));

  c.push(H2("14.4. Mehnat og'irligi va zo'riqishi"));
  c.push(P("Mehnat og'irligi mehnat jarayonining asosan tayanch-harakat tizimi va organizmning funksional tizimlariga tushadigan yuki bilan tavsiflanadi. U ko'tariladigan yuk og'irligi, statik yuk, ish holati, tana qiyshayishlari soni kabi ko'rsatkichlar bilan baholanadi. Mehnat zo'riqishi esa asosan asab tizimi, sezgi organlari va hissiy sohaga tushadigan yuk bilan bog'liq."));
  c.push(CAP("14.2-jadval. Mehnat og'irligi va zo'riqishi ko'rsatkichlari"));
  c.push(table(
    [4819, 4819],
    ["Mehnat og'irligi (jismoniy)", "Mehnat zo'riqishi (asab-ruhiy)"],
    [
      ["Ko'tariladigan yuk og'irligi", "Diqqat konsentratsiyasi darajasi"],
      ["Bir smenadagi statik yuk", "Qabul qilinadigan signallar soni"],
      ["Ish holati (turgan, egilgan)", "Ishning monotonligi"],
      ["Tana qiyshayishlari soni", "Hissiy yuklama va mas'uliyat"],
      ["Yurib bosib o'tiladigan masofa", "Ish smenasi davomiyligi va tuzilishi"]
    ]
  ));

  c.push(H2("14.5. Ranglar va musiqaning ta'siri"));
  c.push(P("Ishlab chiqarish muhitida ranglarning to'g'ri tanlanishi (ishlab chiqarish estetikasi) xodimning kayfiyati, ish qobiliyati va xavfsizligiga ta'sir qiladi. Iliq ranglar (sariq, to'q sariq) faollashtiradi, sovuq ranglar (ko'k, yashil) tinchlantiradi. Ranglar shuningdek xavfsizlik maqsadida ham qo'llaniladi. Funksional musiqa esa monoton ishlarda charchoqni kamaytirish va mehnat unumdorligini oshirish uchun ishlatilishi mumkin."));
  c.push(P("Ish joyining umumiy sanitariya-maishiy sharoitlari — yordamchi xonalar (yechinish xonalari, dush, ovqatlanish xonasi, dam olish xonasi) ham mehnat gigiyenasining muhim qismidir. Ular xodimlarga ish oldidan va keyin tartibga kelish, dam olish va ovqatlanish imkonini beradi, bu esa umumiy salomatlik va ish qobiliyatiga ijobiy ta'sir ko'rsatadi."));

  c.push(H3("Bob bo'yicha asosiy xulosalar"));
  c.push(
    BUL("Ergonomika mehnat vositalarini insonga moslashtiradi;"),
    BUL("Ish o'rni antropometrik ma'lumotlar asosida loyihalanadi;"),
    BUL("To'g'ri mehnat va dam olish rejimi charchoqning oldini oladi;"),
    BUL("Mehnat og'irligi jismoniy, zo'riqishi asab-ruhiy yuk bilan baholanadi;"),
    BUL("Ranglar va sanitariya-maishiy sharoitlar ish qobiliyatiga ta'sir qiladi.")
  );
  c.push(PB());
  return c;
};
