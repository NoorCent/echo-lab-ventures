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
      <div className="absolute inset-0 bg-hero-mesh opacity-[0.7]" />
      {/* Soft orbs */}
      <div className="absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-[#e8e8e8] animate-hero-shape-1 opacity-60" />
      <div className="absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-[#ebebeb] animate-hero-shape-2 opacity-50" />
      <div className="absolute bottom-1/4 left-1/3 h-72 w-72 rounded-full bg-[#e5e5e5] animate-hero-shape-3 opacity-55" />
      {/* Teal accent glow (very subtle) */}
      <div
        className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06] blur-3xl animate-pulse-slow"
        style={{ background: 'radial-gradient(circle, #0d9488 0%, transparent 70%)' }}
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
