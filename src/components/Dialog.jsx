import { Dialog as DialogPrimitive, VisuallyHidden } from "radix-ui";

import clsx from "clsx";
import { forwardRef } from "react";

/**
 * @typedef {Object} DialogProps
 * @property {string} title
 * @property {string} description
 */

/**
 * @type {React.ForwardRefExoticComponent<DialogProps & React.PropsWithoutRef<DialogPrimitive.DialogContentProps>>}
 */
export const DialogContent = forwardRef(
  ({ children, title, description, ...props }, forwardedRef) => (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 bg-black/80" />
      <DialogPrimitive.Content
        {...props}
        ref={forwardedRef}
        className={clsx(
          "bg-gray-900",
          "shadow-2xl",
          "p-6",
          "border",
          "border-green-400",
          "rounded-3xl",
          "w-96",
          "hover:scale-105",
          "fixed",
          "top-1/2",
          "left-1/2",
          "transform",
          "-translate-x-1/2",
          "-translate-y-1/2",
          "transition-transform",
          "duration-300"
        )}
      >
        <DialogPrimitive.Title className="drop-shadow-lg mb-4 font-bold text-green-400 text-2xl text-center">
          {title}
        </DialogPrimitive.Title>
        <VisuallyHidden.Root asChild>
          <DialogPrimitive.Description>
            {description}
          </DialogPrimitive.Description>
        </VisuallyHidden.Root>
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
);

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;
