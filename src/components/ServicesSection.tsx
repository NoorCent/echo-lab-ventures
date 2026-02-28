import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { services } from '@/data/site';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
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

/**
 * Services section — Swenetix-style cards with enhanced animations and effects.
 */
export const ServicesSection = () => {
  return (
    <section id="services" className="our_services_container section-padding border-t border-[#e8e8e8] bg-[#f5f5f5] overflow-hidden">
      <div className="container-narrow">
        <SectionHeader
          label="What we do"
          title="Services"
          subtitle={
            <p>
              We offer innovative, tailored solutions to help businesses optimize operations and drive success. With a focus on digital transformation, we create scalable, reliable systems that empower organizations to thrive.
            </p>
          }
        />

        <motion.div
          className="services_container grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {services.map((service, index) => {
            const isDark = index === 1 || index === 2;
            return (
              <motion.article
                key={service.title}
                variants={card}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`service group/card relative flex min-h-[280px] flex-col justify-between gap-4 overflow-hidden rounded-xl p-6 shadow-[0_1px_8px_0_rgba(72,79,90,0.16)] transition-shadow duration-300 md:min-h-[310px] md:flex-row md:items-center md:gap-4 md:p-8 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.18)] ${
                  isDark
                    ? 'bg-primary text-white hover:shadow-[0_20px_40px_-12px_rgba(13,148,136,0.4)]'
                    : 'bg-[#f8f8f8] text-[#2a2a2a]'
                }`}
              >
                {/* Subtle shine sweep on hover (light cards) */}
                {!isDark && (
                  <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" aria-hidden>
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-700 ease-out" />
                  </span>
                )}

                <div className="title_anchor relative z-10 flex w-full flex-col justify-between gap-6 md:w-1/2">
                  <motion.h3
                    className="font-display text-xl font-medium leading-tight md:text-2xl md:leading-9"
                    initial={false}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.title}
                  </motion.h3>
                  <a
                    href={service.href}
                    className={`service_link group/link inline-flex w-fit items-center gap-2 font-medium no-underline transition-all ${
                      isDark ? 'text-white' : 'text-[#2a2a2a]'
                    }`}
                  >
                    <motion.span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[#2a2a2a]"
                      initial={false}
                      whileHover={{ scale: 1.1, x: 2 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                      <ArrowRight className="h-3.5 w-3.5 md:rotate-[-45deg] group-hover/link:rotate-0 transition-transform duration-300" />
                    </motion.span>
                    <span className="relative">
                      Learn More
                      <span className="absolute bottom-0 left-0 h-px w-0 bg-current transition-[width] duration-200 group-hover/link:w-full" />
                    </span>
                  </a>
                </div>

                <div className="image_container relative z-10 h-40 w-full overflow-hidden rounded-lg md:h-[200px] md:w-1/2">
                  <img
                    src={service.imageUrl}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover/card:scale-110"
                  />
                  {/* Teal tint overlay on card hover */}
                  <span className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover/card:bg-primary/10 pointer-events-none rounded-lg" aria-hidden />
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
