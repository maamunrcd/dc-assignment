import { Link } from '@/components/Atoms/Link';
import { LazyImage } from '@/components/Atoms/LazyImage';
import { Slider } from '@/lib/utils/slickSlider';
import type { ShowcaseData } from '@/types/api';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
};

interface ShowcaseSectionProps {
  showcase: ShowcaseData;
}

export const ShowcaseSection = ({ showcase }: ShowcaseSectionProps) => {
  const product =
    showcase.products.find((item) => item.id === showcase.defaultProductId) ??
    showcase.products[0];

  if (!product || product.slides.length === 0) {
    return null;
  }

  return (
    <section
      id="showcase"
      className="product-highlight-section box-border w-full px-5 py-8 sm:px-[30px] sm:py-[25px] lg:min-h-[700px]"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 lg:h-full lg:min-h-[650px] lg:flex-row lg:items-stretch lg:gap-10">
        <div className="flex w-full flex-col text-white lg:w-1/2 lg:justify-between">
          <LazyImage
            src={product.logo.imageUrl}
            alt={product.logo.alt}
            className="h-9 w-auto max-w-[180px] shrink-0 object-contain object-left"
            fallbackClassName="h-9 w-32"
          />

          <div className="mt-10 lg:mt-auto lg:pt-16 xl:mt-[230px]">
            <h2 className="font-sans text-3xl font-extrabold leading-tight tracking-[-1.6px] text-white sm:text-4xl lg:text-[48px] lg:leading-[54px] lg:tracking-[-2.4px]">
              {product.title}
            </h2>
            <p className="mt-5 font-nav text-base font-medium leading-relaxed tracking-[-0.54px] text-white sm:text-[18px] sm:leading-[27px]">
              {product.subtitle}
            </p>
            <Link
              href={product.cta.href}
              variant="outline-light"
              className="mt-8 px-[35px] py-[10px] font-nav text-[14px] font-bold leading-6 tracking-[-0.7px] sm:mt-[50px]"
            >
              {product.cta.label}&nbsp;→
            </Link>
          </div>
        </div>

        <div className="relative min-h-[280px] w-full sm:min-h-[360px] lg:min-h-0 lg:w-1/2 lg:flex-1">
          <Slider
            {...sliderSettings}
            className="product-highlight-slider h-full min-h-[280px] sm:min-h-[360px]"
          >
            {product.slides.map((slide) => (
              <div key={slide.id} className="h-full outline-none">
                <div className="relative flex h-full min-h-[280px] items-center justify-center sm:min-h-[360px]">
                  <LazyImage
                    src={slide.imageUrl}
                    alt={slide.alt}
                    className="h-full max-h-full w-full rounded-[24px] object-contain object-center"
                    fallbackClassName="min-h-[240px] w-full"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
