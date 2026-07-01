import type { HomeData } from '@/features/home/types';
import { BRAND_NAME } from '@/lib/config/constants';

interface FooterProps {
  footer: HomeData['footer'];
}

const SocialIcon = ({ icon }: { icon: string }) => {
  const paths: Record<string, string> = {
    linkedin: 'M4.98 3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM3.5 8h3v8h-3V8zm5 0h2.9v1.1h.04c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.6V16h-3v-4.2c0-1 0-2.3-1.4-2.3-1.4 0-1.6 1.1-1.6 2.2V16h-3V8z',
    twitter:
      'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
    github:
      'M12 2C6.477 2 2 6.484 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.021C22 6.484 17.522 2 12 2z',
  };

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d={paths[icon] || paths.github} />
    </svg>
  );
};

const FooterColumn = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) => (
  <div>
    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
      {title}
    </h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="text-sm text-white/60 transition hover:text-accent"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export const Footer = ({ footer }: FooterProps) => (
  <footer id="contact" className="bg-primary-dark pt-16">
    <div className="relative overflow-hidden px-4 pb-8 sm:px-6 lg:px-8">
      <div
        className="pointer-events-none select-none bg-gradient-to-b from-accent/30 to-transparent bg-clip-text text-center text-6xl font-extrabold tracking-tight text-transparent sm:text-8xl lg:text-[10rem]"
        aria-hidden="true"
      >
        {BRAND_NAME}
      </div>

      <div className="mx-auto mt-10 grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <FooterColumn title="Products" links={footer.products} />
        <FooterColumn title="Company" links={footer.company} />
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Socials
          </h3>
          <ul className="space-y-3">
            {footer.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-accent"
                >
                  <SocialIcon icon={social.icon} />
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row">
        <p>{footer.copyright}</p>
        <div className="flex gap-6">
          {footer.legal.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-accent">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);
