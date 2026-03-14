import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { site } from '@/data/site';

const companyLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

const servicesLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Technologies', href: '#skills' },
];

export const Footer = () => {
  return (
    <footer className="footer-gradient-border mt-0 bg-white dark:bg-[#0f0f0f] section-padding" aria-label="Site footer">
      <div className="container-narrow">
        <div className="footer_top mb-10 flex flex-col gap-8 md:mb-12 md:flex-row md:items-start md:justify-between">
          <div className="footer_logo">
            <a href="#">
              <img
                src={site.logoUrl}
                alt={site.name}
                className="h-10 w-auto object-contain"
              />
            </a>
            <div className="footer_social mt-4">
              <span className="mb-2 block text-sm font-medium text-[#2a2a2a] dark:text-gray-200">Follow Us:</span>
              <div className="flex gap-3">
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#e8e8e8] dark:border-white/10 bg-[#f8f8f8] dark:bg-white/5 text-[#2a2a2a] dark:text-gray-100 transition-all hover:scale-105 hover:border-[#2a2a2a] dark:hover:border-[var(--accent-bar)] hover:bg-[#2a2a2a] dark:hover:bg-[var(--accent-bar)] hover:text-white" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#e8e8e8] dark:border-white/10 bg-[#f8f8f8] dark:bg-white/5 text-[#2a2a2a] dark:text-gray-100 transition-all hover:scale-105 hover:border-[#2a2a2a] dark:hover:border-[var(--accent-bar)] hover:bg-[#2a2a2a] dark:hover:bg-[var(--accent-bar)] hover:text-white" aria-label="GitHub"><Github className="h-4 w-4" /></a>
              </div>
            </div>
          </div>
          <div className="footer_contact flex flex-col gap-3">
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-[#2a2a2a] dark:text-gray-100 no-underline hover:text-[var(--accent-bar)]">
              <Mail className="h-4 w-4" />
              <span>{site.email}</span>
            </a>
            <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-[#2a2a2a] dark:text-gray-100 no-underline hover:text-[var(--accent-bar)]">
              <Phone className="h-4 w-4" />
              <span>{site.phone}</span>
            </a>
          </div>
        </div>

        <div className="footer__menu grid gap-8 border-t border-[#e6e6e6] dark:border-white/10 pt-10 md:grid-cols-3">
          <div>
            <h2 className="mb-4 font-display text-lg font-bold text-[#2a2a2a] dark:text-white">Company</h2>
            <ul className="space-y-2">
              {companyLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="footer-link inline-block text-sm text-[#2a2a2a]/80 dark:text-gray-300 transition-colors hover:text-[#2a2a2a] dark:hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-4 font-display text-lg font-bold text-[#2a2a2a] dark:text-white">Services</h2>
            <ul className="space-y-2">
              {servicesLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="footer-link inline-block text-sm text-[#2a2a2a]/80 dark:text-gray-300 transition-colors hover:text-[#2a2a2a] dark:hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer_bottom mt-10 border-t border-[#e6e6e6] dark:border-white/10 pt-8">
          <p className="text-sm text-[#2a2a2a]/60 dark:text-gray-400">
            © {new Date().getFullYear()} {site.name} | All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
