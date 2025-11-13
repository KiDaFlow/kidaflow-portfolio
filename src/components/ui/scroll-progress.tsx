import { useScrollProgress } from '@/hooks/use-scroll-progress';

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-muted/30">
      <div
        className="h-full bg-gradient-primary transition-all duration-150 ease-out shadow-glow"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
