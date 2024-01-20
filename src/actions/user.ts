import api from "@/utils/axiosInstance";
import { UserLoginSchema, UserRegisterSchema } from "@/validation/user";

export default async function registerUser(data: any) {
  console.log(data, "aayo");
  try {
    const response = await api.post("/api/v1/auth/register", data);
    return response?.data;
  } catch (err) {
    return { err };
  }
}

export async function loginUser(data: any) {
  try {
    const response = await api.post("/api/v1/auth/login", data);

    return response?.data;
  } catch (err) {
    return { err };
  }
}
