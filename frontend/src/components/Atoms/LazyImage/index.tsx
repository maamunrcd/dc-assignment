import { useState, type ImgHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallbackClassName?: string;
  priority?: boolean;
}

export const LazyImage = ({
  alt,
  className,
  fallbackClassName,
  priority = false,
  loading,
  fetchPriority,
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
      loading={loading ?? (priority ? 'eager' : 'lazy')}
      fetchPriority={fetchPriority ?? (priority ? 'high' : undefined)}
      decoding="async"
      onError={(event) => {
        setHasError(true);
        onError?.(event);
      }}
      {...props}
    />
  );
};
