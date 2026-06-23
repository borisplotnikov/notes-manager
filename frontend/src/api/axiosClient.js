import axios from "axios";
import useAuthStore from "../stores/useAuthStore"; // Adjust path as needed

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
  headers: { "Content-Type": "application/json" },
});

// Request interceptor to automatically inject the JWT token
apiClient.interceptors.request.use((config) => {
  // Dynamically read the token from the Zustand store outside of a React component
  const token = useAuthStore.getState().token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Global Error Handling (Syncing backend state failures with Zustand)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Auto-logout user if token is expired or invalid
      useAuthStore.getState().logout();
    }
    return Promise.reject(error);
  },
);

export default apiClient;
