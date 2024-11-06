import { z } from "zod";

const commentValidator = z.object({
  content: z.string().trim(),
  author: z.object({ _id: z.string().uuid() }),
  post: z.object({ _id: z.string().uuid() }),
  parentComment: z.object({ _id: z.string().uuid() }),
  createdAt: z.date().default(new Date()),
});

export default commentValidator;
