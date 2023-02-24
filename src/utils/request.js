// axios library
import axios from "axios";
// envs for global variables
import envs from "../envs";

/** create axios */
export const request = axios.create({
  baseURL: envs.baseUrl,
  timeout: 1000,
  headers: { Accept: "application/json" },
});

// request interceptor to add the authentication token to all requests
request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// if needed, response interceptor to handle token refresh if the access token is expired
request.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // webAuth.checkSession ???
      //   const refreshToken = localStorage.getItem("refreshToken");
      //    implement token refresh logic here using the refreshToken
      //      ...??

      // Retry the original request with the new access token
      const token = localStorage.getItem("accessToken");
      originalRequest.headers.Authorization = `Bearer ${token}`;
      return request(originalRequest);
    }

    return Promise.reject(error);
  }
);

export default request;
