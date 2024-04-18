import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse duration-900 rounded-xl bg-zinc-900 h-full w-full z-10",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
