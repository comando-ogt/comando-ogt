import { forwardRef } from "react";
import { getButtonStyles } from "../utils/button";

/**
 * @typedef {Object} ButtonProps
 * @property {string | React.ReactNode} children
 * @property {import("../utils/button").ButtonVariant} [variant="green"]
 * @property {string} [className]
 */

/**
 * @type {React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>}
 */
export const Button = forwardRef(
  ({ children, variant = "green", className = "", ...rest }, forwardedRef) => (
    <button
      ref={forwardedRef}
      className={getButtonStyles(variant, className)}
      {...rest}
    >
      {children}
    </button>
  )
);
