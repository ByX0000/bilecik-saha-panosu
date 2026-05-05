'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, Mic, Quote } from 'lucide-react';
import { Card, Pill, Checkbox, Divider } from '@/components/UI';
import { Eyebrow } from '@/components/PageHeader';
import { ProgressBar } from '@/components/Progress';
import { interviewBySlug } from '@/data/interviews';
import { useLocalSet } from '@/lib/storage';
import clsx from 'clsx';

export default function RoportajPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const iv = interviewBySlug(slug);
  if (!iv) notFound();

  const [askedQuestions, toggleAsked] = useLocalSet(`roportaj:${slug}:sorulan`);

  const askedCount = iv.sorular.filter((s) => askedQuestions.has(s.id)).length;
  const tone = iv.renk;

  return (
    <article className="space-y-10">
      {/* Geri */}
      <Link
        href={`/${iv.bolge}`}
        className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-400 transition hover:text-ink-700"
      >
        <ArrowLeft size={12} />
        {iv.bolge === 'golpazari' ? 'Gölpazarı' : 'Pazaryeri'} — Tüm röportajlar
      </Link>

      {/* Başlık bloğu */}
      <header className="border-b border-ink-500/15 pb-10">
        <div className="flex flex-wrap items-center gap-2">
          <Pill variant={tone}>
            Röportaj {iv.number.toString().padStart(2, '0')}
          </Pill>
          <Pill variant={iv.ekip === 'A' ? 'cesme' : 'clay'}>
            Ekip {iv.ekip === 'A' || iv.ekip === 'B' ? iv.ekip : 'Ortak'}
          </Pill>
        </div>
        <h1 className="mt-5 font-display text-[40px] font-semibold leading-[1.05] tracking-tight text-ink-700 md:text-[56px]">
          {iv.isim}
        </h1>
        <p className="mt-3 text-[16px] leading-relaxed text-ink-500 md:text-[18px]">
          {iv.rol}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-ink-400">
          <span>📍 {iv.mekan}</span>
          <span>·</span>
          <span>{iv.sorular.length} soru</span>
        </div>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {iv.temalar.map((t) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>
      </header>

      {/* PROFİL NOTU */}
      <section>
        <Eyebrow>Muhabire — Profil Notu</Eyebrow>
        <Card
          tezhip
          className={clsx(
            'mt-3',
            tone === 'cesme'
              ? 'border-l-4 border-l-cesme-400 text-cesme-600'
              : 'border-l-4 border-l-clay-400 text-clay-600'
          )}
        >
          <ul className="space-y-2 text-ink-600">
            {iv.profil.map((p, i) => (
              <li key={i} className="flex items-start gap-3 text-[14px] leading-relaxed">
                <span className="dot-mark" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      {/* ALTIN BAĞLANTI */}
      {iv.altinBaglanti && iv.altinBaglanti.length > 0 && (
        <section>
          <Eyebrow>Belgesel için altın bağlantı</Eyebrow>
          <div className="mt-3 rounded-xl border border-sun-300/50 bg-sun-200/25 p-5">
            <div className="flex items-center gap-2 text-sun-500">
              <Sparkles size={16} />
              <span className="font-display text-[15px] font-semibold">
                Kurguda paralel montajda kullanılacak
              </span>
            </div>
            <ul className="mt-3 space-y-2.5">
              {iv.altinBaglanti.map((b, i) => (
                <li
                  key={i}
                  className="text-[13px] leading-relaxed text-ink-600"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* AÇILIŞ */}
      <section>
        <Eyebrow>Açılış · Tanışma</Eyebrow>
        <div className="mt-3 rounded-xl border border-ink-500/12 bg-cream/60 p-6">
          <Quote size={18} className="text-ink-300" />
          <p className="mt-3 font-display text-[17px] leading-relaxed text-ink-700 md:text-[19px]">
            {iv.acilis}
          </p>
        </div>
      </section>

      <Divider />

      {/* ANA SORULAR + ilerleme */}
      <section>
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <Eyebrow>Ana Sorular</Eyebrow>
            <h2 className="mt-1 font-display text-[26px] font-semibold tracking-tight text-ink-700 md:text-[32px]">
              Soru Seti
            </h2>
          </div>
          <div className="min-w-[200px] flex-1 max-w-[280px]">
            <ProgressBar
              done={askedCount}
              total={iv.sorular.length}
              label="Soruldu"
            />
          </div>
        </div>

        <div className="space-y-3">
          {iv.sorular.map((s, idx) => {
            const sorulduMu = askedQuestions.has(s.id);
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.04 }}
              >
                <button
                  onClick={() => toggleAsked(s.id)}
                  className={clsx(
                    'flex w-full items-start gap-4 rounded-xl border p-5 text-left transition lift',
                    sorulduMu
                      ? 'border-ink-500/15 bg-ink-50/40 opacity-60'
                      : 'border-ink-500/15 bg-cream/70 hover:border-ink-500/30'
                  )}
                >
                  <div
                    className={clsx(
                      'flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 font-display text-[15px] font-bold',
                      sorulduMu
                        ? tone === 'cesme'
                          ? 'border-cesme-400 bg-cesme-200 text-cesme-600'
                          : 'border-clay-400 bg-clay-200 text-clay-600'
                        : tone === 'cesme'
                        ? 'border-cesme-300/60 text-cesme-500'
                        : 'border-clay-300/60 text-clay-500'
                    )}
                  >
                    {idx + 1}
                  </div>
                  <p
                    className={clsx(
                      'flex-1 text-[15px] leading-[1.65] transition md:text-[16px]',
                      sorulduMu
                        ? 'text-ink-400 line-through decoration-ink-300/50'
                        : 'text-ink-600'
                    )}
                  >
                    {s.text}
                  </p>
                </button>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* KAPANIŞ */}
      <section>
        <Eyebrow>Kapanış</Eyebrow>
        <div
          className={clsx(
            'mt-3 rounded-xl border p-6',
            tone === 'cesme'
              ? 'border-cesme-300/50 bg-cesme-100/30'
              : 'border-clay-300/50 bg-clay-100/30'
          )}
        >
          <Mic
            size={18}
            className={clsx(
              tone === 'cesme' ? 'text-cesme-500' : 'text-clay-500'
            )}
          />
          <p className="mt-3 font-display text-[17px] italic leading-relaxed text-ink-700 md:text-[19px]">
            {iv.kapanis}
          </p>
        </div>
      </section>

      {/* MUHABİR HATIRLATMA */}
      <Card className="bg-ink-700 text-cream border-ink-700">
        <Eyebrow>
          <span className="text-cream/65">Saha Hatırlatması</span>
        </Eyebrow>
        <ul className="mt-3 space-y-1.5 text-[13px] leading-relaxed text-cream/85">
          <li>· Soruyu okuma — konuş.</li>
          <li>· Cevap kısa kalırsa nazikçe takip et: “Bir örnekle anlatabilir misiniz?”</li>
          <li>· Her sorudan sonra 2–3 saniye sus (montaj için temiz nefes).</li>
          <li>· Röportaj başında 30 sn “oda sesi” kaydı al.</li>
          <li>· Kayıt başında kişinin adı, görevi ve mekânı yüksek sesle söyle.</li>
        </ul>
      </Card>
    </article>
  );
}
