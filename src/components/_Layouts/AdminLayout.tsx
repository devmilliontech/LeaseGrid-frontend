import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar.tsx";
import HeaderNavigation from "../appShell/header/HeaderNavigation.tsx";

const AdminLayout: React.FC = () => {
  const location = useLocation();

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
    // "/rent": "Rent Management",
    // "/listings": "Listings Management",
    // "/accounts": "Accounts Management",
  };

  const pageSubtitles: Record<string, string> = {
    "/dashboard": "Overview",
    "/users": "Manage all users, roles, and verification status",
    "/jobs": "Track and manage service jobs.",
    "/payments": "Manage all payments and transactions.",
    "/disputes": "Manage all disputes and resolve conflicts.",
    "/reviews": "Manage all reviews and ratings.",
    "/logs": "Manage all system logs and events.",
    "/support": "Manage all support tickets and requests.",
    "/compliance": "Manage all compliance and regulatory requirements.",
    "/settings": "Manage all settings and preferences.",
    // "/rent": "Rent Management",
    // "/listings": "Listings Management",
    // "/accounts": "Accounts Management",
  };

  const title = pageTitles[location.pathname];
  const subtitle = pageSubtitles[location.pathname];

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      <main className="flex-1 bg-gray-100 overflow-y-auto">
        <HeaderNavigation title={title} subtitle={subtitle}/>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
