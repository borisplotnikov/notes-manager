import { NavLink } from "react-router-dom";
import useUiStore from "../../stores/useUiStore";
import "./Sidebar.css";

export default function Sidebar() {
  const { isSidebarCollapsed } = useUiStore();
  return (
    <aside
      className={`bg-light border-end sidebar-transition ${isSidebarCollapsed ? "sidebar-collapsed" : "sidebar-expanded"}`}
    >
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink
            to="/dashboard"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/settings"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Settings
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `nav-link text-danger ${isActive ? "active" : ""}`
            }
          >
            Logout
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}
