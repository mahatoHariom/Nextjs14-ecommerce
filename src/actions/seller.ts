import { Product, Seller } from "@/types";
import { SellerUpdateSchema } from "../types/seller.type";
import api from "@/utils/axiosInstance";

import { SellerLoginSchema, SellerRegisterSchema } from "@/validation/seller";

export async function registerSeller(data: SellerRegisterSchema) {
  const response = await api.post("/api/v1/seller/register", data);
  return response?.data;
}
export async function loginSeller(data: SellerLoginSchema) {
  const response = await api.post("/api/v1/seller/login", data);
  return response;
}

export async function getAllProductsOfSeller(): Promise<Product[]> {
  const response = await api.get("/api/v1/seller/allProducts");
  return await response.data;
}
export async function getAllOrderOfSeller(): Promise<any[]> {
  const response = await api.get("/api/v1/seller/allSellerOrders");
  return await response.data;
}


export async function getSellerProfile(): Promise<Seller> {
  const response = await api.get("/api/v1/seller/profile");
  return await response.data;
}

export async function updateSellerById(id: string, data: SellerUpdateSchema) {
  const response = await api.put(`/api/v1/seller/profile/update/${id}`, data);
  return await response.data;
}
