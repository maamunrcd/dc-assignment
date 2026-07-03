import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@/lib/query/query-keys';
import { fetchSiteData } from '@/services/api-content';

export const useSiteQuery = () =>
  useQuery({
    queryKey: queryKeys.site,
    queryFn: fetchSiteData,
  });
