import { Route, Routes } from 'react-router-dom';

import Header from './pages/layout/__header';
import NotFound from './pages/layout/__not-found';

const PagePathsWithComponents: Record<
  string,
  { default: React.ComponentType }
> = import.meta.glob('./pages/**/*.tsx', {
  eager: true,
});

const routes = Object.keys(PagePathsWithComponents).map(path => {
  const excludedMatch = path.match(/\.\/pages\/layout\/__[^/\[]+\.tsx$/);
  // console.log({ excludedMatch });
  if (excludedMatch) {
    return null; // Exclude files starting with '__'
  }

  const dynamicMatch = path.match(/\.\/pages\/(.*)\/\[(.*)\]\.tsx$/);
  // console.log({ dynamicMatch });
  if (dynamicMatch) {
    const [, routePath, paramName] = dynamicMatch;
    return {
      name: `${routePath}/${paramName}`,
      path: `${routePath}/:${paramName}`,
      component: PagePathsWithComponents[path].default,
    };
  }

  const regularMatch = path.match(/\.\/pages\/(.*)\.tsx$/);
  // console.log({ regularMatch });
  if (regularMatch) {
    const [, name] = regularMatch;
    const lowerName = name.toLowerCase();
    return {
      name,
      path: lowerName === 'home' ? '/' : `/${lowerName.toLowerCase()}`,
      component: PagePathsWithComponents[path].default,
    };
  }

  return null; // Ignore invalid paths
});

console.log({ routes });

const filteredRoutes = routes.filter(
  (
    route
  ): route is { name: string; path: string; component: React.ComponentType } =>
    route !== null
);

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        {filteredRoutes.map(({ path, component: ReactComponent }) => (
          <Route key={path} path={path} element={<ReactComponent />} />
        ))}
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
