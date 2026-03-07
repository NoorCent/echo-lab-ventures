import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { HeroBackground } from "@/components/HeroBackground";

export const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.3]);

  return (
    <section
      ref={ref}
      className=" relative flex min-h-[420px] flex-col items-center justify-center overflow-hidden px-[var(--container-x)] pt-[var(--hero-top)] pb-[var(--section-y)] text-center md:min-h-[520px] md:pt-[var(--hero-top-md)] md:pb-[var(--section-y-md)]"
      aria-label="Introduction"
    >
      <HeroBackground />
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="hero-badge mb-4 rounded-full border border-[var(--accent-bar)]/30 bg-[var(--accent-bar)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--accent-bar)]">
          {site.tagline}
       
        </span>
        <h1 className="hero_title font-light text-4xl leading-[1.15] tracking-tight text-[#2a2a2a]/70 dark:text-gray-200 md:text-5xl md:leading-[1.2] lg:text-6xl lg:leading-[1.15]">
          <strong className="font-bold text-[#2a2a2a] dark:text-white">
            Building Products
          </strong>{" "}
          that set the <br className="hidden sm:block" />
          <span className="hero-word-highlight text-gradient-hero font-bold">
            Standard
          </span>
        </h1>
        <p className="description mx-auto mt-6 max-w-[32rem] text-balance font-light text-lg leading-relaxed text-[#2a2a2a] dark:text-gray-200 md:mt-8 md:max-w-[38rem] md:text-base">
          {site.description}
        </p>
        <div className="links_container mt-8 flex flex-wrap items-center justify-center gap-4 md:mt-10">
          <a href="#contact" className="btn-primary hero-cta group gap-2">
            Request Meeting
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
          <a href="#work" className="btn-outline">
            Our Portfolio
          </a>
        </div>
      </motion.div>
    </section>
  );
};
