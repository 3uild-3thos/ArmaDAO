// component
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import ProposalDateComponent from "@/proposals/[proposalId]/proposal-date";
import ProposalInfoComponent from "@/proposals/[proposalId]/proposal-info";
import ProposalLatestForum from "@/proposals/[proposalId]/proposal-latest-forum";
import ProposalResultsComponent from "@/proposals/[proposalId]/proposal-results";
import ProposalStatusBadge from "@/proposals/proposal-status-badge";

// lib
import findLatestForum from "@/lib/helpers/findLatestForum";
import shortenAddress from "@/lib/helpers/shortenAddress";
import { IChoice } from "@/lib/schema/proposals.schema";

// mock
import { forums } from "@/mock/forums";
import { proposals } from "@/mock/proposals";
import ProposalTypeBadge from "../proposal-type-badge";

interface IDAOProposalDetailPage {
  params: { proposalId: string; daoId: string };
}

const DAOProposalDetailPage = ({ params }: IDAOProposalDetailPage) => {
  const { daoId, proposalId } = params;
  const proposal = proposals.find((p) => p.id === proposalId);

  if (!proposal) {
    return (
      <Card>
        <CardContent>Proposal not found</CardContent>
      </Card>
    );
  }

  // Find the latest forum based on its createdAt
  const latestForum = findLatestForum(forums);

  return (
    <>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-medium text-muted">
          Proposal: {shortenAddress(proposalId)}
        </h3>
        <div className="flex gap-4">
          <ProposalTypeBadge type={proposal.type} />
          <ProposalStatusBadge status={proposal.status} />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="flex flex-col col-span-8 gap-8">
          <ProposalInfoComponent proposal={proposal} />
          <Card>
            <CardContent className="flex flex-col gap-8">
              <div className="flex items-center justify-between text-muted">
                <div className="text-xl">Cast your vote</div>
                <div className="text-base text-muted-light">
                  Your voting power: 5999
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <RadioGroup>
                  {proposal.choices.map((choice: IChoice) => (
                    <div
                      key={`${proposal.id}-choice-${choice.id}`}
                      className="border-t-[0.5px] last:border-b-[0.5px] border-gray-400/20 p-4 flex items-center space-x-4"
                    >
                      <RadioGroupItem
                        value={choice.id}
                        id={`choice-${choice.id}`}
                      />
                      <Label htmlFor={`choice-${choice.id}`}>
                        {choice.name}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                <Button
                  className="w-full font-bold uppercase"
                  variant={"white"}
                >
                  Vote
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col col-span-4 gap-8">
          <ProposalDateComponent
            startDate={proposal.startDate}
            endDate={proposal.endDate}
          />
          <ProposalLatestForum
            forum={latestForum}
            daoId={daoId}
            proposalId={proposalId}
          />
          <ProposalResultsComponent />
        </div>
      </div>
    </>
  );
};

export default DAOProposalDetailPage;
