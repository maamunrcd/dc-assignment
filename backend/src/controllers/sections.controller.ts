import { getHero } from '../services/hero.service.js';
import { getShowcase } from '../services/showcase.service.js';
import { getSolutions } from '../services/solutions.service.js';
import { getTechStack } from '../services/tech-stack.service.js';
import { getTrustedBy } from '../services/trusted-by.service.js';

export const getHeroSection = () => getHero();
export const getTrustedBySection = () => getTrustedBy();
export const getSolutionsSection = () => getSolutions();
export const getShowcaseSection = () => getShowcase();
export const getTechStackSection = () => getTechStack();
