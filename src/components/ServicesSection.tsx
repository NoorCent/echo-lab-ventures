import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronUp, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { services } from '@/data/site';

const MD_BREAKPOINT = 768;

function useIsMd() {
  const [isMd, setIsMd] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${MD_BREAKPOINT}px)`);
    setIsMd(mql.matches);
    const handler = () => setIsMd(mql.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);
  return isMd;
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const layoutTransition = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
  mass: 0.8,
};

/**
 * Services section   on desktop/md when "Learn more" is clicked, the selected card
 * moves to the top row (full width + detail) and the other three animate to a second row below.
 */
export const ServicesSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [justCollapsed, setJustCollapsed] = useState(false);
  const isMd = useIsMd();

  const toggle = (index: number) => {
    setExpandedIndex((prev) => {
      if (prev === index) {
        if (isMd) setJustCollapsed(true);
        return null;
      }
      return index;
    });
  };

  useEffect(() => {
    if (!justCollapsed) return;
    const t = setTimeout(() => setJustCollapsed(false), 450);
    return () => clearTimeout(t);
  }, [justCollapsed]);

  const isExpandedLayout = expandedIndex !== null;
  const useDesktopTwoRow = isExpandedLayout && isMd;
  const otherIndices = services.map((_, i) => i).filter((i) => i !== expandedIndex);

  return (
    <section
      id="services"
      className="our_services_container section-padding border-t border-[#e8e8e8] dark:border-white/10 bg-[#f5f5f5] dark:bg-[#141414] overflow-hidden"
    >
      <div className="container-narrow">
        <SectionHeader
          label="What we do"
          title="Services"
          subtitle={
            <p>
              We offer innovative, tailored solutions to help businesses optimize
              operations and drive success. With a focus on digital
              transformation, we create scalable, reliable systems that empower
              organizations to thrive.
            </p>
          }
        />

        {/* Desktop/md: two-row layout when one card is expanded */}
        <motion.div
          className={`services_container grid grid-cols-1 gap-8 md:gap-10 items-start ${
            isExpandedLayout ? 'md:grid-cols-1 md:flex md:flex-col md:gap-6' : 'md:grid-cols-2'
          }`}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          layout
          transition={layoutTransition}
        >
          {useDesktopTwoRow && expandedIndex !== null ? (
            <>
              {/* Row 1 (md+): expanded card full width */}
              {services.map((service, index) => {
                if (index !== expandedIndex) return null;
                const isDark = index === 1 || index === 2;
                return (
                  <motion.article
                    key={`expanded-${index}`}
                    layout
                    layoutId={`service-${index}`}
                    initial={false}
                    animate={{ opacity: 1, y: 0 }}
                    transition={layoutTransition}
                    className={`service group/card relative flex flex-col gap-4 overflow-hidden rounded-xl shadow-[0_1px_8px_0_rgba(72,79,90,0.16)] transition-shadow duration-300 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.18)] ${
                      isDark
                        ? 'bg-primary text-white hover:shadow-[0_20px_40px_-12px_rgba(13,148,136,0.4)]'
                        : 'bg-[#f8f8f8] dark:bg-white/5 text-[#2a2a2a] dark:text-gray-100'
                    }`}
                  >
                    <div
                      className={`flex min-h-[240px] flex-col justify-between gap-4 p-6 md:min-h-[240px] md:flex-row md:items-center md:gap-6 md:p-8`}
                    >
                      <div className="title_anchor relative z-10 flex w-full flex-col justify-between gap-6 md:w-1/2">
                        <h3 className="font-display text-xl font-medium leading-tight md:text-2xl md:leading-9">
                          {service.title}
                        </h3>
                        <button
                          onClick={() => toggle(index)}
                          className={`service_link group/link inline-flex w-fit items-center gap-2 font-medium transition-all cursor-pointer ${
                            isDark ? 'text-white' : 'text-[#2a2a2a] dark:text-gray-100'
                          }`}
                        >
                          <motion.span
                            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white dark:bg-white/10 text-[#2a2a2a] dark:text-gray-200"
                            whileHover={{ scale: 1.1, x: 2 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                          >
                            <ChevronUp className="h-3.5 w-3.5" />
                          </motion.span>
                          <span>Show Less</span>
                        </button>
                      </div>
                      <div className="image_container relative z-10 h-44 w-full overflow-hidden rounded-lg md:h-[220px] md:w-2/5">
                        <img
                          src={service.imageUrl}
                          alt=""
                          loading="lazy"
                          className={`h-full w-full transition-transform duration-500 ease-out group-hover/card:scale-110 ${
                            service.imageUrl.endsWith('.svg')
                              ? `object-contain p-4 ${isDark ? 'brightness-0 invert' : ''}`
                              : 'object-cover'
                          }`}
                        />
                      </div>
                    </div>
                    <div
                      className={`border-t px-6 pb-6 pt-5 md:px-8 md:pb-8 md:pt-6 ${
                        isDark ? 'border-white/15' : 'border-[#e0e0e0] dark:border-white/10'
                      }`}
                    >
                      <div className="flex flex-col gap-5 md:flex-row md:gap-10">
                        <div className="md:w-3/5">
                          <p
                            className={`text-sm leading-relaxed md:text-base ${
                              isDark ? 'text-white/85' : 'text-[#555] dark:text-gray-100'
                            }`}
                          >
                            {service.detailedDescription}
                          </p>
                        </div>
                        <div className="md:w-2/5">
                          <h4
                            className={`mb-3 text-xs font-semibold uppercase tracking-widest ${
                              isDark ? 'text-white/60' : 'text-[#999] dark:text-gray-400'
                            }`}
                          >
                            What's included
                          </h4>
                          <ul className="space-y-2.5">
                            {service.highlights.map((item) => (
                              <li key={item} className="flex items-start gap-2.5 text-sm">
                                <CheckCircle2
                                  className={`mt-0.5 h-4 w-4 shrink-0 ${
                                    isDark ? 'text-white/70' : 'text-primary'
                                  }`}
                                />
                                <span
                                  className={
                                    isDark ? 'text-white/85' : 'text-[#444] dark:text-gray-100'
                                  }
                                >
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}

              {/* Row 2 (md+): other three cards compact */}
              <motion.div
                className="grid grid-cols-3 gap-4"
                layout
                transition={layoutTransition}
              >
                {otherIndices.map((index) => {
                  const service = services[index];
                  const isDark = index === 1 || index === 2;
                  return (
                    <motion.article
                      key={`compact-${index}`}
                      layout
                      layoutId={`service-${index}`}
                      initial={false}
                      animate={{ opacity: 1, y: 0 }}
                      transition={layoutTransition}
                      className={`service group/card relative flex flex-col overflow-hidden rounded-xl shadow-[0_1px_8px_0_rgba(72,79,90,0.16)] transition-shadow duration-300 hover:shadow-[0_12px_28px_-8px_rgba(0,0,0,0.18)] cursor-pointer ${
                        isDark
                          ? 'bg-primary text-white hover:shadow-[0_20px_40px_-12px_rgba(13,148,136,0.4)]'
                          : 'bg-[#f8f8f8] dark:bg-white/5 text-[#2a2a2a] dark:text-gray-100'
                      }`}
                      onClick={() => toggle(index)}
                    >
                      <div className="flex flex-1 flex-col gap-3 p-4 md:min-h-[140px]">
                        <h3 className="font-display text-base font-medium leading-tight line-clamp-2">
                          {service.title}
                        </h3>
                        <div className="relative z-10 h-28 w-full flex-1 overflow-hidden rounded-lg">
                          <img
                            src={service.imageUrl}
                            alt=""
                            loading="lazy"
                            className={`h-full w-full transition-transform duration-500 ease-out group-hover/card:scale-110 ${
                              service.imageUrl.endsWith('.svg')
                                ? `object-contain p-2 ${isDark ? 'brightness-0 invert' : ''}`
                                : 'object-cover'
                            }`}
                          />
                        </div>
                        <span
                          className={`inline-flex w-fit items-center gap-1.5 text-sm font-medium ${
                            isDark ? 'text-white/90' : 'text-[#2a2a2a] dark:text-gray-100'
                          }`}
                        >
                          <ArrowRight className="h-3.5 w-3.5" />
                          Learn More
                        </span>
                      </div>
                    </motion.article>
                  );
                })}
              </motion.div>
            </>
          ) : null}

          {/* Default grid (mobile always; desktop when none expanded) */}
          {/* Default grid: mobile always; on md only when none expanded (avoids duplicate layoutId) */}
          {!useDesktopTwoRow &&
            services.map((service, index) => {
              const isDark = index === 1 || index === 2;
              const isExpanded = expandedIndex === index;

              return (
                <motion.article
                  key={service.title}
                  layout
                  layoutId={`service-${index}`}
                  {...(justCollapsed
                    ? { initial: false, animate: { opacity: 1, y: 0 } }
                    : { variants: cardVariant })}
                  transition={layoutTransition}
                  className={`service group/card relative flex flex-col gap-4 overflow-hidden rounded-xl shadow-[0_1px_8px_0_rgba(72,79,90,0.16)] transition-shadow duration-300 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.18)] ${
                    isDark
                      ? 'bg-primary text-white hover:shadow-[0_20px_40px_-12px_rgba(13,148,136,0.4)]'
                      : 'bg-[#f8f8f8] dark:bg-white/5 text-[#2a2a2a] dark:text-gray-100'
                  }`}
                >
                  <div
                    className={`flex min-h-[260px] flex-col justify-between gap-4 p-6 md:min-h-[280px] md:flex-row md:items-center md:gap-4 md:p-8`}
                  >
                    {!isDark && (
                      <span
                        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
                        aria-hidden
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-700 ease-out" />
                      </span>
                    )}

                    <div className="title_anchor relative z-10 flex w-full flex-col justify-between gap-6 md:w-1/2">
                      <h3 className="font-display text-xl font-medium leading-tight md:text-2xl md:leading-9">
                        {service.title}
                      </h3>
                      <button
                        onClick={() => toggle(index)}
                        className={`service_link group/link inline-flex w-fit items-center gap-2 font-medium transition-all cursor-pointer ${
                          isDark ? 'text-white' : 'text-[#2a2a2a] dark:text-gray-100'
                        }`}
                      >
                        <motion.span
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white dark:bg-white/10 text-[#2a2a2a] dark:text-gray-200"
                          initial={false}
                          whileHover={{ scale: 1.1, x: 2 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                        >
                          {isExpanded ? (
                            <ChevronUp className="h-3.5 w-3.5" />
                          ) : (
                            <ArrowRight className="h-3.5 w-3.5 md:rotate-[-45deg] group-hover/link:rotate-0 transition-transform duration-300" />
                          )}
                        </motion.span>
                        <span className="relative">
                          {isExpanded ? 'Show Less' : 'Learn More'}
                          <span className="absolute bottom-0 left-0 h-px w-0 bg-current transition-[width] duration-200 group-hover/link:w-full" />
                        </span>
                      </button>
                    </div>

                    <div className="image_container relative z-10 h-44 w-full overflow-hidden rounded-lg md:h-[220px] md:w-1/2">
                      <img
                        src={service.imageUrl}
                        alt=""
                        loading="lazy"
                        className={`h-full w-full transition-transform duration-500 ease-out group-hover/card:scale-110 ${
                          service.imageUrl.endsWith('.svg')
                            ? `object-contain p-4 ${isDark ? 'brightness-0 invert' : ''}`
                            : 'object-cover'
                        }`}
                      />
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
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
                        <div
                          className={`border-t px-6 pb-6 pt-5 md:px-8 md:pb-8 md:pt-6 ${
                            isDark
                              ? 'border-white/15'
                              : 'border-[#e0e0e0] dark:border-white/10'
                          }`}
                        >
                          <div className="flex flex-col gap-5 md:flex-row md:gap-10">
                            <div className="md:w-3/5">
                              <p
                                className={`text-sm leading-relaxed md:text-base ${
                                  isDark ? 'text-white/85' : 'text-[#555] dark:text-gray-100'
                                }`}
                              >
                                {service.detailedDescription}
                              </p>
                            </div>
                            <div className="md:w-2/5">
                              <h4
                                className={`mb-3 text-xs font-semibold uppercase tracking-widest ${
                                  isDark
                                    ? 'text-white/60'
                                    : 'text-[#999] dark:text-gray-400'
                                }`}
                              >
                                What's included
                              </h4>
                              <ul className="space-y-2.5">
                                {service.highlights.map((item) => (
                                  <li
                                    key={item}
                                    className="flex items-start gap-2.5 text-sm"
                                  >
                                    <CheckCircle2
                                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                                        isDark ? 'text-white/70' : 'text-primary'
                                      }`}
                                    />
                                    <span
                                      className={
                                        isDark
                                          ? 'text-white/85'
                                          : 'text-[#444] dark:text-gray-100'
                                      }
                                    >
                                      {item}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
        </motion.div>
      </div>
    </section>
  );
};
