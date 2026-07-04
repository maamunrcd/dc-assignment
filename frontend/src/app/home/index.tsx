import { MainLayout } from '@/components/Layout/MainLayout';
import { AsyncSection } from '@/components/Atoms/AsyncSection';
import { LazyOnVisible } from '@/components/Atoms/LazyOnVisible';
import { SectionSkeleton } from '@/components/Atoms/SectionSkeleton';
import { HeroBlock } from '@/features/hero/components/HeroBlock';
import { useHomePageQuery } from '@/features/home/hooks/useHomePageQuery';
import {
  LazyShowcaseSection,
  LazySolutionsSection,
  LazyTechStackSection,
} from '@/features/home/lazy-sections';
import { TrustedClients } from '@/features/trusted-by/components/TrustedClients';

const solutionsFallback = (
  <SectionSkeleton className="min-h-[480px] py-16" variant="light" />
);

const showcaseFallback = (
  <SectionSkeleton className="min-h-[420px] py-16" />
);

const techStackFallback = (
  <SectionSkeleton className="min-h-[360px] py-16" />
);

const HomePage = () => {
  const { data, isLoading, isError, refetch } = useHomePageQuery();
  const hasError = isError || (!isLoading && !data);

  return (
    <MainLayout>
      <AsyncSection
        isLoading={isLoading}
        isError={hasError}
        onRetry={() => void refetch()}
        errorMessage="Unable to load the home page. Please check your connection and try again."
        skeletonClassName="space-y-8 px-5 py-16"
      >
        {data && (
          <>
            <HeroBlock hero={data.hero} />
            <TrustedClients logos={data.trustedBy.logos} />

            <LazyOnVisible fallback={solutionsFallback}>
              <LazySolutionsSection solutions={data.solutions} />
            </LazyOnVisible>

            <LazyOnVisible fallback={showcaseFallback}>
              <LazyShowcaseSection showcase={data.showcase} />
            </LazyOnVisible>

            <LazyOnVisible fallback={techStackFallback}>
              <LazyTechStackSection techStack={data.techStack} />
            </LazyOnVisible>
          </>
        )}
      </AsyncSection>
    </MainLayout>
  );
};

export default HomePage;
