import { motion } from 'framer-motion';
import { Search, Palette, Code, Rocket } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';

const steps = [
  { number: '01', title: 'Discovery', description: 'We align on scope, constraints, and success criteria.', icon: Search },
  { number: '02', title: 'Design', description: 'Architecture and interfaces before writing code.', icon: Palette },
  { number: '03', title: 'Build', description: 'Iterative development with regular check-ins.', icon: Code },
  { number: '04', title: 'Ship & support', description: 'Deploy, monitor, and iterate.', icon: Rocket },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="section-padding relative overflow-hidden border-t border-[#e8e8e8] bg-white" aria-labelledby="process-heading">
      <div className="container-narrow relative">
        <SectionHeader
          id="process-heading"
          label="Process"
          title="How we work"
          subtitle={<p>A clear process that keeps you in the loop.</p>}
        />

        <div className="relative">
          {/* Timeline connector (desktop) - centered in grid row */}
          <div className="process-timeline absolute left-0 right-0 top-1/2 z-0 hidden h-0.5 -translate-y-1/2 lg:block" aria-hidden>
            <div className="mx-auto h-full max-w-[1152px] bg-gradient-to-r from-transparent via-[var(--accent-bar)]/25 to-transparent px-4" />
          </div>

          <motion.div
          className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, staggerChildren: 0.08 }}
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="process-step card-lift group relative z-10 rounded-2xl border border-[#e8e8e8] bg-white p-6 shadow-soft hover:border-[var(--accent-bar)]/30 hover:shadow-card-hover"
              >
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-bar)] text-sm font-bold text-white shadow-[0_4px_14px_rgba(13,148,136,0.35)]">
                  {step.number}
                </span>
                <span className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-[var(--accent-bar)] transition-colors group-hover:bg-primary/20 group-hover:scale-105">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-lg font-semibold text-[#2a2a2a]">{step.title}</h3>
                <p className="mt-2 text-left text-sm leading-[1.6] text-[#2a2a2a]/70 text-justify hyphens-auto">{step.description}</p>
              </motion.div>
            );
          })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
