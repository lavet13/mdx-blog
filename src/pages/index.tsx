import Home from './pages/home';

export type PageInfo = {
  path: string;
  component: React.FC;
};

export const PAGES: Record<string, PageInfo> = {
  homePage: {
    path: '/',
    component: Home,
  },
};
