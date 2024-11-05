import { z } from "zod";

const tagValidator = z.object({
  name: z.string().trim(),
});

export default tagValidator;
