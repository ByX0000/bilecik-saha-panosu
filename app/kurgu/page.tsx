'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sunrise, Sun, Film, Sparkles, Camera, Volume2, ScrollText } from 'lucide-react';
import { PageHeader, Eyebrow, SectionTitle } from '@/components/PageHeader';
import { Card, Pill, Divider } from '@/components/UI';
import { kurguBolumleri, altinBaglantilar, cobanCesmesi } from '@/data/kurgu';
import { interviewBySlug } from '@/data/interviews';
import clsx from 'clsx';

const bolumIcons = {
  prolog: Sunrise,
  govde: Film,
  epilog: Sun,
};

const bolumTones = {
  prolog: { bg: 'from-ink-700 to-ink-800', accent: 'text-sun-200', border: 'border-ink-600', text: 'text-cream' },
  govde:  { bg: 'from-cream to-ink-50', accent: 'text-ink-500', border: 'border-ink-500/15', text: 'text-ink-700' },
  epilog: { bg: 'from-sun-300 to-sun-500', accent: 'text-cream', border: 'border-sun-500/40', text: 'text-cream' },
} as const;

export default function KurguMasasi() {
  return (
    <div className="space-y-14">
      <PageHeader
        marker="Sekme · Kurgu Masası"
        title={
          <>
            Zamanın <span className="italic text-sun-400">Seranadı</span>
          </>
        }
        subtitle="Üç bölümlü bir belgesel: Prolog'da çeşme başında bir şiir, Gövde'de dokuz ses, Epilog'da gün batımında modern bir icra. Bir yanı geleneğe, bir yanı evrensel sanata yaslanır."
      />

      {/* Çoban Çeşmesi vurgusu */}
      <section className="relative overflow-hidden rounded-2xl border border-ink-500/15 bg-gradient-to-br from-ink-700 via-ink-800 to-ink-900 p-8 md:p-12">
        <div className="absolute inset-0 bg-grain opacity-30" aria-hidden="true" />
        <div className="relative">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-cream/60">
            <ScrollText size={12} className="text-sun-200" />
            Açılış metni — Prolog'da seranat ritminde okunur
          </div>
          <blockquote className="mt-6 font-display italic text-cream md:max-w-3xl">
            <span className="block text-[26px] leading-[1.4] md:text-[40px]">
              {cobanCesmesi.ilkMisra}
            </span>
            <span className="block text-[26px] leading-[1.4] md:text-[40px]">
              {cobanCesmesi.ikinciMisra}
            </span>
          </blockquote>
          <figcaption className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-cream/55">
            — {cobanCesmesi.sair} · "{cobanCesmesi.baslik}"
          </figcaption>
        </div>
      </section>

      {/* ÜÇ BÖLÜM */}
      <section className="space-y-8">
        <div className="flex items-baseline justify-between">
          <SectionTitle>Üç Bölüm</SectionTitle>
          <Eyebrow>Director's Notes</Eyebrow>
        </div>

        {kurguBolumleri.map((b, idx) => {
          const Icon = bolumIcons[b.id as keyof typeof bolumIcons];
          const tone = bolumTones[b.id as keyof typeof bolumTones];
          return (
            <motion.article
              key={b.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={clsx(
                'relative overflow-hidden rounded-2xl border p-7 md:p-10',
                tone.border,
                'bg-gradient-to-br',
                tone.bg
              )}
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
                {/* Sol: numara ve ikon */}
                <div className="md:col-span-3">
                  <div className={clsx('flex items-center gap-3', tone.text)}>
                    <Icon size={20} className={tone.accent} />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-70">
                      Bölüm
                    </span>
                  </div>
                  <div
                    className={clsx(
                      'mt-2 font-display text-[88px] font-semibold leading-none tracking-tighter md:text-[120px]',
                      tone.text
                    )}
                  >
                    {b.numara}
                  </div>
                </div>

                {/* Sağ: içerik */}
                <div className="md:col-span-9">
                  <h3
                    className={clsx(
                      'font-display text-[28px] font-semibold leading-tight tracking-tight md:text-[40px]',
                      tone.text
                    )}
                  >
                    {b.baslik}
                  </h3>
                  <p
                    className={clsx(
                      'mt-2 font-display italic text-[15px] md:text-[17px]',
                      b.id === 'govde' ? 'text-ink-500' : 'text-cream/75'
                    )}
                  >
                    {b.altBaslik}
                  </p>

                  <div className={clsx('mt-6 grid grid-cols-1 gap-4 md:grid-cols-2', tone.text)}>
                    <Meta label="Mekân" value={b.mekan} dark={b.id !== 'govde'} />
                    <Meta label="Zaman" value={b.zaman} dark={b.id !== 'govde'} />
                    <Meta label="Karakterler" value={b.karakterler} dark={b.id !== 'govde'} />
                    <Meta label="Maarif Notu" value={b.maarifNotu} dark={b.id !== 'govde'} />
                  </div>

                  <div className="mt-8 space-y-4">
                    <Block
                      icon={Camera}
                      title="Görsel"
                      body={b.gorsel}
                      dark={b.id !== 'govde'}
                    />
                    <Block
                      icon={Volume2}
                      title="Ses"
                      body={b.ses}
                      dark={b.id !== 'govde'}
                    />
                    <Block
                      icon={Sparkles}
                      title="Teknik Not"
                      body={b.teknikNot}
                      dark={b.id !== 'govde'}
                    />
                  </div>

                  {b.yaraticiDokunus && b.yaraticiDokunus.length > 0 && (
                    <div
                      className={clsx(
                        'mt-8 rounded-xl border p-5',
                        b.id === 'govde'
                          ? 'border-ink-500/12 bg-cream/60'
                          : 'border-cream/15 bg-cream/8'
                      )}
                    >
                      <div
                        className={clsx(
                          'font-mono text-[10px] uppercase tracking-[0.18em]',
                          b.id === 'govde' ? 'text-ink-400' : 'text-cream/65'
                        )}
                      >
                        Yaratıcı Dokunuşlar
                      </div>
                      <ul className="mt-3 space-y-2">
                        {b.yaraticiDokunus.map((d, i) => (
                          <li
                            key={i}
                            className={clsx(
                              'flex items-start gap-3 text-[13px] leading-relaxed md:text-[14px]',
                              b.id === 'govde' ? 'text-ink-600' : 'text-cream/85'
                            )}
                          >
                            <span
                              className={clsx(
                                'mt-1.5 inline-block h-1 w-3 rounded-full',
                                b.id === 'govde' ? 'bg-ink-400' : 'bg-cream/50'
                              )}
                            />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </section>

      <Divider />

      {/* ALTIN BAĞLANTILAR */}
      <section>
        <div className="mb-2">
          <Eyebrow>Paralel Montaj</Eyebrow>
        </div>
        <SectionTitle>Altın Bağlantılar</SectionTitle>
        <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-ink-500 md:text-[15px]">
          Belgeselin gövdesinde paralel kesme yapılacak tematik köprüler. Her
          biri farklı röportajlardan gelen sesleri tek bir hikâyeye dokur.
        </p>

        <div className="mt-8 space-y-4">
          {altinBaglantilar.map((b, idx) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
            >
              <Card className="bg-cream/60">
                <div className="flex flex-wrap items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sun-200 text-sun-500">
                    <Sparkles size={16} />
                  </div>
                  <div className="flex-1 min-w-[200px]">
                    <h4 className="font-display text-[20px] font-semibold tracking-tight text-ink-700">
                      {b.baslik}
                    </h4>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-ink-500">
                      {b.aciklama}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {b.sahneler.map((slug) => {
                        const iv = interviewBySlug(slug);
                        if (!iv) return null;
                        return (
                          <Link key={slug} href={`/roportaj/${slug}`}>
                            <Pill variant={iv.bolge === 'golpazari' ? 'cesme' : 'clay'}>
                              {iv.number.toString().padStart(2, '0')} · {iv.isim.split(' ')[0]}
                            </Pill>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Meta({ label, value, dark }: { label: string; value: string; dark: boolean }) {
  return (
    <div>
      <div
        className={clsx(
          'font-mono text-[9px] uppercase tracking-[0.2em]',
          dark ? 'text-cream/55' : 'text-ink-400'
        )}
      >
        {label}
      </div>
      <div
        className={clsx(
          'mt-1 text-[13px] leading-snug',
          dark ? 'text-cream/90' : 'text-ink-600'
        )}
      >
        {value}
      </div>
    </div>
  );
}

function Block({
  icon: Icon,
  title,
  body,
  dark,
}: {
  icon: any;
  title: string;
  body: string;
  dark: boolean;
}) {
  return (
    <div>
      <div
        className={clsx(
          'flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em]',
          dark ? 'text-cream/65' : 'text-ink-400'
        )}
      >
        <Icon size={12} />
        {title}
      </div>
      <p
        className={clsx(
          'mt-1.5 text-[14px] leading-relaxed md:text-[15px]',
          dark ? 'text-cream/90' : 'text-ink-600'
        )}
      >
        {body}
      </p>
    </div>
  );
}
