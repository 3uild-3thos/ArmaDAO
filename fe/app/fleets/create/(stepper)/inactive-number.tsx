import { cn } from "@/lib/utils";

interface IInactiveNumber {
  className?: string;
  page: number;
}

const InactiveNumber = ({ className, page }: IInactiveNumber) => {
  return (
    <div className={cn("relative z-10 justify-center flex mt-1", className)}>
      <span className="text-muted/30 text-sm">{page}</span>
    </div>
  );
};

export default InactiveNumber;
