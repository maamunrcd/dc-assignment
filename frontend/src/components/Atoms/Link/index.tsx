import { cn } from '@/lib/utils/cn';
import type { AnchorHTMLAttributes } from 'react';

export type LinkVariant =
  | 'inline'
  | 'unstyled'
  | 'nav'
  | 'nav-mobile'
  | 'footer-legal'
  | 'footer-social'
  | 'hero'
  | 'dark'
  | 'outline-light'
  | 'glass'
  | 'glass-full';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: LinkVariant;
  external?: boolean;
}

const variantStyles: Record<LinkVariant, string> = {
  inline: 'transition-colors hover:text-accent',
  unstyled: '',
  nav: 'text-xs font-medium text-white/95 transition-colors hover:text-accent lg:text-sm',
  'nav-mobile':
    'block rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-accent',
  'footer-legal':
    'underline underline-offset-4 transition-colors hover:text-accent',
  'footer-social': 'transition-colors hover:text-accent',
  hero: 'inline-flex h-[50px] items-center justify-center rounded-[15px] border border-[#33F987] bg-[#33F987] px-6 text-sm font-semibold text-primary-dark transition-colors duration-200 hover:brightness-95',
  dark: 'inline-flex h-[50px] items-center justify-center rounded-[15px] bg-primary-dark px-6 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90',
  'outline-light':
    'inline-flex h-[50px] items-center justify-center rounded-[15px] border-2 border-[rgba(255,255,255,0.35)] px-6 text-sm font-semibold text-[#EFEFEF] transition-colors duration-200 hover:bg-white/10',
  glass:
    'inline-flex h-[50px] items-center justify-center rounded-[15px] border-0 bg-white/18 px-5 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/25 lg:px-6 lg:text-sm',
  'glass-full':
    'inline-flex h-[50px] w-full items-center justify-center rounded-[15px] border border-white/20 bg-white/10 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15',
};

const isExternalHref = (href: string) =>
  /^https?:\/\//i.test(href) || href.startsWith('//');

export const Link = ({
  href,
  variant = 'inline',
  external,
  className,
  children,
  target,
  rel,
  ...props
}: LinkProps) => {
  const isExternal = external ?? isExternalHref(href);

  return (
    <a
      href={href}
      className={cn(variantStyles[variant], className)}
      target={target ?? (isExternal ? '_blank' : undefined)}
      rel={rel ?? (isExternal ? 'noopener noreferrer' : undefined)}
      {...props}
    >
      {children}
    </a>
  );
};
