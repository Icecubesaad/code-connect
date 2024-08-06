import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: process.env.API_BASE_URL, // Your API base URL
  withCredentials: true // Send cookies with requests
});

// Add a response interceptor to handle token expiry
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const response = await axios.post('/api/refreshToken', {}, { withCredentials: true });
        return api(originalRequest);
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
