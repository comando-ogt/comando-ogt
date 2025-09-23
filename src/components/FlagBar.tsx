import clsx from "clsx";

interface Props {
  className?: string;
}

export function FlagBar({ className }: Props) {
  return (
    <div
      className={clsx(
        "mx-auto",
        "mb-4",
        "w-2xs",
        "h-1",
        "flag-gradient-bg",
        className
      )}
    />
  );
}
