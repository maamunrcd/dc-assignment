import { useQuery, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '@/lib/query/query-keys';
import { hydrateSectionCaches } from '@/lib/query/hydrate-section-caches';
import { fetchHomePageData } from '@/services/api-content';

export const useHomePageQuery = () => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: queryKeys.homePage,
    queryFn: async () => {
      const data = await fetchHomePageData();
      hydrateSectionCaches(queryClient, data);
      return data;
    },
  });
};
