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
import { createFleet } from "@/lib/tooltips/fleet.tooltip";
import { cn } from "@/lib/utils";

interface IMembershipTypes {
  onSelect: (type: EMembershipType) => void;
  selected: EMembershipType;
}

const membershipTypes = [
  {
    type: EMembershipType.Fungible,
    activeIcon: <CoinsIcon size={32} className="text-magenta-light" />,
    inactiveIcon: <CoinsIcon size={32} className="text-muted" />,
    tooltip: createFleet.membershipTypes.fungible,
  },
  {
    type: EMembershipType.NFT,
    activeIcon: <ImageIcon size={32} className="text-magenta-light" />,
    inactiveIcon: <ImageIcon size={32} className="text-muted" />,
    tooltip: createFleet.membershipTypes.nft,
  },
  {
    type: EMembershipType.Hybrid,
    activeIcon: <CombineIcon size={32} className="text-magenta-light" />,
    inactiveIcon: <CombineIcon size={32} className="text-muted" />,
    tooltip: createFleet.membershipTypes.hybrid,
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
