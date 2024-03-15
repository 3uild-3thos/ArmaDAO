// components
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDownSquare, ArrowRight, ArrowUpSquare } from "lucide-react";

// lib
import { IForum } from "@/lib/schema/forums.schema";
import Link from "next/link";

interface IProposalLatestForum {
  forum: IForum;
  daoId: string;
  proposalId: string;
}

const ProposalLatestForum = ({
  forum,
  daoId,
  proposalId,
}: IProposalLatestForum) => {
  return (
    <Card>
      <CardContent className="flex flex-col gap-8 text-muted">
        <div className="text-2xl">Latest Forum</div>
        <div className="flex flex-col gap-4">
          <div className="text-base text-muted line-clamp-3">{forum.title}</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <ArrowUpSquare size={16} className="text-success" />
                {forum.upVotes}
              </div>
              <div className="flex items-center gap-2">
                <ArrowDownSquare size={16} className="text-destructive" />
                {forum.downVotes}
              </div>
            </div>
            <Link
              href={`/dao/${daoId}/proposals/${proposalId}/forum/${forum.id}}`}
            >
              <Button variant={"ghost"} className="gap-2 p-0">
                See Post
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProposalLatestForum;
