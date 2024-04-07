import { z } from "zod";

export const TeamInfoSchema = z.object({
  name: z.string(),
  twitter: z.string().url(),
  website: z.string().url(),
  linkedIn: z.string().url(),
  github: z.string().url(),
});

export type ITeamInfo = z.infer<typeof TeamInfoSchema>;

export const TeamInfoDefaults: ITeamInfo = {
  name: "",
  twitter: "",
  website: "",
  linkedIn: "",
  github: "",
};
