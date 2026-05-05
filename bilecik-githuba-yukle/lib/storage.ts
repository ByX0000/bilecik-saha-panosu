'use client';

import { useEffect, useState } from 'react';

// Saha kullanımı için: check-list state'i localStorage'da
export function useLocalSet(key: string): [Set<string>, (id: string) => void, () => void] {
  const [done, setDone] = useState<Set<string>>(new Set());

  useEffect(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw) setDone(new Set(JSON.parse(raw)));
    } catch {}
  }, [key]);

  const toggle = (id: string) => {
    setDone((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try {
        localStorage.setItem(key, JSON.stringify(Array.from(next)));
      } catch {}
      return next;
    });
  };

  const reset = () => {
    setDone(new Set());
    try {
      localStorage.removeItem(key);
    } catch {}
  };

  return [done, toggle, reset];
}

// Time-gate helper — telefon rehberi otomatik silme
export function shouldHideContacts(now: Date = new Date()): boolean {
  // 19 Mayıs 2026 00:00 (TR saati) ve sonrası gizli
  const cutoff = new Date('2026-05-19T00:00:00+03:00');
  return now >= cutoff;
}

export function timeUntil(target: Date, now: Date = new Date()): {
  days: number;
  hours: number;
  minutes: number;
  expired: boolean;
} {
  const diff = target.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, expired: true };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  return { days, hours, minutes, expired: false };
}
