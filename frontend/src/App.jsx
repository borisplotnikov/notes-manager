import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export function HydrateFallback() {
  return <div className="p-5 text-center">Loading...</div>;
}
