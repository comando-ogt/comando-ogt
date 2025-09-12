import { Link as RouterLink } from "react-router";
import clsx from "clsx";
import { getButtonStyles } from "../utils/button";

/**
 * @typedef {Object} LinkProps
 * @property {string | React.ReactNode} children
 * @property {string} [to]
 * @property {string} [href]
 * @property {boolean} [asButton=false]
 * @property {import("../utils/button").ButtonVariant} [variant="green"]
 * @property {string} [className]
 */

/**
 * @component
 * @param {LinkProps} props
 */
export function Link({
  children,
  to = "",
  href = "",
  asButton = false,
  variant = "green",
  className = "",
}) {
  const baseClassName = [
    "text-gray-300",
    "hover:text-green-400",
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
      <RouterLink to={to} className={combinedClassName}>
        {children}
      </RouterLink>
    );
  }

  return (
    <a href={href} className={combinedClassName}>
      {children}
    </a>
  );
}
