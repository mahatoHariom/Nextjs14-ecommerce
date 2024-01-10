import api from "@/utils/axiosInstance";

export default async function registerUser(data) {
  try {
    const response = await api.post("/auth/register", {
      data,
    });
    return response;
  } catch (err) {
    return { err };
  }
}
