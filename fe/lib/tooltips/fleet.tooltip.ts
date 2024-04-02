export const createFleet = {
  membershipTypes: {
    fungible: `Let members do everything such as voting, creating proposals, and more using fungible tokens.`,
    nft: `Let members do everything such as voting, creating proposals, and more using NFT.`,
    hybrid: `Let members vote using fungible tokens; and create proposals, create a subfleet and more by holding the Armada NFT.`,
  },
  config: {
    initialDaoConfig: `Set the initial configs of your Fleet DAO. Some configs will act as the baseline minimum for all proposals. These configs can still be changed through proposals.`,
    proposalFee:
      "The minimum SOL payment for creating a proposal. A percentage of this goes to your Fleet DAO and the Armada Treasury.",
    mintAddress: "The mint address of the fungible token.",
    collectionMintAddress: "The mint address of the NFT collection.",
    quorum:
      "Quorum is a percentage of total voters that must participate in the voting process for the vote to be considered valid. It ensures that a minimum level of participation is met before a decision can be made. For example, if the quorum is set at 50%, at least half of the total voters must participate for the vote to be valid.",
    threshold:
      "The threshold represents the minimum number of votes required for a proposal to be approved. It is a specific count of votes that must be reached to pass a proposal.",
    maxExpiry:
      "The longest time a proposal can remain active until it reaches the required quorum.",
    evaluationPhasePeriod:
      "The duration for evaluating proposals before it becomes active.",
    minStakedRequiredProposal:
      "Minimum amount of staked assets to create a proposal. Leave this empty to allow anyone who holds an asset to create a proposal.",
    allowSubfleetCreation:
      "Allow members to create their own Subfleet DAO under your Fleet.",
    minStakedToCreateSubfleet:
      "The proposal fee is the payment for bounty proposal.",
  },
  team: {
    title: "You can add more team members later on.",
    stayAnonymous: `You can choose to stay anonymous. But please note that this may affect your DAO's credibility.`,
    teamWallet: `This wallet will be used to update the Fleet DAO info and add more team members.`,
  },
};
