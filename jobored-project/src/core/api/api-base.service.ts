import axios, { AxiosInstance, AxiosResponse } from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const baseInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export const getRequest = async <T>(response: Promise<AxiosResponse<T>>): Promise<T> => {
  try {
    const result: AxiosResponse<T> = await response;
    return result.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const { statusText } = error.response;
      throw new Error(statusText);
    }
    throw error;
  }
};
