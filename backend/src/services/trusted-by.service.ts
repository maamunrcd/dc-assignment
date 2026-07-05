import homeData from '../data/home.json' with { type: 'json' };
import { sortByOrder } from '../utils/sort.js';

export const getTrustedBy = () => ({
  heading: homeData.trustedBy.heading,
  logos: sortByOrder(homeData.trustedBy.logos),
});
