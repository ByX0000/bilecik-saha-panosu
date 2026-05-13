export type ChecklistItem = {
  id: string;
  text: string;
};

export type TeamMember = {
  id: string;
  isim: string;
  rol: string;
  ekip?: 'A' | 'B' | 'ortak';
  notlar?: string;
};

export type TeamGroup = {
  id: string;
  baslik: string;
  alt: string;
  uyeler: TeamMember[];
  checklist: ChecklistItem[];
};

// === ÖĞRETMEN GÖREVLERİ ===
export const teachers: TeamGroup = {
  id: 'ogretmen',
  baslik: 'Öğretmen Görevleri',
  alt: 'Stratejik seviye — koordinasyon, içerik, saha bağlantısı',
  uyeler: [
    { id: 't1', isim: 'Mesut Akatay', rol: 'Genel Koordinasyon' },
    { id: 't2', isim: 'Hülya Okan', rol: 'Saha bağlantı / röportaj iletişimi' },
    { id: 't3', isim: 'Hamiyet Atabay', rol: 'Belgesel içerik & metin' },
    { id: 't4', isim: 'Özlem Menekşe', rol: 'Belgesel içerik & metin' },
    { id: 't5', isim: 'Özlem Dursun', rol: 'Belgesel ekibi' },
  ],
  checklist: [
    { id: 'tc1', text: 'Tüm ekiplerin 17 Mayıs 05:00 çıkış saatine hazır olduğunu teyit et' },
    { id: 'tc2', text: 'Belediye ulaşım sorumlusuyla son senkronizasyonu sağla' },
    { id: 'tc3', text: 'Belgesel çekim izinlerinin ve protokol girişlerinin kontrolünü yap' },
    { id: 'tc4', text: '9 röportaj kişisine varış saatlerini hatırlat (Hülya Hoca)' },
    { id: 'tc5', text: 'Bedriye Hanım ve Yaşariye Hanım ile mekân hazırlığını teyit et (fırın/atölye)' },
    { id: 'tc6', text: 'Öğrenci muhabirlerin v5 soru setine tam hakimiyetini kontrol et' },
    { id: 'tc7', text: 'Röportaj sırasında sorulacak ekstra/takip sorular için yan notları hazırla' },
    { id: 'tc8', text: 'İki ekip için (A: Gölpazarı / B: Pazaryeri) günlük brifingi planla' },
    { id: 'tc9', text: 'Konaklama yerinde gece toplantısı için saat belirle' },
  ],
};

