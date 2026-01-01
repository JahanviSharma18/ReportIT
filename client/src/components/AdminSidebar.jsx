// components/AdminSidebar.jsx
import { Link, useLocation } from "react-router-dom";

function AdminSidebar() {
  const location = useLocation();

  const navItems = [
    { label: "Dashboard", path: "/admin" },
    { label: "Incidents", path: "/admin/incidents" },
    { label: "Events", path: "/admin/events" },
    { label: "Guidelines", path: "/admin/guidelines" },
    { label: "Messages", path: "/admin/messages" },
    { label: "Password Resets", path: "/admin/resets" }
  ];

  return (
    <aside className="w-64 bg-gray-900 text-gray-200 fixed inset-y-0 left-0">
      {/* LOGO */}
      <div className="h-16 flex items-center justify-center border-b border-gray-800">
        <img src="/images/logo.png" alt="Logo" className="h-8" />
      </div>

      {/* NAV */}
      <nav className="p-4 space-y-1">
        {navItems.map((item) => {
          const active = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-2 rounded-md text-sm font-medium
                ${
                  active
                    ? "bg-gray-800 text-white"
                    : "hover:bg-gray-800 hover:text-white"
                }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* LOGOUT */}
      <div className="absolute bottom-0 w-full p-4 border-t border-gray-800">
        <button
          onClick={() => {
            localStorage.clear();
            window.location.href = "/login";
          }}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md text-sm"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}

export default AdminSidebar;
