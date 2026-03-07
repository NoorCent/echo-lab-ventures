/**
 * Hero: gradient mesh + subtle motion + floating 3D-style shape.
 */
export function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-b-3xl"
      aria-hidden
    >
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 bg-hero-mesh opacity-[0.7] dark:opacity-100 dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(96,165,250,0.12)_0%,transparent_50%),radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(59,130,246,0.08)_0%,transparent_45%)]" />
      {/* Soft orbs */}
      <div className="absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-[#e8e8e8] dark:bg-[#60a5fa]/10 animate-hero-shape-1 opacity-60 dark:opacity-80" />
      <div className="absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-[#ebebeb] dark:bg-[#2563eb]/10 animate-hero-shape-2 opacity-50 dark:opacity-70" />
      <div className="absolute bottom-1/4 left-1/3 h-72 w-72 rounded-full bg-[#e5e5e5] dark:bg-[#60a5fa]/8 animate-hero-shape-3 opacity-55 dark:opacity-60" />
      {/* Accent glow — teal in light, blue in dark */}
      <div
        className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06] blur-3xl animate-pulse-slow dark:opacity-[0.14] dark:blur-[100px]"
        style={{ background: 'radial-gradient(circle, #0d9488 0%, transparent 70%)' }}
      />
      <div
        className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 dark:opacity-100 blur-[80px] animate-pulse-slow hidden dark:block"
        style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.22) 0%, transparent 65%)' }}
        aria-hidden
      />
      {/* Floating 3D-style cube (CSS 3D) */}
      <div className="absolute right-[12%] top-[25%] hidden md:block">
        <div className="floating-cube h-24 w-24">
          <div className="cube-inner">
            <div className="cube-face cube-front" />
            <div className="cube-face cube-back" />
            <div className="cube-face cube-right" />
            <div className="cube-face cube-left" />
            <div className="cube-face cube-top" />
            <div className="cube-face cube-bottom" />
          </div>
        </div>
      </div>
    </div>
  );
}
