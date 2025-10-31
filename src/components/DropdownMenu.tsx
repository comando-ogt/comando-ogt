import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";
import clsx from "clsx";
import { forwardRef } from "react";

export const DropdownMenuContent = forwardRef<
  HTMLDivElement,
  DropdownMenuPrimitive.DropdownMenuContentProps
>(({ className, children, ...props }, forwardedRef) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={forwardedRef}
      className={clsx(
        "z-100",
        "bg-neutral-900",
        "p-2",
        "rounded-md",
        "min-w-40",
        className
      )}
      {...props}
    >
      {children}
    </DropdownMenuPrimitive.Content>
  </DropdownMenuPrimitive.Portal>
));

export const DropdownMenuItem = forwardRef<
  HTMLDivElement,
  DropdownMenuPrimitive.DropdownMenuItemProps
>(({ className, children, ...props }, forwardedRef) => (
  <DropdownMenuPrimitive.Item
    ref={forwardedRef}
    className={clsx(
      "data-[highlighted]:bg-neutral-700",
      "px-2",
      "rounded",
      "data-[highlighted]:outline-0",
      "cursor-pointer",
      className
    )}
    {...props}
  >
    {children}
  </DropdownMenuPrimitive.Item>
));

// TODO: Add style
export const DropdownMenuCheckboxItem = DropdownMenuPrimitive.CheckboxItem;
export const DropdownMenuRadioItem = DropdownMenuPrimitive.RadioItem;

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuLabel = DropdownMenuPrimitive.Label;
export const DropdownMenuGroup = DropdownMenuPrimitive.Group;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
export const DropdownMenuSeparator = DropdownMenuPrimitive.Separator;
export const DropdownMenuArrow = DropdownMenuPrimitive.Arrow;
