import homeData from '../data/home.json' with { type: 'json' };

type HeroItem = (typeof homeData.heroes)[number];

const resolveActiveHero = (heroes: HeroItem[]): HeroItem => {
  const activeHero = heroes.find((hero) => hero.isActive);
  return activeHero ?? heroes[heroes.length - 1];
};

export const getHero = () => resolveActiveHero(homeData.heroes);
