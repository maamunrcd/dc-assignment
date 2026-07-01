import {
  useFeaturesQuery,
  useHomeQuery,
  usePartnersQuery,
} from '@/features/home/hooks/useHomeQueries';
import { FeaturesSection } from '@/features/home/components/FeaturesSection';
import { HeroSection } from '@/features/home/components/HeroSection';
import { MediaLogoCloud } from '@/features/home/components/MediaLogoCloud';
import { ProductHighlight } from '@/features/home/components/ProductHighlight';
import { TrustedBySection } from '@/features/home/components/TrustedBySection';

import { ErrorMessage } from '@/components/Atoms/ErrorMessage';
import { SectionSkeleton } from '@/components/Atoms/SectionSkeleton';
import { MainLayout } from '@/components/Layout/MainLayout';

import type { ApiError } from '@/features/home/types';

const getErrorMessage = (error: unknown, fallback: string) => {
  if (error && typeof error === 'object' && 'message' in error) {
    return String((error as ApiError).message);
  }

  return fallback;
};

const HomePage = () => {
  const homeQuery = useHomeQuery();
  const featuresQuery = useFeaturesQuery();
  const partnersQuery = usePartnersQuery();

  const isInitialLoading =
    homeQuery.isLoading || featuresQuery.isLoading || partnersQuery.isLoading;

  if (isInitialLoading) {
    return (
      <MainLayout>
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionSkeleton lines={5} />
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout footer={homeQuery.data?.footer}>
      {homeQuery.isError ? (
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <ErrorMessage
            message={getErrorMessage(
              homeQuery.error,
              'Failed to load home content.'
            )}
            onRetry={() => homeQuery.refetch()}
          />
        </div>
      ) : homeQuery.data ? (
        <HeroSection data={homeQuery.data} />
      ) : null}

      {partnersQuery.isError ? (
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <ErrorMessage
            message="Failed to load partner logos."
            onRetry={() => partnersQuery.refetch()}
          />
        </div>
      ) : partnersQuery.data ? (
        <MediaLogoCloud logos={partnersQuery.data.mediaLogos} />
      ) : null}

      {featuresQuery.isError ? (
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <ErrorMessage
            message="Failed to load features."
            onRetry={() => featuresQuery.refetch()}
          />
        </div>
      ) : featuresQuery.data ? (
        <FeaturesSection data={featuresQuery.data} />
      ) : null}

      {homeQuery.data ? (
        <ProductHighlight data={homeQuery.data.productHighlight} />
      ) : null}

      {partnersQuery.data ? (
        <TrustedBySection
          data={{
            trustedHeading: partnersQuery.data.trustedHeading,
            trustedLogos: partnersQuery.data.trustedLogos,
          }}
        />
      ) : null}
    </MainLayout>
  );
};

export default HomePage;
