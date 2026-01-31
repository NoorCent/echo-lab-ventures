import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: 'Nebiyu Musbah',
    role: 'Full-Stack Developer & Team Lead',
    initials: 'NM',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    name: 'Abdulaziz Isa',
    role: 'Mobile Developer & AI Specialist',
    initials: 'AI',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Abdallah Abdurazak',
    role: 'Backend Developer & ML Engineer',
    initials: 'AA',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    name: 'Sadam Husen',
    role: 'Frontend Developer & UI Designer',
    initials: 'SH',
    gradient: 'from-teal-500 to-green-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
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

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

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
            Our Team
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Meet the Minds <span className="gradient-text">Behind the Magic</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We're a team of 4 university students passionate about technology and committed to 
            delivering exceptional digital solutions. What we lack in years, we make up for in 
            dedication, fresh perspectives, and cutting-edge skills.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="group relative p-6 rounded-2xl glass-card text-center hover:bg-card/60 transition-all duration-500"
            >
              {/* Avatar */}
              <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <span className="font-display text-2xl font-bold text-white">
                  {member.initials}
                </span>
              </div>

              {/* Info */}
              <h3 className="font-display text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{member.role}</p>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-3">
                {[Github, Linkedin, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
