import React from "react";
import SidebarItem from "./SidebarItems";
import { 
  User,
  LayoutDashboard,
  WalletCards,
  MessageSquare,
  Star,
  Logs,
  Headset,
  NotebookPen,
  Settings,
  BriefcaseBusiness,
 } from "lucide-react";


const Sidebar: React.FC = () => {
  
  return (
    <aside className="w-64 h-screen bg-white flex flex-col sticky top-0 max-h-full">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-slate-700 shrink-0">
        
        <h2 className="text-xl font-bold tracking-wide text-black">Admin</h2>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col  px-4 py-6 space-y-2  overflow-y-auto">
        <SidebarItem label="Dashboard" to="/dashboard" bgColor="bg-blue-200"  iconColor="text-blue-500" icon={LayoutDashboard}/>
        <SidebarItem label="Users" to="/users" bgColor="bg-green-200" iconColor="text-green-500" icon={User}/>
        <SidebarItem label="Jobs" to="/jobs" bgColor="bg-cyan-200" iconColor="text-cyan-600" icon={BriefcaseBusiness}/>
        <SidebarItem label="Payments" to="/payments" bgColor="bg-emerald-200" iconColor="text-emerald-600" icon={WalletCards}/>
        <SidebarItem label="Disputes" to="/disputes" bgColor="bg-red-200" iconColor="text-red-500" icon={MessageSquare}/>
        <SidebarItem label="Reviews" to="/reviews" bgColor="bg-yellow-200" iconColor="text-yellow-500" icon={Star}/>
        <SidebarItem label="Logs" to="/logs" bgColor="bg-orange-200" iconColor="text-orange-500" icon={Logs}/>
        <SidebarItem label="Support" to="/support" bgColor="bg-indigo-200" iconColor="text-indigo-500" icon={Headset}/>
        <SidebarItem label="Compliance" to="/compliance" bgColor="bg-violet-200" iconColor="text-violet-500" icon={NotebookPen}/>
        <SidebarItem label="Settings" to="/settings" bgColor="bg-gray-200" iconColor="text-black-500" icon={Settings}/>
      </nav>

      {/* Footer (optional) */}
      {/* Profile */}
      <div className="flex items-center gap-3  mb-5 pt-5 border-t border-slate-600  shadow-inner">
          <img
              src="https://i.pravatar.cc/40"
              alt="Profile"
              className="w-9 h-9 rounded-full object-cover cursor-pointer ml-2"
          />
          <span className="text-sm font-medium text-slate-700">
            John Doe
          </span>
          <button className="px-8 py-2 rounded-2xl font-bold transition-colors
            bg-red-200 text-red-600 hover:bg-red-600 shadow-sm shadow-red-200  
            cursor-pointer hover:text-white"
          >
            Logout
          </button>
      </div>
    </aside>
  );
};

export default Sidebar;
