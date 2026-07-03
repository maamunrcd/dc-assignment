import { useQuery, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '@/lib/query/query-keys';
import { fetchTechStackData } from '@/services/api-content';

export const useTechStackQuery = () => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: queryKeys.sections.techStack,
    queryFn: fetchTechStackData,
    initialData: () => queryClient.getQueryData(queryKeys.sections.techStack),
  });
};
