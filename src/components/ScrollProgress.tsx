import { motion, useScroll, useTransform } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[100] h-0.5 w-full origin-left rounded-r-full bg-[var(--accent-bar)]/15"
      aria-hidden
    >
      <motion.div
        className="h-full rounded-r-full bg-[var(--accent-bar)]"
        style={{ scaleX }}
      />
    </motion.div>
  );
}
