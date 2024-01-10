import { z } from "zod";

export const sellerRegisterSchema = z.object({
  firstName: z.string().min(1, { message: "First Name is required" }),
  lastName: z.string().min(1, { message: "Last Name is required" }),
  email: z.string(),
  contact: z.string().min(10, { message: "Length should be 10 " }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  country: z.string(),
  address: z.string(),
  shopName: z.string(),
  shopAddress: z.string(),
});

export const sellerLoginSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});
// type LoginSchema = z.infer<typeof sellerLoginSchema>;
export type SellerLoginSchema = z.infer<typeof sellerRegisterSchema>;
export type SellerRegisterSchema = z.infer<typeof sellerRegisterSchema>;
