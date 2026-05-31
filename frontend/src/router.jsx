import { createBrowserRouter } from "react-router-dom";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // Future note routes will go here, e.g.:
      // { path: 'notes', element: <NotesPage /> }
    ],
  },
]);
