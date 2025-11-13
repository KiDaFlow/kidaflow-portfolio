import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TypingTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
  className?: string;
}

export function TypingText({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 2000,
  className = ''
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), delayBetween);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentIndex, texts, typingSpeed, deletingSpeed, delayBetween]);

  return (
    <span className={cn('inline-flex items-center', className)}>
      {displayedText}
      <span className="ml-1 inline-block w-0.5 h-[1em] bg-current animate-pulse" />
    </span>
  );
}
