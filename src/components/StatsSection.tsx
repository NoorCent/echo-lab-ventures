import { useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Users, FolderKanban, Handshake, Calendar } from 'lucide-react';

const statIcons = [Users, FolderKanban, Handshake, Calendar];

function StatBlock({
  value,
  suffix,
  label,
  icon: Icon,
}: {
  value: number;
  suffix: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 28 });
  const display = useTransform(spring, (v) => Math.round(v));

  if (isInView) motionVal.set(value);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="stat-card group relative rounded-2xl border border-[#e8e8e8] dark:border-white/10 bg-white dark:bg-white/5 p-6 pl-7 shadow-soft transition-all hover:border-[var(--accent-bar)]/20 hover:shadow-soft-lg"
    >
      <span className="absolute left-0 top-6 h-12 w-1 rounded-r-full bg-[var(--accent-bar)] opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
      <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-bar)]/10 text-[var(--accent-bar)] transition-colors group-hover:bg-[var(--accent-bar)]/15">
        <Icon className="h-5 w-5" />
      </span>
      <div className="font-display text-3xl font-bold tracking-tight text-[var(--accent-bar)] md:text-4xl">
        <motion.span>{display}</motion.span>
        {suffix}
      </div>
      <p className="mt-2 text-sm font-medium text-[#2a2a2a]/70 dark:text-gray-300">{label}</p>
    </motion.div>
  );
}

export function StatsSection() {
  const stats = [
    { value: 4, suffix: '', label: 'Team members' },
    { value: 5, suffix: '+', label: 'Projects delivered' },
    { value: 10, suffix: '+', label: 'Clients trusted us' },
    { value: 3, suffix: '+', label: 'Years experience' },
  ];

  return (
    <section className="section-padding border-t border-[#e8e8e8] dark:border-white/10 bg-white dark:bg-[#0f0f0f]" aria-labelledby="stats-heading">
      <div className="container-narrow">
        <header className="mb-8">
          <span className="section-label mb-1.5 block text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent-bar)]">
            At a glance
          </span>
          <div className="section-header">
            <h2 id="stats-heading" className="section-title font-display text-3xl font-bold tracking-tight text-[#2a2a2a] dark:text-white md:text-4xl md:leading-[1.2]">
              By the numbers
            </h2>
          </div>
        </header>
        <motion.div
          className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 md:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, staggerChildren: 0.06 }}
        >
          {stats.map((stat, i) => (
            <StatBlock key={stat.label} {...stat} icon={statIcons[i]} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
