import type { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  className?: string;
}

export function MainSection({ children, className }: Props) {
  return (
    <section
      className={clsx(
        "relative",
        "h-full",
        "bg-gradient-to-br",
        "from-black",
        "via-gray-900",
        "to-gray-800",
        className
      )}
    >
      <video
        className="absolute opacity-20 w-full h-full object-cover"
        autoPlay
        loop
        muted
        crossOrigin="anonymous"
      >
        <source src="hll.mp4" />
      </video>
      <div className="relative">{children}</div>
    </section>
  );
}
