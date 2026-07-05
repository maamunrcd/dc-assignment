import { X } from 'lucide-react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { isDirectVideoUrl, toEmbedVideoUrl } from '@/lib/utils/video-url';
import { cn } from '@/lib/utils/cn';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
}

export const VideoModal = ({
  isOpen,
  onClose,
  videoUrl,
  title = 'Video player',
}: VideoModalProps) => {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const isDirectVideo = isDirectVideoUrl(videoUrl);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-label="Close video"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={cn(
          'relative z-10 w-full max-w-5xl animate-[video-modal-in_250ms_ease-out]'
        )}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-12 right-0 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 sm:-top-14"
          aria-label="Close video"
        >
          <X size={22} />
        </button>

        <div className="overflow-hidden rounded-[20px] border border-white/15 bg-black shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
          <div className="relative aspect-video w-full">
            {isDirectVideo ? (
              <video
                src={videoUrl}
                title={title}
                className="absolute inset-0 h-full w-full bg-black object-cover"
                controls
                autoPlay
                playsInline
              />
            ) : (
              <iframe
                src={toEmbedVideoUrl(videoUrl)}
                title={title}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
