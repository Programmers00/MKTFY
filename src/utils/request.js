// axios library
import axios from "axios";
// envs for global variables
import envs from "../envs";
// webAuth from auth0-js
import { webAuth } from "../utils/webAuth";

/** create axios */
export const request = axios.create({
  baseURL: envs.baseUrl,
  timeout: 1000,
});

// request interceptor to add the authentication token to all requests
request.interceptors.request.use(
  (config) => {
    const accessToken = sessionStorage.getItem("accessToken");
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }
    config.headers.Authorization = `Bearer ${accessToken}`;
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
      /** sign out: signout and close trigger */
      webAuth.logout({
        returnTo: `${
          process.env.NODE_ENV === "development" ? envs.devUrl : envs.buildUrl
        }/auth`,
      });
      alert("Token has expired");
      // reset token in session storage
      sessionStorage.clear();

      return request(originalRequest);
    }

    return Promise.reject(error);
  }
);

export default request;
