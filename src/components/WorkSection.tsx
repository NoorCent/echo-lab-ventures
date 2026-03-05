import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronUp, CheckCircle2, ExternalLink } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { ProjectModal } from '@/components/ProjectModal';
import { projects } from '@/data/site';
import { useIsMobile } from '@/hooks/use-mobile';

type Project = (typeof projects)[number];

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
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

/**
 * Inline detail panel for mobile — shows description, features, stack, and link.
 */
const InlineDetail = ({ project }: { project: Project }) => (
  <motion.div
    key="detail"
    initial={{ height: 0, opacity: 0 }}
    animate={{ height: 'auto', opacity: 1 }}
    exit={{ height: 0, opacity: 0 }}
    transition={{
      height: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
      opacity: { duration: 0.3, delay: 0.1 },
    }}
    className="overflow-hidden"
  >
    <div className="border-t border-[#e8e8e8] px-5 pb-5 pt-4">
      <p className="text-sm leading-relaxed text-[#555]">
        {project.detailedDescription}
      </p>

      <ul className="mt-4 space-y-2">
        {project.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
            <span className="text-[#444]">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {project.stack.split(', ').map((tech) => (
            <span
              key={tech}
              className="inline-flex rounded-full bg-primary/8 px-3 py-1 text-xs font-medium text-primary"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.href && project.href !== '#' && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            onClick={(e) => e.stopPropagation()}
          >
            View Project
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

/**
 * Projects section — responsive "Learn More" behaviour:
 * Desktop (md+): opens a centered modal popup.
 * Mobile: inline accordion expand in-place.
 */
export const WorkSection = () => {
  const [featured, ...rest] = projects;
  const isMobile = useIsMobile();

  // Mobile: inline accordion index (-1 = featured)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  // Desktop: modal project
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const handleClick = (project: Project, index: number) => {
    if (isMobile) {
      setExpandedIndex((prev) => (prev === index ? null : index));
    } else {
      setModalProject(project);
    }
  };

  return (
    <section
      id="work"
      className="section-padding border-t border-[#e8e8e8] bg-white"
      aria-labelledby="work-heading"
    >
      <div className="container-narrow">
        <SectionHeader
          id="work-heading"
          label="Work"
          title="Projects"
          subtitle={
            <p>
              At Noorcent, our products empower businesses with innovative
              software solutions designed to enhance operational efficiency.
            </p>
          }
        />

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 items-start"
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
            <button
              onClick={() => handleClick(featured, -1)}
              className="flex flex-col lg:flex-row lg:min-h-[280px] w-full text-left cursor-pointer"
            >
              <div className="relative h-52 w-full overflow-hidden bg-[#f5f5f5] lg:h-auto lg:w-[48%]">
                {featured.imageUrl ? (
                  <img
                    src={featured.imageUrl}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                ) : (
                  <div
                    className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${featured.placeholderColor}`}
                  >
                    <span className="font-display text-5xl font-bold text-[#2a2a2a]/20">
                      {featured.name.charAt(0)}
                    </span>
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
                  {isMobile && expandedIndex === -1 ? (
                    <>
                      <ChevronUp className="h-4 w-4" />
                      Show Less
                    </>
                  ) : (
                    <>
                      View project
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </span>
              </div>
            </button>

            {/* Mobile-only inline expand */}
            {isMobile && (
              <AnimatePresence initial={false}>
                {expandedIndex === -1 && <InlineDetail project={featured} />}
              </AnimatePresence>
            )}
          </motion.article>

          {/* Rest — overlapping "sticker" content panel */}
          {rest.map((project, index) => {
            const num = String(index + 2).padStart(2, '0');
            const isExpanded = isMobile && expandedIndex === index;

            return (
              <motion.article
                key={project.name}
                variants={card}
                whileHover={
                  !isExpanded
                    ? { y: -6, transition: { duration: 0.25 } }
                    : undefined
                }
                className="group relative"
              >
                <button
                  onClick={() => handleClick(project, index)}
                  className="block w-full text-left cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-[#f5f5f5] pt-[70%] shadow-[0_2px_16px_-4px_rgba(0,0,0,0.08)] transition-shadow duration-300 group-hover:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.12)]">
                    {project.imageUrl ? (
                      <img
                        src={project.imageUrl}
                        alt=""
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div
                        className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${project.placeholderColor}`}
                      >
                        <span className="font-display text-4xl font-bold text-[#2a2a2a]/20">
                          {project.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white/90 text-xs font-bold text-[var(--accent-bar)] shadow-soft backdrop-blur-sm">
                      {num}
                    </span>
                  </div>

                  {/* Floating content panel */}
                  <div
                    className={`relative z-10 mx-4 -mt-6 border border-white/80 bg-white/95 p-4 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-0.5 ${
                      isExpanded ? 'rounded-t-xl rounded-b-none' : 'rounded-xl'
                    }`}
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--accent-bar)]">
                      {project.stack}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-semibold text-[#2a2a2a]">
                      {project.name}
                    </h3>
                    <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-[var(--accent-bar)]">
                      {isExpanded ? (
                        <>
                          <ChevronUp className="h-3.5 w-3.5" />
                          Show Less
                        </>
                      ) : (
                        <>
                          Learn more
                          <ArrowRight className="h-3.5 w-3.5" />
                        </>
                      )}
                    </span>
                  </div>
                </button>

                {/* Mobile-only inline expand */}
                {isMobile && (
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <div className="relative z-10 mx-4">
                        <div className="overflow-hidden rounded-b-xl border border-t-0 border-white/80 bg-white/95 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] backdrop-blur-sm">
                          <InlineDetail project={project} />
                        </div>
                      </div>
                    )}
                  </AnimatePresence>
                )}
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

      {/* Desktop-only modal */}
      {!isMobile && (
        <ProjectModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}
    </section>
  );
};
