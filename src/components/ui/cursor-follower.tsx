import { useEffect, useState } from 'react';

export function CursorFollower() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="pointer-events-none fixed z-[9999] hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`rounded-full bg-primary transition-all duration-150 ${
            isHovering ? 'w-12 h-12 opacity-20' : 'w-2 h-2 opacity-70'
          }`}
        />
      </div>

      {/* Trailing cursor ring */}
      <div
        className="pointer-events-none fixed z-[9998] hidden md:block transition-all duration-300 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`rounded-full border-2 border-primary/30 transition-all duration-300 ${
            isHovering ? 'w-16 h-16' : 'w-8 h-8'
          }`}
        />
      </div>
    </>
  );
}
