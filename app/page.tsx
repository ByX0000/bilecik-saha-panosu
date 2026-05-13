'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Compass,
  Sparkles,
  Sun,
  Sunrise,
  MapPin,
  Landmark,
  Mountain,
  Hammer,
} from 'lucide-react';
import { PageHeader, SectionTitle, Eyebrow } from '@/components/PageHeader';
import { Card, Pill, Divider } from '@/components/UI';
import { interviews } from '@/data/interviews';
import { altinBaglantilar, cobanCesmesi } from '@/data/kurgu';
import { program17Mayis, program18Mayis } from '@/data/program';

export default function Pano() {
  const golpazariCount = interviews.filter((i) => i.bolge === 'golpazari').length;
  const pazaryeriCount = interviews.filter((i) => i.bolge === 'pazaryeri').length;

  return (
    <div className="space-y-12 md:space-y-20">
      {/* HERO */}
      <section className="relative">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-8">
            <Eyebrow>17–18 Mayıs 2026 · Bilecik</Eyebrow>
            <h1 className="mt-4 font-display text-[44px] leading-[1.02] tracking-tight text-ink-700 md:text-[88px]">
              Köklerden
              <br />
              <span className="italic text-cesme-500">Geleceğe.</span>
            </h1>
            <p className="mt-6 max-w-xl font-body text-[16px] leading-relaxed text-ink-500 md:text-[18px]">
              Gölpazarı ve Pazaryeri’nde iki gün, dokuz röportaj, üç bölümden oluşan
              bir belgesel. Bir yanı çeşme başına, bir yanı gün batımına yaslanan
              bir saha çalışması.
            </p>

            {/* Çoban Çeşmesi mısrası */}
            <motion.figure
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-10 max-w-xl border-l-2 border-cesme-300 pl-5"
            >
              <blockquote className="font-display italic text-ink-600">
                <span className="block text-[18px] leading-[1.5] md:text-[22px]">
                  {cobanCesmesi.ilkMisra}
                </span>
                <span className="block text-[18px] leading-[1.5] md:text-[22px]">
                  {cobanCesmesi.ikinciMisra}
                </span>
              </blockquote>
              <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-400">
                — {cobanCesmesi.sair}, “{cobanCesmesi.baslik}”
              </figcaption>
            </motion.figure>
          </div>

          {/* Sağ kart — gündoğumu / gün batımı */}
          <div className="md:col-span-4">
            <div className="sticky top-24 space-y-3">
              <Card className="bg-gradient-to-br from-ink-700 to-ink-800 text-cream border-ink-600">
                <div className="flex items-start justify-between">
                  <Sunrise size={20} className="text-sun-200" />
                  <Pill variant="ink">Prolog</Pill>
                </div>
                <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-cream/70">
                  18 Mayıs · Şafak
                </div>
                <div className="mt-2 font-display text-[20px] leading-tight">
                  Köklerin Sada-sı
                </div>
                <p className="mt-2 text-[12px] leading-relaxed text-cream/70">
                  Çeşme başında, geleneksel kıyafetler, Çoban Çeşmesi seranadı.
                </p>
              </Card>

              <Card className="bg-gradient-to-br from-sun-300 to-sun-500 text-cream border-sun-500/40">
                <div className="flex items-start justify-between">
                  <Sun size={20} className="text-cream" />
                  <Pill variant="sun">Epilog</Pill>
                </div>
                <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-cream/85">
                  17 Mayıs · Gün batımı
                </div>
                <div className="mt-2 font-display text-[20px] leading-tight">
                  Geleceğin Tınısı
                </div>
                <p className="mt-2 text-[12px] leading-relaxed text-cream/85">
                  Tepede modern icra: piyano, vokal, gitar.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SAYAÇ ŞERİDİ */}
      <section className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-500/15 bg-ink-500/15 md:grid-cols-4">
        {[
          { k: 'Röportaj', v: '9' },
          { k: 'Gölpazarı', v: String(golpazariCount) },
          { k: 'Pazaryeri', v: String(pazaryeriCount) },
          { k: 'Bölüm', v: 'III' },
        ].map((s) => (
          <div key={s.k} className="bg-cream/70 px-6 py-7">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
              {s.k}
            </div>
            <div className="mt-1 font-display text-[44px] font-semibold leading-none text-ink-700 tabular-nums">
              {s.v}
            </div>
          </div>
        ))}
      </section>

      {/* BİLECİK TANITIM */}
      <section>
        <div className="mb-6 flex items-baseline justify-between">
          <SectionTitle>Bilecik · Köklerin İli</SectionTitle>
          <Eyebrow>Saha Notu</Eyebrow>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="font-body text-[15px] leading-relaxed text-ink-500 md:text-[17px]">
              Bilecik, Marmara'nın iç kapısında; Söğüt'te bir devletin doğduğu,
              Şeyh Edebali'nin sözünün hâlâ duyulduğu, mermer ve seramik
              ocaklarının Anadolu'yu dünyaya bağladığı bir Osmanlı toprağıdır.
              17–18 Mayıs saha çalışmasının iki adresi — Gölpazarı ile
              Pazaryeri — bu coğrafyanın iki farklı yüzünü temsil eder:
              kooperatifin sofrası ve çömleğin çarkı.
            </p>
            <p className="mt-4 font-body text-[14px] leading-relaxed text-ink-400 md:text-[15px]">
              Sakarya nehri ilin ortasından geçer; Yenipazar kanyonları ile
              Meryem Dağı eteklerinde tarih ve doğa iç içedir. Osman Gazi'nin
              türbesi Söğüt'te; Bilecik bu yüzden sadece bir il değil, bir
              başlangıç noktasıdır.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="grid grid-cols-2 gap-3">
              <Card className="bg-cream/80">
                <Landmark size={16} className="text-ink-500" />
                <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-400">
                  Osmanlı'nın Beşiği
                </div>
                <div className="mt-1 font-display text-[18px] font-semibold leading-tight text-ink-700">
                  1299 · Söğüt
                </div>
                <p className="mt-1.5 text-[12px] leading-relaxed text-ink-500">
                  Devletin kurulduğu topraklar; Şeyh Edebali'nin nasihati.
                </p>
              </Card>
              <Card className="bg-cream/80">
                <MapPin size={16} className="text-ink-500" />
                <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-400">
                  8 İlçe · ~228K nüfus
                </div>
                <div className="mt-1 font-display text-[18px] font-semibold leading-tight text-ink-700">
                  4.307 km²
                </div>
                <p className="mt-1.5 text-[12px] leading-relaxed text-ink-500">
                  Söğüt · Osmaneli · Bozüyük · Gölpazarı · Pazaryeri · Yenipazar · İnhisar
                </p>
              </Card>
              <Card className="bg-cream/80">
                <Hammer size={16} className="text-ink-500" />
                <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-400">
                  Zanaat & Üretim
                </div>
                <div className="mt-1 font-display text-[18px] font-semibold leading-tight text-ink-700">
                  Mermer · Seramik
                </div>
                <p className="mt-1.5 text-[12px] leading-relaxed text-ink-500">
                  Türkiye mermerinin merkezlerinden; Bozüyük seramikte söz sahibi.
                </p>
              </Card>
              <Card className="bg-cream/80">
                <Mountain size={16} className="text-ink-500" />
                <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-400">
                  Coğrafya
                </div>
                <div className="mt-1 font-display text-[18px] font-semibold leading-tight text-ink-700">
                  Sakarya · Kanyon
                </div>
                <p className="mt-1.5 text-[12px] leading-relaxed text-ink-500">
                  Sakarya nehri, Yenipazar kanyonları, Meryem Dağı silüeti.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* İKİ BÖLGE */}
      <section>
        <div className="mb-6 flex items-baseline justify-between">
          <SectionTitle>İki Ekip · İki Bölge · Tek Hikâye</SectionTitle>
          <Eyebrow>Paralel Operasyon</Eyebrow>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Link href="/golpazari" className="group">
            <div className="relative overflow-hidden rounded-2xl border border-cesme-300/50 bg-gradient-to-br from-cesme-100 to-cesme-200/60 p-8 transition group-hover:shadow-2xl group-hover:shadow-cesme-500/15">
              <div className="absolute right-6 top-6 transition group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight size={22} className="text-cesme-500" />
              </div>
              <Eyebrow>Ekip A · Çeşme Suyu</Eyebrow>
              <div className="mt-4 font-display text-[40px] font-semibold leading-none tracking-tight text-cesme-600">
                Gölpazarı
              </div>
              <p className="mt-3 max-w-md text-[13px] leading-relaxed text-cesme-600/80">
                Anatolian Harps · Bedriye Hanım · Yaşariye Hanım · Kaymakam
                Sn. Kılıç · MEM Sn. Akagündüz · Belediye Bşk. Sn. Suer
              </p>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {interviews.filter((i) => i.bolge === 'golpazari').map((i) => (
                  <Pill key={i.slug} variant="cesme">
                    {i.number.toString().padStart(2, '0')}
                  </Pill>
                ))}
              </div>
            </div>
          </Link>
          <Link href="/pazaryeri" className="group">
            <div className="relative overflow-hidden rounded-2xl border border-clay-300/50 bg-gradient-to-br from-clay-100 to-clay-200/60 p-8 transition group-hover:shadow-2xl group-hover:shadow-clay-500/15">
              <div className="absolute right-6 top-6 transition group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight size={22} className="text-clay-500" />
              </div>
              <Eyebrow>Ekip B · Çömlek Toprağı</Eyebrow>
              <div className="mt-4 font-display text-[40px] font-semibold leading-none tracking-tight text-clay-600">
                Pazaryeri
              </div>
              <p className="mt-3 max-w-md text-[13px] leading-relaxed text-clay-600/80">
                Kaymakam Sn. Kara · MEM Sn. Ekinci · Belediye Bşk. Sn. Tekin
                · Kınık Köyü çömlek mirası
              </p>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {interviews.filter((i) => i.bolge === 'pazaryeri').map((i) => (
                  <Pill key={i.slug} variant="clay">
                    {i.number.toString().padStart(2, '0')}
                  </Pill>
                ))}
              </div>
            </div>
          </Link>
        </div>
      </section>

      <Divider />

      {/* ALTIN BAĞLANTILAR */}
      <section>
        <div className="mb-6 flex items-baseline justify-between">
          <SectionTitle>Altın Bağlantılar</SectionTitle>
          <Eyebrow>Kurgu Köprüleri</Eyebrow>
        </div>
        <p className="mb-8 max-w-2xl text-[14px] leading-relaxed text-ink-500">
          Belgeselin paralel montajında kullanılacak tematik köprüler. Her bir
          bağlantı, farklı röportajlardan gelen sesleri tek bir hikâyeye
          dokuyor.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {altinBaglantilar.map((b) => (
            <Card key={b.id} className="bg-cream/80">
              <div className="flex items-start gap-3">
                <Sparkles size={18} className="mt-0.5 shrink-0 text-sun-400" />
                <div>
                  <div className="font-display text-[18px] font-semibold text-ink-700">
                    {b.baslik}
                  </div>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-ink-500">
                    {b.aciklama}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* HIZLI KISAYOLLAR */}
      <section>
        <div className="mb-6">
          <SectionTitle>Hızlı Erişim</SectionTitle>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { href: '/program', t: 'Saha Programı', d: '17–18 Mayıs takvimi' },
            { href: '/gorevler', t: 'Görevler', d: 'Check-list ve ekipler' },
            { href: '/kurgu', t: 'Kurgu Masası', d: 'Zamanın Seranadı' },
            { href: '/rehber', t: 'Rehber', d: 'Numaralar — geçici' },
          ].map((c) => (
            <Link key={c.href} href={c.href}>
              <Card className="h-full bg-cream/60">
                <Compass size={16} className="text-ink-500" />
                <div className="mt-3 font-display text-[16px] font-semibold text-ink-700">
                  {c.t}
                </div>
                <div className="mt-1 text-[12px] text-ink-500">{c.d}</div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
