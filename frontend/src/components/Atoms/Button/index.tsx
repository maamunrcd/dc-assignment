import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-primary-dark hover:bg-accent-hover border border-accent',
  secondary:
    'bg-transparent text-white border border-white/30 hover:border-accent hover:text-accent',
  ghost:
    'bg-transparent text-accent border border-accent/40 hover:border-accent hover:bg-accent/10',
};

export const Button = ({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) => (
  <button
    className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${variantClasses[variant]} ${className}`}
    {...props}
  >
    {children}
  </button>
);
