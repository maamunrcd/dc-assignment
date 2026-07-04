import homeData from '../data/home.json' with { type: 'json' };
import { resolveDefaultId, sortByOrder } from '../utils/sort.js';

type ShowcaseProductItem = (typeof homeData.showcase.products)[number];

const normalizeProducts = (products: ShowcaseProductItem[]) =>
  sortByOrder(products).map((product) => ({
    ...product,
    slides: sortByOrder(product.slides),
  }));

export const getShowcase = () => {
  const products = normalizeProducts(homeData.showcase.products);

  return {
    defaultProductId: resolveDefaultId(
      products,
      homeData.showcase.defaultProductId
    ),
    products,
  };
};
