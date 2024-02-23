import { Route, Routes } from 'react-router-dom';
import NotFound from './not-found';
import Navigation from './navigation';
import Home from './home';

const App = () => {
  return (
    <Routes>
      <Route path='*' element={<NotFound />}>
      </Route>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
