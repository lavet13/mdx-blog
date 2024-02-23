import { FC } from 'react';
import {
  NavLinkProps,
  Outlet,
  NavLink as RouterNavLink,
} from 'react-router-dom';
import { Link } from '@chakra-ui/react';


const Navigation: FC = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/test'>Test</NavLink>
      </div>
      <Outlet />
    </>
  );
};

const NavLink: FC<NavLinkProps> = ({ to, children, ...props }) => {
  return (
    <Link
      as={RouterNavLink}
      style={({ isActive, isTransitioning }) => ({
        fontWeight: isActive ? 'bold' : '',
        viewTransitionName: isTransitioning ? 'slide' : '',
      })}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Navigation;
