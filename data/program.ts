export type ProgramItem = {
  saat: string;
  baslik: string;
  detay?: string;
  ekip?: 'A' | 'B' | 'ortak';
  bolge?: 'golpazari' | 'pazaryeri' | 'yol';
};

// 17 Mayıs 2026 — CUMARTESİ (Gölpazarı Günü)
export const program17Mayis: ProgramItem[] = [
  { saat: '05:00', baslik: 'İstanbul’dan çıkış', detay: 'GİKAL’den hareket', ekip: 'ortak', bolge: 'yol' },
  { saat: '09:30', baslik: 'Gölpazarı varış', detay: 'Belediye Çay Bahçesi’nde kısa karşılama', ekip: 'ortak', bolge: 'golpazari' },
  { saat: '12:00', baslik: 'Sn. Hayri Suer — Belediye Başkanı röportajı', detay: 'Belediye Binası', ekip: 'A', bolge: 'golpazari' },
  { saat: '13:00', baslik: 'Öğle yemeği — Ala Et Lokantası', detay: 'Isırgan otlu tarhana tadımı', ekip: 'ortak', bolge: 'golpazari' },
  { saat: '14:00', baslik: 'Sn. Feyza Nur Kılıç — Kaymakam röportajı', detay: 'Kaymakamlık', ekip: 'A', bolge: 'golpazari' },
  { saat: '15:00', baslik: 'Sn. Turgut Akagündüz — İlçe MEM röportajı', detay: 'İlçe MEM', ekip: 'A', bolge: 'golpazari' },
  { saat: '16:00', baslik: 'Anatolian Harps atölyesi', detay: 'Zeynep Öykü & Ali Öztürk', ekip: 'A', bolge: 'golpazari' },
  { saat: '17:30', baslik: 'Bedriye Berber Engin — Kurşunlu Köyü', detay: 'Hayat hikâyesi sohbeti', ekip: 'A', bolge: 'golpazari' },
  { saat: '19:30', baslik: 'GÜN BATIMI — “Geleceğin Tınısı” çekimi', detay: 'Buket, Maya, Taha Taylan — modern icra', ekip: 'ortak', bolge: 'golpazari' },
  { saat: '21:00', baslik: 'Akşam yemeği & konaklama', detay: 'Ekip toplantısı', ekip: 'ortak', bolge: 'golpazari' },
];

// 18 Mayıs 2026 — PAZAR (Pazaryeri & Kınık Günü)
// Yaşariye Hanım ile röportaj ve ekmek yapma belgeseli Pazar 10:00'a alındı (A grubu, Gölpazarı).
export const program18Mayis: ProgramItem[] = [
  { saat: '05:00', baslik: 'GÜNDOĞUMU — “Köklerin Sada-sı” çekimi', detay: 'Çeşme başı, Çoban Çeşmesi seranadı (Buket, Maya)', ekip: 'ortak', bolge: 'pazaryeri' },
  { saat: '08:00', baslik: 'Kahvaltı', ekip: 'ortak', bolge: 'pazaryeri' },
  { saat: '09:30', baslik: 'Kınık Köyü çömlek atölyeleri', detay: 'Kadın çömlek kooperatifi, drone çekimi, b-roll', ekip: 'B', bolge: 'pazaryeri' },
  { saat: '10:00', baslik: 'EKMEK YAPMA BELGESELİ — Yaşariye Akkaya', detay: 'Nefsi-Göl Kadın Kooperatifi · röportaj + fırında ekmek, ısırgan otlu tarhana, ekip kahvaltısı', ekip: 'A', bolge: 'golpazari' },
  { saat: '12:00', baslik: 'Sn. Muhammet Mustafa Kara — Pazaryeri Kaymakamı', detay: 'Yeni Hükümet Konağı', ekip: 'B', bolge: 'pazaryeri' },
  { saat: '13:00', baslik: 'Sn. Mahmut Ekinci — İlçe MEM Müdürü', detay: 'İlçe MEM, edebiyat ve eğitim', ekip: 'B', bolge: 'pazaryeri' },
  { saat: '14:00', baslik: 'Öğle yemeği', ekip: 'ortak', bolge: 'pazaryeri' },
  { saat: '15:00', baslik: 'Sn. Zekiye Tekin — Pazaryeri Belediye Başkanı', detay: '“Köklerden Geleceğe” röportajı', ekip: 'B', bolge: 'pazaryeri' },
  { saat: '16:30', baslik: 'Yenipazar — drone, kanyon, Bulgar/Yunan göçmen alanı', detay: 'B-roll çekimi, panoramik', ekip: 'B', bolge: 'pazaryeri' },
  { saat: '18:00', baslik: 'İstanbul’a dönüş', ekip: 'ortak', bolge: 'yol' },
];
