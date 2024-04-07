// components
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDownIcon, ArrowRight, ArrowUpIcon } from "lucide-react";

// lib
import { PATH, replacePathKey } from "@/lib/routes";
import { IForum } from "@/lib/schema/forums.schema";
import Link from "next/link";

interface IProposalLatestForumComponent {
  forum: IForum;
  fleetId: string;
  proposalId: string;
}

const ProposalLatestForumComponent = ({
  forum,
  fleetId,
  proposalId,
}: IProposalLatestForumComponent) => {
  const forumDetailHref = replacePathKey(PATH.fleetForumDetail, {
    fleetId,
    proposalId,
    forumId: forum.id,
  });

  return (
    <Card>
      <CardContent className="flex flex-col gap-8 text-muted">
        <div className="text-xl font-medium">Latest Forum</div>
        <div className="flex flex-col gap-4">
          <div className="text-base text-muted line-clamp-3">{forum.title}</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <ArrowUpIcon size={24} className="text-success" />
                {forum.upVotes}
              </div>
              <div className="flex items-center gap-2">
                <ArrowDownIcon size={24} className="text-destructive" />
                {forum.downVotes}
              </div>
            </div>
            <Link href={forumDetailHref}>
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

export default ProposalLatestForumComponent;
