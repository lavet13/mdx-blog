import { FC } from 'react';
import NavLink from './nav-link';

const Navigation: FC = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/test'>Test</NavLink>
      </div>
    </>
  );
};


export default Navigation;
