import { SectionContainer } from '@/components/Atoms/SectionContainer';
import { Link } from '@/components/Atoms/Link';
import { renderHeroTitle } from '@/features/hero/utils/renderHeroTitle';
import type { HeroData } from '@/types/api';

interface HeroSectionProps {
  hero: HeroData;
}

export const HeroSection = ({ hero }: HeroSectionProps) => (
  <section
    id="home"
    className="relative overflow-hidden pt-8 pb-4 sm:pt-12 sm:pb-6 lg:pt-16 lg:pb-8"
  >
    <SectionContainer>
      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center lg:gap-16 xl:gap-24">
        <h1 className="max-w-[760px] text-[2.35rem] font-bold leading-[1.05] tracking-[-0.02em] sm:text-5xl lg:text-[4.25rem] xl:text-[4.75rem]">
          {renderHeroTitle(hero.title, hero.titleAccent)}
        </h1>

        <div className="lg:justify-self-end">
          <p className="max-w-[390px] text-sm leading-relaxed text-white/78 sm:text-base lg:text-[1.03rem]">
            {hero.subtitle}
          </p>
          <div className="mt-6 lg:mt-7">
            <Link href={hero.cta.href} variant="hero" className="px-8">
              {hero.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </SectionContainer>
  </section>
);
