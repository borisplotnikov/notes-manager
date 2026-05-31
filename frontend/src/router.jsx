import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    lazy: async () => {
      const module = await import("./App");
      return { Component: module.default };
    },
    children: [
      // Future note routes will go here, e.g.:
      // { path: 'notes', element: <NotesPage /> }
    ],
  },
]);
