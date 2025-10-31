import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export function RegularPageLayout({ children }: Props) {
  return (
    <main className="flex-1">
      <div className="mx-auto p-6 container">
        <div className="bg-neutral-800 shadow-lg p-8 md:p-12 rounded-lg">
          {children}
        </div>
      </div>
    </main>
  );
}
