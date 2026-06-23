import { create } from "zustand";

const useAuthStore = create((set) => ({
  // Initial State
  user: null,
  token: null,
  isAuthenticated: false,

  // Actions
  login: (user, token) =>
    set({
      user,
      token,
      isAuthenticated: true,
    }),

  logout: () =>
    set({
      user: null,
      token: null,
      isAuthenticated: false,
    }),
}));

export default useAuthStore;
