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
