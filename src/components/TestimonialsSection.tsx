import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Working with this team was fantastic. They delivered our cake shop website on time and exceeded our expectations. The ordering system works flawlessly!",
    author: 'Sarah M.',
    role: 'Owner, Sweet Delights Cake Shop',
    rating: 5,
    featured: true,
  },
  {
    quote: "Your testimonial could be here! We're excited to work with new clients.",
    author: 'Future Client',
    role: 'Your Business',
    rating: 5,
    featured: false,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />

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
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`p-8 rounded-2xl ${
                testimonial.featured 
                  ? 'glass-card gradient-border' 
                  : 'border-2 border-dashed border-border/50'
              }`}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/30 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      testimonial.featured 
                        ? 'text-yellow-400 fill-yellow-400' 
                        : 'text-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className={`text-lg mb-6 leading-relaxed ${
                testimonial.featured ? 'text-foreground' : 'text-muted-foreground italic'
              }`}>
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${
                  testimonial.featured
                    ? 'bg-gradient-to-br from-primary to-secondary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
