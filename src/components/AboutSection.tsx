import { motion } from 'framer-motion';
import { Code2, Database, Gauge, FileCode } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { site } from '@/data/site';

const focusAreas = [
  {
    label: 'APIs & service design',
    description: 'RESTful and GraphQL APIs that integrate cleanly and scale with your product.',
    icon: Code2,
  },
  {
    label: 'Databases & data modeling',
    description: 'Schema design, migrations, and query optimization for reliable data layers.',
    icon: Database,
  },
  {
    label: 'Performance & reliability',
    description: 'Monitoring, caching, and architecture that keeps systems fast and available.',
    icon: Gauge,
  },
  {
    label: 'Clean, maintainable code',
    description: 'TypeScript, tests, and clear patterns so your codebase stays manageable.',
    icon: FileCode,
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding border-t border-[#e6e6e6] bg-[#f5f5f5]" aria-labelledby="about-heading">
      <div className="container-narrow">
        <SectionHeader
          id="about-heading"
          label="Who we are"
          title="About"
          subtitle={<p>{site.description}</p>}
        />

        {/* Mission statement */}
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-[#e8e8e8] bg-white px-6 py-8 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] md:px-10 md:py-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="absolute left-0 top-0 h-full w-1 rounded-r bg-[var(--accent-bar)]" aria-hidden />
          <p className="font-display text-xl font-semibold leading-snug text-[#2a2a2a] md:text-2xl md:leading-snug">
            We build systems that scale.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-[1.7] text-[#2a2a2a]/75 md:text-base">
            A team of four building APIs, services, and full-stack products with clarity and maintainability at the core. We focus on backend and full-stack engineering so you can ship faster and iterate with confidence.
          </p>
        </motion.div>

        {/* Focus areas — 2x2 grid with icon, title, description */}
        <motion.div
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {focusAreas.map(({ label, description, icon: Icon }) => (
            <motion.article
              key={label}
              variants={item}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="group flex gap-5 rounded-2xl border border-[#e8e8e8] bg-white p-6 shadow-[0_1px_8px_0_rgba(72,79,90,0.08)] transition-shadow duration-300 hover:border-[var(--accent-bar)]/20 hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.1)]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-bar)]/10 text-[var(--accent-bar)] transition-colors duration-300 group-hover:bg-[var(--accent-bar)]/20">
                <Icon className="h-6 w-6" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-lg font-semibold text-[#2a2a2a]">
                  {label}
                </h3>
                <p className="mt-2 text-sm leading-[1.6] text-[#2a2a2a]/70">
                  {description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
