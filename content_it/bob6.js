module.exports = (L) => {
  const { H1, H2, H3, P, BUL, CAP, table, PB } = L;
  const c = [];

  c.push(H1("6-BOB. ELEKTRON JADVALLAR"));

  c.push(H2("6.1. Elektron jadval tushunchasi"));
  c.push(P("Ko'plab kasblar va faoliyat turlari sonli ma'lumotlar bilan ishlashni talab qiladi: buxgalteriya, statistika, moliya, savdo va boshqalar. Bunday ma'lumotlarni qo'lda hisoblash ko'p vaqt oladi va xatolarga yo'l qo'yish ehtimolini oshiradi. Elektron jadvallar bu vazifalarni avtomatlashtirib, ishni sezilarli darajada osonlashtiradi."));
  c.push(P("Elektron jadval — sonli va matnli ma'lumotlarni jadval ko'rinishida saqlash, qayta ishlash va tahlil qilish uchun mo'ljallangan amaliy dasturdir. Eng keng tarqalgan elektron jadval dasturlari — Microsoft Excel va LibreOffice Calc. Elektron jadvallar ayniqsa hisob-kitob, buxgalteriya, statistika va ma'lumotlar tahlilida keng qo'llaniladi."));
  c.push(P("Elektron jadval ustunlar (harflar bilan belgilanadi: A, B, C...) va qatorlar (raqamlar bilan: 1, 2, 3...) dan iborat. Ularning kesishuvida katak (yacheyka) joylashadi, uning manzili ustun harfi va qator raqamidan tuziladi (masalan, A1, B5). Katakka son, matn yoki formula kiritilishi mumkin."));
  c.push(CAP("6.1-jadval. Elektron jadvalning asosiy elementlari"));
  c.push(table(
    [2600, 7038],
    ["Element", "Ta'rifi"],
    [
      ["Katak (yacheyka)", "Ustun va qator kesishuvi, ma'lumot saqlaydi (masalan, A1)"],
      ["Ustun", "Vertikal chiziq, harf bilan belgilanadi (A, B, C)"],
      ["Qator", "Gorizontal chiziq, raqam bilan belgilanadi (1, 2, 3)"],
      ["Diapazon", "Bir necha katak guruhi (masalan, A1:A10)"],
      ["Varaq (list)", "Bitta jadval sahifasi"],
      ["Kitob (workbook)", "Bir necha varaqdan iborat fayl"]
    ]
  ));

  c.push(H2("6.2. Formulalar va funksiyalar"));
  c.push(P("Elektron jadvalning eng kuchli imkoniyati — formulalar orqali avtomatik hisob-kitob qilishdir. Formula tenglik belgisi (=) bilan boshlanadi va katak manzillari, sonlar hamda amal belgilaridan tuziladi. Masalan, =A1+B1 formulasi A1 va B1 kataklaridagi sonlarni qo'shadi. Ma'lumot o'zgarsa, natija avtomatik qayta hisoblanadi."));
  c.push(P("Funksiyalar — oldindan tayyorlangan formulalar bo'lib, murakkab hisob-kitoblarni osonlashtiradi. Eng ko'p ishlatiladigan funksiyalar quyidagi jadvalda keltirilgan."));
  c.push(CAP("6.2-jadval. Ko'p ishlatiladigan funksiyalar"));
  c.push(table(
    [2400, 3600, 3638],
    ["Funksiya", "Vazifasi", "Misol"],
    [
      ["SUM", "Yig'indini hisoblaydi", "=SUM(A1:A10)"],
      ["AVERAGE", "O'rtacha qiymatni topadi", "=AVERAGE(B1:B10)"],
      ["MAX / MIN", "Eng katta / kichik qiymat", "=MAX(A1:A10)"],
      ["COUNT", "Sonlar sonini sanaydi", "=COUNT(A1:A10)"],
      ["IF", "Shart bo'yicha natija beradi", "=IF(A1>60;\"o'tdi\";\"o'tmadi\")"],
      ["ROUND", "Sonni yaxlitlaydi", "=ROUND(A1;2)"]
    ]
  ));

  c.push(H2("6.3. Diagrammalar"));
  c.push(P("Diagramma — sonli ma'lumotlarni grafik (vizual) shaklda ifodalash usulidir. Diagrammalar ma'lumotlar orasidagi nisbatlar, tendensiyalar va o'zgarishlarni ko'rgazmali tarzda ko'rsatadi. Elektron jadval dasturlari turli xil diagramma turlarini yaratish imkonini beradi. Diagramma turi ma'lumot xarakteriga qarab tanlanadi."));
  c.push(CAP("6.3-jadval. Diagramma turlari va qo'llanilishi"));
  c.push(table(
    [3000, 6638],
    ["Diagramma turi", "Qachon ishlatiladi"],
    [
      ["Ustunli (gistogramma)", "Miqdorlarni taqqoslash uchun"],
      ["Chiziqli (grafik)", "Vaqt bo'yicha o'zgarishni ko'rsatish uchun"],
      ["Doiraviy (aylana)", "Butunning qismlarini (foizlarni) ko'rsatish uchun"],
      ["Nuqtali (tarqoq)", "Ikki ko'rsatkich o'rtasidagi bog'liqlik uchun"],
      ["Yig'ma ustunli", "Bir necha ko'rsatkichni birga taqqoslash uchun"]
    ]
  ));

  c.push(H2("6.4. Ma'lumotlarni saralash va filtrlash"));
  c.push(P("Elektron jadvallar katta hajmdagi ma'lumotlar bilan ishlashda samarali vositalar taqdim etadi. Saralash (sorting) ma'lumotlarni o'sish yoki kamayish tartibida, alifbo bo'yicha yoki sana bo'yicha tartiblaydi. Filtrlash (filtering) esa faqat kerakli shartlarga mos ma'lumotlarni ko'rsatadi, qolganlarini vaqtincha yashiradi."));
  c.push(P("Bu vositalar katta jadvallardan kerakli axborotni tez topish, ma'lumotlarni guruhlash va tahlil qilish imkonini beradi. Masalan, xodimlar ro'yxatidan faqat ma'lum bo'limdagilar yoki ma'lum yoshdagilarni filtrlab ko'rsatish mumkin."));

  c.push(H2("6.5. Elektron jadvalning qo'llanish sohalari"));
  c.push(P("Elektron jadvallar juda ko'p sohada qo'llaniladi. Buxgalteriya va moliyada ular hisob-kitob, byudjet rejalashtirish va hisobotlar tayyorlashda ishlatiladi. Statistikada ma'lumotlarni yig'ish, tahlil qilish va diagrammalar orqali ifodalashda foydalidir. Ta'limda o'qituvchilar baholarni yuritish va jurnallar tuzishda elektron jadvallardan foydalanadi."));
  c.push(P("Elektron jadvallarning yana bir muhim afzalligi — ma'lumot o'zgarganda natijalarning avtomatik qayta hisoblanishidir. Bu «nima bo'ladi agar» tahlilini o'tkazish, ya'ni turli variantlarni sinab ko'rish imkonini beradi. Shu sababli elektron jadvallar rejalashtirish va qaror qabul qilishda kuchli vosita hisoblanadi."));

  c.push(H3("Bob bo'yicha asosiy xulosalar"));
  c.push(
    BUL("Elektron jadval sonli ma'lumotlarni hisoblash va tahlil qiladi;"),
    BUL("Katak manzili ustun harfi va qator raqamidan tuziladi;"),
    BUL("Formula = belgisi bilan boshlanadi va avtomatik hisoblaydi;"),
    BUL("Funksiyalar (SUM, AVERAGE, IF) hisob-kitobni osonlashtiradi;"),
    BUL("Diagrammalar ma'lumotlarni vizual ifodalaydi, saralash va filtrlash tahlilga yordam beradi.")
  );
  c.push(PB());
  return c;
};
