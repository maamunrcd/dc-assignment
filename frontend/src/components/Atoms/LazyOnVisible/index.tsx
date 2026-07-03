import {
  Suspense,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { cn } from '@/lib/utils/cn';

interface LazyOnVisibleProps {
  children: ReactNode;
  fallback: ReactNode;
  className?: string;
  rootMargin?: string;
}

export const LazyOnVisible = ({
  children,
  fallback,
  className,
  rootMargin = '250px',
}: LazyOnVisibleProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={containerRef} className={cn(className)}>
      {isVisible ? (
        <Suspense fallback={fallback}>{children}</Suspense>
      ) : (
        fallback
      )}
    </div>
  );
};
