import useAuthStore from "../stores/useAuthStore";

const API_BASE_URL = import.meta.env.VITE_API_URL;

const apiClient = async (path, options = {}) => {
  const token = useAuthStore.getState().token;

  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers,
  });

  let data = null;

  const contentType = response.headers.get("content-type");

  if (contentType?.includes("application/json")) {
    data = await response.json();
  }

  if (!response.ok) {
    if (response.status === 401) {
      useAuthStore.getState().logout();
    }

    const error = new Error(data?.message || "API request failed");
    error.status = response.status;
    error.data = data;

    throw error;
  }

  return data;
};

// Use apiClient for all backend HTTP requests; pass relative paths only.
export default apiClient;
