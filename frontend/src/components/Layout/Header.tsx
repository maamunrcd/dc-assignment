import { useWebsiteContext } from '@/context/WebsiteContext';
import { BRAND_NAME, NAV_LINKS } from '@/lib/config/constants';

import { Button } from '@/components/Atoms/Button';

export const Header = () => {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } =
    useWebsiteContext();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-primary-dark/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="text-xl font-extrabold tracking-wide text-white"
          onClick={closeMobileMenu}
        >
          {BRAND_NAME}
        </a>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button>Get Started</Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white md:hidden"
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
          <ul className="space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2 text-base font-medium text-white/90"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button className="w-full">Get Started</Button>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
};
