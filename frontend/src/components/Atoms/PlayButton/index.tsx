interface PlayButtonProps {
  onClick?: () => void;
  size?: 'md' | 'lg';
}

export const PlayButton = ({ onClick, size = 'lg' }: PlayButtonProps) => {
  const sizeClasses =
    size === 'lg'
      ? 'h-20 w-20 sm:h-24 sm:w-24'
      : 'h-14 w-14 sm:h-16 sm:w-16';

  const triangleClasses =
    size === 'lg'
      ? 'border-y-[10px] border-l-[16px] sm:border-y-[12px] sm:border-l-[20px]'
      : 'border-y-[8px] border-l-[14px]';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative inline-flex ${sizeClasses} items-center justify-center rounded-full border-2 border-accent bg-accent/15 shadow-[0_0_40px_rgba(0,255,65,0.25)] backdrop-blur-sm transition hover:scale-105 hover:bg-accent/25`}
      aria-label="Play introduction video"
    >
      <span
        className={`ml-1 inline-block h-0 w-0 ${triangleClasses} border-y-transparent border-l-accent`}
      />
      <span className="absolute inset-0 rounded-full border border-accent/30 opacity-60 transition group-hover:opacity-100" />
    </button>
  );
};
