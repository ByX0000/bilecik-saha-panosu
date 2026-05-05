export type Contact = {
  id: string;
  isim: string;
  rol: string;
  telefon: string;
  kategori: 'yonetim' | 'belgesel' | 'ogrenci' | 'roportaj' | 'resmi';
};

export const contacts: Contact[] = [
  // YÖNETİM
  { id: 'c1', isim: 'Necdet Bayındır', rol: 'Proje Girişimcisi / GİKAL Müdürü', telefon: '0536 250 09 46', kategori: 'yonetim' },
  { id: 'c2', isim: 'Mesut Akatay', rol: 'Proje Genel Koordinatörü', telefon: '0541 526 86 58', kategori: 'yonetim' },

  // BELGESEL
  { id: 'c3', isim: 'Özlem Dursun', rol: 'Belgesel Ekibi', telefon: '0505 231 69 90', kategori: 'belgesel' },
  { id: 'c4', isim: 'Hamiyet Atabay', rol: 'Belgesel Ekibi', telefon: '0533 926 39 54', kategori: 'belgesel' },

  // ÖĞRENCİ KOORDİNATÖRLER
  { id: 'c5', isim: 'Ece Özsoy', rol: 'Genel Koordinasyon Asistanı', telefon: '0541 810 10 09', kategori: 'ogrenci' },
  { id: 'c6', isim: 'Zeliha Nazlı Kızılbuğa', rol: 'Genel Koordinasyon Asistanı', telefon: '0501 346 06 46', kategori: 'ogrenci' },
  { id: 'c7', isim: 'Derin Ata', rol: 'Genel Koordinasyon Asistanı', telefon: '0552 154 35 40', kategori: 'ogrenci' },

  // RÖPORTAJ KİŞİLERİ
  { id: 'c8', isim: 'Hasan Taşçı', rol: 'Emekli Astsubay / Halk Edebiyatı Derlemecisi', telefon: '0532 741 47 15', kategori: 'roportaj' },
  { id: 'c9', isim: 'Yaşariye Akkaya', rol: 'Nefsi-Göl Kadın Kooperatifi Başkanı', telefon: '0542 831 57 53', kategori: 'roportaj' },
  { id: 'c10', isim: 'Ali Öztürk', rol: 'Anatolian Harps', telefon: '0554 983 88 09', kategori: 'roportaj' },
  { id: 'c11', isim: 'Bedriye Berber Enginoğlu', rol: 'Kurşunlu Köyü Girişimcisi', telefon: '0544 683 36 50', kategori: 'roportaj' },

  // RESMİ MAKAMLAR (santral — siz doldurmadan boş kalacak)
  { id: 'c12', isim: 'Gölpazarı Kaymakamlığı', rol: 'Sn. Feyza Nur Kılıç — Makam', telefon: '0228 411 30 05', kategori: 'resmi' },
  { id: 'c13', isim: 'Pazaryeri Kaymakamlığı', rol: 'Sn. Muhammet Mustafa Kara — Makam', telefon: 'Resmi Santral', kategori: 'resmi' },
  { id: 'c14', isim: 'Gölpazarı Belediye Bşk.', rol: 'Sn. Hayri Suer — Özel Kalem', telefon: 'Resmi Santral', kategori: 'resmi' },
  { id: 'c15', isim: 'Pazaryeri Belediye Bşk.', rol: 'Sn. Zekiye Tekin — Özel Kalem', telefon: 'Resmi Santral', kategori: 'resmi' },
  { id: 'c16', isim: 'Gölpazarı İlçe MEM', rol: 'Sn. Turgut Akagündüz', telefon: '0228 411 30 38', kategori: 'resmi' },
  { id: 'c17', isim: 'Pazaryeri İlçe MEM', rol: 'Sn. Mahmut Ekinci', telefon: '0228 381 20 24', kategori: 'resmi' },
];

// Otomatik silme tarihi — proje bitiminin ertesi günü
export const REHBER_SON_TARIH = new Date('2026-05-19T00:00:00+03:00');

export const kategoriBaslik: Record<Contact['kategori'], string> = {
  yonetim: 'Yönetim & Koordinasyon',
  belgesel: 'Belgesel & Prodüksiyon',
  ogrenci: 'Öğrenci Koordinatörler',
  roportaj: 'Saha & Röportaj Kişileri',
  resmi: 'Resmi Makamlar',
};
