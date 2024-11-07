const { z } = require("zod");

const tagValidator = z.object({
  name: z.string().trim(),
});
module.exports = tagValidator;
