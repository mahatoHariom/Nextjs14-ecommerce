import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import Cookie from "js-cookie";
import { logout } from "./logout";

interface RefreshQueueItem {
  resolve: (value: void | PromiseLike<void>) => void;
  reject: (reason?: any) => void;
}

let isRefreshing = false;
let refreshQueue: RefreshQueueItem[] = [];
let capturedCallback: () => Promise<any>;

const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:8008",
  withCredentials: true,
});

api.interceptors.request.use(
  async (config: any) => {
    const token = Cookie.get("accessToken");
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  async (response: AxiosResponse) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      if (!isRefreshing) {
        isRefreshing = true;
        try {
          const response = await api.post("/api/user/refresh");
          console.log(response,"response insance")
          const newAccessToken = response.data.accessToken;
          Cookie.set("accessToken", newAccessToken);
          originalRequest.headers = originalRequest.headers || {};
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        } catch (refreshError) {
         logout()
          return Promise.reject(error);
        } finally {
          isRefreshing = false;
        }

        // Retry the original request with the new token
        return api(originalRequest);
      } else {
        // If already refreshing, enqueue the retry logic
        return new Promise<void>((resolve, reject) => {
          refreshQueue.push({ resolve, reject });
        });
      }
    }

    return Promise.reject(error);
  }
);

export default api;

export const withTokenRefresh = async (callback: () => Promise<any>) => {
  capturedCallback = callback;
  try {
    return await capturedCallback();
  } catch (error: any) {
  
    if (error.response?.status === 401) {
      console.log(error,"Tal")
      if (!isRefreshing) {
        isRefreshing = true;

        try {
          const response = await api.post("/api/user/refresh");
          const newAccessToken = response.data.accessToken;
          console.log(newAccessToken, "b");
          Cookie.set("accessToken", newAccessToken);
       
          return await capturedCallback();
        } catch (refreshError) {
          logout();
          console.error("Error refreshing token:", refreshError);
          throw refreshError;
        } finally {
          isRefreshing = false;
        }
      } else {
        // If already refreshing, enqueue the retry logic
        return new Promise<void>((resolve, reject) => {
          refreshQueue.push({ resolve, reject });
        });
      }
    } else {
      throw error;
    }
  }
};
