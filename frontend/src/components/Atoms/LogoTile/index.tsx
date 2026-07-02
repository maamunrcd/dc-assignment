import type { PartnerLogo } from '@/features/home/types';

interface LogoTileProps {
  logo: PartnerLogo;
  variant?: 'media' | 'trusted';
}

export const LogoTile = ({ logo, variant = 'trusted' }: LogoTileProps) => {
  const isMedia = variant === 'media';

  return (
    <div
      className={
        isMedia
          ? 'flex min-w-[120px] shrink-0 items-center justify-center px-2 py-4 sm:min-w-0'
          : 'flex aspect-[4/3] items-center justify-center rounded-2xl border border-black/5 bg-[#ececec] p-4 transition hover:shadow-md sm:rounded-3xl sm:p-6'
      }
    >
      <img
        src={logo.logo}
        alt={logo.name}
        loading="lazy"
        decoding="async"
        className={
          isMedia
            ? 'h-6 w-auto max-w-[110px] object-contain opacity-60 brightness-0 invert sm:h-7'
            : 'h-7 w-auto max-w-[90px] object-contain sm:h-8'
        }
      />
    </div>
  );
};
