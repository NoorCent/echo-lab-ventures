import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function CTABanner() {
  return (
    <section className="relative overflow-hidden border-t border-[#e8e8e8] bg-[#2a2a2a] py-16 md:py-20" aria-label="Call to action">
      <div className="absolute inset-0 bg-cta-mesh opacity-90" aria-hidden />
      <div className="container-narrow relative flex flex-col items-center text-center">
        <motion.h2
          className="font-display text-2xl font-bold text-white md:text-3xl lg:text-4xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Ready to build something great?
        </motion.h2>
        <motion.p
          className="mt-3 max-w-lg text-white/80"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Let's turn your idea into a product. Get in touch and we'll respond within 24 hours.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-bar)] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:brightness-110 hover:shadow-[0_8px_28px_rgba(13,148,136,0.45)] active:scale-[0.98]"
          >
            Start a project
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10 active:scale-[0.98]"
          >
            View our work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
