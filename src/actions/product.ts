import api from "@/utils/axiosInstance";
import { CreateProductSchema } from "@/validation/product";

export async function createProduct(data: CreateProductSchema) {
  const response = await api.post("/api/v1/product/create", data);
  return response?.data;
}

export async function deletProdctById(id: string) {
  const response = await api.delete(`/api/v1/product/delete/${id}`);
  return response;
}
