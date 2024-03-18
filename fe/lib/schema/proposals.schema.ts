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

export const ProposalSchema = z
  .object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    type: z.nativeEnum(EProposalType),
    totalVotes: z.number(),
    pendingVotes: z.number(),
    startDate: z.string().datetime(),
    endDate: z.string().datetime(),
    postedAt: z.string(),
    postedBy: z.string(),
    status: z.nativeEnum(EProposalStatus),
    choices: z.array(ChoiceSchema),
    quorum: z.coerce
      .number()
      .min(1, "Quorum must be greater than 0")
      .nullable(),
    threshold: z.coerce
      .number()
      .min(1, "Threshold must be greater than 0")
      .nullable(),
    expiry: z.string().datetime(),
    evaluationPeriod: z.string().datetime(),
  })
  .required();

export type IChoice = z.infer<typeof ChoiceSchema>;
export type IProposal = z.infer<typeof ProposalSchema>;
export type IProposalDefaults = Omit<
  IProposal,
  "id" | "status" | "postedBy" | "postedAt" | "totalVotes" | "pendingVotes"
>;

export const ProposalDefaults: IProposalDefaults = {
  title: "",
  type: EProposalType.VOTE,
  description: "",
  startDate: "",
  endDate: "",
  choices: [],
  quorum: 0,
  threshold: 0,
  expiry: "",
  evaluationPeriod: "",
};
