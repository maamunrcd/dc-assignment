import type { ReactNode } from 'react';

interface SectionContainerProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export const SectionContainer = ({
  id,
  children,
  className = '',
}: SectionContainerProps) => (
  <section
    id={id}
    className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
  >
    {children}
  </section>
);
