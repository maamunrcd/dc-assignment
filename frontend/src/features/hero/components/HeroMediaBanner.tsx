import { useState, type CSSProperties } from 'react';
import { VideoModal } from '@/components/Atoms/VideoModal';
import { LazyImage } from '@/components/Atoms/LazyImage';
import { cn } from '@/lib/utils/cn';
import type { HeroMedia } from '@/types/api';

const DESKTOP_PLAY_SIZE = 154;
const DESKTOP_PLAY_HALF = DESKTOP_PLAY_SIZE / 2;
const DESKTOP_NOTCH_OFFSET = DESKTOP_PLAY_HALF - 8;
const MOBILE_PLAY_SIZE = 112;

interface HeroMediaBannerProps {
  media: HeroMedia;
}

interface PlayButtonProps {
  size: number;
  className?: string;
  style?: CSSProperties;
  onClick: () => void;
}

const PlayButton = ({ size, className, style, onClick }: PlayButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    className={cn('transition-transform hover:scale-105', className)}
    aria-label="Play video"
    style={style}
  >
    <img src="/play.svg" alt="" width={size} height={size} />
  </button>
);

export const HeroMediaBanner = ({ media }: HeroMediaBannerProps) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const mobileImage = media.mobileImageUrl || media.backgroundImage;

  return (
    <>
      <div className="md:hidden">
        <div className="flex justify-start py-6 md:justify-center">
          <PlayButton
            size={MOBILE_PLAY_SIZE}
            onClick={() => setIsVideoOpen(true)}
          />
        </div>

        <div className="relative overflow-hidden rounded-[26px]">
          <LazyImage
            src={mobileImage}
            alt={media.alt}
            priority
            className="block aspect-[4/3] w-full object-cover"
          />
        </div>
      </div>

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

        <PlayButton
          size={DESKTOP_PLAY_SIZE}
          className="absolute left-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
          style={{ top: DESKTOP_NOTCH_OFFSET }}
          onClick={() => setIsVideoOpen(true)}
        />
      </div>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl={media.playUrl}
        title={media.alt}
      />
    </>
  );
};
