import { useQuery } from '@tanstack/react-query';

import type {
  FeaturesData,
  HomeData,
  PartnersData,
} from '@/features/home/types';
import { endpoints } from '@/lib/config/endpoints';
import { apiClient } from '@/services/api';

export const homeQueryKey = ['home'] as const;
export const featuresQueryKey = ['features'] as const;
export const partnersQueryKey = ['partners'] as const;

export const useHomeQuery = () =>
  useQuery<HomeData>({
    queryKey: homeQueryKey,
    queryFn: async () => {
      const { data } = await apiClient.get<HomeData>(endpoints.HOME);
      return data;
    },
  });

export const useFeaturesQuery = () =>
  useQuery<FeaturesData>({
    queryKey: featuresQueryKey,
    queryFn: async () => {
      const { data } = await apiClient.get<FeaturesData>(endpoints.FEATURES);
      return data;
    },
  });

export const usePartnersQuery = () =>
  useQuery<PartnersData>({
    queryKey: partnersQueryKey,
    queryFn: async () => {
      const { data } = await apiClient.get<PartnersData>(endpoints.PARTNERS);
      return data;
    },
  });
