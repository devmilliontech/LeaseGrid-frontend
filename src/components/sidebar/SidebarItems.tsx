import React from "react";
import { NavLink } from "react-router-dom";
import type { SidebarItemProps } from "./types";



const SidebarItem: React.FC<SidebarItemProps> = ({ 
  label,
  to,
  icon: Icon,
  iconColor,
  bgColor, 

}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
        flex items-center gap-3 px-4 py-3 rounded-full text-sm font-medium
        transition-colors duration-200
        ${isActive
          ? "bg-teal-100 text-teal-600 border-l-4 border-teal-300 "
          : "text-slate-700 hover:bg-teal-100 hover:text-teal-600"
        }
        `
      }
    >
      {Icon && (
        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${bgColor}`}>
            <Icon className={`w-4 h-4 ${iconColor}`} />
        </div>
        
      )}
      <span>{label}</span>
    </NavLink>
  );
};

export default SidebarItem;
