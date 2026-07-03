import { useQuery, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '@/lib/query/query-keys';
import { fetchTrustedByData } from '@/services/api-content';

export const useTrustedByQuery = () => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: queryKeys.sections.trustedBy,
    queryFn: fetchTrustedByData,
    initialData: () => queryClient.getQueryData(queryKeys.sections.trustedBy),
  });
};
