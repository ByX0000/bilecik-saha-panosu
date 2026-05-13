'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import clsx from 'clsx';

export function Card({
  children,
  className,
  tezhip = false,
}: {
  children: React.ReactNode;
  className?: string;
  tezhip?: boolean;
}) {
  return (
    <div
      className={clsx(
        'relative rounded-xl border border-ink-500/15 bg-cream/70 p-6 lift',
        tezhip && 'tezhip-corner text-ink-500',
        className
      )}
    >
      {children}
    </div>
  );
}

export function Checkbox({
  checked,
  onChange,
  label,
  hint,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
  hint?: string;
}) {
  return (
    <label className="group flex cursor-pointer items-start gap-3 rounded-lg border border-transparent px-3 py-2.5 transition hover:border-ink-500/12 hover:bg-ink-50/40">
      <button
        type="button"
        onClick={onChange}
        className={clsx(
          'relative mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition',
          checked
            ? 'border-cesme-500 bg-cesme-500 ink-burst'
            : 'border-ink-300/60 bg-transparent group-hover:border-ink-400'
        )}
        aria-pressed={checked}
      >
        {checked && (
          <motion.span
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 18 }}
          >
            <Check size={13} strokeWidth={3.5} className="text-cream" />
          </motion.span>
        )}
      </button>
      <div className="min-w-0 flex-1">
        <div
          className={clsx(
            'font-body text-[14px] leading-relaxed transition',
            checked ? 'text-ink-300 line-through' : 'text-ink-600'
          )}
        >
          {label}
        </div>
        {hint && (
          <div className="mt-0.5 font-mono text-[10px] uppercase tracking-wide text-ink-400">
            {hint}
          </div>
        )}
      </div>
    </label>
  );
}

export function Pill({
  children,
  variant = 'default',
}: {
  children: React.ReactNode;
  variant?: 'default' | 'cesme' | 'clay' | 'sun' | 'ink';
}) {
  const palette = {
    default: 'bg-ink-100/60 text-ink-600 border-ink-300/40',
    cesme: 'bg-cesme-100 text-cesme-600 border-cesme-300/40',
    clay: 'bg-clay-100/70 text-clay-600 border-clay-300/40',
    sun: 'bg-sun-200/70 text-sun-500 border-sun-300/40',
    ink: 'bg-ink-700 text-cream border-ink-700',
  };
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider',
        palette[variant]
      )}
    >
      {children}
    </span>
  );
}

export function Divider() {
  return (
    <div className="my-8 flex items-center gap-3">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-ink-500/20 to-transparent" />
      <div className="h-1.5 w-1.5 rounded-full bg-ink-500/30" />
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-ink-500/20 to-transparent" />
    </div>
  );
}
