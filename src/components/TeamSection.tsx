import { motion } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';
import { team } from '@/data/site';
import { SectionHeader } from '@/components/SectionHeader';

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const card = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export const TeamSection = () => {
  return (
    <section id="team" className="section-padding bg-white dark:bg-[#0f0f0f] border-t border-[#e6e6e6] dark:border-white/10" aria-labelledby="team-heading">
      <div className="container-narrow">
        <SectionHeader
          id="team-heading"
          label="Meet us"
          title="Team"
          subtitle={<p>The people behind Noorcent.</p>}
        />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {team.map((member) => (
            <motion.article
              key={member.name}
              variants={card}
              className="card-lift group relative p-6 rounded-2xl bg-white dark:bg-white/5 border border-[#e8e8e8] dark:border-white/10 shadow-soft overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent-bar)]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
              <div className="relative flex flex-col items-center text-center">
                {member.imageUrl ? (
                  <img
                    src={member.imageUrl}
                    alt=""
                    loading="lazy"
                    className="mb-4 w-28 h-28 rounded-2xl object-cover ring-2 ring-[#e8e8e8] ring-offset-2 shadow-soft transition-all duration-300 group-hover:ring-[var(--accent-bar)]/40 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-md bg-gradient-to-br from-[#0d9488]/25 to-[#0f766e]/25 flex items-center justify-center mb-4">
                    <span className="font-display text-2xl font-bold text-[#2a2a2a] dark:text-white">{member.initials}</span>
                  </div>
                )}
                <h3 className="font-display font-semibold text-lg text-[#2a2a2a] dark:text-white">{member.name}</h3>
                <p className="text-sm text-[#2a2a2a]/70 dark:text-gray-300 mt-1">{member.role}</p>
                <div className="mt-4 flex gap-2">
                  <a href={member.github} className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f5f5f5] dark:bg-white/10 text-[#2a2a2a] dark:text-gray-100 transition-all hover:scale-105 hover:bg-[#2a2a2a] dark:hover:bg-[var(--accent-bar)] hover:text-white" aria-label="GitHub"><Github className="h-4 w-4" /></a>
                  <a href={member.linkedin} className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f5f5f5] dark:bg-white/10 text-[#2a2a2a] dark:text-gray-100 transition-all hover:scale-105 hover:bg-[#2a2a2a] dark:hover:bg-[var(--accent-bar)] hover:text-white" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
