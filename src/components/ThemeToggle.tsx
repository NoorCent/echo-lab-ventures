import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#e8e8e8] dark:border-white/10 bg-[#f8f8f8] dark:bg-white/5" aria-hidden />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="theme-toggle group relative flex h-9 w-9 items-center justify-center rounded-lg border border-[#e8e8e8] dark:border-white/10 bg-[#f8f8f8] dark:bg-white/5 text-[#2a2a2a] dark:text-gray-100 transition-all duration-300 hover:border-[var(--accent-bar)]/40 hover:bg-[var(--accent-bar)]/10 dark:hover:bg-[var(--accent-bar)]/20 focus:outline-none focus:ring-2 focus:ring-[var(--accent-bar)]/50 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#0f0f0f]"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="relative flex h-4 w-4 items-center justify-center overflow-hidden">
        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
      </span>
    </button>
  );
}
