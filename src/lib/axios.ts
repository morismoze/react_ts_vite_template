import Axios, { AxiosRequestConfig } from 'axios';

export const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axios.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = 'token';

  if (token) {
    config.headers!.authorization = `Bearer ${token}`;
  }
  config.headers!.Accept = 'application/json';

  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;

    return Promise.reject(error);
  },
);
