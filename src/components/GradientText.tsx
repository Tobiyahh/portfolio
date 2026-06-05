import { useState, useCallback, useEffect, useRef, ReactNode } from 'react';
import { motion, useMotionValue, useAnimationFrame, useTransform } from 'motion/react';
import './GradientText.css';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
  direction?: 'horizontal' | 'vertical' | 'diagonal';
  pauseOnHover?: boolean;
  yoyo?: boolean;
  mouseReactive?: boolean;
}

export default function GradientText({
  children,
  className = '',
  colors = ['#5227FF', '#FF9FFC', '#B497CF'],
  animationSpeed = 8,
  showBorder = false,
  direction = 'horizontal',
  pauseOnHover = false,
  yoyo = true,
  mouseReactive = false
}: GradientTextProps) {
  const [isPaused, setIsPaused] = useState(false);
  const progress = useMotionValue(0);
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const isHovering = useMotionValue(0);
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const animationDuration = animationSpeed * 1000;

  useAnimationFrame((time: number) => {
    if (isPaused) {
      lastTimeRef.current = null;
      return;
    }

    if (lastTimeRef.current === null) {
      lastTimeRef.current = time;
      return;
    }

    const deltaTime = time - lastTimeRef.current;
    lastTimeRef.current = time;
    elapsedRef.current += deltaTime;

    if (yoyo) {
      const fullCycle = animationDuration * 2;
      const cycleTime = elapsedRef.current % fullCycle;

      if (cycleTime < animationDuration) {
        progress.set((cycleTime / animationDuration) * 100);
      } else {
        progress.set(100 - ((cycleTime - animationDuration) / animationDuration) * 100);
      }
    } else {
      // Continuously increase position for seamless looping
      progress.set((elapsedRef.current / animationDuration) * 100);
    }
  });

  useEffect(() => {
    elapsedRef.current = 0;
    progress.set(0);
  }, [animationSpeed, progress, yoyo]);

  const backgroundImage = useTransform(
    [isHovering, mouseX, mouseY, progress],
    ([hovering, x, y, p]) => {
      const gradientColorsList = [...colors, colors[0]].join(', ');
      if (mouseReactive && hovering === 1) {
         return `radial-gradient(circle at ${x}% ${y}%, ${colors[0]} 0%, ${colors[1] || colors[0]} 50%, ${colors[2] || colors[1] || colors[0]} 100%)`;
      }
      const gradientAngle =
        direction === 'horizontal' ? 'to right' : direction === 'vertical' ? 'to bottom' : 'to bottom right';
      return `linear-gradient(${gradientAngle}, ${gradientColorsList})`;
    }
  );

  const backgroundSize = useTransform(
    [isHovering],
    ([hovering]) => {
      if (mouseReactive && hovering === 1) {
        return '100% 100%';
      }
      return direction === 'horizontal' ? '300% 100%' : direction === 'vertical' ? '100% 300%' : '300% 300%';
    }
  );

  const backgroundPosition = useTransform(
    [isHovering, progress],
    ([hovering, p]) => {
      if (mouseReactive && hovering === 1) {
        return `0% 0%`;
      }
      if (direction === 'horizontal') {
        return `${p}% 50%`;
      } else if (direction === 'vertical') {
        return `50% ${p}%`;
      } else {
        // For diagonal, move only horizontally to avoid interference patterns
        return `${p}% 50%`;
      }
    }
  );

  const handleMouseEnter = useCallback(() => {
    isHovering.set(1);
    if (pauseOnHover) setIsPaused(true);
  }, [pauseOnHover, isHovering]);

  const handleMouseLeave = useCallback(() => {
    isHovering.set(0);
    if (pauseOnHover) setIsPaused(false);
  }, [pauseOnHover, isHovering]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!mouseReactive) return;
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseReactive, mouseX, mouseY]);

  return (
    <motion.div
      ref={containerRef}
      className={`animated-gradient-text ${showBorder ? 'with-border' : ''} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {showBorder && <motion.div className="gradient-overlay" style={{ backgroundImage: backgroundImage as any, backgroundSize: backgroundSize as any, backgroundPosition: backgroundPosition as any, backgroundRepeat: 'repeat' }} />}
      <motion.div className="text-content" style={{ backgroundImage: backgroundImage as any, backgroundSize: backgroundSize as any, backgroundPosition: backgroundPosition as any, backgroundRepeat: 'repeat' }}>
        {children}
      </motion.div>
    </motion.div>
  );
}
