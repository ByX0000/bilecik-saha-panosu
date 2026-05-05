// Tüm röportajlar — v5 kitapçığından doğrudan aktarılmıştır.

export type Question = {
  id: string;
  text: string;
};

export type Interview = {
  slug: string;
  number: number;
  bolge: 'golpazari' | 'pazaryeri';
  ekip: 'A' | 'B';
  isim: string;
  rol: string;
  mekan: string;
  temalar: string[];
  profil: string[];
  altinBaglanti?: string[];
  acilis: string;
  sorular: Question[];
  kapanis: string;
  renk: 'cesme' | 'clay';
};

export const interviews: Interview[] = [
  {
    slug: 'anatolian-harps',
    number: 1,
    bolge: 'golpazari',
    ekip: 'A',
    isim: 'Zeynep Öykü & Ali Öztürk',
    rol: 'Anatolian Harps — Luthier / Atölye',
    mekan: 'Atölye, Gölpazarı',
    temalar: ['İnovasyon', 'Luthierlik', 'Küresel Girişimcilik'],
    profil: [
      'Anatolian Harps, Gölpazarı’nda profesyonel arp üreten az sayıdaki Türk atölyesinden biridir.',
      'Türkiye’nin küçük bir ilçesinden dünyaya enstrüman satan nadir bir hikâye — “taşradan dünyaya” örneği olarak konumlandırın.',
      'Müzik + zanaat + girişimcilik üçlüsü kesişiyor; üç açıyı da röportajda görmek belgesel için zenginlik sağlar.',
    ],
    acilis:
      'Bizi atölyenizde ağırladığınız için çok teşekkür ederiz. İçeri girer girmez insanı saran bir hava var burada; sanıyorum bu hava aniden oluşmamıştır. İzin verirseniz önce sizin hikâyenizden başlayalım: Müzikle ve enstrümanla yolunuz ilk ne zaman kesişti, bir arpın ustası olmaya nasıl karar verdiniz?',
    sorular: [
      { id: 'q1-1', text: 'Birçok sanatçı için büyük şehirler bir cazibe merkezi. Sizse Gölpazarı’nda kalmayı, hatta burayı uluslararası bir arp üretim merkezine dönüştürmeyi seçtiniz. Bu kararın arkasında nasıl bir hikâye, nasıl bir iç ses var?' },
      { id: 'q1-2', text: '“Anatolian Harps” isminde Anadolu ile dünyanın bir enstrümanı buluşuyor. Bu ismin doğuşu nasıl oldu? Sizce Anadolu’nun arpla — ya da arpın Anadolu’yla — nasıl bir bağı var?' },
      { id: 'q1-3', text: 'Bir arpın ortaya çıkması ciddi bir emek ve teknik bilgi istiyor. Sizin elinizden çıkan bir arpı dünyadaki diğer arplardan ayıran şey nedir? Hem ses hem işçilik açısından dinleyelim.' },
      { id: 'q1-4', text: 'Sıfırdan bir atölye kurup ürettiğinizi dünyaya satmak çok cesaret isteyen bir yolculuk. Bizim gibi lise çağındaki gençlere, hayallerini somut bir işe dönüştürmek için nasıl bir tavsiyede bulunursunuz?' },
      { id: 'q1-5', text: 'Atölyeniz ileride yerel gençlere sanat ve zanaatı bir arada öğretebileceği bir okula, bir akademiye dönüşebilir mi? Böyle bir hayaliniz var mı?' },
    ],
    kapanis:
      'Sizinle çok daha uzun konuşmak isterdik. Eklemek istediğiniz, bizim soramadığımız ama bizim mutlaka bilmemizi istediğiniz bir şey var mı? Son olarak, belgeselimizi izleyecek olan gençlere tek bir cümleyle ne söylemek istersiniz?',
    renk: 'cesme',
  },
  {
    slug: 'bedriye-berber-engin',
    number: 2,
    bolge: 'golpazari',
    ekip: 'A',
    isim: 'Bedriye Berber Engin',
    rol: 'Kurşunlu Köyü — Eko-turizm girişimcisi',
    mekan: 'Kurşunlu Köyü, Gölpazarı',
    temalar: ['Eko-turizm', 'Toplumsal sorumluluk', 'Yerel kalkınma', 'Kadın gücü'],
    profil: [
      'Karşımızdaki kişi köylü ve mütevazı biri; akademik dilden uzak durun, hayat hikâyesi merkezli sorularla ilerleyin.',
    ],
    acilis:
      'Bedriye Hanım, bizi köyünüzde misafir ettiğiniz için teşekkür ederiz. Önce biraz sizi tanıyalım: Çocukluğunuz nerede geçti, Kurşunlu Köyü’ne yolunuz nasıl düştü? Burada bir gününüz nasıl başlar, nasıl biter?',
    sorular: [
      { id: 'q2-1', text: 'Kurşunlu Köyü uzun yıllar tarımla geçimini sağlamış bir yer. Buradaki yaşamı şehirden gelen misafirlerin de paylaşabileceği bir şeye dönüştürme fikri nasıl başladı? Köylü komşularınız bu fikre ilk başta nasıl yaklaştı?' },
      { id: 'q2-2', text: 'Bir köyde kadınlar pek çok şeyi taşır ama çoğu zaman görünmezdir. Kurşunlu’da kadınların hayatı nasıl bir şey? Sizin gözlemlediğiniz, son yıllarda yavaş yavaş değişen bir şey var mı?' },
      { id: 'q2-3', text: 'Şehirden gelen misafirler köy hayatını gerçekten yaşamak istiyor; bir yandan da köyün kendi ruhu kaybolmamalı. Bu hassas dengeyi nasıl kuruyorsunuz?' },
      { id: 'q2-4', text: 'Bugün pek çok genç doğduğu yerde tutunamadığı için büyük şehirlere göç ediyor. Sizce kendi köyünde, kasabasında kalıp orada güzel bir hayat kurmak isteyen bir genç için en gerekli şey nedir?' },
      { id: 'q2-5', text: 'Misafirleriniz buradan sadece bir tatil değil, bir his de götürüyor sanırım. Sizin gördüğünüz kadarıyla insanlar Kurşunlu’dan en çok hangi duyguyu yanlarında götürüyor?' },
    ],
    kapanis:
      'Sizinle daha çok konuşmak isterdik ama vaktimiz sınırlı. Son olarak, kameralarımıza bakıp ekrandaki gençlere bir şey söylemek isteseniz ne söylerdiniz?',
    renk: 'cesme',
  },
  {
    slug: 'yasariye-akkaya',
    number: 3,
    bolge: 'golpazari',
    ekip: 'A',
    isim: 'Yaşariye Akkaya',
    rol: 'Nefsi-Göl Kadın Girişim ve Üretim Kooperatifi Başkanı',
    mekan: 'Kooperatif bahçesi, Gölpazarı',
    temalar: ['Kadın girişimciliği', 'Yöresel mutfak', 'Gastronomi mirası'],
    profil: [
      'Kooperatifin başkanıdır (Başkan Yardımcısı değil).',
      '7 kadın tarafından kuruldu; bir gözleme evi olarak başlayıp küçük bir üretim merkezine dönüştü.',
      'Çalışma düzeni: hafta içi 5 gün, 09.00 — 17.00.',
      'Üretim yelpazesi: baklava, yufka, makarna, erişte, tarhana, börek, lokum, taze ekmek.',
      'Özgün tarif: ısırgan otlu tarhana çorbası — “çocuklara ısırgan otunu nasıl yediririz?” sorusundan deneme-yanılmayla geliştirildi.',
      'Sözü: “Gölpazarı’nı tanıtmak ve kadınların üretime katılımını artırmak amacıyla kurduk.”',
      'Diğer kurucu Hanife Özkan’ın felsefesi: “Kadın, kadının yurdudur.”',
      'Bilgi düzeyi yüksek: ısırgan otunun bağışıklık, kemik, dolaşım ve sindirim üzerine etkilerini sahaya çıkmış bir bilgiyle anlatabiliyor.',
      'Saha akışı: bahçeye tezgah kurulacak, fırında ekmek yapılacak; röportaj çekim sırasında yapılacak — belgeselin hareketli sahnelerinden biridir.',
    ],
    altinBaglanti: [
      'ISIRGAN OTLU TARHANA — Hayri Suer’in “Gölpazarı kent kimliği” söyleminin merkezindeki tarif buradan çıktı. Belgeselde başkan + üretici + lezzet üçlemesi bir döngü oluşturur.',
      'KADIN KOOP MİRASI — Zekiye Tekin’in “Köklerden Geleceğe” vizyonu ile Yaşariye Akkaya’nın sahadaki pratiği aynı eksenden konuşur.',
      'ANADOLU SOFRASI KİTABI — Projenin gastronomi çıktısı (49 tarif) için Yaşariye Hanım’ın ısırgan otlu tarhanası Marmara/Bilecik bölümünün en güçlü adayıdır.',
    ],
    acilis:
      'Yaşariye Hanım, bizi kooperatifinizde ağırladığınız için çok teşekkür ederiz. İçeri girer girmez fırından çıkan ekmek kokusu, kaynayan tarhananın buharı bizi karşıladı — sanki bir mutfağa değil, bir hatıraya girmişiz gibi hissettik. İzin verirseniz önce kooperatifin doğum hikâyesinden başlayalım: Yedi kadın bir araya gelip Nefsi-Göl Kadın Kooperatifi’ni kurmaya nasıl karar verdiniz? İlk gün neye benziyordu, bugüne nasıl geldiniz?',
    sorular: [
      { id: 'q3-1', text: 'Kooperatifinizin imza tarifi olan ısırgan otlu tarhana çorbasının hikâyesi çok güzel: “Çocuklara ısırgan otunu nasıl yediririz?” sorusundan başlamış. Bu tarif aslında bir mutfakta deneme-yanılma yapan bir kadın zekâsının eseri. Bize o sürecin perde arkasını anlatır mısınız — başarısız denemeler, vazgeçmek istediğiniz anlar, ilk “tamam, oldu!” dediğiniz an?' },
      { id: 'q3-2', text: 'Kurucu ortağınız Hanife Hanım’ın güzel bir sözü var: “Kadın, kadının yurdudur.” Bu cümle sadece güzel bir slogan değil, sahada karşılığı olan bir gerçek gibi duruyor. Kadınların burada yan yana durup üretmesi Gölpazarı’nda — sadece ekonomik değil, sosyal anlamda — neyi değiştirdi?' },
      { id: 'q3-3', text: 'Sabah dokuzdan akşam beşe kadar burada bir şey hep yapılıyor: ekmek yoğruluyor, baklava açılıyor, makarna kesiliyor, erişte seriliyor. Bir gözleme evi olarak başlayan bu mekân bugün Bilecik dışına da ürün gönderen küçük bir üretim merkezi. Sırada ne var? Önümüzdeki yıllarda kooperatifi nereye taşımak istiyorsunuz?' },
      { id: 'q3-4', text: 'Bizim “7 Bölge 7 Okul” projemizin bu yılki büyük çıktısı bir gastronomi kitabı: Yedi bölgeden 49 tarif. Sizin ısırgan otlu tarhanınız, Gölpazarı’nın bu kitaba bırakacağı en güçlü adaylardan biri olacak. Bizim öğrencilerimize Gölpazarı sofrasından — bir tane değil, üç tane — “bunu mutlaka tanısınlar” diyeceğiniz lezzet hangileridir, neden?' },
      { id: 'q3-5', text: 'Yeni Maarif Modeli, öğrencinin sınıf dışında, gerçek ustalardan, gerçek mutfaklardan öğrenmesini önemsiyor. Bugün öğrencilerimiz bahçenizde sizinle tezgah kuracak, ekmek yoğuracak, fırına vuracak. Sizce bir genç böyle bir günden ne öğrenir — sadece “ekmek yapmayı” mı, yoksa daha fazlasını mı?' },
    ],
    kapanis:
      'Son olarak, ortağınız Hanife Hanım’ın güzel sözünü ödünç alalım: bugün burada, sizin yurdunuzdayız. Yıllar sonra bu öğrenciler bu günü hatırlayacaklar — bir kadının ekmeğine, bir tarifin doğuşuna, bir kooperatifin hikâyesine tanık oldukları gün olarak. Onlara bırakacağınız tek bir cümlelik “mutfak vasiyeti” ne olurdu?',
    renk: 'cesme',
  },
  {
    slug: 'feyza-nur-kilic',
    number: 4,
    bolge: 'golpazari',
    ekip: 'A',
    isim: 'Sn. Feyza Nur Kılıç',
    rol: 'Gölpazarı Kaymakamı',
    mekan: 'Gölpazarı Kaymakamlığı',
    temalar: ['Kamu hizmeti', 'Eğitim', 'Kırsal kalkınma', 'Genç kadın liderliği'],
    profil: [
      '1995 İstanbul doğumlu, 30 yaşında — Türkiye’nin en genç kaymakamlarından biri.',
      '2014 Ankara Türk Telekom Sosyal Bilimler Lisesi mezunu.',
      '2019 İstanbul Üniversitesi Siyasal Bilgiler Fakültesi Siyaset Bilimi ve Kamu Yönetimi — bölüm üçüncüsü, yüksek onur derecesi.',
      'İyi düzeyde İngilizce, orta düzeyde Arapça.',
      'Eşi Sn. Abdüssamed Kılıç, Osmaneli Kaymakamı. Komşu iki ilçenin kaymakamı bir aile.',
      '2 Kasım 2024 Cumhurbaşkanlığı Kararnamesi ile atanmış, 7 Kasım 2024’te göreve başlamıştır.',
      'Eğitim ve okumaya çok düşkün: 1. sınıf öğrencilerine bizzat karne dağıtıyor, çocuklarla kitap okuyor.',
      'Üslup: Sayın Kaymakamım hitabı uygundur.',
    ],
    acilis:
      'Sayın Kaymakamım, bizi makamınızda kabul ettiğiniz için çok teşekkür ederiz. İstanbul’dan gelen bir grup lise öğrencisi olarak bu görüşme bizim için ayrıca anlamlı — çünkü hem yaşımıza yakın, hem de bir kaymakam olarak bu kadim ilçeyi yöneten bir hanımefendiyle konuşma fırsatı bulduk. İzin verirseniz önce sizi tanıyalım: 2024’ten bu yana Gölpazarı Kaymakamısınız. Gölpazarı sizin için ne ifade ediyor, bu ilçeyi ne zaman, nasıl tanıdınız?',
    sorular: [
      { id: 'q4-1', text: 'İstanbul’da doğdunuz, İstanbul Üniversitesi’nde okudunuz, çeşitli illerde stajlar yaptınız. Ama bugün buradasınız — Bilecik’in küçük bir ilçesinde. Sizin için “büyük şehirden bir Anadolu ilçesine gelmek” nasıl bir deneyim oldu? Beklediğinizle karşılaştığınız arasında hangi sürprizler oldu?' },
      { id: 'q4-2', text: 'Sayın Kaymakamım, eğitim sizin gündeminizin merkezinde duruyor: 1. sınıfların karnesini bizzat dağıtıyorsunuz, çocuklarla kitap okuyorsunuz, “okumanın önemini” her vesileyle vurguluyorsunuz. Genç bir kaymakam olarak Gölpazarı’nın çocukları için “şu mutlaka olsun” dediğiniz şey nedir?' },
      { id: 'q4-3', text: 'Bizim “7 Bölge 7 Okul” projemiz, İstanbul’dan gelen lise öğrencilerini Türkiye’nin farklı kültürel coğrafyalarıyla buluşturuyor. Şu anda ilçenizdeyiz ve bu da projenin bir parçası. Yeni Maarif Modeli’nin “Beceri Temelli Öğrenme” anlayışını düşünürsek — sizce öğrencilerin sadece sınıfta değil, bir ilçenin tarlasında, mutfağında, atölyesinde öğrenmesi neden bu kadar değerli?' },
      { id: 'q4-4', text: 'Geçtiğimiz aylarda Yerel Kalkınma Hamlesi Programı’nı yönettiniz, Kırsal Kalkınma Yatırımları toplantısına başkanlık ettiniz; sürdürülebilir tarım, dijitalleşme, tasarruflu sulama vurgunuz çok belirgin. Gölpazarı çekirdeğinden ısırgan otlu tarhanaya kadar bu ilçenin bir tarımsal kimliği var. “Sürdürülebilir Gölpazarı” derken zihninizde nasıl bir resim duruyor?' },
      { id: 'q4-5', text: 'Sayın Kaymakamım, eşiniz Sn. Abdüssamed Kılıç da Osmaneli Kaymakamı. Aynı meslekte, komşu iki ilçede, iki genç kaymakam… Herkesin imreneceği ama dengelemesi de zor olan bir hikâye. Kamu hizmetinde görev almak isteyen bizim yaşımızdaki gençlere — özellikle kız öğrencilerimize — sizin yolculuğunuzdan ne öğüt verirsiniz?' },
    ],
    kapanis:
      'Son olarak, beş yıl sonra Gölpazarı’nı tekrar ziyaret etsek, sizin döneminizin izini hangi yerde, hangi şeyde bulmamızı istersiniz? Belgeselimizin sonuna “O Gölpazarı’nda…” diye başlayan bir cümle koyacağız. Sizin cümleniz ne olur?',
    renk: 'cesme',
  },
  {
    slug: 'turgut-akagunduz',
    number: 5,
    bolge: 'golpazari',
    ekip: 'A',
    isim: 'Sn. Turgut Akagündüz',
    rol: 'Gölpazarı İlçe Milli Eğitim Müdürü',
    mekan: 'İlçe Milli Eğitim Müdürlüğü',
    temalar: ['Erasmus+', 'Maarif Modeli', 'Kültürel miras eğitimi'],
    profil: [
      'Uzun yıllardır Gölpazarı’nda görev yapan deneyimli bir eğitim yöneticisidir.',
      'Erasmus+ projelerinin güçlü destekçisi — Mesut Akatay’ın KA121 akreditasyonu ile aynı eğitim dilinde duruyor.',
      'Bilinen sözü: “Bu tür uluslararası projeler öğrencilere belki bir daha elde edemeyecekleri fırsatlar sunar.”',
      'Bir başka önemli sözü: “Bu projelerin amacı yalnızca staj yapma değil; gidilecek ülkelerin kültürel yapılarını tanıma yolculuğudur.”',
      'Kaymakam Feyza Nur Kılıç ile sahada birlikte: kitap okuma, karne dağıtımı, okul ziyaretleri.',
      'Üslup: Sayın Müdürüm hitabı uygundur. Kendisi de bir öğretmen.',
    ],
    altinBaglanti: [
      'Akagündüz, projemizin doğal müttefikidir. Onunla yapacağımız röportaj, ileride GİKAL ile Gölpazarı arasında doğacak Erasmus+ / eTwinning iş birliğinin de zeminidir.',
    ],
    acilis:
      'Sayın Müdürüm, bizi ilçenize davet ettiğiniz için çok teşekkür ederiz. Buraya öğretmenimiz Mesut Akatay Hocayla birlikte geldik; bu da bizim için iki eğitimcinin bir araya geldiği bir an oldu. Gölpazarı’nın eğitimine uzun yıllardır emek veriyorsunuz; ilçenin okullarında, koridorlarında, projelerinde sizin parmak iziniz var. İzin verirseniz önce şunu soralım: Bir ilçenin Milli Eğitim Müdürü olmak ne demek? Sizden öncekilerden devraldığınız neydi, sizinle ne değişti?',
    sorular: [
      { id: 'q5-1', text: 'Sayın Müdürüm, takip ettiğimiz haberlerde sizin uluslararası projelere — özellikle Erasmus+’a — verdiğiniz desteği görüyoruz. “Yurt dışına gitmek sadece staj değil, bir kültürel yapı tanıma yolculuğudur” demişsiniz. Bizim hocamız Mesut Akatay da Erasmus+ KA121 akreditasyonu olan bir öğretmen. Sizce bir Anadolu ilçesinin gencine “Erasmus” ne katar? Ona ne öğretir, neyi değiştirir?' },
      { id: 'q5-2', text: '“7 Bölge 7 Okul” projemiz tam olarak sizin yıllardır savunduğunuz şeyi yapıyor: Bir öğrenciyi kendi şehrinden çıkarıp başka bir kültürün içine bırakmak. Bugün İstanbul’dan gelen biz öğrenciler Gölpazarı’ndayız, ileride Gölpazarılı öğrencilerin de İstanbul’a, Doğu’ya, Akdeniz’e gitmesini hayal ediyoruz. Sizin ilçenizden çıkıp Türkiye’yi tanıyacak bir Gölpazarılı öğrencinin sırt çantasında ne olmalı?' },
      { id: 'q5-3', text: 'Türkiye Yüzyılı Maarif Modeli — beceri temelli öğrenme, ahlaki değerler, üreten birey vurgusu — bugün sahada nasıl yansıyor? Gölpazarı gibi küçük bir ilçenin İlçe Milli Eğitim Müdürü olarak, bu modeli uygulamanın büyük şehirlerden farkı nedir? Burada eğitim daha yakın, daha aile gibi bir şeye mi dönüşüyor?' },
      { id: 'q5-4', text: 'Bilecik bizim için sadece bir il değil — Osman Gazi’nin doğduğu, Şeyh Edebali’nin yaşadığı, devletin temellerinin atıldığı bir kadim coğrafya. Gölpazarı, Söğüt’e komşu. Sizin ilçenizdeki bir öğrenciye bu tarihi miras nasıl aktarılıyor? Bir öğrencinin “Gölpazarlı olmak”tan, “Bilecikli olmak”tan duyduğu o özel hissi nasıl besliyorsunuz?' },
      { id: 'q5-5', text: 'Belgeselimizde Anatolian Harps’ın ustalarından bir köy kadın kooperatifinin başkanına; Belediye Başkanlarımızdan Sayın Kaymakamımıza kadar pek çok sesi bir araya getiriyoruz. Sizin Milli Eğitim olarak bu çalışmaya bağlamak istediğiniz bir mesaj olur mu?' },
    ],
    kapanis:
      'Sayın Müdürüm, son olarak şunu paylaşmak isteriz: Bugün burada olmamızın bir nedeni de bir ders saatinin dışına çıkmanın değerine inanmamız. Mesut Hocamızın Erasmus+ akreditasyonu var, sizin Erasmus+ vizyonunuz var. Sizinle ileride ortak bir Erasmus+ ya da eTwinning projesi yapma ihtimalimiz var mı? Bu belgeselin bir günü, iki kurumun ortak bir hayalinin başlangıcı olabilir mi?',
    renk: 'cesme',
  },
  {
    slug: 'hayri-suer',
    number: 6,
    bolge: 'golpazari',
    ekip: 'A',
    isim: 'Sn. Hayri Suer',
    rol: 'Gölpazarı Belediye Başkanı',
    mekan: 'Gölpazarı Belediye Binası',
    temalar: ['UNESCO süreci', 'Gastronomi', 'Kültürel miras', 'Maarif Modeli iş birliği'],
    profil: [
      '1976 doğumlu, 3 çocuk babası. AK Parti.',
      '31 Mart 2019’dan beri Gölpazarı Belediye Başkanı, 2024’te yeniden seçildi (ikinci dönem).',
      'Kasım 2025: Bilecik İl Kültür ve Turizm Müdürü ile Ankara’da Cumhurbaşkanlığı Külliyesi ve Kültür–Turizm Bakanlığı temasları (UNESCO, gastronomi, müzecilik).',
      'Fatih Dönmez Kültür ve Sanat Merkezi’ni ilçeye kazandırdı.',
      'Çevre / atık yönetimi alanında bölgesel iş birliği projeleri var (Biosun Bilecik EKAY tesisi).',
      'Gastronomi: Ala Et Lokantası, ısırgan otlu tarhana, meşhur Gölpazarı çekirdeği.',
      'Üslup: Sayın Başkan / Sayın Başkanım hitabı uygundur.',
    ],
    acilis:
      'Sayın Başkanım, bizi makamınızda kabul ettiğiniz için teşekkür ederiz. Bilecik dışından gelen bir öğretmen ve grup öğrenci olarak bu kadim ilçenin kültürel hafızasını öğrencilerimize aktarmak için buradayız. İzin verirseniz kısa bir tanıtımla başlayalım: 2019’dan bu yana belediye başkanlığı yapıyorsunuz; ikinci dönemin bu yılında Gölpazarı’nın bugünü ve geleceği için en çok hangi konulara ağırlık veriyorsunuz?',
    sorular: [
      { id: 'q6-1', text: 'Geçtiğimiz yıl Bilecik’in UNESCO süreciyle ilgili Ankara’da Cumhurbaşkanlığı Külliyesi ve Kültür–Turizm Bakanlığı’nda önemli temaslarınız oldu. Gölpazarı’nın bu süreçteki yerini nasıl konumlandırıyorsunuz? Bu kadim ilçenin UNESCO listesine girebilecek hangi değerleri var?' },
      { id: 'q6-2', text: 'Gölpazarı denilince akla bir yandan ısırgan otlu tarhana gibi yerel lezzetler, bir yandan da Gölpazarı çekirdeği gibi tarımsal bir miras geliyor. Bunları sadece pazarda satılan ürünler olarak değil, bir kent kimliğinin parçası olarak yaşatmak için belediye olarak hangi adımları atıyorsunuz?' },
      { id: 'q6-3', text: 'Fatih Dönmez Kültür ve Sanat Merkezi gibi yeni mekânlar ilçeye kazandırıldı, kütüphane modernizasyonu için Bakanlıkla yatırım görüşmeleri yapıldı. Sizce bir küçük ilçenin “kültürün de üretildiği bir yer” olabilmesi için en kritik şey nedir?' },
      { id: 'q6-4', text: 'Türkiye Yüzyılı Maarif Modeli, öğrencinin sınıf dışına çıkıp üretim süreçlerini kendi gözüyle görmesini önemli buluyor. Belediye olarak öğrencilerin Gölpazarı’nın çekirdek tarlalarında, Anatolian Harps gibi atölyelerinde, mutfaklarında deneyim kazanması için bizimle nasıl bir iş birliği geliştirebiliriz?' },
      { id: 'q6-5', text: 'Bizim “7 Bölge 7 Okul” projemiz, Türkiye’nin yedi farklı bölgesinden okulları kültürel mirasla buluşturuyor. Sizce bu tarz öğrenciyi sahaya çıkaran çalışmalar Anadolu’nun küçük ilçelerine ne katar — daha da önemlisi, öğrenciye Gölpazarı’nın bir tarlasında ya da fırınında, sınıfta asla öğrenemeyeceği ne öğretir?' },
    ],
    kapanis:
      'Son olarak, belgeselimizi izleyecek olan Türkiye’nin farklı şehirlerindeki öğrencilere ve onların ailelerine Gölpazarı adına ne söylemek istersiniz? Onları ilçenize davet edecek olsanız, neyi görmeleri için davet ederdiniz?',
    renk: 'cesme',
  },
  {
    slug: 'muhammet-mustafa-kara',
    number: 7,
    bolge: 'pazaryeri',
    ekip: 'B',
    isim: 'Sn. Muhammet Mustafa Kara',
    rol: 'Pazaryeri Kaymakamı',
    mekan: 'Pazaryeri Kaymakamlığı / Yeni Hükümet Konağı',
    temalar: ['Saha odaklı kaymakamlık', 'Kınık çömlek mirası', 'Köklerden Geleceğe'],
    profil: [
      '110. Dönem Kaymakamlık Kursu DÖNEM BİRİNCİSİ (Türkiye birincisi).',
      'Cumhurbaşkanı Erdoğan’ın katılımıyla yapılan kura töreninde, dönem birincisi olarak görev yerini SEÇME hakkı kazandı ve PAZARYERİ’Nİ TERCİH ETTİ.',
      '24 Ekim 2025’te Pazaryeri’nde göreve başladı.',
      '11 Şubat 2026: Kınık Köyü’nde “İz Bırakan Eller — Yerel Kültürün Sunumu, Çömlekçiliğin Geleceğe Dokunuşu” projesi toplantısını yönetti.',
      'Felsefesi: “Bizim görevimiz sadece makamda oturmak değil, sahada olmak, vatandaşımızın ayağına gitmek ve onların sesini birebir dinlemektir.”',
      'Bir başka sözü: “Bu tür değerlerimiz bizim ortak mirasımızdır. En iyi şekilde yaşatmak ve korumak hepimizin sorumluluğudur.”',
      'Üslup: Sayın Kaymakamım hitabı uygundur.',
    ],
    altinBaglanti: [
      'Şubat 2026’da bizzat Kınık Köyü’nde “İz Bırakan Eller — Çömlekçiliğin Geleceğe Dokunuşu” projesinin toplantısını yönetmiştir. Bu, bizim 7 Bölge 7 Okul saha çalışmamızla aynı kavramsal kökten konuşan resmi bir devlet projesidir.',
    ],
    acilis:
      'Sayın Kaymakamım, bizi makamınızda kabul ettiğiniz için çok teşekkür ederiz. Hakkınızda hep şunu duyduk: 110. Dönem Kaymakamlık Kursu’nu birincilikle bitirdiniz; o gün Türkiye’nin neresini seçerseniz seçebilirdiniz. Ama Pazaryeri’ni seçtiniz. İzin verirseniz önce şunu anlamak istiyoruz: Pazaryeri’ni seçerken zihninizde nasıl bir ilçe vardı? Sizi büyüleyen şey neydi?',
    sorular: [
      { id: 'q7-1', text: 'Göreve başladığınız gün “Pazaryeri ilçemiz çok güzel bir yer” demişsiniz. Aradan altı ay geçti. Bugün bu cümleye ne eklerdiniz? Pazaryeri’nin sizi en çok şaşırtan, sevindiren, belki bazen yoran şeyi nedir?' },
      { id: 'q7-2', text: 'Sayın Kaymakamım, ilçenizin köylerini tek tek dolaşıyorsunuz: Sarıdayı’da, Günyurdu’da, Kınık’ta… “Bizim görevimiz sadece makamda oturmak değil, sahada olmak” diyorsunuz. Bir kaymakamın “sahası” sizin için ne demek?' },
      { id: 'q7-3', text: 'Geçen Şubat’ta Kınık Köyü’nde — biz öğrenciler için çok özel bir yerde — “İz Bırakan Eller: Çömlekçiliğin Geleceğe Dokunuşu” projesinin toplantısını yönettiniz. Bizim “7 Bölge 7 Okul” projemiz de aynı felsefeyle yola çıktı: kültürel mirası geleceğe taşımak. Sizin gözünüzde 148 yıllık Kınık çömlekçiliği bugünden geleceğe nasıl taşınmalı?' },
      { id: 'q7-4', text: 'Türkiye Yüzyılı Maarif Modeli’nin “öğrenci sınıf dışında, üreterek, deneyerek öğrenmeli” anlayışı bugün burada karşılığını buluyor. Bilecik dışından gelen lise öğrencileri olarak Pazaryeri’nizdeyiz, Kınık’ta çömlek atölyesinde olacağız. Sizce bir gencin, bir kaymakam ile aynı saha gününü paylaşması — bu deneyim ona ne öğretir?' },
      { id: 'q7-5', text: 'Pazaryeri 1877’de Bulgaristan’dan gelen göçmenlerin yurt edindiği bir coğrafya; Yenipazar’ın da Bulgar ve Yunan göçmen kökleri var. Bu çok katmanlı kök, bugünün Pazaryerilisini nasıl bir insan yapmıştır? Bir kaymakam olarak bu çok kültürlü dokuyu nasıl koruyorsunuz?' },
    ],
    kapanis:
      'Sayın Kaymakamım, son olarak şunu sormak isteriz: Bir gün belki bizden sonraki öğrenciler de bu makama gelir, bu sandalyede oturan kişiyle konuşur. Size atfedilecek bir tek cümle olsa, “O Kaymakam ki…” diye başlayan bir cümle, sizin için ne yazılsın?',
    renk: 'clay',
  },
  {
    slug: 'mahmut-ekinci',
    number: 8,
    bolge: 'pazaryeri',
    ekip: 'B',
    isim: 'Sn. Mahmut Ekinci',
    rol: 'Pazaryeri İlçe Milli Eğitim Müdürü',
    mekan: 'İlçe Milli Eğitim Müdürlüğü, Yeni Hükümet Konağı',
    temalar: ['Köyden ilçeye yolculuk', 'Maarif Modeli', 'Edebiyat ve eğitim'],
    profil: [
      '1973 Adıyaman / Derinsu Köyü / Tetikhan mezrasında doğdu — bir köy çocuğudur.',
      'Atatürk Üniversitesi Ağrı Eğitim Fakültesi TÜRK DİLİ VE EDEBİYATI BÖLÜMÜ MEZUNU. Mesut Akatay’ın bölüm arkadaşıdır.',
      '28 Eylül 1998’de Söğüt Ertuğrulgazi Ortaokulu’nda Türkçe Öğretmeni olarak göreve başladı.',
      '13 Kasım 2019’dan bu yana Pazaryeri İlçe Milli Eğitim Müdürü.',
      'Evli ve 2 çocuk babası.',
      '4 yıldır süren Geleneksel Eğitim Şenliği (Belediye + Kaymakamlık + MEM ortak).',
      'Üslup: Sayın Müdürüm hitabı uygundur. Kendisi de bir Türkçe öğretmenidir.',
    ],
    altinBaglanti: [
      'Mahmut Ekinci, Mesut Akatay’ın doğrudan BÖLÜM ARKADAŞIDIR (Türk Dili ve Edebiyatı). Sorular bu bağı yumuşak bir vurguyla kullanır.',
      'Röportaj, ileride GİKAL ile Pazaryeri okulları arasında doğacak Erasmus+ / eTwinning iş birliğinin de zeminini hazırlar.',
    ],
    acilis:
      'Sayın Müdürüm, bizi ilçenizde misafir ettiğiniz için çok teşekkür ederiz. Bu görüşme bizim için ayrıca anlamlı: bizim hocamız Mesut Akatay da sizin gibi Türk Dili ve Edebiyatı bölümü mezunu — yani sizinle aynı bölümü okumuş, aynı yıllarda kelime ve cümle üzerine düşünmüş bir öğretmenle birlikte buradayız. İzin verirseniz önce sizi tanıyalım: Adıyaman’ın bir köyünde başlayan, Söğüt’te Türkçe öğretmenliği ile devam eden uzun bir yolculuk var. Bugün baktığınızda, bu yolculukta size en çok ne öğretildi?',
    sorular: [
      { id: 'q8-1', text: 'Sayın Müdürüm, sizin gibi Türk Dili ve Edebiyatı mezunu bir öğretmen, çocukluğunda Adıyaman’ın küçük bir köyünde okumuş, oradan bir ilçenin Milli Eğitim Müdürü olmuş. Bu yolculuk, başlı başına bizim gibi öğrencilere bir cevaptır: “Olur mu?” sorusuna. Anadolu’nun küçük yerlerinden gelen gençlere kendi yolculuğunuzdan ne mesaj gönderirsiniz?' },
      { id: 'q8-2', text: 'Pazaryeri’nde 4 yıldır geleneksel hâle gelen bir Eğitim Şenliği var; Belediye + Kaymakamlık + Milli Eğitim üçü birlikte düzenliyor. Bu çok güzel bir model. İstanbul’daki büyük okullarımızda bile bu kadar entegre bir kurumsal işbirliği görmek zor. Bu şenliği bir Anadolu ilçesinde dört yıldır canlı tutmanın sırrı nedir?' },
      { id: 'q8-3', text: 'Türkiye Yüzyılı Maarif Modeli’nin merkezinde “Beceri Temelli Öğrenme”, “Köklerden Geleceğe” vizyonu, “ahlaklı, üreten birey” hedefi var. Bizim “7 Bölge 7 Okul” projemiz tam da bu modeli sahaya çıkarıyor. Sizin için bu modelin Pazaryerili bir öğrencideki somut karşılığı nedir?' },
      { id: 'q8-4', text: 'Sizin döneminizde Pazaryeri’nde güzel bir kültür var: Vali Yardımcısı, Belediye Başkanı, Milli Eğitim Müdürü birlikte sınıfa giriyor, kitap okuyor, öğrencilerle sohbet ediyor. Kınık İlk ve Ortaokulu’nda bunu yaptığınızı biliyoruz. Bir öğrencinin sınıfında protokol görmesi, sınıfın dışındaki dünyayı tanıması — neyi değiştirir bir çocuğun zihninde?' },
      { id: 'q8-5', text: 'Mesut Hocamız Erasmus+ KA121 akreditasyonu olan bir öğretmen; GİKAL’de uluslararası projeler koordine ediyor. Sizin Pazaryeri okullarınızla — özellikle Kınık’taki çocuklarımız adına — ileride Erasmus+ ya da eTwinning üzerinden ortak bir proje yürütme ihtimalimiz var mı? Bu belgesel bunun başlangıcı olabilir mi?' },
    ],
    kapanis:
      'Sayın Müdürüm, son olarak şunu sormak isteriz: Sizin gibi bir Türk Dili ve Edebiyatı öğretmenine, kelimelerle çalışmış ve şimdi de bir ilçenin tüm okullarının başına geçmiş birine yakışan bir kapanış sorusu olur. Bir öğrencinin defterine yazılacak en güzel cümle ne olur? Onun “bu cümleyi unutmam” diyeceği bir cümle yazsanız, ne yazardınız?',
    renk: 'clay',
  },
  {
    slug: 'zekiye-tekin',
    number: 9,
    bolge: 'pazaryeri',
    ekip: 'B',
    isim: 'Sn. Zekiye Tekin',
    rol: 'Pazaryeri Belediye Başkanı',
    mekan: 'Pazaryeri Belediye Binası',
    temalar: ['Kadın liderliği', 'Kınık çömlek mirası', 'Köklerden Geleceğe'],
    profil: [
      '1978 Pazaryeri doğumlu, Anadolu Üniversitesi İşletme Fakültesi mezunu.',
      '2004–2019 yılları arasında 15 yıl boyunca Pazaryeri Belediyesi’nde personel olarak görev yaptı; ardından siyasete girdi.',
      'AK Parti adayı olarak başkan seçildi; Pazaryeri’nin kadın belediye başkanıdır.',
      'Şubat 2026: AK Parti Genel Merkez Kadın Kolları “Köklerden Geleceğe Teşkilat Çalıştayı” (Ankara). Sayın Emine Erdoğan’a Pazaryeri’nin kadın projelerini sundu.',
      'Mart 2026: Gaziantep’te “Kadınlarla Yükselen Dirençli Şehirler” programı; Sayın Fatma Şahin ile görüştü.',
      'Sözü: “Kadın varsa üretim var, emek var, bereket var.”',
      'Kınık Köyü’nde yeni kurulan Kadın Çömlek Kooperatifi — başkan: Neriman Gümüştekin.',
      'Üslup: Sayın Başkanım / Sayın Başkan hitabı uygundur.',
    ],
    altinBaglanti: [
      'Sn. Zekiye Tekin’in “kadın koop + Kınık çömlek + Köklerden Geleceğe” üçlüsü, Yaşariye Akkaya (Nefsi-Göl Kadın Kooperatifi Başkanı) ile birebir aynı ekosenden konuşuyor.',
    ],
    acilis:
      'Sayın Başkanım, bizi Pazaryeri’nde misafir ettiğiniz için çok teşekkür ederiz. 15 yıl boyunca bu belediyenin içinde çalışmış, sonra başkan olmuş bir isim olarak biraz farklı bir hikâyeniz var. İzin verirseniz önce sizin yolculuğunuzu dinleyelim: Pazaryeri Belediyesi’nde başlayan bu yolculuk sizi başkanlık koltuğuna nasıl getirdi?',
    sorular: [
      { id: 'q9-1', text: '“Kadın varsa üretim var, emek var, bereket var” diyorsunuz — ve bu söz sadece bir slogan değil, sahada karşılığı olduğu da görülüyor: Kınık Köyü’nde yeni kurulan kadın çömlek kooperatifi, kadınlara özel spor merkezi, kırsal kadın istihdamı projeleri… Pazaryeri’nin bir kadın olarak yönetilmesinin ilçeye ne kazandırdığını düşünüyorsunuz?' },
      { id: 'q9-2', text: 'Şubat ayında Ankara’da Sayın Emine Erdoğan’a Pazaryeri’nin kadın projelerini sundunuz, geçtiğimiz ay Gaziantep’te Sayın Fatma Şahin ile bir araya geldiniz. “Köklerden Geleceğe” vizyonu çerçevesinde Pazaryeri için en çok önemsediğiniz “kök” hangisi, ona bağladığınız “gelecek” nasıl bir gelecek?' },
      { id: 'q9-3', text: 'Kınık Köyü’nde 148 yıllık bir çömlekçilik geleneği yaşıyor, üstelik 1877’de Bulgaristan’dan göç eden ailelerin getirdiği bir gelenek. Salim Yaşar gibi “Yaşayan İnsan Hazinesi” ustaları yetişti, şimdi bayrağı kadın kooperatifi devralıyor. Bu kuşak değişimini nasıl yorumluyorsunuz?' },
      { id: 'q9-4', text: 'Gençlere yönelik DENEYAP atölyeleri, modern spor sahaları, kadınlara özel fitness merkezi — bütün bu yatırımlar, yeni Maarif Modeli’nin “üreten, çevresine duyarlı, becerikli birey” hedefiyle örtüşüyor. Pazaryeri’nde okuyan bir lise öğrencisinin sizin döneminizden alacağı en somut “iz” ne olur?' },
      { id: 'q9-5', text: 'Bizim “7 Bölge 7 Okul” projemiz, İstanbul’dan gelen lise öğrencilerini Türkiye’nin farklı kültürel coğrafyalarıyla buluşturuyor. Pazaryeri ve Kınık, Bulgaristan göçmenlerinin kurduğu, çömlekle, doğayla, kadın emeğiyle anılan bir yer. Sizce bu öğrenciler Pazaryeri’nden ayrılırken yanlarında en çok neyi götürmeli?' },
    ],
    kapanis:
      'Son olarak şöyle bir hayal kuralım: 5 yıl sonra Pazaryeri’nde okuyan bir kız öğrenci, bugünkü kararlarınızın bir sonucu olarak hayatında bir şeyi yapabiliyor olacak. Sizce o şey ne olur? Belgeselimizi izleyecek o yaştaki kızlara da o şey hakkında ne söylemek istersiniz?',
    renk: 'clay',
  },
];

export const interviewBySlug = (slug: string) =>
  interviews.find((i) => i.slug === slug);
