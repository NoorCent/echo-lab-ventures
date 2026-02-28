import { useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
};

export function TiltCard({ children, className = '', maxTilt = 12 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const spring = { stiffness: 300, damping: 25 };
  const rotateX = useSpring(useTransform(y, [0, 1], [maxTilt, -maxTilt]), spring);
  const rotateY = useSpring(useTransform(x, [0, 1], [-maxTilt, maxTilt]), spring);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    const mx = (e.clientX - rect.left) / w;
    const my = (e.clientY - rect.top) / h;
    x.set(mx);
    y.set(my);
  };

  const handleLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div className="perspective-[1000px]" style={{ transformStyle: 'preserve-3d' }}>
      <motion.div
        ref={ref}
        className={className}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
