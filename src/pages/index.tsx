import React from 'react';
import Home from './pages/home';

export const NAMES = {
  homePage: 'HomePage',
};

export const PAGES = [
  {
    name: NAMES.homePage,
    path: '/',
  },
];

export const PAGES_COMPONENTS: Record<string, React.ReactNode> = {
  [NAMES.homePage]: <Home />,
};
