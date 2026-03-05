import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronUp, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { services } from '@/data/site';

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

/**
 * Services section — cards with expand/collapse "Learn More" behaviour.
 * Cards expand vertically in-place (inline accordion) on both desktop & mobile.
 */
export const ServicesSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="services"
      className="our_services_container section-padding border-t border-[#e8e8e8] bg-[#f5f5f5] overflow-hidden"
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

        <motion.div
          className="services_container grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 items-start"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {services.map((service, index) => {
            const isDark = index === 1 || index === 2;
            const isExpanded = expandedIndex === index;

            return (
              <motion.article
                key={service.title}
                variants={cardVariant}
                className={`service group/card relative flex flex-col gap-4 overflow-hidden rounded-xl shadow-[0_1px_8px_0_rgba(72,79,90,0.16)] transition-shadow duration-300 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.18)] ${isDark
                  ? 'bg-primary text-white hover:shadow-[0_20px_40px_-12px_rgba(13,148,136,0.4)]'
                  : 'bg-[#f8f8f8] text-[#2a2a2a]'
                  }`}
              >
                {/* ── Main card content ── */}
                <div
                  className={`flex min-h-[280px] flex-col justify-between gap-4 p-6 md:min-h-[310px] md:flex-row md:items-center md:gap-4 md:p-8`}
                >
                  {/* Subtle shine sweep on hover (light cards) */}
                  {!isDark && (
                    <span
                      className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
                      aria-hidden
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-700 ease-out" />
                    </span>
                  )}

                  <div className="title_anchor relative z-10 flex w-full flex-col justify-between gap-6 md:w-1/2">
                    <h3
                      className="font-display text-xl font-medium leading-tight md:text-2xl md:leading-9"
                    >
                      {service.title}
                    </h3>
                    <button
                      onClick={() => toggle(index)}
                      className={`service_link group/link inline-flex w-fit items-center gap-2 font-medium transition-all cursor-pointer ${isDark ? 'text-white' : 'text-[#2a2a2a]'
                        }`}
                    >
                      <motion.span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[#2a2a2a]"
                        initial={false}
                        whileHover={{ scale: 1.1, x: 2 }}
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 17,
                        }}
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

                  <div className="image_container relative z-10 h-40 w-full overflow-hidden rounded-lg md:h-[200px] md:w-1/2">
                    <img
                      src={service.imageUrl}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover/card:scale-110"
                    />
                    {/* Teal tint overlay on card hover */}
                    <span
                      className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover/card:bg-primary/10 pointer-events-none rounded-lg"
                      aria-hidden
                    />
                  </div>
                </div>

                {/* ── Expanded detail panel ── */}
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
                        className={`border-t px-6 pb-6 pt-5 md:px-8 md:pb-8 md:pt-6 ${isDark
                          ? 'border-white/15'
                          : 'border-[#e0e0e0]'
                          }`}
                      >
                        <div className="flex flex-col gap-5 md:flex-row md:gap-10">
                          {/* Description */}
                          <div className="md:w-3/5">
                            <p
                              className={`text-sm leading-relaxed md:text-base ${isDark
                                ? 'text-white/85'
                                : 'text-[#555]'
                                }`}
                            >
                              {service.detailedDescription}
                            </p>
                          </div>

                          {/* Highlights */}
                          <div className="md:w-2/5">
                            <h4
                              className={`mb-3 text-xs font-semibold uppercase tracking-widest ${isDark
                                ? 'text-white/60'
                                : 'text-[#999]'
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
                                    className={`mt-0.5 h-4 w-4 shrink-0 ${isDark
                                      ? 'text-white/70'
                                      : 'text-primary'
                                      }`}
                                  />
                                  <span
                                    className={
                                      isDark
                                        ? 'text-white/85'
                                        : 'text-[#444]'
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