// === ÖĞRENCİ GÖREVLERİ ===
// Hülya Hoca'nın güncel listesi (v2): iki bölgeye göre dağılım
// GÖLPAZARI: 12 öğrenci (5 prodüksiyon/sunucu/yemek + 4 dahil + 3 türkü ekibi)
// PAZARYERİ: 6 öğrenci (prodüksiyon, sunucu, yemek)
export const studentGroups: TeamGroup[] = [
  {
    id: 'golpazari-ekibi',
    baslik: 'GÖLPAZARI Ekibi (Ekip A)',
    alt: 'Prodüksiyon · sunucu · yemek + dahil edilenler + türkü ekibi — toplam 12 öğrenci',
    uyeler: [
      // Prodüksiyon, sunucu, yemek
      { id: 'ga1', isim: 'Demir ESEN', rol: 'Prodüksiyon · sunucu · yemek', ekip: 'A' },
      { id: 'ga2', isim: 'Öykü DİNÇER', rol: 'Prodüksiyon · sunucu · yemek', ekip: 'A' },
      { id: 'ga3', isim: 'Irmak KİREMİTÇİ', rol: 'Prodüksiyon · sunucu · yemek', ekip: 'A' },
      { id: 'ga4', isim: 'Duru DENİZ', rol: 'Prodüksiyon · sunucu · yemek', ekip: 'A' },
      { id: 'ga5', isim: 'Ömer Tuna SEZER', rol: 'Sunum / muhabir', ekip: 'A' },
      // Gölpazarı'na dahil edilecekler
      { id: 'ga6', isim: 'Ali Kaan YILDIRIM', rol: 'Gölpazarı ekibine dahil', ekip: 'A' },
      { id: 'ga7', isim: 'Derin ATA', rol: 'Gölpazarı ekibine dahil', ekip: 'A' },
      { id: 'ga8', isim: 'Ece ÖZSOY', rol: 'Gölpazarı ekibine dahil', ekip: 'A' },
      { id: 'ga9', isim: 'Zeliha KIZILBUĞA', rol: 'Gölpazarı ekibine dahil', ekip: 'A' },
      // Türkü ekibi
      { id: 'ga10', isim: 'Buket ATALAY', rol: 'Türkü ekibi — vokal (Çoban Çeşmesi & gün batımı icra)', ekip: 'A' },
      { id: 'ga11', isim: 'Maya İPEKÇİOĞLU', rol: 'Türkü ekibi — piyano (gün batımı icra)', ekip: 'A' },
      { id: 'ga12', isim: 'Taha Taylan TOSUN', rol: 'Türkü ekibi — gitar (gün batımı icra)', ekip: 'A' },
    ],
    checklist: [
      { id: 'ga-c1', text: 'Tüm bataryaları şarj et ve yedek SD kartları formatla (prodüksiyon)' },
      { id: 'ga-c2', text: 'Her röportaj öncesi 30 saniyelik "oda sesi" kaydı al' },
      { id: 'ga-c3', text: 'Her röportaj başında: kişi adı, görev, mekân yüksek sesle söylenecek' },
      { id: 'ga-c4', text: 'Ömer Tuna v5 soru setine tam hâkim — sunum provası yap' },
      { id: 'ga-c5', text: 'Anatolian Harps, Kurşunlu, Nefsi-Göl Kooperatifi — saat ve mekân teyidi' },
      { id: 'ga-c6', text: 'Yaşariye Hanım kooperatifinde mutfak ekipmanları hazır (yemek ekibi)' },
      { id: 'ga-c7', text: 'Isırgan otlu tarhana yapım aşamalarını kare kare fotoğrafla' },
      { id: 'ga-c8', text: 'Hamur yoğurma — slow-motion sahnesi için kameraya işaret ver' },
      { id: 'ga-c9', text: 'Türkü ekibi: Çoban Çeşmesi şafak seranadı metni ezberli (Buket + Maya)' },
      { id: 'ga-c10', text: 'Türkü ekibi: geleneksel kıyafetler hazır (gündoğumu) + modern kıyafetler (gün batımı)' },
      { id: 'ga-c11', text: 'Piyanonun gün batımı tepesine taşınması için belediye ile koordinasyon (Maya)' },
      { id: 'ga-c12', text: 'Rüzgar korumalı (deadcat) mikrofon — gün batımı icra sahnesi' },
      { id: 'ga-c13', text: 'B-roll listesi: çay bahçesi, atölye, fırın, hamur, ekmek, çeşme' },
    ],
  },
  {
    id: 'pazaryeri-ekibi',
    baslik: 'PAZARYERİ Ekibi (Ekip B)',
    alt: 'Prodüksiyon · sunucu · yemek — 6 öğrenci',
    uyeler: [
      { id: 'pb1', isim: 'Ece ERTAŞ', rol: 'Prodüksiyon · sunucu · yemek', ekip: 'B' },
      { id: 'pb2', isim: 'Onur Eymen DENİZ', rol: 'Prodüksiyon · sunucu · yemek', ekip: 'B' },
      { id: 'pb3', isim: 'Zeynep ÖZAVCI', rol: 'Prodüksiyon · sunucu · yemek', ekip: 'B' },
      { id: 'pb4', isim: 'Doruk ÜNSAL', rol: 'Prodüksiyon · sunucu · yemek', ekip: 'B' },
      { id: 'pb5', isim: 'Defne BELLEK', rol: 'Prodüksiyon · sunucu · yemek', ekip: 'B' },
      { id: 'pb6', isim: 'İlayda ŞENYUVA', rol: 'Prodüksiyon · sunucu · yemek', ekip: 'B' },
    ],
    checklist: [
      { id: 'pb-c1', text: 'Tüm bataryaları şarj et ve yedek SD kartları formatla (prodüksiyon)' },
      { id: 'pb-c2', text: 'Drone uçuş planı + iniş-kalkış noktaları işaretli (Kınık, Yenipazar Kanyon)' },
      { id: 'pb-c3', text: 'Her röportaj öncesi 30 saniyelik "oda sesi" kaydı al' },
      { id: 'pb-c4', text: 'Sunum/muhabir hattı: Pazaryeri Kaymakam + Belediye Bşk + İlçe MEM provası' },
      { id: 'pb-c5', text: 'Kınık çömlek atölyesi: çark sesi ambiyans kaydı + drone b-roll' },
      { id: 'pb-c6', text: 'Yemek ekibi: Pazaryeri öğle yemeği + kapanış yemeği koordinasyonu' },
      { id: 'pb-c7', text: 'Yenipazar Kanyon & Meryem Dağı — panoramik b-roll listesi hazır' },
      { id: 'pb-c8', text: 'B-roll: çömlek çarkı, kanyon, Bulgar/Yunan göçmen alanı, Yeni Hükümet Konağı' },
      { id: 'pb-c9', text: 'Her sorudan sonra 2-3 saniye sus, montaj için temiz nefes bırak' },
    ],
  },
];

