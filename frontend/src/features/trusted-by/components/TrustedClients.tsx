import { SectionContainer } from '@/components/Atoms/SectionContainer';
import { LazyImage } from '@/components/Atoms/LazyImage';
import type { TrustedByData } from '@/types/api';

interface TrustedClientsProps {
  trustedBy: TrustedByData;
}

export const TrustedClients = ({ trustedBy }: TrustedClientsProps) => (
  <section className="pb-5" aria-label="Trusted clients">
    <SectionContainer as="div" className="px-5">
      <div className="grid grid-cols-12 gap-x-6 gap-y-10 pt-16 pb-5 sm:pt-20 lg:items-center lg:pt-[100px]">
        <div className="col-span-12 lg:col-span-4">
          {trustedBy.heading?.parts && (
            <h2 className="w-full max-w-md font-nav text-[18px] leading-5 font-semibold tracking-[-0.9px] sm:w-[50%] lg:w-1/2">
              {trustedBy.heading.parts.map((part, index) => (
              <span
                key={`${part.text}-${index}`}
                className={part.accent ? 'text-[#33F987]' : 'text-white'}
              >
                {part.text}
              </span>
            ))}
            </h2>
          )}
        </div>

        <div className="col-span-12 grid grid-cols-2 divide-x divide-y divide-white/15 border border-white/15 sm:grid-cols-4 lg:col-span-8">
          {trustedBy.logos.map((brand) => (
            <div
              key={brand.id}
              className="flex min-h-[72px] items-center justify-center p-4 sm:min-h-[96px] sm:p-6 lg:min-h-[108px] lg:p-8"
            >
              <LazyImage
                src={brand.imageUrl}
                alt={brand.imageTitle}
                className="max-h-7 w-auto max-w-full object-contain sm:max-h-9 lg:max-h-10"
                fallbackClassName="h-8 w-20"
              />
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  </section>
);
