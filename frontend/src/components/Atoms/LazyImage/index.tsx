import { useState, type ImgHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallbackClassName?: string;
}

export const LazyImage = ({
  alt,
  className,
  fallbackClassName,
  onError,
  ...props
}: LazyImageProps) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={cn(
          'flex items-center justify-center rounded-lg bg-white/5 text-xs text-white/50',
          fallbackClassName,
          className
        )}
        role="img"
        aria-label={alt || 'Image unavailable'}
      />
    );
  }

  return (
    <img
      alt={alt}
      className={className}
      loading="lazy"
      onError={(event) => {
        setHasError(true);
        onError?.(event);
      }}
      {...props}
    />
  );
};
