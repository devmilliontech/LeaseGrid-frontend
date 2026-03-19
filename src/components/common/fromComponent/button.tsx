import type { LucideIcon } from "lucide-react";

export interface ButtonProps {
  label?: string;
  onClick: () => void;
  className?: string;
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "purple";
  variant?: "outlined" | "contained";
  icon?: LucideIcon | undefined;
  children?: React.ReactNode;
  disabled?: boolean,
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className = "",
  color = "primary",
  variant = "contained",
  icon: Icon,
  children,
  disabled = false,
}) => {

  const containedStyles = {
    primary: "bg-teal-500 text-white hover:bg-teal-600 border-teal-500 border-2",
    secondary: "bg-slate-500 text-white hover:bg-slate-600 border-slate-500 border-2",
    success: "bg-green-500 text-white hover:bg-green-600 border-green-500 border-2",
    danger: "bg-red-500 text-white hover:bg-red-600 border-red-500 border-2",
    warning: "bg-yellow-500 text-white hover:bg-yellow-600 border-yellow-500 border-2",
    info: "bg-orange-500 text-white hover:bg-orange-600 border-orange-500 border-2",
    purple:"bg-purple-500 text-white hover:bg-purple-600 border-purple-500 border-2",
  };

  const outlinedStyles = {
    primary: "border-2 border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white",
    secondary: "border-2 border-slate-500 text-slate-600 hover:bg-slate-500 hover:text-white",
    success: "border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white",
    danger: "border-2 border-red-500 text-red-600 hover:bg-red-500 hover:text-white",
    warning: "border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white",
    info: "border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white",
    purple:"border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white",
  };

  const styles = variant === "contained" ? containedStyles[color] : outlinedStyles[color];

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles} ${className} text-sm font-semibold rounded cursor-pointer flex items-center justify-center`}
    >
      {Icon ? <span className="px-2"><Icon className="h-4 w-4" /></span> : null}
      {children || label}
    </button>
  );
};