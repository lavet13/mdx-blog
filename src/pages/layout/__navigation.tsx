import { FC } from 'react';
import NavLink from './__nav-link';

const Navigation: FC = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/login'>Log In</NavLink>
      </div>
    </>
  );
};


export default Navigation;
