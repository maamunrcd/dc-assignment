import { useWebsiteContext } from '@/context/WebsiteContext';
import { HEADER_CTA, NAV_LINKS } from '@/lib/config/constants';
import { useScrolled } from '@/hooks/useScrolled';

import { Button } from '@/components/Atoms/Button';
import { Logo } from '@/components/Atoms/Logo';
import { NavLink } from '@/components/Atoms/NavLink';

export const Header = () => {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } =
    useWebsiteContext();
  const isScrolled = useScrolled();

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'border-b border-white/8 bg-primary-dark/90 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl'
          : 'border-b border-transparent bg-primary-dark/40 backdrop-blur-sm'
      }`}
    >
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[4.5rem] sm:px-6 lg:px-10">
        <Logo onClick={closeMobileMenu} />

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex lg:gap-10"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        <div className="hidden md:block">
          <Button className="h-11 px-6 py-0 text-sm font-semibold">
            {HEADER_CTA}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white md:hidden"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="relative h-3.5 w-5">
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-white transition-all duration-200 ${isMobileMenuOpen ? 'top-1.5 rotate-45' : 'top-0'}`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-white transition-all duration-200 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-white transition-all duration-200 ${isMobileMenuOpen ? 'top-1.5 -rotate-45' : 'top-3'}`}
            />
          </div>
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? 'max-h-96 border-t border-white/8' : 'max-h-0'
        }`}
      >
        <nav
          className="bg-primary-dark/95 px-4 py-4"
          aria-label="Mobile navigation"
        >
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-white/85 transition hover:bg-white/5 hover:text-white"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <Button className="h-11 w-full">{HEADER_CTA}</Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
