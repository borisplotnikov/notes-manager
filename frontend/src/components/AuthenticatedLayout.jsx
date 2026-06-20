import { Outlet } from "react-router-dom";

export default function AuthenticatedLayout() {
  return (
    <div className="d-flex flex-column vh-100">
      <nav className="navbar navbar-dark bg-dark px-3 shadow-sm">
        <span className="navbar-brand mb-0 h1">NotesApp</span>
      </nav>

      <div className="d-flex flex-grow-1">
        <aside className="bg-light border-end p-3" style={{ width: "240px" }}>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a className="nav-link active" href="#">
                My Notes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-danger" href="#">
                Logout
              </a>
            </li>
          </ul>
        </aside>

        <main className="flex-grow-1 p-4 bg-boy-tertiary overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
