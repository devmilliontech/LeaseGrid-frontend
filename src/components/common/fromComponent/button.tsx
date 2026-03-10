import type { LucideIcon } from "lucide-react";
interface ButtonProps {
  label?: string;
  onClick: () => void;
  className?: string;
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  variant?: "outlined" | "contained";
  icon?: LucideIcon | undefined;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className = "",
  color = "primary",
  variant = "contained",
  icon: Icon,
  children,
}) => {

  const containedStyles = {
    primary: "bg-teal-500 text-white hover:bg-teal-600",
    secondary: "bg-slate-500 text-white hover:bg-slate-600",
    success: "bg-green-500 text-white hover:bg-green-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    warning: "bg-yellow-500 text-white hover:bg-yellow-600",
    info: "bg-orange-500 text-white hover:bg-orange-600",
  };

  const outlinedStyles = {
    primary: "border-2 border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white",
    secondary: "border-2 border-slate-500 text-slate-600 hover:bg-slate-500 hover:text-white",
    success: "border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white",
    danger: "border-2 border-red-500 text-red-600 hover:bg-red-500 hover:text-white",
    warning: "border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white",
    info: "border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white",
  };

  const styles = variant === "contained" ? containedStyles[color] : outlinedStyles[color];

  return (

    <button
      onClick={onClick}
      className={`${styles} ${className} text-sm font-semibold rounded cursor-pointer flex items-center justify-center`}
    >
      {Icon ? <span className="mr-2"><Icon className="h-4 w-4" /></span> : null}
      {children || label}
    </button>
  );
};