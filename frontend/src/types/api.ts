export interface LinkCta {
  label: string;
  href: string;
}

export interface HeroMedia {
  backgroundImage: string;
  mobileImageUrl: string;
  playUrl: string;
  alt: string;
}

export interface HeroData {
  id: string;
  isActive?: boolean;
  publishedAt?: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  cta: LinkCta;
  media: HeroMedia;
}

export interface TrustedByLogo {
  id: string;
  imageUrl: string;
  imageTitle: string;
  order: number;
  href?: string;
}

export interface TrustedByData {
  logos: TrustedByLogo[];
}

export interface SolutionFeature {
  id: string;
  title: string;
}

export interface SolutionTab {
  id: string;
  order: number;
  tabTitle: string;
  number: string;
  title: string;
  subtitle: string;
  cta: LinkCta;
  features: SolutionFeature[];
}

export interface SolutionsData {
  defaultTabId: string;
  tabs: SolutionTab[];
}

export interface ProductSlide {
  id: string;
  order: number;
  imageUrl: string;
  alt: string;
}

export interface ShowcaseProduct {
  id: string;
  order: number;
  name: string;
  logo: {
    imageUrl: string;
    alt: string;
  };
  title: string;
  subtitle: string;
  cta: LinkCta;
  slides: ProductSlide[];
}

export interface ShowcaseData {
  defaultProductId: string;
  products: ShowcaseProduct[];
}

export interface TechStackLogo {
  id: string;
  order: number;
  imageUrl: string;
  alt: string;
}

export interface TechStackRow {
  id: string;
  order: number;
  logos: TechStackLogo[];
}

export interface TechStackData {
  title: string;
  subtitle: string;
  rows: TechStackRow[];
}

export interface FooterCopyright {
  startYear: number;
  endYear: number;
  companyName: string;
  rightsText: string;
}

export interface FooterNavLink {
  id: string;
  order: number;
  label: string;
  href: string;
}

export interface FooterData {
  copyright: FooterCopyright;
  legal: FooterNavLink[];
  socials: FooterNavLink[];
  brandBanner: {
    imageUrl: string;
  };
}

export interface SiteData {
  footer: FooterData;
}

export interface HomePageData {
  hero: HeroData;
  trustedBy: TrustedByData;
  solutions: SolutionsData;
  showcase: ShowcaseData;
  techStack: TechStackData;
}
