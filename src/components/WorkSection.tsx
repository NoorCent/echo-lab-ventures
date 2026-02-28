import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { projects } from '@/data/site';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const WorkSection = () => {
  const [featured, ...rest] = projects;

  return (
    <section id="work" className="section-padding border-t border-[#e8e8e8] bg-white" aria-labelledby="work-heading">
      <div className="container-narrow">
        <SectionHeader
          id="work-heading"
          label="Work"
          title="Projects"
          subtitle={
            <p>
              At Noorcent, our products empower businesses with innovative software solutions designed to enhance operational efficiency.
            </p>
          }
        />

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {/* Featured project — horizontal card, spans 2 cols */}
          <motion.article
            key={featured.name}
            variants={card}
            className="group featured-card relative overflow-hidden rounded-2xl border border-[#e8e8e8] bg-white shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 sm:col-span-2 hover:border-[var(--accent-bar)]/30 hover:shadow-[0_24px_48px_-12px_rgba(13,148,136,0.15)]"
          >
            <a href={featured.href} className="flex flex-col lg:flex-row lg:min-h-[280px]">
              <div className="relative h-52 w-full overflow-hidden bg-[#f5f5f5] lg:h-auto lg:w-[48%]">
                {featured.imageUrl ? (
                  <img
                    src={featured.imageUrl}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                ) : (
                  <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${featured.placeholderColor}`}>
                    <span className="font-display text-5xl font-bold text-[#2a2a2a]/20">{featured.name.charAt(0)}</span>
                  </div>
                )}
                <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-sm font-bold text-[var(--accent-bar)] shadow-soft backdrop-blur-sm">
                  01
                </span>
              </div>
              <div className="relative flex flex-1 flex-col justify-center border-t-4 border-[var(--accent-bar)] bg-white p-6 lg:border-t-0 lg:border-l-4 lg:p-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--accent-bar)]">
                  {featured.stack}
                </p>
                <h3 className="font-display text-2xl font-bold text-[#2a2a2a] lg:text-3xl">
                  {featured.name}
                </h3>
                <p className="mt-3 text-sm leading-[1.6] text-[#2a2a2a]/75">
                  {featured.context}
                </p>
                <span className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-medium text-[var(--accent-bar)]">
                  View project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          </motion.article>

          {/* Rest — overlapping “sticker” content panel */}
          {rest.map((project, index) => {
            const num = String(index + 2).padStart(2, '0');
            return (
              <motion.article
                key={project.name}
                variants={card}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative"
              >
                <a href={project.href} className="block">
                  <div className="relative overflow-hidden rounded-2xl bg-[#f5f5f5] pt-[70%] shadow-[0_2px_16px_-4px_rgba(0,0,0,0.08)] transition-shadow duration-300 group-hover:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.12)]">
                    {project.imageUrl ? (
                      <img
                        src={project.imageUrl}
                        alt=""
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${project.placeholderColor}`}>
                        <span className="font-display text-4xl font-bold text-[#2a2a2a]/20">{project.name.charAt(0)}</span>
                      </div>
                    )}
                    {/* Number badge */}
                    <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white/90 text-xs font-bold text-[var(--accent-bar)] shadow-soft backdrop-blur-sm">
                      {num}
                    </span>
                  </div>

                  {/* Floating content panel — overlaps image */}
                  <div
                    className="relative z-10 mx-4 -mt-6 rounded-xl border border-white/80 bg-white/95 p-4 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-0.5"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--accent-bar)]">
                      {project.stack}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-semibold text-[#2a2a2a]">
                      {project.name}
                    </h3>
                    <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-[var(--accent-bar)]">
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </a>
              </motion.article>
            );
          })}
        </motion.div>

        <div className="mt-14 flex justify-center">
          <a
            href="#contact"
            className="btn-outline inline-flex items-center gap-2 text-sm transition-all hover:border-[var(--accent-bar)] hover:text-[var(--accent-bar)]"
          >
            Get in touch for more
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
