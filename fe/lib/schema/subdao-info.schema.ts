import { z } from "zod";

export const SubDaoInfoSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.string(),
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
  category: "",
  location: "",
  pitchdeck: "",
  demoVideo: "",
  twitter: "",
  linkedIn: "",
  github: "",
  website: "",
};
