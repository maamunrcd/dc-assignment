import { Button } from '@/components/Atoms/Button';
import { cn } from '@/lib/utils/cn';

type ErrorMessageVariant = 'dark' | 'light';

interface ErrorMessageProps {
  message?: string;
  onRetry?: () => void;
  variant?: ErrorMessageVariant;
}

const variantStyles: Record<ErrorMessageVariant, { container: string; text: string }> =
  {
    dark: {
      container: 'border-red-500/30 bg-red-500/10',
      text: 'text-red-200',
    },
    light: {
      container: 'border-red-500/20 bg-red-50',
      text: 'text-red-700',
    },
  };

export const ErrorMessage = ({
  message = 'Something went wrong while loading this section.',
  onRetry,
  variant = 'dark',
}: ErrorMessageProps) => (
  <div
    className={cn(
      'rounded-2xl border p-6 text-center',
      variantStyles[variant].container
    )}
    role="alert"
  >
    <p className={cn('text-sm', variantStyles[variant].text)}>{message}</p>
    {onRetry && (
      <Button variant="outline" className="mt-4" onClick={onRetry}>
        Try again
      </Button>
    )}
  </div>
);
