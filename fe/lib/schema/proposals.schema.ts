import { z } from "zod";

export enum EProposalStatus {
  FINISHED = "Finished",
  ONGOING = "Ongoing",
  PENDING = "Pending",
  FAILED = "Failed",
}

export enum EProposalType {
  VOTE = "Vote",
  BOUNTY = "Bounty",
  EXECUTABLE = "Executable",
  MULTIPLE_CHOICE = "Multiple Choice",
}

export const ChoiceSchema = z.object({
  id: z.string(),
  name: z.string(),
  votes: z.number(),
});

export const ProposalSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  type: z.nativeEnum(EProposalType),
  totalVotes: z.number(),
  pendingVotes: z.number(),
  startDate: z.string(),
  endDate: z.string(),
  postedAt: z.string(),
  postedBy: z.string(),
  status: z.nativeEnum(EProposalStatus),
  choices: z.array(ChoiceSchema),
});

export type IChoice = z.infer<typeof ChoiceSchema>;
export type IProposal = z.infer<typeof ProposalSchema>;
