import { lazy } from 'react';

export const LazySolutionsSection = lazy(() =>
  import('@/features/solutions/components/SolutionsSection').then((module) => ({
    default: module.SolutionsSection,
  }))
);

export const LazyShowcaseSection = lazy(() =>
  import('@/features/showcase/components/ShowcaseSection').then((module) => ({
    default: module.ShowcaseSection,
  }))
);

export const LazyTechStackSection = lazy(() =>
  import('@/features/tech-stack/components/TechStackSection').then((module) => ({
    default: module.TechStackSection,
  }))
);
