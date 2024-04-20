import { FC } from 'react';
import { Link, LinkProps } from '@chakra-ui/react';
import { NavLink as RouterNavLink, NavLinkProps as RouterNavLinkProps, To } from 'react-router-dom';
import useIsClient from '../../utils/ssr/use-is-client';

type NavLinkWithButtonProps = RouterNavLinkProps | {
  as?: 'button';
  to?: To;
};

const NavLink: FC<NavLinkWithButtonProps & LinkProps> = ({
  to,
  children,
  as,
  onClick,
  ...props
}) => {
  const { isClient, key } = useIsClient();
  const isButton = as === 'button';

  if (isButton) {
    return (
      <Link
        key={key}
        as="button"
        onClick={onClick}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      key={key}
      as={RouterNavLink}
      {...(isClient
        ? {
            style: (({ isActive, isTransitioning }) => {
              return {
                fontWeight: isActive ? 'bold' : '',
                viewTransitionName: isTransitioning ? 'slide' : '',
              };
            }) as any,
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
