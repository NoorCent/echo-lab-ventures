import { type ReactNode } from 'react';

type SectionHeaderProps = {
  title: string;
  subtitle?: ReactNode;
  label?: string;
  className?: string;
  id?: string;
};

export function SectionHeader({ title, subtitle, label, className = '', id }: SectionHeaderProps) {
  return (
    <div className={`section-header-wrap flex flex-col gap-6 md:flex-row md:items-start md:gap-10 lg:gap-14 ${className}`}>
      <header className="section-header shrink-0">
        {label && (
          <span className="section-label mb-1.5 block text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent-bar)]">
            {label}
          </span>
        )}
        <h2 id={id} className="section-title font-display text-3xl font-bold tracking-tight text-[#2a2a2a] dark:text-white md:text-4xl md:leading-[1.2]">
          {title}
        </h2>
      </header>
      {subtitle && (
        <div className="section-subtitle min-w-0 flex-1 text-left text-base leading-[1.7] text-[#2a2a2a]/80 dark:text-gray-200 md:max-w-xl md:pt-1.5 [&_p]:m-0 [&_p]:text-justify [&_p]:hyphens-auto">
          {subtitle}
        </div>
      )}
    </div>
  );
}
