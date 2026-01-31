import { motion } from 'framer-motion';
import { Lightbulb, Heart, Coins, Zap } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Fresh Perspectives',
    description: 'We bring innovative, modern solutions without outdated thinking.',
  },
  {
    icon: Heart,
    title: 'Dedicated Team',
    description: 'Your project gets our full attention and commitment.',
  },
  {
    icon: Coins,
    title: 'Affordable Quality',
    description: 'Premium results without the enterprise price tag.',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'Agile development with quick iterations and delivery.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export const WhyUsSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            What Sets Us <span className="gradient-text">Apart</span>
          </h2>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              className="group relative p-6 rounded-2xl glass-card text-center hover:bg-card/60 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                <value.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>

              {/* Number indicator */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted/30 flex items-center justify-center">
                <span className="text-xs font-bold text-muted-foreground">0{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
