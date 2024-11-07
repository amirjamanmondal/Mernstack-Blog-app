const { z } = require("zod");

const blogPostValidator = z.object({
  title: z.string().trim(),
  content: z.string().trim(),
  author: z.object({
    _id: z.string().uuid(),
  }).optional(),
  tags: z.array(z.string().min(1, { message: "Tag can not be empty" })),
  category: z.array(
    z.string().min(1, { message: "category can not be empty" })
  ),
  comments: z
    .array(
      z.object({
        _id: z.string().uuid(),
      })
    )
    .optional(),
});

module.exports = blogPostValidator;
