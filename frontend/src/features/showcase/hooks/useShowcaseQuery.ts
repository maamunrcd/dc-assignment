import { useQuery, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '@/lib/query/query-keys';
import { fetchShowcaseData } from '@/services/api-content';

export const useShowcaseQuery = () => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: queryKeys.sections.showcase,
    queryFn: fetchShowcaseData,
    initialData: () => queryClient.getQueryData(queryKeys.sections.showcase),
  });
};
