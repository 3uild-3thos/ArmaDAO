"use client";

// components
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BadgeCheck, FileTerminal, Gem, SquareStack } from "lucide-react";

// lib
import { EProposalType } from "@/lib/schema/proposals.schema";
import { proposal } from "@/lib/tooltips/proposal.tooltip";
import { cn } from "@/lib/utils";

interface IProposalTypesSelectComponent {
  onSelect: (type: EProposalType) => void;
  selected: EProposalType;
}

const proposalTypes = [
  {
    type: EProposalType.VOTE,
    activeIcon: <BadgeCheck size={32} className="text-magenta-light" />,
    inactiveIcon: <BadgeCheck size={32} className="text-muted" />,
    tooltip: proposal.proposalTypes.vote,
  },
  {
    type: EProposalType.BOUNTY,
    activeIcon: <Gem size={32} className="text-magenta-light" />,
    inactiveIcon: <Gem size={32} className="text-muted" />,
    tooltip: proposal.proposalTypes.bounty,
  },
  {
    type: EProposalType.EXECUTABLE,
    activeIcon: <FileTerminal size={32} className="text-magenta-light" />,
    inactiveIcon: <FileTerminal size={32} className="text-muted" />,
    tooltip: proposal.proposalTypes.executable,
  },
  {
    type: EProposalType.MULTIPLE_CHOICE,
    activeIcon: <SquareStack size={32} className="text-magenta-light" />,
    inactiveIcon: <SquareStack size={32} className="text-muted" />,
    tooltip: proposal.proposalTypes.multichoice,
  },
];

const ProposalTypesSelectComponent = ({
  onSelect,
  selected,
}: IProposalTypesSelectComponent) => {
  const handleTypeSelect = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    type: EProposalType
  ) => {
    event.preventDefault();
    onSelect(type);
  };

  return (
    <div className="flex gap-6">
      {proposalTypes.map((pt) => (
        <Tooltip key={`proposal-type-${pt.type}`}>
          <TooltipTrigger>
            <Button
              variant={"ghost"}
              className={cn(
                "flex flex-col justify-start hover:bg-gray-400/5 w-28 gap-4 h-28 break-words text-wrap p-4 rounded-xl border-default"
              )}
              onClick={(event) => handleTypeSelect(event, pt.type)}
            >
              <>{selected === pt.type ? pt.activeIcon : pt.inactiveIcon}</>

              <div className="text-muted">{pt.type}</div>
            </Button>
          </TooltipTrigger>
          <TooltipContent>{pt.tooltip}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
};

export default ProposalTypesSelectComponent;
