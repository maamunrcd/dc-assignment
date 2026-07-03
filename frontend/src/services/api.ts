import axios from 'axios';

const baseURL = import.meta.env.VITE_BACKEND_API_URL || '';

export const publicAxiosInstance = axios.create({
  baseURL,
  timeout: 15_000,
  headers: {
    Accept: 'application/json',
  },
});

publicAxiosInstance.interceptors.response.use(
  (response) => response,
  (error: unknown) => {
    if (!axios.isAxiosError(error) || !error.response) {
      return Promise.reject(
        new Error('Unable to reach the server. Check your connection and try again.')
      );
    }

    const message =
      typeof error.response.data === 'object' &&
      error.response.data !== null &&
      'message' in error.response.data &&
      typeof error.response.data.message === 'string'
        ? error.response.data.message
        : 'The server returned an unexpected error.';

    return Promise.reject(new Error(message));
  }
);
