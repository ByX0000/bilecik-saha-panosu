'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { PageHeader, Eyebrow } from '@/components/PageHeader';
import { Card, Pill } from '@/components/UI';
import { interviews } from '@/data/interviews';
import clsx from 'clsx';

export function BolgePage({
  bolge,
  baslik,
  altBaslik,
  marker,
  tone,
}: {
  bolge: 'golpazari' | 'pazaryeri';
  baslik: string;
  altBaslik: string;
  marker: string;
  tone: 'cesme' | 'clay';
}) {
  const list = interviews.filter((i) => i.bolge === bolge);

  return (
    <div className="space-y-12">
      <PageHeader marker={marker} title={baslik} subtitle={altBaslik} />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {list.map((iv, idx) => (
          <motion.div
            key={iv.slug}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.5 }}
          >
            <Link href={`/roportaj/${iv.slug}`} className="group block">
              <Card
                className={clsx(
                  'h-full',
                  tone === 'cesme'
                    ? 'border-cesme-300/40 hover:border-cesme-400 bg-gradient-to-br from-cesme-100/30 to-transparent'
                    : 'border-clay-300/40 hover:border-clay-400 bg-gradient-to-br from-clay-100/40 to-transparent'
                )}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={clsx(
                      'font-mono text-[10px] font-bold uppercase tracking-[0.18em]',
                      tone === 'cesme' ? 'text-cesme-500' : 'text-clay-500'
                    )}
                  >
                    Röportaj
                    <span className="ml-2 tabular-nums">
                      {iv.number.toString().padStart(2, '0')}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className={clsx(
                      'transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5',
                      tone === 'cesme' ? 'text-cesme-500' : 'text-clay-500'
                    )}
                  />
                </div>

                <h3 className="mt-3 font-display text-[22px] font-semibold leading-tight tracking-tight text-ink-700">
                  {iv.isim}
                </h3>
                <p className="mt-1 text-[13px] leading-snug text-ink-500">
                  {iv.rol}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {iv.temalar.slice(0, 3).map((t) => (
                    <Pill key={t} variant={tone}>
                      {t}
                    </Pill>
                  ))}
                </div>

                {iv.altinBaglanti && iv.altinBaglanti.length > 0 && (
                  <div
                    className={clsx(
                      'mt-4 flex items-start gap-2 rounded-md border border-dashed p-2.5',
                      tone === 'cesme'
                        ? 'border-cesme-300/50 bg-cesme-100/40'
                        : 'border-sun-300/50 bg-sun-200/30'
                    )}
                  >
                    <Sparkles
                      size={13}
                      className={clsx(
                        'mt-0.5 shrink-0',
                        tone === 'cesme' ? 'text-cesme-500' : 'text-sun-500'
                      )}
                    />
                    <span className="text-[11px] leading-relaxed text-ink-500">
                      {iv.altinBaglanti[0]}
                    </span>
                  </div>
                )}

                <div className="mt-5 flex items-baseline justify-between border-t border-ink-500/10 pt-3 text-[11px]">
                  <span className="font-mono uppercase tracking-wider text-ink-400">
                    {iv.mekan}
                  </span>
                  <span className="font-mono tabular-nums text-ink-500">
                    {iv.sorular.length} soru
                  </span>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
