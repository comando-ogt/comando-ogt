import { forwardRef } from "react";
import { getButtonStyles, type ButtonVariant } from "../utils/button";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, className, variant = "green", ...rest }, forwardedRef) => (
    <button
      ref={forwardedRef}
      className={getButtonStyles(variant, className ?? "")}
      {...rest}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";
