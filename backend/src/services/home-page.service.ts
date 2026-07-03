import { getHero } from './hero.service.js';
import { getShowcase } from './showcase.service.js';
import { getSolutions } from './solutions.service.js';
import { getTechStack } from './tech-stack.service.js';
import { getTrustedBy } from './trusted-by.service.js';

export const buildHomePageResponse = () => ({
  hero: getHero(),
  trustedBy: getTrustedBy(),
  solutions: getSolutions(),
  showcase: getShowcase(),
  techStack: getTechStack(),
});
