import { z } from "zod";

const CategoryValidator = z.object({
  name: z.string().min(1, { message: "Name can not be empty" }).trim(),
});

export default CategoryValidator;
