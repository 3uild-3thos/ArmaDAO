import { z } from "zod";

export const ProjectSchema = z.object({
  id: z.string(),
  image: z.string(),
  name: z.string(),
  creator: z.string(),
  type: z.string(),
  backers: z.number(),
  expiry: z.string().datetime(),
  goal: z.number(),
  currentFunds: z.number(),
});

export type IProject = z.infer<typeof ProjectSchema>;
