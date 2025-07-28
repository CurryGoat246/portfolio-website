import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Uses your Render backend
  withCredentials: true, // Sends cookies if needed
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token if available
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

//Handle 401 errors by clearing token
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
    }
    return Promise.reject(error);
  }
);

export default api;
