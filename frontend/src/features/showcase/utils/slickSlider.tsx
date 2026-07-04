import SlickSlider from 'react-slick';
import type { ComponentType, ReactNode } from 'react';
import type { Settings } from 'react-slick';

export type SlickSliderProps = Settings & {
  className?: string;
  children?: ReactNode;
};

const resolveSlider = (module: unknown): ComponentType<SlickSliderProps> => {
  if (typeof module === 'function') {
    return module as ComponentType<SlickSliderProps>;
  }

  const first = module as { default?: unknown };

  if (typeof first.default === 'function') {
    return first.default as ComponentType<SlickSliderProps>;
  }

  const nested = first.default as { default?: ComponentType<SlickSliderProps> };

  if (typeof nested?.default === 'function') {
    return nested.default;
  }

  throw new Error('Failed to resolve react-slick Slider component.');
};

export const Slider = resolveSlider(SlickSlider);
