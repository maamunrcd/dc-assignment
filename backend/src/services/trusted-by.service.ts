import { homeData } from '../data/store.js';
import { sortByOrder } from '../utils/sort.js';

export const getTrustedBy = () => ({
  heading: homeData.trustedBy.heading,
  logos: sortByOrder(homeData.trustedBy.logos),
});
