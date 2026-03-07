import { useState, useEffect, type MouseEvent } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { site } from '@/data/site';

const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#team', label: 'Team' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const scrollToHash = (href: string) => {
    const hash = href.replace('#', '');

    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
      return;
    }

    const target = document.getElementById(hash);
    if (!target) return;

    const navOffset = 96;
    const top = target.getBoundingClientRect().top + window.scrollY - navOffset;

    window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
    window.history.replaceState(null, '', `#${hash}`);
  };

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string, closeMobileFirst = false) => {
    if (!href.startsWith('#')) return;

    event.preventDefault();

    if (closeMobileFirst) {
      setIsMobileOpen(false);
      window.setTimeout(() => {
        scrollToHash(href);
      }, 240);
      return;
    }

    scrollToHash(href);
    setIsMobileOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!window.location.hash) return;
    scrollToHash(window.location.hash);
  }, []);

  return (
    <header
      className={`md:py-2 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#0f0f0f]/95 shadow-soft-lg backdrop-blur-md'
          : 'bg-white dark:bg-[#0f0f0f]'
      }`}
      aria-label="Main navigation"
    >
      {/* <div className="flex h-10 items-center justify-center bg-[var(--accent-bar)]">
        <p className="text-white font-semibold text-sm md:text-base text-center px-4">
          We build systems that scale — backend, frontend & full-stack.
        </p>
      </div> */}

      <div className="container-narrow flex items-center justify-between h-16 md:h-[4rem]">
        <a
          href="#"
          className="font-display font-bold text-[#2a2a2a] dark:text-white text-lg link-underline"
          aria-label={`${site.name} — Home`}
          onClick={(event) => handleNavClick(event, '#')}
        >
          {site.name}
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="nav-link relative py-2 text-sm font-medium text-[#2a2a2a] dark:text-gray-200 transition-colors hover:text-[var(--accent-bar)]"
              onClick={(event) => handleNavClick(event, href)}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#contact" className="rounded-full bg-[#2a2a2a] dark:bg-[#2563eb] px-5 py-2.5 text-sm font-medium text-white shadow-soft transition-all hover:bg-[var(--accent-bar)] dark:hover:bg-[#3b82f6] hover:shadow-[0_4px_20px_rgba(13,148,136,0.35)] dark:hover:shadow-[0_4px_20px_rgba(59,130,246,0.45)]" onClick={(event) => handleNavClick(event, '#contact')}>
            Get in touch
          </a>
        </div>

        <button
          type="button"
          className="md:hidden p-2 text-[#2a2a2a] dark:text-gray-200 rounded-md hover:bg-black/5 dark:hover:bg-white/10"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-expanded={isMobileOpen}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border dark:border-white/10 bg-white dark:bg-[#0f0f0f]"
          >
            <nav className="container-narrow py-6 flex flex-col gap-1" aria-label="Mobile">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="py-3 text-[#2a2a2a] dark:text-gray-200 font-medium"
                  onClick={(event) => handleNavClick(event, href, true)}
                >
                  {label}
                </a>
              ))}
              <a href="#contact" className="btn-primary mt-4 w-full justify-center" onClick={(event) => handleNavClick(event, '#contact', true)}>
                Get in touch
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
