import { SectionContainer } from '@/components/Atoms/SectionContainer';
import { Link } from '@/components/Atoms/Link';
import type { FooterData } from '@/types/api';

interface FooterProps {
  footer: FooterData;
}

export const Footer = ({ footer }: FooterProps) => (
  <footer id="contact" className="bg-black pt-12 lg:pt-16">
    <SectionContainer as="div" className="pb-10 lg:pb-14">
      <div className="flex flex-col gap-6 font-nav text-sm text-white lg:flex-row lg:items-center lg:justify-between">
        <p className="shrink-0">
          @{footer.copyright.startYear}-{footer.copyright.endYear}{' '}
          <span className="text-accent">{footer.copyright.companyName}</span>
          {' // '}
          {footer.copyright.rightsText}
        </p>

        <nav
          className="flex flex-wrap items-center gap-6 lg:justify-center"
          aria-label="Legal"
        >
          {footer.legal.map((link) => (
            <Link key={link.id} href={link.href} variant="footer-legal">
              {link.label}
            </Link>
          ))}
        </nav>

        <nav
          className="flex flex-wrap items-center gap-6 lg:justify-end"
          aria-label="Social media"
        >
          {footer.socials.map((link) => (
            <Link key={link.id} href={link.href} variant="footer-social">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </SectionContainer>

    <div
      className="footer-brand-bg w-full"
      style={{ backgroundImage: `url('${footer.brandBanner.imageUrl}')` }}
      aria-hidden="true"
    />
  </footer>
);
