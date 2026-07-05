const DIRECT_VIDEO_PATTERN = /\.(mp4|webm|ogg)(\?.*)?$/i;

export const isDirectVideoUrl = (url: string): boolean => {
  if (DIRECT_VIDEO_PATTERN.test(url)) {
    return true;
  }

  try {
    const parsed = new URL(url, window.location.origin);
    return DIRECT_VIDEO_PATTERN.test(parsed.pathname);
  } catch {
    return url.startsWith('/');
  }
};

export const toEmbedVideoUrl = (url: string): string => {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes('youtube.com')) {
      const embedMatch = parsed.pathname.match(/^\/embed\/([^/]+)/);

      if (embedMatch?.[1]) {
        return `https://www.youtube-nocookie.com/embed/${embedMatch[1]}?autoplay=1&rel=0`;
      }

      const videoId = parsed.searchParams.get('v');

      if (videoId) {
        return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
      }
    }

    if (parsed.hostname.includes('youtu.be')) {
      const videoId = parsed.pathname.replace('/', '');

      if (videoId) {
        return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
      }
    }
  } catch {
    return url;
  }

  return url;
};
