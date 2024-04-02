import { EProposalStatus } from "@/lib/schema/proposals.schema";
import { BadgeCheck, Clock, XCircle } from "lucide-react";

const ProposalStatusBadge = ({ status }: { status: EProposalStatus }) => {
  switch (status) {
    case EProposalStatus.FINISHED:
      return (
        <div className="px-3 py-1 bg-success/10 rounded-full text-success text-sm flex items-center gap-1">
          <BadgeCheck size={16} />
          {status}
        </div>
      );
    case EProposalStatus.ONGOING:
      return (
        <div className="px-3 py-1 bg-yellow/10 rounded-full text-yellow text-sm flex items-center gap-1">
          <Clock size={16} />
          {status}
        </div>
      );
    case EProposalStatus.FAILED:
      return (
        <div className="px-3 py-1 bg-destructive/10 rounded-full text-destructive text-sm flex items-center gap-1">
          <XCircle size={16} />
          {status}
        </div>
      );

    case EProposalStatus.PENDING:
    default:
      return (
        <div className="px-3 py-1 bg-gray-400/10 rounded-full text-muted-light text-sm flex items-center gap-1">
          {status}
        </div>
      );
  }
};

export default ProposalStatusBadge;
