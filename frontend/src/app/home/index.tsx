import { MainLayout } from '@/components/Layout/MainLayout';
import { ErrorMessage } from '@/components/Atoms/ErrorMessage';
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

const HomePageLoading = () => (
  <MainLayout>
    <div className="space-y-8 px-5 py-16">
      <SectionSkeleton className="py-12" />
      <SectionSkeleton className="py-24" />
      <SectionSkeleton className="py-16" variant="light" />
    </div>
  </MainLayout>
);

const HomePageError = ({ onRetry }: { onRetry: () => void }) => (
  <MainLayout>
    <div className="px-5 py-24">
      <ErrorMessage
        message="Unable to load the home page. Please check your connection and try again."
        onRetry={onRetry}
      />
    </div>
  </MainLayout>
);

const HomePage = () => {
  const { data, isLoading, isError, refetch } = useHomePageQuery();

  if (isLoading) {
    return <HomePageLoading />;
  }

  if (isError || !data) {
    return <HomePageError onRetry={() => void refetch()} />;
  }

  return (
    <MainLayout>
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
    </MainLayout>
  );
};

export default HomePage;
