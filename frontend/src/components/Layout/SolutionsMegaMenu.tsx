import { Link } from '@/components/Atoms/Link';
import { cn } from '@/lib/utils/cn';
import type { SolutionsMenuItem } from '@/types/api';

interface SolutionsMegaMenuProps {
  items: SolutionsMenuItem[];
  onNavigate?: () => void;
  className?: string;
  variant?: 'desktop' | 'mobile';
}

const menuItemLabelClassName =
  'block text-left font-sans font-extrabold text-[#33F987] transition-colors duration-300';

export const SolutionsMegaMenu = ({
  items,
  onNavigate,
  className,
  variant = 'desktop',
}: SolutionsMegaMenuProps) => {
  const isMobile = variant === 'mobile';

  return (
    <div
      className={cn(
        isMobile
          ? 'flex flex-col gap-2'
          : 'grid h-[339px] grid-cols-3 gap-1.5',
        className
      )}
      role="menu"
      aria-label="Solutions"
    >
      {items.map((item) =>
        isMobile ? (
          <Link
            key={item.id}
            href={item.href}
            variant="unstyled"
            role="menuitem"
            onClick={onNavigate}
            className="group flex flex-col overflow-hidden rounded-[20px] border border-white/25 bg-[#161616] active:bg-white/5"
          >
            <span
              className={cn(
                menuItemLabelClassName,
                'p-4 text-lg leading-tight tracking-[-0.5px]'
              )}
            >
              {item.label}
            </span>
            <img
              src={item.imageUrl}
              alt=""
              aria-hidden="true"
              decoding="async"
              className="aspect-[16/10] w-full object-cover"
            />
          </Link>
        ) : (
          <Link
            key={item.id}
            href={item.href}
            variant="unstyled"
            role="menuitem"
            onClick={onNavigate}
            className="group relative h-full overflow-hidden rounded-[20px] border border-white/25 bg-[#161616] p-6"
          >
            <img
              src={item.imageUrl}
              alt=""
              aria-hidden="true"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <div
              className="absolute inset-0 rounded-[20px] bg-[#161616]/0 transition-colors duration-300 group-hover:bg-[#161616]/25"
              aria-hidden="true"
            />
            <span
              className={cn(
                menuItemLabelClassName,
                'relative z-10 max-w-[240px] text-[30px] leading-[30px] tracking-[-1.5px] group-hover:text-white'
              )}
            >
              {item.label}
            </span>
          </Link>
        )
      )}
    </div>
  );
};