// === BELEDİYE GÖREVLERİ ===
export const municipality: TeamGroup[] = [
  {
    id: 'ulasim',
    baslik: 'Ulaşım Birimi',
    alt: 'İki gün boyunca araç koordinasyonu',
    uyeler: [],
    checklist: [
      { id: 'u1', text: '17 Mayıs 10:00 — Gölpazarı varış karşılama aracı hazır' },
      { id: 'u2', text: 'Gün içi transferler için sürücü atanmış (Kınık Köyü, Kurşunlu, kooperatif)' },
      { id: 'u3', text: '18 Mayıs Pazaryeri/Kınık geçişi için lojistik plan' },
      { id: 'u4', text: 'Drone operatörlerinin yüksek tepelere ulaşımı için 4x4 destek' },
      { id: 'u5', text: 'Dönüş yolculuğu — 18 Mayıs akşam İstanbul güzergâhı' },
    ],
  },
  {
    id: 'yemek',
    baslik: 'Halkla İlişkiler — Yemek & Organizasyon',
    alt: 'Öğretmen ve öğrenci yemek koordinasyonu',
    uyeler: [],
    checklist: [
      { id: 'y1', text: '17 Mayıs 10:00 varış kahvaltısı — Belediye Çay Bahçesi' },
      { id: 'y2', text: '17 Mayıs öğle yemeği — Ala Et Lokantası (ısırgan otlu tarhana tadımı dahil)' },
      { id: 'y3', text: '17 Mayıs akşam yemeği ve konaklama servisi' },
      { id: 'y4', text: '18 Mayıs Kınık saha atıştırmalığı (su, çay, yerel fırın ekmeği)' },
      { id: 'y5', text: '18 Mayıs Pazaryeri kapanış yemeği — Sn. Zekiye Tekin katılımıyla' },
    ],
  },
  {
    id: 'drone-saha',
    baslik: 'Drone & Saha Güvenliği',
    alt: 'Hava çekimi izinleri ve teknik koordinasyon',
    uyeler: [],
    checklist: [
      { id: 'd1', text: 'Gölpazarı semaları için drone uçuş izni (Kaymakamlık teyitli)' },
      { id: 'd2', text: 'Pazaryeri semaları için drone uçuş izni (Kaymakamlık teyitli)' },
      { id: 'd3', text: 'Belediye Çay Bahçesi (kiraz figürü) — drone iniş güvenliği, sivil trafik durdur' },
      { id: 'd4', text: 'Yenipazar Kanyon & Meryem Dağı — teknik ekibe rehber personel' },
      { id: 'd5', text: 'Kınık Köyü meydanı — drone çekimi için alan temizliği' },
      { id: 'd6', text: 'Gün batımı tepesi — piyano taşıma + ses sistemi koordinasyonu' },
    ],
  },
];
