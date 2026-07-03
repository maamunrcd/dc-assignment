import { SectionContainer } from '@/components/Atoms/SectionContainer';
import { HeroMediaBanner } from '@/features/hero/components/HeroMediaBanner';
import { HeroSection } from '@/features/hero/components/HeroSection';
import type { HeroData } from '@/types/api';

interface HeroBlockProps {
  hero: HeroData;
}

export const HeroBlock = ({ hero }: HeroBlockProps) => (
  <>
    <HeroSection hero={hero} />
    <SectionContainer as="div" className="px-5">
      <HeroMediaBanner media={hero.media} />
    </SectionContainer>
  </>
);
