import { Product } from "@/types";
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

export async function getAllProducts(params?: {
  search?: string;
}): Promise<{ allProducts: Product[] }> {
  const queryParams = params?.search ? `?search=${params.search}` : "";
  const response = await api.get(`/api/v1/product/all${queryParams}`);
  return response.data;
}

export async function getProductById(id: string) {
  const response = await api.get(`/api/v1/product/single/${id}`);
  return response?.data;
}
