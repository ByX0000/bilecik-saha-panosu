import clsx from 'clsx';

export function PageHeader({
  marker,
  title,
  subtitle,
  align = 'left',
  serif = true,
}: {
  marker?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  serif?: boolean;
}) {
  return (
    <header
      className={clsx(
        'mb-10 md:mb-14',
        align === 'center' ? 'text-center' : 'text-left'
      )}
    >
      {marker && <div className="chapter-mark mb-4">{marker}</div>}
      <h1
        className={clsx(
          'leading-[1.05] tracking-tight text-ink-700',
          serif ? 'font-display' : 'font-body',
          'text-[40px] md:text-[64px]'
        )}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          className={clsx(
            'mt-4 max-w-2xl font-body text-[15px] leading-relaxed text-ink-500 md:text-[17px]',
            align === 'center' && 'mx-auto'
          )}
        >
          {subtitle}
        </p>
      )}
    </header>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-[24px] font-semibold tracking-tight text-ink-700 md:text-[30px]">
      {children}
    </h2>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
      {children}
    </div>
  );
}
