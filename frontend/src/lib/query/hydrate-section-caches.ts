import type { QueryClient } from '@tanstack/react-query';
import { queryKeys } from '@/lib/query/query-keys';
import type { HomePageData } from '@/types/api';

export const hydrateSectionCaches = (
  queryClient: QueryClient,
  data: HomePageData
) => {
  queryClient.setQueryData(queryKeys.sections.hero, data.hero);
  queryClient.setQueryData(queryKeys.sections.trustedBy, data.trustedBy);
  queryClient.setQueryData(queryKeys.sections.solutions, data.solutions);
  queryClient.setQueryData(queryKeys.sections.showcase, data.showcase);
  queryClient.setQueryData(queryKeys.sections.techStack, data.techStack);
};
