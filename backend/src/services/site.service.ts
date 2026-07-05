import { homeData, siteData } from '../data/store.js';
import { sortByOrder } from '../utils/sort.js';

type FooterNavLink = (typeof siteData.footer.legal)[number];

const normalizeFooterLinks = (links: FooterNavLink[]) => sortByOrder(links);

const buildSolutionsMenu = () =>
  sortByOrder(homeData.solutions.tabs).map((tab) => ({
    id: tab.id,
    label: tab.menuLabel,
    imageUrl: tab.menuImageUrl,
    href: tab.menuHref,
  }));

export const getSite = () => ({
  seo: siteData.seo,
  header: {
    logo: siteData.header.logo,
    navLinks: sortByOrder(siteData.header.navLinks),
    cta: siteData.header.cta,
  },
  solutionsMenu: buildSolutionsMenu(),
  footer: {
    copyright: siteData.footer.copyright,
    legal: normalizeFooterLinks(siteData.footer.legal),
    socials: normalizeFooterLinks(siteData.footer.socials),
    brandBanner: siteData.footer.brandBanner,
  },
});
