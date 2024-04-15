import { cn } from "@/lib/utils";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface ILabelValue {
  label: string;
  value: ReactNode;
  href?: string;
  className?: string;
}

const LabelValue = ({ className, label, value, href }: ILabelValue) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="text-base text-muted-light">{label}</div>
      {href ? (
        <Link
          href={href}
          className="flex items-center gap-2 text-xl duration-200 text-muted hover:text-magenta-light"
        >
          {value} <MoveUpRight size={"20"} />
        </Link>
      ) : (
        <div className="text-2xl text-muted font-medium">{value}</div>
      )}
    </div>
  );
};

export default LabelValue;
