module.exports = (L) => {
  const { H1, H2, P, CAP, rubricTable, PB } = L;
  const c = [];
  const COLS = [1750, 1750, 4638, 1500];
  const HEAD = ["O'qitish natijasi", "Baholash indikatori", "Baholashga qo'yilgan kriteriyalar", "Baholanishi"];

  c.push(H1("O'QITISH NATIJALARINI BAHOLASH TARTIBI"));
  c.push(P("Axborot texnologiyalari fani bo'yicha o'quvchilarning bilim, ko'nikma va malakalari quyidagi mezonlar asosida baholanadi. Har bir o'qitish natijasi bo'yicha to'rt darajali baho qo'yiladi: 2 (qoniqarsiz), 3 (qoniqarli), 4 (yaxshi) va 5 (a'lo). Baholash indikatorlari o'quvchining nazariy bilimini va uni amaliyotda qo'llash darajasini aks ettiradi."));

  c.push(H2("1-o'qitish natijasi bo'yicha baholash mezonlari"));
  c.push(CAP("B.1-jadval. Kompyuter va dasturiy ta'minot bo'yicha baholash"));
  c.push(rubricTable(COLS, HEAD, [
    {
      outcome: "Kompyuterning apparat va dasturiy ta'minoti tuzilishini biladi hamda ulardan foydalanadi.",
      indicators: [
        {
          name: "Kompyuter qurilmalari va dasturiy ta'minot turlarini tushuntirish.",
          grades: [
            [2, "Kompyuter qurilmalari va dasturiy ta'minot turlarini bilmaydi yoki noto'g'ri tushuntiradi."],
            [3, "Qurilmalar va dasturiy ta'minot turlarini qisman tushuntiradi, ayrimlarini farqlaydi, biroq vazifalarini to'liq izohlay olmaydi."],
            [4, "Qurilmalar va dasturiy ta'minot turlarini to'g'ri tushuntiradi, vazifalarini izohlaydi, ayrim kichik noaniqliklarga yo'l qo'yadi."],
            [5, "Qurilmalar va dasturiy ta'minot turlarini to'liq tushuntiradi, ularning vazifalarini asoslaydi va amaliy misollar bilan izohlaydi."]
          ]
        },
        {
          name: "Operatsion tizim va fayllar bilan amaliy ishlash.",
          grades: [
            [2, "Operatsion tizim va fayllar bilan ishlay olmaydi, asosiy amallarni bajarmaydi."],
            [3, "Fayllar bilan asosiy amallarni o'qituvchi ko'rsatmasi bilan bajaradi, ayrim amallarda xato qiladi."],
            [4, "Operatsion tizim va fayllar bilan mustaqil ishlaydi, asosiy amallarni to'g'ri bajaradi, ayrim kamchiliklarga yo'l qo'yadi."],
            [5, "Operatsion tizim va fayllar bilan to'liq va mustaqil ishlaydi, barcha amallarni to'g'ri bajaradi va boshqalarga yordam bera oladi."]
          ]
        }
      ]
    }
  ]));
  c.push(PB());

  c.push(H2("2-o'qitish natijasi bo'yicha baholash mezonlari"));
  c.push(CAP("B.2-jadval. Amaliy dasturlar bilan ishlash bo'yicha baholash"));
  c.push(rubricTable(COLS, HEAD, [
    {
      outcome: "Matn muharriri va elektron jadval dasturlaridan foydalanib hujjat va hisob-kitoblarni tayyorlaydi.",
      indicators: [
        {
          name: "Matn hujjatlarini yaratish va formatlash.",
          grades: [
            [2, "Matn hujjatini yarata olmaydi yoki formatlash qoidalarini bilmaydi."],
            [3, "Oddiy hujjat yaratadi, asosiy formatlashni bajaradi, biroq jadval va obyektlar bilan ishlashda qiynaladi."],
            [4, "Hujjatni to'g'ri yaratadi va formatlaydi, jadval va rasm qo'shadi, ayrim kamchiliklarga yo'l qo'yadi."],
            [5, "Hujjatni to'liq va sifatli tayyorlaydi, murakkab formatlash, jadval, mundarija va obyektlardan erkin foydalanadi."]
          ]
        },
        {
          name: "Elektron jadvalda formulalar bilan ishlash.",
          grades: [
            [2, "Elektron jadvalda formula tuza olmaydi, hisob-kitob bajarmaydi."],
            [3, "Oddiy formulalarni ko'rsatma bilan tuzadi, ayrim funksiyalarni ishlatishda xato qiladi."],
            [4, "Formulalar va asosiy funksiyalardan (SUM, AVERAGE, IF) to'g'ri foydalanadi, diagramma quradi."],
            [5, "Formulalar, funksiyalar, saralash, filtrlash va diagrammalardan erkin va mustaqil foydalanadi."]
          ]
        }
      ]
    }
  ]));
  c.push(PB());

  c.push(H2("3-o'qitish natijasi bo'yicha baholash mezonlari"));
  c.push(CAP("B.3-jadval. Tarmoq, internet va axborot xavfsizligi bo'yicha baholash"));
  c.push(rubricTable(COLS, HEAD, [
    {
      outcome: "Kompyuter tarmoqlari va internetdan foydalanadi hamda axborot xavfsizligi qoidalariga rioya qiladi.",
      indicators: [
        {
          name: "Internet va veb-xizmatlardan foydalanish.",
          grades: [
            [2, "Internet va veb-xizmatlardan foydalana olmaydi, asosiy tushunchalarni bilmaydi."],
            [3, "Internetdan asosiy darajada foydalanadi, qidiruv qiladi, biroq xizmatlarni to'liq ishlatmaydi."],
            [4, "Internet va veb-xizmatlardan to'g'ri foydalanadi, ma'lumot qidiradi va elektron pochta bilan ishlaydi."],
            [5, "Internet va veb-xizmatlardan erkin, samarali va xavfsiz foydalanadi, turli xizmatlarni mustaqil qo'llaydi."]
          ]
        },
        {
          name: "Axborot xavfsizligi qoidalarini qo'llash.",
          grades: [
            [2, "Axborot xavfsizligi qoidalarini bilmaydi, tahdidlardan himoyalanmaydi."],
            [3, "Ayrim xavfsizlik qoidalarini biladi, biroq amalda to'liq qo'llamaydi."],
            [4, "Axborot xavfsizligi qoidalariga asosan rioya qiladi, kuchli parol va antivirusdan foydalanadi."],
            [5, "Axborot xavfsizligi qoidalariga to'liq rioya qiladi, tahdidlarni aniqlaydi va himoya usullarini mustaqil qo'llaydi."]
          ]
        }
      ]
    }
  ]));
  c.push(PB());

  c.push(H2("4-o'qitish natijasi bo'yicha baholash mezonlari"));
  c.push(CAP("B.4-jadval. Algoritmlash va dasturlash asoslari bo'yicha baholash"));
  c.push(rubricTable(COLS, HEAD, [
    {
      outcome: "Algoritmlash asoslarini biladi va oddiy masalalar uchun algoritm tuzadi.",
      indicators: [
        {
          name: "Algoritm tushunchasi va turlarini bilish.",
          grades: [
            [2, "Algoritm tushunchasini va turlarini bilmaydi."],
            [3, "Algoritm tushunchasini qisman biladi, turlarini sanaydi, biroq farqini tushuntira olmaydi."],
            [4, "Algoritm tushunchasini va turlarini to'g'ri tushuntiradi, blok-sxema elementlarini biladi."],
            [5, "Algoritm tushunchasini, turlarini va xususiyatlarini to'liq tushuntiradi, misollar bilan izohlaydi."]
          ]
        },
        {
          name: "Oddiy masala uchun algoritm tuzish.",
          grades: [
            [2, "Oddiy masala uchun ham algoritm tuza olmaydi."],
            [3, "Oddiy chiziqli algoritmni ko'rsatma bilan tuzadi, tarmoqlanish va siklda qiynaladi."],
            [4, "Chiziqli va tarmoqlanuvchi algoritmlarni mustaqil tuzadi, blok-sxema chizadi."],
            [5, "Turli (chiziqli, tarmoqlanuvchi, siklli) algoritmlarni mustaqil tuzadi va blok-sxema orqali to'g'ri ifodalaydi."]
          ]
        }
      ]
    }
  ]));

  c.push(P("Yakuniy baho o'quvchining barcha o'qitish natijalari bo'yicha ko'rsatgan natijalarining o'rtacha qiymati asosida qo'yiladi. Baholashda nazariy bilim bilan bir qatorda amaliy ko'nikmalar ham hisobga olinadi.", { before: 120 }));
  c.push(PB());
  return c;
};
