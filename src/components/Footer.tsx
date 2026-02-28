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
    <footer className="footer-gradient-border mt-0 bg-white section-padding" aria-label="Site footer">
      <div className="container-narrow">
        <div className="footer_top mb-10 flex flex-col gap-8 md:mb-12 md:flex-row md:items-start md:justify-between">
          <div className="footer_logo">
            <a href="#" className="font-display text-xl font-bold text-[#2a2a2a]">
              {site.name}
            </a>
            <div className="footer_social mt-4">
              <span className="mb-2 block text-sm font-medium text-[#2a2a2a]">Follow Us:</span>
              <div className="flex gap-3">
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#e8e8e8] bg-[#f8f8f8] text-[#2a2a2a] transition-all hover:scale-105 hover:border-[#2a2a2a] hover:bg-[#2a2a2a] hover:text-white" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#e8e8e8] bg-[#f8f8f8] text-[#2a2a2a] transition-all hover:scale-105 hover:border-[#2a2a2a] hover:bg-[#2a2a2a] hover:text-white" aria-label="GitHub"><Github className="h-4 w-4" /></a>
              </div>
            </div>
          </div>
          <div className="footer_contact flex flex-col gap-3">
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-[#2a2a2a] no-underline">
              <Mail className="h-4 w-4" />
              <span>{site.email}</span>
            </a>
            <a href="tel:+251912345678" className="flex items-center gap-3 text-[#2a2a2a] no-underline">
              <Phone className="h-4 w-4" />
              <span>+251 91 234 5678</span>
            </a>
          </div>
        </div>

        <div className="footer__menu grid gap-8 border-t border-[#e6e6e6] pt-10 md:grid-cols-3">
          <div>
            <h2 className="mb-4 font-display text-lg font-bold text-[#2a2a2a]">Company</h2>
            <ul className="space-y-2">
              {companyLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="footer-link inline-block text-sm text-[#2a2a2a]/80 transition-colors hover:text-[#2a2a2a]">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-4 font-display text-lg font-bold text-[#2a2a2a]">Services</h2>
            <ul className="space-y-2">
              {servicesLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="footer-link inline-block text-sm text-[#2a2a2a]/80 transition-colors hover:text-[#2a2a2a]">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer_bottom mt-10 border-t border-[#e6e6e6] pt-8">
          <p className="text-sm text-[#2a2a2a]/60">
            © {new Date().getFullYear()} {site.name} | All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
