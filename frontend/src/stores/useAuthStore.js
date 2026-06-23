// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// const useAuthStore = create(
//   persist(
//     (set) => ({
//       // Initial State
//       user: null,
//       token: null,
//       isAuthenticated: false,

//       // Actions
//       login: (user, token) =>
//         set({
//           user,
//           token,
//           isAuthenticated: true,
//         }),

//       logout: () =>
//         set({
//           user: null,
//           token: null,
//           isAuthenticated: false,
//         }),
//     }),
//     {
//       name: "notes-auth-storage", // Unique key for localStorage
//     },
//   ),
// );

// export default useAuthStore;

import { create } from "zustand";

const useAuthStore = create((set) => ({
  isAuthenticated: false, // Change to true manually to test the opposite flow
  token: null,
  user: null,

  // Fake login action for testing your Route Guard right now
  login: () =>
    set({
      isAuthenticated: true,
      token: "mock-jwt-token-abcd123",
      user: { name: "Test Developer", email: "test@example.com" },
    }),

  // Fake logout action
  logout: () =>
    set({
      isAuthenticated: false,
      token: null,
      user: null,
    }),
}));

export default useAuthStore;
