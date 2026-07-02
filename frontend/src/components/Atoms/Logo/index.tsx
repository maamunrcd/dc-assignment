import { BRAND_NAME } from '@/lib/config/constants';

interface LogoProps {
  onClick?: () => void;
}

export const Logo = ({ onClick }: LogoProps) => (
  <a
    href="#home"
    onClick={onClick}
    className="inline-flex shrink-0 items-center text-base font-extrabold uppercase tracking-[0.12em] text-white sm:text-lg lg:text-[1.125rem]"
    aria-label={`${BRAND_NAME} home`}
  >
    {BRAND_NAME}
  </a>
);
