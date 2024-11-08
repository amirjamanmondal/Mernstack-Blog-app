const { z } = require("zod");

function validateBlogPost(data, isCreate) {
  try {
    const blogPostValidator = z.object({
      title: isCreate ? z.string().trim() : z.string().trim().optional(),
      content: isCreate ? z.string().trim() : z.string().trim().optional(),
      author: z
        .object({
          _id: z.string().uuid(),
        })
        .optional(),
      tags: z
        .array(z.string().min(1, { message: "Tag can not be empty" }))
        .optional(),
      category: z
        .string()
        .min(1, { message: "category can not be empty" })
        .optional(),
      comments: z
        .array(
          z.object({
            _id: z.string().uuid(),
          })
        )
        .optional(),
    });
    return (validateData = blogPostValidator.parse(data));
  } catch (error) {
    console.log(error);

    if (error instanceof z.ZodError) {
      return { error: error.issues }; // Return detailed error information
    } else {
      throw error; // Re-throw unexpected errors
    }
  }
}
module.exports = validateBlogPost;
