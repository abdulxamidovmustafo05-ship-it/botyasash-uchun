module.exports = (L) => {
  const { H1, H2, H3, P, BUL, CAP, table, PB } = L;
  const c = [];

  c.push(H1("5-BOB. MATN MUHARRIRLARI VA HUJJATLAR BILAN ISHLASH"));

  c.push(H2("5.1. Matn muharrirlari haqida umumiy ma'lumot"));
  c.push(P("Matnli hujjatlar bilan ishlash — kompyuterdan foydalanishning eng keng tarqalgan sohalaridan biridir. O'quvchilar referat va insholar yozadi, xodimlar hisobot va arizalar tayyorlaydi, mutaxassislar ilmiy maqola va kitoblar yaratadi. Bularning barchasi matn muharrirlari yordamida amalga oshiriladi."));
  c.push(P("Matn muharrirlari yillar davomida takomillashib bordi. Dastlabki dasturlar faqat matn kiritish imkonini bergan bo'lsa, zamonaviy matn protsessorlari matnni bezash, jadval va rasm qo'shish, imlo xatolarini tekshirish va hatto boshqalar bilan birgalikda ishlash imkonini beradi."));
  c.push(P("Matn muharriri — matnli hujjatlarni yaratish, tahrirlash, formatlash va chop etish uchun mo'ljallangan amaliy dasturdir. Eng oddiy matn muharrirlari (masalan, Bloknot) faqat matn kiritish imkonini beradi. Kuchli matn protsessorlari (masalan, Microsoft Word, LibreOffice Writer) esa matnni formatlash, jadval, rasm va diagrammalar qo'shish, avtomatik mundarija yaratish kabi keng imkoniyatlarga ega."));
  c.push(P("Matn muharriri orqali turli hujjatlar tayyorlanadi: arizalar, hisobotlar, referatlar, maqolalar, kitoblar va boshqalar. Hujjat bilan ishlashning asosiy bosqichlari — matn kiritish, uni tahrirlash, formatlash (ko'rinishini bezash), saqlash va chop etishdan iborat."));

  c.push(H2("5.2. Matnni formatlash"));
  c.push(P("Formatlash — matnning tashqi ko'rinishini o'zgartirish jarayonidir. Formatlash belgi (shrift) darajasida, paragraf darajasida va sahifa darajasida amalga oshiriladi. Belgi formatlashda shrift turi, o'lchami, rangi va uslubi (qalin, kursiv, tagchiziqli) o'zgartiriladi. Paragraf formatlashda matnni tekislash, qatorlar orasidagi masofa va chekinishlar sozlanadi."));
  c.push(CAP("5.1-jadval. Matnni formatlash imkoniyatlari"));
  c.push(table(
    [2600, 7038],
    ["Formatlash turi", "Imkoniyatlari"],
    [
      ["Belgi (shrift)", "Shrift turi, o'lchami, rangi, qalin, kursiv, tagchiziqli"],
      ["Paragraf", "Tekislash (chap, o'ng, markaz, eniga), qator oralig'i, chekinish"],
      ["Ro'yxat", "Belgili (marker) va raqamli ro'yxatlar"],
      ["Sahifa", "Chegaralar, orientatsiya, sahifa o'lchami, kolontitullar"],
      ["Uslublar", "Sarlavha, matn uslublari, mavzu (tema)"]
    ]
  ));

  c.push(H2("5.3. Jadvallar bilan ishlash"));
  c.push(P("Jadvallar ma'lumotlarni tartibli va ko'rgazmali shaklda taqdim etish uchun ishlatiladi. Matn muharririda jadval qatorlar va ustunlardan tashkil topadi; ularning kesishuvida kataklar (yacheykalar) joylashadi. Jadval ustida amallar: qator va ustun qo'shish/o'chirish, kataklarni birlashtirish (merge), chegaralar va rang berish, matnni katak ichida tekislash."));
  c.push(P("Jadvallar ayniqsa taqqoslash, hisobot va ro'yxatlarni taqdim etishda foydalidir. To'g'ri formatlangan jadval axborotni tez o'qish va tushunish imkonini beradi. Kataklarni birlashtirish murakkab tuzilishli jadvallar (masalan, ikki darajali sarlavhalar) yaratishga imkon beradi."));

  c.push(H2("5.4. Rasm va obyektlar qo'shish"));
  c.push(P("Zamonaviy matn muharrirlari hujjatga rasm, diagramma, shakl, formula va boshqa obyektlarni qo'shish imkonini beradi. Rasmlar hujjatni ko'rgazmali qiladi va axborotni yaxshiroq yetkazadi. Qo'shilgan rasmni o'lchamini o'zgartirish, joylashuvini sozlash va matn bilan o'rashni belgilash mumkin."));
  c.push(P("Diagrammalar sonli ma'lumotlarni vizual ko'rinishda ifodalaydi. Formulalar muharriri matematik ifodalarni to'g'ri yozishga yordam beradi. Bu vositalar ilmiy va texnik hujjatlar tayyorlashda alohida ahamiyatga ega."));

  c.push(H2("5.5. Hujjatni saqlash va chop etish"));
  c.push(P("Hujjat ustida ishlash jarayonida uni muntazam saqlab turish muhim, aks holda kutilmagan uzilishlarda ma'lumotlar yo'qolishi mumkin. Hujjatni turli formatlarda saqlash mumkin: muharrirning o'z formatida (.docx), universal PDF formatida yoki oddiy matn (.txt) sifatida. PDF format hujjatning ko'rinishini barcha qurilmalarda saqlab qoladi."));
  c.push(P("Chop etishdan oldin hujjatni ko'rib chiqish (oldindan ko'rish) tavsiya etiladi — bu qog'ozda qanday chiqishini oldindan ko'rish imkonini beradi. Chop etishda sahifalar sonini, nusxalar sonini va boshqa parametrlarni sozlash mumkin."));

  c.push(H3("Bob bo'yicha asosiy xulosalar"));
  c.push(
    BUL("Matn muharriri hujjatlarni yaratish, tahrirlash va formatlash uchun ishlatiladi;"),
    BUL("Formatlash belgi, paragraf va sahifa darajasida amalga oshiriladi;"),
    BUL("Jadvallar ma'lumotlarni tartibli taqdim etadi;"),
    BUL("Hujjatga rasm, diagramma va formulalar qo'shish mumkin;"),
    BUL("Hujjatni muntazam saqlash va PDF formatida eksport qilish tavsiya etiladi.")
  );
  c.push(PB());
  return c;
};
