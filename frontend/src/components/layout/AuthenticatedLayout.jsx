import { Outlet } from "react-router-dom";
import Navbar from "../navigation/Navbar";
import Sidebar from "../navigation/Sidebar";

export default function AuthenticatedLayout() {
  return (
    <div className="d-flex flex-column vh-100">
      <Navbar />

      <div className="d-flex flex-grow-1">
        <Sidebar />

        <main className="flex-grow-1 p-4 bg-body-tertiary overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
