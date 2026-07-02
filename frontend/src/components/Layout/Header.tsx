import { useWebsiteContext } from '@/context/WebsiteContext';
import { BRAND_NAME, NAV_LINKS } from '@/lib/config/constants';

import { Button } from '@/components/Atoms/Button';

export const Header = () => {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } =
    useWebsiteContext();

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-primary-dark/95 backdrop-blur-lg">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-4 py-4 sm:px-6 lg:px-8 lg:py-5">
        <a
          href="#home"
          className="text-lg font-extrabold tracking-[0.08em] text-white sm:text-xl"
          onClick={closeMobileMenu}
        >
          {BRAND_NAME}
        </a>

        <nav
          className="hidden items-center justify-center gap-6 md:flex lg:gap-10"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/75 transition hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden justify-end md:flex">
          <Button className="px-5 py-2.5 text-sm">Get Started</Button>
        </div>

        <button
          type="button"
          className="col-start-3 inline-flex h-10 w-10 items-center justify-center justify-self-end rounded-lg border border-white/15 text-white md:hidden"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-white transition ${isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition ${isMobileMenuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition ${isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </div>
        </button>
      </div>

      {isMobileMenuOpen ? (
        <nav
          className="border-t border-white/10 bg-primary-dark px-4 py-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-white/90 hover:bg-white/5"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <Button className="w-full">Get Started</Button>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
};
