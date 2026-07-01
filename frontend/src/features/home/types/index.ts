export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink extends FooterLink {
  icon: string;
}

export interface HomeData {
  heroTitle: string;
  heroTitleHighlight: string[];
  heroDescription: string;
  heroCta: {
    primary: string;
    secondary: string;
  };
  heroBackgroundImage: string;
  productHighlight: {
    title: string;
    description: string;
    ctaLabel: string;
    image: string;
  };
  footer: {
    products: FooterLink[];
    company: FooterLink[];
    socials: SocialLink[];
    legal: FooterLink[];
    copyright: string;
  };
}

export interface Feature {
  id: string;
  number: string;
  title: string;
  description: string;
  category: string;
  ctaLabel: string;
}

export interface HighlightCard {
  id: string;
  title: string;
  description: string;
}

export interface FeaturesData {
  sectionTitle: string;
  sectionDescription: string;
  categories: string[];
  features: Feature[];
  highlightCards: HighlightCard[];
}

export interface PartnerLogo {
  id: string;
  name: string;
  logo: string;
}

export interface PartnersData {
  mediaLogos: PartnerLogo[];
  trustedLogos: PartnerLogo[];
  trustedHeading: string;
}

export interface ApiError {
  message: string;
  status?: number;
}
