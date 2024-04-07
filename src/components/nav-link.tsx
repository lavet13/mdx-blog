import { FC } from "react";
import { Link, LinkProps } from "@chakra-ui/react";
import { NavLinkProps, NavLink as RouterNavLink, } from "react-router-dom";

const NavLink: FC<NavLinkProps & LinkProps> = ({ to, children, ...props }) => {
  return (
    <Link
      as={RouterNavLink}
      style={
        (({ isActive, isTransitioning }) => ({
          fontWeight: isActive ? 'bold' : '',
          viewTransitionName: isTransitioning ? 'slide' : '',
        })) as any
      }
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavLink;
