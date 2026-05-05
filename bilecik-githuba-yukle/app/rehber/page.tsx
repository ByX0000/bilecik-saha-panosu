'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  ShieldAlert,
  Clock,
  Users,
  Camera,
  GraduationCap,
  MapPin,
  Building2,
  Lock,
} from 'lucide-react';
import { PageHeader, Eyebrow, SectionTitle } from '@/components/PageHeader';
import { Card, Pill, Divider } from '@/components/UI';
import { contacts, kategoriBaslik, REHBER_SON_TARIH, type Contact } from '@/data/contacts';
import { shouldHideContacts, timeUntil } from '@/lib/storage';
import clsx from 'clsx';

const kategoriIkon = {
  yonetim: Users,
  belgesel: Camera,
  ogrenci: GraduationCap,
  roportaj: MapPin,
  resmi: Building2,
};

export default function RehberSayfasi() {
  const [now, setNow] = useState<Date>(new Date());
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(t);
  }, []);

  const expired = shouldHideContacts(now);
  const remaining = timeUntil(REHBER_SON_TARIH, now);

  // Kategoriye göre gruplama
  const gruplar: Record<Contact['kategori'], Contact[]> = {
    yonetim: [],
    belgesel: [],
    ogrenci: [],
    roportaj: [],
    resmi: [],
  };
  contacts.forEach((c) => gruplar[c.kategori].push(c));

  return (
    <div className="space-y-10">
      <PageHeader
        marker="Sekme · Rehber"
        title="Saha Telefon Rehberi"
        subtitle="Hassas veriler — proje bitiminin ertesi günü, 19 Mayıs 2026 saat 00:01 itibarıyla otomatik olarak gizlenecektir."
      />

      {/* SÜRE BANNER */}
      {!expired ? (
        <Card className="bg-gradient-to-br from-ink-700 to-ink-900 border-ink-600 text-cream">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <Clock size={22} className="mt-0.5 text-sun-200" />
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-cream/60">
                  Otomatik Silme — Geri Sayım
                </div>
                <div className="mt-2 flex items-baseline gap-3">
                  <Counter label="Gün" value={remaining.days} />
                  <span className="text-cream/30">·</span>
                  <Counter label="Saat" value={remaining.hours} />
                  <span className="text-cream/30">·</span>
                  <Counter label="Dakika" value={remaining.minutes} />
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowAll((v) => !v)}
              className="rounded-full border border-cream/20 bg-cream/5 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-cream/85 transition hover:bg-cream/10"
            >
              {showAll ? 'Numaraları gizle' : 'Numaraları göster'}
            </button>
          </div>
        </Card>
      ) : (
        <Card className="border-clay-300/50 bg-clay-100/40">
          <div className="flex items-start gap-3">
            <ShieldAlert size={22} className="mt-0.5 shrink-0 text-clay-500" />
            <div>
              <div className="font-display text-[18px] font-semibold text-clay-600">
                İletişim bilgileri kaldırıldı
              </div>
              <p className="mt-1 text-[13px] leading-relaxed text-ink-500">
                Proje süresi dolduğu için güvenlik gereği iletişim verileri
                bu sayfadan silindi. Acil durumlarda Mesut Akatay ile başka
                kanaldan iletişime geçin.
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* GUARDIAN */}
      <Card className="border-cesme-300/40 bg-cesme-100/30">
        <div className="flex items-start gap-3">
          <Lock size={16} className="mt-0.5 text-cesme-500" />
          <div>
            <div className="font-display text-[14px] font-semibold text-cesme-600">
              Kullanım kuralı
            </div>
            <p className="mt-1 text-[13px] leading-relaxed text-ink-500">
              Bu sayfa sadece saha çalışması için kullanılır. Numaraları
              ekran görüntüsü almayın, başka platformlara aktarmayın.
              Kişilere iletişim onayları proje çerçevesinde alınmıştır.
            </p>
          </div>
        </div>
      </Card>

      <Divider />

      {/* KATEGORİLER */}
      <div className="space-y-10">
        {(Object.keys(gruplar) as Contact['kategori'][]).map((kat) => {
          const items = gruplar[kat];
          if (items.length === 0) return null;
          const Icon = kategoriIkon[kat];
          return (
            <section key={kat}>
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-700 text-cream">
                  <Icon size={16} />
                </div>
                <div>
                  <Eyebrow>Kategori</Eyebrow>
                  <h2 className="font-display text-[22px] font-semibold tracking-tight text-ink-700 md:text-[26px]">
                    {kategoriBaslik[kat]}
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {items.map((c, idx) => (
                  <PhoneCard
                    key={c.id}
                    contact={c}
                    expired={expired}
                    showAll={showAll}
                    delay={idx * 0.04}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

function Counter({ label, value }: { label: string; value: number }) {
  return (
    <div className="text-center">
      <div className="font-display text-[40px] font-semibold leading-none tabular-nums text-cream md:text-[52px]">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-cream/55">
        {label}
      </div>
    </div>
  );
}

function PhoneCard({
  contact,
  expired,
  showAll,
  delay,
}: {
  contact: Contact;
  expired: boolean;
  showAll: boolean;
  delay: number;
}) {
  const isResmi = contact.kategori === 'resmi';
  const display = expired
    ? '— Silindi —'
    : showAll
    ? contact.telefon
    : contact.telefon;

  const hideValue = expired;
  // Tel link sadece sayısal olanlar için
  const telDigits = contact.telefon.replace(/\D/g, '');
  const isCallable = telDigits.length >= 7 && !expired;

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <div
        className={clsx(
          'group relative rounded-xl border p-4 transition lift',
          isResmi
            ? 'border-ink-700/30 bg-ink-700/4'
            : 'border-ink-500/12 bg-cream/60'
        )}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-display text-[15px] font-semibold text-ink-700 md:text-[16px]">
                {contact.isim}
              </h3>
              {isResmi && <Pill variant="ink">Resmi</Pill>}
            </div>
            <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wide text-ink-400">
              {contact.rol}
            </p>

            <div className="mt-3 flex items-center gap-2">
              {hideValue ? (
                <span className="block h-4 w-32 rounded redacted bg-ink-400">{display}</span>
              ) : (
                <span className="font-mono text-[14px] tabular-nums text-ink-700">
                  {display}
                </span>
              )}
            </div>
          </div>

          {isCallable && (
            <a
              href={`tel:${telDigits}`}
              onClick={(e) => {
                if (!confirm(`${contact.isim} aranacak. Emin misin?`)) {
                  e.preventDefault();
                }
              }}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cesme-500 text-cream transition hover:bg-cesme-600"
              aria-label={`${contact.isim} ara`}
            >
              <Phone size={15} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
