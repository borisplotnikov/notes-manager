import { createBrowserRouter } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import SettingsPage from "./pages/SettingsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    lazy: async () => {
      const module = await import("./App");
      return { Component: module.default };
    },
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "dashboard", element: <DashboardPage /> },
      { path: "settings", element: <SettingsPage /> },
    ],
  },
]);
