import { Link } from '@/components/Atoms/Link';
import { LazyImage } from '@/components/Atoms/LazyImage';
import type { HeroMedia } from '@/types/api';

const DESKTOP_PLAY_SIZE = 154;
const DESKTOP_PLAY_HALF = DESKTOP_PLAY_SIZE / 2;
const DESKTOP_NOTCH_OFFSET = DESKTOP_PLAY_HALF - 8;
const MOBILE_PLAY_SIZE = 112;

interface HeroMediaBannerProps {
  media: HeroMedia;
}

export const HeroMediaBanner = ({ media }: HeroMediaBannerProps) => {
  const mobileImage = media.mobileImageUrl || media.backgroundImage;

  return (
    <>
      {/* Mobile: play button then image */}
      <div className="md:hidden">
        <div className="flex justify-start md:justify-center py-6">
          <Link
            href={media.playUrl}
            variant="unstyled"
            className="transition-transform hover:scale-105"
            aria-label="Play video"
          >
            <img
              src="/play.svg"
              alt=""
              width={MOBILE_PLAY_SIZE}
              height={MOBILE_PLAY_SIZE}
            />
          </Link>
        </div>

        <div className="relative overflow-hidden rounded-[26px]">
          <LazyImage
            src={mobileImage}
            alt={media.alt}
            className="block aspect-[4/3] w-full object-cover"
          />
        </div>
      </div>

      {/* Desktop: notch overlap with banner image */}
      <div
        className="relative hidden w-full md:block"
        style={{ paddingTop: DESKTOP_NOTCH_OFFSET }}
      >
        <div className="relative overflow-hidden rounded-[26px]">
          <LazyImage
            src={media.backgroundImage}
            alt={media.alt}
            className="block aspect-16/7 w-full object-cover lg:aspect-[16/6.2]"
          />
        </div>

        <div
          className="absolute left-1/2 z-[1] -translate-x-1/2 bg-primary-dark"
          style={{
            top: DESKTOP_NOTCH_OFFSET,
            width: DESKTOP_PLAY_SIZE + 24,
            height: DESKTOP_PLAY_HALF + 12,
            borderBottomLeftRadius: DESKTOP_PLAY_HALF + 12,
            borderBottomRightRadius: DESKTOP_PLAY_HALF + 12,
          }}
          aria-hidden="true"
        />

        <Link
          href={media.playUrl}
          variant="unstyled"
          className="absolute left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-105"
          style={{ top: DESKTOP_NOTCH_OFFSET }}
          aria-label="Play video"
        >
          <img
            src="/play.svg"
            alt=""
            width={DESKTOP_PLAY_SIZE}
            height={DESKTOP_PLAY_SIZE}
          />
        </Link>
      </div>
    </>
  );
};
