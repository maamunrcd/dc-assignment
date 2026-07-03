import { useQuery, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '@/lib/query/query-keys';
import { fetchHeroData } from '@/services/api-content';

export const useHeroQuery = () => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: queryKeys.sections.hero,
    queryFn: fetchHeroData,
    initialData: () => queryClient.getQueryData(queryKeys.sections.hero),
  });
};
