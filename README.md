# 7 Bölge 7 Okul · Bilecik Saha Panosu

> Köklerden Geleceğe — 17–18 Mayıs 2026 Bilecik / Gölpazarı–Pazaryeri saha yönetim panosu.

GİKAL "7 Bölge 7 Okul" projesi kapsamında Bilecik saha çalışmasının sahada
kullanılacak dijital panosu. İki paralel ekibin (Gölpazarı / Pazaryeri),
dokuz röportajın, üç bölümlü "Zamanın Seranadı" belgesel kurgusunun ve
operasyonel görev listelerinin tek bir yerden takip edildiği Next.js
uygulaması.

## Özellikler

- **Anadolu Modern** tasarım dili — Fraunces serif + DM Sans + JetBrains Mono
- 7 sayfa: Pano, Görevler, Program, Gölpazarı, Pazaryeri, Kurgu Masası, Rehber
- 9 röportaj için ayrı detay sayfası (profil notu, açılış, sorular, kapanış, altın bağlantı)
- Üç sekmeli check-list (Öğretmen / Öğrenci / Belediye) — localStorage'a yazıyor
- 17–18 Mayıs dakikası dakikasına timeline
- Üç bölümlü kurgu masası: Prolog (Çoban Çeşmesi seranadı) + Gövde + Epilog
- Otomatik silinen telefon rehberi (19 Mayıs 2026 00:01'de gizlenir)
- Mobil tab bar ile telefon-öncelikli kullanım

## Teknoloji

Next.js 14 · React 18 · TypeScript · Tailwind CSS · Framer Motion · lucide-react

## Yerelde çalıştırma

```bash
npm install
npm run dev
```

Ardından `http://localhost:3000` adresini açın.

## Yapı

```
app/                  Next.js App Router sayfaları
  ├ page.tsx          Pano (anasayfa)
  ├ gorevler/         Check-list sayfası
  ├ program/          17-18 Mayıs takvimi
  ├ golpazari/        Ekip A — 6 röportaj
  ├ pazaryeri/        Ekip B — 3 röportaj
  ├ kurgu/            Zamanın Seranadı kurgu masası
  ├ rehber/           Telefon rehberi (auto-hide)
  └ roportaj/[slug]/  Her röportaj için detay
components/           Shell, UI, Progress, BolgePage
data/                 interviews, team, contacts, kurgu, program
lib/storage.ts        localStorage hook + time-gate
```

## Veri kaynağı

Tüm röportaj soruları, profil notları ve altın bağlantılar
[`Bilecik_Roportaj_Sorulari_v5.docx`](#) kitapçığından aktarılmıştır.
Belgesel kurgusu Mesut Akatay'ın yönlendirmesiyle iteratif olarak
geliştirilmiştir.

---

GİKAL · Mesut Akatay · 7 Bölge 7 Okul · Bilecik Saha Çalışması
