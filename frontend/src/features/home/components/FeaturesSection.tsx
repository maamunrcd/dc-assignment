import { useMemo } from 'react';

import { useWebsiteContext } from '@/context/WebsiteContext';
import type { FeaturesData } from '@/features/home/types';
import type { FeatureCategory } from '@/lib/config/constants';

import { Button } from '@/components/Atoms/Button';
import { SectionContainer } from '@/components/Atoms/SectionContainer';
import { SectionHeading } from '@/components/Atoms/SectionHeading';

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
    <SectionContainer id="services" className="py-16 sm:py-24">
      <SectionHeading
        title={data.sectionTitle}
        description={data.sectionDescription}
      />

      <div
        className="mb-10 flex flex-wrap gap-3"
        role="tablist"
        aria-label="Feature categories"
      >
        {data.categories.map((category) => {
          const isActive = activeFeatureCategory === category;

          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() =>
                setActiveFeatureCategory(category as FeatureCategory)
              }
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                isActive
                  ? 'bg-accent text-primary-dark'
                  : 'border border-white/20 text-white/70 hover:border-accent hover:text-accent'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {primaryFeature ? (
        <article className="mb-12 grid gap-8 lg:grid-cols-[120px_1fr] lg:items-start">
          <div
            className="text-7xl font-black leading-none text-transparent sm:text-8xl"
            style={{ WebkitTextStroke: '2px rgba(0,255,65,0.5)' }}
            aria-hidden="true"
          >
            {primaryFeature.number}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              {primaryFeature.title}
            </h3>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
              {primaryFeature.description}
            </p>
            <div className="mt-6">
              <Button variant="ghost">{primaryFeature.ctaLabel}</Button>
            </div>
          </div>
        </article>
      ) : null}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.highlightCards.map((card) => (
          <article
            key={card.id}
            className="rounded-2xl bg-surface p-6 text-primary-dark shadow-lg transition hover:-translate-y-1"
          >
            <h4 className="text-lg font-bold">{card.title}</h4>
            <p className="mt-3 text-sm leading-relaxed text-primary-dark/70">
              {card.description}
            </p>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
};
