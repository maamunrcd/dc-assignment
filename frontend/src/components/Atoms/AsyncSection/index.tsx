import type { ReactNode } from 'react';
import { ErrorMessage } from '@/components/Atoms/ErrorMessage';
import {
  SectionSkeleton,
  type SectionSkeletonVariant,
} from '@/components/Atoms/SectionSkeleton';

interface AsyncSectionProps {
  isLoading: boolean;
  isError: boolean;
  onRetry?: () => void;
  errorMessage?: string;
  skeletonClassName?: string;
  skeletonVariant?: SectionSkeletonVariant;
  children: ReactNode;
}

export const AsyncSection = ({
  isLoading,
  isError,
  onRetry,
  errorMessage = 'Something went wrong while loading this section.',
  skeletonClassName,
  skeletonVariant = 'dark',
  children,
}: AsyncSectionProps) => {
  if (isLoading) {
    return (
      <SectionSkeleton className={skeletonClassName} variant={skeletonVariant} />
    );
  }

  if (isError) {
    return (
      <ErrorMessage
        message={errorMessage}
        onRetry={onRetry}
        variant={skeletonVariant === 'light' ? 'light' : 'dark'}
      />
    );
  }

  return <>{children}</>;
};
