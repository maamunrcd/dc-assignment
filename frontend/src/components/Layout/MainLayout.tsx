import { useEffect, type ReactNode } from 'react';
import { Header } from '@/components/Layout/Header';
import { SectionSkeleton } from '@/components/Atoms/SectionSkeleton';
import { ErrorMessage } from '@/components/Atoms/ErrorMessage';
import { Footer } from '@/features/site/components/Footer';
import { useSiteQuery } from '@/features/site/hooks/useSiteQuery';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const { data: site, isLoading, isError, refetch } = useSiteQuery();
  const footer = site?.footer;
  const header = site?.header;

  useEffect(() => {
    if (!site?.seo) {
      return;
    }

    document.title = site.seo.title;

    const descriptionMeta = document.querySelector('meta[name="description"]');

    if (descriptionMeta) {
      descriptionMeta.setAttribute('content', site.seo.description);
    }
  }, [site?.seo]);

  return (
    <>
      {header && <Header header={header} />}
      <main>{children}</main>
      {footer && <Footer footer={footer} />}
      {isLoading && !footer && (
        <div className="bg-black px-5 py-8">
          <SectionSkeleton className="h-12" />
        </div>
      )}
      {isError && !footer && (
        <div className="bg-black px-5 py-8">
          <ErrorMessage
            message="Unable to load footer."
            onRetry={() => void refetch()}
          />
        </div>
      )}
    </>
  );
};
