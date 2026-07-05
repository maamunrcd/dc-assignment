import { cn } from '@/lib/utils/cn';
import type { SolutionFeature } from '@/types/api';

interface SolutionFeatureCardProps {
  feature: SolutionFeature;
}

export const SolutionFeatureCard = ({ feature }: SolutionFeatureCardProps) => (
  <article
    className={cn(
      'group flex min-h-[280px] w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-black/5 bg-white p-6 transition-[background-color,border-color] duration-500 ease-in-out sm:min-h-[360px] lg:h-[450px] lg:p-8',
      'hover:items-stretch hover:justify-between hover:border-transparent hover:bg-[#0a1f17]',
      'active:items-stretch active:justify-between active:border-transparent active:bg-[#0a1f17]'
    )}
  >
    <h4
      className={cn(
        'text-center font-sans text-2xl font-extrabold leading-8 tracking-[-1.2px] text-[#161616] transition-colors duration-500 ease-in-out',
        'sm:text-[32px] sm:leading-9 sm:tracking-[-1.6px]',
        'group-hover:text-left group-hover:text-[#33F987]',
        'group-active:text-left group-active:text-[#33F987]'
      )}
    >
      {feature.title}
    </h4>

    <p
      className={cn(
        'mt-0 max-h-0 overflow-hidden text-sm leading-relaxed text-white opacity-0 transition-all duration-500 ease-in-out',
        'sm:text-[15px] sm:leading-6',
        'group-hover:mt-4 group-hover:max-h-72 group-hover:opacity-100',
        'group-active:mt-4 group-active:max-h-72 group-active:opacity-100'
      )}
    >
      {feature.description}
    </p>
  </article>
);
