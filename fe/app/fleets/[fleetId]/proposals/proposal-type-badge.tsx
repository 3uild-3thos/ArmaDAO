import { EProposalType } from "@/lib/schema/proposals.schema";
import { BadgeCheck, FileTerminal, Gem, SquareStack } from "lucide-react";

const ProposalTypeBadge = ({ type }: { type: EProposalType }) => {
  switch (type) {
    case EProposalType.VOTE:
      return (
        <div className="flex items-center gap-1 px-3 py-1 text-sm rounded-full bg-success/10 text-success">
          <BadgeCheck size={16} />
          {type}
        </div>
      );
    case EProposalType.BOUNTY:
      return (
        <div className="flex items-center gap-1 px-3 py-1 text-sm rounded-full bg-yellow/10 text-yellow">
          <Gem size={16} />
          {type}
        </div>
      );
    case EProposalType.EXECUTABLE:
      return (
        <div className="flex items-center gap-1 px-3 py-1 text-sm rounded-full bg-destructive/10 text-destructive">
          <FileTerminal size={16} />
          {type}
        </div>
      );
    case EProposalType.MULTIPLE_CHOICE:
    default:
      return (
        <div className="flex items-center gap-1 px-3 py-1 text-sm rounded-full bg-gray-400/10 text-muted-light">
          <SquareStack size={16} />
          {type}
        </div>
      );
  }
};

export default ProposalTypeBadge;
