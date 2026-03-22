import { motion } from 'framer-motion';
import { Globe, Smartphone, BarChart3, Bot } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { site } from '@/data/site';

const focusAreas = [
  { label: 'Website & Web App Development', icon: Globe },
  { label: 'Mobile App Development', icon: Smartphone },
  { label: 'Data Science & ML', icon: BarChart3 },
  { label: 'AI & Automation Solutions', icon: Bot },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding border-t border-[#e6e6e6] dark:border-white/10 bg-[#f5f5f5] dark:bg-[#141414]" aria-labelledby="about-heading">
      <div className="container-narrow">
        <SectionHeader
          id="about-heading"
          label="Who we are"
          title="About"
          subtitle={<p>{site.description}</p>}
        />

        {/* Single cohesive block: statement + description + focus row */}
        <motion.div
          className="rounded-2xl border border-[#e8e8e8] dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-display text-2xl font-semibold leading-snug text-[#2a2a2a] dark:text-white md:text-3xl">
            We build web and mobile applications that scale.
          </p>
          <p className="mt-4 max-w-2xl text-[15px] leading-[1.7] text-[#2a2a2a]/80 dark:text-gray-200 md:text-base">
            {site.description} We are a team of four based in Addis Ababa.
          </p>

          {/* Focus areas   compact row with teal accent */}
          <div className="mt-10 border-t border-[#eee] pt-8">
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-[var(--accent-bar)]">
              What we focus on
            </p>
            <motion.ul
              className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {focusAreas.map(({ label, icon: Icon }) => (
                <motion.li
                  key={label}
                  variants={item}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-bar)]/10 text-[var(--accent-bar)]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-[#2a2a2a] dark:text-gray-100">{label}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
