import clsx from "clsx";
import React from "react";
import {
  Link as RouterLink,
  type LinkProps as RouterLinkProps,
} from "react-router";
import { getButtonStyles, type ButtonVariant } from "../utils/button";

interface LinkProps extends Partial<RouterLinkProps> {
  href?: string;
  to?: string;
  asButton?: boolean;
  variant?: ButtonVariant;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      children,
      to = "",
      href = "",
      asButton = false,
      variant = "green",
      className = "",
      ...rest
    },
    forwardedRef
  ) => {
    const baseClassName = [
      "text-gray-300",
      "hover:text-white",
      "transform",
      "hover:scale-110",
      "transition",
      "duration-300",
    ];

    let combinedClassName = clsx(baseClassName, className);

    if (asButton) {
      combinedClassName = getButtonStyles(variant, className);
    }

    if (to === "") {
      return (
        <a
          ref={forwardedRef}
          href={href}
          className={combinedClassName}
          {...rest}
        >
          {children}
        </a>
      );
    }

    return (
      <RouterLink
        ref={forwardedRef}
        to={to}
        className={combinedClassName}
        {...rest}
      >
        {children}
      </RouterLink>
    );
  }
);
