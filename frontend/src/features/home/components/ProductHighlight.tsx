import type { HomeData } from '@/features/home/types';

interface ProductHighlightProps {
  data: HomeData['productHighlight'];
}

export const ProductHighlight = ({ data }: ProductHighlightProps) => (
  <section id="about" className="w-full">
    <div className="grid lg:grid-cols-2">
      <div className="flex flex-col justify-center bg-accent px-6 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <h2 className="max-w-lg text-2xl font-bold leading-tight text-primary-dark sm:text-3xl lg:text-4xl">
          {data.title}
        </h2>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-dark/75 sm:text-base">
          {data.description}
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-bold text-primary-dark underline-offset-4 transition hover:underline sm:text-base"
        >
          {data.ctaLabel}
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="relative flex min-h-[280px] items-center justify-center bg-primary px-6 py-10 sm:min-h-[360px] lg:min-h-[480px]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(0,255,65,0.12),transparent_60%)]" />
        <img
          src={data.image}
          alt="METATECH product dashboard on tablet"
          loading="lazy"
          decoding="async"
          className="relative z-10 w-full max-w-lg object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        />
      </div>
    </div>
  </section>
);
