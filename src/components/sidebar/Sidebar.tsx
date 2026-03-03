import { useEffect, useState } from "react";
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
import Loader from "../common/Loader";
import { useNavigate } from "react-router-dom";
import { Button } from "../appShell/fromComponent/button";




const Sidebar: React.FC = () => {
  const [username, setUserName] = useState('');
  const user = localStorage.getItem('user') as string;
  const userObj = JSON.parse(user);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()

  const handleLogout = () => {
    setOpen(true);
    setTimeout(() => {
      localStorage.setItem('isAuthenticated', 'false');
      navigate('/login');
      setOpen(false);
    }, 1500);
  };
  useEffect(() => {
    if (user) {
      setUserName(userObj.name.toUpperCase());
    }
  }, [])

  return (
    <aside className="w-64 h-screen bg-white flex flex-col sticky top-0 max-h-full">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-slate-100 shrink-0">

        <h2 className="text-xl font-bold tracking-wide text-slate-800 text-shadow-md focus">ADMIN PANEL</h2>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col  px-4 py-6 space-y-2  overflow-y-auto scrollbar-hide"
      >
        <SidebarItem label="Dashboard" to="/dashboard" bgColor="bg-blue-200" iconColor="text-blue-500" icon={LayoutDashboard} />
        <SidebarItem label="Users" to="/users" bgColor="bg-green-200" iconColor="text-green-500" icon={User} />
        <SidebarItem label="Jobs" to="/jobs" bgColor="bg-cyan-200" iconColor="text-cyan-600" icon={BriefcaseBusiness} />
        <SidebarItem label="Payments" to="/payments" bgColor="bg-emerald-200" iconColor="text-emerald-600" icon={WalletCards} />
        <SidebarItem label="Disputes" to="/disputes" bgColor="bg-red-200" iconColor="text-red-500" icon={MessageSquare} />
        <SidebarItem label="Reviews" to="/reviews" bgColor="bg-yellow-200" iconColor="text-yellow-500" icon={Star} />
        <SidebarItem label="Logs" to="/logs" bgColor="bg-orange-200" iconColor="text-orange-500" icon={Logs} />
        <SidebarItem label="Support" to="/support" bgColor="bg-indigo-200" iconColor="text-indigo-500" icon={Headset} />
        <SidebarItem label="Compliance" to="/compliance" bgColor="bg-violet-200" iconColor="text-violet-500" icon={NotebookPen} />
        <SidebarItem label="Settings" to="/settings" bgColor="bg-gray-200" iconColor="text-black-500" icon={Settings} />
      </nav>

      {/* Footer (optional) */}
      {/* Profile */}
      <div className="flex items-center gap-3 justify-between mb-5 pt-5 border-t border-slate-100  shadow-inner">
        <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          className="w-9 h-9 rounded-full object-cover cursor-pointer ml-2 "
        />
        {username ? <span
          className="text-sm font-semibold text-slate-800 bg-green-200 px-4 py-1 
                          rounded-xl mr-10"
        >
          {username.split(' ')[0]}
        </span> :
          <span className="text-sm font-medium text-slate-800 mr-10">
            john
          </span>
        }
        <Button
          label="Logout"
          onClick={handleLogout}
          color="danger"
          className="px-3 py-1"
        />

        <Loader open={open} onClose={() => setOpen(false)} />
      </div>
    </aside>
  );
};

export default Sidebar;
