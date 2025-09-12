import { forwardRef } from "react";
import { getButtonStyles, type ButtonVariant } from "../utils/button";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
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

Button.displayName = "Button";
