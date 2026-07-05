import { SectionContainer } from '@/components/Atoms/SectionContainer';
import { LazyImage } from '@/components/Atoms/LazyImage';
import type { TechStackData, TechStackLogo } from '@/types/api';
import { cn } from '@/lib/utils/cn';

type MarqueeRowProps = {
  logos: TechStackLogo[];
  direction: 'left' | 'right';
};

const MarqueeRow = ({ logos, direction }: MarqueeRowProps) => {
  const repeatedLogos = Array.from({ length: 3 }, () => logos).flat();
  const track = [...repeatedLogos, ...repeatedLogos];

  return (
    <div className="overflow-hidden">
      <div
        className={cn(
          'flex w-max gap-3 sm:gap-4 lg:gap-5',
          direction === 'left' ? 'tech-marquee-left' : 'tech-marquee-right'
        )}
      >
        {track.map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="flex h-[80px] w-[150px] shrink-0 items-center justify-center rounded-[15px] border-[0.5px] border-[rgba(22,22,22,0.25)] bg-[#F8F8F8] px-4 sm:h-[88px] sm:w-[180px] sm:px-6 lg:h-[100px] lg:w-[200px] lg:px-8"
          >
            <LazyImage
              src={logo.imageUrl}
              alt={logo.alt}
              className="max-h-8 max-w-[110px] object-contain sm:max-h-10 sm:max-w-[130px] lg:max-h-12 lg:max-w-[150px]"
              fallbackClassName="h-8 w-16"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

interface TechStackSectionProps {
  techStack: TechStackData;
}

export const TechStackSection = ({ techStack }: TechStackSectionProps) => (
  <section className="bg-white py-16 text-primary-dark lg:py-24">
    <SectionContainer>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,180px)_1fr] lg:items-start lg:gap-12 xl:gap-20">
        {techStack.eyebrow && (
          <p className="text-sm font-medium text-primary-dark/80">
            {techStack.eyebrow}
          </p>
        )}

        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
            {techStack.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-primary-dark/75 sm:text-lg">
            {techStack.subtitle}
          </p>
        </div>
      </div>
    </SectionContainer>

    <div className="mt-12 space-y-4 sm:mt-14 sm:space-y-5 lg:mt-16">
      {techStack.rows.map((row, index) => (
        <MarqueeRow
          key={row.id}
          logos={row.logos}
          direction={index % 2 === 0 ? 'left' : 'right'}
        />
      ))}
    </div>
  </section>
);
