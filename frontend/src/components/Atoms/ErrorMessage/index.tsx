interface ErrorMessageProps {
  message?: string;
  onRetry?: () => void;
}

export const ErrorMessage = ({
  message = 'Failed to load content.',
  onRetry,
}: ErrorMessageProps) => (
  <div
    className="rounded-2xl border border-red-500/30 bg-red-500/10 p-6 text-center"
    role="alert"
  >
    <p className="text-sm text-red-200 sm:text-base">{message}</p>
    {onRetry ? (
      <button
        type="button"
        onClick={onRetry}
        className="mt-4 rounded-full border border-red-300/40 px-5 py-2 text-sm font-medium text-red-100 transition hover:bg-red-500/20"
      >
        Try again
      </button>
    ) : null}
  </div>
);
