import { lazy } from 'react';
import { PUBLIC_ROUTES } from './paths';

const HomePage = lazy(() => import('@/app/home'));
const NotFoundPage = lazy(() => import('@/app/not-found'));

export const publicRoutes = [
  { path: PUBLIC_ROUTES.HOME, Component: HomePage },
] as const;

export const fallbackRoute = { Component: NotFoundPage };
