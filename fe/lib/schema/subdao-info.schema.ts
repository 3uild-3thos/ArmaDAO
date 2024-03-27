import { z } from "zod";
export enum EMembershipType {
  NFT = "NFT",
  Fungible = "Fungible",
}

export const SubDaoInfoSchema = z.object({
  id: z.string().optional(),
  image: z.string().optional(),
  creator: z.string().optional(),
  title: z.string(),
  description: z.string(),
  members: z.number().optional(),
  proposals: z.number().optional(),
  value: z.number().optional(),
  category: z.nativeEnum(EMembershipType).nullable(),
  location: z.string(),
  pitchdeck: z.string(),
  demoVideo: z.string(),
  twitter: z.string(),
  linkedIn: z.string(),
  github: z.string(),
  website: z.string(),
});

export type ISubDaoInfo = z.infer<typeof SubDaoInfoSchema>;

export const SubDaoInfoDefaults: ISubDaoInfo = {
  title: "",
  description: "",
  category: null,
  location: "",
  pitchdeck: "",
  demoVideo: "",
  twitter: "",
  linkedIn: "",
  github: "",
  website: "",
};
