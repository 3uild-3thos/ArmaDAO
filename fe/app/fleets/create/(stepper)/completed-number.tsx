import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";

interface ICompletedNumber {
  className?: string;
}

const CompletedNumber = ({ className }: ICompletedNumber) => {
  return (
    <div className={cn("relative z-10 justify-center flex", className)}>
      <div className="absolute h-full w-[4px] bg-gradient-to-b from-magenta/15 to-transparent top-4 mx-auto z-[-1] left-0 right-0" />
      <div
        className={
          "h-10 w-10 p-2 flex justify-center items-center rounded-full bg-magenta/15 z-10 mt-[-8px]"
        }
      >
        <div
          className={
            "h-7 w-7  p-2 flex justify-center items-center rounded-full bg-magenta/50 z-20"
          }
        >
          <div
            className={
              "h-4 w-4 p-2 flex justify-center items-center rounded-full bg-magenta z-30"
            }
          >
            <CheckIcon size={20} className="z-40" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedNumber;
