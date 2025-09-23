import clsx from "clsx";

const colorClasses = {
  green: "bg-ogt-green text-white",
  red: "bg-ogt-red text-white",
  yellow: "bg-yellow-500 text-black",
  gray: "bg-gray-700 text-white",
  outlineGreen: "border border-ogt-green text-ogt-green",
  outlineRed: "border border-ogt-red text-red-red",
  outlineYellow: "border border-yellow-500 text-yellow-500",
} as const;

export type ButtonVariant = keyof typeof colorClasses;

export function getButtonStyles(variant: ButtonVariant, className: string) {
  return clsx(
    colorClasses[variant] || colorClasses["green"],
    "btn",
    "hover:bg-opacity-90",
    "font-bold",
    "px-3",
    "py-2",
    "rounded-xl",
    "shadow-2xl",
    "transform",
    "hover:scale-105",
    "transition-transform",
    "duration-300",
    "cursor-pointer",
    "uppercase",
    className
  );
}
