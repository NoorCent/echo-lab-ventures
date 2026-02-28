import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { site } from '@/data/site';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    toast({ title: 'Message sent!', description: "We'll get back to you within 24 hours." });
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden border-t border-[#e8e8e8] bg-[#f5f5f5] pt-14 md:pt-20" aria-labelledby="contact-heading">
      <div className="absolute inset-0 bg-dot-pattern opacity-20" aria-hidden />
      <div className="container-narrow relative">
        <SectionHeader id="contact-heading" label="Get in touch" title="Contact Us" />
        <div className="mt-6 max-w-[42rem] md:mt-8">
          <h3 className="contact_sub_title font-display font-bold text-2xl text-[#2a2a2a] md:text-3xl md:leading-tight">
            Let's build something great together
          </h3>
          <p className="contact_sub_content mt-3 text-left text-[15px] leading-[1.7] text-[#404040] text-justify hyphens-auto md:mt-4 md:text-base">
            Have a question, suggestion, or just want to say hello? We'd love to hear from you. Feel free to reach out!
          </p>
        </div>

        <motion.div
          className="contact_details mt-8 grid gap-10 md:mt-12 md:grid-cols-2 md:gap-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="contact_maps flex flex-col space-y-5">
            <a href={`mailto:${site.email}`} className="flex items-center gap-4 text-[15px] text-[#404040] no-underline">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#d9d9d9] bg-[#f8f8f8] text-[#2a2a2a]">
                <Mail className="h-4 w-4" />
              </span>
              {site.email}
            </a>
            <a href="tel:+251912345678" className="flex items-center gap-4 text-[15px] text-[#404040] no-underline">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#d9d9d9] bg-[#f8f8f8] text-[#2a2a2a]">
                <Phone className="h-4 w-4" />
              </span>
              +251 91 234 5678
            </a>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="map_label flex items-center gap-4 text-[15px] text-[var(--accent-bar)] no-underline"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#d9d9d9] bg-[#f8f8f8] text-[#2a2a2a]">
                <MapPin className="h-4 w-4" />
              </span>
              Addis Ababa, Ethiopia
            </a>
          </div>

          <div className="contact_form rounded-2xl border border-white/40 bg-white/75 p-6 shadow-soft backdrop-blur-xl">
            <h4 className="mb-5 font-display font-bold text-2xl text-[#2a2a2a]">Get In Touch Now</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-2 block text-[15px] font-medium">
                  Name <span className="text-red-500">*</span>
                </label>
                <Input
                  required
                  placeholder="Enter Input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-10 w-full rounded-lg border border-[#e0e0e0] bg-white px-3 text-sm transition-colors focus:border-[var(--accent-bar)] focus:ring-2 focus:ring-[var(--accent-bar)]/20 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-[15px] font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  required
                  placeholder="Enter Input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-10 w-full rounded-lg border border-[#e0e0e0] bg-white px-3 text-sm transition-colors focus:border-[var(--accent-bar)] focus:ring-2 focus:ring-[var(--accent-bar)]/20 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-[15px] font-medium">
                  Subject <span className="text-red-500">*</span>
                </label>
                <Input
                  required
                  placeholder="Enter Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="h-10 w-full rounded-lg border border-[#e0e0e0] bg-white px-3 text-sm transition-colors focus:border-[var(--accent-bar)] focus:ring-2 focus:ring-[var(--accent-bar)]/20 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-[15px] font-medium">
                  Message <span className="text-red-500">*</span>
                </label>
                <Textarea
                  required
                  placeholder="Enter Input"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[159px] w-full resize-none rounded-lg border border-[#e0e0e0] bg-white px-3 py-2 text-sm transition-colors focus:border-[var(--accent-bar)] focus:ring-2 focus:ring-[var(--accent-bar)]/20 focus:outline-none"
                />
              </div>
              <Button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Get in touch 👋🏽'}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
