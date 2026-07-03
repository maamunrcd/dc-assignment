import siteData from '../data/site.json' with { type: 'json' };
import { sortByOrder } from '../utils/sort.js';

type FooterNavLink = (typeof siteData.footer.legal)[number];

const normalizeFooterLinks = (links: FooterNavLink[]) => sortByOrder(links);

export const getSite = () => ({
  footer: {
    copyright: siteData.footer.copyright,
    legal: normalizeFooterLinks(siteData.footer.legal),
    socials: normalizeFooterLinks(siteData.footer.socials),
    brandBanner: siteData.footer.brandBanner,
  },
});
