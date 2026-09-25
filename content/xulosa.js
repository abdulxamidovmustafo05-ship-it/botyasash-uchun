module.exports = (L) => {
  const { H1, H2, P, BUL, NUM, CAP, table } = L;
  const c = [];

  /* ===== XULOSA ===== */
  c.push(H1("XULOSA"));
  c.push(P("Ushbu o'quv-uslubiy qo'llanmada mehnat muhofazasi va texnika xavfsizligining nazariy asoslari, huquqiy-me'yoriy hujjatlar tizimi, ishlab chiqarish sanitariyasi, texnika, elektr va yong'in xavfsizligi, shaxsiy himoya vositalari hamda favqulodda vaziyatlarda birinchi tibbiy yordam masalalari batafsil yoritildi. Bayon etilgan materiallar mehnat muhofazasi sohasining zamonaviy talablarini aks ettiradi."));
  c.push(P("Qo'llanmani o'rganish jarayonida quyidagi asosiy xulosalarga kelish mumkin. Birinchidan, mehnat muhofazasi — bu inson hayoti va salomatligini himoya qilishga qaratilgan, huquqiy, texnik va tashkiliy chora-tadbirlarni birlashtiruvchi yaxlit tizimdir. Ikkinchidan, baxtsiz hodisalar va kasbiy kasalliklarning oldini olish ularning oqibatlarini bartaraf etishdan ancha samarali va iqtisodiy jihatdan foydalidir. Uchinchidan, xavfsiz mehnat sharoitini ta'minlash faqat ish beruvchining emas, balki har bir xodimning ham mas'uliyatidir."));
  c.push(P("Zamonaviy ishlab chiqarishda texnika va texnologiyaning jadal rivojlanishi mehnat muhofazasi sohasiga ham yangi talablar qo'ymoqda. Avtomatlashtirish, raqamlashtirish va yangi materiallarning joriy etilishi ba'zi xavflarni kamaytirsa-da, yangi xatarlarni ham keltirib chiqarmoqda. Shu sababli mehnat muhofazasi bo'yicha bilimlarni doimiy yangilab borish, ilg'or tajriba va zamonaviy himoya vositalaridan foydalanish muhim ahamiyatga ega."));
  c.push(P("Xulosa qilib aytganda, mehnat muhofazasi va texnika xavfsizligi qoidalariga qat'iy rioya qilish, xavfsiz mehnat madaniyatini shakllantirish va bu boradagi bilimlarni amaliyotda qo'llash — sog'lom, xavfsiz va samarali mehnatning kafolatidir. Har bir mutaxassis o'z faoliyatida ushbu qo'llanmada bayon etilgan tamoyillarga amal qilishi lozim."));

  /* ===== ATAMALAR LUG'ATI ===== */
  c.push(H1("ATAMALAR LUG'ATI"));
  c.push(P("Quyida qo'llanmada uchraydigan asosiy atamalar va ularning qisqacha izohi alifbo tartibida keltirilgan."));
  c.push(CAP("Asosiy atamalar va tushunchalar lug'ati"));
  c.push(table(
    [2600, 7038],
    ["Atama", "Izohi"],
    [
      ["Attestatsiya", "Ish o'rni yoki xodim bilimini belgilangan talablarga muvofiqligini baholash"],
      ["Baxtsiz hodisa", "Mehnat jarayonida xodim salomatligiga yetkazilgan shikast"],
      ["Ergonomika", "Inson va mehnat vositalari o'rtasidagi munosabatlarni o'rganuvchi fan"],
      ["Jamoaviy himoya vositasi (JHV)", "Barcha xodimlarni bir vaqtda himoya qiluvchi vosita"],
      ["Kasbiy kasallik", "Zararli omillar uzoq ta'siridan kelib chiqadigan kasallik"],
      ["Mikroiqlim", "Ish zonasidagi harorat, namlik va havo harakati majmui"],
      ["PDK (REChK)", "Zararli moddaning havodagi ruxsat etilgan chegaraviy konsentratsiyasi"],
      ["Reanimatsiya", "Nafas va yurak faoliyatini tiklashga qaratilgan jonlantirish choralari"],
      ["Shaxsiy himoya vositasi (SHV)", "Xodimni alohida himoya qiluvchi vosita"],
      ["Xavfli omil", "Xodimning to'satdan jarohatlanishiga olib keluvchi omil"],
      ["Yerga ulash (zazemleniye)", "Uskuna korpusini yer bilan elektr ulash orqali himoya qilish"],
      ["Yo'riqnoma", "Xodimga xavfsiz mehnat usullarini o'rgatuvchi tadbir"],
      ["Zararli omil", "Kasbiy kasallikka olib keluvchi ishlab chiqarish omili"]
    ]
  ));

  /* ===== FOYDALANILGAN ADABIYOTLAR ===== */
  c.push(H1("FOYDALANILGAN ADABIYOTLAR"));
  c.push(P("Ushbu qo'llanmani tayyorlashda mehnat muhofazasi va texnika xavfsizligi sohasidagi o'quv adabiyotlari, me'yoriy hujjatlar va uslubiy manbalardan foydalanildi. Chuqurroq o'rganish uchun quyidagi manba turlariga murojaat qilish tavsiya etiladi:"));
  L.startList();
  c.push(
    NUM("O'zbekiston Respublikasining Mehnat kodeksi."),
    NUM("O'zbekiston Respublikasining «Mehnat muhofazasi to'g'risida»gi qonuni."),
    NUM("O'zbekiston Respublikasining «Fuqarolarning sog'lig'ini saqlash to'g'risida»gi qonuni."),
    NUM("O'zbekiston Respublikasining «Yong'in xavfsizligi to'g'risida»gi qonuni."),
    NUM("Mehnat xavfsizligi standartlari tizimi (MXST) hujjatlari."),
    NUM("Sanitariya qoidalari va normalari (SanQvaM) to'plami."),
    NUM("Elektr inshootlarini o'rnatish qoidalari (EIQ)."),
    NUM("Yong'in xavfsizligi qoidalari (YXQ)."),
    NUM("Baxtsiz hodisalarni tekshirish va hisobga olish to'g'risidagi nizom."),
    NUM("Mehnatni muhofaza qilish bo'yicha o'quv qo'llanmalar va darsliklar."),
    NUM("Xalqaro Mehnat Tashkiloti (XMT) konvensiyalari va tavsiyalari."),
    NUM("Ishlab chiqarish sanitariyasi va mehnat gigiyenasi bo'yicha uslubiy qo'llanmalar.")
  );
  c.push(P("Eslatma: me'yoriy hujjatlardan foydalanishda ularning eng so'nggi tahriri va joriy amaldagi versiyasini tekshirib olish tavsiya etiladi, chunki qonunchilik va me'yoriy talablar vaqti-vaqti bilan yangilanib turadi."));

  return c;
};
