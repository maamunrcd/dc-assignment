import { cn } from '@/lib/utils/cn';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: 'section' | 'div';
}

export const SectionContainer = ({
  children,
  className,
  id,
  as: Component = 'section',
}: SectionContainerProps) => (
  <Component
    id={id}
    className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}
  >
    {children}
  </Component>
);
