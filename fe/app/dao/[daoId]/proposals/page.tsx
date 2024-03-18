import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { proposals } from "@/mock/proposals";
import ProposalCard from "@/proposals/proposal-card";
import { AlertCircle } from "lucide-react";

const DAOProposalPage = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="flex flex-col col-span-8 gap-8">
        <h3 className="text-2xl text-muted">Proposals</h3>
        {proposals.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center gap-4 min-h-[24rem]">
              <AlertCircle size={32} className="text-muted-light" />
              <div className="text-muted-light">
                No proposals yet. Start one now!
              </div>
              <Button variant={"white"} className="mt-8">
                Create Proposal
              </Button>
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
