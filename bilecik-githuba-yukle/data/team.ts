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
export const studentGroups: TeamGroup[] = [
  {
    id: 'kamera',
    baslik: 'Kamera & Yönetmenlik',
    alt: 'Belgesel kamera / yönetmenlik / muhabirlik',
    uyeler: [
      { id: 's1', isim: 'Ayşe Ece', rol: 'Kamera / Yönetmen', ekip: 'B', notlar: 'Pazaryeri ekibi' },
      { id: 's2', isim: 'Demir Esen', rol: 'Kamera / Yönetmen', ekip: 'B', notlar: 'Pazaryeri ekibi' },
      { id: 's3', isim: 'Kaan Sarıay', rol: 'Kamera', ekip: 'A', notlar: 'Gölpazarı ekibi' },
      { id: 's4', isim: 'Ahmet Salim Günay', rol: 'Kamera', ekip: 'A', notlar: 'Gölpazarı ekibi' },
      { id: 's5', isim: 'Ömer Tuna Sezer', rol: 'Sunum / Muhabir', ekip: 'ortak' },
      { id: 's6', isim: 'Onur Eymen', rol: 'Prodüksiyon', ekip: 'A' },
      { id: 's7', isim: 'Öykü Dinçer', rol: 'Prodüksiyon', ekip: 'A' },
    ],
    checklist: [
      { id: 'sk1', text: 'Tüm bataryaları şarj et ve yedek SD kartları formatla' },
      { id: 'sk2', text: 'Drone uçuş planını ve iniş-kalkış noktalarını işaretle' },
      { id: 'sk3', text: 'Her röportaj öncesi 30 saniyelik “oda sesi” kaydı al' },
      { id: 'sk4', text: 'Her röportaj başında: kişi adı, görev, mekân yüksek sesle söylenecek' },
      { id: 'sk5', text: 'Her sorudan sonra 2-3 saniye sus, montaj için temiz nefes bırak' },
      { id: 'sk6', text: 'Drone izinleri (Gölpazarı + Pazaryeri Kaymakamlık teyitli) yanında' },
      { id: 'sk7', text: 'B-roll listesi: çömlek çarkı, fırın, çay bahçesi, kanyon, hamur, ekmek' },
    ],
  },
  {
    id: 'gastronomi',
    baslik: 'Gastronomi & Yemek Atölyesi',
    alt: 'Yaşariye Akkaya kooperatifi sahnesi + Anadolu Sofrası kitabına içerik',
    uyeler: [
      { id: 'g1', isim: 'Duru Deniz', rol: 'Gastronomi sahası' },
      { id: 'g2', isim: 'İlayda Şenyuva', rol: 'Gastronomi sahası' },
      { id: 'g3', isim: 'Defne Bellek', rol: 'Gastronomi sahası' },
      { id: 'g4', isim: 'Ali Kaan Yıldırım', rol: 'Gastronomi sahası' },
      { id: 'g5', isim: 'Ecrin', rol: 'Gastronomi sahası', notlar: 'Soyadı: ekleme bekliyor' },
    ],
    checklist: [
      { id: 'gc1', text: 'Yaşariye Hanım kooperatifinde mutfak ekipmanlarını hazırla' },
      { id: 'gc2', text: 'Isırgan otlu tarhana yapım aşamalarını kare kare fotoğrafla' },
      { id: 'gc3', text: 'Anadolu Sofrası tarif kartı şablonunu sahaya götür' },
      { id: 'gc4', text: 'Hamur yoğurma — slow-motion sahnesi için kameraya işaret ver' },
      { id: 'gc5', text: 'Ekmeğin fırından çıkış anını yakala (ses + görüntü senkron)' },
      { id: 'gc6', text: 'Yaşariye Hanım’ın “bunu tanısınlar” dediği 3 lezzeti not et' },
    ],
  },
  {
    id: 'koordinasyon',
    baslik: 'Genel Koordinasyon Asistanları',
    alt: 'Saha gününde plan takibi, zaman, lojistik',
    uyeler: [
      { id: 'k1', isim: 'Derin Ata', rol: 'Koordinasyon asistanı' },
      { id: 'k2', isim: 'Ece Özsoy', rol: 'Koordinasyon asistanı' },
      { id: 'k3', isim: 'Zeliha Nazlı Kızılbuğa', rol: 'Koordinasyon asistanı' },
    ],
    checklist: [
      { id: 'kc1', text: 'Günlük zaman çizelgesini her ekibe dijital olarak gönder' },
      { id: 'kc2', text: 'Röportaj bitince “tamamlandı” işareti at (canlı durum)' },
      { id: 'kc3', text: 'Öğle ve akşam yemeği yer/saat teyitlerini al' },
      { id: 'kc4', text: 'A ve B ekipleri arasında saatlik durum bilgisi paylaş' },
      { id: 'kc5', text: 'Beklenmedik aksilikler için yedek plan notunu yanında bulundur' },
    ],
  },
  {
    id: 'muzik',
    baslik: 'Müzik & Ses',
    alt: 'Saha sesleri + “Zamanın Seranadı” kurgusunda canlı icra',
    uyeler: [
      { id: 'm1', isim: 'Buket Atalay', rol: 'Vokal — Çoban Çeşmesi & gün batımı icra' },
      { id: 'm2', isim: 'Deniz Maya İpekçioğlu', rol: 'Piyano — gün batımı icra' },
      { id: 'm3', isim: 'Taha Taylan Torun', rol: 'Gitar — gün batımı icra' },
    ],
    checklist: [
      { id: 'mc1', text: 'Kınık çömlek çarkı sesini ambiyans olarak kaydet' },
      { id: 'mc2', text: 'Yaşariye kooperatifindeki fırın çıtırtısı ve hamur sesleri' },
      { id: 'mc3', text: 'Çoban Çeşmesi — şafak vakti seranat metni ezberli' },
      { id: 'mc4', text: 'Geleneksel kıyafetler hazır (Buket + Maya, gündoğumu)' },
      { id: 'mc5', text: 'Modern kıyafetler hazır (üçü, gün batımı)' },
      { id: 'mc6', text: 'Piyanonun sahaya taşınması için belediye ile koordinasyon' },
      { id: 'mc7', text: 'Rüzgar korumalı (deadcat) mikrofon — gün batımı sahnesi' },
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
