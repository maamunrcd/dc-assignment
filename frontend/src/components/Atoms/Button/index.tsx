import { cn } from '@/lib/utils/cn';
import type { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'glass';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-primary-dark hover:bg-accent-dim border border-accent',
  outline:
    'border border-white/30 text-white hover:border-accent hover:text-accent bg-transparent',
  ghost: 'text-white hover:text-accent bg-transparent',
  glass:
    'border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/15',
};

export const Button = ({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps) => (
  <button
    className={cn(
      'inline-flex h-[50px] items-center justify-center rounded-[15px] px-6 text-sm font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50',
      variantStyles[variant],
      className
    )}
    {...props}
  >
    {children}
  </button>
);
