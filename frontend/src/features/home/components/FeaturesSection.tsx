import { useMemo } from 'react';

import { useWebsiteContext } from '@/context/WebsiteContext';
import type { FeaturesData } from '@/features/home/types';

import { Button } from '@/components/Atoms/Button';
import { CategoryTabs } from '@/components/Atoms/CategoryTabs';
import { FeatureCard } from '@/components/Atoms/FeatureCard';
import { SectionContainer } from '@/components/Atoms/SectionContainer';

interface FeaturesSectionProps {
  data: FeaturesData;
}

export const FeaturesSection = ({ data }: FeaturesSectionProps) => {
  const { activeFeatureCategory, setActiveFeatureCategory } =
    useWebsiteContext();

  const filteredFeatures = useMemo(() => {
    if (activeFeatureCategory === 'All') {
      return data.features;
    }

    return data.features.filter(
      (feature) => feature.category === activeFeatureCategory
    );
  }, [activeFeatureCategory, data.features]);

  const primaryFeature = filteredFeatures[0] ?? data.features[0];

  return (
    <SectionContainer id="services" className="py-14 sm:py-20 lg:py-28">
      <div className="max-w-4xl">
        <h2 className="text-2xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
          {data.sectionTitle}
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
          {data.sectionDescription}
        </p>
      </div>

      <div className="mt-8 sm:mt-10">
        <CategoryTabs
          categories={data.categories}
          activeCategory={activeFeatureCategory}
          onChange={setActiveFeatureCategory}
        />
      </div>

      {primaryFeature ? (
        <article className="mt-12 grid gap-6 sm:mt-16 sm:gap-8 lg:grid-cols-[minmax(80px,140px)_1fr] lg:items-start">
          <div
            className="text-[5rem] font-black leading-none text-transparent sm:text-[6.5rem] lg:text-[7.5rem]"
            style={{ WebkitTextStroke: '2px rgba(0,255,65,0.45)' }}
            aria-hidden="true"
          >
            {primaryFeature.number}
          </div>
          <div className="lg:pt-2">
            <h3 className="text-xl font-bold text-white sm:text-2xl lg:text-3xl">
              {primaryFeature.title}
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
              {primaryFeature.description}
            </p>
            <div className="mt-6">
              <Button variant="ghost" className="px-6 py-2.5 text-sm">
                {primaryFeature.ctaLabel}
              </Button>
            </div>
          </div>
        </article>
      ) : null}

      <div className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {data.highlightCards.map((card) => (
          <FeatureCard
            key={card.id}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </SectionContainer>
  );
};
