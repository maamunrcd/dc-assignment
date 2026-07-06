export const queryKeys = {
  site: ['site', 'v4'] as const,
  homePage: ['home-page', 'v2'] as const,
  sections: {
    hero: ['sections', 'hero', 'v2'] as const,
    trustedBy: ['sections', 'trusted-by', 'v2'] as const,
    solutions: ['sections', 'solutions', 'v2'] as const,
    showcase: ['sections', 'showcase', 'v2'] as const,
    techStack: ['sections', 'tech-stack', 'v2'] as const,
  },
} as const;
