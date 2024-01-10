import { z } from "zod";

export const createProductSchema = z.object({
  name:  z.string().min(1, { message: " Product Name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  category: z.string().min(1, { message: "Category is required" }),
  originalPrice:  z.number().min(1, { message: "Original Price is required" }),
  discountPrice: z.number().min(1, { message: "Discount Price is required" }),
  stock: z.number().min(1, { message: "Stock is required" }),
  images: z.array(
    z.object({
      public_id: z.string().optional(),
      imgSrc: z.string().optional(),
    })
  ),
});


export type CreateProductSchema = z.infer<typeof  createProductSchema>;
