import homeData from '../data/home.json' with { type: 'json' };
import { sortByOrder } from '../utils/sort.js';

type TechStackRow = (typeof homeData.techStack.rows)[number];

export const getTechStack = () => ({
  eyebrow: homeData.techStack.eyebrow,
  title: homeData.techStack.title,
  subtitle: homeData.techStack.subtitle,
  rows: sortByOrder(homeData.techStack.rows).map((row: TechStackRow) => ({
    ...row,
    logos: sortByOrder(row.logos),
  })),
});
