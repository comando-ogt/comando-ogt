import clsx from "clsx";

/**
 * @typedef {"green" | "red" | "yellow" | "outlineGreen" | "outlineRed" | "outlineYellow"} ButtonVariant
 */

/**
 * @param {ButtonVariant} variant
 * @param {string} className
 */
export function getButtonStyles(variant, className) {
  const colorClasses = {
    green: "bg-green-500 hover:bg-green-600",
    red: "bg-red-500 hover:bg-red-600",
    yellow: "bg-yellow-400 hover:bg-yellow-500",
    outlineGreen: "border border-green-500 text-green-400",
    outlineRed: "border border-red-500 text-red-400",
    outlineYellow: "border border-yellow-400 text-yellow-400",
  };

  return clsx(
    colorClasses[variant] || colorClasses["green"],
    "text-black",
    "font-bold",
    "px-6",
    "py-3",
    "rounded-2xl",
    "shadow-2xl",
    "transform",
    "hover:scale-105",
    "transition-transform",
    "duration-300",
    "cursor-pointer",
    className
  );
}
