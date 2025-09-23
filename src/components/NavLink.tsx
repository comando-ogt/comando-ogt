import clsx from "clsx";
import { forwardRef } from "react";
import {
  NavLink as RouterNavLink,
  type NavLinkProps as RouterNavLinkProps,
} from "react-router";

type NavLinkProps = React.PropsWithChildren<RouterNavLinkProps>;

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ to, children, className, ...rest }, ref) => {
    return (
      <RouterNavLink
        to={to}
        ref={ref}
        {...rest}
        className={({ isActive }) =>
          clsx(
            isActive && "text-white",
            "text-gray-300",
            "hover:text-white",
            "transition",
            className
          )
        }
      >
        {children}
      </RouterNavLink>
    );
  }
);

NavLink.displayName = "NavLink";
