import { cn } from '@/lib/utils/cn';
import type { SolutionTab } from '@/types/api';

const TAB_INLINE_PADDING_LG = ['lg:px-[65px]', 'lg:px-[30px]', 'lg:px-[45px]'] as const;

interface SolutionsTabListProps {
  tabs: SolutionTab[];
  activeTabId: string;
  onTabChange: (id: string) => void;
}

export const SolutionsTabList = ({
  tabs,
  activeTabId,
  onTabChange,
}: SolutionsTabListProps) => (
  <div className="mb-8 grid grid-cols-12 sm:mb-10 lg:mb-[86px]">
    <div
      className="col-span-12 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] lg:col-span-8 lg:col-start-5 [&::-webkit-scrollbar]:hidden"
      role="tablist"
      aria-label="Solution categories"
    >
      <div className="inline-flex w-max flex-nowrap items-center gap-2 lg:h-[70px] lg:gap-1 lg:rounded-[15px] lg:bg-white lg:px-[5px] lg:shadow-sm">
        {tabs.map((tab, index) => {
          const isActive = activeTabId === tab.id;

          return (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${tab.id}`}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                'font-nav inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-[12px] px-5 py-3 text-base font-bold leading-none tracking-[-0.9px] transition-colors duration-200 sm:text-[18px]',
                'lg:h-[60px] lg:rounded-[10px] lg:py-0 lg:leading-[30px]',
                TAB_INLINE_PADDING_LG[index] ?? 'lg:px-6',
                isActive
                  ? 'bg-primary-dark text-[#06FF70]'
                  : 'border border-black/5 bg-white text-[#161616] hover:text-primary-dark lg:border-0 lg:bg-transparent'
              )}
            >
              {tab.tabTitle}
            </button>
          );
        })}
      </div>
    </div>
  </div>
);
