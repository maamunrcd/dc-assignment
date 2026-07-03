import { useQuery, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '@/lib/query/query-keys';
import { fetchSolutionsData } from '@/services/api-content';

export const useSolutionsQuery = () => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: queryKeys.sections.solutions,
    queryFn: fetchSolutionsData,
    initialData: () => queryClient.getQueryData(queryKeys.sections.solutions),
  });
};
