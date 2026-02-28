import type { ReactNode } from 'react';
import { About, ErrorPage, Home, Works } from '../pages';

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  WORKS: '/works',
  NOTFOUND: '*',
};

type Route = {
  path: string;
  element: ReactNode;
};

export const routes: Route[] = [
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.ABOUT,
    element: <About />,
  },
  {
    path: ROUTES.WORKS,
    element: <Works />,
  },
  {
    path: ROUTES.NOTFOUND,
    element: <ErrorPage />,
  },
];
