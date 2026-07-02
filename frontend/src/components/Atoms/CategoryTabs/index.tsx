import type { FeatureCategory } from '@/lib/config/constants';

interface CategoryTabsProps {
  categories: string[];
  activeCategory: FeatureCategory;
  onChange: (category: FeatureCategory) => void;
}

export const CategoryTabs = ({
  categories,
  activeCategory,
  onChange,
}: CategoryTabsProps) => (
  <div
    className="flex flex-wrap gap-2 sm:gap-3"
    role="tablist"
    aria-label="Feature categories"
  >
    {categories.map((category) => {
      const isActive = activeCategory === category;

      return (
        <button
          key={category}
          type="button"
          role="tab"
          aria-selected={isActive}
          onClick={() => onChange(category as FeatureCategory)}
          className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition sm:px-5 sm:py-2.5 sm:text-sm ${
            isActive
              ? 'bg-accent text-primary-dark shadow-[0_0_20px_rgba(0,255,65,0.3)]'
              : 'border border-white/15 text-white/60 hover:border-white/30 hover:text-white'
          }`}
        >
          {category}
        </button>
      );
    })}
  </div>
);
