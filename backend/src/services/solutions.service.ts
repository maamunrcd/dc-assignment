import homeData from '../data/home.json' with { type: 'json' };
import { resolveDefaultId, sortByOrder } from '../utils/sort.js';

export const getSolutions = () => {
  const tabs = sortByOrder(homeData.solutions.tabs);

  return {
    defaultTabId: resolveDefaultId(tabs, homeData.solutions.defaultTabId),
    tabs,
  };
};
