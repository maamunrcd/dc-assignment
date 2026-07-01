import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense, type ReactNode } from 'react';

import { WebsiteProvider } from '@/context/WebsiteContext';

import { Spinner } from '@/components/Atoms/Spinner';
import { ErrorBoundary } from '@/components/ErrorBoundary';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 1000 * 60 * 5,
    },
  },
});

export const AppProviders = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <WebsiteProvider>
      <ErrorBoundary>
        <Suspense fallback={<Spinner fullPage />}>{children}</Suspense>
      </ErrorBoundary>
    </WebsiteProvider>
  </QueryClientProvider>
);
