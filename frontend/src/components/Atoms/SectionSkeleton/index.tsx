import { cn } from '@/lib/utils/cn';

export type SectionSkeletonVariant = 'dark' | 'light';

interface SectionSkeletonProps {
  className?: string;
  variant?: SectionSkeletonVariant;
}

const barStyles: Record<SectionSkeletonVariant, string> = {
  dark: 'bg-white/10',
  light: 'bg-primary-dark/10',
};

export const SectionSkeleton = ({
  className,
  variant = 'dark',
}: SectionSkeletonProps) => (
  <div className={cn('animate-pulse space-y-4', className)} aria-hidden="true">
    <div className={cn('h-8 w-2/3 rounded', barStyles[variant])} />
    <div className={cn('h-4 w-full rounded', barStyles[variant])} />
    <div className={cn('h-4 w-5/6 rounded', barStyles[variant])} />
  </div>
);
