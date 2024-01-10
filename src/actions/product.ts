import api from "@/utils/axiosInstance";
import { CreateProductSchema } from "@/validation/product";

export async function createProduct(data: CreateProductSchema) {
  const response = await api.post("/api/v1/product/create", data);
  return response?.data;
}