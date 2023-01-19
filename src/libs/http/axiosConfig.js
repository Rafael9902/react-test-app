export const axiosRequestConfiguration = {
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
};
