import { cn } from "@/lib/utils";

const Bokeh = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute z-[-1] bg-gradient-to-tr from-magenta from-60% to-transparent rounded-full h-full w-full blur-[180px] opacity-15",
        className
      )}
    />
  );
};

export default Bokeh;
