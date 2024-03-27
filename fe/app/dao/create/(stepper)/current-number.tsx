import { cn } from "@/lib/utils";

interface ICurrentNumber {
  className?: string;
  page: number;
}

const CurrentNumber = ({ className, page }: ICurrentNumber) => {
  return (
    <div className={cn("relative z-10 justify-center flex", className)}>
      <div className="absolute h-full top-4 w-[4px] bg-gradient-to-b from-gray-400/50 to-transparent mx-auto z-[-1] left-0 right-0" />
      <div
        className={
          "h-8 w-8 p-2 flex justify-center items-center rounded-full bg-gray-400 mt-[-4px]"
        }
      >
        <div
          className={
            "h-6 w-6 p-2 flex justify-center items-center rounded-full bg-background"
          }
        >
          <span className="text-muted text-sm">{page}</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentNumber;
