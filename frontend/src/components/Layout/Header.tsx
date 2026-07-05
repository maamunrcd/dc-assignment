import { useState, type CSSProperties } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { Link } from '@/components/Atoms/Link';
import { SolutionsMegaMenu } from '@/components/Layout/SolutionsMegaMenu';
import { useWebsiteContext } from '@/context/WebsiteContext';
import { cn } from '@/lib/utils/cn';
import type { HeaderData, SolutionsMenuItem } from '@/types/api';

const MEGA_MENU_PANEL_HEIGHT = 339;
const MEGA_MENU_GAP = 6;
const MEGA_MENU_PADDING_BOTTOM = 20;
const MEGA_MENU_EXTRA_HEIGHT =
  MEGA_MENU_GAP + MEGA_MENU_PANEL_HEIGHT + MEGA_MENU_PADDING_BOTTOM;

const megaMenuShellStyle = {
  '--mega-menu-extra-height': `${MEGA_MENU_EXTRA_HEIGHT}px`,
} as CSSProperties;

interface HeaderProps {
  header: HeaderData;
  solutionsMenu: SolutionsMenuItem[];
}

export const Header = ({ header, solutionsMenu }: HeaderProps) => {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } =
    useWebsiteContext();
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);

  const solutionsLink = header.navLinks.find((link) => link.hasMegaMenu);
  const solutionsHref = solutionsLink?.href ?? '#solutions';

  const closeSolutionsMenu = () => setIsSolutionsOpen(false);

  const handleNavClick = () => {
    closeSolutionsMenu();
    setIsMobileSolutionsOpen(false);
    closeMobileMenu();
  };

  const handleToggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      setIsMobileSolutionsOpen(false);
    }

    toggleMobileMenu();
  };

  return (
    <header className="sticky top-0 z-50 pt-4 sm:pt-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="relative hidden md:block"
          onMouseLeave={() => setIsSolutionsOpen(false)}
        >
          <div
            className={cn(
              'pointer-events-none absolute left-0 right-0 top-0 overflow-hidden rounded-[25px] transition-[height] duration-500 ease-in-out',
              isSolutionsOpen
                ? 'h-[calc(100%+var(--mega-menu-extra-height))]'
                : 'h-full'
            )}
            style={megaMenuShellStyle}
            aria-hidden="true"
          >
            <div
              className={cn(
                'absolute inset-0 rounded-[25px] border border-white/10 bg-white/18 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-md transition-opacity duration-500 ease-in-out',
                isSolutionsOpen ? 'opacity-0' : 'opacity-100'
              )}
            />
            <div
              className={cn(
                'absolute inset-0 rounded-[25px] bg-[#161616] transition-opacity duration-500 ease-in-out',
                isSolutionsOpen ? 'opacity-100' : 'opacity-0'
              )}
            />
          </div>

          <div className="relative z-10 grid grid-cols-[1fr_auto_1fr] items-center px-[20px] py-[15px]">
            <Link
              href={header.logo.href}
              variant="unstyled"
              className="justify-self-start"
              onClick={handleNavClick}
              onMouseEnter={closeSolutionsMenu}
            >
              <img
                src={header.logo.imageUrl}
                alt={header.logo.alt}
                className="h-6 w-auto"
              />
            </Link>

            <nav
              className="font-nav flex items-center justify-center gap-8 lg:gap-10"
              aria-label="Main navigation"
            >
              {header.navLinks.map((link) =>
                link.hasMegaMenu ? (
                  <div
                    key={link.id}
                    onMouseEnter={() => setIsSolutionsOpen(true)}
                  >
                    <Link
                      href={link.href}
                      variant="nav"
                      aria-expanded={isSolutionsOpen}
                      aria-haspopup="true"
                      className={cn(isSolutionsOpen && 'text-accent')}
                      onClick={handleNavClick}
                    >
                      {link.label}
                    </Link>
                  </div>
                ) : (
                  <Link
                    key={link.id}
                    href={link.href}
                    variant="nav"
                    onClick={handleNavClick}
                    onMouseEnter={closeSolutionsMenu}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            <div
              className="font-nav justify-self-end"
              onMouseEnter={closeSolutionsMenu}
            >
              <Link
                href={header.cta.href}
                variant="glass"
                onClick={handleNavClick}
              >
                {header.cta.label}
              </Link>
            </div>
          </div>

          <div
            className={cn(
              'absolute inset-x-0 top-full z-20 rounded-b-[25px] bg-[#161616] px-5 pb-5 pt-1.5 transition-[opacity,transform,visibility] duration-500 ease-in-out before:absolute before:-top-1.5 before:left-0 before:right-0 before:h-1.5 before:bg-[#161616] before:content-[""]',
              isSolutionsOpen
                ? 'visible translate-y-0 opacity-100'
                : 'pointer-events-none invisible -translate-y-2 opacity-0'
            )}
            aria-hidden={!isSolutionsOpen}
            onMouseEnter={() => setIsSolutionsOpen(true)}
          >
            <SolutionsMegaMenu
              items={solutionsMenu}
              onNavigate={handleNavClick}
            />
          </div>
        </div>

        <div className="grid grid-cols-[1fr_auto_1fr] items-center rounded-[25px] border border-white/10 bg-white/18 px-[20px] py-[15px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-md md:hidden">
          <Link
            href={header.logo.href}
            variant="unstyled"
            className="justify-self-start"
            onClick={handleNavClick}
          >
            <img
              src={header.logo.imageUrl}
              alt={header.logo.alt}
              className="h-6 w-auto"
            />
          </Link>

          <button
            type="button"
            className="col-start-3 flex justify-self-end rounded-lg p-2 text-white"
            onClick={handleToggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <img src="/hamburger.svg" alt="" width={24} height={24} />
            )}
          </button>
        </div>
      </div>

      <nav
        className={cn(
          'font-nav max-h-[calc(100dvh-7rem)] overflow-y-auto overscroll-y-contain border-t border-white/10 bg-primary-dark md:hidden',
          isMobileMenuOpen ? 'block' : 'hidden'
        )}
        aria-label="Mobile navigation"
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          {header.navLinks.map((link) =>
            link.href === solutionsHref ? (
              <li key={link.id}>
                <button
                  type="button"
                  className={cn(
                    'font-nav flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-white/5',
                    isMobileSolutionsOpen
                      ? 'text-accent'
                      : 'text-white/80 hover:text-accent'
                  )}
                  onClick={() => setIsMobileSolutionsOpen((prev) => !prev)}
                  aria-expanded={isMobileSolutionsOpen}
                  aria-controls="mobile-solutions-menu"
                >
                  {link.label}
                  <ChevronDown
                    size={18}
                    className={cn(
                      'shrink-0 transition-transform duration-300',
                      isMobileSolutionsOpen && 'rotate-180'
                    )}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id="mobile-solutions-menu"
                  className={cn(
                    'grid transition-[grid-template-rows] duration-300 ease-in-out',
                    isMobileSolutionsOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  )}
                  aria-hidden={!isMobileSolutionsOpen}
                >
                  <div className="min-h-0 overflow-hidden">
                    <SolutionsMegaMenu
                      items={solutionsMenu}
                      variant="mobile"
                      onNavigate={handleNavClick}
                      className="px-1 pb-1 pt-2"
                    />
                  </div>
                </div>
              </li>
            ) : (
              <li key={link.id}>
                <Link
                  href={link.href}
                  variant="nav-mobile"
                  onClick={handleNavClick}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
          <li className="pt-2">
            <Link
              href={header.cta.href}
              variant="glass-full"
              onClick={handleNavClick}
            >
              {header.cta.label}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
