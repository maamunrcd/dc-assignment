import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

interface WebsiteContextValue {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}

const WebsiteContext = createContext<WebsiteContextValue | null>(null);

export const WebsiteProvider = ({ children }: { children: ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const value = useMemo(
    () => ({
      isMobileMenuOpen,
      toggleMobileMenu,
      closeMobileMenu,
    }),
    [isMobileMenuOpen, toggleMobileMenu, closeMobileMenu]
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
