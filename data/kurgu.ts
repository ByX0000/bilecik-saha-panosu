export type KurguBolumu = {
  id: string;
  numara: string;
  baslik: string;
  altBaslik: string;
  mekan: string;
  zaman: string;
  karakterler: string;
  gorsel: string;
  ses: string;
  teknikNot: string;
  maarifNotu: string;
  yaraticiDokunus?: string[];
};

export const cobanCesmesi = {
  sair: 'Faruk Nafiz Çamlıbel',
  baslik: 'Çoban Çeşmesi',
  ilkMisra: 'Derinden derine ırmaklar ağlar,',
  ikinciMisra: 'Uzaktan uzağa çoban çeşmesi.',
  not: 'Açılış sahnesinde Buket ve Maya tarafından seranat ritminde okunacaktır.',
};

export const kurguBolumleri: KurguBolumu[] = [
  {
    id: 'prolog',
    numara: 'I',
    baslik: 'Prolog — Köklerin Sada-sı',
    altBaslik: 'Karanlıktan aydınlığa, sessizlikten şiire',
    mekan: 'DIŞ — Kırsal çeşme başı',
    zaman: 'Gündoğumu (şafak öncesi → ilk ışık)',
    karakterler: 'Buket Atalay, Deniz Maya İpekçioğlu — geleneksel kıyafetler',
    gorsel:
      'Ekran tamamen karanlıktır. Sadece suyun çeşmeden yalağa düşüş sesi duyulur. Kamera, şafak vaktinin mavi ışığında geleneksel kumaş dokularına (nakışlar, yerel desenler) aşırı yakın plan (Macro) odaklanır. Gün ağardıkça kızların silüeti belirir.',
    ses:
      'Ortam sesi (ambient). Uzaktan uyanan doğa sesleri. Buket ve Maya, Faruk Nafiz Çamlıbel’in “Çoban Çeşmesi” şiirini seranat ritminde, adeta zamana fısıldar gibi okurlar.',
    teknikNot:
      'Düşük ışık performansı yüksek lensler (f/1.2 veya 1.4) kullanılmalı. Geleneksel kıyafetlerin otantikliği ışıkla vurgulanmalı. Mikrofon: rüzgar korumalı (deadcat), şiir okumasında ağız mesafesi 25 cm.',
    maarifNotu:
      'Köklere bakış. Kültürel hafızanın ve geleneksel sanatın bugüne taşınması — Türkiye Yüzyılı Maarif Modeli’nin “Köklerden Geleceğe” vizyonunun açılışı.',
    yaraticiDokunus: [
      'Kamera yalağa düşen suya odaklansın; suyun yansımasında kızların silüeti netleşsin.',
      'Şiirin son mısrası okunduğunda ses, doğal bir cross-fade ile bir sonraki bölümün ambiyansına dönüşsün — bağlanma noktası, hard-cut değil organik geçiş.',
    ],
  },
  {
    id: 'govde',
    numara: 'II',
    baslik: 'Gövde — Yaşayan Bellek',
    altBaslik: 'Dokuz ses, iki bölge, bir hikâye',
    mekan: 'Çeşitli (Atölyeler, makamlar, sokaklar, mutfak)',
    zaman: 'Gün boyu — 17 Mayıs 10:00 → 18 Mayıs 17:00',
    karakterler: '9 ana paydaş + saha çekim ekipleri (A: Gölpazarı, B: Pazaryeri)',
    gorsel:
      'Hızlı ve dinamik bir kurgu. Çeşmeden akan suyun görüntüsü, Kınık’ta dönen çömlek çarkına veya Yaşariye Hanım’ın yoğurduğu hamura bağlanır.',
    ses:
      'Üç katman: röportaj sesleri (anlatı), saha ambiyansı (çark, hamur, fırın, çay bahçesi), arada doğal sessizlikler. Müzik bu bölümde minimal — sahnenin kendi sesi yeter.',
    teknikNot:
      'Muhabir Ömer Tuna Sezer her görüşmede v5 soru setindeki derinliği korur. Röportajlar arası geçişlerde b-roll (detay çekimler) bol tutulur. Her röportaj başında 30 sn “oda sesi”.',
    maarifNotu:
      'Beceri Temelli Öğrenme. Öğrenci sınıf dışında, gerçek üreticilerden, gerçek mekânlardan öğrenir — bu bölüm modelin sahadaki tam karşılığıdır.',
    yaraticiDokunus: [
      'Protokol vizyonu (Kaymakamlar, Belediye Başkanları, MEM Müdürleri) sahaya inişle dengelensin: makamdan tarlaya, ofisten fırına geçişler.',
      'Eğitim köprüsü: Akagündüz–Mesut Hoca ve Ekinci–Mesut Hoca paralelleri kurguda yan yana getirilsin.',
      'Zanaat üçgeni: Anatolian Harps (arp telleri) → Kınık çömlek (çark) → Nefsi-Göl (fırın) — üç farklı el, üç farklı tını.',
      'Öğrencilerin üretime dahil olduğu kısa aksiyon sahneleri (slow-motion, 60fps): hamur yoğurma, çömlek çarkına ilk dokunuş.',
    ],
  },
  {
    id: 'epilog',
    numara: 'III',
    baslik: 'Epilog — Geleceğin Tınısı',
    altBaslik: 'Bir yanı geleneğe, bir yanı evrensel sanata',
    mekan: 'DIŞ — Panoramik tepe (Gölpazarı veya Pazaryeri’ne hâkim nokta)',
    zaman: 'Gün batımı — Golden Hour (yaklaşık 19:30–20:15)',
    karakterler: 'Deniz Maya İpekçioğlu (piyano), Buket Atalay (vokal), Taha Taylan Torun (gitar) — modern kıyafetler',
    gorsel:
      'Altın saat. Drone, müzisyenlerin etrafında dairesel bir yörüngede dönerken (orbit), kadim coğrafyayı modern bir estetikle kadraja alır. Renk paleti: teal & orange.',
    ses:
      'Batılı konseptte modern bir müzik icrası. Şiirin geleneksel tınısı yerini piyanonun ve gitarın evrensel melodisine bırakır. Vokalde Buket; piyanoda Maya; gitarda Taha Taylan.',
    teknikNot:
      'Drone operatörü gün batımı açısını kaçırmamak için önceden uçuş rotasını (flight path) belirlemelidir. Piyano ve enstrüman mikrofonlaması rüzgar korumalı (deadcat) yapılmalıdır. Piyanonun sahaya taşınması Belediye lojistik ekibiyle koordine edilir.',
    maarifNotu:
      'Geleceğe bakış. Gelenekten beslenen ama ona hapsolmayan bir Türk gencinin sentezi — “Köklerden Geleceğe” vizyonunun final kapanışı.',
    yaraticiDokunus: [
      'Drone son karede yavaşça yükselir; üç müzisyen küçülür, arkalarındaki kadim coğrafya genişler. Kapanış karesi geniş plan.',
      'Müzik bittiğinde, doğal bir doğa sesine dönülür — başlangıçtaki çeşme suyunun sesi geri gelir. Döngü kapanır.',
      'Son siyah kareye Faruk Nafiz Çamlıbel’in bir mısrası beyaz harflerle yazılır.',
    ],
  },
];

