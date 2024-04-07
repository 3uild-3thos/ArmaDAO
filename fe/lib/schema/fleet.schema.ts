import { bs58 } from "@coral-xyz/anchor/dist/cjs/utils/bytes";
import { z } from "zod";

export enum EMembershipType {
  Fungible = "Fungible",
  NFT = "NFT",
  Hybrid = "Hybrid",
}

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB in bytes;
const ACCEPTED_IMAGE_TYPES = ["image/png"];

export const ImageSchema =
  typeof window === "undefined"
    ? z.null()
    : z
        .instanceof(File, { message: "Image is required" })
        .refine((file) => !!file, "Image is required")
        .refine((file) => file?.size <= MAX_FILE_SIZE, `Max file size is 2 MB`)
        .refine(
          (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
          "Only .png images are accepted."
        );

export const FleetInfoSchema = z
  .object({
    id: z.string(),
    name: z
      .string()
      .min(1, "Fleet name is required")
      .max(24, "Maximum of 24 characters"),
    logoUri: z.union([ImageSchema, z.string()]),
    description: z
      .string()
      .min(1, "Description is required")
      .max(250, "Maximum of 250 characters"),
    bannerUri: z.union([ImageSchema, z.string()]).nullish(),
    twitter: z.string().optional(),
    linkedIn: z.string().optional(),
    github: z.string().optional(),
    website: z.string().optional(),
  })
  .required();

const PublicKeySchema = z
  .string({
    required_error: "Public Key is required",
    invalid_type_error: "Public Key cannot be empty",
  })
  .default("")
  .refine(
    (data) => {
      // Validate length
      if (data?.length !== 44) return false;

      try {
        // Attempt to decode to ensure it's base58; Solana public keys are 32 bytes long when decoded
        const decoded = bs58.decode(data);
        return decoded.length === 32;
      } catch {
        // If decoding fails, it's not a valid base58 string
        return false;
      }
    },
    {
      message: "Invalid Solana Public Key",
    }
  );
export const CreateFTSchema = z.object({
  name: z
    .string()
    .min(1, "Token name is required")
    .max(24, "Maximum of 24 characters"),
  symbol: z
    .string()
    .min(2, "Minimum of 2 characters")
    .max(8, "Maximum of 8 characters"),
  decimals: z.coerce
    .number()
    .gte(0, "Decimals must be positive")
    .lte(9, "Decimals exceeded the maximum"),
  supply: z.coerce
    .number()
    .positive("Supply must be greater than 0")
    .max(100_000_000_000_000, "Supply exceeded the limit"), // 100 trillion
  description: z
    .string()
    .min(1, "Description is required")
    .max(250, "Maximum of 250 characters"),
  logoUri: ImageSchema,
});

export const NFTTraitsSchema = z.object({
  traitType: z
    .string()
    .min(1, "Token name is required")
    .max(20, "Maximum of 24 characters"),
  value: z
    .string()
    .min(1, "Token name is required")
    .max(20, "Maximum of 24 characters"),
});

export const CreateNFTSchema = z.object({
  name: z
    .string()
    .min(1, "Token name is required")
    .max(24, "Maximum of 24 characters"),
  symbol: z
    .string()
    .min(2, "Minimum of 2 characters")
    .max(8, "Maximum of 8 characters"),
  sellerBasisPoints: z.coerce
    .number()
    .gte(0, "Royalty must be positive")
    .lte(100, "Royalty must be 0 to 100"),
  supply: z.coerce
    .number()
    .positive("Supply must be greater than 0")
    .max(100_000_000_000_000, "Supply exceeded the limit"), // 100 trillion
  description: z
    .string()
    .min(1, "Description is required")
    .max(250, "Maximum of 250 characters"),
  logoUri: ImageSchema,
  traits: z.array(NFTTraitsSchema),
});

export const FTMembershipSchema = z
  .object({
    mint: PublicKeySchema,
    proposalFee: z
      .number({
        required_error: "Proposal Fee is required",
        invalid_type_error: "Proposal Fee must be a number",
      })
      .gte(0, "Proposal Fee must be at least 0"),
    minQuorum: z
      .number({
        required_error: "Min. Quorum is required",
        invalid_type_error: "Min. Quorum must be a number",
      })
      .gte(1),
    minThreshold: z
      .number({
        required_error: "Min. Threshold is required",
        invalid_type_error: "Min. Threshold must be a number",
      })
      .gte(1),
    maxExpiry: z
      .number({
        required_error: "Max Expiry is required",
        invalid_type_error: "Max Expiry must be a number",
      })
      .gte(1),
    evaluationPhasePeriod: z
      .number({
        required_error: "Evaluation Phase Period is required",
        invalid_type_error: "Evaluation Phase Period must be a number",
      })
      .gte(1),
    minStakedRequiredProposal: z
      .number({
        invalid_type_error: "Min. Staked must be a number",
      })
      .gte(1),
    allowSubfleetCreation: z.coerce.boolean().default(false),
    minStakedToCreateSubfleet: z
      .number({
        invalid_type_error: "Min. Staked must be a number",
      })
      .gte(1)
      .nullish(),
    isHybrid: z.coerce.boolean().default(false).nullish(),
  })
  .required();

export const NFTMembershipSchema = z
  .object({
    mint: PublicKeySchema,
    proposalFee: z
      .number({
        required_error: "Proposal Fee is required",
        invalid_type_error: "Proposal Fee must be a number",
      })
      .gte(0, "Proposal Fee must be at least 0"),
    minQuorum: z
      .number({
        required_error: "Min. Quorum is required",
        invalid_type_error: "Min. Quorum must be a number",
      })
      .gte(1),
    minThreshold: z
      .number({
        required_error: "Min. Threshold is required",
        invalid_type_error: "Min. Threshold must be a number",
      })
      .gte(1),
    maxExpiry: z
      .number({
        required_error: "Max Expiry is required",
        invalid_type_error: "Max Expiry must be a number",
      })
      .gte(1),
    evaluationPhasePeriod: z
      .number({
        required_error: "Evaluation Phase Period is required",
        invalid_type_error: "Evaluation Phase Period must be a number",
      })
      .gte(1),
    minStakedRequiredProposal: z.number().gte(1).nullish(),
    allowSubfleetCreation: z.coerce.boolean().default(false),
    minStakedToCreateSubfleet: z
      .number({
        invalid_type_error: "Min. Staked must be a number",
      })
      .gte(1)
      .nullish(),
    isHybrid: z.coerce.boolean().default(false).nullish(),
  })
  .required();

export const HybridMembershipSchema = z
  .object({
    mint: PublicKeySchema,
    proposalFee: z
      .number({
        required_error: "Proposal Fee is required",
        invalid_type_error: "Proposal Fee must be a number",
      })
      .gte(0, "Proposal Fee must be at least 0"),
    minQuorum: z
      .number({
        required_error: "Min. Quorum is required",
        invalid_type_error: "Min. Quorum must be a number",
      })
      .gte(1),
    minThreshold: z
      .number({
        required_error: "Min. Threshold is required",
        invalid_type_error: "Min. Threshold must be a number",
      })
      .gte(1),
    maxExpiry: z
      .number({
        required_error: "Max Expiry is required",
        invalid_type_error: "Max Expiry must be a number",
      })
      .gte(1),
    evaluationPhasePeriod: z
      .number({
        required_error: "Evaluation Phase Period is required",
        invalid_type_error: "Evaluation Phase Period must be a number",
      })
      .gte(1),
    minStakedRequiredProposal: z.number().gte(1).nullish(),
    allowSubfleetCreation: z.coerce.boolean().default(false),
    minStakedToCreateSubfleet: z
      .number({
        invalid_type_error: "Min. Staked must be a number",
      })
      .gte(1)
      .nullish(),
    isHybrid: z.coerce.boolean().default(true).nullish(),
  })
  .required();

export const FleetConfigMembershipSchema = z.union([
  FTMembershipSchema,
  NFTMembershipSchema,
  HybridMembershipSchema,
]);

export const FleetConfigSchema = z
  .object({
    membershipType: z.nativeEnum(EMembershipType),
    hasExistingMintAddress: z.coerce.boolean(),
    config: FleetConfigMembershipSchema,
    // createAsset should be nullish() if hasExistingMintAddress is false
    createAsset: z.union([CreateFTSchema, CreateNFTSchema]).nullish(),
  })
  .required()
  .refine(
    (args) => {
      if (
        args.membershipType === EMembershipType.Fungible &&
        args.config.minStakedRequiredProposal === null
      ) {
        return false;
      } else if (
        args.membershipType === EMembershipType.Fungible &&
        args.config.minStakedRequiredProposal !== null &&
        args.config.minStakedRequiredProposal > 0
      ) {
        return true;
      } else if (
        args.membershipType !== EMembershipType.Fungible &&
        args.config.minStakedRequiredProposal === null
      ) {
        return true;
      }
    },
    {
      path: ["config.minStakedRequiredProposal"],
      message: "Min. Staked to Create Proposal for Fungible is required",
    }
  );

export const FleetTeamSchema = z
  .object({
    teamWallet: PublicKeySchema,
    stayAnonymous: z.coerce.boolean().default(false),
    name: z
      .string()
      .min(1, "Team name is required")
      .max(24, "Maximum of 24 characters"),
    twitter: z.string().optional(),
    linkedIn: z.string().optional(),
    github: z.string().optional(),
    website: z.string().optional(),
  })
  .required();

export const FleetSchema = z.object({
  info: FleetInfoSchema,
  config: FleetConfigSchema,
  team: FleetTeamSchema,
});

export type IFleetInfo = z.infer<typeof FleetInfoSchema>;
export type IFleetConfig = z.infer<typeof FleetConfigSchema>;
export type INFTMembership = z.infer<typeof NFTMembershipSchema>;
export type IFTMembership = z.infer<typeof FTMembershipSchema>;
export type IHybridMembership = z.infer<typeof HybridMembershipSchema>;
export type IFleetConfigMembershipSchema = z.infer<
  typeof FleetConfigMembershipSchema
>;
export type IFleetTeam = z.infer<typeof FleetTeamSchema>;
export type IFleet = z.infer<typeof FleetSchema>;

export const FleetInfoDefaults: IFleetInfo = {
  id: "",
  logoUri: null as unknown as File,
  name: "",
  description: "",
  bannerUri: null as unknown as File,
  twitter: "",
  linkedIn: "",
  github: "",
  website: "",
};

export const FleetTeamDefaults: IFleetTeam = {
  teamWallet: "",
  name: "",
  twitter: "",
  linkedIn: "",
  github: "",
  website: "",
  stayAnonymous: false,
};

export const FleetConfig: IFleetConfigMembershipSchema = {
  mint: "",
  proposalFee: null as unknown as number,
  minQuorum: 0,
  minThreshold: null as unknown as number,
  maxExpiry: null as unknown as number,
  evaluationPhasePeriod: null as unknown as number,
  minStakedRequiredProposal: null as unknown as number,
  allowSubfleetCreation: false,
  minStakedToCreateSubfleet: null as unknown as number,
  isHybrid: false,
};

export const FleetConfigDefaults: IFleetConfig = {
  membershipType: null as unknown as EMembershipType,
  hasExistingMintAddress: true,
  config: FleetConfig,
  createAsset: null,
};
