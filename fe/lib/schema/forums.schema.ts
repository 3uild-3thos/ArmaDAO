import { z } from "zod";

export const ForumSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  upVotes: z.number(),
  downVotes: z.number(),
  createdAt: z.string(),
});

export type IForum = z.infer<typeof ForumSchema>;
