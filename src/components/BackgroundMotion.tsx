/**
 * Subtle moving orbs in the background   inspiration only, not a clone of any reference.
 * Kept minimal so they don’t distract from content.
 */
export function BackgroundMotion() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {/* Soft orbs   teal accent */}
      <div
        className="absolute -top-32 right-0 h-[420px] w-[420px] rounded-full opacity-[0.1] blur-3xl animate-orb-drift"
        style={{
          background: 'radial-gradient(circle, #0d9488 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute left-[-10%] top-[35%] h-[280px] w-[280px] rounded-full opacity-[0.08] blur-3xl animate-orb-drift-slow"
        style={{
          background: 'radial-gradient(circle, #0f766e 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-[15%] right-[5%] h-[200px] w-[200px] rounded-full opacity-[0.07] blur-2xl animate-orb-drift"
        style={{
          background: 'radial-gradient(circle, #0d9488 0%, transparent 70%)',
        }}
      />
    </div>
  );
}
