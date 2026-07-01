interface SpinnerProps {
  fullPage?: boolean;
  label?: string;
}

export const Spinner = ({
  fullPage = false,
  label = 'Loading...',
}: SpinnerProps) => {
  const spinner = (
    <div className="flex flex-col items-center gap-3" role="status" aria-live="polite">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-accent border-t-transparent" />
      <span className="text-sm text-muted">{label}</span>
    </div>
  );

  if (fullPage) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-primary-dark">
        {spinner}
      </div>
    );
  }

  return spinner;
};
