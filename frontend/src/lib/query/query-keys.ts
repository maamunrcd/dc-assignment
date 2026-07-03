export const queryKeys = {
  site: ['site'] as const,
  homePage: ['home-page'] as const,
  sections: {
    hero: ['sections', 'hero'] as const,
    trustedBy: ['sections', 'trusted-by'] as const,
    solutions: ['sections', 'solutions'] as const,
    showcase: ['sections', 'showcase'] as const,
    techStack: ['sections', 'tech-stack'] as const,
  },
} as const;
