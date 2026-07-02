import type { ReactNode } from 'react';

import type { HomeData } from '@/features/home/types';
import { Footer } from '@/components/Layout/Footer';
import { Header } from '@/components/Layout/Header';

interface MainLayoutProps {
  children: ReactNode;
  footer?: HomeData['footer'];
}

export const MainLayout = ({ children, footer }: MainLayoutProps) => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1 pt-16 sm:pt-[4.5rem]">{children}</main>
    {footer ? <Footer footer={footer} /> : null}
  </div>
);
