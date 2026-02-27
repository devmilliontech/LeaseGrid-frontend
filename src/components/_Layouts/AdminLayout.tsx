import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar.tsx";
import HeaderNavigation from "../appShell/header/HeaderNavigation.tsx";

const AdminLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const verify = localStorage.getItem('isAuthenticated');
    const user = localStorage.getItem('user');
    if (verify !== 'true' || !user) {
      navigate('/login', { replace: true });
    }
  }, [location, navigate])

  const pageTitles: Record<string, string> = {
    "/dashboard": "Dashboard Overview",
    "/users": "Users Management",
    "/jobs": "Jobs Management",
    "/payments": "Payments Management",
    "/disputes": "Disputes Management",
    "/reviews": "Reviews Management",
    "/logs": "Logs Management",
    "/support": "Support Management",
    "/compliance": "Compliance Management",
    "/settings": "Settings",
  };

  const pageSubtitles: Record<string, string> = {
    "/users": "Manage all users, roles, and verification status",
    "/jobs": "Track and manage service jobs.",
    "/payments": "Manage all payments and transactions.",
    "/disputes": "Manage all disputes and resolve conflicts.",
    "/reviews": "Manage all reviews and ratings.",
    "/logs": "Manage all system logs and events.",
    "/support": "Manage all support tickets and requests.",
    "/compliance": "Manage all compliance and regulatory requirements.",
    "/settings": "Manage all settings and preferences.",

  };

  const title = pageTitles[location.pathname];
  const subtitle = pageSubtitles[location.pathname];

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      <main className="flex-1 bg-slate-50 overflow-y-auto">
        <HeaderNavigation title={title} subtitle={subtitle} />
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
