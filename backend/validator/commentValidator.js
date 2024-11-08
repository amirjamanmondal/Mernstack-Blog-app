const { z } = require("zod");

function postCommentIsValid(data, isCreate) {
  const commentValidator = z.object({
    content: isCreate ? z.string().trim() : z.string().trim().optional(),
    author: z.object({ _id: z.string().uuid() }).optional(),
    post: z.object({ _id: z.string().uuid() }).optional(),
    parentComment: z.object({ _id: z.string().uuid() }).optional(),
  });
  const validateComment = commentValidator.parse(data);
  return validateComment;
}

module.exports = postCommentIsValid;
