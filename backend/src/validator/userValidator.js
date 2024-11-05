import { z } from "zod";

const userValidator = z.object({
  name: z.string().trim().optional(),
  email: z
    .email({ message: "Email is not valid" })
    .unique({ message: "Email must be unique" })
    .trim(),
  password: z
    .string()
    .min(8, { message: "Password must have atleast 8 character" })
    .trim(),
  avatar: z.string().optional(),
  gender: z.string().optional(),
  dateOfBirth: z.date().optional(),
  age: z.number().optional(),
});

export default userValidator;
