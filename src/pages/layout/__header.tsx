import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Navigation from './__navigation';

const Header: FC = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Header;
