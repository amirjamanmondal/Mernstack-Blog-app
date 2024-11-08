const { z } = require("zod");

const CategoryValidator = z.object({
  category: z.string().min(1, { message: "Name can not be empty" }).trim(),
});

module.exports = CategoryValidator;
