import { motion } from 'framer-motion';
import { ExternalLink, ShoppingBag, LayoutDashboard, Truck, Smartphone, Plus } from 'lucide-react';
import { Button } from './ui/button';

const features = [
  { icon: ShoppingBag, label: 'Online Ordering' },
  { icon: LayoutDashboard, label: 'Admin Panel' },
  { icon: Truck, label: 'Order Management' },
  { icon: Smartphone, label: 'Responsive Design' },
];

export const PortfolioSection = () => {
  return (
    <section id="work" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

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
            Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our Recent <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore some of the projects we've brought to life for our clients.
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-3xl glass-card gradient-border overflow-hidden">
            {/* Project Image */}
            <div className="relative aspect-video lg:aspect-auto rounded-2xl overflow-hidden bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <ShoppingBag className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-lg font-medium text-foreground/80">Sweet Delights</p>
                  <p className="text-sm text-muted-foreground">E-commerce Platform</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl" />
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl" />
            </div>

            {/* Project Info */}
            <div className="flex flex-col justify-center">
              <span className="text-accent text-sm font-semibold mb-2">Featured Project</span>
              <h3 className="font-display text-3xl font-bold mb-4">Sweet Delights Cake Shop</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A complete cake ordering platform with a beautiful customer-facing storefront and 
                powerful admin dashboard for order management, inventory tracking, and business analytics.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {features.map((feature) => (
                  <div key={feature.label} className="flex items-center gap-2 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature.label}</span>
                  </div>
                ))}
              </div>

              <Button variant="hero" className="w-fit group">
                View Case Study
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* More Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Coming Soon Cards */}
          {[1, 2].map((i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl glass-card border-dashed border-2 border-border/50 hover:border-primary/30 transition-all duration-300 flex flex-col items-center justify-center min-h-[200px]"
            >
              <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <Plus className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-muted-foreground font-medium">Coming Soon</p>
              <p className="text-sm text-muted-foreground/60">More projects on the way</p>
            </div>
          ))}

          {/* CTA Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex flex-col items-center justify-center min-h-[200px] text-center">
            <h4 className="font-display text-xl font-bold mb-2">Your Project Here?</h4>
            <p className="text-muted-foreground text-sm mb-4">Let's build something amazing together</p>
            <Button variant="accent" size="sm" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
