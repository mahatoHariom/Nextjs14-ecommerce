import { z } from "zod";

export const userRegisterSchema = z.object({
  name: z.string().min(1, { message: "First Name is required" }),
  email: z.string(),
  password: z.string(),
});

export const userLoginSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  password: z.string(),
});

export type UserLoginSchema = z.infer<typeof userLoginSchema>;
export type UserRegisterSchema = z.infer<typeof userRegisterSchema>;
