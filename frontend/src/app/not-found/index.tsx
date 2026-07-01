import { MainLayout } from '@/components/Layout/MainLayout';

const NotFoundPage = () => (
  <MainLayout>
    <div className="mx-auto flex min-h-[60vh] max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
      <h1 className="text-5xl font-bold text-accent">404</h1>
      <p className="mt-4 text-lg text-white/70">Page not found</p>
      <a
        href="/"
        className="mt-8 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-primary-dark"
      >
        Back to home
      </a>
    </div>
  </MainLayout>
);

export default NotFoundPage;
