module.exports = (L) => {
  const { H1, H2, H3, P, BUL, NUM, CAP, table, PB } = L;
  const c = [];

  c.push(H1("13-BOB. ISH O'RINLARINI MEHNAT SHAROITLARI BO'YICHA ATTESTATSIYALASH"));

  c.push(H2("13.1. Attestatsiyaning maqsadi va vazifalari"));
  c.push(P("Ish o'rinlarini mehnat sharoitlari bo'yicha attestatsiyalash — har bir ish o'rnidagi mehnat sharoitlarini baholash, zararli va xavfli omillarni aniqlash hamda ularni me'yoriy qiymatlar bilan taqqoslash jarayonidir. Attestatsiya mehnat muhofazasini boshqarishning muhim quroli bo'lib, uning natijalari asosida mehnat sharoitlarini yaxshilash choralari ishlab chiqiladi."));
  c.push(P("Attestatsiyaning asosiy vazifalari quyidagilardan iborat: ish o'rnidagi haqiqiy mehnat sharoitlarini aniqlash; zararli omillarni o'lchash va baholash; kafolat va imtiyozlarga bo'lgan huquqni asoslash; xodimlarni SHV bilan ta'minlash ehtiyojini aniqlash; mehnat sharoitlarini yaxshilash rejasini tuzish. Attestatsiya belgilangan davriylikda (odatda besh yilda kamida bir marta) o'tkaziladi."));

  c.push(H2("13.2. Mehnat sharoitlari sinflari"));
  c.push(P("Attestatsiya natijalariga ko'ra ish o'rnidagi mehnat sharoitlari zararlilik va xavflilik darajasiga qarab to'rt sinfga bo'linadi. Bu tasnif zararli omillarning ruxsat etilgan qiymatlardan qanchalik oshib ketganiga asoslanadi. Sinf qanchalik yuqori bo'lsa, mehnat sharoitlari shunchalik og'ir hisoblanadi."));
  c.push(CAP("13.1-jadval. Mehnat sharoitlari sinflari"));
  c.push(table(
    [1400, 3000, 5238],
    ["Sinf", "Nomi", "Tavsifi"],
    [
      ["1-sinf", "Optimal", "Sog'lom sharoit, zararli omillar yo'q yoki xavfsiz darajada"],
      ["2-sinf", "Ruxsat etilgan", "Omillar me'yor doirasida, salomatlik dam olishda tiklanadi"],
      ["3-sinf", "Zararli", "Omillar me'yordan oshadi, salomatlikka xavf tug'diradi (3.1–3.4 darajalar)"],
      ["4-sinf", "Xavfli (ekstremal)", "Omillar hayot uchun xavfli, o'tkir kasallik va shikast xavfi yuqori"]
    ]
  ));
  c.push(P("Zararli sinf (3-sinf), o'z navbatida, oshib ketish darajasiga qarab to'rt darajaga (3.1, 3.2, 3.3, 3.4) bo'linadi. Mehnat sharoitlari qanchalik og'ir bo'lsa, xodimga shunchalik ko'proq kafolat va imtiyoz (qo'shimcha ta'til, qisqartirilgan ish vaqti, davolash-profilaktik ovqatlanish, erta pensiya va boshqalar) beriladi."));

  c.push(H2("13.3. Attestatsiya o'tkazish tartibi"));
  c.push(P("Attestatsiya maxsus tuzilgan attestatsiya komissiyasi tomonidan o'tkaziladi. Jarayon bir necha bosqichdan iborat bo'lib, u tayyorgarlik, o'lchash-baholash va natijalarni rasmiylashtirish bosqichlarini o'z ichiga oladi. Har bir ish o'rni bo'yicha alohida attestatsiya kartasi tuziladi."));
  L.startList();
  c.push(
    NUM("attestatsiya komissiyasi tuziladi va attestatsiya rejasi tasdiqlanadi;"),
    NUM("attestatsiya qilinadigan ish o'rinlari ro'yxati tuziladi;"),
    NUM("zararli va xavfli omillar o'lchanadi (laboratoriya sharoitida);"),
    NUM("mehnat og'irligi va zo'riqishi baholanadi;"),
    NUM("olingan natijalar me'yoriy qiymatlar bilan taqqoslanadi;"),
    NUM("mehnat sharoitlari sinfi aniqlanadi;"),
    NUM("attestatsiya kartasi va yakuniy hujjatlar rasmiylashtiriladi;"),
    NUM("sharoitlarni yaxshilash bo'yicha chora-tadbirlar rejasi ishlab chiqiladi.")
  );

  c.push(H2("13.4. O'lchanadigan omillar"));
  c.push(P("Attestatsiya jarayonida ish o'rnidagi barcha muhim zararli omillar instrumental usulda o'lchanadi. O'lchashlar attestatsiya huquqiga ega bo'lgan akkreditatsiyalangan laboratoriyalar tomonidan amalga oshiriladi. Quyidagi jadvalda o'lchanadigan asosiy omillar va o'lchov birliklari keltirilgan."));
  c.push(CAP("13.2-jadval. Attestatsiyada o'lchanadigan omillar"));
  c.push(table(
    [3600, 3038, 3000],
    ["Omil guruhi", "O'lchanadigan ko'rsatkich", "O'lchov birligi"],
    [
      ["Mikroiqlim", "Harorat, namlik, havo tezligi", "°C, %, m/s"],
      ["Shovqin", "Tovush bosimi darajasi", "dBA"],
      ["Tebranish", "Tebranish tezlanishi/tezligi", "dB, m/s²"],
      ["Yoritilganlik", "Yoritilganlik darajasi", "lk"],
      ["Havo muhiti", "Zararli moddalar konsentratsiyasi", "mg/m³"],
      ["Nurlanish", "Elektromagnit maydon, radiatsiya", "V/m, mkZv/soat"],
      ["Mehnat og'irligi", "Jismoniy yuklama", "kg, kkal"]
    ]
  ));

  c.push(H2("13.5. Attestatsiya natijalaridan foydalanish"));
  c.push(P("Attestatsiya natijalari korxonada mehnat muhofazasini yaxshilashning asosiy manbai bo'lib xizmat qiladi. Ular quyidagi maqsadlarda ishlatiladi: mehnat sharoitlarini yaxshilash rejasini tuzish; xodimlarga kafolat va imtiyozlar berishni asoslash; SHV bilan ta'minlash normalarini aniqlash; kasbiy kasalliklar xavfini baholash; nazorat organlariga hisobot berish. Attestatsiya o'tkazilmagan yoki natijalari qoniqarsiz bo'lgan ish o'rinlarida ishlashga cheklovlar qo'yilishi mumkin."));

  c.push(H3("Bob bo'yicha asosiy xulosalar"));
  c.push(
    BUL("Attestatsiya ish o'rnidagi mehnat sharoitlarini baholaydi;"),
    BUL("Mehnat sharoitlari optimal, ruxsat etilgan, zararli va xavfli sinflarga bo'linadi;"),
    BUL("Zararli omillar akkreditatsiyalangan laboratoriyalarda o'lchanadi;"),
    BUL("Natijalar kafolat, imtiyoz va yaxshilash choralarini asoslaydi;"),
    BUL("Attestatsiya belgilangan davriylikda takrorlanadi.")
  );
  c.push(PB());
  return c;
};
