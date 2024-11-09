const { z } = require("zod");

const adminValidator = z.object({
  name: z.string().trim().optional(),
  email: z.string().email().trim(),
  password: z
    .string()
    .min(8, { message: "Password must have atleast 8 character" })
    .trim(),
  avatar: z.string().optional(),
  gender: z.string().optional(),
});

module.exports = adminValidator;
