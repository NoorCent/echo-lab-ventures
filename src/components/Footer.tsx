import type { SVGProps } from 'react';
import { Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';
import { site } from '@/data/site';

const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TikTokIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.21 8.21 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.14z" />
  </svg>
);

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'X (Twitter)': XIcon,
  'TikTok': TikTokIcon,
  'Facebook': Facebook,
  'Instagram': Instagram,
  'LinkedIn': Linkedin,
};

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
            <p className="mt-3 max-w-xs text-sm text-[#2a2a2a]/60 dark:text-gray-400 leading-relaxed">
              {site.tagline}
            </p>
          </div>
          <div className="footer_contact flex flex-col gap-3">
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-sm text-[#2a2a2a] dark:text-gray-100 no-underline hover:text-[var(--accent-bar)]">
              <Mail className="h-4 w-4" />
              <span>{site.email}</span>
            </a>
            <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm text-[#2a2a2a] dark:text-gray-100 no-underline hover:text-[var(--accent-bar)]">
              <Phone className="h-4 w-4" />
              <span>{site.phone}</span>
            </a>
          </div>
        </div>

        <div className="footer__menu grid gap-8 border-t border-[#e6e6e6] dark:border-white/10 pt-10 md:grid-cols-3">
          <div>
            <h2 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-[#2a2a2a] dark:text-white">Company</h2>
            <ul className="space-y-2.5">
              {companyLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="footer-link inline-block text-sm text-[#2a2a2a]/60 dark:text-gray-400 transition-colors hover:text-[var(--accent-bar)]">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-[#2a2a2a] dark:text-white">Services</h2>
            <ul className="space-y-2.5">
              {servicesLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="footer-link inline-block text-sm text-[#2a2a2a]/60 dark:text-gray-400 transition-colors hover:text-[var(--accent-bar)]">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-[#2a2a2a] dark:text-white">Follow us</h2>
            <div className="flex flex-wrap gap-2.5">
              {site.socials.map(({ label, href }) => {
                const Icon = socialIcons[label];
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-[#e8e8e8] dark:border-white/10 bg-[#f8f8f8] dark:bg-white/5 px-3 py-2 text-xs font-medium text-[#2a2a2a]/70 dark:text-gray-300 transition-all hover:border-[var(--accent-bar)]/30 hover:bg-[var(--accent-bar)]/10 hover:text-[var(--accent-bar)]"
                  >
                    {Icon && <Icon className="h-3.5 w-3.5" />}
                    {label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="footer_bottom mt-10 border-t border-[#e6e6e6] dark:border-white/10 pt-8">
          <p className="text-sm text-[#2a2a2a]/60 dark:text-gray-400">
            © {new Date().getFullYear()} {site.name} | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
