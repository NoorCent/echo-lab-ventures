import { motion } from 'framer-motion';
import { Globe, Smartphone, Bot, Brain } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'From landing pages to complex web apps',
    details: 'Custom websites, e-commerce platforms, web applications built with React, Next.js, Node.js, and modern frameworks.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native performance, stunning design',
    details: 'iOS and Android applications with cross-platform solutions using Flutter and React Native.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Bot,
    title: 'AI Solutions',
    description: 'Intelligent solutions for modern problems',
    details: 'Custom AI integrations, chatbots, and automation. Smart features that transform your business.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Turn your data into insights',
    details: 'Data analysis, predictive models, recommendation systems, computer vision, and NLP solutions.',
    gradient: 'from-teal-500 to-green-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export const ServicesSection = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
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
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Services That <span className="gradient-text">Transform</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We specialize in building digital products that help businesses grow and succeed in the modern world.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl glass-card gradient-border hover:bg-card/60 transition-all duration-500 cursor-pointer"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-primary/80 font-medium mb-3">{service.description}</p>
              <p className="text-muted-foreground leading-relaxed">{service.details}</p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" 
                   style={{ background: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))` }} 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
