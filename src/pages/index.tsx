import Home from './pages/home';
import PostById from './pages/post-by-id';

export type PageInfo = {
  path: string;
  component: React.FC;
};

export const PAGES: Record<string, PageInfo> = {
  homePage: {
    path: '/',
    component: Home,
  },
  postById: {
    path: 'post/:postId',
    component: PostById
  },
};

