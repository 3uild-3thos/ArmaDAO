import { z } from "zod";

export enum EMembershipType {
  NFT = "NFT",
  Fungible = "Fungible",
}

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB in bytes;
const ACCEPTED_IMAGE_TYPES = ["image/png"];

export const ImageSchema = z
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
    name: z.string(),
    logoUri: ImageSchema.nullable(),
    description: z.string(),
    bannerUri: ImageSchema,
    twitter: z.string().optional(),
    linkedIn: z.string().optional(),
    github: z.string().optional(),
    website: z.string().optional(),
  })
  .required();

export const FleetConfigSchema = z.object({
  membershipType: z.nativeEnum(EMembershipType),
});

export type IFleetInfo = z.infer<typeof FleetInfoSchema>;
export type IFleetConfig = z.infer<typeof FleetConfigSchema>;

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
