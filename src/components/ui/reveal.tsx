import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  duration?: number;
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 600
}: RevealProps) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, freezeOnceVisible: true });

  const directionClasses = {
    up: 'translate-y-12',
    down: '-translate-y-12',
    left: 'translate-x-12',
    right: '-translate-x-12',
    scale: 'scale-95'
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all',
        !isVisible && `opacity-0 ${directionClasses[direction]}`,
        isVisible && 'opacity-100 translate-y-0 translate-x-0 scale-100',
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {children}
    </div>
  );
}
