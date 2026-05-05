'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageHeader, Eyebrow } from '@/components/PageHeader';
import { Card, Checkbox, Pill, Divider } from '@/components/UI';
import { ProgressBar } from '@/components/Progress';
import { useLocalSet } from '@/lib/storage';
import { teachers, studentGroups, municipality, type TeamGroup } from '@/data/team';
import { Users, GraduationCap, Building2, RotateCcw } from 'lucide-react';

type Tab = 'ogretmen' | 'ogrenci' | 'belediye';

export default function GorevlerSayfasi() {
  const [tab, setTab] = useState<Tab>('ogretmen');
  const [done, toggle, reset] = useLocalSet('gorevler:check');

  const tabs: { key: Tab; label: string; icon: any; sayim: number }[] = [
    { key: 'ogretmen', label: 'Öğretmen', icon: GraduationCap, sayim: teachers.checklist.length },
    {
      key: 'ogrenci',
      label: 'Öğrenci',
      icon: Users,
      sayim: studentGroups.reduce((acc, g) => acc + g.checklist.length, 0),
    },
    {
      key: 'belediye',
      label: 'Belediye',
      icon: Building2,
      sayim: municipality.reduce((acc, g) => acc + g.checklist.length, 0),
    },
  ];

  const totalDone = done.size;
  const totalAll =
    teachers.checklist.length +
    studentGroups.reduce((acc, g) => acc + g.checklist.length, 0) +
    municipality.reduce((acc, g) => acc + g.checklist.length, 0);

  return (
    <div className="space-y-10">
      <PageHeader
        marker="Sekme · Görevler"
        title="Saha Hazırlığı"
        subtitle="Üç ekip — öğretmen, öğrenci, belediye. Her grubun kendi kontrol listesi. Her tik, sahaya bir adım daha yakın."
      />

      {/* Genel ilerleme */}
      <Card className="bg-gradient-to-br from-ink-700 to-ink-800 text-cream border-ink-600">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-cream/65">
              Genel İlerleme
            </div>
            <div className="mt-1 font-display text-[36px] font-semibold leading-none tabular-nums">
              {totalDone}
              <span className="text-cream/45"> / {totalAll}</span>
            </div>
          </div>
          <button
            onClick={() => {
              if (confirm('Tüm tikler sıfırlanacak. Emin misin?')) reset();
            }}
            className="flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-cream/85 transition hover:bg-cream/10"
          >
            <RotateCcw size={11} /> Sıfırla
          </button>
        </div>
        <div className="mt-5">
          <div className="progress-track" style={{ background: 'rgba(248, 242, 230, 0.18)' }}>
            <div
              className="progress-fill"
              style={{ width: `${totalAll === 0 ? 0 : Math.max((totalDone / totalAll) * 100, 4)}%` }}
            />
          </div>
        </div>
      </Card>

      {/* Tab seçici */}
      <div className="flex flex-wrap gap-2">
        {tabs.map((t) => {
          const active = tab === t.key;
          const Icon = t.icon;
          return (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-medium transition ${
                active
                  ? 'border-ink-700 bg-ink-700 text-cream'
                  : 'border-ink-500/20 bg-cream/40 text-ink-500 hover:border-ink-500/40'
              }`}
            >
              <Icon size={14} />
              {t.label}
              <Pill variant={active ? 'sun' : 'default'}>{t.sayim}</Pill>
            </button>
          );
        })}
      </div>

      <Divider />

      {tab === 'ogretmen' && (
        <GroupBlock group={teachers} done={done} toggle={toggle} />
      )}
      {tab === 'ogrenci' && (
        <div className="space-y-10">
          {studentGroups.map((g) => (
            <GroupBlock key={g.id} group={g} done={done} toggle={toggle} />
          ))}
        </div>
      )}
      {tab === 'belediye' && (
        <div className="space-y-10">
          {municipality.map((g) => (
            <GroupBlock key={g.id} group={g} done={done} toggle={toggle} />
          ))}
        </div>
      )}
    </div>
  );
}

function GroupBlock({
  group,
  done,
  toggle,
}: {
  group: TeamGroup;
  done: Set<string>;
  toggle: (id: string) => void;
}) {
  const groupDone = group.checklist.filter((c) => done.has(c.id)).length;

  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-5"
    >
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <Eyebrow>{group.alt}</Eyebrow>
          <h3 className="mt-1 font-display text-[26px] font-semibold tracking-tight text-ink-700">
            {group.baslik}
          </h3>
        </div>
        <div className="min-w-[200px] flex-1 max-w-[280px]">
          <ProgressBar done={groupDone} total={group.checklist.length} label="Tamamlanan" />
        </div>
      </div>

      {/* Üyeler */}
      {group.uyeler.length > 0 && (
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
          {group.uyeler.map((u) => (
            <div
              key={u.id}
              className="rounded-lg border border-ink-500/12 bg-cream/40 px-3 py-2.5"
            >
              <div className="font-display text-[14px] font-medium text-ink-700">
                {u.isim}
              </div>
              <div className="mt-0.5 font-mono text-[10px] uppercase tracking-wide text-ink-400">
                {u.rol}
              </div>
              {u.notlar && (
                <div className="mt-1 text-[11px] italic text-clay-500">
                  {u.notlar}
                </div>
              )}
              {u.ekip && (
                <div className="mt-2">
                  <Pill variant={u.ekip === 'A' ? 'cesme' : u.ekip === 'B' ? 'clay' : 'default'}>
                    {u.ekip === 'ortak' ? 'Ortak' : `Ekip ${u.ekip}`}
                  </Pill>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Check-list */}
      <Card className="bg-cream/60">
        <div className="space-y-1">
          {group.checklist.map((item) => (
            <Checkbox
              key={item.id}
              checked={done.has(item.id)}
              onChange={() => toggle(item.id)}
              label={item.text}
            />
          ))}
        </div>
      </Card>
    </motion.section>
  );
}
