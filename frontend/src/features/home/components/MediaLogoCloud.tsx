import type { PartnerLogo } from '@/features/home/types';

import { LogoTile } from '@/components/Atoms/LogoTile';
import { SectionContainer } from '@/components/Atoms/SectionContainer';

interface MediaLogoCloudProps {
  logos: PartnerLogo[];
}

export const MediaLogoCloud = ({ logos }: MediaLogoCloudProps) => (
  <SectionContainer className="border-y border-white/5 py-8 sm:py-12">
    <div
      className="flex items-center justify-between gap-6 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-8 lg:grid lg:grid-cols-6 lg:overflow-visible [&::-webkit-scrollbar]:hidden"
      aria-label="Featured in media"
    >
      {logos.map((logo) => (
        <LogoTile key={logo.id} logo={logo} variant="media" />
      ))}
    </div>
  </SectionContainer>
);
