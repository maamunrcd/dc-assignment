import type { PartnersData } from '@/features/home/types';

import { LogoTile } from '@/components/Atoms/LogoTile';
import { SectionContainer } from '@/components/Atoms/SectionContainer';

interface TrustedBySectionProps {
  data: Pick<PartnersData, 'trustedHeading' | 'trustedLogos'>;
}

export const TrustedBySection = ({ data }: TrustedBySectionProps) => (
  <SectionContainer className="py-14 sm:py-20 lg:py-28">
    <h2 className="mb-8 text-center text-xl font-bold text-white sm:mb-12 sm:text-2xl lg:text-3xl">
      {data.trustedHeading}
    </h2>
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
      {data.trustedLogos.map((logo) => (
        <LogoTile key={logo.id} logo={logo} variant="trusted" />
      ))}
    </div>
  </SectionContainer>
);
