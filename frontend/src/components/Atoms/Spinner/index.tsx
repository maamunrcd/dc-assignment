import { cn } from '@/lib/utils/cn';

export const Spinner = ({ className }: { className?: string }) => (
  <div
    className={cn(
      'h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent',
      className
    )}
    role="status"
    aria-label="Loading"
  />
);
