import { proposals } from "@/mock/proposals";
import ProposalCard from "@/proposals/proposal-card";

const DAOProposalPage = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="flex flex-col col-span-8 gap-8">
        <h3 className="text-2xl text-muted">Proposals</h3>
        {proposals.map((proposal) => (
          <ProposalCard key={`proposal-${proposal.id}`} {...proposal} />
        ))}
      </div>
      <div className="flex flex-col col-span-4 gap-8"></div>
    </div>
  );
};

export default DAOProposalPage;
