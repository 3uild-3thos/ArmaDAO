"use client";

// react
import { useState } from "react";

// next

// components
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProposalStatusBadge from "@/proposals/proposal-status-badge";
import { ArrowDown, ArrowUp } from "lucide-react";

// lib
import shortenAddress from "@/lib/helpers/shortenAddress";
import timeAgo from "@/lib/helpers/timeAgo";
import { IProposal } from "@/lib/schema/proposals.schema";
import { cn } from "@/lib/utils";

interface IProposalInfoComponent {
  proposalId: string;
  proposal: IProposal;
}

const ProposalInfoComponent = ({
  proposal,
  proposalId,
}: IProposalInfoComponent) => {
  const [shouldReadMore, setShouldReadMore] = useState(false);
  const handleShouldReadMore = () => setShouldReadMore(!shouldReadMore);

  const { title, description, postedAt, postedBy, status } = proposal;

  return (
    <Card>
      <CardContent className="flex flex-col text-muted gap-8">
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
        <div
          className={cn(
            "text-lg text-muted-light",
            !shouldReadMore && "line-clamp-3"
          )}
        >
          {description}
        </div>
        <div className="flex justify-end">
          <Button
            variant={"ghost"}
            className="p-0 gap-2"
            onClick={handleShouldReadMore}
          >
            {shouldReadMore ? (
              <>
                Read Less
                <ArrowUp size={16} />
              </>
            ) : (
              <>
                Read More
                <ArrowDown size={16} />
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProposalInfoComponent;
