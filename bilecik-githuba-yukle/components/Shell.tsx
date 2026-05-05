'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  ListChecks,
  MapPin,
  Mountain,
  Film,
  PhoneCall,
  Calendar,
} from 'lucide-react';
import { motion } from 'framer-motion';

const nav = [
  { href: '/', label: 'Pano', kisa: 'Pano', icon: Home },
  { href: '/gorevler', label: 'Görevler', kisa: 'Görev', icon: ListChecks },
  { href: '/program', label: 'Program', kisa: 'Saat', icon: Calendar },
  { href: '/golpazari', label: 'Gölpazarı', kisa: 'Göl', icon: MapPin },
  { href: '/pazaryeri', label: 'Pazaryeri', kisa: 'Pazar', icon: Mountain },
  { href: '/kurgu', label: 'Kurgu Masası', kisa: 'Kurgu', icon: Film },
  { href: '/rehber', label: 'Rehber', kisa: 'Rehber', icon: PhoneCall },
];

export default function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="relative z-10 min-h-screen">
      {/* HEADER — Anadolu Modern */}
      <header className="relative border-b border-ink-500/15 bg-cream/85 backdrop-blur-md no-print">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <Link href="/" className="group flex items-center gap-3">
            <Logo />
            <div className="leading-tight">
              <div className="font-display text-[15px] font-semibold tracking-tight text-ink-700">
                7 Bölge 7 Okul
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-400">
                Bilecik · 17–18 Mayıs 2026
              </div>
            </div>
          </Link>

          <div className="hidden items-center gap-1.5 md:flex">
            {nav.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== '/' && pathname?.startsWith(item.href));
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] font-medium transition ${
                    active
                      ? 'text-cream'
                      : 'text-ink-500 hover:text-ink-700'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-ink-700"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon size={14} strokeWidth={2} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="relative z-10 mx-auto max-w-7xl px-5 py-8 pb-32 md:px-8 md:pb-12">
        {children}
      </main>

      {/* MOBİL TAB BAR */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-ink-500/12 bg-cream/95 backdrop-blur-lg tab-shadow md:hidden no-print">
        <div className="grid grid-cols-7 gap-0.5 px-1 py-2">
          {nav.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== '/' && pathname?.startsWith(item.href));
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center gap-1 rounded-lg px-1 py-1.5 transition ${
                  active ? 'text-cesme-500' : 'text-ink-400'
                }`}
              >
                <Icon size={16} strokeWidth={active ? 2.4 : 2} />
                <span className="text-[9px] font-mono uppercase tracking-wide">
                  {item.kisa}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      <footer className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-12 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400 md:px-8 md:pb-8 no-print">
        <span>GİKAL · Mesut Akatay · 7 Bölge 7 Okul · Bilecik Saha Çalışması</span>
      </footer>
    </div>
  );
}

function Logo() {
  return (
    <span className="relative flex h-9 w-9 items-center justify-center">
      <svg
        viewBox="0 0 36 36"
        className="h-9 w-9 text-ink-700"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.4}
      >
        {/* tezhip esintili rozet — yedi yapraklı */}
        <circle cx="18" cy="18" r="14" />
        <circle cx="18" cy="18" r="9" opacity="0.5" />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => {
          const a = (i / 7) * Math.PI * 2 - Math.PI / 2;
          const x = 18 + Math.cos(a) * 14;
          const y = 18 + Math.sin(a) * 14;
          return <line key={i} x1="18" y1="18" x2={x} y2={y} opacity="0.35" />;
        })}
        <circle cx="18" cy="18" r="2.2" fill="currentColor" />
      </svg>
    </span>
  );
}
