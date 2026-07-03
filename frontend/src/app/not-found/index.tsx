import { Link as RouterLink } from 'react-router-dom';
import { MainLayout } from '@/components/Layout/MainLayout';
import { SectionContainer } from '@/components/Atoms/SectionContainer';
import { Button } from '@/components/Atoms/Button';

const NotFoundPage = () => (
  <MainLayout>
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-white">
      <SectionContainer className="text-center">
        <h1 className="text-6xl font-bold text-accent">404</h1>
        <p className="mt-4 text-lg text-white/70">Page not found</p>
        <RouterLink to="/" className="mt-8 inline-block">
          <Button>Back to Home</Button>
        </RouterLink>
      </SectionContainer>
    </div>
  </MainLayout>
);

export default NotFoundPage;
