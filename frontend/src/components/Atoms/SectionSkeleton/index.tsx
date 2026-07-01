interface SectionSkeletonProps {
  lines?: number;
}

export const SectionSkeleton = ({ lines = 3 }: SectionSkeletonProps) => (
  <div className="animate-pulse space-y-4" aria-hidden="true">
    <div className="h-8 w-2/3 rounded-lg bg-white/10" />
    {Array.from({ length: lines }).map((_, index) => (
      <div key={index} className="h-4 w-full rounded bg-white/10" />
    ))}
  </div>
);
