import type { PartnerLogo } from '@/features/home/types';

import { SectionContainer } from '@/components/Atoms/SectionContainer';

interface MediaLogoCloudProps {
  logos: PartnerLogo[];
}

export const MediaLogoCloud = ({ logos }: MediaLogoCloudProps) => (
  <SectionContainer className="py-10 sm:py-14">
    <div
      className="flex gap-8 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible lg:grid-cols-6 [&::-webkit-scrollbar]:hidden"
      aria-label="Featured in media"
    >
      {logos.map((logo) => (
        <div
          key={logo.id}
          className="flex min-w-[140px] shrink-0 items-center justify-center rounded-xl border border-white/5 bg-white/5 px-4 py-5 grayscale transition hover:grayscale-0 sm:min-w-0"
        >
          <img
            src={logo.logo}
            alt={logo.name}
            loading="lazy"
            className="h-8 w-auto max-w-[120px] object-contain opacity-70"
          />
        </div>
      ))}
    </div>
  </SectionContainer>
);
