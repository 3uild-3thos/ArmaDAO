import { z } from "zod";

export const TeamMemberSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  position: z.string(),
  linkedIn: z.string(),
  twitter: z.string(),
  website: z.string(),
  github: z.string(),
  category: z.string(),
  description: z.string(),
});

export type ITeamMember = z.infer<typeof TeamMemberSchema>;

export const TeamMemberDefaults: ITeamMember = {
  name: "",
  position: "",
  linkedIn: "",
  twitter: "",
  website: "",
  github: "",
  category: "",
  description: "",
};
