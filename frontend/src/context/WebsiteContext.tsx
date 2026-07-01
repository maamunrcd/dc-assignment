import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

import type { FeatureCategory } from '@/lib/config/constants';

interface WebsiteContextValue {
  activeFeatureCategory: FeatureCategory;
  setActiveFeatureCategory: (category: FeatureCategory) => void;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}

const WebsiteContext = createContext<WebsiteContextValue | undefined>(
  undefined
);

export const WebsiteProvider = ({ children }: { children: ReactNode }) => {
  const [activeFeatureCategory, setActiveFeatureCategory] =
    useState<FeatureCategory>('All');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const value = useMemo(
    () => ({
      activeFeatureCategory,
      setActiveFeatureCategory,
      isMobileMenuOpen,
      toggleMobileMenu,
      closeMobileMenu,
    }),
    [
      activeFeatureCategory,
      isMobileMenuOpen,
      toggleMobileMenu,
      closeMobileMenu,
    ]
  );

  return (
    <WebsiteContext.Provider value={value}>{children}</WebsiteContext.Provider>
  );
};

export const useWebsiteContext = () => {
  const context = useContext(WebsiteContext);

  if (!context) {
    throw new Error('useWebsiteContext must be used within WebsiteProvider');
  }

  return context;
};
