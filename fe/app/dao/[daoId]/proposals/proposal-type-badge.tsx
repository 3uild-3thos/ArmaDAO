import { EProposalType } from "@/lib/schema/proposals.schema";
import { BadgeCheck, FileTerminal, Gem, SquareStack } from "lucide-react";

const ProposalTypeBadge = ({ type }: { type: EProposalType }) => {
  switch (type) {
    case EProposalType.VOTE:
      return (
        <div className="px-3 py-1 bg-success/10 rounded-full text-success text-sm flex items-center gap-1">
          <BadgeCheck size={16} />
          {type}
        </div>
      );
    case EProposalType.BOUNTY:
      return (
        <div className="px-3 py-1 bg-yellow/10 rounded-full text-yellow text-sm flex items-center gap-1">
          <Gem size={16} />
          {type}
        </div>
      );
    case EProposalType.EXECUTABLE:
      return (
        <div className="px-3 py-1 bg-destructive/10 rounded-full text-destructive text-sm flex items-center gap-1">
          <FileTerminal size={16} />
          {type}
        </div>
      );
    case EProposalType.MULTIPLE_CHOICE:
    default:
      return (
        <div className="px-3 py-1 bg-gray-400/10 rounded-full text-muted-light text-sm flex items-center gap-1">
          <SquareStack size={16} />
          {type}
        </div>
      );
  }
};

export default ProposalTypeBadge;
