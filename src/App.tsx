import { Route, Routes } from 'react-router-dom';

import Header from './pages/section/header';
import NotFound from './pages/section/404/not-found';

import { PAGES, PAGES_COMPONENTS } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        {PAGES.map(page => {
          return (
            <Route key={page.path} path={page.path} element={PAGES_COMPONENTS[page.name]} />
          );
        })}
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
