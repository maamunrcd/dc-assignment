import { Link } from '@/components/Atoms/Link';
import { SolutionFeatureCard } from '@/features/solutions/components/SolutionFeatureCard';
import type { SolutionTab } from '@/types/api';

interface SolutionsTabPanelProps {
  tab: SolutionTab;
}

export const SolutionsTabPanel = ({ tab }: SolutionsTabPanelProps) => (
  <div
    id={`tabpanel-${tab.id}`}
    role="tabpanel"
    aria-labelledby={`tab-${tab.id}`}
    className="grid grid-cols-12 gap-x-6 gap-y-4 lg:gap-y-8 lg:items-start"
  >
    <span className="col-span-12 text-[4.5rem] leading-none font-extrabold text-primary-dark sm:text-8xl lg:col-span-4 lg:col-start-1 lg:text-9xl">
      {tab.number}
    </span>

    <div className="col-span-12 lg:col-span-6 lg:col-start-5">
      <h3 className="text-xl font-bold leading-tight text-primary-dark sm:text-3xl lg:text-4xl">
        {tab.title}
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-primary-dark/80 sm:mt-5 sm:text-lg sm:text-primary-dark/75">
        {tab.subtitle}
      </p>
      <Link href={tab.cta.href} variant="dark" className="mt-6 sm:mt-8">
        {tab.cta.label}
      </Link>
    </div>

    <div className="col-span-12 mt-6 grid grid-cols-1 gap-4 sm:mt-[50px] sm:grid-cols-2 lg:grid-cols-3">
      {tab.features.map((feature) => (
        <SolutionFeatureCard key={feature.id} feature={feature} />
      ))}
    </div>
  </div>
);
