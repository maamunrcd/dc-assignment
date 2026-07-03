import { QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';
import { WebsiteProvider } from '@/context/WebsiteContext';
import { queryClient } from '@/lib/query/client';
import { queryKeys } from '@/lib/query/query-keys';
import { fetchSiteData } from '@/services/api-content';

void queryClient.prefetchQuery({
  queryKey: queryKeys.site,
  queryFn: fetchSiteData,
});

export const AppProviders = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <WebsiteProvider>{children}</WebsiteProvider>
  </QueryClientProvider>
);
