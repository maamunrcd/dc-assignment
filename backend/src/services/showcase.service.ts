import homeData from '../data/home.json' with { type: 'json' };
import { resolveDefaultId, sortByOrder } from '../utils/sort.js';

type ProductHighlightItem = (typeof homeData.productHighlight.products)[number];

const normalizeProducts = (products: ProductHighlightItem[]) =>
  sortByOrder(products).map((product) => ({
    ...product,
    slides: sortByOrder(product.slides),
  }));

export const getShowcase = () => {
  const products = normalizeProducts(homeData.productHighlight.products);

  return {
    defaultProductId: resolveDefaultId(
      products,
      homeData.productHighlight.defaultProductId
    ),
    products,
  };
};
