import type { LucideIcon, } from "lucide-react";
export interface SidebarItemProps {
  label: string;
  to: string;
  icon?: LucideIcon;
  iconColor?: string;
  bgColor?:string,
}

export interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}
