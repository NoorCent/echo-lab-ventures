import { useState, useEffect } from 'react';
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

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 shadow-soft-lg backdrop-blur-md'
          : 'bg-white'
      }`}
      aria-label="Main navigation"
    >
      <div className="flex h-10 items-center justify-center bg-[var(--accent-bar)]">
        <p className="text-white font-semibold text-sm md:text-base text-center px-4">
          We build systems that scale — backend, frontend & full-stack.
        </p>
      </div>

      <div className="container-narrow flex items-center justify-between h-16 md:h-[4rem]">
        <a
          href="#"
          className="font-display font-bold text-[#2a2a2a] text-lg link-underline"
          aria-label={`${site.name} — Home`}
        >
          {site.name}
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="nav-link relative py-2 text-sm font-medium text-[#2a2a2a] transition-colors hover:text-[var(--accent-bar)]"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#contact" className="rounded-full bg-[#2a2a2a] px-5 py-2.5 text-sm font-medium text-white shadow-soft transition-all hover:bg-[var(--accent-bar)] hover:shadow-[0_4px_20px_rgba(13,148,136,0.35)]">
            Get in touch
          </a>
        </div>

        <button
          type="button"
          className="md:hidden p-2 text-[#2a2a2a] rounded-md hover:bg-black/5"
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
            className="md:hidden border-t border-border bg-white"
          >
            <nav className="container-narrow py-6 flex flex-col gap-1" aria-label="Mobile">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="py-3 text-[#2a2a2a] font-medium"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {label}
                </a>
              ))}
              <a href="#contact" className="btn-primary mt-4 w-full justify-center" onClick={() => setIsMobileOpen(false)}>
                Get in touch
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
