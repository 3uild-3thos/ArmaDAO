import { cn } from "@/lib/utils";

interface IInactiveNumber {
  className?: string;
  page: number;
}

const InactiveNumber = ({ className, page }: IInactiveNumber) => {
  return (
    <div className={cn("relative z-10 justify-center flex", className)}>
      <span className="text-muted text-sm">{page}</span>
    </div>
  );
};

export default InactiveNumber;
