import { useState } from 'react';
import { SectionContainer } from '@/components/Atoms/SectionContainer';
import { SolutionsIntro } from '@/features/solutions/components/SolutionsIntro';
import { SolutionsTabList } from '@/features/solutions/components/SolutionsTabList';
import { SolutionsTabPanel } from '@/features/solutions/components/SolutionsTabPanel';
import type { SolutionsData } from '@/types/api';

interface SolutionsSectionProps {
  solutions: SolutionsData;
}

export const SolutionsSection = ({ solutions }: SolutionsSectionProps) => {
  const [activeTabId, setActiveTabId] = useState<string | undefined>();

  const resolvedTabId =
    activeTabId ?? solutions.defaultTabId ?? solutions.tabs[0]?.id;
  const activeTab = solutions.tabs.find((tab) => tab.id === resolvedTabId);

  if (!activeTab) {
    return null;
  }

  return (
    <section id="solutions" className="bg-white pt-10 text-primary-dark sm:pt-16 lg:pt-24">
      {solutions.intro && (
        <SectionContainer>
          <SolutionsIntro intro={solutions.intro} />
        </SectionContainer>
      )}

      <div className="mt-6 bg-[rgba(239,239,239,1)] pt-5 pb-12 sm:mt-10 sm:pt-[30px] sm:pb-[73px] lg:mt-14">
        <SectionContainer>
          <SolutionsTabList
            tabs={solutions.tabs}
            activeTabId={activeTab.id}
            onTabChange={setActiveTabId}
          />
          <SolutionsTabPanel tab={activeTab} />
        </SectionContainer>
      </div>
    </section>
  );
};
