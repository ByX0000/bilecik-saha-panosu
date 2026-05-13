'use client';

import { motion } from 'framer-motion';
import { PageHeader, Eyebrow, SectionTitle } from '@/components/PageHeader';
import { Pill } from '@/components/UI';
import { program17Mayis, program18Mayis, type ProgramItem } from '@/data/program';
import clsx from 'clsx';

export default function ProgramSayfasi() {
  return (
    <div className="space-y-10">
      <PageHeader
        marker="Sekme · Program"
        title="Saha Takvimi"
        subtitle="İki gün, iki ekip, dakika dakika. 17 Mayıs gün batımında piyano; 18 Mayıs şafak vakti çeşme başında şiir."
      />

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10">
        <DayColumn
          gun="17 Mayıs Cumartesi"
          baslik="Gölpazarı Günü"
          alt="Ekip A · Çeşme suyu tonu"
          items={program17Mayis}
          tone="cesme"
        />
        <DayColumn
          gun="18 Mayıs Pazar"
          baslik="Pazaryeri & Kınık Günü"
          alt="Ekip B · Çömlek toprağı tonu"
          items={program18Mayis}
          tone="clay"
        />
      </div>
    </div>
  );
}

function DayColumn({
  gun,
  baslik,
  alt,
  items,
  tone,
}: {
  gun: string;
  baslik: string;
  alt: string;
  items: ProgramItem[];
  tone: 'cesme' | 'clay';
}) {
  return (
    <div>
      <div className="mb-6">
        <Eyebrow>{gun}</Eyebrow>
        <h2
          className={clsx(
            'mt-2 font-display text-[32px] font-semibold leading-tight tracking-tight md:text-[40px]',
            tone === 'cesme' ? 'text-cesme-600' : 'text-clay-600'
          )}
        >
          {baslik}
        </h2>
        <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-400">
          {alt}
        </div>
      </div>

      <ol className="relative space-y-1 border-l-2 border-dashed border-ink-500/15 pl-6">
        {items.map((item, idx) => (
          <motion.li
            key={`${item.saat}-${idx}`}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.04 }}
            className="relative pb-5"
          >
            {/* Timeline node */}
            <span
              className={clsx(
                'absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 bg-cream',
                tone === 'cesme' ? 'border-cesme-400' : 'border-clay-400'
              )}
            >
              <span
                className={clsx(
                  'h-1.5 w-1.5 rounded-full',
                  tone === 'cesme' ? 'bg-cesme-500' : 'bg-clay-500'
                )}
              />
            </span>

            <div className="rounded-lg border border-ink-500/10 bg-cream/40 p-4 transition hover:border-ink-500/20 hover:bg-cream/70">
              <div className="flex items-baseline justify-between gap-3">
                <div className="font-mono text-[13px] font-bold tabular-nums text-ink-700">
                  {item.saat}
                </div>
                {item.ekip && item.ekip !== 'ortak' && (
                  <Pill variant={item.ekip === 'A' ? 'cesme' : 'clay'}>
                    Ekip {item.ekip}
                  </Pill>
                )}
                {item.ekip === 'ortak' && <Pill>Ortak</Pill>}
              </div>
              <div className="mt-1 font-display text-[16px] font-semibold leading-snug text-ink-700">
                {item.baslik}
              </div>
              {item.detay && (
                <div className="mt-1 text-[12px] leading-relaxed text-ink-500">
                  {item.detay}
                </div>
              )}
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
