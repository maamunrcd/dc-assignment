import type { HomeData } from '@/features/home/types';
import { BRAND_NAME } from '@/lib/config/constants';
import { highlightText } from '@/lib/utils/highlightText';

import { Button } from '@/components/Atoms/Button';
import { PlayButton } from '@/components/Atoms/PlayButton';
import { SectionContainer } from '@/components/Atoms/SectionContainer';

interface HeroSectionProps {
  data: HomeData;
}

export const HeroSection = ({ data }: HeroSectionProps) => (
  <SectionContainer id="home" className="pt-6 pb-6 sm:pt-8 sm:pb-10 lg:pt-10">
    <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-16">
      <div>
        <h1 className="max-w-xl text-[2rem] font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
          {highlightText(data.heroTitle, data.heroTitleHighlight)}
        </h1>
        <div className="mt-8 sm:mt-10">
          <Button className="px-8 py-3.5 text-sm sm:text-base">
            {data.heroCta.primary}
          </Button>
        </div>
      </div>

      <p className="max-w-md text-sm leading-relaxed text-white/65 sm:text-base lg:pt-2 lg:text-[0.95rem] lg:leading-7">
        {data.heroDescription}
      </p>
    </div>

    <div className="relative mt-10 overflow-hidden rounded-2xl sm:mt-14 sm:rounded-3xl">
      <img
        src={data.heroBackgroundImage}
        alt="Team collaborating with digital network visualization"
        className="h-[220px] w-full object-cover sm:h-[320px] lg:h-[420px]"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/20 to-primary-dark/30" />

      <div className="absolute left-1/2 top-6 -translate-x-1/2 sm:top-8">
        <PlayButton />
      </div>

      <div
        className="pointer-events-none absolute bottom-4 left-1/2 w-full -translate-x-1/2 select-none text-center text-4xl font-black uppercase tracking-[0.2em] text-white/10 sm:bottom-6 sm:text-6xl lg:text-8xl"
        aria-hidden="true"
        style={{ WebkitTextStroke: '1px rgba(255,255,255,0.08)' }}
      >
        {BRAND_NAME}
      </div>
    </div>
  </SectionContainer>
);
