"use client";

import LabelValue from "@/components/ui/label-value";
import shortenAddress from "@/lib/helpers/shortenAddress";
import timeAgo from "@/lib/helpers/timeAgo";
import { EProposalStatus, EProposalType } from "@/lib/schema/proposals.schema";
import ProposalStatusBadge from "@/proposals/proposal-status-badge";
import Link from "next/link";
import { useParams } from "next/navigation";

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
      <div className="border-[0.5px] border-gray-400/20 hover:border-muted-light duration-200 rounded-xl p-8 flex flex-col gap-2">
        {/* TODO: Add the type as badge of the card??? */}
        {/* Title and Status */}
        <div className="grid grid-cols-12">
          <div className="flex gap-4 items-start col-span-8">
            <div className="text-2xl">{title}</div>
            <ProposalStatusBadge status={status} />
          </div>
          <div className="flex flex-col gap-2 items-end col-span-4">
            <div className="text-muted-light text-base">
              Posted {timeAgo(postedAt)} by {shortenAddress(postedBy)}
            </div>
          </div>
        </div>
        {/* Description */}
        <div className="text-lg text-muted-light">{description}</div>
        {/* Stats */}
        <div className="flex gap-8 mt-4">
          <LabelValue label="Total Votes" value={totalVotes} />
          <LabelValue label="Pending Votes" value={pendingVotes} />
          <LabelValue label="Start" value={startDate} />
          <LabelValue label="End" value={endDate} />
        </div>
      </div>
    </Link>
  );
};

export default ProposalCard;
