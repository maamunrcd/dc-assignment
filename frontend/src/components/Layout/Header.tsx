import { X } from 'lucide-react';
import { Link } from '@/components/Atoms/Link';
import { useWebsiteContext } from '@/context/WebsiteContext';
import { NAV_LINKS } from '@/lib/config/navigation';
import { cn } from '@/lib/utils/cn';

export const Header = () => {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } =
    useWebsiteContext();

  return (
    <header className="sticky top-0 z-50 pt-4 sm:pt-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center rounded-[22px] border border-white/10 bg-white/18 px-[20px] py-[15px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-md">
          <Link
            href="#home"
            variant="unstyled"
            className="justify-self-start"
            onClick={closeMobileMenu}
          >
            <img src="/logo.svg" alt="METATECH" className="h-6 w-auto" />
          </Link>

          <nav
            className="font-nav hidden items-center justify-center gap-8 md:flex lg:gap-10"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} variant="nav">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="font-nav hidden justify-self-end md:block">
            <Link href="#contact" variant="glass">
              Book a meeting
            </Link>
          </div>

          <button
            type="button"
            className="col-start-3 flex justify-self-end rounded-lg p-2 text-white md:hidden"
            onClick={toggleMobileMenu}
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
          'font-nav border-t border-white/10 bg-primary-dark md:hidden',
          isMobileMenuOpen ? 'block' : 'hidden'
        )}
        aria-label="Mobile navigation"
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                variant="nav-mobile"
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="#contact"
              variant="glass-full"
              onClick={closeMobileMenu}
            >
              Book a meeting
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
