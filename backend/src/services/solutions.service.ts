import { homeData } from '../data/store.js';
import { resolveDefaultId, sortByOrder } from '../utils/sort.js';

export const getSolutions = () => {
  const tabs = sortByOrder(homeData.solutions.tabs);

  return {
    defaultTabId: resolveDefaultId(tabs, homeData.solutions.defaultTabId),
    intro: homeData.solutions.intro,
    tabs,
  };
};
