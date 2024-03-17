"use client";

import { Card, CardContent } from "@/components/ui/card";
import LabelValue from "@/components/ui/label-value";
import shortenAddress from "@/lib/helpers/shortenAddress";
import timeAgo from "@/lib/helpers/timeAgo";
import { EProposalStatus, EProposalType } from "@/lib/schema/proposals.schema";
import Link from "next/link";
import { useParams } from "next/navigation";
import ProposalStatusBadge from "./proposal-status-badge";
import ProposalTypeBadge from "./proposal-type-badge";

interface IProposalCard {
  id: string;
  title: string;
  description: string;
  type: EProposalType;
  totalVotes: number;
  pendingVotes: number;
  startDate: string;
  endDate: string;
  postedAt: string;
  postedBy: string;
  status: EProposalStatus;
}

const ProposalCard = ({
  id,
  title,
  description,
  type,
  totalVotes,
  pendingVotes,
  startDate,
  endDate,
  postedAt,
  postedBy,
  status,
}: IProposalCard) => {
  const { daoId } = useParams();
  return (
    <Link href={`/dao/${daoId}/proposals/${id}`}>
      <Card className="duration-200 hover:border-muted-light">
        <CardContent className="flex flex-col gap-4">
          {/* TODO: Add the type as badge of the card??? */}
          {/* Title and Status */}
          <div className="grid grid-cols-12">
            <div className="flex flex-col items-start col-span-8 gap-2">
              <div className="text-2xl font-medium">{title}</div>
              <div className="flex gap-4">
                <ProposalTypeBadge type={type} />
                <ProposalStatusBadge status={status} />
              </div>
            </div>
            <div className="flex flex-col items-end col-span-4 gap-2">
              <div className="text-base text-muted-light">
                Posted {timeAgo(postedAt)} by {shortenAddress(postedBy)}
              </div>
            </div>
          </div>
          {/* Description */}
          <div className="text-lg text-muted-light line-clamp-3">
            {description}
          </div>
          {/* Stats */}
          <div className="flex gap-8 mt-4">
            <LabelValue label="Total Votes" value={totalVotes} />
            <LabelValue label="Pending Votes" value={pendingVotes} />
            <LabelValue label="Start" value={startDate} />
            <LabelValue label="End" value={endDate} />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProposalCard;
