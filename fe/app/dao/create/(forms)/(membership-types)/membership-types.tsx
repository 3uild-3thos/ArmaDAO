// components
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CoinsIcon, CombineIcon, ImageIcon } from "lucide-react";

// lib
import { EMembershipType } from "@/lib/schema/fleet.schema";
import { cn } from "@/lib/utils";

interface IMembershipTypes {
  onSelect: (type: EMembershipType) => void;
  selected: EMembershipType;
}

const membershipTypes = [
  {
    type: EMembershipType.Fungible,
    activeIcon: <CoinsIcon size={32} className="text-cyan" />,
    inactiveIcon: <CoinsIcon size={32} className="text-muted" />,
    tooltip: `Let members do everything such as voting, creating proposals, and more using staked fungible tokens.`,
  },
  {
    type: EMembershipType.NFT,
    activeIcon: <ImageIcon size={32} className="text-cyan" />,
    inactiveIcon: <ImageIcon size={32} className="text-muted" />,
    tooltip: `Let members do everything such as voting, creating proposals, and more using staked NFT.`,
  },
  {
    type: EMembershipType.Hybrid,
    activeIcon: <CombineIcon size={32} className="text-cyan" />,
    inactiveIcon: <CombineIcon size={32} className="text-muted" />,
    tooltip: `Let members vote using fungible tokens; and create proposals, create a subfleet and more by holding the Armada NFT.`,
  },
];

const MembershipTypes = ({ onSelect, selected }: IMembershipTypes) => {
  const handleTypeSelect = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    type: EMembershipType
  ) => {
    event.preventDefault();
    onSelect(type);
  };

  return (
    <div className="flex gap-6">
      {membershipTypes.map((mt) => (
        <Tooltip key={`membership-type-${mt.type}`}>
          <TooltipTrigger>
            <Button
              variant={"ghost"}
              className={cn(
                "flex flex-col justify-start hover:bg-gray-400/5 w-28 gap-4 h-28 break-words text-wrap p-4 rounded-xl border-default"
              )}
              onClick={(event) => handleTypeSelect(event, mt.type)}
            >
              <>{selected === mt.type ? mt.activeIcon : mt.inactiveIcon}</>

              <div className="text-muted">{mt.type}</div>
            </Button>
          </TooltipTrigger>
          <TooltipContent>{mt.tooltip}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
};

export default MembershipTypes;
