import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { testimonials } from '@/data/site';

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 60 : -60,
  }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -60 : 60,
  }),
};

export const TestimonialSection = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const t = testimonials[index];
  const hasMultiple = testimonials.length > 1;

  const goTo = (nextIndex: number) => {
    if (!hasMultiple) return;
    setDirection(nextIndex > index ? 1 : -1);
    setIndex(nextIndex);
  };

  const prev = () => {
    if (!hasMultiple) return;
    goTo(index === 0 ? testimonials.length - 1 : index - 1);
  };

  const next = () => {
    if (!hasMultiple) return;
    goTo(index === testimonials.length - 1 ? 0 : index + 1);
  };

  return (
    <section
      id="testimonials"
      className="section-padding border-t border-[#e8e8e8] dark:border-white/10 bg-white dark:bg-[#0f0f0f]"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-narrow">
        <SectionHeader
          id="testimonials-heading"
          label="Kind words"
          title="What our clients say"
          subtitle={<p>We're proud of the products we build and so are the people we build them for.</p>}
        />

        <div className="mt-10 md:mt-14 relative">
          <div className="relative overflow-hidden min-h-[200px]">
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.blockquote
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative rounded-2xl border border-[#e8e8e8] dark:border-white/10 bg-[#fafafa] dark:bg-white/5 p-5 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] sm:p-6 md:p-10"
              >
                <span className="absolute left-4 top-4 text-[var(--accent-bar)]/20 sm:left-6 sm:top-6 md:left-10 md:top-10" aria-hidden>
                  <Quote className="h-8 w-8 shrink-0 sm:h-10 sm:w-10 md:h-12 md:w-12" />
                </span>
                <p className="relative z-10 pl-11 font-display text-lg leading-relaxed text-[#2a2a2a] dark:text-gray-100 sm:pl-14 md:pl-16 md:text-xl md:leading-[1.6]">
                  "{t.quote}"
                </p>
                <footer className="mt-6 flex flex-wrap items-center gap-2 md:mt-8">
                  <cite className="not-italic">
                    <span className="font-display font-semibold text-[#2a2a2a] dark:text-white">{t.author}</span>
                    <span className="text-[#2a2a2a]/60 dark:text-gray-300">   {t.role}</span>
                  </cite>
                  {t.projectHref && t.projectHref !== '#' && (
                    <a
                      href={t.projectHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[var(--accent-bar)] no-underline hover:underline"
                    >
                      {t.project} →
                    </a>
                  )}
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {hasMultiple && (
            <>
              <button
                type="button"
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-10 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-[#e8e8e8] dark:border-white/10 bg-white dark:bg-white/5 text-[#2a2a2a] dark:text-gray-200 shadow-soft transition-colors hover:border-[var(--accent-bar)]/40 hover:bg-[var(--accent-bar)]/10 hover:text-[var(--accent-bar)]"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-10 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-[#e8e8e8] dark:border-white/10 bg-white dark:bg-white/5 text-[#2a2a2a] dark:text-gray-200 shadow-soft transition-colors hover:border-[var(--accent-bar)]/40 hover:bg-[var(--accent-bar)]/10 hover:text-[var(--accent-bar)]"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
              </button>

              <div className="flex justify-center gap-2 mt-6" aria-hidden>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goTo(i)}
                    className={`h-2 rounded-full transition-all duration-200 ${
                      i === index
                        ? 'w-6 bg-[var(--accent-bar)]'
                        : 'w-2 bg-[#ccc] dark:bg-white/30 hover:bg-[var(--accent-bar)]/50'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
