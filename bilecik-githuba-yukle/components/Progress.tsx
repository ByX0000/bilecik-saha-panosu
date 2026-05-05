'use client';

export function ProgressBar({
  done,
  total,
  label,
}: {
  done: number;
  total: number;
  label?: string;
}) {
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
  return (
    <div className="space-y-2">
      {label && (
        <div className="flex items-baseline justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-400">
            {label}
          </span>
          <span className="font-mono text-[11px] tabular-nums text-ink-600">
            {done} / {total}
            <span className="ml-2 text-ink-400">·</span>
            <span className="ml-2 font-display text-[14px] font-semibold text-ink-700">
              {pct}%
            </span>
          </span>
        </div>
      )}
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: pct === 0 ? '0%' : `${Math.max(pct, 4)}%` }}
        />
      </div>
    </div>
  );
}
