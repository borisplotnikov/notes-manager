import { create } from "zustand";

const useUiStore = create((set) => ({
  // Initial State
  isSidebarCollapsed: false,

  // Actions
  toggleSidebar: () =>
    set((state) => ({
      isSidebarCollapsed: !state.isSidebarCollapsed,
    })),

  setSidebarCollapsed: (bool) =>
    set({
      isSidebarCollapsed: bool,
    }),
}));

export default useUiStore;
