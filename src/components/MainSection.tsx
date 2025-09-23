import type { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}

export function MainSection({ children, className, contentClassName }: Props) {
  return (
    <section
      className={clsx(
        "relative",
        "h-full",
        "grid",
        "grid-cols-1",
        "grid-rows-1",
        className
      )}
    >
      <video
        className={clsx(
          "absolute",
          "grid-col-1",
          "grid-row-1",
          "opacity-20",
          "w-full",
          "h-full",
          "object-cover",
          "pointer-events-none"
        )}
        autoPlay
        loop
        muted
        playsInline
        crossOrigin="anonymous"
      >
        <source src="hll.mp4" />
      </video>
      <div
        className={clsx(
          "relative",
          "grid-col-1",
          "grid-row-1",
          contentClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
