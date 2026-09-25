module.exports = (L) => {
  const { H1, H2, P, CAP, rubricTable, PB } = L;
  const c = [];
  const COLS = [1750, 1750, 4638, 1500]; // O'qitish natijasi | Indikator | Kriteriyalar | Baholanishi
  const HEAD = ["O'qitish natijasi", "Baholash indikatori", "Baholashga qo'yilgan kriteriyalar", "Baholanishi"];

  c.push(H1("O'QITISH NATIJALARINI BAHOLASH TARTIBI"));
  c.push(P("Mehnat muhofazasi va texnika xavfsizligi fani bo'yicha o'quvchilarning bilim, ko'nikma va malakalari quyidagi mezonlar asosida baholanadi. Har bir o'qitish natijasi bo'yicha to'rt darajali baho qo'yiladi: 2 (qoniqarsiz), 3 (qoniqarli), 4 (yaxshi) va 5 (a'lo). Baholash indikatorlari o'quvchining tegishli qoidalarni tushuntirishi va ularni amaliyotda qo'llash darajasini aks ettiradi."));

  // ----- 1-jadval: xavfsizlik qoidalari va usullari -----
  c.push(H2("1-o'qitish natijasi bo'yicha baholash mezonlari"));
  c.push(CAP("B.1-jadval. Xavfsiz mehnat sharoitlari bo'yicha baholash"));
  c.push(rubricTable(COLS, HEAD, [
    {
      outcome: "Ish joyida sanitariya-gigiyena, elektr va yong'in xavfsizligi qoidalariga rioya qiladi hamda xavfsiz mehnat usullarini qo'llaydi.",
      indicators: [
        {
          name: "Sanitariya-gigiyena, elektr va yong'in xavfsizligi qoidalarini tushuntirish.",
          grades: [
            [2, "Sanitariya-gigiyena, elektr va yong'in xavfsizligi qoidalarini bilmaydi yoki noto'g'ri tushuntiradi."],
            [3, "Sanitariya-gigiyena, elektr va yong'in xavfsizligi qoidalarini qisman tushuntiradi, ayrim talablarni farqlaydi, biroq ularning ish joyidagi ahamiyatini to'liq izohlay olmaydi."],
            [4, "Sanitariya-gigiyena, elektr va yong'in xavfsizligi qoidalarini to'g'ri tushuntiradi, ularni ish jarayonida qo'llashni izohlaydi, ayrim kichik noaniqliklarga yo'l qo'yadi."],
            [5, "Sanitariya-gigiyena, elektr va yong'in xavfsizligi qoidalarini to'liq tushuntiradi, ularning ish joyidagi ahamiyatini asoslaydi va amaliy misollar bilan izohlaydi."]
          ]
        },
        {
          name: "Xavfsiz mehnat usullarini amaliy faoliyatda qo'llash.",
          grades: [
            [2, "Xavfsiz mehnat usullariga amal qilmaydi, ish jarayonida xavfsizlik talablarini buzadi."],
            [3, "Xavfsiz mehnat usullarini o'qituvchi ko'rsatmasi bilan qo'llaydi, biroq ayrim xavfsizlik talablariga to'liq amal qilmaydi."],
            [4, "Xavfsiz mehnat usullarini mustaqil qo'llaydi, xavfsizlik talablariga asosan amal qiladi, ayrim kichik kamchiliklarga yo'l qo'yadi."],
            [5, "Xavfsiz mehnat usullarini to'liq va mustaqil qo'llaydi, barcha xavfsizlik talablariga rioya qiladi hamda ish joyida xavfsiz mehnat madaniyatini namoyon etadi."]
          ]
        }
      ]
    }
  ]));
  c.push(PB());

  // ----- 2-jadval: favqulodda vaziyatlar va birinchi yordam -----
  c.push(H2("2-o'qitish natijasi bo'yicha baholash mezonlari"));
  c.push(CAP("B.2-jadval. Favqulodda vaziyatlar va birinchi tibbiy yordam bo'yicha baholash"));
  c.push(rubricTable(COLS, HEAD, [
    {
      outcome: "Favqulodda vaziyatlarda xavfsiz harakatlanadi va jabrlanuvchiga birinchi tibbiy yordam ko'rsatadi.",
      indicators: [
        {
          name: "Favqulodda vaziyatlarda harakatlanish va evakuatsiya tartibini bilish.",
          grades: [
            [2, "Favqulodda vaziyatlarda harakatlanish va evakuatsiya tartibini bilmaydi, xavfsizlik talablarini buzadi."],
            [3, "Favqulodda vaziyatlarda harakatlanish tartibini qisman biladi, evakuatsiya yo'llarini ko'rsatadi, biroq ketma-ketlikni to'liq tushuntirmaydi."],
            [4, "Favqulodda vaziyatlarda to'g'ri harakatlanadi va evakuatsiya tartibini izohlaydi, ayrim kichik noaniqliklarga yo'l qo'yadi."],
            [5, "Favqulodda vaziyatlarda ketma-ketlikka to'liq rioya qilib harakatlanadi, evakuatsiyani mustaqil tashkil etadi va o'zgalarga yo'l-yo'riq ko'rsatadi."]
          ]
        },
        {
          name: "Birinchi tibbiy yordam ko'rsatish ko'nikmasi.",
          grades: [
            [2, "Birinchi tibbiy yordam ko'rsatish asoslarini bilmaydi yoki noto'g'ri harakat qiladi."],
            [3, "Birinchi tibbiy yordamni qisman ko'rsatadi, ayrim holatlarda to'g'ri harakat qiladi, biroq ketma-ketlikni buzadi."],
            [4, "Birinchi tibbiy yordamni to'g'ri ko'rsatadi, asosiy holatlarda mustaqil harakat qiladi, ayrim kamchiliklarga yo'l qo'yadi."],
            [5, "Birinchi tibbiy yordamni to'liq va to'g'ri ketma-ketlikda ko'rsatadi, turli holatlarda mustaqil va ishonchli harakat qiladi."]
          ]
        }
      ]
    }
  ]));
  c.push(PB());

  // ----- 3-jadval: himoya vositalari va omillar -----
  c.push(H2("3-o'qitish natijasi bo'yicha baholash mezonlari"));
  c.push(CAP("B.3-jadval. Himoya vositalari va ishlab chiqarish omillari bo'yicha baholash"));
  c.push(rubricTable(COLS, HEAD, [
    {
      outcome: "Shaxsiy va jamoaviy himoya vositalaridan to'g'ri foydalanadi hamda zararli va xavfli ishlab chiqarish omillarini baholaydi.",
      indicators: [
        {
          name: "Shaxsiy himoya vositalarini tanlash va qo'llash.",
          grades: [
            [2, "Himoya vositalarini tanlay olmaydi yoki ulardan noto'g'ri foydalanadi."],
            [3, "Himoya vositalarini qisman to'g'ri tanlaydi, foydalanadi, biroq ayrim hollarda xato qiladi."],
            [4, "Himoya vositalarini ish turiga mos tanlaydi va to'g'ri qo'llaydi, ayrim kichik kamchiliklarga yo'l qo'yadi."],
            [5, "Himoya vositalarini har bir omilga mos to'g'ri tanlaydi, mustaqil va to'g'ri qo'llaydi hamda tanlovini asoslaydi."]
          ]
        },
        {
          name: "Zararli va xavfli omillarni aniqlash va baholash.",
          grades: [
            [2, "Zararli va xavfli omillarni farqlay olmaydi, ularning ta'sirini tushuntirmaydi."],
            [3, "Ayrim omillarni aniqlaydi, biroq ularni tasniflashda va baholashda xatoliklarga yo'l qo'yadi."],
            [4, "Zararli va xavfli omillarni to'g'ri aniqlaydi va tasniflaydi, ta'sirini asosan izohlaydi."],
            [5, "Zararli va xavfli omillarni to'liq aniqlaydi, tasniflaydi, me'yoriy qiymatlar (PDK, REChD) bilan taqqoslab baholaydi."]
          ]
        }
      ]
    }
  ]));
  c.push(PB());

  // ----- 4-jadval: me'yoriy hujjatlar va nazorat -----
  c.push(H2("4-o'qitish natijasi bo'yicha baholash mezonlari"));
  c.push(CAP("B.4-jadval. Me'yoriy hujjatlar va mehnat muhofazasini tashkil etish bo'yicha baholash"));
  c.push(rubricTable(COLS, HEAD, [
    {
      outcome: "Mehnat muhofazasining me'yoriy-huquqiy hujjatlaridan foydalanadi va mehnat muhofazasini tashkil etish asoslarini biladi.",
      indicators: [
        {
          name: "Me'yoriy-huquqiy hujjatlarni bilish va qo'llash.",
          grades: [
            [2, "Mehnat muhofazasiga oid me'yoriy hujjatlarni bilmaydi, ularning mazmunini tushuntirmaydi."],
            [3, "Asosiy hujjatlarni qisman biladi, ayrim talablarni sanaydi, biroq qo'llashni izohlay olmaydi."],
            [4, "Me'yoriy hujjatlarni to'g'ri biladi, asosiy talablarni tushuntiradi va amaliyotda qo'llashni izohlaydi."],
            [5, "Me'yoriy hujjatlar tizimini to'liq biladi, talablarni asoslaydi va aniq vaziyatlarga mustaqil qo'llaydi."]
          ]
        },
        {
          name: "Baxtsiz hodisalar va yo'riqnomalarni tashkil etishni bilish.",
          grades: [
            [2, "Yo'riqnoma turlarini va baxtsiz hodisalarni tekshirish tartibini bilmaydi."],
            [3, "Yo'riqnoma turlarini qisman biladi, tartibni to'liq tushuntirmaydi."],
            [4, "Yo'riqnoma turlarini va baxtsiz hodisalarni tekshirish tartibini to'g'ri tushuntiradi."],
            [5, "Yo'riqnoma va baxtsiz hodisalarni tekshirish tartibini to'liq, ketma-ketlikda va misollar bilan tushuntiradi."]
          ]
        }
      ]
    }
  ]));

  c.push(P("Yakuniy baho o'quvchining barcha o'qitish natijalari bo'yicha ko'rsatgan natijalarining o'rtacha qiymati asosida qo'yiladi. Baholashda o'quvchining nazariy bilimlari bilan bir qatorda amaliy ko'nikmalari va xavfsiz mehnat madaniyatiga rioya qilishi ham hisobga olinadi.", { before: 120 }));
  c.push(PB());
  return c;
};
