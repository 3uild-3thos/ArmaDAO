import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PATH, replacePathKey } from "@/lib/routes";
import { proposals } from "@/mock/proposals";
import ProposalCard from "@/proposals/proposal-card";
import { AlertCircle } from "lucide-react";
import Link from "next/link";

interface IDAOProposalPage {
  params: { daoId: string };
}

const DAOProposalPage = ({ params }: IDAOProposalPage) => {
  const { daoId } = params;

  const createProposalHref = replacePathKey(PATH.fleetProposalCreate, {
    daoId,
  });

  return (
    <div className="grid grid-cols-12">
      <div className="flex flex-col col-span-8 gap-8">
        <div className="flex justify-between items-center w-full">
          <h3 className="text-2xl text-muted">Proposals</h3>
          <Link href={createProposalHref}>
            <Button variant={"outline"}>Create a Proposal</Button>
          </Link>
        </div>
        {proposals.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center gap-4 min-h-[24rem]">
              <AlertCircle size={32} className="text-muted-light" />
              <div className="text-muted-light">
                No proposals yet. Start one now!
              </div>
              <Link href={createProposalHref}>
                <Button variant={"white"} className="mt-8">
                  Create Proposal
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <>
            {proposals.map((proposal) => (
              <ProposalCard key={`proposal-${proposal.id}`} {...proposal} />
            ))}
          </>
        )}
      </div>
      <div className="flex flex-col col-span-4 gap-8"></div>
    </div>
  );
};

export default DAOProposalPage;
