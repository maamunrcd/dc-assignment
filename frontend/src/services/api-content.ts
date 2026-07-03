import { endpoints } from '@/lib/config/endpoints';
import { publicAxiosInstance } from '@/services/api';
import type {
  HeroData,
  HomePageData,
  ShowcaseData,
  SiteData,
  SolutionsData,
  TechStackData,
  TrustedByData,
} from '@/types/api';

export const fetchSiteData = async (): Promise<SiteData> => {
  const { data } = await publicAxiosInstance.get<SiteData>(endpoints.SITE);
  return data;
};

export const fetchHomePageData = async (): Promise<HomePageData> => {
  const { data } = await publicAxiosInstance.get<HomePageData>(endpoints.HOME);
  return data;
};

export const fetchHeroData = async (): Promise<HeroData> => {
  const { data } = await publicAxiosInstance.get<HeroData>(
    endpoints.SECTIONS.HERO
  );
  return data;
};

export const fetchTrustedByData = async (): Promise<TrustedByData> => {
  const { data } = await publicAxiosInstance.get<TrustedByData>(
    endpoints.SECTIONS.TRUSTED_BY
  );
  return data;
};

export const fetchSolutionsData = async (): Promise<SolutionsData> => {
  const { data } = await publicAxiosInstance.get<SolutionsData>(
    endpoints.SECTIONS.SOLUTIONS
  );
  return data;
};

export const fetchShowcaseData = async (): Promise<ShowcaseData> => {
  const { data } = await publicAxiosInstance.get<ShowcaseData>(
    endpoints.SECTIONS.SHOWCASE
  );
  return data;
};

export const fetchTechStackData = async (): Promise<TechStackData> => {
  const { data } = await publicAxiosInstance.get<TechStackData>(
    endpoints.SECTIONS.TECH_STACK
  );
  return data;
};
