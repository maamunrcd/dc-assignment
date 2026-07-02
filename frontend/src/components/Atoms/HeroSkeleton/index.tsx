export const HeroSkeleton = () => (
  <div className="animate-pulse px-4 sm:px-6 lg:px-8" aria-hidden="true">
    <div className="mx-auto max-w-7xl pt-6 pb-6 sm:pt-8 lg:pt-10">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="h-10 w-full max-w-lg rounded-lg bg-white/10 sm:h-12" />
          <div className="h-10 w-3/4 max-w-md rounded-lg bg-white/10 sm:h-12" />
          <div className="h-11 w-36 rounded-full bg-white/10" />
        </div>
        <div className="space-y-3">
          <div className="h-4 w-full rounded bg-white/10" />
          <div className="h-4 w-full rounded bg-white/10" />
          <div className="h-4 w-2/3 rounded bg-white/10" />
        </div>
      </div>
      <div className="mt-10 h-[220px] rounded-2xl bg-white/10 sm:mt-14 sm:h-[320px] lg:h-[420px]" />
    </div>
  </div>
);
