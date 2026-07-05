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

export interface HeadingPart {
  text: string;
  accent: boolean;
}

export interface SectionHeading {
  parts: HeadingPart[];
}

export interface TrustedByData {
  heading: SectionHeading;
  logos: TrustedByLogo[];
}

export interface SolutionFeature {
  id: string;
  title: string;
  description: string;
}

export interface SolutionTab {
  id: string;
  order: number;
  tabTitle: string;
  menuLabel: string;
  menuImageUrl: string;
  menuHref: string;
  number: string;
  title: string;
  subtitle: string;
  cta: LinkCta;
  features: SolutionFeature[];
}

export interface SolutionsIntro {
  eyebrow: string;
  headline: string;
  body: string;
}

export interface SolutionsData {
  defaultTabId: string;
  intro: SolutionsIntro;
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
  eyebrow: string;
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

export interface HeaderNavLink {
  id: string;
  order: number;
  label: string;
  href: string;
  hasMegaMenu?: boolean;
}

export interface HeaderData {
  logo: {
    imageUrl: string;
    alt: string;
    href: string;
  };
  navLinks: HeaderNavLink[];
  cta: LinkCta;
}

export interface SolutionsMenuItem {
  id: string;
  label: string;
  imageUrl: string;
  href: string;
}

export interface SeoData {
  title: string;
  description: string;
}

export interface SiteData {
  seo: SeoData;
  header: HeaderData;
  solutionsMenu: SolutionsMenuItem[];
  footer: FooterData;
}

export interface HomePageData {
  hero: HeroData;
  trustedBy: TrustedByData;
  solutions: SolutionsData;
  showcase: ShowcaseData;
  techStack: TechStackData;
}
