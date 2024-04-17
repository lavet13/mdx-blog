import { FC } from 'react';
import { Link, LinkProps } from '@chakra-ui/react';
import { NavLinkProps, NavLink as RouterNavLink } from 'react-router-dom';
import useIsClient from '../../utils/ssr/use-is-client';

const NavLink: FC<NavLinkProps & LinkProps> = ({ to, children, ...props }) => {
  const { isClient, key } = useIsClient();

  return (
    <Link
      key={key}
      as={RouterNavLink}
      {...(isClient
        ? {
            style: (({ isActive, isTransitioning }) => ({
              fontWeight: isActive ? 'bold' : '',
              viewTransitionName: isTransitioning ? 'slide' : '',
            })) as any,
          }
        : {})}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavLink;
