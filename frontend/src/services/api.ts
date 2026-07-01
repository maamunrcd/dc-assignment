import axios from 'axios';

const baseURL = import.meta.env.VITE_BACKEND_API_URL || '';

export const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      return Promise.reject({
        message: 'No response received from the server. Please try again.',
      });
    }

    const message =
      error.response.data?.message ||
      'Something went wrong while fetching data.';

    return Promise.reject({ message, status: error.response.status });
  }
);
