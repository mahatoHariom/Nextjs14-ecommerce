import { z } from "zod";

export const updateSellerType = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  contact: z.string(),
  country: z.string(),
  address: z.string(),
  shopName: z.string(),
  shopAddress: z.string(),
});

export type SellerUpdateSchema = z.infer<typeof updateSellerType>;
