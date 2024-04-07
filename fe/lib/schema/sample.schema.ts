import { z } from "zod";

export enum EUserType {
  CREATOR = "Creator",
  BACKER = "Backer",
  BOTH = "Both",
}

export const userTypeOptions = Object.keys(EUserType).map((key) => ({
  label: EUserType[key as keyof typeof EUserType],
  value: EUserType[key as keyof typeof EUserType],
}));

export enum ERegions {
  AFRICA = "Africa",
  ASIA = "Asia",
  EUROPE = "Europe",
  NORTH_AMERICA = "North America",
  OCEANIA = "Oceania",
  SOUTH_AMERICA = "South America",
  CENTRAL_AMERICA = "Central America",
  CARIBBEAN = "The Caribbean",
}

export const regionOptions = Object.keys(ERegions).map((key) => ({
  label: ERegions[key as keyof typeof ERegions],
  value: ERegions[key as keyof typeof ERegions],
}));

export const WaitlistSchema = z.object({
  wallet: z.string().min(32).max(44),
  email: z.string().email(),
  region: z.nativeEnum(ERegions).nullable(),
  twitter: z.string(),
  user_type: z.nativeEnum(EUserType).nullable(),
  creator_amount: z.coerce.number().nonnegative().safe().optional(),
  backer_amount: z.coerce.number().nonnegative().safe().optional(),
});

// Infer the types from Zod schemas
export type IWaitlist = z.infer<typeof WaitlistSchema>;

export const WaitlistDefaults: IWaitlist = {
  wallet: "",
  email: "",
  region: null,
  twitter: "",
  user_type: null,
  creator_amount: undefined,
  backer_amount: undefined,
};
