export const createFleet = {
  membershipTypes: {
    fungible: `Let members do everything such as voting, creating proposals, and more using staked fungible tokens.`,
    nft: `Let members do everything such as voting, creating proposals, and more using staked NFT.`,
    hybrid: `Let members vote using fungible tokens; and create proposals, create a subfleet and more by holding the Armada NFT.`,
  },
  config: {
    initialDaoConfig: `Set the initial configuration of your Fleet DAO. This can still be changed through proposals.`,
    proposalFee: "The SOL payment for each proposal made.",
    mintAddress: "The mint address of the fungible token.",
    collectionMintAddress: "The mint address of the NFT collection.",
    minQuorum:
      "The minimum amount of participation required for a vote to be considered valid.",
    minThreshold: "Minimum amount of staked assets to vote.",
    maxExpiry: "Max expiry is...",
    evaluationPhasePeriod:
      "Minimum duration for the evaluation phase of a proposal.",
    minStakedRequiredProposal:
      "Minimum amount of staked assets to create a proposal.",
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
