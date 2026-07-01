import type { PartnersData } from '@/features/home/types';

import { SectionContainer } from '@/components/Atoms/SectionContainer';

interface TrustedBySectionProps {
  data: Pick<PartnersData, 'trustedHeading' | 'trustedLogos'>;
}

export const TrustedBySection = ({ data }: TrustedBySectionProps) => (
  <SectionContainer className="py-16 sm:py-24">
    <h2 className="mb-10 text-center text-2xl font-bold text-white sm:text-3xl">
      {data.trustedHeading}
    </h2>
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {data.trustedLogos.map((logo) => (
        <div
          key={logo.id}
          className="flex items-center justify-center rounded-xl bg-surface/95 p-4 transition hover:shadow-lg"
        >
          <img
            src={logo.logo}
            alt={logo.name}
            loading="lazy"
            className="h-8 w-auto max-w-[100px] object-contain"
          />
        </div>
      ))}
    </div>
  </SectionContainer>
);
