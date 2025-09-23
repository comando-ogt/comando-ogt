import clsx from "clsx";
import { forwardRef } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ className, ...rest }, forwardedRef) => (
    <input
      ref={forwardedRef}
      className={clsx(
        "bg-neutral-800",
        "p-2",
        "border",
        "border-neutral-700",
        "rounded",
        "w-full",
        "focus:outline-0",
        className
      )}
      {...rest}
    />
  )
);
