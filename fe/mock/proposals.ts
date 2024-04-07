import {
  EProposalStatus,
  EProposalType,
  IProposal,
} from "@/lib/schema/proposals.schema";

// TODO: Add a type here from the schema
export const proposals: Array<IProposal> = [
  {
    id: "1",
    title: "Should we be going to the moon?",
    description:
      "There are some moments that we think this is it! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui nec nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui nec nunc.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui nec nunc. There are some moments that we think this is it! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui nec nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui nec nunc.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui nec nunc.",
    type: EProposalType.BOUNTY,
    totalVotes: 1784,
    pendingVotes: 22,
    startDate: "05/01/2024",
    endDate: "05/05/2024",
    postedAt: "02/02/2024",
    postedBy: "6cut9fD3qTbDRFara7sZo7tnBGi6y3unmZKSt96VhcDU",
    status: EProposalStatus.FAILED,
    choices: [
      {
        id: "1",
        name: "WBA",
        votes: 114,
      },
      {
        id: "2",
        name: "Turbin3",
        votes: 142,
      },
      {
        id: "3",
        name: "Armada",
        votes: 152,
      },
      {
        id: "4",
        name: "Solana",
        votes: 200,
      },
    ],
    quorum: 50,
    threshold: 60,
    expiry: 50,
    evaluationPeriod: 50,
  },
  {
    id: "2",
    title: "Should we be going to the moon?",
    description:
      "There are some moments that we think this is it! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui nec nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui nec nunc.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui nec nunc.",
    type: EProposalType.EXECUTABLE,
    totalVotes: 2,
    pendingVotes: 555,
    startDate: "05/01/2024",
    endDate: "05/05/2024",
    postedAt: "02/02/2024",
    postedBy: "6cut9fD3qTbDRFara7sZo7tnBGi6y3unmZKSt96VhcDU",
    status: EProposalStatus.FINISHED,
    choices: [
      {
        id: "1",
        name: "WBA",
        votes: 114,
      },
      {
        id: "2",
        name: "Turbin3",
        votes: 142,
      },
      {
        id: "3",
        name: "Armada",
        votes: 152,
      },
      {
        id: "4",
        name: "Solana",
        votes: 200,
      },
    ],
    quorum: 50,
    threshold: 60,
    expiry: 50,
    evaluationPeriod: 50,
  },
  {
    id: "3",
    title: "Should we be going to the moon?",
    description:
      "There are some moments that we think this is it! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui nec nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui nec nunc.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui nec nunc.",
    type: EProposalType.MULTIPLE_CHOICE,
    totalVotes: 178234,
    pendingVotes: 5239,
    startDate: "05/01/2024",
    endDate: "05/05/2024",
    postedAt: "02/02/2024",
    postedBy: "6cut9fD3qTbDRFara7sZo7tnBGi6y3unmZKSt96VhcDU",
    status: EProposalStatus.ONGOING,
    choices: [
      {
        id: "1",
        name: "WBA",
        votes: 114,
      },
      {
        id: "2",
        name: "Turbin3",
        votes: 142,
      },
      {
        id: "3",
        name: "Armada",
        votes: 152,
      },
      {
        id: "4",
        name: "Solana",
        votes: 200,
      },
    ],
    quorum: 50,
    threshold: 60,
    expiry: 50,
    evaluationPeriod: 50,
  },
  {
    id: "4",
    title: "Should we be going to the moon?",
    description:
      "There are some moments that we think this is it! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui nec nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui nec nunc.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui nec nunc.",
    type: EProposalType.VOTE,
    totalVotes: 1744,
    pendingVotes: 549,
    startDate: "05/01/2024",
    endDate: "05/05/2024",
    postedAt: "02/02/2024",
    postedBy: "6cut9fD3qTbDRFara7sZo7tnBGi6y3unmZKSt96VhcDU",
    status: EProposalStatus.PENDING,
    choices: [
      {
        id: "1",
        name: "WBA",
        votes: 114,
      },
      {
        id: "2",
        name: "Turbin3",
        votes: 142,
      },
      {
        id: "3",
        name: "Armada",
        votes: 152,
      },
      {
        id: "4",
        name: "Solana",
        votes: 200,
      },
    ],
    quorum: 50,
    threshold: 60,
    expiry: 50,
    evaluationPeriod: 50,
  },
];

export const proposalsNoData = [];
