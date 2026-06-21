import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="bg-light border-end p-3" style={{ width: "240px" }}>
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
