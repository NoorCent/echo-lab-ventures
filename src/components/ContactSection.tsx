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
    const formId = import.meta.env.VITE_FORMSPREE_ID;
    if (!formId) {
      toast({
        title: 'Form not configured',
        description: 'Add VITE_FORMSPREE_ID to your .env file. See .env.example.',
        variant: 'destructive',
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
        }),
      });
      if (!res.ok) throw new Error('Send failed');
      toast({ title: 'Message sent!', description: "We'll get back to you within 24 hours." });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      toast({
        title: 'Something went wrong',
        description: 'Please try again or email us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden border-t border-[#e8e8e8] dark:border-white/10 bg-[#f5f5f5] dark:bg-[#141414] pt-14 md:pt-20" aria-labelledby="contact-heading">
      <div className="absolute inset-0 bg-dot-pattern opacity-20" aria-hidden />
      <div className="container-narrow relative">
        <SectionHeader id="contact-heading" label="Get in touch" title="Contact Us" />
        <div className="mt-6 max-w-[42rem] md:mt-8">
          <h3 className="contact_sub_title font-display font-bold text-2xl text-[#2a2a2a] dark:text-white md:text-3xl md:leading-tight">
            Let's build something great together
          </h3>
          <p className="contact_sub_content mt-3 text-left text-[15px] leading-[1.7] text-[#404040] dark:text-gray-100 text-justify hyphens-auto md:mt-4 md:text-base">
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
            <a href={`mailto:${site.email}`} className="flex items-center gap-4 text-[15px] text-[#404040] dark:text-gray-200 no-underline hover:text-[var(--accent-bar)]">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#d9d9d9] dark:border-white/10 bg-[#f8f8f8] dark:bg-white/5 text-[#2a2a2a] dark:text-gray-200">
                <Mail className="h-4 w-4" />
              </span>
              {site.email}
            </a>
            <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 text-[15px] text-[#404040] dark:text-gray-200 no-underline hover:text-[var(--accent-bar)]">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#d9d9d9] dark:border-white/10 bg-[#f8f8f8] dark:bg-white/5 text-[#2a2a2a] dark:text-gray-200">
                <Phone className="h-4 w-4" />
              </span>
              {site.phone}
            </a>
            <a
              href="https://maps.google.com/?q=Addis+Ababa,+Ethiopia"
              target="_blank"
              rel="noopener noreferrer"
              className="map_label flex items-center gap-4 text-[15px] text-[var(--accent-bar)] no-underline"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#d9d9d9] dark:border-white/10 bg-[#f8f8f8] dark:bg-white/5 text-[#2a2a2a] dark:text-gray-200">
                <MapPin className="h-4 w-4" />
              </span>
              {site.address}
            </a>
          </div>

          <div className="contact_form rounded-2xl border border-white/40 dark:border-white/10 bg-white/75 dark:bg-white/5 p-6 shadow-soft backdrop-blur-xl">
            <h4 className="mb-5 font-display font-bold text-2xl text-[#2a2a2a] dark:text-white">Get In Touch Now</h4>
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
                  className="h-10 w-full rounded-lg border border-[#e0e0e0] dark:border-white/10 bg-white dark:bg-white/5 px-3 text-sm text-[#2a2a2a] dark:text-gray-100 transition-colors focus:border-[var(--accent-bar)] focus:ring-2 focus:ring-[var(--accent-bar)]/20 focus:outline-none"
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
                  className="h-10 w-full rounded-lg border border-[#e0e0e0] dark:border-white/10 bg-white dark:bg-white/5 px-3 text-sm text-[#2a2a2a] dark:text-gray-100 transition-colors focus:border-[var(--accent-bar)] focus:ring-2 focus:ring-[var(--accent-bar)]/20 focus:outline-none"
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
                  className="h-10 w-full rounded-lg border border-[#e0e0e0] dark:border-white/10 bg-white dark:bg-white/5 px-3 text-sm text-[#2a2a2a] dark:text-gray-100 transition-colors focus:border-[var(--accent-bar)] focus:ring-2 focus:ring-[var(--accent-bar)]/20 focus:outline-none"
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
                  className="min-h-[159px] w-full resize-none rounded-lg border border-[#e0e0e0] dark:border-white/10 bg-white dark:bg-white/5 px-3 py-2 text-sm text-[#2a2a2a] dark:text-gray-100 transition-colors focus:border-[var(--accent-bar)] focus:ring-2 focus:ring-[var(--accent-bar)]/20 focus:outline-none"
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
