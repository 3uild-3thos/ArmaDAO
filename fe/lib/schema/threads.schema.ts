import { z } from "zod";

export const CommentSchema = z.object({
  id: z.string(),
  pinned: z.boolean(),
  content: z.string(),
  name: z.string(),
  createdAt: z.string(),
});

export type IComment = z.infer<typeof CommentSchema>;

export const ThreadSchema = z.object({
  id: z.string(),
  type: z.string(),
  title: z.string(),
  description: z.string(),
  updatedAt: z.string(),
  createdAt: z.string(),
  changesTitle: z.string().optional(),
  like: z.number(),
  dislike: z.number(),
  comment: z.number(),
  comments: z.array(CommentSchema),
});

export type IThread = z.infer<typeof ThreadSchema>;
