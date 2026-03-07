import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/SectionHeader';

const groups = [
  { label: 'Backend', items: ['Node.js', 'Python', 'TypeScript', 'PostgreSQL', 'Redis', 'REST & GraphQL'] },
  { label: 'Frontend', items: ['React', 'Next.js', 'TypeScript'] },
  { label: 'Data & ML', items: ['TensorFlow', 'Data pipelines', 'APIs'] },
  { label: 'DevOps & tools', items: ['Git', 'Docker', 'CI/CD'] },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden border-t border-[#e8e8e8] dark:border-white/10 bg-[#f5f5f5] dark:bg-[#141414]" aria-labelledby="skills-heading">
      <div className="absolute inset-0 bg-dot-pattern opacity-30" aria-hidden />
      <div className="container-narrow relative">
        <SectionHeader id="skills-heading" title="Technologies we use" label="Stack" />

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, staggerChildren: 0.06 }}
        >
          {groups.map((group) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-[#e8e8e8] dark:border-white/10 bg-white dark:bg-white/5 p-5 shadow-soft transition-all hover:border-[var(--accent-bar)]/20 hover:shadow-soft-lg"
            >
              <p className="mb-4 text-xs font-bold uppercase tracking-wider text-[var(--accent-bar)]">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <span
                    key={tech}
                    className="skill-pill rounded-full border border-[#e8e8e8] dark:border-white/10 bg-[#fafafa] dark:bg-white/5 px-3 py-1.5 text-xs font-medium text-[#2a2a2a] dark:text-gray-200 transition-all hover:scale-105 hover:border-[var(--accent-bar)]/30 hover:bg-[var(--accent-bar)]/10 hover:shadow-soft hover:text-[#2a2a2a] dark:hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
