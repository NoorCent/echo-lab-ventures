import { motion } from 'framer-motion';
import { Globe, Smartphone, Server, Brain, Wrench } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';

const groups = [
  { label: 'Frontend', icon: Globe, items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { label: 'Mobile', icon: Smartphone, items: ['React Native', 'Flutter', 'Expo', 'Android', 'iOS'] },
  { label: 'Backend', icon: Server, items: ['Node.js', 'Python', 'TypeScript', 'PostgreSQL', 'Redis', 'REST & GraphQL'] },
  { label: 'Data & ML', icon: Brain, items: ['TensorFlow', 'PyTorch', 'Pandas', 'Data pipelines'] },
  { label: 'DevOps & Tools', icon: Wrench, items: ['Git', 'Docker', 'CI/CD', 'Firebase', 'AWS'] },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="section-padding relative overflow-hidden border-t border-[#e8e8e8] dark:border-white/10 bg-white dark:bg-[#0f0f0f]"
      aria-labelledby="skills-heading"
    >
      <div className="container-narrow relative">
        <SectionHeader id="skills-heading" title="Technologies we use" label="Stack" />

        {/* Top row: 3 cards */}
        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {groups.slice(0, 3).map((group) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.label}
                variants={cardVariant}
                className="group relative rounded-2xl border border-[#e8e8e8] dark:border-white/10 bg-[#fafafa] dark:bg-white/[0.03] p-6 transition-all duration-300 hover:border-[var(--accent-bar)]/25 hover:shadow-[0_8px_30px_-8px_rgba(13,148,136,0.12)]"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-bar)]/10 text-[var(--accent-bar)] transition-colors group-hover:bg-[var(--accent-bar)] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#2a2a2a] dark:text-white">
                    {group.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#e4e4e4] dark:border-white/10 bg-white dark:bg-white/5 px-3 py-1.5 text-xs font-medium text-[#444] dark:text-gray-300 transition-all hover:border-[var(--accent-bar)]/30 hover:text-[var(--accent-bar)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom row: 2 cards centered */}
        <motion.div
          className="mt-5 grid gap-5 sm:grid-cols-2 lg:w-2/3 lg:mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {groups.slice(3).map((group) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.label}
                variants={cardVariant}
                className="group relative rounded-2xl border border-[#e8e8e8] dark:border-white/10 bg-[#fafafa] dark:bg-white/[0.03] p-6 transition-all duration-300 hover:border-[var(--accent-bar)]/25 hover:shadow-[0_8px_30px_-8px_rgba(13,148,136,0.12)]"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-bar)]/10 text-[var(--accent-bar)] transition-colors group-hover:bg-[var(--accent-bar)] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#2a2a2a] dark:text-white">
                    {group.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#e4e4e4] dark:border-white/10 bg-white dark:bg-white/5 px-3 py-1.5 text-xs font-medium text-[#444] dark:text-gray-300 transition-all hover:border-[var(--accent-bar)]/30 hover:text-[var(--accent-bar)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
