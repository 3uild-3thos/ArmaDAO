import { EProposalStatus, EProposalType } from "@/lib/schema/proposals.schema";
import ProposalCard from "@/proposals/proposal-card";

const DAOProposalPage = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="flex flex-col gap-8 col-span-9">
        <h3 className="text-2xl text-muted">Proposals</h3>
        <ProposalCard
          id={"1"}
          title={"Should we be going to the moon?"}
          description={"There are some moments that we think this is it!"}
          type={EProposalType.BOUNTY}
          totalVotes={1784}
          pendingVotes={59}
          startDate={"05/01/2024"}
          endDate={"05/05/2024"}
          postedAt={"02/02/2024"}
          postedBy={"6cut9fD3qTbDRFara7sZo7tnBGi6y3unmZKSt96VhcDU"}
          status={EProposalStatus.FAILED}
        />
        <ProposalCard
          id={"2"}
          title={
            "Should we be going to the moon asd asd oaihd iashdioaddf sdfo ihsdifo sifh osihf iosh fioshfo hi ihasio hdioad iaioshd haiodh ioh oia sd asodi haid oh?"
          }
          description={
            "There are some moments that we think this is it asd oiahsd ahod haoid haiod hiah dioah doihas iodh!"
          }
          type={EProposalType.MULTIPLE_CHOICE}
          totalVotes={1784}
          pendingVotes={59}
          startDate={"05/01/2024"}
          endDate={"05/05/2024"}
          postedAt={"02/02/2024"}
          postedBy={"6cut9fD3qTbDRFara7sZo7tnBGi6y3unmZKSt96VhcDU"}
          status={EProposalStatus.FINISHED}
        />
        <ProposalCard
          id={"3"}
          title={"Should we be going to the moon?"}
          description={"There are some moments that we think this is it!"}
          type={EProposalType.VOTE}
          totalVotes={1784}
          pendingVotes={59}
          startDate={"05/01/2024"}
          endDate={"05/05/2024"}
          postedAt={"02/02/2024"}
          postedBy={"6cut9fD3qTbDRFara7sZo7tnBGi6y3unmZKSt96VhcDU"}
          status={EProposalStatus.ONGOING}
        />
        <ProposalCard
          id={"4"}
          title={"Should we be going to the moon aoisd jasiodj asd oja djad a?"}
          description={"There are some moments that we think this is it!"}
          type={EProposalType.VOTE}
          totalVotes={1784}
          pendingVotes={59}
          startDate={"05/01/2024"}
          endDate={"05/05/2024"}
          postedAt={"02/02/2024"}
          postedBy={"6cut9fD3qTbDRFara7sZo7tnBGi6y3unmZKSt96VhcDU"}
          status={EProposalStatus.PENDING}
        />
      </div>
      <div className="flex flex-col gap-8 col-span-3"></div>
    </div>
  );
};

export default DAOProposalPage;
