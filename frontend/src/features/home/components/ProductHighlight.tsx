import type { HomeData } from '@/features/home/types';

import { SectionContainer } from '@/components/Atoms/SectionContainer';

interface ProductHighlightProps {
  data: HomeData['productHighlight'];
}

export const ProductHighlight = ({ data }: ProductHighlightProps) => (
  <SectionContainer id="about" className="py-16 sm:py-24">
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-primary">
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-accent p-8 sm:p-12 lg:p-16">
          <h2 className="text-3xl font-bold leading-tight text-primary-dark sm:text-4xl">
            {data.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary-dark/80 sm:text-lg">
            {data.description}
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary-dark underline-offset-4 hover:underline"
          >
            {data.ctaLabel}
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="relative flex min-h-[280px] items-center justify-center bg-gradient-to-br from-primary-dark to-primary p-8 sm:min-h-[360px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,65,0.15),transparent_50%)]" />
          <img
            src={data.image}
            alt="METATECH product dashboard on tablet"
            loading="lazy"
            className="relative z-10 max-h-[320px] w-full max-w-md object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  </SectionContainer>
);
