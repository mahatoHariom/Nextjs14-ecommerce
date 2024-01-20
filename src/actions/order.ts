import api from "@/utils/axiosInstance";

export async function createOrder(data:any) {
  const response = await api.post("/api/v1/order/create", data);
  return response?.data;
}
