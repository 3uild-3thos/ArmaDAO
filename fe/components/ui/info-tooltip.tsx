import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { InfoIcon } from "lucide-react";

interface IInfoTooltip {
  content: string;
  className?: string;
}

const InfoTooltip = ({ content, className }: IInfoTooltip) => {
  const handleClick = (e: React.MouseEvent) => e.preventDefault();

  return (
    <Tooltip>
      <TooltipTrigger
        className={cn("ml-1 cursor-help", className)}
        onClick={handleClick}
      >
        <InfoIcon size={12} className="pointer-events-none" />
      </TooltipTrigger>
      <TooltipContent>{content}</TooltipContent>
    </Tooltip>
  );
};

export default InfoTooltip;
