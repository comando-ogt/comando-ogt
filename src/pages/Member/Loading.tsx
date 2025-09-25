export function Loading() {
  return (
    <div className="flex flex-col gap-4 animate-pulse">
      <div className="flex gap-4">
        <div className="bg-neutral-900 rounded-full size-48" />
        <div className="flex flex-col gap-4 w-xs">
          <div className="bg-neutral-900 rounded h-18" />
          <div className="bg-neutral-900 rounded h-10" />
          <div className="bg-neutral-900 rounded h-4" />
        </div>
      </div>
      <div className="flex-1 space-y-3 py-1">
        <div className="bg-neutral-900 rounded h-4" />
        <div className="space-y-3">
          <div className="gap-4 grid grid-cols-3">
            <div className="col-span-2 bg-neutral-900 rounded h-4" />
            <div className="col-span-1 bg-neutral-900 rounded h-4" />
          </div>
          <div className="bg-neutral-900 rounded h-4" />
        </div>
      </div>
    </div>
  );
}
