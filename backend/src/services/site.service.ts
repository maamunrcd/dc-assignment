import { homeData, siteData } from '../data/store.js';
import { sortByOrder } from '../utils/sort.js';

type FooterNavLink = (typeof siteData.footer.legal)[number];

type NavChild = {
  id: string;
  label: string;
  href: string;
  imageUrl?: string;
};

type SiteNavLink = {
  id: string;
  order: number;
  label: string;
  href: string;
  children?: NavChild[];
  childrenRef?: string;
};

const normalizeFooterLinks = (links: FooterNavLink[]) => sortByOrder(links);

const CHILDREN_RESOLVERS: Record<string, () => NavChild[]> = {
  'solutions-tabs': () =>
    sortByOrder(homeData.solutions.tabs).map((tab) => ({
      id: tab.id,
      label: tab.menuLabel,
      href: tab.menuHref,
      imageUrl: tab.menuImageUrl,
    })),
};

const resolveNavChildren = (link: SiteNavLink): NavChild[] | undefined => {
  if (link.children?.length) {
    return link.children;
  }

  if (!link.childrenRef) {
    return undefined;
  }

  return CHILDREN_RESOLVERS[link.childrenRef]?.() ?? [];
};

const enrichNavLink = (link: SiteNavLink) => {
  const children = resolveNavChildren(link);
  const { childrenRef: _childrenRef, children: _children, ...rest } = link;

  if (!children?.length) {
    return rest;
  }

  return {
    ...rest,
    children,
  };
};

export const getSite = () => ({
  seo: siteData.seo,
  header: {
    logo: siteData.header.logo,
    navLinks: sortByOrder(siteData.header.navLinks as SiteNavLink[]).map(
      enrichNavLink
    ),
    cta: siteData.header.cta,
  },
  footer: {
    copyright: siteData.footer.copyright,
    legal: normalizeFooterLinks(siteData.footer.legal),
    socials: normalizeFooterLinks(siteData.footer.socials),
    brandBanner: siteData.footer.brandBanner,
  },
});
