interface ErrorFallbackProps {
  onReset: () => void;
}

export const ErrorFallback = ({ onReset }: ErrorFallbackProps) => (
  <div className="flex min-h-screen flex-col items-center justify-center bg-primary-dark px-4 text-center">
    <h1 className="text-2xl font-bold text-white">Something went wrong</h1>
    <p className="mt-3 max-w-md text-sm text-white/70">
      An unexpected error occurred while rendering the page. Please try again.
    </p>
    <button
      type="button"
      onClick={onReset}
      className="mt-6 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-primary-dark"
    >
      Reload page
    </button>
  </div>
);
