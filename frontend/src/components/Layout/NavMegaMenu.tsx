import { Link } from '@/components/Atoms/Link';
import { cn } from '@/lib/utils/cn';
import type { HeaderNavChild } from '@/types/api';

interface NavMegaMenuProps {
  items: HeaderNavChild[];
  onNavigate?: () => void;
  className?: string;
  variant?: 'desktop' | 'mobile';
  ariaLabel?: string;
}

const menuItemLabelClassName =
  'block text-left font-sans font-extrabold text-[#33F987] transition-colors duration-300';

const getDesktopGridClassName = (count: number) => {
  if (count <= 1) {
    return 'grid-cols-1';
  }

  if (count === 2) {
    return 'grid-cols-2';
  }

  return 'grid-cols-3';
};

export const NavMegaMenu = ({
  items,
  onNavigate,
  className,
  variant = 'desktop',
  ariaLabel = 'Menu',
}: NavMegaMenuProps) => {
  const isMobile = variant === 'mobile';

  return (
    <div
      className={cn(
        isMobile
          ? 'flex flex-col gap-2'
          : cn('grid h-[339px] gap-1.5', getDesktopGridClassName(items.length)),
        className
      )}
      role="menu"
      aria-label={ariaLabel}
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
                'p-4 text-lg leading-tight tracking-[-0.5px]',
                !item.imageUrl && 'min-h-[88px] content-center'
              )}
            >
              {item.label}
            </span>
            {item.imageUrl && (
              <img
                src={item.imageUrl}
                alt=""
                aria-hidden="true"
                decoding="async"
                className="aspect-[16/10] w-full object-cover"
              />
            )}
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
            {item.imageUrl && (
              <img
                src={item.imageUrl}
                alt=""
                aria-hidden="true"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            )}
            <div
              className={cn(
                'absolute inset-0 rounded-[20px] transition-colors duration-300',
                item.imageUrl
                  ? 'bg-[#161616]/0 group-hover:bg-[#161616]/25'
                  : 'bg-[#161616]'
              )}
              aria-hidden="true"
            />
            <span
              className={cn(
                menuItemLabelClassName,
                'relative z-10 max-w-[240px] text-[30px] leading-[30px] tracking-[-1.5px] group-hover:text-white',
                !item.imageUrl && 'flex h-full items-center'
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