// Tematik altın bağlantılar — kurguda paralel montajda kullanılacak köprüler
export const altinBaglantilar = [
  {
    id: 'kadin-koop',
    baslik: 'Kadın Gücü Köprüsü',
    aciklama:
      'Yaşariye Akkaya (Nefsi-Göl) ile Pazaryeri Belediye Başkanı Zekiye Tekin’in “kadın varsa üretim var” vurguları — belgeselin en güçlü damarı.',
    sahneler: ['yasariye-akkaya', 'zekiye-tekin'],
  },
  {
    id: 'edebiyat',
    baslik: 'Edebiyat & Eğitim Ortaklığı',
    aciklama:
      'Pazaryeri İlçe MEM Müdürü Mahmut Ekinci’nin Mesut Akatay ile Türk Dili ve Edebiyatı bölüm arkadaşlığı; köyden ilçe MEM müdürlüğüne yolculuk.',
    sahneler: ['mahmut-ekinci'],
  },
  {
    id: 'goc-ve-zanaat',
    baslik: 'Göç ve Zanaat',
    aciklama:
      'Kınık Köyü’nün 1877–78 Osmanlı–Rus Savaşı sonrası Bulgaristan göçmenleri tarafından kurulması; çömlekçilik geleneği. Yenipazar’ın da Bulgar/Yunan göçmen kökleri.',
    sahneler: ['muhammet-mustafa-kara', 'zekiye-tekin'],
  },
  {
    id: 'erasmus-zemini',
    baslik: 'Erasmus+ Diplomasisi',
    aciklama:
      'Hem Akagündüz hem Ekinci ile yapılan röportajlarda Mesut Hoca’nın KA121 akreditasyonuna açıkça referans verildi. İleride GİKAL ile iki ilçe arasında doğacak iş birliği zemini.',
    sahneler: ['turgut-akagunduz', 'mahmut-ekinci'],
  },
  {
    id: 'isirgan-otlu-tarhana',
    baslik: 'Isırgan Otlu Tarhana Üçlemesi',
    aciklama:
      'Yaşariye Akkaya tarifi geliştirir, Hayri Suer kent kimliğine yerleştirir, biz öğrenciler “Anadolu Sofrası” kitabına aktarırız. Üreten + yöneten + aktaran döngüsü.',
    sahneler: ['yasariye-akkaya', 'hayri-suer'],
  },
];
