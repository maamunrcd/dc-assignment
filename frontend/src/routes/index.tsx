import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Spinner } from '@/components/Atoms/Spinner';
import { fallbackRoute, publicRoutes } from './public-routes';

export const BaseRoutes = () => (
  <BrowserRouter>
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <Spinner className="h-10 w-10" />
        </div>
      }
    >
      <Routes>
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<fallbackRoute.Component />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
