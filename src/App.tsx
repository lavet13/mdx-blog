import { Route, Routes } from 'react-router-dom';

import Header from './pages/section/header';
import NotFound from './pages/section/404/not-found';

import { PAGES } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        {Object.values(PAGES).map(page => (
          <Route
            key={page.path}
            path={page.path}
            element={<page.component />}
          />
        ))}
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
