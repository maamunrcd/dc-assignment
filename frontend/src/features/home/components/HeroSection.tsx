import type { HomeData } from '@/features/home/types';
import { BRAND_NAME } from '@/lib/config/constants';

import { Button } from '@/components/Atoms/Button';
import { SectionContainer } from '@/components/Atoms/SectionContainer';

interface HeroSectionProps {
  data: HomeData;
}

const renderHighlightedTitle = (title: string, highlights: string[]) => {
  let remaining = title;
  const parts: Array<{ text: string; highlight: boolean }> = [];

  highlights.forEach((word) => {
    const index = remaining.indexOf(word);
    if (index === -1) return;

    if (index > 0) {
      parts.push({ text: remaining.slice(0, index), highlight: false });
    }

    parts.push({ text: word, highlight: true });
    remaining = remaining.slice(index + word.length);
  });

  if (remaining) {
    parts.push({ text: remaining, highlight: false });
  }

  if (parts.length === 0) {
    return title;
  }

  return parts.map((part, index) =>
    part.highlight ? (
      <span key={index} className="text-accent">
        {part.text}
      </span>
    ) : (
      <span key={index}>{part.text}</span>
    )
  );
};

export const HeroSection = ({ data }: HeroSectionProps) => (
  <SectionContainer id="home" className="relative py-16 sm:py-24 lg:py-32">
    <div className="relative overflow-hidden rounded-3xl border border-white/10">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0,26,17,0.92) 0%, rgba(0,26,17,0.75) 45%, rgba(0,26,17,0.4) 100%), url(${data.heroBackgroundImage})`,
        }}
        role="img"
        aria-label="Team collaborating with digital network overlay"
      />
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center text-[5rem] font-black tracking-[0.3em] text-white/5 sm:text-[8rem] lg:text-[12rem]"
        aria-hidden="true"
      >
        {BRAND_NAME}
      </div>

      <div className="relative grid gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-14">
        <div>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {renderHighlightedTitle(data.heroTitle, data.heroTitleHighlight)}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            {data.heroDescription}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button>{data.heroCta.primary}</Button>
            <Button variant="secondary">{data.heroCta.secondary}</Button>
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-end">
          <button
            type="button"
            className="group relative flex h-28 w-28 items-center justify-center rounded-full border-2 border-accent bg-accent/10 transition hover:scale-105 hover:bg-accent/20 sm:h-32 sm:w-32"
            aria-label="Play introduction video"
          >
            <span className="ml-1 inline-block h-0 w-0 border-y-[12px] border-l-[20px] border-y-transparent border-l-accent" />
            <span className="absolute inset-0 rounded-full border border-accent/40 animate-ping opacity-30" />
          </button>
        </div>
      </div>
    </div>
  </SectionContainer>
);
