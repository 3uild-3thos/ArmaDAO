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

export enum EExecutableType {
  SET_PROPOSAL_FEE = "Proposal Fee",
  SET_MAX_EXPIRY = "Max Expiry",
  SET_THRESHOLD = "Threshold",
  SET_QUORUM = "Quorum",
  SET_EVALUATION_PERIOD = "Evaluation Period",
  SET_ALLOW_SUBDAO = "Allow SubDAO",
}

export const ChoiceSchema = z.object({
  id: z.string(),
  name: z.string(),
  votes: z.number(),
});

export const ProposalSchema = z
  .object({
    id: z.string(),
    title: z.string().min(3, "Title must be at least 3 characters."),
    description: z
      .string()
      .min(50, "Description must be at least 50 characters."),
    type: z.nativeEnum(EProposalType),
    totalVotes: z.coerce.number(),
    pendingVotes: z.coerce.number(),
    startDate: z.string().datetime(),
    endDate: z.string().datetime(),
    postedAt: z.string(),
    postedBy: z.string(),
    status: z.nativeEnum(EProposalStatus),
    choices: z.array(ChoiceSchema).min(2, "Must have at least 2 choices"),
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

    // For Bounty
    bountyRecipient: z.string().optional(),
    bountyAmount: z.coerce.number().optional(),

    // For Executable
    executableType: z.nativeEnum(EExecutableType).optional(),
    fleetProposalFee: z.coerce.number().optional(),
    fleetExpiry: z.string().datetime().optional(),
    fleetThreshold: z.coerce
      .number()
      .min(1, "Threshold must be greater than 0")
      .nullable()
      .optional(),
    fleetQuorum: z.coerce
      .number()
      .min(1, "Quorum must be greater than 0")
      .nullable()
      .optional(),
    fleetEvaluationPeriod: z.string().datetime().optional(),
    fleetAllowSubdao: z.boolean().optional(),
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

  // For Bounty
  bountyRecipient: "",
  bountyAmount: 0,

  // For Executable
  executableType: EExecutableType.SET_PROPOSAL_FEE,
  fleetProposalFee: 0,
  fleetExpiry: "",
  fleetThreshold: 0,
  fleetQuorum: 0,
  fleetEvaluationPeriod: "",
  fleetAllowSubdao: false,
};
