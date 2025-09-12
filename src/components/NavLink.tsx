import { forwardRef } from "react";
import {
  NavLink as RouterNavLink,
  type NavLinkProps as RouterNavLinkProps,
} from "react-router";

type NavLinkProps = React.PropsWithChildren<RouterNavLinkProps>;

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ to, children, ...rest }, ref) => {
    return (
      <RouterNavLink
        to={to}
        ref={ref}
        {...rest}
        className={({ isActive }) =>
          isActive ? "text-green-400" : "hover:text-green-400 transition"
        }
      >
        {children}
      </RouterNavLink>
    );
  }
);

NavLink.displayName = "NavLink";
